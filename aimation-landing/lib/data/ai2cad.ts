export const AI2CAD_PATH = '/ai2cad';

// Four current recordings supplied by Holger on 8 October 2026.
// Website assets are anonymised derivatives, not the two earlier recordings.
export const AI2CAD_CHAPTERS = [
  {
    id: 'prompt', slug: 'prompt-zu-cad', number: '01', duration: '1:30', seconds: 90,
    de: {
      title: 'Vom Prompt zum Bauteil', short: 'Text → Modell',
      description: 'Eine Montageplatte, beschrieben mit Maßen und Bauabschnitten. Das KI-Sprachmodell bedient das angebundene CAD-System und baut die Geometrie Schritt für Schritt auf. Die Maße bleiben anschließend editierbar.',
      features: ['Grundplatte 180 × 120 × 12 mm mit sieben Modellierschritten', 'Bohrungen, Senkungen, Taschen und Außenradien', 'Maße und Volumen aus der erzeugten Geometrie zurücklesen'],
      check: 'Die Modellprüfung gleicht die Geometrie mit der Vorgabe ab. Belastbarkeit und Eignung für den Einsatz müssen gesondert bewertet werden.',
      poster: 'Parametrische Montageplatte mit Bohrungen und Taschen aus der AI2CAD-Demonstration',
    },
    en: {
      title: 'From prompt to part', short: 'Text → model',
      description: 'A mounting plate described through dimensions and modelling steps. The language model operates the connected CAD system and builds the geometry step by step. Dimensions remain editable afterwards.',
      features: ['180 × 120 × 12 mm base plate built in seven modelling steps', 'Holes, counterbores, pockets and corner radii', 'Read dimensions and volume back from the resulting geometry'],
      check: 'The model check compares geometry against the specification. Load capacity and suitability for the intended application require separate assessment.',
      poster: 'Parametric mounting plate with holes and pockets from the AI2CAD demonstration',
    },
  },
  {
    id: 'skizze', slug: 'handskizze-zu-cad', number: '02', duration: '1:30', seconds: 90,
    de: {
      title: 'Von der Skizze zum Modell', short: 'Skizze → Modell',
      description: 'Ein Foto einer Handskizze ist der Ausgangspunkt für eine abgesetzte Welle. Die KI trennt lesbare Maße von abgeleiteten Werten und Annahmen. Vier Rückfragen klären den Entwurf, bevor das Modell entsteht.',
      features: ['Skizzenmaße erkennen und fehlende Angaben benennen', 'Zwölf benannte Parameter mit ihrer Herkunft dokumentieren', 'Maßänderung testen: Die Gesamtlänge folgt dem Parameter'],
      check: 'Fehlende Maße und die vereinfachte Gewindedarstellung werden ausdrücklich abgestimmt. Das Ergebnis ist ein Entwurfsmodell.',
      poster: 'Handskizze und parametrische Welle aus der AI2CAD-Demonstration',
    },
    en: {
      title: 'From sketch to model', short: 'Sketch → model',
      description: 'A photograph of a hand sketch becomes the starting point for a stepped shaft. AI separates readable dimensions from derived values and assumptions. Four questions clarify the design before modelling begins.',
      features: ['Read sketch dimensions and identify missing information', 'Document twelve named parameters and their origins', 'Test a dimension change: overall length follows the parameter'],
      check: 'Missing dimensions and the simplified thread representation are explicitly agreed. The result is a design model.',
      poster: 'Hand sketch and parametric shaft from the AI2CAD demonstration',
    },
  },
  {
    id: 'drehteil', slug: 'konstruktion-pruefen', number: '03', duration: '2:02', seconds: 122,
    de: {
      title: 'Den Entwurf hinterfragen', short: 'Entwurf → Prüfung',
      description: 'Die KI liest Parameter und Geometrie aus und meldet Auffälligkeiten: fehlende Freistiche, scharfe Schultern und offene Funktionsangaben. Daraus folgen Rückfragen, ein Toleranzvorschlag und Änderungen am Modell nach Freigabe.',
      features: ['Lagersitze, Lastfall, Werkstoff und Fertigung klären', 'Annahmen und vorgeschlagene Toleranzen begründen', 'Freistiche und eine Einführfase im Modell ergänzen'],
      check: 'In der Demo darf die KI Annahmen vorschlagen. Lagerauswahl, Normbezüge und Funktionsmaße müssen fachlich geprüft werden.',
      poster: 'Abgesetzte Welle mit markierten Schultern und Freistichen aus der AI2CAD-Demonstration',
    },
    en: {
      title: 'Question the design', short: 'Design → review',
      description: 'AI reads parameters and geometry and flags issues: missing reliefs, sharp shoulders and unresolved functional requirements. Questions, proposed tolerances and approved model changes follow.',
      features: ['Clarify bearing seats, load case, material and manufacturing', 'Explain assumptions and proposed tolerances', 'Add reliefs and a lead-in chamfer to the model'],
      check: 'The demo allows AI to propose assumptions. Bearing selection, standards references and functional dimensions require engineering review.',
      poster: 'Stepped shaft with highlighted shoulders and reliefs from the AI2CAD demonstration',
    },
  },
  {
    id: 'zeichnung', slug: 'technische-zeichnung', number: '04', duration: '2:20', seconds: 140,
    de: {
      title: 'Vom Modell zur Zeichnung', short: 'Modell → Zeichnung',
      description: 'Auf einem A3-Blatt entstehen Ansichten, Bemaßungen, Toleranzrahmen und Oberflächenangaben. Die KI betrachtet die Zeichnung als Bild, korrigiert Überlagerungen und hält die verbleibenden Prüfaufgaben fest.',
      features: ['Hauptansichten 2:1, Einzelheiten 5:1 und Isometrie', 'Passungen, Bezüge und technische Hinweise eintragen', 'Sichtprüfung wiederholen und Export zur Freigabe vorschlagen'],
      check: 'Offen bleiben in der Demo eine zu niedrige Lagerschulter und der Abgleich einzelner Freistichmaße mit dem Normblatt. Eine Fertigungsfreigabe ist damit nicht belegt.',
      poster: 'Technische Zeichnung der Welle mit Ansichten, Bemaßungen und vergrößerten Einzelheiten',
    },
    en: {
      title: 'From model to drawing', short: 'Model → drawing',
      description: 'Views, dimensions, tolerance frames and surface specifications take shape on an A3 sheet. AI examines the drawing as an image, corrects overlapping elements and records the remaining review tasks.',
      features: ['Main views at 2:1, details at 5:1 and an isometric view', 'Add fits, datums and technical notes', 'Repeat visual checks and propose export for approval'],
      check: 'The demo leaves a bearing shoulder with insufficient height and individual relief dimensions to check against the standard. Manufacturing approval has not been demonstrated.',
      poster: 'Technical shaft drawing with views, dimensions and enlarged details',
    },
  },
] as const;

