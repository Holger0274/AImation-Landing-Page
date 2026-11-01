const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(readFileSync('lib/analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
function setup({ hostname = 'www.aimation.de', disabled = null, dnt = '0', gpc = false, storageError = false, track } = {}) {
  const exports = {};
  const calls = [];
  const window = { location: { hostname }, localStorage: { getItem() { if (storageError) throw Error('blocked'); return disabled; } }, umami: { track: track || ((...args) => { calls.push(args); return Promise.resolve(); }) } };
  vm.runInNewContext(source, { exports, window, navigator: { doNotTrack: dnt, globalPrivacyControl: gpc }, URL, URLSearchParams, setTimeout });
  return { api: exports, calls };
}
test('campaign attribution survives; personal and arbitrary URL parameters do not', () => {
  const { api } = setup();
  assert.equal(api.analyticsUrl('/?utm_source=emailsignatur&utm_medium=email&email=person%40example.com&token=secret#kontakt'), '/?utm_source=emailsignatur&utm_medium=email');
  assert.equal(api.analyticsUrl('/?utm_campaign=person%40example.com'), '/');
  assert.equal(api.analyticsUrl('https://example.com/private?token=secret', true), 'https://example.com');
  assert.equal(api.analyticsUrl('mailto:person@example.com', true), '');
});
test('event payload allowlist removes identifiers and form fields while retaining video and campaign', () => {
  const { api } = setup();
  const clean = api.beforeAnalyticsSend('event', { website: 'id', url: '/ai2cad?utm_source=linkedin&name=person', referrer: 'https://example.com/?email=private', name: 'video-start', id: 'person', data: { video: 'ai2cad/01', email: 'person@example.com', name: 'Person' } });
  assert.equal(clean.url, '/ai2cad?utm_source=linkedin');
  assert.equal(clean.referrer, 'https://example.com');
  assert.equal(clean.data.video, 'ai2cad/01');
  assert.equal(clean.data.email, undefined);
  assert.equal(clean.id, undefined);
  assert.equal(api.beforeAnalyticsSend('identify', { id: 'person' }), false);
});
for (const scenario of [{ hostname: 'localhost' }, { hostname: 'preview.vercel.app' }, { disabled: '1' }, { dnt: '1' }, { gpc: true }, { storageError: true }]) {
  test(`no analytics for ${JSON.stringify(scenario)}`, async () => {
    const { api, calls } = setup(scenario);
    assert.equal(api.analyticsAllowed(), false);
    assert.equal(api.beforeAnalyticsSend('event', { url: '/' }), false);
    await api.trackEvent('contact-open');
    assert.equal(calls.length, 0);
  });
}
test('contact remains functional when analytics fails or never resolves', async () => {
  await setup({ track: () => { throw Error('blocked'); } }).api.trackEvent('contact-submit');
  await setup({ track: () => Promise.reject(Error('offline')) }).api.trackEvent('contact-submit');
  const start = Date.now();
  await setup({ track: () => new Promise(() => {}) }).api.trackEvent('contact-submit');
  assert.ok(Date.now() - start < 1000);
});
test('production events are sent once by the helper', async () => {
  const { api, calls } = setup();
  await api.trackEvent('contact-open');
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], 'contact-open');
});
