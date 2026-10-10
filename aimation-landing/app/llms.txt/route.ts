import { NextResponse } from 'next/server';
import { PRICING } from '@/lib/data/pricing';
import { AI2CAD_CHAPTERS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { DEMO_VIDEOS } from '@/lib/data/demo-videos';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export async function GET() {
  const content = `# AImation

KI-Beratung, Schulung und Umsetzung für die technische Produktentwicklung im DACH-Mittelstand (Fertigung, Maschinenbau, Automotive, Luft- und Raumfahrt, 10 bis 1.000 Mitarbeiter). Gegründet von Holger Peschke, mehr als 20 Jahre Automobilentwicklung. Aus der Entwicklung, nicht aus der IT. DSGVO-first, mit Versprechen, die zuerst selbst gebaut wurden.

## Leistungen

- [KI-Betriebssystem für Unternehmen](${siteUrl}/ki-betriebssystem): SharePoint, Dateiserver und Fachsysteme als gemeinsame Datenbasis für Chatbots, Agenten, Dashboards und eigene Apps. Datenmapping, Quellenbezug, Versionen und Berechtigungen werden projektspezifisch geprüft. Technologiepartnerschaft mit U-KNOW.AI.
- ${PRICING.erstgespraech.label}: ${PRICING.erstgespraech.price}, ${PRICING.erstgespraech.duration}. [Termin vereinbaren](${siteUrl}/#kontakt)
- [${PRICING.kiLandkarte.label}](${siteUrl}/ki-beratung-kmu): ${PRICING.kiLandkarte.description}, ${PRICING.kiLandkarte.priceLabel}, ${PRICING.kiLandkarte.duration}
- ${PRICING.pilot.label}: ${PRICING.pilot.description}, ${PRICING.pilot.priceLabel}, ${PRICING.pilot.duration}
- [${PRICING.umsetzung.label}](${siteUrl}/ki-automatisierung-mittelstand): ${PRICING.umsetzung.description}, ${PRICING.umsetzung.setupLabel} plus ${PRICING.umsetzung.monthlyLabel}, ${PRICING.umsetzung.duration}
- ${PRICING.begleitung.label}: ${PRICING.begleitung.price}, ${PRICING.begleitung.duration}
- [${PRICING.schulung.label}](${siteUrl}/ki-schulungen-mittelstand): ${PRICING.schulung.description}, ${PRICING.schulung.priceLabel}

## Use Cases

${DEMO_VIDEOS.map(video => `- [${video.name}: Video-Demo](${siteUrl}${video.path}): ${video.de.description} ${video.de.note}`).join('\n')}
- [AI2CAD und AI2CAE: Konstruktion und FEM mit LLM](${siteUrl}${AI2CAD_PATH}): Ein Large Language Model steuert in den CAD-Entwicklungsdemos ein CAD-System, ohne manuelle Mausklicks im CAD. Es setzt Parameter, modelliert Montageplatte und Welle, schlägt Konstruktionskorrekturen vor und erstellt eine technische Zeichnung. Das fünfte Video zeigt AI2CAE: LLM-gesteuerte FEM-Berechnung unter 1.500 N, drei Netzfeinheiten und Vergleich mit der Handrechnung. Rückfragen und Freigaben erfolgen im Dialog. Keine generelle CAD-Kompatibilität oder Fertigungsfreigabe zugesichert.
${AI2CAD_CHAPTERS.map(chapter => `- [${chapter.kind} ${chapter.number}: ${chapter.de.title}](${siteUrl}${AI2CAD_PATH}/${chapter.slug}): ${chapter.de.description} ${chapter.de.check}`).join('\n')}
- [KI in der technischen Produktentwicklung](${siteUrl}/ki-produktentwicklung): Aufgaben entlang der Entwicklung, Use-Case-Katalog, Anwendungsdemos und fachliche Prüfschritte.
- [Microsoft 365 Copilot Schulung](${siteUrl}/schulungen/microsoft-365-copilot): neun Module aus vorhandenen Lernmaterialien, interaktive Lernprobe und Voraussetzungen für ein abgestimmtes Inhouse-Format.
- [Variantenmanagement mit VariantHub](${siteUrl}/use-cases/variantenmanagement): mit KI entwickelter Prototyp mit deterministischer Regelprüfung. KI-Regelvorschläge sind geplant.
- [Skillmatrix für Entwicklungsteams](${siteUrl}/use-cases/skillmatrix-entwicklung): Demo zur Kompetenzabdeckung und Wissensplanung mit fiktiven Daten, keine Leistungsbewertung von Personen.
- [Projektsteuerung mit dem PM Demonstrator](${siteUrl}/use-cases/projektsteuerung-entwicklung): Proof of Concept mit fiktiven Daten, KI-Risiko-Radar und Berichtsentwurf im Video. Produktiver Umfang ist separat zu prüfen.
- [Excel und PowerPoint durch Dashboards, BI und Apps ablösen](${siteUrl}/use-cases/excel-powerpoint-berichte): Kalkulationstabellen und Excel-Tools in Anwendungen mit gemeinsamer Datenbasis überführen. Interaktiver Zielablauf mit fiktiven Daten, festen Rechenregeln, gezielter KI-Integration, Historie und fachlicher Freigabe. PowerPoint nur als optionaler Export. Keine garantierten Einsparwerte.
- [Patentrecherche und Prior Art](${siteUrl}/use-cases/patentrecherche-ki): KI-gestützte technische Vorrecherche mit Quellenbezug. Interner Recherche-Prototyp; Datenquellen, Datenbankanbindung und Recherchehistorie werden im Pilot abgestimmt. Keine vollständige Prior-Art-Recherche oder rechtliche Nutzungsfreigabe zugesichert.
- [Technische Anfragen mit KI bearbeiten](${siteUrl}/use-cases/email-klassifizierung): Technische Anfragen vorsortieren, freigegebene Quellen zuordnen und Antwortentwürfe fachlich prüfen. Interner Workflow-Prototyp; Systemanbindungen, Datenbank und Änderungshistorie werden im Pilot abgestimmt. Kein automatischer Versand im gezeigten Ablauf.
- [Technologie-Scouting mit KI](${siteUrl}/use-cases/technologie-scouting): Definierte Fachquellen beobachten, Fundstücke mit KI vorstrukturieren und den möglichen Produktbezug fachlich prüfen. Interner Scouting-Prototyp; Suchfelder, Quellenzugang, Datenbank und Änderungshistorie werden im Pilot abgestimmt. Keine automatische Technologieentscheidung.
- [Meeting-Protokolle mit KI](${siteUrl}/use-cases/meeting-transkript-analyse): Freigegebene Transkripte in Entscheidungen, Aufgaben und offene Punkte strukturieren. Bei AImation im Aufbau; Zielsysteme, Datenbank und Änderungshistorie werden im Pilot abgestimmt. Aufgaben und Entscheidungen werden vor der Übergabe menschlich bestätigt.
- [Entwicklungswissen mit KI finden](${siteUrl}/use-cases/knowledge-graph-management): Frühere Entscheidungen mit Prüfberichten und Protokollen nachvollziehen. Interner Prototyp mit eigenen Unterlagen; Unternehmensanbindung, Rechteprüfung und Datenhistorie werden für den Pilot abgestimmt. Keine garantierten Antwortzeiten.
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
