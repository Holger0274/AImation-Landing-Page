// Regression tests run the actual route with mocked destinations. No network or database writes.
// Run: node --test scripts/lead-route.test.cjs
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const zod = require('zod');

const source = ts.transpileModule(
  readFileSync(resolve(__dirname, '../app/api/lead/route.ts'), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } },
).outputText;

function loadRoute({ database = true, webhook = undefined } = {}) {
  const calls = { database: 0, webhook: 0 };
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    require(name) {
      if (name === 'zod') return zod;
      if (name === 'next/server') return { NextResponse: { json: (body, init) => ({ body, status: init.status }) } };
      if (name === '@/lib/supabase') return { createServerClient: () => ({ from: () => ({ insert: async () => {
        calls.database++;
        if (database === 'throw') throw new Error('Database unavailable');
        return { error: database ? null : new Error('Insert failed') };
      } }) }) };
      throw new Error(`Unexpected dependency: ${name}`);
    },
    process: { env: { N8N_WEBHOOK_URL: webhook === undefined ? undefined : 'https://example.invalid/webhook' } },
    console: { log() {}, warn() {}, error() {} },
    AbortSignal,
    fetch: async () => {
      calls.webhook++;
      if (webhook === 'throw') throw new Error('Network unavailable');
      return { ok: webhook, status: webhook ? 200 : 500 };
    },
  });
  return { post: exports.POST, calls };
}

const lead = { name: 'Test Person', email: 'test@example.invalid', datenschutz: true };
const request = data => ({ json: async () => data, headers: { get: () => null } });

for (const [name, options, status] of [
  ['database receipt without webhook', { database: true }, 200],
  ['no destination accepted lead', { database: false }, 503],
  ['database throws without webhook', { database: 'throw' }, 503],
  ['webhook receipt despite database failure', { database: false, webhook: true }, 200],
  ['both destinations fail', { database: false, webhook: false }, 503],
  ['network failure and database failure', { database: false, webhook: 'throw' }, 503],
  ['database receipt despite webhook failure', { database: true, webhook: false }, 200],
  ['database receipt despite network failure', { database: true, webhook: 'throw' }, 200],
]) {
  test(name, async () => {
    const { post } = loadRoute(options);
    const response = await post(request(lead));
    assert.equal(response.status, status);
    assert.equal(response.body.success, status === 200);
  });
}

for (const data of [{ ...lead, datenschutz: false }, { ...lead, name: '  ' }, { ...lead, email: 'invalid' }]) {
  test(`reject invalid input before delivery: ${JSON.stringify(data)}`, async () => {
    const { post, calls } = loadRoute({ webhook: true });
    const response = await post(request(data));
    assert.equal(response.status, 400);
    assert.deepEqual(calls, { database: 0, webhook: 0 });
  });
}
