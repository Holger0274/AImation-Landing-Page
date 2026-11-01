import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://localhost:3011';
const path = '/ki-elektrik/schaltplan-motorabgang';
async function get(path, options) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  assert.equal(response.status, 200, path);
  assert(!response.headers.get('x-robots-tag')?.includes('noindex'));
  return response;
}
const sitemap = await (await get('/sitemap.xml')).text();
const llms = await (await get('/llms.txt')).text();
const robots = await (await get('/robots.txt')).text();
assert(llms.includes(path));
for (const agent of ['OAI-SearchBot', 'PerplexityBot']) assert(robots.includes(`User-agent: ${agent}\nAllow: /`));
for (const locale of ['', '/en']) {
  const html = await (await get(locale + path)).text();
  const schema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1])).find(item => item['@type'] === 'VideoObject');
  assert.equal(schema.duration, 'PT112S');
  assert.equal(schema.uploadDate, '2026-11-01');
  assert(schema.url.endsWith(locale + path));
  assert.equal(schema.inLanguage, 'de');
  assert.equal(schema.hasPart.length, 5);
  for (const clip of schema.hasPart) {
    assert(clip.startOffset < clip.endOffset && clip.endOffset <= 112);
    assert(html.includes(`href="?t=${clip.startOffset}#video"`));
    assert(clip.url.endsWith(`?t=${clip.startOffset}#video`));
  }
  const player = html.match(/<video\b[^>]*>/)?.[0];
  assert(player?.includes('src="/videos/elektrik/schaltplan.mp4"'));
  assert(player.includes('controls=') && player.includes('preload="none"'));
  assert(!player.includes('autoPlay') && !player.includes('muted='));
  assert(html.includes('Elektrofachkraft') || html.includes('qualified electrical professional'));
  assert(html.includes('hrefLang="en"'));
  const entry = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(match => match[1].includes(`<loc>https://www.aimation.de${locale}${path}</loc>`));
  assert(entry?.[1].includes('<video:duration>112</video:duration>'));
  const timedHtml = await (await get(`${locale}${path}?t=70`)).text();
  assert(timedHtml.includes(`rel="canonical" href="https://www.aimation.de${locale}${path}"`));
  for (const page of ['/', '/entwicklungswerkstatt', '/ki-elektrik', '/facts/aimation']) {
    const source = await (await get(`${locale}${page === '/' ? '/' : page}`)).text();
    assert(source.includes(`${locale}${path}`), `Discovery link on ${locale}${page}`);
    if (page === '/' || page === '/entwicklungswerkstatt') {
      assert(source.indexOf('id="entwicklung-erleben"') < source.indexOf('id="weitere-entwicklungsfelder"'), 'CAD comes first');
      assert(source.indexOf('href="' + locale + '/ai2cad/patent-zu-3d"') < source.indexOf('id="elektrik-entdecken"'), 'Independent CAD extensions precede electrical series');
    }
  }
}
for (const [extension, type] of [['mp4', 'video/mp4'], ['webp', 'image/webp']]) {
  const media = await get(`/videos/elektrik/schaltplan.${extension}`, { method: 'HEAD' });
  assert(media.headers.get('content-type').includes(type));
}
const range = await fetch(new URL('/videos/elektrik/schaltplan.mp4', base), { headers: { Range: 'bytes=0-1023' } });
assert.equal(range.status, 206, 'Seeking requires byte ranges');
assert.equal((await range.arrayBuffer()).byteLength, 1024);
for (const agent of ['Googlebot', 'OAI-SearchBot', 'PerplexityBot']) {
  const html = await (await get(path, { headers: { 'User-Agent': agent } })).text();
  assert(html.includes('VideoObject') && html.includes('<video'));
}
console.log('PASS: electrical DE/EN routes, 5 chapter links, schema, canonical, sitemap, media ranges, discovery order and crawler-UA accessibility. Actual bot-IP access/indexing is not proven by this test.');
