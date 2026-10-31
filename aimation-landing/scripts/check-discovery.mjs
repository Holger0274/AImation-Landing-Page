import assert from 'node:assert/strict';
const base = new URL(process.argv[2] || 'http://localhost:3011');
const paths = ['/entwicklungswerkstatt', '/ki-anwendungsfaelle', '/wirtschaftlichkeit', '/zusammenarbeit', '/ueber-holger-peschke'];
const cache = new Map();
async function get(path) {
  if (!cache.has(path)) cache.set(path, (async () => {
    const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, path);
    return (await response.text()).replace(/<script\b(?![^>]*type="application\/ld\+json")[\s\S]*?<\/script>/g, '');
  })());
  return cache.get(path);
}
let anchors = 0;
for (const prefix of ['', '/en']) {
  const home = await get(prefix || '/');
  assert(home.indexOf('id="partnerschaften"') > home.indexOf('id="entwicklung-erleben"') && home.indexOf('id="partnerschaften"') < home.indexOf('id="faq"'), 'Memberships after examples and before FAQs');
  for (const name of ['Autodesk Developer Network', 'U-KNOW.AI', 'KI Bundesverband', 'Beraterkompetenz Oberfranken']) assert(home.includes(name), `Homepage network: ${name}`);
  assert(home.indexOf('id="founder-heading"') < home.indexOf('id="entwicklung-erleben"'), 'Founder before demos');
  assert(home.indexOf('holger-linkedin-proof-2026-10-03') < home.indexOf('id="entwicklung-erleben"'), 'LinkedIn proof before demos');
  assert(!/<video\b/.test(home), 'No initial homepage video download');
  for (const path of paths) assert(home.includes(`href="${prefix}${path}`), `Homepage entry to ${path}`);
  for (const path of ['', ...paths]) {
    const route = `${prefix}${path}` || '/';
    const html = await get(route);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one H1`);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${route}: unique IDs`);
    if (path) {
      const json = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      assert(json.some(item => item['@graph']?.some(node => node['@type'] === 'BreadcrumbList')), `${route}: breadcrumb schema`);
      assert(html.includes(`href="https://www.aimation.de${route}"`), `${route}: canonical`);
      assert(/hreflang="en"/i.test(html), `${route}: translation advertised`);
    }
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const url = new URL(href.replaceAll('&amp;', '&'), new URL(route, base));
      if (url.origin !== base.origin || !url.hash) continue;
      const target = await get(url.pathname);
      const id = decodeURIComponent(url.hash.slice(1));
      assert(target.includes(`id="${id}"`), `${route}: broken anchor ${href}`);
      anchors++;
    }
    console.log(`OK ${route}: headings, anchors, discovery and metadata`);
  }
}
console.log(`PASS: 12 pages, ${anchors} fragment links and all five homepage entry points.`);
