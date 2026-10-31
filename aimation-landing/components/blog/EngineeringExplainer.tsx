'use client';

import { useState } from 'react';
import { ArrowDown, FileText, GitBranch, Search, ShieldCheck, UserCheck } from 'lucide-react';
import type { ArticleKey } from '@/lib/data/engineering-articles';
import s from './engineering-article.module.css';
import EngineeringArtwork from './EngineeringArtwork';

const figureNotes: Record<ArticleKey, { title: string; text: string }[]> = {
  requirements: [
    { title: 'Die offene Angabe sichtbar machen.', text: 'Zeichnung und Anforderung gehören zusammen. Die Markierung verweist auf den ausgewählten Prüfausschnitt.' },
    { title: 'Zwei Vorgaben, eine Rückfrage.', text: 'Die beiden Anforderungs-IDs bleiben gemeinsam sichtbar. Das Fachteam klärt, ob dieselbe Variante gemeint ist.' },
    { title: 'Den Nachweis zuordnen.', text: 'Die gewählte Anforderung braucht ein überprüfbares Kriterium. Die Zeichnung allein beantwortet diese Frage nicht.' },
  ],
  knowledge: [
    { title: 'Fundstellen mit gemeinsamem Stand.', text: 'Das Netz verbindet Dokumente mit ihrem Versionskontext. Die Originalstellen bleiben die Grundlage der Prüfung.' },
    { title: 'Die Verbindung bleibt ungeklärt.', text: 'Unterbrochene Linien kennzeichnen die widersprüchliche Quellenlage. Daraus entsteht noch keine eindeutige Antwort.' },
    { title: 'Der Zugriff begrenzt die Antwort.', text: 'Die Dokumentstruktur wird nur schematisch gezeigt. Aus gesperrten Quellen gelangen keine Inhalte in die Antwort.' },
  ],
  changes: [
    { title: 'Ein anderer Abstand zieht Kreise.', text: 'Überlagerte Stände zeigen die geänderte Schnittstelle. Welche Unterlagen betroffen sind, wird darunter zur Prüfaufgabe.' },
    { title: 'Gleiche Form, anderer Werkstoff.', text: 'Die schraffierte Fläche markiert den Werkstoffvergleich. Nachweise und Fertigungsablauf müssen fachlich bewertet werden.' },
    { title: 'Ohne Ausgangsstand bleibt die Zuordnung offen.', text: 'Die ausgeblendete Geometrie zeigt den fehlenden Kontext. Eine vollständige Folgenbewertung ist damit noch nicht möglich.' },
  ],
};

