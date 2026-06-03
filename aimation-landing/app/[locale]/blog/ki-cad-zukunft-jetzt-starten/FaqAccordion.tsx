'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Ist KI + CAD nicht noch zu unreif für den Produktiveinsatz?',
    a: 'Differenziert betrachtet: Für einfache parametrische Teile, Variantenkonstruktion und die Digitalisierung von Altbestandzeichnungen funktioniert KI heute schon zuverlässig. Für komplexe Baugruppen mit Toleranzketten, Normkonformität und Bewegungsanalyse braucht es weiterhin erfahrene Konstrukteure. Der Schlüssel ist, mit den reifen Teilbereichen zu starten. Und dabei Teamerfahrung aufzubauen.',
  },
  {
    q: 'Was hat sich mit Claude Opus 4.7 konkret verändert?',
    a: 'Die visuelle Genauigkeit beim Lesen technischer Zeichnungen ist von 54,5 % auf 98,5 % gestiegen. Kein Inkrement, sondern ein Kategoriesprung. Kombiniert mit der mehr als verdreifachten Auflösung kann das Modell dichte Zeichnungen mit Bemaßungen und Symbolbibliotheken erstmals zuverlässig lesen. Für Konstruktionsabteilungen öffnet das völlig neue Automatisierungsmöglichkeiten.',
  },
  {
    q: 'Welche CAD-Systeme lassen sich heute an KI anbinden?',
    a: 'Über das Model Context Protocol (MCP) gibt es aktive Integrationen für FreeCAD, Blender, Onshape und Fusion 360. Die Community arbeitet an Anbindungen für AutoCAD und SolidWorks. Für DACH-Unternehmen empfehlen wir den Start mit FreeCAD oder Onshape, da hier die Datensouveränität einfacher sichergestellt werden kann.',
  },
  {
    q: 'Was ist ein Proof of Concept (PoC) und wie lange dauert er?',
    a: 'Ein PoC ist ein kleines, zeitlich begrenztes Experiment mit einem konkreten Lernziel. Typischerweise dauert er 4 bis 8 Wochen, kostet deutlich weniger als eine klassische Digitalisierungsstudie und liefert genau das, was Whitepapers nicht liefern können: die ehrliche Antwort auf die Frage, was in Ihrem Unternehmen mit Ihren Daten funktioniert und was nicht.',
  },
  {
    q: 'Wie stelle ich sicher, dass keine Konstruktionsdaten in US-Clouds abfließen?',
    a: 'Wir empfehlen für DACH-Mittelstand self-hosted Lösungen: n8n für Automatisierung, Claude über AWS Bedrock mit Frankfurt-Region, FreeCAD oder Onshape mit Unternehmenskonto. Damit bleiben alle Daten in Ihrer Kontrolle. Wir helfen Ihnen, den richtigen Stack für Ihre Anforderungen auszuwählen.',
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
