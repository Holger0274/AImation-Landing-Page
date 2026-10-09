import assert from 'node:assert/strict';

// Check crawler-visible playback and discovery, independently of client hydration.
const base = process.argv[2] || 'http://localhost:3010';
const videos = [
  ['pm-demonstrator', 90, '/use-cases/projektsteuerung-entwicklung'],
  ['varianthub', 90, '/use-cases/variantenmanagement'],
  ['skillmatrix', 90, '/use-cases/skillmatrix-entwicklung'],
  ['development-landscape', 140, '/'],
];
async function get(path, options) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  assert.equal(response.status, 200, path);
  return response;
}
const sitemap = await (await get('/sitemap.xml')).text();
const llms = await (await get('/llms.txt')).text();
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].filter(match => /<loc>[^<]*\/videos\//.test(match[1]));
assert.equal(entries.length, 8);
for (const locale of ['', '/en']) {
  const home = await (await get(`${locale}/`)).text();
  for (const [id, duration, related] of videos) {
    const path = `${locale}/videos/${id}`;
    assert(home.includes(`href="${path}"`), `Homepage link: ${path}`);
    const html = await (await get(path)).text();
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const schema = scripts.find(item => item['@type'] === 'VideoObject');
    assert(schema, 'SSR VideoObject');
    assert.equal(schema.duration, `PT${duration}S`);
    assert.equal(schema.inLanguage, 'de');
    assert.equal(schema.uploadDate, '2026-09-27');
    assert(schema.url.endsWith(path));
    assert(schema.contentUrl.endsWith(`/videos/demos/${id}.mp4`));
    assert(html.includes(`<link rel="canonical" href="${schema.url}"`));
    assert(/hrefLang="en"/i.test(html));
    const player = html.match(/<video\b[^>]*>/)?.[0];
    assert(player?.includes(`src="/videos/demos/${id}.mp4"`), 'Video accessible without clicks or JavaScript');
    assert(player.includes('controls='));
    assert(player.includes('preload="none"'));
    assert(!/autoplay/i.test(player));
    const entry = entries.find(match => match[1].includes(`<loc>${schema.url}</loc>`));
    assert(entry?.[1].includes(`<video:content_loc>${schema.contentUrl}</video:content_loc>`));
    assert(llms.includes(`/videos/${id}`));
    if (related !== '/') assert((await (await get(`${locale}${related}`)).text()).includes(`href="${path}"`));
    for (const suffix of ['mp4', 'webp']) await get(`/videos/demos/${id}.${suffix}`, { method: 'HEAD' });
    console.log(`OK ${path}`);
  }
}
assert.equal((await fetch(new URL('/videos/does-not-exist', base))).status, 404);
console.log('PASS: 8 watch pages, native playback, schema, sitemap, homepage and use-case links, media and 404.');
