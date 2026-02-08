/**
 * Test Data Fixtures for AI.mation Landing Page
 *
 * Centralized test data for form submissions, validation scenarios,
 * and expected values throughout the test suite.
 */

// ============================================================
// LEAD FORM TEST DATA
// ============================================================

export const validLeadFormData = {
  vorname: 'Max',
  nachname: 'Mustermann',
  email: 'max.mustermann@beispielfirma.de',
  firma: 'Beispiel GmbH',
  unternehmensgroesse: '50-249 Mitarbeiter',
  telefon: '+49 170 1234567',
  herausforderung: 'Wir möchten unsere Geschäftsprozesse mit KI automatisieren und suchen nach einer passenden Lösung für unser mittelständisches Unternehmen.',
};

export const invalidLeadFormData = {
  tooShortFirstName: {
    ...validLeadFormData,
    vorname: 'A', // Min 2 chars required
  },
  invalidEmail: {
    ...validLeadFormData,
    email: 'ungueltige-email',
  },
  missingCompanySize: {
    ...validLeadFormData,
    unternehmensgroesse: '',
  },
  tooShortChallenge: {
    ...validLeadFormData,
    herausforderung: 'Zu kurz', // Min 10 chars required
  },
  tooLongChallenge: {
    ...validLeadFormData,
    herausforderung: 'A'.repeat(501), // Max 500 chars allowed
  },
};

export const companySizeOptions = [
  '1-9 Mitarbeiter',
  '10-49 Mitarbeiter',
  '50-249 Mitarbeiter',
  '250-999 Mitarbeiter',
  '1000+ Mitarbeiter',
];

// ============================================================
// ROI CALCULATOR TEST DATA
// ============================================================

export const roiCalculatorSteps = {
  step1: {
    anzahlMitarbeiter: 100,
    durchschnittlicherStundenlohn: 35, // €35/hour
  },
  step2: {
    zeitaufwandProzess: 10, // 10 hours/week
    automatisierungspotential: 70, // 70% automation potential
  },
  step3: {
    vorname: 'Anna',
    nachname: 'Schmidt',
    email: 'anna.schmidt@firma.de',
    firma: 'Mittelstand AG',
    unternehmensgroesse: '100-249 Mitarbeiter',
  },
};

// Expected ROI calculation results (based on above inputs)
export const expectedROIResults = {
  zeitersparnisProWoche: 7, // hours (10 * 0.7)
  zeitersparnisProJahr: 364, // hours (7 * 52)
  kostenersparnisProJahr: 12740, // EUR (364 * 35)
  roi: 1174, // % (assuming 1000 EUR implementation cost)
};

// ============================================================
// FAQ TEST DATA
// ============================================================

export const faqQuestions = [
  'Für welche Unternehmen sind Ihre KI-Lösungen geeignet?',
  'Wie lange dauert die Implementierung einer KI-Lösung?',
  'Benötigen wir interne IT-Experten für die Umsetzung?',
  'Was kostet eine KI-Lösung?',
  'Wie sicher sind unsere Daten?',
  'Können wir mit einer kleinen Lösung starten?',
];

// ============================================================
// NAVIGATION TEST DATA
// ============================================================

export const navigationLinks = {
  header: [
    { text: 'Leistungen', href: '#leistungen' },
    { text: 'Prozess', href: '#prozess' },
    { text: 'Über mich', href: '#ueber-mich' },
    { text: 'FAQ', href: '#faq' },
  ],
  footer: {
    services: [
      { text: 'Schulungen', href: '#schulungen' },
      { text: 'Beratung', href: '#beratung' },
      { text: 'Umsetzung', href: '#umsetzung' },
    ],
    company: [
      { text: 'Über mich', href: '#ueber-mich' },
      { text: 'Prozess', href: '#prozess' },
      { text: 'FAQ', href: '#faq' },
    ],
    legal: [
      { text: 'Impressum', href: '/impressum' },
      { text: 'Datenschutz', href: '/datenschutz' },
    ],
  },
};

// ============================================================
// SERVICES TEST DATA
// ============================================================

export const servicesData = {
  schulungen: {
    title: 'Schulungen',
    subtitle: 'KI-Wissen vermitteln',
    description: 'Von KI-Grundlagen bis Vibe Coding',
    useCaseCount: 2,
  },
  beratung: {
    title: 'Beratung',
    subtitle: 'Denken, planen, entscheiden',
    description: 'Von der Analyse bis zur Roadmap',
    useCaseCount: 2,
  },
  umsetzung: {
    title: 'Umsetzung',
    subtitle: 'Bauen, implementieren, betreiben',
    description: 'Konkrete KI-Lösungen für Ihren Bedarf',
    useCaseCount: 2,
  },
};

// ============================================================
// HERO SECTION TEST DATA
// ============================================================

export const heroContent = {
  headline: '40% der Arbeitszeit Ihrer Mitarbeiter geht für Aufgaben drauf, die niemand vermissen würde.',
  subline: 'Ob KI dafür die Lösung ist? Das sagen wir Ihnen ehrlich. Auch wenn die Antwort Nein lautet.',
  primaryCTA: 'Kostenloses Erstgespräch vereinbaren',
  secondaryCTA: 'Mehr erfahren',
  trustElements: [
    '18.000+ LinkedIn-Follower',
    '20 Jahre Engineering-Erfahrung',
    'Für Unternehmen von 10-1000 Mitarbeitern',
  ],
};

// ============================================================
// SOCIAL PROOF DATA
// ============================================================

export const socialProofCounters = {
  linkedinFollowers: 18000,
  yearsExperience: 20,
  minCompanySize: 10,
  maxCompanySize: 1000,
};

// ============================================================
// PROCESS STEPS
// ============================================================

export const processSteps = [
  {
    number: 1,
    title: 'Erstgespräch',
    description: '30 Minuten kostenfrei',
  },
  {
    number: 2,
    title: 'Konzept',
    description: 'Maßgeschneiderte Lösung',
  },
  {
    number: 3,
    title: 'Umsetzung',
    description: 'Implementierung & Testing',
  },
  {
    number: 4,
    title: 'Begleitung',
    description: 'Support & Optimierung',
  },
];

// ============================================================
// EXTERNAL LINKS
// ============================================================

export const externalLinks = {
  linkedin: 'https://linkedin.com/in/...',
  email: 'kontakt@aimation.de',
  calendly: 'https://calendly.com/your-link', // Mock URL
};

// ============================================================
// VALIDATION ERROR MESSAGES (German)
// ============================================================

export const validationMessages = {
  required: 'Dieses Feld ist erforderlich',
  email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  minLength: (min: number) => `Mindestens ${min} Zeichen erforderlich`,
  maxLength: (max: number) => `Maximal ${max} Zeichen erlaubt`,
  privacy: 'Sie müssen der Datenschutzerklärung zustimmen',
};

// ============================================================
// VIEWPORT CONFIGURATIONS
// ============================================================

export const viewports = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  laptop: { width: 1024, height: 768 },
  desktop: { width: 1920, height: 1080 },
};

// ============================================================
// API ENDPOINTS (for mocking)
// ============================================================

export const apiEndpoints = {
  lead: '/api/lead',
  roiResults: '/api/send-roi-results',
};
