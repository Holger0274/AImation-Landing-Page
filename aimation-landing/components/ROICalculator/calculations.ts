// ROI Calculator - Business Logic

export interface CalculatorInput {
  numEmployees: number;
  hourlyWage: number;
  weeklyHours: number;
  priority: 'documentation' | 'email' | 'research' | 'reporting';
}

export interface ROIResults {
  annualSavings: number;
  hoursSaved: number;
  costReduction: number;
  roiMonths: number;
  weeklyHoursSaved: number;
}

/**
 * Automation potential by priority area
 * Based on real-world AI automation projects
 */
const AUTOMATION_POTENTIAL: Record<string, number> = {
  documentation: 0.5,  // 50% automation potential (high)
  email: 0.45,         // 45% automation potential
  research: 0.55,      // 55% automation potential (highest)
  reporting: 0.5,      // 50% automation potential
};

/**
 * Calculate ROI based on user inputs
 */
export function calculateROI(input: CalculatorInput): ROIResults {
  const { numEmployees, hourlyWage, weeklyHours, priority } = input;

  // Get automation potential for selected priority area
  const automationFactor = AUTOMATION_POTENTIAL[priority] || 0.45;

  // Calculate time savings
  const weeklyHoursSaved = weeklyHours * automationFactor;
  const annualHoursSaved = weeklyHoursSaved * 48; // 48 working weeks/year (accounting for holidays)

  // Calculate cost savings
  const annualSavings = Math.round(annualHoursSaved * hourlyWage);

  // Calculate cost reduction percentage
  const totalAnnualCost = weeklyHours * 48 * hourlyWage;
  const costReduction = Math.round((annualSavings / totalAnnualCost) * 100);

  // Estimate implementation cost (baseline for SME KI project)
  const implementationCost = 15000; // Conservative estimate in EUR

  // Calculate ROI period in months
  const monthlySavings = annualSavings / 12;
  const roiMonths = monthlySavings > 0
    ? Math.round(implementationCost / monthlySavings)
    : 24; // Fallback if savings are too low

  return {
    annualSavings,
    hoursSaved: Math.round(annualHoursSaved),
    costReduction,
    roiMonths,
    weeklyHoursSaved: Math.round(weeklyHoursSaved),
  };
}

/**
 * Get priority area label in German
 */
export function getPriorityLabel(priority: string): string {
  const labels: Record<string, string> = {
    documentation: 'Dokumentation',
    email: 'E-Mail-Kommunikation',
    research: 'Recherche',
    reporting: 'Reporting',
  };
  return labels[priority] || priority;
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
