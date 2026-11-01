import assert from 'node:assert/strict';

// Read-only regression checks: crawler-visible videos, source selection,
// language alternates and sitemap must survive changes to the player UI.
const base = process.argv[2] || 'http://localhost:3010';
const chapters = [
  ['prompt-zu-cad', 'prompt', 90],
  ['handskizze-zu-cad', 'skizze', 90],
  ['konstruktion-pruefen', 'drehteil', 122],
  ['technische-zeichnung', 'zeichnung', 140],
  ['fem-nachweis', 'fem', 151],
  ['patent-zu-3d', 'patent', 162],
  ['cnc-drehprogramm', 'cnc', 142],
];
async function get(path, options) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  assert.equal(response.status, 200, path);
  return response;
}
const sitemap = await (await get('/sitemap.xml')).text();
const llms = await (await get('/llms.txt')).text();
assert(sitemap.includes('xmlns:video='));
const ai2cadEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].filter(match => /<loc>[^<]*\/ai2cad\//.test(match[1]));
assert.equal(ai2cadEntries.length, chapters.length * 2);
assert(ai2cadEntries.every(match => match[1].includes('<video:video>')));
for (const locale of ['', '/en']) {
  const home = await (await get(`${locale}/ai2cad`)).text();
  const main = home.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main && /Large Language Model|large language model/.test(main));
  assert(!/FreeCAD|Claude|TechDraw/i.test(main), 'Anonymised page copy');
  assert(home.includes('FAQPage'), 'FAQ schema');
  assert.equal((main.match(/<details>/g) || []).length, 8, 'SSR FAQ answers');
  for (const [slug, asset, duration] of chapters) {
    const path = `${locale}/ai2cad/${slug}`;
    assert(home.includes(path), `Visible chapter link: ${path}`);
    assert(sitemap.includes(path), `Sitemap entry: ${path}`);
    assert(llms.includes(`/ai2cad/${slug}`));
    const html = await (await get(path)).text();
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const schema = scripts.find(item => item['@type'] === 'VideoObject');
    assert(schema, 'Server-rendered VideoObject');
    assert(schema.contentUrl.endsWith(`/videos/ai2cad/${asset}.mp4`));
    assert.equal(schema.duration, `PT${duration}S`);
    assert.equal(schema.uploadDate, ['patent','cnc'].includes(asset) ? '2026-11-01' : asset === 'fem' ? '2026-10-10' : '2026-10-08');
    if (asset === 'fem') {
      assert(schema.name.startsWith('AI2CAE'));
      assert(html.includes('CAE-System') || html.includes('CAE system'));
      assert(html.includes('268,2 MPa') || html.includes('268.2 MPa'));
      assert(html.includes('id="ai2cae"'));
    }
    if (['patent', 'cnc'].includes(asset)) {
      assert(html.includes('Video mit Ton') || html.includes('German video with audio'));
      assert(html.includes('eigenständiges') || html.includes('standalone'));
      if (asset === 'cnc') assert(schema.name.startsWith('AI2CAM'));
    }
    assert(schema.url.endsWith(path));
    const video = html.match(/<video\b[^>]*>/)?.[0];
    assert(video?.includes(`src="/videos/ai2cad/${asset}.mp4"`), 'Video source available without JS or clicks');
    assert(video.includes('preload="none"'), 'Avoid loading large media on page visit');
    assert(video.includes('controls='), 'Native playback without JS');
    assert(/<link\b[^>]*hrefLang="en"[^>]*href=/i.test(html));
    for (const suffix of ['mp4', 'webp']) await get(`/videos/ai2cad/${asset}.${suffix}`, { method: 'HEAD' });
    console.log(`OK ${path}`);
  }
}
for (const locale of ['', '/en']) {
  for (const route of ['', '/entwicklungswerkstatt']) {
    const html = await (await get(`${locale}${route || '/'}`)).text();
    for (const slug of ['patent-zu-3d', 'cnc-drehprogramm']) assert(html.includes(`${locale}/ai2cad/${slug}`), `Discovery link: ${locale}${route}/${slug}`);
    assert(html.includes('id="weitere-entwicklungsfelder"'));
  }
}
console.log('PASS: 14 video pages, independent examples on home/workshop, native sources, 8 FAQs per locale, schema, sitemap, llms.txt and media.');
