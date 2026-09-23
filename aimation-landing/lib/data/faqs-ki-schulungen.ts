
export function getTrainingFaqs(en = false) {
  return en ? [
    { question: 'Which series should we start with?', answer: 'AI introduction for everyone is the starting point without prior knowledge. Teams already using AI can move on to the follow-up series, AI tools or Microsoft 365 Copilot. We discuss the right choice before your training.' },
    { question: 'Is a learning series the same as a one-day workshop?', answer: 'No. A learning series contains portal materials across several modules. We agree the topics, exercises and duration of your workshop separately, based on your team’s knowledge and tasks.' },
    { question: 'Do you use examples from our company?', answer: 'Yes. Before the training, we collect use cases and problems from your team. In the workshop, we work on exactly those and show how AI can solve them. General examples only come in where they explain a basic principle.' },
    { question: 'What does in-house training cost?', answer: 'You get a fixed price for each training. We agree it once content, duration and format are clear, independent of participant count. Ask us for an offer.' },
    { question: 'Is portal access included?', answer: 'We agree access to supporting learning materials, their scope and duration as part of your training offer. The catalogue does not imply an automatically included subscription.' },
    { question: 'Are all announced series available?', answer: 'Six learning series currently have materials in the portal. Automation, leadership and AI, Claude Code, technical product development, Agentic OS and data structures are in preparation. We discuss individual workshop topics separately.' },
  ] : [
    { question: 'Mit welcher Lernreihe sollten wir anfangen?', answer: 'Ohne Vorkenntnisse ist KI-Einstieg für alle der Startpunkt. Teams, die KI bereits nutzen, können mit der Aufbau-Reihe, KI-Tools oder Microsoft 365 Copilot weitermachen. Den passenden Einstieg klären wir vor Ihrer Schulung.' },
    { question: 'Ist eine Lernreihe dasselbe wie ein Schulungstag?', answer: 'Nein. Eine Lernreihe enthält Portal-Materialien in mehreren Modulen. Themen, Übungen und Dauer Ihres Workshops vereinbaren wir separat, passend zum Vorwissen und zu den Aufgaben Ihres Teams.' },
    { question: 'Arbeiten Sie mit Beispielen aus unserem Unternehmen?', answer: 'Ja. Vor der Schulung sammeln wir Use Cases und Problemstellungen aus Ihrem Team. Im Workshop bearbeiten wir genau diese und zeigen, wie KI sie lösen kann. Allgemeine Beispiele kommen nur dort vor, wo sie ein Grundprinzip erklären.' },
    { question: 'Was kostet eine Inhouse-Schulung?', answer: 'Sie bekommen für jede Schulung einen Festpreis. Den legen wir fest, sobald Inhalt, Dauer und Format klar sind, unabhängig von der Teilnehmerzahl. Fragen Sie einfach ein Angebot an.' },
    { question: 'Ist der Portalzugang enthalten?', answer: 'Zugang, Umfang und Dauer der begleitenden Lernmaterialien vereinbaren wir im Schulungsangebot. Aus dem Katalog ergibt sich kein automatisch enthaltenes Portal-Abonnement.' },
    { question: 'Sind alle angekündigten Reihen schon verfügbar?', answer: 'Für sechs Lernreihen liegen Materialien im Portal vor. Automatisierung, Leadership und KI, Claude Code, technische Produktentwicklung, Agentic OS und Datenstrukturen sind in Vorbereitung. Individuelle Workshop-Themen besprechen wir separat.' },
  ];
}
export const FAQ_ITEMS = getTrainingFaqs();
