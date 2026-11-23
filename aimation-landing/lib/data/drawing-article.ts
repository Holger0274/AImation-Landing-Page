import type { VideoArticle } from './video-articles';

const film = '/ai2cad/technische-zeichnung';

export const DRAWING_ARTICLE: VideoArticle = {
  slug: 'zeichnungsableitung-3d-modell-technische-zeichnung',
  date: '2026-11-23',
  tag: 'Zeichnungsableitung',
  title: 'Vom 3D-Modell zur technischen Zeichnung mit KI',
  shortTitle: 'Zeichnungsableitung mit KI am Beispiel einer Welle',
  description: 'Wie wird aus einem 3D-Modell eine technische Zeichnung? Eine Welle zeigt, wie KI Ansichten und Maße ableitet und was die Konstruktion vor der Freigabe prüft.',
  lead: 'Auf dem Bildschirm sieht die Welle fertig aus. Am linken Lagersitz steht in der Zeichnung später „Ø20 k6“. Die 20 Millimeter kann das CAD-System am Modell messen. Woher weiß es, dass hier k6 gelten soll?',
  answer: 'Bei der automatisierten Zeichnungsableitung liefert das 3D-Modell die Geometrie für Ansichten und Nennmaße. Ein CAD-Agent kann daraus ein Blatt aufbauen, Maße platzieren und die Darstellung prüfen. Welche Passung ein Lagersitz braucht, muss aus einer bestätigten Vorgabe hervorgehen. Genau diesen Unterschied zeigt die Welle im Film.',
  visualTitle: 'Eine Welle, vier Ausschnitte aus der Zeichnung',
  visualIntro: 'Öffnen Sie einen Ausschnitt und springen Sie im Film direkt zur gezeigten Stelle.',
  poster: '/videos/ai2cad/zeichnung.webp',
  posterAlt: 'Einzelteilzeichnung der abgestuften Welle mit Hauptansicht, Bemaßung und vergrößerten Freistichen',
  videoHref: film,
  videoLabel: 'Zeichnungsdemo ansehen · 2:20 Min.',
  sourceNote: 'Die Bilder und Maße stammen aus der AI2CAD-Zeichnungsdemo. Die beschriebenen Prüfschritte stammen aus der AI2Engineering-Architektur 4.0. Die Onshape-Dokumentation erläutert CAD-Grundfunktionen unabhängig vom gefilmten Versuch.',
  steps: [
    { label: 'Ansichten anordnen', frame: { image: '/videos/ai2cad/zeichnung-ansichten.webp', station: '1:05 · Blattaufbau', alt: 'Stirnansicht links und Längsansicht der Welle auf dem A3-Blatt' }, result: 'In der Längsansicht sind die Absätze sichtbar. Links zeigt die Stirnansicht die konzentrischen Durchmesser.', review: 'Ist die Lage der Welle eindeutig?', href: film+'?t=65#video', linkLabel: 'Blattaufbau bei 1:05' },
    { label: 'Lagersitz bemaßen', frame: { image: '/videos/ai2cad/zeichnung-lagersitz.webp', station: '1:12 · Passsitz', alt: 'Am linken Lagersitz stehen Ø20 k6 und die beiden Abmaße' }, result: 'Am Sitz stehen Nennmaß, Toleranzklasse und Abmaße zusammen. Daneben ist der nächste Absatz mit Ø25 bemaßt.', review: 'Welche Vorgabe legt k6 fest?', href: film+'?t=72#video', linkLabel: 'Lagersitz bei 1:12' },
    { label: 'Bezüge lesen', frame: { image: '/videos/ai2cad/zeichnung-bezuege.webp', station: '1:24 · Form und Lage', alt: 'Bezugszeichen A und B an den Sitzen und Toleranzrahmen über der Welle' }, result: 'Die Toleranzrahmen über der Welle verweisen auf den gemeinsamen Bezug A-B. Die Zuordnung muss auch auf dem ausgegebenen Blatt lesbar sein.', review: 'Zu welcher Fläche gehört jeder Pfeil?', href: film+'?t=84#video', linkLabel: 'Bezugsangaben bei 1:24' },
    { label: 'Freistiche prüfen', frame: { image: '/videos/ai2cad/zeichnung-freistiche.webp', station: '1:34 · Einzelheiten', alt: 'Vergrößerte Einzelheiten X, Y und Z mit drei Freistichprofilen' }, result: 'Die drei Einzelheiten machen die Übergänge sichtbar. Der Abgleich der Freistichmaße mit dem zugehörigen Normblatt bleibt eine Prüfaufgabe.', review: 'Passt der Übergang zum Gegenbauteil?', href: film+'?t=94#video', linkLabel: 'Freistiche bei 1:34' },
  ],
  sections: [
    { id: 'modellstand', title: 'Welcher Modellstand gehört auf das Blatt?', paragraphs: [
      { text: 'Eine STEP-Datei aus der Werkstatt lässt sich im vorhandenen CAD öffnen. Vor der Zeichnungsableitung klärt die Konstruktion, ob die Datei dem vereinbarten Modellstand entspricht. Ändert sich später die Schulter der Welle, kann ein sauber bemaßtes Blatt bereits veraltet sein.' },
      { text: 'In AI2Engineering 4.0 beginnt die Zeichnungsprüfung deshalb mit der Modellrevision. Erst wenn die Ansichten zum eingereichten Modell gehören, lohnt der Vergleich der Maße. Bei der Übergabe müssen Sie Modell und Zeichnung über Teilenummer und Revision eindeutig zuordnen können.' },
    ], links: [{ label: 'Wie eine STEP-Datei aus dem Skizzenfoto entsteht', href: '/blog/cad-am-handy-workstation' }] },
    { id: 'ansichten', title: 'Warum der Freistich eine eigene Ansicht braucht', paragraphs: [
      { text: 'Auf dem A3-Blatt liegt die Welle waagerecht. In der Hauptansicht lassen sich die Längen zwischen den Schultern ablesen, in der Stirnansicht die konzentrischen Absätze erkennen. Die Isometrie oben rechts hilft beim räumlichen Einordnen. In CAD-Systemen lassen sich weitere Ansichten durch Projektion aus einer vorhandenen Ansicht erzeugen.', source: 'onshape-projection' },
      { text: 'Die Hauptansichten im Film haben den Maßstab 2:1. Für die Freistiche reicht das kaum. Unten auf dem Blatt zeigen die Einzelheiten X, Y und Z die Übergänge in 5:1. So kann die Werkstatt die kleine Kontur lesen, ohne dass die gesamte Welle mehr Platz auf dem Blatt beansprucht.' },
    ] },
    { id: 'mass-und-passung', title: 'Woher kommen Ø20, k6 und die Abmaße?', paragraphs: [
      { text: 'Am linken Sitz sind drei verschiedene Aussagen zusammengefasst. Ø20 bezeichnet den Nenndurchmesser. k6 legt das Toleranzfeld der Welle fest. Im Film stehen am Maß die Abweichungen +0,015 und +0,002 mm. Die zylindrische Oberfläche allein verrät nur ihren Durchmesser. Ob genau diese Passung zum Lager und zur Montage passt, muss die Konstruktion anhand der Funktion entscheiden.' },
      { text: 'Ist die Passung bereits als bestätigte Produktinformation am Modell oder in einer Spezifikation hinterlegt, kann der Agent sie übernehmen. Fehlt sie, bleibt die Angabe offen. Bei der Prüfung können Sie im CAD nachsehen, an welchen Kanten oder Flächen das Maß hängt. In Onshape lassen sich die referenzierten Elemente einer Bemaßung hervorheben. Ein überschriebener Maßtext verdient einen zweiten Blick.', source: 'onshape-drawing-dimensions' },
    ], table: { headers: ['Angabe auf dem Blatt', 'Was vor der Übergabe zu klären ist'], rows: [
      ['Ø20 am linken Sitz', 'Gehören Maßwert und Maßpfeile zum richtigen Zylinder der aktuellen Revision?'],
      ['k6 am selben Sitz', 'Welche bestätigte Funktionsvorgabe belegt die Toleranzklasse?'],
      ['Bezug A-B', 'Zeigen die Bezugskennzeichen auf die vorgesehenen Sitze, und kann die Prüfung den Bezug herstellen?'],
    ] } },
    { id: 'prueflauf', title: 'Wie AI2Engineering 4.0 die Ableitung prüft', paragraphs: [
      { text: 'Der Prüfstand verfolgt eine Bemaßung bis zu ihrem Ursprung. Er gleicht den Maßwert, den angezeigten Text und den Bezug am Modell ab. Über eine Maß-ID lässt sich nachvollziehen, welche Vorgabe gemeint war. Ein weiterer Prüfschritt vergleicht die geforderten Maße mit dem Blatt. So fällt auch ein doppelt eingetragenes Fertigungsmaß auf.' },
      { text: 'Anschließend kommt die Sichtprüfung. Der Agent rendert das Blatt und betrachtet es wie ein Leser. Liegt eine Maßzahl auf der Kontur? Kreuzt ein Pfeil eine zweite Maßlinie? Im Film wird ein überlagerter Bereich vergrößert, die Darstellung korrigiert und erneut angesehen. Der Zahlenvergleich allein würde dieses Problem übersehen.' },
    ] },
    { id: 'freigabe', title: 'Die offene Frage an der Lagerschulter', paragraphs: [
      { text: 'Die Zeichnung im Film zeigt den Lagersitz samt Passung. Trotzdem bleibt die Lagerschulter zu niedrig. Eine lesbare Durchmesserangabe beantwortet noch nicht, ob der Lagerring an der Schulter ausreichend anliegt. Dazu braucht die Konstruktion die Anschlussmaße des konkreten Lagers und die Geometrie des Übergangs. Auch die einzelnen Freistichmaße stehen noch zum Abgleich mit dem Normblatt an.' },
      { text: 'Für eine Übergabe würde ich genau diese beiden Stellen auf dem Blatt markieren. Ändert sich die Schulter, wird zuerst das Modell korrigiert. Danach werden Ansichten und betroffene Maße aus der neuen Revision abgeleitet und erneut geprüft. Im Versuch schlägt der Agent den Export vor. Die Entscheidung über die Fertigungsfreigabe liegt bei der verantwortlichen Konstruktion.' },
    ] },
  ],
  faqs: [
    { question: 'Kann KI aus einer STEP-Datei eine technische Zeichnung erstellen?', answer: 'Nach dem CAD-Import kann ein Agent aus der Geometrie Ansichten und Nennmaße ableiten. Für Passungen, Werkstoff und Oberflächen braucht er bestätigte Angaben zum Bauteil. Was die Datei davon mitbringt, muss beim Import geprüft werden.' },
    { question: 'Was prüft die automatisierte Zeichnungsableitung in AI2Engineering 4.0?', answer: 'Der Prüfstand vergleicht Modellrevision, Maßwerte, angezeigte Texte und Modellbezüge und prüft die Herkunft der Maße. Beim gerenderten Blatt geht es zusätzlich um lesbare Maßketten, eindeutige Pfeile und freie Flächen im Schriftfeld.' },
    { question: 'Wann ist die abgeleitete Zeichnung bereit für die Fertigung?', answer: 'Wenn die verantwortliche Konstruktion den dokumentierten Stand geprüft und freigegeben hat. Bei der gezeigten Welle sind dafür unter anderem die Lagerschulter und die Freistichmaße zu klären.' },
  ],
  sources: ['aimation-drawing', 'onshape-projection', 'onshape-drawing-dimensions'],
  related: [
    { label: 'Die technische Zeichnung der Welle im Film ansehen', href: film },
    { label: 'Wie die Wellengeometrie vor der Ableitung geprüft wird', href: '/ai2cad/konstruktion-pruefen' },
    { label: 'Vom CAD-Modell zum CNC-Drehprogramm', href: '/blog/ki-cnc-drehprogramm-cad-cam' },
  ],
};
