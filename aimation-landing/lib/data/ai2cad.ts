import { AGENTIC_ENGINEERING } from './agentic-engineering';
import { ENGINEERING_EXTENSIONS } from './engineering-extensions';

export const AI2CAD_PATH = '/ai2cad';

export const AI2CAD_JOURNEY = {
  de: 'Die Videoreihe dokumentiert unsere Reise in die KI-gestützte Entwicklung: Einzelne Darstellungen oder Werte können noch fehlerhaft sein und werden Schritt für Schritt geprüft und verbessert.',
  en: 'This video series documents our journey into AI-assisted engineering: individual visuals or values may still contain errors and are being reviewed and improved step by step.',
} as const;

// Four CAD recordings supplied on 8 October, followed by the FEM demonstration on 10 October 2026.
// Website assets are anonymised derivatives, not the two earlier recordings.
export const AI2CAD_CHAPTERS = [
  {
    id: 'prompt', slug: 'prompt-zu-cad', number: '01', duration: '1:30', seconds: 90, kind: 'AI2CAD', uploadDate: '2026-10-08',
    de: {
      title: 'CAD-Modell aus Text erstellen', short: 'Text → Modell',
      metaDescription: 'CAD-Modell aus Text: Ein LLM erstellt eine parametrische Montageplatte mit Bohrungen und Taschen. Video der AImation-Demo, mit editierbaren Maßen.',
      description: 'Eine Montageplatte, beschrieben mit Maßen und Bauabschnitten. Das KI-Sprachmodell bedient das angebundene CAD-System und baut die Geometrie Schritt für Schritt auf. Die Maße bleiben anschließend editierbar.',
      features: ['Grundplatte 180 × 120 × 12 mm mit sieben Modellierschritten', 'Bohrungen, Senkungen, Taschen und Außenradien', 'Maße und Volumen aus der erzeugten Geometrie zurücklesen'],
      check: 'Die Modellprüfung gleicht die Geometrie mit der Vorgabe ab. Belastbarkeit und Eignung für den Einsatz müssen gesondert bewertet werden.',
      poster: 'Parametrische Montageplatte mit Bohrungen und Taschen aus der AI2CAD-Demonstration',
    },
    en: {
      title: 'Create a CAD model from text', short: 'Text → model',
      metaDescription: 'Text to CAD: an LLM creates a parametric mounting plate with holes and pockets. Watch the AImation demonstration, with dimensions that remain editable.',
      description: 'A mounting plate described through dimensions and modelling steps. The language model operates the connected CAD system and builds the geometry step by step. Dimensions remain editable afterwards.',
      features: ['180 × 120 × 12 mm base plate built in seven modelling steps', 'Holes, counterbores, pockets and corner radii', 'Read dimensions and volume back from the resulting geometry'],
      check: 'The model check compares geometry against the specification. Load capacity and suitability for the intended application require separate assessment.',
      poster: 'Parametric mounting plate with holes and pockets from the AI2CAD demonstration',
    },
  },
  {
    id: 'skizze', slug: 'handskizze-zu-cad', number: '02', duration: '1:50', seconds: 110, kind: 'AI2CAD', uploadDate: '2026-11-23', hasAudio: true,
    de: {
      title: 'Vom Handyfoto zum CAD-Modell', short: 'Handyfoto → CAD',
      searchTitle: 'Handskizze mit KI in ein CAD-Modell umwandeln',
      metaDescription: 'Vom Skizzenfoto zur STEP-Datei: Im Video liest ein CAD-Agent die Maße einer Welle, fragt bei Bedarf nach und liefert das 3D-Modell zurück aufs Handy.',
      description: 'Sie fotografieren die Handskizze einer Welle und schicken das Bild an den CAD-Agenten. Er liest die Maße ab und fragt im Chat nach, wenn eine Angabe fehlt. Sobald Sie die Maße bestätigen, modelliert er die Welle auf dem Server. Die 3D-Ansicht und die STEP-Datei erhalten Sie direkt auf Ihrem Handy.',
      features: ['Auf der Skizze die Wellenabsätze und die beiden Passfedernuten erkennen', 'Offene Maße im Chat klären und die Maßliste vor dem Modellieren bestätigen', 'Die Welle am Handy in 3D ansehen und die STEP-Datei für die weitere CAD-Arbeit übernehmen'],
      check: 'Die STEP-Datei enthält die Geometrie der Welle mit ihren Absätzen und beiden Passfedernuten. Ein CAD-System mit STEP-Import kann diese Geometrie öffnen. Passungen, Toleranzen und offene Kantenangaben müssen vor der Fertigung geklärt werden.',
      poster: 'Links der Chat mit dem CAD-Agenten auf dem Handy, rechts die modellierte Welle mit zwei Passfedernuten',
      chapters: [
        { seconds: 0, title: 'Die Handskizze fotografieren', text: 'Ein Foto und ein Auftrag im Chat reichen für den Start.' },
        { seconds: 28, title: 'Die Maße auslesen', text: 'Der Agent markiert Maße in der Skizze und fragt bei unklaren Angaben nach.' },
        { seconds: 46, title: 'Die Maßliste bestätigen', text: 'Sie prüfen die erfassten Maße und bestätigen sie im Chat.' },
        { seconds: 54, title: 'Die Welle modellieren', text: 'Auf dem Server entsteht die Welle mit ihren Absätzen und Nuten.' },
        { seconds: 82, title: 'Das Ergebnis am Handy öffnen', text: 'Im Chat kommen Vorschau und STEP-Datei an. Offene Zeichnungsangaben bleiben sichtbar.' },
      ],
    },
    en: {
      title: 'From phone photo to CAD model', short: 'Phone photo → CAD',
      searchTitle: 'Turn a hand sketch into a CAD model with AI',
      metaDescription: 'From a sketch photo to a STEP file: watch a CAD agent read shaft dimensions, ask about missing details and return the 3D model to the same phone.',
      description: 'You photograph a hand sketch of a shaft and send the photo to the CAD agent. It reads the dimensions and asks you in the chat if a detail is missing. Once you confirm the dimensions, the agent models the shaft on the server. You receive the 3D view and STEP file on the same phone.',
      features: ['Identify the shaft shoulders and two keyways in the sketch', 'Clarify open dimensions in the chat and confirm the list before modelling', 'View the shaft in 3D on the phone and use the STEP file for further CAD work'],
      check: 'The STEP file contains the geometry of the stepped shaft and its two keyways. A CAD system with STEP import can open that geometry. Fits, tolerances and unresolved edge details need engineering review before manufacturing.',
      poster: 'Phone chat with the CAD agent on the left and the modelled shaft with two keyways on the right',
      chapters: [
        { seconds: 0, title: 'Photograph the sketch', text: 'The workflow starts with a photo and a request in the chat.' },
        { seconds: 28, title: 'Read the dimensions', text: 'The agent marks dimensions on the sketch and asks about unclear details.' },
        { seconds: 46, title: 'Confirm the dimension list', text: 'You check the dimensions and confirm them in the chat.' },
        { seconds: 54, title: 'Model the shaft', text: 'The server builds the stepped shaft and its keyways.' },
        { seconds: 82, title: 'Open the result on the phone', text: 'The preview and STEP file arrive in the chat, alongside the unresolved drawing details.' },
      ],
    },
  },
  {
    id: 'drehteil', slug: 'konstruktion-pruefen', number: '03', duration: '2:02', seconds: 122, kind: 'AI2CAD', uploadDate: '2026-10-08',
    de: {
      title: 'CAD-Konstruktion prüfen', short: 'Entwurf → Prüfung',
      metaDescription: 'CAD-Konstruktion mit KI prüfen: Ein LLM erkennt fehlende Freistiche und offene Funktionsangaben an einer Welle. Video mit Rückfragen und Modellkorrekturen.',
      description: 'Die KI liest Parameter und Geometrie aus und meldet Auffälligkeiten: fehlende Freistiche, scharfe Schultern und offene Funktionsangaben. Daraus folgen Rückfragen, ein Toleranzvorschlag und Änderungen am Modell nach Freigabe.',
      features: ['Lagersitze, Lastfall, Werkstoff und Fertigung klären', 'Annahmen und vorgeschlagene Toleranzen begründen', 'Freistiche und eine Einführfase im Modell ergänzen'],
      check: 'In der Demo darf die KI Annahmen vorschlagen. Lagerauswahl, Normbezüge und Funktionsmaße müssen fachlich geprüft werden.',
      poster: 'Abgesetzte Welle mit markierten Schultern und Freistichen aus der AI2CAD-Demonstration',
    },
    en: {
      title: 'Review a CAD design', short: 'Design → review',
      metaDescription: 'Review a CAD shaft with AI: an LLM flags missing reliefs and unresolved functional requirements. Watch the questions, proposed tolerances and model changes.',
      description: 'AI reads parameters and geometry and flags issues: missing reliefs, sharp shoulders and unresolved functional requirements. Questions, proposed tolerances and approved model changes follow.',
      features: ['Clarify bearing seats, load case, material and manufacturing', 'Explain assumptions and proposed tolerances', 'Add reliefs and a lead-in chamfer to the model'],
      check: 'The demo allows AI to propose assumptions. Bearing selection, standards references and functional dimensions require engineering review.',
      poster: 'Stepped shaft with highlighted shoulders and reliefs from the AI2CAD demonstration',
    },
  },
  {
    id: 'zeichnung', slug: 'technische-zeichnung', number: '04', duration: '2:20', seconds: 140, kind: 'AI2CAD', uploadDate: '2026-10-08',
    de: {
      title: 'Technische Zeichnung erstellen', short: 'Modell → Zeichnung',
      metaDescription: 'Technische Zeichnung mit KI erstellen: Ansichten, Bemaßung und Toleranzen aus einem CAD-Modell. AImation zeigt den Ablauf und offene Prüfaufgaben im Video.',
      description: 'Auf einem A3-Blatt entstehen Ansichten, Bemaßungen, Toleranzrahmen und Oberflächenangaben. Die KI betrachtet die Zeichnung als Bild, korrigiert Überlagerungen und hält die verbleibenden Prüfaufgaben fest.',
      features: ['Hauptansichten 2:1, Einzelheiten 5:1 und Isometrie', 'Passungen, Bezüge und technische Hinweise eintragen', 'Sichtprüfung wiederholen und Export zur Freigabe vorschlagen'],
      check: 'Offen bleiben in der Demo eine zu niedrige Lagerschulter und der Abgleich einzelner Freistichmaße mit dem Normblatt. Eine Fertigungsfreigabe ist damit nicht belegt.',
      poster: 'Technische Zeichnung der Welle mit Ansichten, Bemaßungen und vergrößerten Einzelheiten',
      chapters: [
        { seconds: 0, title: 'Die Zeichnung anlegen', text: 'Vom Auftrag zum ersten Blatt in FreeCAD.' },
        { seconds: 65, title: 'Die Ansichten auf dem A3-Blatt', text: 'Stirnansicht, Längsansicht und Isometrie zeigen die Lage der Welle.' },
        { seconds: 72, title: 'Den Lagersitz bemaßen', text: 'Am linken Sitz stehen Nenndurchmesser, Toleranzklasse und Abmaße.' },
        { seconds: 84, title: 'Die Bezüge zuordnen', text: 'Die Toleranzrahmen der Welle verweisen auf den gemeinsamen Bezug A-B.' },
        { seconds: 94, title: 'Die Freistiche im Detail', text: 'Die Einzelheiten X, Y und Z zeigen die Übergänge im Maßstab 5:1.' },
      ],
    },
    en: {
      title: 'Create a technical drawing', short: 'Model → drawing',
      metaDescription: 'Create a technical drawing with AI: views, dimensions and tolerances from a CAD model. Watch the AImation demonstration and see the remaining review tasks.',
      description: 'Views, dimensions, tolerance frames and surface specifications take shape on an A3 sheet. AI examines the drawing as an image, corrects overlapping elements and records the remaining review tasks.',
      features: ['Main views at 2:1, details at 5:1 and an isometric view', 'Add fits, datums and technical notes', 'Repeat visual checks and propose export for approval'],
      check: 'The demo leaves a bearing shoulder with insufficient height and individual relief dimensions to check against the standard. Manufacturing approval has not been demonstrated.',
      poster: 'Technical shaft drawing with views, dimensions and enlarged details',
      chapters: [
        { seconds: 0, title: 'Set up the drawing', text: 'From the initial request to a drawing sheet in FreeCAD.' },
        { seconds: 65, title: 'Place the views', text: 'End, longitudinal and isometric views show the shaft on the A3 sheet.' },
        { seconds: 72, title: 'Dimension the bearing seat', text: 'The left seat carries its nominal diameter, tolerance class and deviations.' },
        { seconds: 84, title: 'Read the datum references', text: 'The tolerance frames refer to common datum A-B.' },
        { seconds: 94, title: 'Inspect the reliefs', text: 'Details X, Y and Z show the transitions at a scale of 5:1.' },
      ],
    },
  },
  {
    id: 'fem', slug: 'fem-nachweis', number: '05', duration: '2:31', seconds: 151,
    kind: 'AI2CAE', uploadDate: '2026-10-10',
    de: {
      title: 'FEM-Berechnung einer Welle', short: 'Modell → FEM',
      metaDescription: 'FEM-Berechnung mit KI: Ein LLM steuert die Analyse einer Welle unter 1.500 N. Drei Netzfeinheiten und eine Handrechnung im Vergleich. AI2CAE-Demo von AImation.',
      description: 'Auf die Nabe der Welle wirken 1.500 N. Das Large Language Model steuert den Berechnungsablauf im angebundenen CAE-System: Lagerung und Last anlegen, drei Netze berechnen und die Ergebnisse mit einer Handrechnung vergleichen.',
      features: ['Fest- und Loslager, Werkstoff und Lastfall im Rechenmodell abbilden', 'Netzfeinheiten r/5, r/10 und r/20 vergleichen', 'Lagerkräfte, Verformung und Kerbspannungen auswerten und dokumentieren'],
      check: 'Gezeigt wird eine linear-elastische, statische Demonstrationsrechnung. Lageridealisierung, lokale Spannungen und Netzkonvergenz brauchen eine fachliche Bewertung. Ermüdung, reale Lagerkontakte und eine Bauteilfreigabe sind damit nicht nachgewiesen.',
      poster: 'AI2CAE: Verformung der Welle unter 1.500 N mit farbiger FEM-Auswertung',
    },
    en: {
      title: 'Run FEM analysis of a shaft', short: 'Model → FEM',
      metaDescription: 'FEM analysis with AI: an LLM controls a shaft analysis under a 1,500 N load. Compare three mesh refinements and a hand calculation in this AImation demo.',
      description: 'A 1,500 N load acts on the shaft hub. The large language model controls the analysis workflow in the connected CAE system: setting up supports and loads, solving three meshes and comparing the results with a hand calculation.',
      features: ['Represent locating and floating bearings, material and load case', 'Compare mesh refinements r/5, r/10 and r/20', 'Evaluate and document bearing reactions, deformation and notch stresses'],
      check: 'This is a linear-elastic, static demonstration analysis. Idealised supports, local stresses and mesh convergence require engineering assessment. Fatigue, actual bearing contacts and part approval are not established.',
      poster: 'AI2CAE: shaft deformation under a 1,500 N load with a coloured FEM result plot',
    },
  },
] as const;

