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

export const ELECTRICAL_SHORT_CIRCUIT_VIDEO = {
  id: 'kurzschluss', path: '/ki-elektrik/kurzschluss-wendeschuetz', number: '02',
  seconds: 112, duration: '1:52', uploadDate: '2026-11-01',
  de: {
    title: 'Der Kurzschluss-Test: Wendeschütz und Stern-Dreieck',
    description: 'Ein Förderband mit 4 kW an 400 V soll rechts und links laufen. Holger Peschke zeigt, wie KI einen Wendeschützabgang vorbereitet und Fehlerszenarien im Schaltplan durchspielt: beide Taster gleichzeitig, ein überbrückter Hilfsöffner und fehlende Verriegelungen. Anschließend folgt ein Entwurf für den Stern-Dreieck-Anlauf eines 22-kW-Lüfters.',
    metaDescription: 'KI × Elektro, Teil 2: Wendeschützschaltung, Verriegelungen und Kurzschluss in der Simulation. Dazu ein Stern-Dreieck-Entwurf. Video mit Kapiteln, 1:52 Minuten.',
    check: 'Eigene Entwicklungsdemonstration von AImation. Die Fehlerfälle werden ausschließlich im Modell durchgespielt, nicht an einer real verdrahteten Anlage. Die gezeigten KI-Befunde und Dimensionierungen sind keine Normenprüfung oder technische Freigabe. Eine Elektrofachkraft muss Schaltung, Schutzmaßnahmen und Annahmen für den konkreten Einsatz prüfen.',
    poster: 'Videoausschnitt: Wendeschützschaltung eines Förderbands mit visualisierten Strompfaden und dem simulierten gleichzeitigen Betätigen beider Richtungstaster.',
    chapters: [
      { seconds: 12, title: 'Der Auftrag', text: 'Ein Förderband, 4 kW, 400 V. Die KI schlägt Werte und Betriebsmittel vor, bevor der Plan entsteht.' },
      { seconds: 24, title: 'Vom Entwurf zum Schaltplan', text: 'Nach der Rückmeldung entsteht der Plan. Die Aufnahme zeigt Rechtslauf, Linkslauf und Aus.' },
      { seconds: 42, title: 'Beide Taster gleichzeitig', text: 'Der erste Stresstest spielt beide Richtungstaster gleichzeitig durch. Die Reaktion der Verriegelung wird sichtbar.' },
      { seconds: 54, title: 'Ein Hilfsöffner wird überbrückt', text: 'Eine Schutzfunktion wird im Modell verändert. Die KI zeigt den Ablauf und benennt Grenzen ihrer Rechnung.' },
      { seconds: 66, title: 'Ohne Verriegelungen', text: 'Der nächste Modellfall entfernt die Verriegelungen. Die KI meldet einen Kurzschluss und zeigt die zugehörige Schaltfolge.' },
      { seconds: 84, title: 'Stern-Dreieck für einen Lüfter', text: 'Ein zweiter Auftrag: 22 kW und Stern-Dreieck-Anlauf. Die vorgeschlagenen Werte werden vor dem Aufbau des Plans besprochen.' },
      { seconds: 96, title: 'Den Anlauf mitverfolgen', text: 'Die Darstellung zeigt Stern, Umschaltpause, Dreieck und Aus. Die fachliche Freigabe bleibt bei der Elektrofachkraft.' },
    ],
  },
  en: {
    title: 'The short-circuit test: reversing contactors and star-delta',
    description: 'A 4 kW conveyor on a 400 V supply needs forward and reverse operation. Holger Peschke shows how AI prepares a reversing contactor circuit and explores fault scenarios in the schematic: both buttons pressed together, a bypassed auxiliary contact and missing interlocks. A design for star-delta starting of a 22 kW fan follows.',
    metaDescription: 'AI × Electrical, part 2: reversing contactors, interlocks and a simulated short circuit, followed by a star-delta design. A 1:52 video with chapters.',
    check: 'AImation’s own development demonstration. Fault scenarios are explored only in the model, not on a physically wired installation. The AI findings and sizing shown do not constitute a standards review or technical approval. A qualified electrical professional must review the circuit, protective measures and assumptions for the specific application.',
    poster: 'Video frame: reversing contactor circuit for a conveyor, showing current paths and a simulation with both direction buttons pressed together.',
    chapters: [
      { seconds: 12, title: 'The task', text: 'One conveyor, 4 kW, 400 V. AI proposes values and components before creating the drawing.' },
      { seconds: 24, title: 'From design to schematic', text: 'The plan follows feedback. The recording shows forward, reverse and off.' },
      { seconds: 42, title: 'Both buttons at once', text: 'The first stress test simulates both direction buttons being pressed together and shows the interlock response.' },
      { seconds: 54, title: 'Bypassing an auxiliary contact', text: 'A protective function is changed in the model. AI shows the sequence and identifies limits of its calculation.' },
      { seconds: 66, title: 'Without interlocks', text: 'The next model scenario removes the interlocks. AI reports a short circuit and shows the corresponding switching sequence.' },
      { seconds: 84, title: 'Star-delta starting for a fan', text: 'A second brief: 22 kW and star-delta starting. The proposed values are discussed before the plan is built.' },
      { seconds: 96, title: 'Follow the starting sequence', text: 'The visualisation shows star, transition pause, delta and off. Technical approval remains with a qualified electrical professional.' },
    ],
  },
} as const;

export const ELECTRICAL_VIDEOS = [ELECTRICAL_VIDEO, ELECTRICAL_SHORT_CIRCUIT_VIDEO] as const;
