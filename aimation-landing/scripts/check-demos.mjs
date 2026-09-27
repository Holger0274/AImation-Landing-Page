import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Read-only checks. Run against a production preview: node scripts/check-demos.mjs
const base = new URL(process.argv[2] || 'http://localhost:3011');
const applicationIds = ['pm-demonstrator', 'varianthub', 'skillmatrix'];
const ids = [...applicationIds, 'development-landscape'];
const get = (path, options = {}) => fetch(new URL(path, base), { redirect: 'manual', signal: AbortSignal.timeout(20000), ...options });
for (const route of ['/', '/en']) {
  const response = await get(route);
  assert.equal(response.status, 200, `${route}: status`);
  const html = (await response.text()).replace(/<script\b[\s\S]*?<\/script>/g, '');
  assert(html.includes('id="selbst-gebaut"'), 'showcase anchor missing');
  assert.equal((html.match(/role="tab"/g) || []).length, 3, 'three application tabs');
  assert.equal((html.match(/role="tabpanel"/g) || []).length, 3, 'three application panels');
  assert(!/<video\b|<source\b/.test(html), 'video media must not mount before a play click');
  for (const id of ['5why', 'fem', 'ideas']) assert(html.includes(`id="werkzeug-${id}"`), `existing example ${id} missing`);
  for (const id of applicationIds) assert(html.includes(`id="demo-tab-${id}"`), `demo ${id} missing`);
  assert(html.includes('id="development-landscape-video"'), 'landscape video missing');
  assert(html.includes('id="landscape-entdecken"'), 'interactive landscape anchor missing');
  assert(html.includes('href="#landscape-entdecken"'), 'video-to-map link missing');
  assert(html.includes('02:20'), 'landscape duration missing');
  assert(html.indexOf('id="development-landscape-video"') < html.indexOf('id="landscape-entdecken"'), 'video must precede the interactive map');
  console.log(`OK ${route}: demos, existing projects, no initial video element`);
}
for (const id of ids) {
  const response = await get(`/videos/demos/${id}.mp4`, { headers: { Range: 'bytes=0-63' } });
  assert.equal(response.status, 206, `${id}: byte ranges and no locale redirect`);
  assert.match(response.headers.get('content-type') || '', /video\/mp4/);
  assert.match(response.headers.get('content-range') || '', /^bytes 0-63\//);
  assert.equal((await response.arrayBuffer()).byteLength, 64);
  const poster = await get(`/videos/demos/${id}.webp`, { method: 'HEAD' });
  assert.equal(poster.status, 200, `${id}: poster status`);
  assert.match(poster.headers.get('content-type') || '', /image\/webp/);
  // Inspect MP4 top-level atoms: the index must precede media for quick starts.
  const data = await readFile(new URL(`../public/videos/demos/${id}.mp4`, import.meta.url));
  const atoms = [];
  for (let offset = 0; offset + 8 <= data.length;) {
    let size = data.readUInt32BE(offset);
    atoms.push(data.toString('ascii', offset + 4, offset + 8));
    if (size === 1) size = Number(data.readBigUInt64BE(offset + 8));
    if (!size) break;
    assert(size >= 8 && offset + size <= data.length, `${id}: invalid MP4 atom`);
    offset += size;
  }
  assert(atoms.includes('moov') && atoms.indexOf('moov') < atoms.indexOf('mdat'), `${id}: faststart index`);
  console.log(`OK ${id}: playable delivery, poster, faststart (${(data.length / 1e6).toFixed(1)} MB)`);
}
console.log('PASS: DE/EN markup, landscape video and map, all six applications, media routes, byte ranges and streaming indexes.');
