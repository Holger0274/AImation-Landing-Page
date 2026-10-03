// Exercise the actual route with a simulated provider. No network or emails.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const source = readFileSync(resolve(__dirname, '../../app/api/send-roi-results/route.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const data = {
  email: 'test@example.com', name: 'Test',
  input: { useCase: 'knowledge', numEmployees: 10, hourlyWage: 60, weeklyHours: 2, setupCost: 4900, monthlyCost: 200, timeframMonths: 12, rampUpMonths: 1 },
  results: { weeklySavings: 1200, totalSavings: 52000, totalInvestment: 7300, netBenefit: 44700, roiPercent: 612, amortizationMonths: 2 },
};
async function invoke(reply, configured = true) {
  const calls = [];
  const exports = {};
  vm.runInNewContext(compiled, {
    exports, process: { env: configured ? { RESEND_API_KEY: 'simulated', RESEND_TO_EMAIL: 'owner@example.com' } : {} },
    console: { error() {}, log() {}, warn() {} },
    require(name) {
      if (name === 'next/server') return { NextResponse: { json: (body, options) => Response.json(body, options) } };
      if (name === 'resend') return { Resend: class { emails = { send: async payload => { calls.push(payload); return reply; } }; } };
      throw new Error(`Unexpected dependency: ${name}`);
    },
  });
  const response = await exports.POST({ json: async () => data });
  return { status: response.status, body: await response.json(), calls };
}
test('provider rejection fails and does not notify the owner', async () => {
  const result = await invoke({ data: null, error: { message: 'Sender not verified' } });
  assert.equal(result.status, 502); assert.notEqual(result.body.success, true); assert.equal(result.calls.length, 1);
});
test('missing provider message ID is not success', async () => {
  const result = await invoke({ data: null, error: null });
  assert.equal(result.status, 502); assert.equal(result.calls.length, 1);
});
test('accepted email returns its ID and sends the configured owner copy', async () => {
  const result = await invoke({ data: { id: 'accepted-message' }, error: null });
  assert.equal(result.status, 200); assert.equal(result.body.success, true); assert.equal(result.body.emailId, 'accepted-message'); assert.equal(result.calls.length, 2);
});
test('missing configuration does not call the provider', async () => {
  const result = await invoke(null, false);
  assert.equal(result.status, 500); assert.equal(result.calls.length, 0);
});
