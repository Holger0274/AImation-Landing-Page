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
  ['zeichnung-zu-baugruppe', 'baugruppe', 90],
  ['baugruppe-zu-montageanleitung', 'montageanleitung', 90],
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
  assert(main.includes('id="agentisches-entwicklungssystem"'));
  assert(main.includes('Ein agentisches') || main.includes('An agentic'));
  assert(llms.includes('#agentisches-entwicklungssystem'));
  assert.equal((main.match(/<details>/g) || []).length, 11, 'SSR FAQ answers');
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
    assert.equal(schema.uploadDate, ['baugruppe', 'montageanleitung'].includes(asset) ? '2026-11-11T00:00:00+01:00' : ['patent','cnc'].includes(asset) ? '2026-11-01T00:00:00+01:00' : asset === 'fem' ? '2026-10-10T00:00:00+02:00' : '2026-10-08T00:00:00+02:00');
    if (asset === 'fem') {
      assert(schema.name.startsWith('AI2CAE'));
      assert(html.includes('CAE-System') || html.includes('CAE system'));
      assert(html.includes('268,2 MPa') || html.includes('268.2 MPa'));
      assert(html.includes('id="ai2cae"'));
    }
    if (['patent', 'cnc', 'baugruppe'].includes(asset)) {
      assert(html.includes('Video mit Ton') || html.includes('German video with audio'));
      assert(html.includes('eigenständiges') || html.includes('standalone'));
      if (asset === 'cnc') assert(schema.name.startsWith('AI2CAM'));
    }
    if (['baugruppe', 'montageanleitung'].includes(asset)) {
      assert.equal(schema.hasPart.length, 5);
      for (const [index, clip] of schema.hasPart.entries()) {
        assert(clip.url.endsWith(`${path}?t=${clip.startOffset}#video`));
        assert(clip.endOffset > clip.startOffset && clip.endOffset <= duration);
        assert.equal(clip.endOffset, schema.hasPart[index + 1]?.startOffset ?? duration);
        assert(html.includes(`?t=${clip.startOffset}#video`), 'Visible chapter link');
      }
      assert(!html.includes('In Arbeit') && !html.includes('In production'), 'No obsolete preview');
      const relatedSlug = asset === 'baugruppe' ? 'baugruppe-zu-montageanleitung' : 'zeichnung-zu-baugruppe';
      assert(html.includes(`href="${locale}/ai2cad/${relatedSlug}"`), 'Connected parts link to each other');
      if (asset === 'montageanleitung') {
        assert(html.includes('Video mit Ton') || html.includes('German video with audio'));
        assert(html.includes('Fortsetzung von Teil 8') || html.includes('Continues part 8'));
        assert(html.includes('Passfeder') || html.includes('parallel key'));
        assert(html.includes('nicht freigegeben') || html.includes('not approved'));
      }
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
    for (const slug of ['patent-zu-3d', 'cnc-drehprogramm', 'zeichnung-zu-baugruppe', 'baugruppe-zu-montageanleitung']) assert(html.includes(`${locale}/ai2cad/${slug}`), `Discovery link: ${locale}${route}/${slug}`);
    assert(html.includes('id="weitere-entwicklungsfelder"'));
  }
}
assert(sitemap.includes('/ai2cad/baugruppe-zu-montageanleitung'), 'Part 9 in sitemap');
console.log('PASS: 18 video pages, discovery on home/workshop, native sources, 11 FAQs per locale, chapter clips, schema, sitemap, llms.txt and media.');
