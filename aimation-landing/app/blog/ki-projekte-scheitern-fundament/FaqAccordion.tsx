'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Woran scheitern KI-Projekte im Mittelstand am häufigsten?',
    a: 'In fast jedem Discovery-Gespräch zeigt sich dasselbe Muster: nicht das Modell ist das Problem, sondern was darunter liegt. Daten in verschiedenen Systemen ohne klare Zuständigkeit, Compliance-Fragen die niemand vorab gestellt hat, und ein Team das nicht mitgenommen wurde. Das sind die drei häufigsten Stopper. Die Technologie selbst ist dabei oft die kleinste Baustelle.',
  },
  {
    q: 'Was ist ein Proof of Concept und warum empfehlen Sie das als Einstieg?',
    a: 'Ein PoC ist ein kleines, zeitlich begrenztes Experiment mit einem konkreten Lernziel – typischerweise 4 bis 6 Wochen, ein klar umrissener Usecase, ein definiertes Ergebnis. Der Vorteil: Er liefert die ehrliche Antwort auf die Frage, was in Ihrem Unternehmen mit Ihren Daten und Ihren Prozessen wirklich funktioniert. Was auf Anhieb in der Demo läuft, tut das in der Praxis oft nicht. Der PoC macht diesen Unterschied sichtbar – bevor große Budgets freigegeben werden.',
  },
  {
    q: 'Wie gehen Sie mit DSGVO und dem EU AI Act um?',
    a: 'Compliance ist für uns kein Thema, das am Ende noch schnell „umgebaut" wird. Es ist Teil der eigentlichen Konstruktionsaufgabe. Wir empfehlen für den DACH-Mittelstand self-hosted Lösungen: Claude über AWS Bedrock mit Frankfurt-Region, n8n für Automatisierung, lokale Speicherung. Damit bleiben Daten in Ihrer Kontrolle und verlassen die EU nicht. Der genaue Setup hängt von Ihrer Situation ab – dafür ist das Discovery-Gespräch da.',
  },
  {
    q: 'Was passiert im Discovery-Schritt vor dem PoC?',
    a: 'Im Discovery schauen wir uns an, welche Tools tatsächlich im Einsatz sind, wie Daten fließen, wo sie liegen und welche Prozesse betroffen sind. Das dauert in der Regel ein bis zwei Workshops. Die Hälfte der späteren Reibung ist damit schon sichtbar, bevor die erste Zeile Code geschrieben wird. Dieser Schritt wird bei uns nie übersprungen.',
  },
  {
    q: 'Warum sollte ich nicht einfach mit einem großen KI-Strategie-Projekt starten?',
    a: 'Weil KI-Fähigkeiten sich monatlich weiterentwickeln. Eine Strategie, die auf ungeprüften Annahmen über Daten, Prozesse und Team aufbaut, ist in diesem Umfeld bestenfalls Theater. Bis eine große Roadmap umgesetzt ist, hat sich die Technologie bereits verändert. Ein konkreter PoC über vier bis sechs Wochen liefert in der Hälfte der Zeit mehr belastbare Erkenntnisse als drei Beraterpräsentationen.',
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
