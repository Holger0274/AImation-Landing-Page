// Zentrales Datum für "Verifiziert"-Feld auf allen Facts-Seiten.
// Bei Aktualisierung hier ändern, nicht in den einzelnen Seiten.
export const FACTS_VERIFIED_DATE = '2026-06-04';

// Identity links belong to the named entity, not to its founder or employer.
export const ENTITY_PROFILES = {
  company: 'https://www.linkedin.com/company/aimation-ug',
  founder: 'https://www.linkedin.com/in/holgerpeschke/',
} as const;

// Membership and date confirmed by Holger Peschke on 2026-10-31.
// Logo permission is pending; use a factual text reference only.
export const ADN_MEMBERSHIP = {
  name: 'Autodesk Developer Network',
  category: 'Startup',
  since: '2026-10-23',
  url: 'https://aps.autodesk.com/adn',
} as const;

// Source: existing company facts page. Do not substitute the trade-register
// entry date for the founding date, or claim a new verification without evidence.
export const COMPANY_FACTS = {
  name: 'AImation',
  legalName: 'AImation UG (haftungsbeschränkt)',
  foundingDate: '2026-02',
  foundingLabel: { de: 'Februar 2026', en: 'February 2026' },
  employeeRange: { de: '10 bis 1.000', en: '10 to 1,000' },
  description: 'KI-Beratung, Schulung und Umsetzung für die technische Produktentwicklung im DACH-Mittelstand. Wissen sichern, Anfragen bearbeiten und Berichte vorbereiten.',
} as const;
