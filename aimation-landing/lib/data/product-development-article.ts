import type { EngineeringArticle } from './engineering-articles';

export interface JourneyArticle extends Omit<EngineeringArticle, 'key'> {
  date: string;
  sourceNote: string;
  journey: { label: string; question: string; result: string; section: string; link: { label: string; href: string } }[];
}
export const PRODUCT_DEVELOPMENT_ARTICLE: JourneyArticle = {
  slug: 'ki-produktentwicklung-lastenheft-cad-fertigung',
  date: '2026-11-02',
  title: 'KI in der Produktentwicklung: Was sich zwischen Lastenheft, CAD und Fertigung verändert',
  shortTitle: 'KI zwischen Lastenheft, CAD und Fertigung',
  tag: 'Engineering-Perspektive',
  description: 'Wo hilft KI in der technischen Produktentwicklung? Holger Peschke ordnet Lastenheft, Entwicklungswissen, CAD, CNC und Elektrik ein. Mit Videos und Entwicklungskette.',
  lead: 'Ein Lastenheft beschreibt den Auftrag. Die Konstruktion braucht dazu belastbare Vorgaben, die Fertigung einen nachvollziehbaren Stand. Dazwischen liegen Rückfragen, Zeichnungen und Entscheidungen. Genau diese Übergaben interessieren mich beim Einsatz von KI. Nach 20 Jahren Automobilentwicklung und der Führung von Teams schaue ich auf die Arbeit, die am Ende tatsächlich erledigt werden muss.',
  answer: 'KI kann in der technischen Produktentwicklung dabei helfen, Anforderungen zu strukturieren, Wissen aus Quellen aufzubereiten und Arbeitsschritte in CAD, CAM oder der Schaltplanerstellung vorzubereiten. Ihr Nutzen hängt davon ab, ob das Team mit den Ergebnissen weiterarbeiten kann und wie viel Prüfung und Nacharbeit erforderlich sind. Technische Entscheidungen und Freigaben bleiben fachliche Aufgaben.',
  visualTitle: 'Folgen Sie einer Aufgabe durch die Entwicklung',
  visualIntro: 'Wählen Sie eine Station der Entwicklungskette. Jede Station verbindet eine konkrete Frage mit einem vertiefenden Artikel oder einer eigenen Demonstration.',
  sourceNote: 'Die Entwicklungskette ist eine redaktionelle Orientierung von AImation. Die verlinkten CAD-, Patent-, CNC- und Elektrik-Videos zeigen eigenständige Demonstrationen. Sie dokumentieren kein gemeinsam entwickeltes Kundenprodukt. NASA und Microsoft stützen die genannten Grundlagen zu Anforderungen, Konfigurationsmanagement und RAG. Die Einordnung und die Vorschläge für einen Einstieg sind Empfehlungen von AImation; gemessene Kundenergebnisse werden nicht behauptet.',
  journey: [
    { label: 'Anforderungen', question: 'Was muss das Produkt leisten?', result: 'Offene Angaben und Widersprüche als Rückfragen sichtbar machen.', section: 'anforderungen', link: { label: 'Lastenheft-Beispiel ausprobieren', href: '/blog/ki-lastenheft-anforderungen-pruefen#visual-title' } },
    { label: 'Entwicklungswissen', question: 'Was wissen wir bereits?', result: 'Fundstellen mit dem passenden Dokumentenstand zusammenführen.', section: 'wissen', link: { label: 'RAG und Quellenprüfung verstehen', href: '/blog/rag-engineering-wissen-versionen-quellen#visual-title' } },
    { label: 'CAD und Varianten', question: 'Wie wird die Idee konkret?', result: 'Geometrie sichtbar machen und Änderungen am Modell nachvollziehen.', section: 'konstruktion', link: { label: 'Von der Handskizze zum CAD-Modell', href: '/ai2cad/handskizze-zu-cad' } },
    { label: 'CAM und Elektrik', question: 'Wie bereiten wir die Umsetzung vor?', result: 'Bearbeitungsfolgen und Schaltfunktionen in eigenen Beispielen ansehen.', section: 'fertigung-elektrik', link: { label: 'Das CNC-Beispiel ansehen', href: '/ai2cad/cnc-drehprogramm' } },
    { label: 'Prüfung und Lernen', question: 'Ist das Ergebnis brauchbar?', result: 'Prüfaufwand, Korrekturen und Ergebnisqualität gemeinsam bewerten.', section: 'nutzen-messen', link: { label: 'Zum Vergleich im Team', href: '#nutzen-messen' } },
  ],
  sections: [
    { id: 'warum-ki', title: 'Warum KI für Entwicklungsverantwortliche relevant ist', paragraphs: [
      { text: 'Stellen Sie sich ein neues Bauteil für eine bestehende Anlage vor. Der Auftrag enthält eine Funktionsbeschreibung, eine ältere Zeichnung und Hinweise aus dem Versuch. Die erste Aufgabe ist, daraus einen belastbaren Ausgangspunkt zu machen. Welche Variante ist gemeint? Welcher Stand gilt? Welche Information fehlt noch? Dieses gedachte Beispiel führt durch den Artikel.' },
      { text: 'Aus meiner Sicht liegt ein sinnvoller Ansatz für KI dort, wo Informationen immer wieder gesucht, verglichen oder in einen anderen Arbeitsstand übertragen werden. Ein Entwicklungsleiter kann daran eine konkrete Frage knüpfen: Hilft das Werkzeug meinem Team, eine Aufgabe mit vertretbarem Prüfaufwand abzuschließen?' },
      { text: 'Meine eigenen Demonstrationen machen einzelne dieser Schritte sichtbar. Sie zeigen, worüber wir sprechen können: etwa CAD-Arbeitsschritte im Dialog, die Vorbereitung eines CNC-Programms oder einen Schaltplan mit modellierten Fehlerfällen. Daraus entsteht noch keine allgemeine Aussage über Zeitersparnis. Dafür braucht es den Vergleich im jeweiligen Betrieb.' },
    ] },
    { id: 'anforderungen', title: 'Das Lastenheft wird zum Ausgangspunkt für Rückfragen', paragraphs: [
      { text: 'Im gedachten Bauteilprojekt steht vielleicht „schnell montierbar“ im Lastenheft. Für einen Entwurf lässt sich damit arbeiten. Für einen Nachweis fehlt ein vereinbartes Kriterium. Eine KI-gestützte Vorprüfung kann solche Stellen als Klärungsbedarf aufbereiten. Das zuständige Team legt anschließend fest, unter welchen Bedingungen und nach welchem Maßstab geprüft wird.' },
      { text: 'Die NASA-Leitlinie für Anforderungen nennt unter anderem eindeutige Referenzen, nachvollziehbare Zuordnung und überprüfbare Kriterien. Diese Grundlagen sind auch für die Bewertung eines KI-Vorschlags nützlich: Eine flüssig formulierte Anforderung muss fachlich noch lange nicht vollständig sein.', source: 'nasa-requirements' },
      { text: 'Ich würde deshalb zunächst die Qualität der Rückfragen bewerten. Fehlt wirklich eine Angabe? Ist sie vielleicht schon in einem anderen Dokument enthalten? Erfindet das System einen Grenzwert, hat es an dieser Stelle keine brauchbare Klärung geliefert.' },
    ], links: [{ label: 'An einem Lastenheft-Beispiel ausprobieren', href: '/blog/ki-lastenheft-anforderungen-pruefen' }] },
    { id: 'wissen', title: 'Entwicklungswissen braucht Herkunft und Stand', paragraphs: [
      { text: 'Als Nächstes sucht das Team nach einer früheren Entscheidung: Warum wurde bei der alten Variante ein anderer Werkstoff gewählt? Eine hilfreiche Antwort muss auf die dazugehörigen Unterlagen verweisen. Ein ähnlicher Versuchsbericht aus einem anderen Projekt kann die Frage offenlassen.' },
      { text: 'Retrieval Augmented Generation, kurz RAG, verbindet die Suche in einem Datenbestand mit einem Sprachmodell. Gefundene Inhalte werden dem Modell als Kontext übergeben; die Antwort kann auf Quellen verweisen. Microsoft beschreibt dieses Prinzip in seiner RAG-Dokumentation.', source: 'microsoft-rag' },
      { text: 'Für den Engineering-Einsatz würde ich zusätzlich prüfen, ob Revision, Variante und Zugriffsrechte berücksichtigt werden. Widersprechen sich Zeichnung und Änderungsentscheidung, muss dieser Widerspruch sichtbar bleiben. Das Team braucht eine belastbare Fundstelle und eine klare Kennzeichnung dessen, was noch ungeklärt ist.' },
    ], links: [{ label: 'Quellen, Versionen und Zugriffe im RAG-Beispiel', href: '/blog/rag-engineering-wissen-versionen-quellen' }] },
    { id: 'konstruktion', title: 'In CAD wird aus der Beschreibung ein prüfbares Modell', paragraphs: [
      { text: 'Mit geklärten Vorgaben beginnt die Arbeit an der Geometrie. Meine CAD-Videos zeigen, wie ein Sprachmodell gezeigte Arbeitsschritte im CAD-System ausführt. Vorgaben und Rückmeldungen erfolgen im Dialog. Ein Beispiel beginnt mit einer Handskizze, andere beschäftigen sich mit der Prüfung einer Konstruktion oder der technischen Zeichnung.' },
      { text: 'Ein weiteres, eigenständiges Video macht eine Patentschrift als räumliche Baugruppe verständlich. Schnittansichten und eine Explosionsdarstellung helfen dabei, die Anordnung der Teile zu betrachten. Das Modell ist eine technische Interpretation. Abgeleitete Maße und Annahmen müssen mit der Quelle abgeglichen werden.' },
      { text: 'Für mich wird ein solcher Ablauf dann interessant, wenn Änderungen nachvollziehbar bleiben: Welche Geometrie wurde verändert? Welche Vorgabe steckt dahinter? Was muss erneut geprüft werden? Die schöne Darstellung ist ein Einstieg in diese Fragen.' },
    ], links: [{ label: 'CAD-Video: Von der Handskizze zum Modell', href: '/ai2cad/handskizze-zu-cad' }, { label: 'Eigenständige Demo: Ein Patent in 3D verstehen', href: '/ai2cad/patent-zu-3d' }] },
    { id: 'fertigung-elektrik', title: 'CNC und Elektrik erweitern den Blick auf die Umsetzung', paragraphs: [
      { text: 'Nach der Konstruktion müssen weitere Fachbereiche mit den Unterlagen arbeiten können. Im CNC-Beispiel führen ein 3D-Modell und eine Zeichnung zur Planung von Rohteil, zwei Aufspannungen und Bearbeitungsfolge. Zu sehen sind eine Simulation sowie ein Paket aus zwei NC-Programmen und einem Rüstblatt. Ein gefertigtes Bauteil oder ein freigegebener Maschinenlauf ist damit nicht dokumentiert.' },
      { text: 'Die Elektrikreihe betrachtet andere Aufgaben: einen Motorabgang und eine Wendeschütz-Schaltung mit modellierten Fehlerfällen. Sie zeigt, wie aus einer beschriebenen Aufgabe Annahmen, ein Schaltplan und interne Prüfungen entstehen. Die Bewertung für eine reale Anlage bleibt Aufgabe der zuständigen Fachleute.' },
      { text: 'Diese Videos gehören inhaltlich zusammen, weil sie Übergaben in der Entwicklung greifbar machen. Sie zeigen unterschiedliche Bauteile und Schaltungen. Es wäre falsch, daraus die Geschichte eines einzigen vollständig entwickelten Produkts zu machen.' },
    ], links: [{ label: 'CNC: Aufspannungen, Simulation und NC-Ausgabe', href: '/blog/ki-cnc-drehprogramm-cad-cam' }, { label: 'Elektrik: Vom Auftrag zum Fehlerfall', href: '/blog/ki-schaltplan-erstellen-pruefen' }] },
    { id: 'aenderungen', title: 'Entwicklung verläuft mit Rückkopplungen', paragraphs: [
      { text: 'Eine Erkenntnis aus der Fertigung kann zurück in die Konstruktion führen. Eine geänderte Schnittstelle kann neue Fragen an Lastenheft und Prüfung auslösen. Die grafische Kette in diesem Artikel ist deshalb eine Orientierung. In einem Projekt werden Stationen erneut durchlaufen.' },
      { text: 'NASA beschreibt Konfigurationsmanagement unter anderem über eindeutig bezeichnete Stände, bewertete Änderungen und dokumentierte Entscheidungen. Für eine KI-Unterstützung leite ich daraus ab: Ein Änderungsvorschlag sollte seinen Ausgangsstand und die betroffenen Unterlagen nennen. Seine Freigabe muss nachvollziehbar bleiben.', source: 'nasa-configuration' },
    ], links: [{ label: 'Folgen technischer Änderungen sichtbar machen', href: '/blog/ki-aenderungsmanagement-produktentwicklung' }] },
    { id: 'nutzen-messen', title: 'Nutzen zeigt sich nach Prüfung und Nacharbeit', paragraphs: [
      { text: 'Für einen ersten Vergleich würde ich eine bekannte, wiederkehrende Aufgabe wählen. Das Team bearbeitet sie mit einem klar benannten Datenstand und vergleicht das Ergebnis mit seinem bisherigen Vorgehen. Die Kriterien werden vorher vereinbart. Eine schnell erzeugte Ausgabe allein ist noch kein gutes Ergebnis.' },
      { text: 'Erfassen Sie die Bearbeitungszeit und die anschließende Prüfzeit getrennt. Dokumentieren Sie notwendige Korrekturen sowie offene Punkte. So kann ein Entwicklungsverantwortlicher beurteilen, ob sich Arbeit tatsächlich verringert oder nur in die Prüfung verschiebt.' },
    ], table: { headers: ['Blickwinkel', 'Was Sie beobachten', 'Frage für die Entscheidung'], rows: [
      ['Qualität', 'Fehlende Angaben, fachliche Fehler und nachvollziehbare Quellen', 'Ist das Ergebnis für den nächsten Schritt brauchbar?'],
      ['Aufwand', 'Bearbeitung, Prüfung, Korrekturen und laufende Pflege', 'Wie verändert sich der gesamte Aufwand?'],
      ['Zusammenarbeit', 'Rückfragen, Zuständigkeiten und verständliche Übergaben', 'Kann das Team mit dem Ergebnis weiterarbeiten?'],
    ] } },
    { id: 'einstieg', title: 'Mein Vorschlag: Beginnen Sie mit einer klaren Übergabe', paragraphs: [
      { text: 'Bringen Sie eine Aufgabe mit, bei der Ihr Team regelmäßig ins Stocken gerät: eine Lastenheft-Prüfung, die Suche nach einer Änderungsbegründung oder die Vorbereitung von Unterlagen für einen anderen Fachbereich. Dazu gehören ein Beispiel, der bisherige Ablauf und die Person, die das Ergebnis beurteilen kann.' },
      { text: 'Darauf lässt sich ein abgegrenzter Versuch aufbauen. Klären Sie vorab, welche Daten verwendet werden dürfen, welche Werkzeuge eingebunden werden und wer Ergebnisse prüft. Die Beteiligten brauchen Gelegenheit, den Ablauf zu verstehen und an ihren eigenen Aufgaben zu üben.' },
      { text: 'Ich würde einen Versuch beenden oder verändern, wenn seine Ergebnisse nur mit unverhältnismäßigem Aufwand kontrollierbar sind. Genau solche Entscheidungen gehören für mich zu einem sinnvollen Einsatz von KI in der Produktentwicklung.' },
    ], links: [{ label: 'Anwendungsfelder und Angebote im Überblick', href: '/ki-produktentwicklung' }, { label: 'Wie ein gemeinsamer Einstieg abläuft', href: '/zusammenarbeit' }, { label: 'Schulungen für Ihr Entwicklungsteam', href: '/ki-schulungen-mittelstand' }] },
  ],
  faqs: [
    { question: 'Wo kann KI in der technischen Produktentwicklung unterstützen?', answer: 'Mögliche Aufgaben sind die Vorprüfung von Anforderungen, die Suche in Entwicklungsunterlagen, die Unterstützung von CAD-Arbeitsschritten sowie die Vorbereitung von Fertigungs- oder Schaltplanunterlagen. Ob ein Ansatz nützlich ist, muss am konkreten Ablauf einschließlich Prüfung und Nacharbeit bewertet werden.' },
    { question: 'Ersetzt KI die fachliche Entscheidung eines Ingenieurs?', answer: 'In den hier beschriebenen Abläufen bereitet KI Informationen und Arbeitsergebnisse vor. Technische Bewertung, Prüfung und Freigabe bleiben bei den zuständigen Fachleuten. Die eigenen Demonstrationen belegen keine autonome Produktfreigabe.' },
    { question: 'Mit welcher Aufgabe sollte ein mittelständisches Entwicklungsteam beginnen?', answer: 'Ein geeigneter Kandidat ist eine wiederkehrende, klar abgegrenzte Aufgabe mit zugänglichen Daten, bekanntem bisherigen Vorgehen und einem fachlichen Prüfer. Vor dem Versuch sollten Ergebnisqualität, Bearbeitungszeit, Prüfaufwand und Korrekturen als Vergleichskriterien festgelegt werden.' },
  ],
  sources: ['nasa-requirements', 'microsoft-rag', 'nasa-configuration', 'aimation-cnc', 'aimation-motor', 'aimation-kurzschluss'],
  related: [{ label: 'Alle eigenen Demonstrationen in der Entwicklungswerkstatt', href: '/entwicklungswerkstatt' }, { label: 'KI-Projekte mit RICE priorisieren', href: '/blog/ki-projekte-priorisierung-rice' }],
};

