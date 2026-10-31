import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Wie lange dauert das Gespräch, aus dem der Prozess entsteht?',
    answer: 'Für das Beispiel planen wir 45 Minuten für das erste Gespräch. Der tatsächliche Umfang hängt vom Prozess und seinen Ausnahmen ab. Weitere Gespräche und die fachliche Prüfung werden nach den offenen Punkten im Entwurf geplant.',
  },
  {
    question: 'Ersetzt das einen Prozessverantwortlichen oder Qualitätsmanager?',
    answer: 'Nein. Es verschiebt nur, wo die Zeit des Prozessverantwortlichen hingeht: weg vom Formulieren und Formatieren, hin zum Prüfen und Freigeben. Die inhaltliche Verantwortung, was richtig und was falsch ist, bleibt komplett bei der Person, die den Prozess kennt.',
  },
  {
    question: 'Funktioniert das auch für sicherheitskritische oder normierte Prozesse?',
    answer: 'Für die erste Struktur ja, für die Freigabe nein. Bei sicherheitskritischen Abläufen ist die Interview-Nacharbeit kein optionaler Schritt, sondern Pflicht, inklusive Abgleich mit den geltenden Normen. Die KI liefert hier bestenfalls ein durchdachtes Gerüst, nie das fertige Dokument.',
  },
  {
    question: 'Was, wenn das Gespräch unstrukturiert war oder abgeschweift ist?',
    answer: 'Dann wird der erste Entwurf entsprechend lückenhafter, und die zweite Runde länger. Ein roter Faden im Gespräch spart Zeit, ist aber keine Voraussetzung. Ein zweites, gezielteres Interview zu den offenen Punkten holt das meiste wieder auf.',
  },
  {
    question: 'Welche Werkzeuge nutzt AImation dafür?',
    answer: 'Ein Transkriptionswerkzeug für die Aufnahme, ein LLM wie Claude für die Strukturierung und, je nach Ablage, eine Verbindung zu Ihrem Wiki oder Ihrer Dokumentenverwaltung. Für DACH-Unternehmen achten wir dabei auf DSGVO-konforme Verarbeitung in der EU, das Gespräch verlässt Ihre Kontrolle nicht.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