const requirements = [
  { label: 'Montage', id: 'LH-017', before: 'Die Halterung muss hohe Temperaturen aushalten und schnell montierbar sein.', marks: ['Temperaturbereich fehlt', 'Einwirkdauer fehlt', 'Montagekriterium fehlt'], question: 'Welcher Temperaturbereich gilt bei welcher Einwirkdauer? Unter welchen Bedingungen und innerhalb welcher Zeit muss die Montage möglich sein?', owner: 'Konstruktion und Auftraggeber stimmen Einsatzbedingungen ab. Montage und Versuch legen das Nachweisverfahren fest.' },
  { label: 'Masse', id: 'LH-028 / LH-041', before: 'LH-028: Die Baugruppe darf höchstens 2,0 kg wiegen. LH-041: Die zulässige Masse der Baugruppe beträgt 2,5 kg.', marks: ['Möglicher Widerspruch', 'Variante ungeklärt', 'Dokumentenstand prüfen'], question: 'Gelten beide Anforderungen für dieselbe Baugruppe, dieselbe Variante und denselben Stand? Welcher Grenzwert wurde vereinbart?', owner: 'Das Requirements-Team prüft Herkunft und Gültigkeit. Ein Wert wird erst nach der Klärung geändert.' },
  { label: 'Nachweis', id: 'LH-063', before: 'Nach der Lebensdauerprüfung muss die Verriegelung weiterhin zuverlässig funktionieren.', marks: ['Prüfablauf nicht benannt', 'Funktionskriterium offen', 'Bezug zur Prüfvorgabe fehlt'], question: 'Welche Prüfvorgabe gilt? Welche Funktion muss anschließend mit welchem Akzeptanzkriterium nachgewiesen werden?', owner: 'Die Prüfabteilung und die zuständige Konstruktion vereinbaren Umfang und Akzeptanzkriterium.' },
];
const knowledge = [
  { label: 'Passender Stand', status: 'Belegter Entwurf', docs: [{ id: 'ÄA-042 · Rev. C', state: 'Freigegeben', text: 'Die Änderungsentscheidung nennt die Werkstoffumstellung und verweist auf V-118.' }, { id: 'V-118 · Rev. C', state: 'Passender Stand', text: 'Der Bericht enthält den dokumentierten Vergleich für H-204.' }], answer: 'Für H-204, Revision C, wird die Umstellung in ÄA-042 mit dem Vergleich aus V-118 begründet. Die Originalstellen sind vor einer weiteren Verwendung zu prüfen.', check: 'Die Begründung stammt aus der Änderungsentscheidung. Der Prüfbericht ist der zugehörige Nachweis, nicht die Entscheidung selbst.' },
  { label: 'Widerspruch', status: 'Klärung erforderlich', docs: [{ id: 'ÄA-042 · Rev. C', state: 'Freigegeben', text: 'Die Änderungsentscheidung nennt Werkstoff B.' }, { id: 'Zeichnung H-204 · Rev. C', state: 'Widersprechende Angabe', text: 'Die zugeordnete Zeichnung führt weiterhin Werkstoff A.' }], answer: 'Die zugeordneten Unterlagen widersprechen sich. Eine eindeutige Aussage zum gültigen Werkstoff ist aus dieser Quellenlage nicht möglich.', check: 'Die zuständige Stelle klärt die Abweichung. Das System wählt keinen Werkstoff aufgrund sprachlicher Plausibilität aus.' },
  { label: 'Kein Zugriff', status: 'Keine belegte Antwort', docs: [{ id: 'Berechtigungsprüfung', state: 'Kein nutzbarer Beleg', text: 'Für das Testkonto steht kein freigegebener Beleg zur gestellten Frage bereit.' }], answer: 'Für diese Frage liegen im zugänglichen Bestand keine ausreichenden Belege vor. Bitte klären Sie die Anfrage mit der zuständigen Fachperson.', check: 'Gesperrte Inhalte werden weder in den Modellkontext noch in die Antwort übernommen. Fehlende Rechte werden nicht durch einen anderen Suchweg umgangen.' },
];
const changes = [
  { label: 'Bohrungsabstand', request: 'ÄA-042: Bohrungsabstand 80 → 84 mm', context: 'H-204 · Revision C · Geometrieänderung', nodes: [{ name: 'Gegenplatte', source: 'Verwendung in Stückliste B-10', check: 'Passt die geänderte Schnittstelle?' }, { name: 'Montagelehre', source: 'Prüfvorschlag aus dem Beispiel', check: 'Muss die Lehre angepasst werden?' }, { name: 'Prüfbericht V-118', source: 'Bezug auf H-204, Revision C', check: 'Deckt der Nachweis die neue Geometrie ab?' }] },
  { label: 'Werkstoff', request: 'ÄA-043: Werkstoff A → Werkstoff B', context: 'H-204 · Revision C · Werkstoffänderung', nodes: [{ name: 'Zeichnung H-204', source: 'Vorhandene Werkstoffangabe', check: 'Welche Spezifikation gilt für den neuen Stand?' }, { name: 'Prüfbericht V-118', source: 'Bezug auf bisherigen Werkstoff', check: 'Welche Nachweise müssen neu bewertet werden?' }, { name: 'Fertigungsablauf', source: 'Prüfvorschlag aus dem Beispiel', check: 'Welche Prozessschritte könnten betroffen sein?' }] },
  { label: 'Unvollständige Daten', request: 'ÄA-044: Änderung ohne eindeutige Variante', context: 'H-204 · Zielvariante und Revision fehlen', nodes: [{ name: 'Ausgangsstand', source: 'Angabe fehlt im Antrag', check: 'Welche Revision und Variante sind betroffen?' }, { name: 'Verwendungen', source: 'Keine eindeutige Zuordnung', check: 'Welche Baugruppen müssen betrachtet werden?' }, { name: 'Bewertung', source: 'Noch nicht vollständig möglich', check: 'Erst den Kontext klären, dann Folgen bewerten.' }] },
];

