export const ELECTRICAL_PATH = '/ki-elektrik';
export const ELECTRICAL_VIDEO = {
  id: 'schaltplan', path: '/ki-elektrik/schaltplan-motorabgang', number: '01',
  seconds: 112, duration: '1:52', uploadDate: '2026-11-01',
  de: {
    title: 'Vom Satz zum elektrischen Schaltplan',
    description: 'Eine Pumpe mit 4 kW an 400 V, Direktanlauf: Holger Peschke zeigt, wie KI die Aufgabe vorstrukturiert, Annahmen offenlegt und nach Rückmeldung einen Schaltplan erstellt. Die Aufnahme zeigt anschließend die Schaltzustände und acht interne Prüfungen.',
    metaDescription: 'KI und Elektroplanung im Video: vom Auftrag für einen Motorabgang zum Schaltplan. Rechenannahmen, Schaltzustände und interne Prüfungen in 1:52 Minuten.',
    check: 'Eigene Entwicklungsdemonstration von AImation. Die acht gezeigten Prüfungen ersetzen weder eine vollständige Normenprüfung noch eine technische Freigabe. Annahmen, Dimensionierung und Schutzmaßnahmen muss eine Elektrofachkraft für die konkrete Anlage prüfen und freigeben.',
    poster: 'Videoausschnitt: Motorabgang einer Pumpe mit Leistungs- und Steuerstromkreis sowie visualisiertem Einschaltzustand.',
    chapters: [
      { seconds: 21, title: 'Die Aufgabe', text: 'Eine Pumpe, 4 kW, 400 V. Der Auftrag verlangt zunächst die Werte, bevor ein Plan entsteht.' },
      { seconds: 28, title: 'Die Rechnung', text: 'Die KI legt den Rechenweg und vorgeschlagene Werte vor. Die zugrunde liegenden Annahmen bleiben sichtbar.' },
      { seconds: 49, title: 'Die Annahmen', text: 'Fehlende Angaben werden als Annahmen benannt. Erst nach der Rückmeldung geht es an den Plan.' },
      { seconds: 70, title: 'Der Schaltplan', text: 'Leistungs- und Steuerstromkreis werden sichtbar. Die Animation zeigt Bereit, Ein, Selbsthaltung und Aus.' },
      { seconds: 91, title: 'Die Prüfung', text: 'Acht interne Prüfungen werden angezeigt. Die fachliche Freigabe bleibt bei der Elektrofachkraft.' },
    ],
  },
  en: {
    title: 'From a sentence to an electrical schematic',
    description: 'A 4 kW pump on a 400 V supply, direct-on-line starting: Holger Peschke shows how AI structures the task, states its assumptions and creates a schematic after feedback. The recording then shows the switching states and eight internal checks.',
    metaDescription: 'AI and electrical planning on video: from a motor feeder brief to a schematic. Calculation assumptions, switching states and internal checks in 1:52.',
    check: 'AImation’s own development demonstration. The eight checks shown replace neither a full standards review nor technical approval. A qualified electrical professional must review and approve the assumptions, sizing and protective measures for the specific installation.',
    poster: 'Video frame: pump motor feeder with power and control circuits and a visualised on state.',
    chapters: [
      { seconds: 21, title: 'The task', text: 'One pump, 4 kW, 400 V. The brief asks for the values before a drawing is created.' },
      { seconds: 28, title: 'The calculation', text: 'AI presents its calculation and proposed values. The underlying assumptions remain visible.' },
      { seconds: 49, title: 'The assumptions', text: 'Missing inputs are labelled as assumptions. The drawing follows only after feedback.' },
      { seconds: 70, title: 'The schematic', text: 'Power and control circuits become visible. The animation shows ready, on, self-holding and off.' },
      { seconds: 91, title: 'The review', text: 'Eight internal checks are displayed. Technical approval remains with a qualified electrical professional.' },
    ],
  },
} as const;
