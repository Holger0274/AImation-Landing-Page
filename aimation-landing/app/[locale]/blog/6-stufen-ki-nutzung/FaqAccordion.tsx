'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Muss jedes Unternehmen auf Stufe 6?',
    a: 'Nein. Nicht jedes Unternehmen muss auf Stufe 6. Viele KMUs erzielen den größten Nutzen zwischen Stufe 3 und 5. Das hängt von Ihrer Branche, Ihren Prozessen und Ihrem Budget ab. Wichtig ist, die eigene Stufe zu kennen — und den nächsten sinnvollen Schritt zu machen.',
  },
  {
    q: 'Wie schnell kann man von Stufe 1 auf Stufe 3 kommen?',
    a: 'Mit dem richtigen Fokus in 3 bis 6 Monaten. Stufe 1 zu 2 ist eine Frage von Schulung und ein paar Wochen Konfiguration. Stufe 2 zu 3 braucht technische Umsetzung: erste Automatisierungen mit n8n oder Make.com. Mit unserer Unterstützung sind erste Workflows in 2 bis 4 Wochen live.',
  },
  {
    q: 'Was kostet der Übergang zwischen den Stufen?',
    a: 'Das ist sehr unterschiedlich. Stufe 1 zu 2 kostet vor allem Schulungszeit. Stufe 3 und 4 können mit 5.000 bis 20.000 Euro Investition realisiert werden, je nach Komplexität. Stufe 5 und 6 sind größere Projekte. In allen Fällen gilt: erst den ROI berechnen, dann entscheiden.',
  },
  {
    q: 'Können wir auf mehreren Stufen gleichzeitig sein?',
    a: 'Ja, das ist häufig so. Ihre Marketing-Abteilung ist vielleicht auf Stufe 4, Ihre Produktion noch auf Stufe 1. Das ist normal. Das Ziel ist nicht, überall gleichzeitig auf Stufe 6 zu sein, sondern die richtigen Bereiche systematisch zu entwickeln.',
  },
  {
    q: 'Was ist der häufigste Fehler beim KI-Einstieg?',
    a: 'Zu viel auf einmal wollen. Unternehmen, die versuchen, sofort auf Stufe 5 zu springen, scheitern oft an mangelndem Verständnis in der Belegschaft und unrealistischen Erwartungen. Der bessere Weg: Stufe 2 oder 3 als Einstieg, messen, lernen, dann skalieren.',
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
