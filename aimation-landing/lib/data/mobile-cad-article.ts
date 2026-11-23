import type { VideoArticle } from './video-articles';
import { AI2CAD_PATH, SKETCH_VIDEO } from './ai2cad';

const film = `${AI2CAD_PATH}/${SKETCH_VIDEO.slug}`;

export const MOBILE_CAD_ARTICLE: VideoArticle = {
  slug: 'cad-am-handy-workstation', date: '2026-11-23', tag: 'Mobiles CAD',
  title: 'Was vom CAD-Arbeitsplatz aufs Handy wandert',
  shortTitle: 'CAD am Handy oder an der Workstation?',
  description: 'Wie verändert KI den CAD-Arbeitsplatz? Holger Peschke zeigt an einer Wellenskizze, was am Handy gelingt und welche Prüfung an der Workstation bleibt.',
  lead: 'Um 19:12 Uhr schicke ich das Foto einer Wellenskizze ab. Um 19:16 Uhr öffne ich auf demselben Handy die 3D-Ansicht. Im Chat liegt auch die STEP-Datei. Für diesen ersten Entwurf habe ich mich kein einziges Mal an einen CAD-Arbeitsplatz gesetzt.',
  answer: 'Ich erwarte, dass mehr Konstruktionsarbeit dort beginnt, wo jemand das Bauteil vor sich hat. Das Handy nimmt die Skizze auf und zeigt das Ergebnis. In meinem Versuch läuft das CAD-System auf dem eigenen Server. Für die Prüfung der Passungen würde ich mich wieder an die Workstation setzen.',
  visualTitle: 'Die vier Minuten zwischen Papier und Modell',
  visualIntro: 'Vom ersten Foto bis zur Rückgabe der Datei. Öffnen Sie eine Station, um den Arbeitsschritt im Film anzusehen.',
  poster: '/videos/ai2cad/skizze.webp', posterAlt: SKETCH_VIDEO.de.poster,
  videoHref: film, videoLabel: `Handy-Demo ansehen · ${SKETCH_VIDEO.duration} Min.`,
  sourceNote: 'Die Uhrzeiten und das Bauteil stammen aus meinem eigenen AI2CAD-Versuch. Die Herstellerquellen beschreiben andere mobile Arbeitsweisen. Die Einschätzung zur künftigen Rolle der Workstation ist meine Schlussfolgerung.',
  steps: [
    { label: 'Skizze senden', frame: { image: 'papier', alt: 'Handskizze der abgesetzten Welle mit Maßen und zwei Nuten', station: '19:12 · Handy' }, result: 'Ich fotografiere die bemaßte Handskizze und schicke sie dem CAD-Agenten im Chat.', review: 'Kann man auf Ihrem Foto erkennen, auf welche Schulter sich ein Längenmaß bezieht?', href: film, linkLabel: 'Die Skizze im Film ansehen' },
    { label: 'Maße bestätigen', frame: { image: 'masse', alt: 'Vom Agenten markierte Maße in der Handskizze', station: 'Rückfrage im Chat' }, result: 'Der Agent liest die Maße. Wo die Vorlage mehrere Lesarten zulässt, fragt er nach. Ich bestätige die Maßliste im Chat.', review: 'Wer kann bei Ihrem Bauteil verbindlich sagen, welche Lesart stimmt?', href: film+'?t=46#video', linkLabel: 'Zur Bestätigung bei 0:46' },
    { label: 'Welle modellieren', frame: { image: 'modell', alt: 'CAD-Modell der Welle mit Absätzen und Passfedernuten', station: 'CAD-Server' }, result: 'Der Agent baut die Welle im angebundenen CAD-System aus den bestätigten Maßen auf.', review: 'Stimmen die Absätze und Nuten mit der Skizze überein?', href: film+'?t=54#video', linkLabel: 'Zur Modellierung bei 0:54' },
    { label: '3D-Modell öffnen', frame: { image: 'handy', alt: 'Zurückgesendete 3D-Ansicht auf dem Handy', station: '19:16 · Handy' }, result: 'Auf meinem Handy kommen die 3D-Ansicht und die STEP-Datei an.', review: 'Welche Entscheidung können Sie schon anhand der 3D-Ansicht treffen?', href: film+'?t=82#video', linkLabel: 'Zur Rückgabe bei 1:22' },
  ],
  sections: [
    { id: 'vor-ort', title: 'Die erste Rückfrage gehört ans Bauteil', paragraphs: [
      { text: 'Stellen Sie sich zwei Kollegen am zerlegten Getriebe vor. Auf dem Tisch liegt die Welle. Auf dem Papier endet eine Maßlinie dicht neben einem Absatz. Von welcher Schulter aus wurde gemessen? Solange beide am Tisch stehen, kann einer mit dem Finger darauf zeigen. Kommt die Rückfrage am nächsten Morgen per Mail, muss erst jemand die Situation rekonstruieren.' },
      { text: 'Genau an dieser Stelle würde ich das Handy einsetzen. Noch am Tisch lässt sich aus der Skizze ein erster räumlicher Entwurf anfordern. Ist die Nut auf der falschen Seite gelandet, haben beide sofort etwas Konkretes zu besprechen. Dieser Werkstattfall ist ein Beispiel dafür, wozu ich meinen Versuch nutzen würde.' },
    ] },
    { id: 'wo-das-modell-entsteht', title: 'Wo das Modell tatsächlich entsteht', paragraphs: [
      { text: 'Bei der gefilmten Welle übernimmt das Handy Kamera, Chat und Anzeige. Auf dem Server greift der KI-Agent auf das CAD-System zu. Er baut die Absätze und die beiden Passfedernuten aus den bestätigten Angaben auf. Für ein Entwicklungsteam steckt darin eine praktische Möglichkeit. Wer an der Maschine steht, kann den Entwurf anstoßen. Die Geometrie entsteht weiter im angebundenen CAD-System.' },
      { text: 'Auch unter mobilen CAD-Apps gibt es unterschiedliche Ansätze. Autodesk beschreibt für die mobile Fusion-App das Ansehen und Kommentieren von Modellen. Das passt etwa zu einer Rückmeldung aus der Montage.', source: 'fusion-mobile' },
      { text: 'Onshape dokumentiert für seine Part Studios auf iOS und Android auch Skizzen- und Modellierwerkzeuge. Dort kann der Anwender Geometrie direkt bearbeiten. In meinem Test bestand meine Eingabe aus einem Foto, einem Auftrag und der Antwort auf Rückfragen. Welches Gerät man in der Hand hält, sagt also noch wenig darüber aus, wer das Modell baut.', source: 'onshape-mobile' },
    ] },
    { id: 'grenze', title: 'Was ich an der Workstation prüfe', paragraphs: [
      { text: 'Die STEP-Datei lässt sich in einem CAD-System mit STEP-Import öffnen. So kann ein Kollege mit der Geometrie weiterarbeiten. In der 3D-Ansicht erkenne ich die beiden Nuten. Ob ein Lagersitz die richtige Passung hat, lese ich aus der schattierten Oberfläche nicht ab. Für diese Entscheidung brauche ich die Maßvorgaben, die Gegenbauteile und den gültigen Zeichnungsstand.' },
      { text: 'Am großen Bildschirm würde ich Modell und Zeichnung nebeneinander öffnen, den Sitz im Schnitt prüfen und offene Angaben festhalten. Die vier Minuten im Chat enden mit dem Eingang der Datei. Eine geprüfte Zeichnung oder die Freigabe für die Fertigung gehören nicht zu dieser Zeit.' },
    ] },
    { id: 'eigener-versuch', title: 'Woran ich einen mobilen Versuch messen würde', paragraphs: [
      { text: 'Nehmen Sie für einen ersten Vergleich ein bekanntes Bauteil, dessen Zeichnung und Referenzmodell vorliegen. Lassen Sie einen Kollegen mit einer üblichen Werkstattskizze beginnen. Ein zweiter prüft anschließend die STEP-Datei im vorhandenen CAD. Rollen, Zugriffsrechte und der erlaubte Übertragungsweg für das Foto lassen sich vorab klären.' },
      { text: 'Ich würde messen, wann die erste brauchbare Ansicht am Bauteil vorliegt und wann der geprüfte Entwurf im Projekt ankommt. Dazwischen liegen Rückfragen, mögliche Korrekturen und die Übergabe. Wenn die Konstruktion jede Nut nacharbeiten muss, hilft der schnelle erste Blick wenig. Klärt das Team dagegen schon vor Ort ein missverständliches Maß, hat der mobile Zugang einen ganz konkreten Zweck erfüllt.' },
    ] },
  ],
  faqs: [
    { question: 'Braucht das Smartphone für diesen Ablauf eine CAD-App?', answer: 'In der AI2CAD-Demo dienen Foto und Chat als Eingabe. Der CAD-Agent modelliert auf dem Server und schickt Ansicht und STEP-Datei zurück. Das Modellieren erfolgt damit außerhalb des Smartphones.' },
    { question: 'Muss ein Unternehmen dafür sein CAD-System wechseln?', answer: 'Für die Übergabe der gezeigten Geometrie braucht das Zielsystem einen STEP-Import. Soll ein Agent direkt im vorhandenen CAD modellieren, hängen Anbindung und erlaubte Arbeitsschritte von den Schnittstellen und Berechtigungen dieses Systems ab.' },
    { question: 'Wann würde ich die Workstation vorziehen?', answer: 'Für den Abgleich mit Gegenbauteilen, die Prüfung von Passungen und die Zeichnungsfreigabe würde ich den regulären CAD-Arbeitsplatz wählen. Der mobile Entwurf kann die Rückfragen zu Form und Maßen vorziehen.' },
  ],
  sources: ['fusion-mobile', 'onshape-mobile'],
  related: [
    { label: 'Die Wellenskizze und das Ergebnis im Film ansehen', href: film },
    { label: 'Weitere Versuche zur CAD-Automatisierung', href: AI2CAD_PATH },
    { label: 'KI in die technische Produktentwicklung einbinden', href: '/ki-produktentwicklung' },
  ],
};
