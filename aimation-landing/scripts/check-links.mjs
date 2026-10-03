// Read-only HTTP check of links in generated pages plus optional browser-observed links.
// Usage: node scripts/check-links.mjs http://localhost:3118 [observed-links.json]
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = new URL(process.argv[2] || 'http://localhost:3118');
const app = resolve(root, '.next/server/app');
const targets = new Map();
function add(href, from) {
  if (!href || /^(mailto:|tel:|javascript:)/.test(href)) return;
  const url = new URL(href.replace(/&amp;/g, '&'), new URL(from, base));
  url.hash = '';
  if (!targets.has(url.href)) targets.set(url.href, new Set());
  targets.get(url.href).add(from);
}
function scan(folder) {
  for (const entry of readdirSync(folder, { withFileTypes: true })) {
    const path = resolve(folder, entry.name);
    if (entry.isDirectory()) { scan(path); continue; }
    if (!entry.name.endsWith('.html') || entry.name.startsWith('_')) continue;
    const route = '/' + relative(app, path).replace(/\.html$/, '').replace(/^de(?:\/|$)/, '').replace(/\/index$/, '');
    for (const match of readFileSync(path, 'utf8').matchAll(/<a\b[^>]*?\bhref="([^"]+)"/g)) add(match[1], route);
  }
}
scan(app);
if (process.argv[3]) for (const link of JSON.parse(readFileSync(resolve(process.argv[3]), 'utf8'))) add(link.href, '/');
const results = [];
const entries = [...targets];
for (let offset = 0; offset < entries.length; offset += 5) {
  await Promise.all(entries.slice(offset, offset + 5).map(async ([url, sources]) => {
    const local = new URL(url).origin === base.origin;
    try {
      let response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (response.status === 405) {
        response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
        await response.body?.cancel();
      }
      results.push({ url, local, status: response.status, destination: response.url, sources: [...sources] });
    } catch (error) { results.push({ url, local, error: error.message, sources: [...sources] }); }
  }));
}
results.sort((a,b) => a.url.localeCompare(b.url));
console.log(JSON.stringify(results, null, 2));
const broken = results.filter(r => r.local && (!r.status || r.status >= 400));
console.error(`${results.length} Ziele geprüft; ${broken.length} interne Fehler. Externe HTTP-Blockaden benötigen Sichtprüfung.`);
if (broken.length) process.exitCode = 1;
