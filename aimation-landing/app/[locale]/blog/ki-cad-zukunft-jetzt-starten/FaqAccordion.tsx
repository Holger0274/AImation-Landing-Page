import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Ist KI + CAD nicht noch zu unreif für den Produktiveinsatz?',
    answer: 'Differenziert betrachtet: Für einfache parametrische Teile, Variantenkonstruktion und die Digitalisierung von Altbestandzeichnungen funktioniert KI heute schon zuverlässig. Für komplexe Baugruppen mit Toleranzketten, Normkonformität und Bewegungsanalyse braucht es weiterhin erfahrene Konstrukteure. Der Schlüssel ist, mit den reifen Teilbereichen zu starten und dabei Teamerfahrung aufzubauen.',
  },
  {
    question: 'Was hat sich mit Claude Opus 4.7 konkret verändert?',
    answer: 'Die unterstützte Bildauflösung hat sich mehr als verdreifacht, von rund 1,15 auf 3,75 Megapixel. Anthropics Sicherheitspartner XBOW berichtet für vergleichbare visuelle Aufgaben (automatisiertes Auswerten von Bildschirminhalten) einen Sprung von 54,5 % auf 98,5 % Genauigkeit. Für technische Zeichnungen gibt es dazu noch keine offizielle Zahl, aber die Auflösungssteigerung macht dichte Zeichnungen mit Bemaßungen und Symbolbibliotheken erstmals grundsätzlich lesbar.',
  },
  {
    question: 'Welche CAD-Systeme lassen sich heute an KI anbinden?',
    answer: 'Über das Model Context Protocol (MCP) gibt es aktive Integrationen für FreeCAD, Blender, Onshape und Fusion 360. Die Community arbeitet an Anbindungen für AutoCAD und SolidWorks. Für DACH-Unternehmen empfehlen wir den Start mit FreeCAD oder Onshape, da hier die Datensouveränität einfacher sichergestellt werden kann.',
  },
  {
    question: 'Was ist ein Proof of Concept (PoC) und wie lange dauert er?',
    answer: 'Ein PoC ist ein kleines, zeitlich begrenztes Experiment mit einem konkreten Lernziel. Typischerweise dauert er 4 bis 8 Wochen, kostet deutlich weniger als eine klassische Digitalisierungsstudie und liefert genau das, was Whitepapers nicht liefern können: die ehrliche Antwort auf die Frage, was in Ihrem Unternehmen mit Ihren Daten funktioniert und was nicht.',
  },
  {
    question: 'Wie stelle ich sicher, dass keine Konstruktionsdaten in US-Clouds abfließen?',
    answer: 'Wir empfehlen für DACH-Mittelstand self-hosted Lösungen: n8n für Automatisierung, Claude über AWS Bedrock mit Frankfurt-Region, FreeCAD oder Onshape mit Unternehmenskonto. Damit bleiben alle Daten in Ihrer Kontrolle. Wir helfen Ihnen, den richtigen Stack für Ihre Anforderungen auszuwählen.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
