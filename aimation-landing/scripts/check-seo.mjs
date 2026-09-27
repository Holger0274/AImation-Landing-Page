import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

// Read-only HTTP checks against a running preview (or the published site).
const base = new URL(process.argv[2] || 'http://localhost:3011');
const normalize = (value) => new URL(value, base).pathname.replace(/\/$/, '') || '/';
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2].replaceAll('&amp;', '&')]));
async function get(url) {
  const response = await fetch(new URL(url, base), { redirect: 'manual', signal: AbortSignal.timeout(20000) });
  return { response, html: await response.text() };
}
async function routes(dir, segments = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  const result = entries.some((e) => e.name === 'page.tsx') ? ['/' + segments.join('/')] : [];
  for (const e of entries) if (e.isDirectory() && !/^[\[_@.]/.test(e.name)) {
    result.push(...await routes(path.join(dir, e.name), e.name.startsWith('(') ? segments : [...segments, e.name]));
  }
  return result;
}
const sitemap = await get('/sitemap.xml');
assert.equal(sitemap.response.status, 200, 'sitemap status');
const entries = [...sitemap.html.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: m[1].match(/<loc>(.*?)<\/loc>/)?.[1],
  alternates: [...m[1].matchAll(/<xhtml:link\b[^>]*>/g)].map((m) => attrs(m[0])),
}));
const paths = entries.map((e) => normalize(e.loc));
assert.equal(new Set(paths).size, paths.length, 'duplicate sitemap URLs');
for (const route of await routes(path.resolve('app/[locale]'))) assert(paths.includes(normalize(route)), `missing route ${route}`);
assert(paths.includes('/blog/prozessdokumentation-ki-transkript'), 'missing blog article');
assert(!paths.includes('/en/ki-beratung-kmu'), 'untranslated English service indexed');
const rendered = new Map();
for (const entry of entries) {
  const pathname = normalize(entry.loc);
  const { response, html } = await get(pathname);
  assert.equal(response.status, 200, `${pathname}: status or redirect`);
  assert(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${pathname}: blocked by header`);
  // SVG <title> is an accessibility label, not the document's SEO title.
  const documentHtml = html.replace(/<svg\b[\s\S]*?<\/svg>/g, '');
  const titles = [...documentHtml.matchAll(/<title>([\s\S]*?)<\/title>/g)];
  assert.equal(titles.length, 1, `${pathname}: document title count`);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0]));
  const canonical = links.filter((link) => link.rel === 'canonical');
  assert.equal(canonical.length, 1, `${pathname}: canonical count`);
  assert.equal(normalize(canonical[0].href), pathname, `${pathname}: wrong canonical`);
  const lang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1];
  assert.equal(lang, pathname.startsWith('/en') ? 'en' : 'de', `${pathname}: html lang`);
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
  assert(meta.some((m) => m.name === 'description' && m.content?.length > 30), `${pathname}: description`);
  assert(!meta.some((m) => ['robots', 'googlebot'].includes(m.name) && /noindex/.test(m.content)), `${pathname}: noindex`);
  const hreflangs = links.filter((l) => l.rel === 'alternate' && l.hrefLang || l.rel === 'alternate' && l.hreflang);
  for (const link of hreflangs) assert(paths.includes(normalize(link.href)), `${pathname}: unavailable alternate ${link.href}`);
  if (!entry.alternates.length) assert.equal(hreflangs.length, 0, `${pathname}: inherited false alternate`);
  for (const alternate of entry.alternates) {
    assert(paths.includes(normalize(alternate.href)), `${pathname}: sitemap alternate absent`);
    assert(hreflangs.some((h) => normalize(h.href) === normalize(alternate.href)), `${pathname}: HTML/sitemap alternate mismatch`);
  }
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  for (const schema of schemas) {
    if (schema['@type'] === 'Organization' && schema.foundingDate) assert.equal(schema.foundingDate, '2026-02', `${pathname}: inconsistent founding date`);
    if (schema['@type'] === 'Person') assert(!schema.award?.includes('LinkedIn'), 'followers are not an award');
  }
  rendered.set(pathname, { html, links, meta, schemas, title: titles[0][1] });
  console.log(`OK ${pathname}`);
}
for (const route of ['/en/ki-beratung-kmu', '/en/use-cases', '/en/blog', '/en/blog/prozessdokumentation-ki-transkript']) {
  const { response } = await get(route + '?ref=seo-check');
  assert.equal(response.status, 307, `${route}: temporary fallback`);
  const target = new URL(response.headers.get('location'), base);
  assert.equal(target.pathname, route.slice(3));
  assert.equal(target.search, '?ref=seo-check');
}
for (const route of ['/', '/en']) {
  const page = rendered.get(route);
  assert(!page.meta.some((m) => /40%/.test(m.content || '')), 'obsolete metadata claim');
  assert(/product development|Produktentwicklung/.test(page.title), 'home positioning');
}
for (const route of ['/use-cases/excel-powerpoint-berichte', '/en/use-cases/excel-powerpoint-berichte']) {
  const page = rendered.get(route);
  const faq = page.schemas.find((s) => s['@type'] === 'FAQPage');
  assert.equal(faq.mainEntity.length, 3);
  const visible = page.html.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, '');
  for (const question of faq.mainEntity) {
    assert(visible.includes(question.name), 'FAQ question is not SSR visible');
    assert(visible.includes(question.acceptedAnswer.text), 'FAQ answer is not SSR visible');
  }
}
const robots = await get('/robots.txt');
assert.equal(robots.response.status, 200);
assert.match(robots.html, /User-agent: OAI-SearchBot\nAllow: \/\nDisallow: \/api\//);
for (const group of robots.html.split('\n\n').filter((s) => s.startsWith('User-agent:'))) assert(group.includes('Disallow: /api/'));
console.log(`PASS: ${paths.length} URLs, canonicals, languages, sitemap, schema, SSR FAQs, redirects and robots.`);
