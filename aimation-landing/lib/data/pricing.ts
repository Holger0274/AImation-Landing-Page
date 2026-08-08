/**
 * Single Source of Truth fuer die Angebots-Treppe.
 * Jede Zahl existiert genau einmal hier, siehe
 * aimation-website-specs/2026-07-18_00-master-brief.md Abschnitt 3 (Preis-Regel).
 * Keine Seite, kein Rechner, kein Modal darf abweichende Preise hartkodieren.
 */
export const PRICING = {
  erstgespraech: {
    label: 'Erstgespräch',
    price: 'kostenlos',
    duration: '30 Min',
  },
  kiLandkarte: {
    label: 'KI-Landkarte',
    description: 'Workshop + Ergebnisbericht: 2 bis 3 priorisierte Use Cases mit ROI-Schätzung',
    priceFrom: 1900,
    priceLabel: 'ab 1.900 EUR',
    duration: '1 Workshop-Tag, Bericht nach 3 bis 5 Tagen',
  },
  pilot: {
    label: 'Pilot',
    description: 'Ein Prozess wird automatisiert',
    price: 4900,
    priceLabel: '4.900 EUR Festpreis',
    duration: '4 Wochen',
  },
  umsetzung: {
    label: 'Umsetzung',
    description: 'Agenten-Systeme',
    setupFrom: 5000,
    setupTo: 30000,
    setupLabel: '5.000 bis 30.000 EUR Setup',
    monthlyFrom: 200,
    monthlyTo: 800,
    monthlyLabel: '200 bis 800 EUR/Monat',
    duration: '2 bis 12 Wochen',
  },
  begleitung: {
    label: 'Begleitung',
    price: 'optional, nach Aufwand',
    duration: 'laufend',
  },
  schulung: {
    label: 'Schulung',
    description: 'Inhouse, parallel zur Treppe jederzeit buchbar, unabhängig von der Teilnehmerzahl',
    pricePerDay: 1800,
    priceLabel: '1.800 EUR pro Tag',
    priceHalfDay: 990,
    priceHalfDayLabel: 'Halbtags-Formate ab 990 EUR',
  },
} as const;

/**
 * Die vier Umsetzungs-Level der KI-Agenten-Seite (/ki-agenten-unternehmen).
 * Laufende Kosten (API, Hosting, Wartung) gelten fuer alle vier Level gemeinsam,
 * siehe aimation-website-specs/2026-07-18_spec-02-angebots-architektur.md Punkt 1.
 */
export const UMSETZUNG_LEVELS = [
  { id: 'einfach', type: 'Einfacher Agent (z.B. E-Mail-Routing)', setupFrom: 5000, setupLabel: 'ab 5.000 €', timeline: '2 bis 4 Wochen' },
  { id: 'spezialisiert', type: 'Spezialisierter Agent (z.B. Dokumentenanalyse)', setupFrom: 10000, setupLabel: 'ab 10.000 €', timeline: '4 bis 8 Wochen' },
  { id: 'multi-system', type: 'Multi-System-Agent (z.B. Lessons-Learned)', setupFrom: 20000, setupLabel: 'ab 20.000 €', timeline: '6 bis 12 Wochen' },
  { id: 'multi-agent', type: 'Multi-Agenten-System (z.B. Debattiersystem)', setupFrom: 30000, setupLabel: 'ab 30.000 €', timeline: '8 bis 16 Wochen' },
] as const;

export const UMSETZUNG_LAUFENDE_KOSTEN = {
  type: 'Laufende Kosten (API, Hosting, Wartung)',
  label: '200 bis 800 €/Monat',
  monthlyFrom: 200,
  monthlyTo: 800,
} as const;

/**
 * ROI-Rechner-Pakete, harmonisiert mit Pilot und den Umsetzungs-Leveln,
 * siehe Spec 02 Punkt 6. Starter entspricht dem Pilot-Preis, Professional/
 * Enterprise entsprechen "spezialisierter Agent" und "Multi-System-Agent".
 */
export const ROI_PACKAGES = {
  starter: { setupCost: 4900, monthlyCost: 200 },
  professional: { setupCost: 10000, monthlyCost: 400 },
  enterprise: { setupCost: 20000, monthlyCost: 600 },
} as const;
