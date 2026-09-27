import enMessages from '@/messages/en.json';
import { PRICING } from './pricing';

export const faqs = [
  {
    question: 'Was passiert mit unseren Konstruktions- und Projektdaten?',
    answer:
      'Ihre Daten werden DSGVO-konform in der EU verarbeitet und nicht zum Training von KI-Modellen verwendet. Ein Auftragsverarbeitungsvertrag (AV-Vertrag) liegt unterschriftsreif bereit. Und Projekte unter Geheimhaltung behandeln wir wie das, was sie sind: vertraulich. Welche Architektur im Einzelfall passt, klären wir vor dem Projekt, nicht währenddessen.',
  },
  {
    question: 'Sind die Lösungen DSGVO-konform und rechtlich sauber?',
    answer:
      'Ja, das ist bei uns keine Option, sondern Auswahlkriterium für jedes Tool: Verarbeitung in der EU, herstellerneutral, nachvollziehbar dokumentiert. Der AV-Vertrag liegt unterschriftsreif bereit. Wenn ein gewünschtes Werkzeug das nicht hergibt, sagen wir es und schlagen eine Alternative vor.',
  },
  {
    question: 'Funktioniert das mit unseren bestehenden Systemen, etwa Microsoft 365, SharePoint oder unserem ERP?',
    answer:
      'In der Regel ja, über Standard-Schnittstellen. Wir docken an das an, was Sie haben, statt neue Insellösungen zu bauen. Genau das prüft der Realitäts-Check der KI-Landkarte, bevor Geld in die Umsetzung fließt. Und wenn etwas nicht geht, sagen wir Ihnen das vorher.',
  },
  {
    question: 'Ersetzt das unsere Ingenieure?',
    answer:
      'Nein. Human in the Loop ist nicht optional: Die letzte Freigabe bleibt immer beim Ingenieur. KI übernimmt die Fleißarbeit, die Ihre Ingenieure vom Entwickeln abhält: Sortieren, Suchen, Zusammenschreiben, nicht die Entscheidungen. Für Gespräche mit dem Betriebsrat stelle ich Unterlagen bereit.',
  },
  {
    question: 'Wie schnell sehen wir Ergebnisse?',
    answer:
      'Zur KI-Landkarte erhalten Sie 3 bis 5 Tage nach dem Workshop einen Bericht mit priorisierten Use Cases. Im vierwöchigen Pilot prüfen wir einen Prozess anhand Ihrer Daten auf Zeitgewinn und Ergebnisqualität. Welche Schritte bis zum produktiven Einsatz nötig sind, halten wir gemeinsam fest.',
  },
  {
    question: 'Was kostet das?',
    answer:
      `Die KI-Landkarte kostet ab ${PRICING.kiLandkarte.priceFrom.toLocaleString('de-DE')} Euro Festpreis für einen Workshop-Tag. Der Pilot liegt bei ${PRICING.pilot.price.toLocaleString('de-DE')} Euro für vier Wochen. Umsetzung startet ab ${PRICING.umsetzung.setupFrom.toLocaleString('de-DE')} Euro, plus ${PRICING.umsetzung.monthlyFrom} bis ${PRICING.umsetzung.monthlyTo} Euro laufende Kosten im Monat. Den Umfang und den Preis vereinbaren wir vor dem Start.`,
  },
  {
    question: 'Was ist der Unterschied zwischen einer Automatisierung und einem KI-Agenten?',
    answer:
      'Eine Automatisierung folgt festen Regeln: Wenn A passiert, tue B. Ein KI-Agent kann darüber hinaus selbst recherchieren, bewerten und Vorschläge erarbeiten, etwa eine technische Anfrage lesen, den Kontext aus Ihren Systemen sammeln und einen Antwortentwurf vorlegen. Die Freigabe bleibt bei Ihrem Team. Mehr dazu auf der Seite zu KI-Agenten.',
  },
];

// The visible accordion and its structured data must use the same language and prices.
export function getHomeFaqs(locale: string) {
  if (locale !== 'en') return faqs;
  return enMessages.faq.items.map((item, index) => index === 5 ? {
    ...item,
    answer: `The AI Landscape Map starts at ${PRICING.kiLandkarte.priceFrom.toLocaleString('en-GB')} euros for one workshop day. The four-week pilot costs ${PRICING.pilot.price.toLocaleString('en-GB')} euros. Implementation starts at ${PRICING.umsetzung.setupFrom.toLocaleString('en-GB')} euros, plus ${PRICING.umsetzung.monthlyFrom} to ${PRICING.umsetzung.monthlyTo} euros per month. We agree the scope and price before starting.`,
  } : item);
}