export const SKETCH_VIDEO = AI2CAD_CHAPTERS.find(chapter => chapter.id === 'skizze')!;

export function getAI2CADFaqs(en: boolean) {
  const system = AGENTIC_ENGINEERING[en ? 'en' : 'de'];
  const systemFaq = { question: system.question, answer: `${system.definition} ${system.evidence}` };
  return en ? [
    systemFaq,
    { question: 'Can AI create assembly instructions from a CAD model?', answer: 'Part 9 uses the assembly from part 8 to create draft instructions with 14 steps, three sections and 45 images from the model. Tools, inspection points and insertion paths are documented. Six values are labelled as assumptions, and a missing parallel key is reported. The instructions are not approved; specifications and practical assembly must be reviewed before use.' },
    { question: 'Can AI create a CAD assembly from a drawing?', answer: 'Part 8 shows an AI agent reading an assembly drawing, proposing a bill of materials with 15 positions and 31 parts, and assembling the prepared components in CAD after confirmation. The individual components were previously modelled with AI and checked. The video’s report marks 7 of 8 checks as passed; three bolted connections still need visual inspection. Engineering approval remains a separate step.' },
    { question: 'Do parts 6 and 7 continue the same part?', answer: 'No. Part 6 visualises a patent in 3D. Part 7 introduces a standalone CNC turning example, including program preparation and simulation. They use separate starting points and parts; neither continues the shaft workflow from parts 3 to 5.' },
    { question: 'What does AI2CAE add to AI2CAD?', answer: 'AI2CAD creates and revises the geometry. AI2CAE continues with engineering analysis. In chapter 5, an LLM controls a CAE system to analyse a shaft under a 1,500 N load, compares three mesh refinements and checks reactions, deformation and notch stresses against a hand calculation. The results require engineering review.' },
    { question: 'What is AI2CAD?', answer: 'AI2CAD is an AImation demonstration of CAD automation using a large language model (LLM). The LLM operates a connected CAD system, creates parametric parts, proposes design corrections and prepares a technical drawing. The first five videos show a mounting plate and a stepped shaft. Chapter 5 extends the workflow to AI2CAE: FEM analysis in a CAE system, compared with a hand calculation. Parts 6 and 7 add standalone examples of patent visualisation and CNC turning program preparation. Part 8 demonstrates creating an assembly from a drawing, and part 9 turns that assembly into illustrated assembly instructions. The series contains nine videos.' },
    { question: 'Can a language model operate CAD without mouse clicks?', answer: 'In this demonstration, the language model performs the CAD operations through a tool interface. It sets parameters, creates sketches and features, selects views and prepares the drawing. Instructions, questions and approvals are exchanged in conversation. No manual mouse clicks in the CAD system are used for these steps.' },
    { question: 'Can I send a hand sketch from my phone and get a STEP file back?', answer: 'Yes. In chapter 2, Holger Peschke sends a photo of a shaft sketch to the CAD agent and confirms the dimensions in the chat. The agent builds the model on his own server and returns a 3D view and a STEP file to the phone. The video shows about four minutes between sending the photo and receiving the result.' },
    { question: 'Who is this CAD automation demonstration for?', answer: 'AI2CAD addresses design engineers, product developers and heads of engineering in technical SMEs. Recurring modelling tasks, dimension variants and drawing preparation are possible starting points. The CAD interface, design rules and required review steps must be assessed for each company.' },
    { question: 'Does AI2CAD work with our CAD system?', answer: 'The videos demonstrate one connected CAD system. Transfer depends on the available API or automation interface, permitted tools and data requirements. In an initial conversation, AImation checks your CAD environment and a specific design task. Compatibility with every CAD system is not established.' },
    { question: 'Is the AI-generated drawing ready for manufacturing?', answer: 'The demonstrated drawing still requires engineering review. Chapter 4 identifies a bearing shoulder with insufficient height and relief dimensions that need checking against the relevant standard. A design engineer must approve function, fits, standards and manufacturability before the drawing goes to a supplier.' },
  ] : [
    systemFaq,
    { question: 'Kann KI aus einem CAD-Modell eine Montageanleitung erstellen?', answer: 'Teil 9 erstellt aus der Baugruppe aus Teil 8 eine Musteranleitung mit 14 Schritten, drei Abschnitten und 45 Bildern aus dem Modell. Werkzeuge, Prüfpunkte und Fügewege werden dokumentiert. Sechs Werte sind als Annahmen markiert, eine fehlende Passfeder wird gemeldet. Die Anleitung ist nicht freigegeben; Angaben und praktische Montage müssen vor dem Einsatz geprüft werden.' },
    { question: 'Kann KI aus einer Zeichnung eine CAD-Baugruppe erstellen?', answer: 'Teil 8 zeigt, wie ein KI-Agent eine Baugruppenzeichnung liest, eine Stückliste mit 15 Positionen und 31 Teilen vorschlägt und nach Bestätigung die vorbereiteten Einzelteile im CAD zusammensetzt. Die Einzelteile wurden zuvor mit KI modelliert und geprüft. Der Prüfbericht im Video meldet 7 von 8 Prüfpunkten als bestanden; drei Verschraubungen brauchen noch eine Sichtprüfung. Die fachliche Freigabe bleibt ein eigener Schritt.' },
    { question: 'Führen Teil 6 und 7 dasselbe Bauteil weiter?', answer: 'Nein. Teil 6 macht eine Patentschrift als 3D-Modell sichtbar. Teil 7 zeigt ein eigenständiges CNC-Drehbeispiel mit Programmvorbereitung und Simulation. Beide haben eigene Ausgangspunkte und Bauteile. Sie setzen die Welle aus Teil 3 bis 5 nicht fort.' },
    { question: 'Was ergänzt AI2CAE gegenüber AI2CAD?', answer: 'AI2CAD erstellt und überarbeitet die Geometrie. AI2CAE setzt bei der technischen Berechnung an. In Kapitel 5 steuert ein LLM ein CAE-System, berechnet eine Welle unter 1.500 N, vergleicht drei Netzfeinheiten und stellt Lagerkräfte, Verformung und Kerbspannungen einer Handrechnung gegenüber. Die Ergebnisse brauchen eine fachliche Prüfung.' },
    { question: 'Was ist AI2CAD?', answer: 'AI2CAD ist eine Demonstration von AImation zur CAD-Automatisierung mit einem Large Language Model (LLM). Das LLM bedient ein angebundenes CAD-System, erstellt parametrische Bauteile, schlägt Konstruktionskorrekturen vor und bereitet eine technische Zeichnung vor. Die ersten fünf Videos zeigen den Ablauf an einer Montageplatte und einer abgesetzten Welle. Kapitel 5 erweitert ihn um AI2CAE: eine FEM-Berechnung im CAE-System mit Vergleich zur Handrechnung. Teil 6 und 7 ergänzen eigenständige Beispiele zur Patentvisualisierung und zur Vorbereitung eines CNC-Drehprogramms. Teil 8 zeigt den Weg von der Zeichnung zur Baugruppe. Teil 9 erstellt daraus eine bebilderte Montageanleitung. Damit umfasst die Reihe neun Videos.' },
    { question: 'Kann ein Large Language Model CAD ohne Mausklicks steuern?', answer: 'In dieser Demonstration führt das LLM die CAD-Arbeitsschritte über eine Werkzeugschnittstelle aus. Es setzt Parameter, erstellt Skizzen und Formelemente, wählt Ansichten und baut die Zeichnung auf. Vorgaben, Rückfragen und Freigaben erfolgen im Dialog. Für diese Schritte gibt es keine manuellen Mausklicks im CAD-System.' },
    { question: 'Wie wird aus einer Handskizze auf dem Handy eine STEP-Datei?', answer: 'In Kapitel 2 schickt Holger Peschke ein Foto der Wellenskizze an den CAD-Agenten und bestätigt die Maße im Chat. Der Agent baut das Modell auf dem eigenen Server. Die 3D-Ansicht und die STEP-Datei kommen zurück aufs Handy. Im gezeigten Versuch liegen rund vier Minuten zwischen Foto und Ergebnis.' },
    { question: 'Für wen ist diese CAD-Automatisierung interessant?', answer: 'AI2CAD richtet sich an Konstrukteure, Produktentwickler und Entwicklungsleiter im technischen Mittelstand. Wiederkehrende Modellieraufgaben, Maßvarianten und Zeichnungsableitungen sind mögliche Ansatzpunkte. Die CAD-Schnittstelle, Konstruktionsregeln und nötigen Prüfschritte müssen für jedes Unternehmen gesondert bewertet werden.' },
    { question: 'Funktioniert AI2CAD mit unserem CAD-System?', answer: 'Die Videos zeigen ein konkret angebundenes CAD-System. Die Übertragung hängt von dessen API oder Automatisierungsschnittstelle, den erlaubten Werkzeugen und den Datenvorgaben ab. Im Erstgespräch prüft AImation Ihre CAD-Umgebung und eine konkrete Konstruktionsaufgabe. Eine Anbindung an jedes CAD-System ist damit nicht belegt.' },
    { question: 'Ist die KI-generierte Zeichnung sofort fertigungsreif?', answer: 'Die gezeigte Zeichnung braucht noch eine fachliche Prüfung. In Kapitel 4 werden eine zu niedrige Lagerschulter und mit dem Normblatt abzugleichende Freistichmaße benannt. Konstrukteure müssen Funktion, Passungen, Normen und Fertigbarkeit freigeben, bevor die Zeichnung an einen Lieferanten geht.' },
  ];
}

// All published video pages; the original five-step player stays independent.
export const AI2CAD_VIDEOS = [...AI2CAD_CHAPTERS, ...ENGINEERING_EXTENSIONS] as const;
