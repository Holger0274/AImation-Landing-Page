'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Welche KI-Modelle funktionieren für diese Prompts?',
    a: 'Diese Muster funktionieren mit allen großen Modellen: ChatGPT (GPT-4o), Claude (Anthropic) und Gemini (Google). Die Ergebnisse variieren leicht, aber die Grundprinzipien gelten für alle. Für komplexe Reasoning-Aufgaben (Muster 03, 07) empfehlen wir Claude oder GPT-4o.',
  },
  {
    q: 'Wie lang sollte ein guter Prompt sein?',
    a: 'Länge allein ist kein Qualitätsmerkmal. Ein präziser 3-Satz-Prompt kann besser sein als ein langes, vages Prompt. Als Faustregel: Rollen und Kontext erklären, Aufgabe klar benennen, Erwartung an Format und Länge nennen.',
  },
  {
    q: 'Was ist Prompt Engineering auf Unternehmensebene?',
    a: 'Einzelne gute Prompts sind ein Anfang. Unternehmensweites Prompt Engineering bedeutet: Standardisierte Prompt-Vorlagen für wiederkehrende Aufgaben, eine Prompt-Bibliothek die das ganze Team nutzt, und Quality-Gates für KI-generierte Outputs. Wir helfen dabei, genau das aufzubauen.',
  },
  {
    q: 'Können diese Prompts auch auf Deutsch verwendet werden?',
    a: 'Ja. Alle modernen KI-Modelle verstehen und produzieren sehr gutes Deutsch. Prompten Sie auf Deutsch, wenn die gewünschte Ausgabe auf Deutsch sein soll. Für technische Fachbegriffe kann Englisch manchmal präzisere Ergebnisse liefern.',
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
