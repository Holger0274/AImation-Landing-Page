// Zentrales Datum für "Verifiziert"-Feld auf allen Facts-Seiten.
// Bei Aktualisierung hier ändern, nicht in den einzelnen Seiten.
export const FACTS_VERIFIED_DATE = '2026-06-04';

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
