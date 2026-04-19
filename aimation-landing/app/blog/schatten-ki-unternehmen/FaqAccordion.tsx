'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Ist Schatten-KI wirklich so verbreitet?',
    a: 'Ja. Studien zeigen, dass drei von vier Wissensarbeitern KI-Tools nutzen — oft ohne Wissen oder Freigabe ihrer IT-Abteilung. Das ist kein Randphänomen, sondern Alltag in deutschen Unternehmen.',
  },
  {
    q: 'Was ist der Unterschied zu Schatten-IT?',
    a: 'Schatten-IT betraf Infrastruktur (jemand nutzt Dropbox statt Firmenserver). Schatten-KI betrifft die Verarbeitung von Unternehmensdaten und die Qualität von Entscheidungen. Das Risikoprofil ist grundlegend anders.',
  },
  {
    q: 'Drohen uns konkrete Strafen durch DSGVO-Verstöße?',
    a: 'Ja. Wenn personenbezogene Daten in nicht genehmigte KI-Tools eingegeben werden, ist das ein Verstoß gegen die DSGVO. Die Bußgelder können bis zu 4% des weltweiten Jahresumsatzes betragen. Dazu kommen Reputationsschäden.',
  },
  {
    q: 'Wie lange dauert es, eine KI-Richtlinie aufzusetzen?',
    a: 'Eine erste, funktionierende Richtlinie lässt sich in 2 bis 4 Wochen erstellen. Sie braucht keine 50 Seiten — eine Seite mit klaren Regeln ist wirksamer. Wir helfen dabei.',
  },
  {
    q: 'Was kostet eine sichere KI-Lösung als Alternative?',
    a: 'Das hängt vom Umfang ab. Ein Unternehmens-Account bei ChatGPT mit AVV kostet ab 25 Euro pro Nutzer pro Monat. Selbst gehostete Lösungen mit lokalen Modellen sind einmalig teurer im Aufbau, aber kostengünstiger im Betrieb und bieten maximalen Datenschutz.',
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
