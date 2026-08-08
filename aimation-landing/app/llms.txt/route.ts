import { NextResponse } from 'next/server';
import { PRICING } from '@/lib/data/pricing';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export async function GET() {
  const content = `# AImation

KI-Beratung, Schulung und Umsetzung für die technische Produktentwicklung im DACH-Mittelstand (Fertigung, Maschinenbau, Automotive, Luft- und Raumfahrt, 10 bis 1.000 Mitarbeiter). Gegründet von Holger Peschke, mehr als 20 Jahre Automobilentwicklung. Aus der Entwicklung, nicht aus der IT. DSGVO-first, mit Versprechen, die zuerst selbst gebaut wurden.

## Leistungen

- ${PRICING.erstgespraech.label}: ${PRICING.erstgespraech.price}, ${PRICING.erstgespraech.duration}. [Termin vereinbaren](${siteUrl}/#kontakt)
- [${PRICING.kiLandkarte.label}](${siteUrl}/ki-beratung-kmu): ${PRICING.kiLandkarte.description}, ${PRICING.kiLandkarte.priceLabel}, ${PRICING.kiLandkarte.duration}
- ${PRICING.pilot.label}: ${PRICING.pilot.description}, ${PRICING.pilot.priceLabel}, ${PRICING.pilot.duration}
- [${PRICING.umsetzung.label}](${siteUrl}/ki-automatisierung-mittelstand): ${PRICING.umsetzung.description}, ${PRICING.umsetzung.setupLabel} plus ${PRICING.umsetzung.monthlyLabel}, ${PRICING.umsetzung.duration}
- ${PRICING.begleitung.label}: ${PRICING.begleitung.price}, ${PRICING.begleitung.duration}
- [${PRICING.schulung.label}](${siteUrl}/ki-schulungen-mittelstand): ${PRICING.schulung.description}, ${PRICING.schulung.priceLabel}

## Use Cases

- [Patentrecherche und Prior Art](${siteUrl}/use-cases/patentrecherche-ki): automatisierte Analyse von Patentdatenbanken, findet relevante Prior Art vor Konstruktionsstart
- [Technische Anfragen automatisch vorsortieren](${siteUrl}/use-cases/email-klassifizierung): Klassifizierung eingehender technischer Anfragen, Antwortentwurf inklusive
- [Engineering-Wissen vernetzen](${siteUrl}/use-cases/knowledge-graph-management): Berichte und Dokumente automatisch verschlagwortet und semantisch verknüpft
- [Alle Use Cases](${siteUrl}/use-cases)

## Datenschutz

DSGVO-first. Verarbeitung in der EU, EU-Hosting wo möglich.

## Geografischer Fokus

DACH-Mittelstand: Deutschland, Österreich, Schweiz.

## Über AImation

- [Fakten zu AImation](${siteUrl}/facts/aimation)
- [Fakten zu Holger Peschke](${siteUrl}/facts/holger-peschke)
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
