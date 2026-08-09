import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Was ist das Ziel der Landkarten-Erstellung vor einem KI-Projekt?',
    answer: 'Vier Bestandsaufnahmen liefern zusammen ein ehrliches Bild: Welche Systeme sind wirklich führend, welche werden nur der Form halber benutzt? Wo entstehen Daten, wo enden sie? In welchem Zustand sind die Datenbestände? Welche Prozesse laufen tatsächlich anders als dokumentiert? Wer das vorher weiß, vermeidet die teuersten Überraschungen im Projekt.',
  },
  {
    question: 'Wie lange dauert ein ehrliches KI-Audit vor dem eigentlichen Projekt?',
    answer: 'Das hängt von der Unternehmensgröße ab, liegt aber typischerweise zwischen drei und sechs Wochen. Ein Maschinenbauer mit 350 Mitarbeitern braucht mehr Zeit als ein Dienstleister mit 40. Was wichtig ist: Diese Zeit zahlt sich zurück. Wer das Audit überspringt, rechnet am Anfang mit zwölf Monaten und 200.000 Euro und landet zwölf Monate später mit dem Dreifachen davon.',
  },
  {
    question: 'Was mache ich, wenn meine Daten in einem schlechten Zustand sind?',
    answer: 'Das ist der Normalzustand, nicht die Ausnahme. Unternehmen, die 20 oder 30 Jahre gewachsen sind, haben fast immer parallele Systeme, veraltete Vorlagen und implizites Wissen, das nur in einzelnen Köpfen sitzt. Ein ehrlicher Audit macht das sichtbar. Dann können Sie entscheiden: Bereinigung in einem separaten Projekt, Priorisierung bestimmter Datenbereiche, oder Start mit dem Teil der Daten, der tatsächlich sauber ist.',
  },
  {
    question: 'Wie nehme ich mein Team mit, ohne Angst vor KI zu schüren?',
    answer: 'Frühzeitig, konkret und ohne falsche Versprechen. Wenn Mitarbeiter wissen, wofür ein KI-Tool eingesetzt wird, welche Aufgaben es übernimmt und welche Entscheidungen weiterhin beim Menschen liegen, ist die Akzeptanz deutlich höher. Change-Management fängt im ersten Strategieworkshop an, nicht im Roll-out-Plan. Wer das ans Ende schiebt, hat ein Werkzeug ohne Nutzer.',
  },
  {
    question: 'Wann sollte IT-Sicherheit eingebunden werden?',
    answer: 'Von Tag eins. Nicht als Bremse, sondern als Co-Architekt. Was später nachgeschoben wird, kostet das Vielfache. DSGVO, Auftragsverarbeitungsverträge, Datenresidenz, Audit-Fähigkeit, branchenspezifische Anforderungen wie IATF 16949 oder MDR: Diese Themen verschwinden nicht dadurch, dass man sie ignoriert. Sie tauchen später wieder auf, zu einem viel ungünstigeren Zeitpunkt.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