export default function EngineeringExplainer({ kind }: { kind: ArticleKey }) {
  const [selected, setSelected] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const options = kind === 'requirements' ? requirements : kind === 'knowledge' ? knowledge : changes;
  const itemId = `explainer-${kind}`;
  return <div className={s.explainer}>
    <div className={s.consoleHeader}><span>AImation / {kind === 'requirements' ? 'Anforderungsprüfung' : kind === 'knowledge' ? 'Quellenprüfung' : 'Änderungsprüfung'}</span><span>Interaktives Beispiel</span></div>
    <div className={s.options} role="group" aria-label="Beispiel auswählen">
      {options.map((option, index) => <button type="button" key={option.label} aria-pressed={selected === index} aria-controls={itemId} onClick={() => { setSelected(index); setRevealed(false); }}>{option.label}</button>)}
    </div>
    <div id={itemId} className={s.visualBody} aria-live="polite">
      <figure className={s.figureStage}>
        <div className={s.figureArt} key={`${kind}-${selected}`}><EngineeringArtwork kind={kind} variant={selected} /></div>
        <figcaption className={s.figureCaption}><span className={s.nodeLabel}>0{selected + 1} / {options[selected].label}</span><h3>{figureNotes[kind][selected].title}</h3><p>{figureNotes[kind][selected].text}</p><span className={s.figureDisclaimer}>Schematisch, fiktives Beispiel</span></figcaption>
      </figure>
      {kind === 'requirements' && <>
        <div className={s.document}><span className={s.nodeLabel}><FileText size={17} aria-hidden="true" />Original / {requirements[selected].id}</span><blockquote>{requirements[selected].before}</blockquote><p>Fiktiver Text. Werte und Formulierungen dienen nur dem Beispiel.</p></div>
        <div className={s.connector}><ArrowDown size={24} aria-hidden="true" /><span>Auf offene Angaben prüfen</span></div>
        <button type="button" className={s.reveal} aria-expanded={revealed} aria-controls={`${itemId}-findings`} onClick={() => setRevealed(!revealed)}>{revealed ? 'Prüfhinweise schließen' : 'Prüfhinweise und Rückfrage anzeigen'} <span aria-hidden="true">{revealed ? '−' : '+'}</span></button>
        <div id={`${itemId}-findings`} hidden={!revealed}>
          <ul className={s.findings}>{requirements[selected].marks.map(mark => <li key={mark}>{mark}</li>)}</ul>
          <div className={s.result}><span className={s.nodeLabel}>Rückfrage statt erfundener Vorgabe</span><p>{requirements[selected].question}</p></div>
          <p className={s.human}><UserCheck size={21} aria-hidden="true" />{requirements[selected].owner}</p>
        </div>
      </>}
      {kind === 'knowledge' && <>
        <div className={s.query}><Search size={22} aria-hidden="true" /><p>Warum wurde der Werkstoff von H-204 in Revision C geändert?</p></div>
        <div className={s.pipeline}><span><ShieldCheck size={17} aria-hidden="true" />Zugriff prüfen</span><span>Stand zuordnen</span><span>Fundstellen lesen</span></div>
        <div className={s.sourceCards}>{knowledge[selected].docs.map(doc => <div key={doc.id}><FileText size={23} aria-hidden="true" /><strong>{doc.id}</strong><span>{doc.state}</span><p>{doc.text}</p></div>)}</div>
        <div className={s.connector}><ArrowDown size={24} aria-hidden="true" /><span>Nur passende, zugängliche Belege verwenden</span></div>
        <div className={s.result}><span className={s.nodeLabel}>{knowledge[selected].status}</span><p>{knowledge[selected].answer}</p></div>
        <p className={s.human}><UserCheck size={21} aria-hidden="true" />{knowledge[selected].check}</p>
      </>}
      {kind === 'changes' && <>
        <div className={s.changeRoot}><GitBranch size={26} aria-hidden="true" /><div><span className={s.nodeLabel}>{changes[selected].context}</span><h3>{changes[selected].request}</h3></div></div>
        <div className={s.branchLine} aria-hidden="true" />
        <div className={s.dependencies} key={`dependencies-${selected}`}>{changes[selected].nodes.map((node, index) => <div key={node.name}><span className={s.nodeLabel}>0{index + 1} / Prüfpunkt</span><h4>{node.name}</h4><p>{node.source}</p><div>{node.check}</div></div>)}</div>
        <p className={s.human}><UserCheck size={21} aria-hidden="true" />{selected === 2 ? 'Eine unvollständige Zuordnung bleibt offen. Das System darf keine vollständige Auswirkungsanalyse vortäuschen.' : 'Die Darstellung erzeugt Prüfaufgaben. Konstruktion, Montage und Prüfabteilung bewerten die tatsächlichen Folgen.'}</p>
      </>}
    </div>
    <p className={s.visualNote}>Fiktive Daten, redaktionell hinterlegte Beispiele. Keine Live-KI und keine produktive Systemanbindung.</p>
  </div>;
}
