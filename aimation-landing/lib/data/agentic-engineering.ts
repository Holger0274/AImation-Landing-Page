export const AGENTIC_ENGINEERING = {
  de: {
    definition: 'Ein agentisches Entwicklungssystem verbindet spezialisierte KI-Agenten mit den Werkzeugen der Produktentwicklung. Konzept, Detailkonstruktion, Zeichnung, Berechnung und Montagedokumentation erhalten eigene Aufgaben und Prüfschritte. Vorgaben und Freigaben bleiben bei Ihrem Entwicklungsteam.',
    evidence: 'Die neun AI2CAD-Videos zeigen Bausteine dieses Ansatzes. Teil 8 und 9 führen dieselbe Baugruppe bis zur Montageanleitung. Die übrigen Beispiele zeigen weitere Entwicklungsaufgaben; ihre durchgängige Verbindung wird in der Reihe noch nicht demonstriert.',
    question: 'Was ist ein agentisches Entwicklungssystem?',
    groups: [
      { title: 'Konzepte und Entwürfe', text: 'Konzeptagenten strukturieren Vorgaben und technische Zusammenhänge. In den Videos werden daraus erste CAD-Geometrien aus Text, Skizzen oder einer Patentbeschreibung.', links: [{ slug: 'prompt-zu-cad', label: '01 · Vorgabe zum Modell' }, { slug: 'patent-zu-3d', label: '06 · Patent zum 3D-Modell' }] },
      { title: 'Detailkonstruktion und Zeichnung', text: 'Konstruktionsagenten bearbeiten Parameter und Bauteile. Zeichnungsagenten leiten Ansichten, Maße und technische Hinweise ab. Teil 8 ergänzt den Zusammenbau aus vorbereiteten Einzelteilen.', links: [{ slug: 'konstruktion-pruefen', label: '03 · Konstruktion prüfen' }, { slug: 'technische-zeichnung', label: '04 · Zeichnung ableiten' }, { slug: 'zeichnung-zu-baugruppe', label: '08 · Baugruppe zusammensetzen' }] },
      { title: 'Berechnung und Übergabe', text: 'Berechnungsagenten steuern FEM-Läufe und vergleichen Ergebnisse. Agenten für die Fertigungs- und Montagevorbereitung erstellen CNC-Programme oder bebilderte Anleitungen. Die fachliche Freigabe ist ein eigener Schritt.', links: [{ slug: 'fem-nachweis', label: '05 · FEM auswerten' }, { slug: 'cnc-drehprogramm', label: '07 · CNC vorbereiten' }, { slug: 'baugruppe-zu-montageanleitung', label: '09 · Montage dokumentieren' }] },
    ],
  },
  en: {
    definition: 'An agentic engineering system connects specialised AI agents with product development tools. Concept development, detailed design, drawings, analysis and assembly documentation each have defined tasks and review steps. Your engineering team provides requirements and approvals.',
    evidence: 'The nine AI2CAD videos demonstrate building blocks of this approach. Parts 8 and 9 take the same assembly through to assembly instructions. The other examples show additional engineering tasks; the series does not yet demonstrate their end-to-end integration.',
    question: 'What is an agentic engineering system?',
    groups: [
      { title: 'Concepts and initial designs', text: 'Concept agents structure requirements and technical relationships. The videos turn text, sketches or a patent description into initial CAD geometry.', links: [{ slug: 'prompt-zu-cad', label: '01 · Requirements to model' }, { slug: 'patent-zu-3d', label: '06 · Patent to 3D model' }] },
      { title: 'Detailed design and drawings', text: 'Design agents work on parameters and components. Drawing agents derive views, dimensions and technical notes. Part 8 adds assembly from prepared individual components.', links: [{ slug: 'konstruktion-pruefen', label: '03 · Review the design' }, { slug: 'technische-zeichnung', label: '04 · Create the drawing' }, { slug: 'zeichnung-zu-baugruppe', label: '08 · Build the assembly' }] },
      { title: 'Analysis and handover', text: 'Analysis agents control FEM runs and compare results. Agents for manufacturing and assembly preparation produce CNC programs or illustrated instructions. Engineering approval is a separate step.', links: [{ slug: 'fem-nachweis', label: '05 · Evaluate FEM results' }, { slug: 'cnc-drehprogramm', label: '07 · Prepare CNC programs' }, { slug: 'baugruppe-zu-montageanleitung', label: '09 · Document assembly' }] },
    ],
  },
} as const;
