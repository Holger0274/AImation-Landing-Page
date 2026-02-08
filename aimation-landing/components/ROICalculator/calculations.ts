// ROI Calculator - Business Logic

export type UseCaseType = 'research' | 'documentation' | 'meetings' | 'custom';
export type PackageType = 'starter' | 'professional' | 'enterprise';

export interface CalculatorInput {
  useCase: UseCaseType;
  package?: PackageType;
  numEmployees: number;
  hourlyWage: number;
  weeklyHours: number;
  setupCost: number;
  monthlyCost: number;
  timeframMonths: number;
  rampUpMonths: number;
}

export interface ROIResults {
  weeklySavings: number;
  totalSavings: number;
  totalInvestment: number;
  netBenefit: number;
  roiPercent: number;
  amortizationMonths: number;
  productiveWeeks: number;
}

/**
 * Package presets for cost estimation
 */
export const PACKAGE_PRESETS: Record<PackageType, { setupCost: number; monthlyCost: number }> = {
  starter: {
    setupCost: 6500,
    monthlyCost: 200,
  },
  professional: {
    setupCost: 9500,
    monthlyCost: 400,
  },
  enterprise: {
    setupCost: 18000,
    monthlyCost: 600,
  },
};

/**
 * Use case presets for quick calculations (using Professional package as default)
 */
export const USE_CASE_PRESETS: Record<UseCaseType, Omit<CalculatorInput, 'useCase'>> = {
  research: {
    weeklyHours: 3,
    hourlyWage: 50,
    numEmployees: 5,
    setupCost: 9500,
    monthlyCost: 400,
    timeframMonths: 12,
    rampUpMonths: 1,
  },
  documentation: {
    weeklyHours: 4,
    hourlyWage: 35,
    numEmployees: 5,
    setupCost: 9500,
    monthlyCost: 400,
    timeframMonths: 12,
    rampUpMonths: 2,
  },
  meetings: {
    weeklyHours: 2,
    hourlyWage: 45,
    numEmployees: 10,
    setupCost: 9500,
    monthlyCost: 400,
    timeframMonths: 12,
    rampUpMonths: 1,
  },
  custom: {
    weeklyHours: 2,
    hourlyWage: 35,
    numEmployees: 10,
    setupCost: 9500,
    monthlyCost: 400,
    timeframMonths: 12,
    rampUpMonths: 2,
  },
};

/**
 * Calculate ROI based on corrected formulas
 */
export function calculateROI(input: CalculatorInput): ROIResults {
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
  const WEEKS_PER_MONTH = 52 / 12; // 4.333
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
    roiPercent: Math.round(roiPercent * 10) / 10, // 1 decimal place
    amortizationMonths: Math.round(amortizationMonths * 10) / 10, // 1 decimal place
    productiveWeeks: Math.round(productiveWeeks * 10) / 10,
  };
}

/**
 * Get use case label in German
 */
export function getUseCaseLabel(useCase: UseCaseType): string {
  const labels: Record<UseCaseType, string> = {
    research: 'Recherche & Analyse',
    documentation: 'Dokumentenverarbeitung',
    meetings: 'Meeting-Automatisierung',
    custom: 'Eigene Werte',
  };
  return labels[useCase] || useCase;
}

/**
 * Get use case description in German
 */
export function getUseCaseDescription(useCase: UseCaseType): string {
  const descriptions: Record<UseCaseType, string> = {
    research: 'Automatisierte Marktanalysen, Wettbewerbsrecherche, Technologie-Scouting',
    documentation: 'Automatische Dokumentenerstellung, Protokolle, Berichte',
    meetings: 'Meeting-Transkription, automatische Zusammenfassungen, Follow-up-Generierung',
    custom: 'Individuelle Konfiguration für Ihren spezifischen Use Case',
  };
  return descriptions[useCase] || '';
}

/**
 * Get package label in German
 */
export function getPackageLabel(pkg: PackageType): string {
  const labels: Record<PackageType, string> = {
    starter: 'Starter-Lösung',
    professional: 'Professional-Lösung',
    enterprise: 'Enterprise-Lösung',
  };
  return labels[pkg] || pkg;
}

/**
 * Get package description in German
 */
export function getPackageDescription(pkg: PackageType): string {
  const descriptions: Record<PackageType, string> = {
    starter: 'Einfache Automatisierung, 1-2 Workflows, Basis-Integration',
    professional: 'Mehrere Automatisierungen, RAG-System, erweiterte Integration',
    enterprise: 'Multi-Agent-System, komplexe Prozesse, Full-Service',
  };
  return descriptions[pkg] || '';
}

/**
 * Get package target audience in German
 */
export function getPackageAudience(pkg: PackageType): string {
  const audiences: Record<PackageType, string> = {
    starter: 'Kleine Teams, erste KI-Schritte',
    professional: 'Mittelstand, ernsthafte Automatisierung',
    enterprise: 'Größere Unternehmen, umfassende Transformation',
  };
  return audiences[pkg] || '';
}

/**
 * Format currency in German format
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with thousands separator (German format)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('de-DE').format(num);
}
