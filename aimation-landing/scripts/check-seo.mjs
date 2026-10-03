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
  assert(!/buzzword[-\s]*bingo/i.test(documentHtml), `${pathname}: removed footer slogan returned`);
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
const topicRoutes = ['/ki-betriebssystem', '/ki-produktentwicklung', '/schulungen/microsoft-365-copilot', '/use-cases/variantenmanagement', '/use-cases/skillmatrix-entwicklung', '/use-cases/projektsteuerung-entwicklung', '/use-cases/excel-powerpoint-berichte'];
for (const route of topicRoutes.flatMap(route => [route, '/en' + route])) {
  const page = rendered.get(route);
  assert(page, `${route}: missing from sitemap`);
  assert.equal([...page.html.matchAll(/<h1\b/g)].length, 1, `${route}: h1 count`);
  const faq = page.schemas.find((s) => s['@type'] === 'FAQPage');
  assert.equal(faq?.mainEntity.length, route.includes('ki-betriebssystem') ? 5 : route.includes('microsoft-365-copilot') ? 4 : 3, `${route}: FAQ count`);
  const visible = page.html.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, '');
  for (const question of faq.mainEntity) {
    assert(visible.includes(question.name), 'FAQ question is not SSR visible');
    assert(visible.includes(question.acceptedAnswer.text), 'FAQ answer is not SSR visible');
  }
  assert(page.schemas.some(s => s['@type'] === 'BreadcrumbList'), `${route}: missing breadcrumb schema`);
  if (/variantenmanagement|skillmatrix-entwicklung|projektsteuerung-entwicklung/.test(route)) {
    assert.match(page.html, /\/videos\/demos\//, `${route}: missing video poster`);
    assert(!/<video\b/.test(page.html), `${route}: video must wait for a play click`);
    assert.match(page.html, /id="praxisvergleich"/, `${route}: missing evaluation plan`);
    assert.match(page.html, /id="ki-integration"/, `${route}: missing application-specific AI and data explanation`);
    assert.match(page.html, /noch keine Messergebnisse|results not yet measured/, `${route}: evaluation plan must not imply measured results`);
  }
  if (route.includes('projektsteuerung-entwicklung')) {
    assert.match(page.html, /id="projektbeispiel"/, `${route}: missing project workflow visual`);
    assert.match(page.html, /kein Kundenfall|not a customer case/, `${route}: illustrative workflow must be labelled`);
  }
}
for (const [route, page] of rendered) {
  if (page.html.includes('<footer')) {
    assert.match(page.html, /id="implementation-principle-title"/, `${route}: missing shared implementation principle`);
    assert.match(page.html, /deterministische Automatisierung Vorrang|deterministic automation takes priority/, `${route}: missing rules-first priority`);
    assert.match(page.html, /Datenbankanbindungen und Änderungshistorien|database connections and change histories/, `${route}: missing database and history principle`);
  }
}
const knowledge = rendered.get('/use-cases/knowledge-graph-management');
assert.equal([...knowledge.html.matchAll(/<h1\b/g)].length, 1, 'knowledge page: h1 count');
assert.equal(knowledge.schemas.find(s => s['@type'] === 'FAQPage')?.mainEntity.length, 3, 'knowledge page: FAQ schema');
assert(knowledge.schemas.some(s => s['@type'] === 'BreadcrumbList'), 'knowledge page: breadcrumb schema');
assert.match(knowledge.html, /noch keine Messergebnisse/, 'knowledge page: unmeasured status');
assert.match(knowledge.html, /Interner Prototyp mit eigenen Unterlagen/, 'knowledge page: prototype scope');
const knowledgeVisible = knowledge.html.replace(/<script\b[\s\S]*?<\/script>/g, '');
assert(!/Jede Frage in Sekunden|Nie mehr Wissen verlieren/.test(knowledgeVisible), 'knowledge page: unsupported visible guarantee');
const patent = rendered.get('/use-cases/patentrecherche-ki');
assert.equal([...patent.html.matchAll(/<h1\b/g)].length, 1, 'patent page: h1 count');
assert.equal(patent.schemas.find(s => s['@type'] === 'FAQPage')?.mainEntity.length, 3, 'patent page: FAQ schema');
assert(patent.schemas.some(s => s['@type'] === 'BreadcrumbList'), 'patent page: breadcrumb schema');
const patentVisible = patent.html.replace(/<script\b[\s\S]*?<\/script>/g, '');
assert.match(patentVisible, /Interner Recherche-Prototyp/, 'patent page: prototype scope');
assert.match(patentVisible, /noch keine Messergebnisse/, 'patent page: unmeasured status');
assert.match(patentVisible, /Vorrecherche ist keine Nutzungsfreigabe/, 'patent page: scope boundary');
assert.match(patentVisible, /Änderungshistorie/, 'patent page: history');
assert(!/Stunden statt Tage|Prior Art vollständig im Blick/.test(patentVisible), 'patent page: unsupported guarantee');
const requests = rendered.get('/use-cases/email-klassifizierung');
assert.equal([...requests.html.matchAll(/<h1\b/g)].length, 1, 'requests page: h1 count');
assert.equal(requests.schemas.find(s => s['@type'] === 'FAQPage')?.mainEntity.length, 3, 'requests page: FAQ schema');
assert(requests.schemas.some(s => s['@type'] === 'BreadcrumbList'), 'requests page: breadcrumb schema');
const requestsVisible = requests.html.replace(/<script\b[\s\S]*?<\/script>/g, '');
assert.match(requestsVisible, /Interner Workflow-Prototyp/, 'requests page: prototype scope');
assert.match(requestsVisible, /noch keine Messergebnisse/, 'requests page: unmeasured status');
assert.match(requestsVisible, /Änderungshistorie/, 'requests page: history');
assert.match(requestsVisible, /Automatischer Versand ist nicht Bestandteil/, 'requests page: human approval boundary');
assert(!/mehrere Personalstellen|zuverlässiger als manuelle Sortierung|~60%|Antworten am selben Tag/.test(requestsVisible), 'requests page: unsupported guarantee');
const scouting = rendered.get('/use-cases/technologie-scouting');
assert.equal([...scouting.html.matchAll(/<h1\b/g)].length, 1, 'scouting page: h1 count');
assert.equal(scouting.schemas.find(s => s['@type'] === 'FAQPage')?.mainEntity.length, 3, 'scouting page: FAQ schema');
assert(scouting.schemas.some(s => s['@type'] === 'BreadcrumbList'), 'scouting page: breadcrumb schema');
const scoutingVisible = scouting.html.replace(/<script\b[\s\S]*?<\/script>/g, '');
assert.match(scoutingVisible, /Interner Scouting-Prototyp/, 'scouting page: prototype scope');
assert.match(scoutingVisible, /noch keine Messergebnisse/, 'scouting page: unmeasured status');
assert.match(scoutingVisible, /Änderungshistorie/, 'scouting page: history');
assert.match(scoutingVisible, /Die technische Bewertung bleibt bei Ihrem Team/, 'scouting page: human decision boundary');
assert(!/wöchentlich auf Ihrem Tisch|ohne Suchaufwand|bevor die Konkurrenz/.test(scoutingVisible), 'scouting page: unsupported guarantee');
const meetings = rendered.get('/use-cases/meeting-transkript-analyse');
assert.equal([...meetings.html.matchAll(/<h1\b/g)].length, 1, 'meetings page: h1 count');
assert.equal(meetings.schemas.find(s => s['@type'] === 'FAQPage')?.mainEntity.length, 3, 'meetings page: FAQ schema');
assert(meetings.schemas.some(s => s['@type'] === 'BreadcrumbList'), 'meetings page: breadcrumb schema');
const meetingsVisible = meetings.html.replace(/<script\b[\s\S]*?<\/script>/g, '');
assert.match(meetingsVisible, /Bei AImation im Aufbau/, 'meetings page: build status');
assert.match(meetingsVisible, /noch keine Messergebnisse/, 'meetings page: unmeasured status');
assert.match(meetingsVisible, /Änderungshistorie/, 'meetings page: history');
assert.match(meetingsVisible, /menschlichen Freigabe/, 'meetings page: human approval boundary');
assert(!/80% davon gehen verloren|bevor der Raum leer ist|Zeitersparnis gegenüber/.test(meetingsVisible), 'meetings page: unsupported guarantee');
for (const [from, targets] of [
  ['/', ['/ki-produktentwicklung', '/use-cases/projektsteuerung-entwicklung']],
  ['/ki-schulungen-mittelstand', ['/schulungen/microsoft-365-copilot']],
  ['/use-cases', ['/use-cases/variantenmanagement', '/use-cases/skillmatrix-entwicklung', '/use-cases/projektsteuerung-entwicklung', '/use-cases/technologie-scouting', '/use-cases/meeting-transkript-analyse']],
]) for (const target of targets) assert(rendered.get(from).html.includes(`href="${target}"`), `${from}: missing contextual link to ${target}`);
const robots = await get('/robots.txt');
assert.equal(robots.response.status, 200);
assert.match(robots.html, /User-agent: OAI-SearchBot\nAllow: \/\nDisallow: \/api\//);
for (const group of robots.html.split('\n\n').filter((s) => s.startsWith('User-agent:'))) assert(group.includes('Disallow: /api/'));
console.log(`PASS: ${paths.length} URLs, canonicals, languages, sitemap, schema, SSR FAQs, redirects and robots.`);
