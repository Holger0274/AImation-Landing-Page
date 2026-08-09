import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Welche KI-Modelle funktionieren für diese Prompts?',
    answer: 'Diese Muster funktionieren mit allen großen Modellen: ChatGPT (GPT-4o), Claude (Anthropic) und Gemini (Google). Die Ergebnisse variieren leicht, aber die Grundprinzipien gelten für alle. Für komplexe Reasoning-Aufgaben (Muster 03, 07) empfehlen wir Claude oder GPT-4o.',
  },
  {
    question: 'Wie lang sollte ein guter Prompt sein?',
    answer: 'Länge allein ist kein Qualitätsmerkmal. Ein präziser 3-Satz-Prompt kann besser sein als ein langes, vages Prompt. Als Faustregel: Rollen und Kontext erklären, Aufgabe klar benennen, Erwartung an Format und Länge nennen.',
  },
  {
    question: 'Was ist Prompt Engineering auf Unternehmensebene?',
    answer: 'Einzelne gute Prompts sind ein Anfang. Unternehmensweites Prompt Engineering bedeutet: Standardisierte Prompt-Vorlagen für wiederkehrende Aufgaben, eine Prompt-Bibliothek die das ganze Team nutzt, und Quality-Gates für KI-generierte Outputs. Wir helfen dabei, genau das aufzubauen.',
  },
  {
    question: 'Können diese Prompts auch auf Deutsch verwendet werden?',
    answer: 'Ja. Alle modernen KI-Modelle verstehen und produzieren sehr gutes Deutsch. Prompten Sie auf Deutsch, wenn die gewünschte Ausgabe auf Deutsch sein soll. Für technische Fachbegriffe kann Englisch manchmal präzisere Ergebnisse liefern.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
