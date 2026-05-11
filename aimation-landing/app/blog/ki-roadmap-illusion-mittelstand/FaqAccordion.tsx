'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Was ist das Ziel der Landkarten-Erstellung vor einem KI-Projekt?',
    a: 'Vier Bestandsaufnahmen liefern zusammen ein ehrliches Bild: Welche Systeme sind wirklich führend, welche werden nur der Form halber benutzt? Wo entstehen Daten, wo enden sie? In welchem Zustand sind die Datenbestände? Welche Prozesse laufen tatsächlich anders als dokumentiert? Wer das vorher weiß, vermeidet die teuersten Überraschungen im Projekt.',
  },
  {
    q: 'Wie lange dauert ein ehrliches KI-Audit vor dem eigentlichen Projekt?',
    a: 'Das hängt von der Unternehmensgröße ab, liegt aber typischerweise zwischen drei und sechs Wochen. Ein Maschinenbauer mit 350 Mitarbeitern braucht mehr Zeit als ein Dienstleister mit 40. Was wichtig ist: Diese Zeit zahlt sich zurück. Wer das Audit überspringt, rechnet am Anfang mit zwölf Monaten und 200.000 Euro und landet zwölf Monate später mit dem Dreifachen davon.',
  },
  {
    q: 'Was mache ich, wenn meine Daten in einem schlechten Zustand sind?',
    a: 'Das ist der Normalzustand, nicht die Ausnahme. Unternehmen, die 20 oder 30 Jahre gewachsen sind, haben fast immer parallele Systeme, veraltete Vorlagen und implizites Wissen, das nur in einzelnen Köpfen sitzt. Ein ehrlicher Audit macht das sichtbar. Dann können Sie entscheiden: Bereinigung in einem separaten Projekt, Priorisierung bestimmter Datenbereiche, oder Start mit dem Teil der Daten, der tatsächlich sauber ist.',
  },
  {
    q: 'Wie nehme ich mein Team mit, ohne Angst vor KI zu schüren?',
    a: 'Frühzeitig, konkret und ohne falsche Versprechen. Wenn Mitarbeiter wissen, wofür ein KI-Tool eingesetzt wird, welche Aufgaben es übernimmt und welche Entscheidungen weiterhin beim Menschen liegen, ist die Akzeptanz deutlich höher. Change-Management fängt im ersten Strategieworkshop an, nicht im Roll-out-Plan. Wer das ans Ende schiebt, hat ein Werkzeug ohne Nutzer.',
  },
  {
    q: 'Wann sollte IT-Sicherheit eingebunden werden?',
    a: 'Von Tag eins. Nicht als Bremse, sondern als Co-Architekt. Was später nachgeschoben wird, kostet das Vielfache. DSGVO, Auftragsverarbeitungsverträge, Datenresidenz, Audit-Fähigkeit, branchenspezifische Anforderungen wie IATF 16949 oder MDR: Diese Themen verschwinden nicht dadurch, dass man sie ignoriert. Sie tauchen später wieder auf, zu einem viel ungünstigeren Zeitpunkt.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-semibold text-[#071013] hover:bg-[#faf9f7] transition-colors"
            aria-expanded={open === i}
            style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
          >
            {item.q}
            <span className={`ml-4 flex-shrink-0 text-[#f90093] text-lg transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 font-inter text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
