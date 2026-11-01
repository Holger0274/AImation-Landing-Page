import type { EngineeringArticle } from './engineering-articles';

export interface VideoArticle extends Omit<EngineeringArticle, 'key'> {
  date: string;
  poster: string;
  posterAlt: string;
  videoHref: string;
  videoLabel: string;
  sourceNote: string;
  steps: { label: string; result: string; review: string; href: string; linkLabel: string }[];
}

export const VIDEO_ARTICLES: VideoArticle[] = [
  {
    slug: 'ki-cnc-drehprogramm-cad-cam', date: '2026-11-01',
    title: 'Vom CAD-Modell zum CNC-Drehprogramm: Was KI vorbereiten kann',
    shortTitle: 'Mit KI vom CAD-Modell zum CNC-Programm', tag: 'KI × CAM',
    description: 'CNC-Drehprogramm mit KI vorbereiten: Ein eigenes Video zeigt zwei Aufspannungen, Simulation und NC-Ausgabe. Mit Prüffragen für die Fertigungsvorbereitung.',
    lead: 'Das Modell steht. Die Zeichnung liegt vor. Bis daraus ein Bauteil auf der Drehmaschine wird, sind trotzdem Entscheidungen offen. In meinem CNC-Beispiel gehe ich diesen nächsten Abschnitt: vom Bauteil über zwei Aufspannungen bis zu zwei NC-Programmen und einem Rüstblatt.',
    answer: 'KI kann bei der Vorbereitung eines CNC-Drehprogramms unterstützen, indem sie Vorgaben strukturiert und den gezeigten CAM-Ablauf begleitet. Das Video dokumentiert Planung, Simulation und Programmausgabe. Ein gefertigtes Bauteil oder ein freigegebener Maschinenlauf ist damit noch nicht belegt.',
    visualTitle: 'Drei Stationen bis zum Programmpaket',
    visualIntro: 'Öffnen Sie eine Station. Sie sehen, was das Video an dieser Stelle zeigt und welche Frage vor dem Einsatz in Ihrer Fertigung geklärt werden muss.',
    poster: '/videos/ai2cad/cnc.webp', posterAlt: 'Drehteil mit Rohteil und zwei Aufspannungen aus Holger Peschkes CNC-Demonstration',
    videoHref: '/ai2cad/cnc-drehprogramm', videoLabel: 'CNC-Demo ansehen · 2:22 Min.',
    sourceNote: 'Grundlage ist die eigene CNC-Demonstration von Holger Peschke. Die Autodesk-Dokumentation erläutert das allgemeine Postprocessing. Sie ist kein Beleg dafür, welche Software im Video eingesetzt wird. Die Prüffragen und der Vorschlag für einen Vergleich im Team sind redaktionelle Empfehlungen von AImation. Es werden keine Kundenergebnisse oder gemessenen Einsparungen behauptet.',
    steps: [
      { label: 'Modell und Rohteil', result: '3D-Modell und Zeichnung bilden den Ausgangspunkt. Rohteil und zwei Aufspannungen werden für das Beispiel festgelegt.', review: 'Sind Zeichnungsstand, Werkstoff, Rohteil und Spannmöglichkeiten für Ihren Auftrag eindeutig?', href: '/ai2cad/cnc-drehprogramm', linkLabel: 'Den Ausgangspunkt im Video ansehen' },
      { label: 'Bearbeitung simulieren', result: 'Die geplante Bearbeitungsfolge wird mit Werkzeugbewegungen und Materialabtrag sichtbar.', review: 'Welche Werkzeuge, Spannmittel und Maschinenbedingungen sind im Modell tatsächlich berücksichtigt?', href: '/ai2cad/cnc-drehprogramm', linkLabel: 'Zur CNC-Simulation im Video' },
      { label: 'Programme prüfen', result: 'Zum gezeigten Paket gehören zwei NC-Programme und ein Rüstblatt.', review: 'Passen Ausgabe, Steuerung und reale Einrichtung zusammen? Die fachliche Prüfung erfolgt vor einem Maschinenlauf.', href: '/ai2cad/cnc-drehprogramm#chapter-review', linkLabel: 'Ergebnis und Grenzen der Demo lesen' },
    ],
    sections: [
      { id: 'cad-cam', title: 'Warum nach dem CAD-Modell weitere Entscheidungen folgen', paragraphs: [
        { text: 'Ein CAD-Modell beschreibt die Geometrie. Für die Fertigungsvorbereitung kommen Rohteil, Aufspannungen, Werkzeuge und Bearbeitungsfolge hinzu. Genau an dieser Übergabe wird das Beispiel interessant: Kann ein Team nachvollziehen, wie aus den Konstruktionsdaten ein Vorschlag für die Bearbeitung entsteht?' },
        { text: 'Das CNC-Video ist ein eigenständiges Beispiel aus der Reihe KI × CAD. Es führt ein anderes Bauteil ein. Weder das Patentmodell aus Teil 6 noch die Welle aus den früheren CAD- und FEM-Videos wird hier weiterbearbeitet. Wer die Reihe zum ersten Mal sieht, kann direkt mit diesem Film einsteigen.' },
      ] },
      { id: 'zwei-aufspannungen', title: 'Zwei Aufspannungen machen die Übergabe konkret', paragraphs: [
        { text: 'Im Video werden Rohteil und zwei Aufspannungen geplant. Danach folgt die Bearbeitungsreihenfolge. Das ist für mich der Kern der Demonstration: Die Zwischenschritte bleiben sichtbar. Ein Team kann an einer konkreten Entscheidung ansetzen, statt nur einen fertigen Programmtext zu erhalten.' },
        { text: 'Für einen eigenen Versuch würde ich diese Entscheidungen mitprotokollieren. Welche Angaben kamen aus der Zeichnung? Welche wurden im Dialog ergänzt? Welche Annahme muss ein CAM-Verantwortlicher korrigieren? So entsteht eine prüfbare Übergabe zwischen Konstruktion und Fertigung.' },
      ], table: { headers: ['Ausgangspunkt', 'Im Beispiel sichtbar', 'Frage für Ihr Team'], rows: [
        ['Modell und Zeichnung', 'Bauteil als Grundlage der Planung', 'Ist der freigegebene Stand eindeutig?'],
        ['Rohteil und Aufspannung', 'Planung in zwei Aufspannungen', 'Sind die realen Spannbedingungen abgebildet?'],
        ['Bearbeitungsfolge', 'Werkzeugbewegungen und Materialabtrag', 'Welche Randbedingungen fehlen im Modell?'],
        ['Programmpaket', 'Zwei NC-Programme und ein Rüstblatt', 'Wer prüft Ausgabe und Einrichtung?'],
      ] } },
      { id: 'simulation-nc-code', title: 'Was die Simulation zeigt und was die NC-Ausgabe braucht', paragraphs: [
        { text: 'Die Simulation im Film macht die geplante Bearbeitung sichtbar. Sie ist damit ein Gesprächsgegenstand für die fachliche Prüfung. Aus einer plausiblen Darstellung allein leite ich keine Freigabe für eine reale Maschine ab.' },
        { text: 'Für den allgemeinen CAM-Ablauf beschreibt Autodesk das Postprocessing als Umwandlung der Bearbeitungsoperationen in NC-Code. Dabei werden ein Postprozessor gewählt und dessen Eigenschaften eingestellt. Diese Auswahl ist ein eigener Schritt zwischen Bearbeitungsplanung und Programmausgabe.', source: 'autodesk-post' },
        { text: 'Für Ihr Unternehmen gehört deshalb eine klare Verantwortung an diese Übergabe: NC-Code, Steuerung, Werkzeuge und Aufspannung werden von den zuständigen Fachleuten geprüft. Die Demonstration zeigt die Vorbereitung bis zum Programmpaket. Ein tatsächlicher Maschinenlauf wird im Film nicht dokumentiert.' },
      ] },
      { id: 'cam-pilot', title: 'So würde ich den Nutzen im Team untersuchen', paragraphs: [
        { text: 'Mein Vorschlag: Wählen Sie ein bekanntes Drehteil mit dokumentiertem bisherigem Ablauf. Verwenden Sie denselben Zeichnungsstand und dieselben Randbedingungen für den KI-gestützten Versuch. Beginnen Sie mit der Vorbereitung und Prüfung der Unterlagen. Ein Produktionsauftrag ist kein geeigneter Ort für einen unkontrollierten Erstversuch.' },
        { text: 'Erfassen Sie Vorbereitungszeit und Prüfzeit getrennt. Halten Sie außerdem fest, wie viele Rückfragen, Korrekturen und unbrauchbare Vorschläge entstehen. Eine kurze Programmausgabe sagt wenig aus, wenn die anschließende Prüfung deutlich länger dauert. Genau diese Gesamtsicht würde ich mit einem Fertigungsverantwortlichen bewerten.' },
        { text: 'Das ist ein Vorschlag für einen Vergleich, kein gemessenes Ergebnis aus meinem Video. Die 2:22 Minuten sind die Filmlänge. Sie belegen weder die gesamte Bearbeitungszeit noch eine bestimmte Einsparung.' },
      ] },
    ],
    faqs: [
      { question: 'Kann KI ein CNC-Drehprogramm erstellen?', answer: 'Das AImation-Beispiel zeigt einen KI-gestützten Ablauf vom 3D-Modell und der Zeichnung über zwei Aufspannungen und eine Simulation bis zu zwei NC-Programmen und einem Rüstblatt. Die fachliche Prüfung vor einem realen Maschinenlauf bleibt erforderlich.' },
      { question: 'Ist das Bauteil aus dem Video bereits gefertigt?', answer: 'Im Video sind Programmvorbereitung und Simulation dokumentiert. Ein tatsächlich gefertigtes Bauteil oder ein freigegebener Maschinenlauf wird nicht gezeigt.' },
      { question: 'Was unterscheidet CAD, CAM und NC-Code?', answer: 'CAD beschreibt hier das Bauteilmodell. CAM betrifft die Vorbereitung der Bearbeitung, etwa Aufspannungen und Werkzeugwege. Beim Postprocessing werden Bearbeitungsoperationen in NC-Code für die gewählte Ausgabe übersetzt.' },
    ],
    sources: ['aimation-cnc', 'autodesk-post'],
    related: [
      { label: 'Das vollständige CNC-Beispiel ansehen', href: '/ai2cad/cnc-drehprogramm' },
      { label: 'Ein Patent als räumliche Baugruppe verstehen', href: '/ai2cad/patent-zu-3d' },
      { label: 'Weitere CAD- und FEM-Beispiele entdecken', href: '/ai2cad' },
    ],
  },
  {
    slug: 'ki-schaltplan-erstellen-pruefen', date: '2026-11-01',
    title: 'Schaltpläne mit KI erstellen und prüfen: Vom Auftrag zum Fehlerfall',
    shortTitle: 'Schaltpläne mit KI erstellen und prüfen', tag: 'KI × Elektro',
    description: 'Schaltplan mit KI erstellen und Fehlerfälle untersuchen: Zwei AImation-Videos zeigen Motorabgang und Wendeschütz im Modell. Mit Ablauf und Prüffragen.',
    lead: 'Ein kurzer Auftrag für einen Motorabgang. Daraus entstehen Rückfragen, Berechnungen und ein Schaltplan. In der nächsten Folge geht es weiter: Eine andere Schaltung wird gezielt mit Fehlerfällen konfrontiert. Mich interessiert dabei besonders, ob die Annahmen und Reaktionen für einen Fachmenschen nachvollziehbar bleiben.',
    answer: 'Die beiden AImation-Demonstrationen zeigen, wie KI den Weg von einer beschriebenen Aufgabe zu einem Schaltplan und zu modellierten Funktionsprüfungen begleiten kann. Ein internes Prüfergebnis gilt nur für den gezeigten Modellumfang. Es ersetzt keine fachliche Prüfung, Normenbewertung oder Freigabe einer realen Anlage.',
    visualTitle: 'Vom Entwurf zur kritischen Rückfrage',
    visualIntro: 'Die Stationen führen durch zwei eigenständige Schaltungen. Öffnen Sie einen Schritt und springen Sie von dort zur passenden Stelle im jeweiligen Video.',
    poster: '/videos/elektrik/kurzschluss.webp', posterAlt: 'Schaltplan und Funktionsdarstellung aus der Wendeschütz-Demonstration von AImation',
    videoHref: '/ki-elektrik/kurzschluss-wendeschuetz?t=42#video', videoLabel: 'Funktionsprüfung ansehen · ab 0:42 Min.',
    sourceNote: 'Die beschriebenen Abläufe stammen aus den beiden eigenen Videos von Holger Peschke. EPLAN dient als externe Quelle für den allgemeinen Zusammenhang zwischen Prüfkonfiguration, ausgewähltem Umfang und Prüfergebnis. Daraus folgt keine Aussage über einen EPLAN-Einsatz in den Videos. Die Empfehlungen für einen Pilot sind redaktionelle Vorschläge von AImation, keine Ergebnisse aus Kundenprojekten.',
    steps: [
      { label: 'Auftrag und Annahmen', result: 'Teil 1 beginnt mit einem Pumpenmotor: 4 kW, 400 V, Direktanlauf. Die KI schlägt Werte vor und erhält Rückmeldung zu ihren Annahmen.', review: 'Welche Angaben sind vorgegeben, welche berechnet und welche noch offen?', href: '/ki-elektrik/schaltplan-motorabgang?t=49#video', linkLabel: 'Teil 1: Annahmen ab 0:49 ansehen' },
      { label: 'Schaltplan und Funktion', result: 'Der Motorabgang wird als Schaltplan dargestellt. In Teil 2 kommen Vorwärtslauf, Rückwärtslauf und Aus an einem Förderband hinzu.', review: 'Entspricht die modellierte Funktion dem vereinbarten Auftrag?', href: '/ki-elektrik/kurzschluss-wendeschuetz?t=42#video', linkLabel: 'Teil 2: Funktion ab 0:42 ansehen' },
      { label: 'Fehlerfall untersuchen', result: 'Teil 2 zeigt Fehlerfälle im Modell. Bei fehlenden Verriegelungen meldet die Demonstration einen Kurzschluss.', review: 'Welche Fälle wurden untersucht und welche Aussagen lassen sich aus dem Modell nicht ableiten?', href: '/ki-elektrik/kurzschluss-wendeschuetz?t=66#video', linkLabel: 'Teil 2: Modellprüfung ab 1:06 ansehen' },
    ],
    sections: [
      { id: 'auftrag-schaltplan', title: 'Der Auftrag ist der Anfang der Klärung', paragraphs: [
        { text: 'In Teil 1 lautet der Ausgangspunkt sinngemäß: Ein Pumpenmotor mit 4 kW soll an 400 V im Direktanlauf betrieben werden. Die KI arbeitet mit diesen Angaben, schlägt Werte und Komponenten vor und bekommt Rückmeldung. Erst danach wird der Schaltplan dargestellt.' },
        { text: 'Für einen Entwicklungsverantwortlichen liegt hier eine konkrete Prüffrage: Kann ich erkennen, was die KI aus meinem Auftrag übernommen hat und was sie selbst ergänzt? Eine stillschweigende Annahme kann im weiteren Ablauf wie eine bestätigte Vorgabe aussehen. Deshalb würde ich die Herkunft der Angaben bereits im Entwurf festhalten.' },
      ] },
      { id: 'zwei-beispiele', title: 'Motorabgang und Wendeschütz sind zwei verschiedene Beispiele', paragraphs: [
        { text: 'Teil 1 zeigt den Pumpenmotor und seine Schaltzustände. Teil 2 beginnt mit einem Förderband, ebenfalls mit 4 kW und 400 V, nun mit Vorwärts- und Rückwärtslauf. Das Förderband ist eine neue Aufgabe. Es wird nicht derselbe Pumpenschaltplan weitergeführt.' },
        { text: 'Zum Ende von Teil 2 wird zusätzlich ein Lüfter mit 22 kW und Stern-Dreieck-Anlauf als weiterer Auftrag eingeführt. Der Artikel konzentriert sich auf den Motorabgang und die Wendeschütz-Demonstration. Alle genannten Leistungs- und Spannungswerte beschreiben die Beispiele; sie sind keine Auslegungsempfehlung für eine Anlage.' },
      ], table: { headers: ['Beispiel', 'Im Video sichtbar', 'Einordnung'], rows: [
        ['Teil 1: Pumpenmotor', 'Auftrag, Annahmen, Schaltplan und interne Prüfungen', 'Entwurf und Prüfung innerhalb des Modells'],
        ['Teil 2: Förderband', 'Vorwärtslauf, Rückwärtslauf, Aus und Fehlerfälle', 'Eigenständige Wendeschütz-Demonstration'],
        ['Teil 2: Lüfter', 'Weiterer Auftrag mit 22 kW und Stern-Dreieck-Anlauf', 'Zusätzlich eingeführtes Beispiel'],
      ] } },
      { id: 'fehlerfall', title: 'Warum der Fehlerfall mehr erklärt als der Normalbetrieb', paragraphs: [
        { text: 'Ein normaler Funktionsablauf beantwortet nur einen Teil der Fragen. In der zweiten Folge werden auch konkurrierende Schaltbefehle und veränderte Verriegelungsbedingungen im Modell untersucht. Die Reaktionen werden sichtbar; bei fehlenden Verriegelungen meldet das Modell einen Kurzschluss.' },
        { text: 'Das ist ein simulierter Fehlerfall. Im Video wird kein Kurzschluss an einer realen Anlage ausgelöst. Die Darstellung dient dem Verständnis der modellierten Schaltung. Sie ist keine Anleitung, eine Verriegelung an einer Maschine außer Kraft zu setzen.' },
        { text: 'Für die Bewertung würde ich zu jedem Test die Ausgangslage, die erwartete Reaktion und das beobachtete Ergebnis dokumentieren. Erst dann lässt sich besprechen, ob die Prüfung zur gestellten Aufgabe passt. Die Anzahl grüner Meldungen allein reicht mir dafür nicht.' },
      ] },
      { id: 'pruefumfang', title: 'Ein Prüfergebnis braucht einen benannten Umfang', paragraphs: [
        { text: 'In Teil 1 werden acht interne Prüfungen angezeigt. Daraus lässt sich keine vollständige Normenprüfung ableiten. Entscheidend bleibt, welche Eigenschaften das System überhaupt prüft und welche Daten ihm dafür vorliegen.' },
        { text: 'Auch die EPLAN-Dokumentation beschreibt Projektprüfungen im Zusammenhang mit einem ausgewählten Prüfschema und dem gewählten Projektumfang. Diese allgemeine Grundlage hilft bei der Einordnung: Das Ergebnis einer Softwareprüfung hängt von ihrer Konfiguration und ihrem Gegenstand ab.', source: 'eplan-checks' },
        { text: 'Für einen Versuch im Unternehmen würde ich daher vorab festlegen, welche Ergebnisse erwartet werden: ein nachvollziehbarer Entwurf, eine Liste offener Annahmen und dokumentierte Modellprüfungen. Die zuständigen Elektrofachleute bewerten anschließend Schaltung, Komponenten, Schutzkonzept und erforderliche Nachweise für den konkreten Einsatz.' },
      ] },
      { id: 'elektro-pilot', title: 'So lässt sich ein erster Versuch auswerten', paragraphs: [
        { text: 'Starten würde ich mit einer bereits bekannten, überschaubaren Aufgabe und einem dokumentierten Referenzstand. Das Team vergleicht die KI-Ausgabe mit dem eigenen fachlichen Vorgehen. Welche Rückfragen sind hilfreich? Wo fehlen Angaben? Welche Korrekturen werden notwendig?' },
        { text: 'Entwurfszeit und Prüfaufwand sollten getrennt erfasst werden. Zusätzlich würde ich festhalten, ob Annahmen erkennbar sind und ob sich ein Befund bis zur betroffenen Stelle zurückverfolgen lässt. Das liefert eine Grundlage für die Entscheidung, ob ein weiterer Versuch sinnvoll ist. Die beiden Filme belegen bisher keine Zeitersparnis im Kundeneinsatz.' },
      ] },
    ],
    faqs: [
      { question: 'Kann KI einen elektrischen Schaltplan erstellen?', answer: 'Die AImation-Demonstration zeigt einen Entwurf für einen Motorabgang aus einer beschriebenen Aufgabe, ergänzt durch Rückfragen und Annahmen. Der Schaltplan und die internen Prüfungen müssen anschließend fachlich für den konkreten Einsatz bewertet werden.' },
      { question: 'Zeigt das Kurzschluss-Video einen echten Anlagenversuch?', answer: 'Nein. Teil 2 untersucht Fehlerfälle in einer modellierten Schaltung. Ein Kurzschluss an einer realen Anlage wird nicht durchgeführt.' },
      { question: 'Ersetzen die internen Prüfungen eine Normenprüfung?', answer: 'Nein. Die gezeigten Prüfungen beziehen sich auf den internen Modellumfang. Eine vollständige Normenprüfung, die fachliche Beurteilung und die Freigabe einer realen Anlage sind damit nicht belegt.' },
    ],
    sources: ['aimation-motor', 'aimation-kurzschluss', 'eplan-checks'],
    related: [
      { label: 'Teil 1: Vom Auftrag zum Motorabgang', href: '/ki-elektrik/schaltplan-motorabgang' },
      { label: 'Teil 2: Wendeschütz und Fehlerfälle im Modell', href: '/ki-elektrik/kurzschluss-wendeschuetz' },
      { label: 'Die Elektrikreihe im Überblick', href: '/ki-elektrik' },
    ],
  },
];