// Original conceptual illustration, shared by hero and social preview. Not a technical schematic.
export function journeyArtworkUri() {
  const nodes = [[80,100,'01','ANFORDERUNGEN'],[390,100,'02','WISSEN'],[700,100,'03','CAD'],[700,400,'04','CAM / ELEKTRO'],[390,400,'05','PRUEFUNG']];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="720" viewBox="0 0 1000 720"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="#a7b6bc" stroke-opacity=".1"/></pattern></defs><rect width="1000" height="720" fill="#071013"/><rect width="1000" height="720" fill="url(#grid)"/><g fill="none" stroke="#60afff" stroke-width="2" stroke-opacity=".65"><path d="M280 190H390M590 190H700M800 280V400M700 490H590"/><path d="M390 490H180V280" stroke-dasharray="6 9"/><path d="m380 180 10 10-10 10m310-20 10 10-10 10m90 190 10 10 10-10m-210 90-10 10 10 10"/></g>${nodes.map(([x,y,n,label])=>`<g transform="translate(${x} ${y})"><rect width="200" height="180" rx="12" fill="#101e23" stroke="#a7b6bc" stroke-opacity=".5"/><circle cx="34" cy="36" r="6" fill="#60afff"/><text x="24" y="105" fill="#faf9f7" font-family="sans-serif" font-size="48">${n}</text><text x="24" y="145" fill="#faf9f7" font-family="monospace" font-size="13">${label}</text></g>`).join('')}<text x="80" y="650" fill="#a7b6bc" font-family="monospace" font-size="16">ENTWICKLUNG MIT RUECKKOPPLUNGEN</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
