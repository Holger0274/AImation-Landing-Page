import assert from 'node:assert/strict';

// Read-only regression checks: crawler-visible videos, source selection,
// language alternates and sitemap must survive changes to the player UI.
const base = process.argv[2] || 'http://localhost:3010';
const chapters = [
  ['prompt-zu-cad', 'prompt', 90],
  ['handskizze-zu-cad', 'skizze', 90],
  ['konstruktion-pruefen', 'drehteil', 122],
  ['technische-zeichnung', 'zeichnung', 140],
];
async function get(path, options) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  assert.equal(response.status, 200, path);
  return response;
}
const sitemap = await (await get('/sitemap.xml')).text();
const llms = await (await get('/llms.txt')).text();
assert(sitemap.includes('xmlns:video='));
assert.equal((sitemap.match(/<video:video>/g) || []).length, 8);
for (const locale of ['', '/en']) {
  const home = await (await get(`${locale}/ai2cad`)).text();
  const main = home.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main && /Large Language Model|large language model/.test(main));
  assert(!/FreeCAD|Claude|TechDraw/i.test(main), 'Anonymised page copy');
  assert(home.includes('FAQPage'), 'FAQ schema');
  assert.equal((main.match(/<details>/g) || []).length, 6, 'SSR FAQ answers');
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
console.log('PASS: 8 chapter pages, native video sources, 6 FAQs per locale, video schema, sitemap, llms.txt and media.');
