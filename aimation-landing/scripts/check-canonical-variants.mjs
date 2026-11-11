import assert from 'node:assert/strict';

// Reproduce the GSC timestamp case and verify the raw initial HTML, without JS.
const base = new URL(process.argv[2] || 'http://localhost:3011');
const origin = 'https://www.aimation.de';
const cases = [
  ['/ki-elektrik/kurzschluss-wendeschuetz?t=96', '/ki-elektrik/kurzschluss-wendeschuetz'],
  ['/ki-elektrik/kurzschluss-wendeschuetz?t=12', '/ki-elektrik/kurzschluss-wendeschuetz'],
  ['/en/ki-elektrik/kurzschluss-wendeschuetz?t=96', '/en/ki-elektrik/kurzschluss-wendeschuetz'],
  ['/ai2cad/zeichnung-zu-baugruppe?t=28', '/ai2cad/zeichnung-zu-baugruppe'],
  ['/ai2cad/baugruppe-zu-montageanleitung?t=53', '/ai2cad/baugruppe-zu-montageanleitung'],
  ['/en/ki-schulungen-mittelstand?utm_source=canonical-check', '/en/ki-schulungen-mittelstand'],
];
const agents = [
  ['browser', 'Mozilla/5.0'],
  ['Googlebot', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'],
  ['OAI-SearchBot', 'OAI-SearchBot/1.3; +https://openai.com/searchbot'],
];
for (const [requestPath, canonicalPath] of cases) {
  for (const [name, userAgent] of agents) {
    const label = `${name} ${requestPath}`;
    const response = await fetch(new URL(requestPath, base), {
      headers: { 'User-Agent': userAgent },
      redirect: 'manual',
      signal: AbortSignal.timeout(20000),
    });
    assert.equal(response.status, 200, `${label}: status`);
    assert(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${label}: header noindex`);
    const html = await response.text();
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
    assert(head, `${label}: missing head`);
    const canonicals = [...head.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/g)];
    assert.equal(canonicals.length, 1, `${label}: canonical must be in initial head`);
    assert.equal(canonicals[0][0].match(/\bhref="([^"]+)"/)?.[1], origin + canonicalPath, `${label}: canonical target`);
    assert.equal([...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/g)].length, 1, `${label}: duplicate canonical`);
    assert(!/<meta\b[^>]*name="(?:robots|googlebot)"[^>]*content="[^"]*noindex/i.test(html), `${label}: meta noindex`);
    console.log(`OK ${label}`);
  }
}
console.log(`PASS: ${cases.length * agents.length} parameterized requests expose one clean canonical in the initial head.`);
