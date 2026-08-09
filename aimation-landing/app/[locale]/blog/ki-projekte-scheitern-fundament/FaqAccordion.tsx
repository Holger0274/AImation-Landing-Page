import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Woran scheitern KI-Projekte im Mittelstand am häufigsten?',
    answer: 'In fast jedem Discovery-Gespräch zeigt sich dasselbe Muster: Das Modell ist selten das Problem, das Fundament darunter schon. Daten in verschiedenen Systemen ohne klare Zuständigkeit, Compliance-Fragen, die niemand vorab gestellt hat, und ein Team, das nicht mitgenommen wurde. Das sind die drei häufigsten Stopper. Die Technologie selbst ist dabei oft die kleinste Baustelle.',
  },
  {
    question: 'Was ist ein Proof of Concept und warum empfehlen Sie das als Einstieg?',
    answer: 'Ein PoC ist ein kleines, zeitlich begrenztes Experiment mit einem konkreten Lernziel, typischerweise 4 bis 6 Wochen, ein klar umrissener Usecase, ein definiertes Ergebnis. Der Vorteil: Er liefert die ehrliche Antwort auf die Frage, was in Ihrem Unternehmen mit Ihren Daten und Ihren Prozessen wirklich funktioniert. Was auf Anhieb in der Demo läuft, tut das in der Praxis oft nicht. Der PoC macht diesen Unterschied sichtbar, bevor große Budgets freigegeben werden.',
  },
  {
    question: 'Wie gehen Sie mit DSGVO und dem EU AI Act um?',
    answer: 'Compliance gehört für uns von Anfang an zur eigentlichen Konstruktionsaufgabe, nicht zum nachträglichen Umbau am Ende. Wir empfehlen für den DACH-Mittelstand self-hosted Lösungen: Claude über AWS Bedrock mit Frankfurt-Region, n8n für Automatisierung, lokale Speicherung. Damit bleiben Daten in Ihrer Kontrolle und verlassen die EU nicht. Der genaue Setup hängt von Ihrer Situation ab, dafür ist das Discovery-Gespräch da.',
  },
  {
    question: 'Was passiert im Discovery-Schritt vor dem PoC?',
    answer: 'Im Discovery schauen wir uns an, welche Tools tatsächlich im Einsatz sind, wie Daten fließen, wo sie liegen und welche Prozesse betroffen sind. Das dauert in der Regel ein bis zwei Workshops. Die Hälfte der späteren Reibung ist damit schon sichtbar, bevor die erste Zeile Code geschrieben wird. Dieser Schritt wird bei uns nie übersprungen.',
  },
  {
    question: 'Warum sollte ich nicht einfach mit einem großen KI-Strategie-Projekt starten?',
    answer: 'Weil KI-Fähigkeiten sich monatlich weiterentwickeln. Eine Strategie, die auf ungeprüften Annahmen über Daten, Prozesse und Team aufbaut, ist in diesem Umfeld bestenfalls Theater. Bis eine große Roadmap umgesetzt ist, hat sich die Technologie bereits verändert. Ein konkreter PoC über vier bis sechs Wochen liefert in der Hälfte der Zeit mehr belastbare Erkenntnisse als drei Beraterpräsentationen.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
