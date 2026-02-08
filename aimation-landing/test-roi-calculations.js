// Test ROI Calculations
// Run with: node test-roi-calculations.js

const WEEKS_PER_MONTH = 52 / 12; // 4.333

function calculateROI(input) {
  const {
    weeklyHours,
    hourlyWage,
    numEmployees,
    setupCost,
    monthlyCost,
    timeframMonths,
    rampUpMonths
  } = input;

  // Formula: produktive_wochen = (zeitraum_monate - anlaufzeit_monate) × (52 / 12)
  const productiveMonths = timeframMonths - rampUpMonths;
  const productiveWeeks = productiveMonths * WEEKS_PER_MONTH;

  // Formula: weeklySavings = stunden_ersparnis_pro_woche × stundensatz × anzahl_mitarbeiter
  const weeklySavings = weeklyHours * hourlyWage * numEmployees;

  // Formula: einsparung_gesamt = weeklySavings × produktive_wochen
  const totalSavings = weeklySavings * productiveWeeks;

  // Formula: investition_gesamt = setup_kosten + (laufende_kosten_monat × zeitraum_monate)
  const totalInvestment = setupCost + (monthlyCost * timeframMonths);

  // Formula: netto_nutzen = einsparung_gesamt - investition_gesamt
  const netBenefit = totalSavings - totalInvestment;

  // Formula: roi_prozent = (netto_nutzen / investition_gesamt) × 100
  const roiPercent = totalInvestment > 0 ? (netBenefit / totalInvestment) * 100 : 0;

  // Formula: amortisation_monate = setup_kosten / ((weeklySavings × 52/12) - laufende_kosten_monat)
  const monthlySavings = weeklySavings * WEEKS_PER_MONTH;
  const netMonthlySavings = monthlySavings - monthlyCost;
  const amortizationMonths = netMonthlySavings > 0 ? setupCost / netMonthlySavings : 999;

  return {
    weeklySavings: Math.round(weeklySavings),
    totalSavings: Math.round(totalSavings),
    totalInvestment: Math.round(totalInvestment),
    netBenefit: Math.round(netBenefit),
    roiPercent: Math.round(roiPercent * 10) / 10,
    amortizationMonths: Math.round(amortizationMonths * 10) / 10,
    productiveWeeks: Math.round(productiveWeeks * 10) / 10,
  };
}

// Test Cases
const testCases = [
  {
    name: "Eigene Werte (Custom)",
    input: {
      weeklyHours: 2,
      hourlyWage: 35,
      numEmployees: 10,
      setupCost: 15000,
      monthlyCost: 500,
      timeframMonths: 12,
      rampUpMonths: 2
    },
    expected: {
      weeklySavings: 700,
      totalSavings: 30333,
      totalInvestment: 21000,
      netBenefit: 9333,
      roiPercent: 44.4,
      amortizationMonths: 5.9
    }
  },
  {
    name: "Recherche & Analyse",
    input: {
      weeklyHours: 3,
      hourlyWage: 50,
      numEmployees: 5,
      setupCost: 10000,
      monthlyCost: 400,
      timeframMonths: 12,
      rampUpMonths: 1
    },
    expected: {
      weeklySavings: 750,
      totalSavings: 35750,
      totalInvestment: 14800,
      netBenefit: 20950,
      roiPercent: 141.6,
      amortizationMonths: 3.5
    }
  },
  {
    name: "Dokumentenverarbeitung",
    input: {
      weeklyHours: 4,
      hourlyWage: 35,
      numEmployees: 5,
      setupCost: 12000,
      monthlyCost: 400,
      timeframMonths: 12,
      rampUpMonths: 2
    },
    expected: {
      weeklySavings: 700,
      totalSavings: 30333,
      totalInvestment: 16800,
      netBenefit: 13533,
      roiPercent: 80.6,
      amortizationMonths: 4.6
    }
  },
  {
    name: "Meeting-Automatisierung",
    input: {
      weeklyHours: 2,
      hourlyWage: 45,
      numEmployees: 10,
      setupCost: 8000,
      monthlyCost: 300,
      timeframMonths: 12,
      rampUpMonths: 1
    },
    expected: {
      weeklySavings: 900,
      totalSavings: 42900,
      totalInvestment: 11600,
      netBenefit: 31300,
      roiPercent: 269.8,
      amortizationMonths: 2.2
    }
  }
];

console.log('\n=== ROI CALCULATION TESTS ===\n');

let allPassed = true;

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log('─'.repeat(60));

  const result = calculateROI(testCase.input);

  let testPassed = true;
  const tolerance = 0.5; // Allow 0.5 difference for rounding

  Object.keys(testCase.expected).forEach(key => {
    const expected = testCase.expected[key];
    const actual = result[key];
    const diff = Math.abs(expected - actual);
    const passed = diff <= tolerance;

    if (!passed) {
      console.log(`  ❌ ${key}: Expected ${expected}, got ${actual} (diff: ${diff})`);
      testPassed = false;
      allPassed = false;
    } else {
      console.log(`  ✓ ${key}: ${actual}`);
    }
  });

  if (testPassed) {
    console.log('  ✅ TEST PASSED\n');
  } else {
    console.log('  ❌ TEST FAILED\n');
  }
});

console.log('='.repeat(60));
if (allPassed) {
  console.log('✅ ALL TESTS PASSED!');
} else {
  console.log('❌ SOME TESTS FAILED!');
}
console.log('='.repeat(60) + '\n');