export const AI2CAD_DATE = '2026-10-08';

export function getAI2CADFaqs(en: boolean) {
  return en ? [
    { question: 'What is AI2CAD?', answer: 'AI2CAD is an AImation demonstration of CAD automation using a large language model (LLM). The LLM operates a connected CAD system, creates parametric parts, proposes design corrections and prepares a technical drawing. Four videos show a mounting plate and a stepped shaft.' },
    { question: 'Can a language model operate CAD without mouse clicks?', answer: 'In this demonstration, the language model performs the CAD operations through a tool interface. It sets parameters, creates sketches and features, selects views and prepares the drawing. Instructions, questions and approvals are exchanged in conversation. No manual mouse clicks in the CAD system are used for these steps.' },
    { question: 'Can AI turn a hand sketch into an editable CAD model?', answer: 'Chapter 2 shows a photographed hand sketch becoming a parametric shaft with twelve named parameters. The model separates readable dimensions, derived values and assumptions. Missing information is clarified before modelling. A parameter change from 25 to 30 mm changes overall length from 145 to 150 mm.' },
    { question: 'Who is this CAD automation demonstration for?', answer: 'AI2CAD addresses design engineers, product developers and heads of engineering in technical SMEs. Recurring modelling tasks, dimension variants and drawing preparation are possible starting points. The CAD interface, design rules and required review steps must be assessed for each company.' },
    { question: 'Does AI2CAD work with our CAD system?', answer: 'The videos demonstrate one connected CAD system. Transfer depends on the available API or automation interface, permitted tools and data requirements. In an initial conversation, AImation checks your CAD environment and a specific design task. Compatibility with every CAD system is not established.' },
    { question: 'Is the AI-generated drawing ready for manufacturing?', answer: 'The demonstrated drawing still requires engineering review. Chapter 4 identifies a bearing shoulder with insufficient height and relief dimensions that need checking against the relevant standard. A design engineer must approve function, fits, standards and manufacturability before the drawing goes to a supplier.' },
  ] : [
    { question: 'Was ist AI2CAD?', answer: 'AI2CAD ist eine Demonstration von AImation zur CAD-Automatisierung mit einem Large Language Model (LLM). Das LLM bedient ein angebundenes CAD-System, erstellt parametrische Bauteile, schlägt Konstruktionskorrekturen vor und bereitet eine technische Zeichnung vor. Vier Videos zeigen den Ablauf an einer Montageplatte und einer abgesetzten Welle.' },
    { question: 'Kann ein Large Language Model CAD ohne Mausklicks steuern?', answer: 'In dieser Demonstration führt das LLM die CAD-Arbeitsschritte über eine Werkzeugschnittstelle aus. Es setzt Parameter, erstellt Skizzen und Formelemente, wählt Ansichten und baut die Zeichnung auf. Vorgaben, Rückfragen und Freigaben erfolgen im Dialog. Für diese Schritte gibt es keine manuellen Mausklicks im CAD-System.' },
    { question: 'Kann KI aus einer Handskizze ein editierbares CAD-Modell erstellen?', answer: 'Kapitel 2 zeigt, wie aus einer fotografierten Handskizze eine parametrische Welle mit zwölf benannten Parametern entsteht. Die KI trennt lesbare Maße, abgeleitete Werte und Annahmen. Fehlende Angaben werden vor dem Modellieren geklärt. Eine Parameteränderung von 25 auf 30 mm verändert die Gesamtlänge von 145 auf 150 mm.' },
    { question: 'Für wen ist diese CAD-Automatisierung interessant?', answer: 'AI2CAD richtet sich an Konstrukteure, Produktentwickler und Entwicklungsleiter im technischen Mittelstand. Wiederkehrende Modellieraufgaben, Maßvarianten und Zeichnungsableitungen sind mögliche Ansatzpunkte. Die CAD-Schnittstelle, Konstruktionsregeln und nötigen Prüfschritte müssen für jedes Unternehmen gesondert bewertet werden.' },
    { question: 'Funktioniert AI2CAD mit unserem CAD-System?', answer: 'Die Videos zeigen ein konkret angebundenes CAD-System. Die Übertragung hängt von dessen API oder Automatisierungsschnittstelle, den erlaubten Werkzeugen und den Datenvorgaben ab. Im Erstgespräch prüft AImation Ihre CAD-Umgebung und eine konkrete Konstruktionsaufgabe. Eine Anbindung an jedes CAD-System ist damit nicht belegt.' },
    { question: 'Ist die KI-generierte Zeichnung sofort fertigungsreif?', answer: 'Die gezeigte Zeichnung braucht noch eine fachliche Prüfung. In Kapitel 4 werden eine zu niedrige Lagerschulter und mit dem Normblatt abzugleichende Freistichmaße benannt. Konstrukteure müssen Funktion, Passungen, Normen und Fertigbarkeit freigeben, bevor die Zeichnung an einen Lieferanten geht.' },
  ];
}
