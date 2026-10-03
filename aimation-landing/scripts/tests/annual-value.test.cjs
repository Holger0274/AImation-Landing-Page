const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
function load(relativePath, dependencies = {}) {
  const exports = {};
  const source = ts.transpileModule(readFileSync(resolve(__dirname, '../..', relativePath), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(source, { exports, require(name) {
    if (!(name in dependencies)) throw new Error(`Unexpected dependency: ${name}`);
    return dependencies[name];
  } });
  return exports;
}
const pricing = load('lib/data/pricing.ts');
const calc = load('components/ROICalculator/calculations.ts', { '@/lib/data/pricing': pricing });
for (const [people, hours, rate, expected] of [[10, 2, 35, 36400], [12, 1.5, 60, 56160], [3, 0, 75, 0], [1000, 40, 250, 520000000]]) {
  test(`annual value: ${people} people, ${hours} hours, EUR ${rate}`, () => {
    assert.equal(calc.calculateAnnualTimeValue(people, hours, rate), expected);
  });
}
test('inline annual value agrees with detailed calculation before costs and ramp-up', () => {
  const detailed = calc.calculateROI({ ...calc.USE_CASE_PRESETS.custom, useCase: 'custom', numEmployees: 12, weeklyHours: 1.5, hourlyWage: 60, timeframMonths: 12, rampUpMonths: 0, setupCost: 0, monthlyCost: 0 });
  assert.equal(detailed.totalSavings, calc.calculateAnnualTimeValue(12, 1.5, 60));
});
test('the detailed calculation deducts ramp-up and project costs', () => {
  const detailed = calc.calculateROI({ ...calc.USE_CASE_PRESETS.custom, useCase: 'custom', numEmployees: 10, weeklyHours: 2, hourlyWage: 60, timeframMonths: 12, rampUpMonths: 3, setupCost: 5000, monthlyCost: 200 });
  assert.equal(detailed.totalSavings, 46800);
  assert.equal(detailed.totalInvestment, 7400);
  assert.equal(detailed.netBenefit, 39400);
});
