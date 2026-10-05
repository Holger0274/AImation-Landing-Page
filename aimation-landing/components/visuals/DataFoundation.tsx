'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, Bot, ChartNoAxesCombined, Check, FileText, FolderOpen, GitBranch, LockKeyhole, MessageSquare, RotateCcw, ShieldCheck, TriangleAlert } from 'lucide-react';
import styles from './DataFoundation.module.css';

const copy = {
  de: {
    title: 'Ihre KI arbeitet mit dem, was Ihre', accent: 'Daten hergeben.',
    intro: 'Ein Prüfbericht im falschen Projekt. Eine überholte Revision. Ein Dokument ohne Leserecht. Jede dieser Lücken kann bis in die Antwort oder den nächsten Arbeitsschritt reichen.',
    question: '„Warum wurde Bauteil B-217 in Revision C geändert?“',
    example: 'Interaktives Beispiel mit fiktiven Daten',
    sources: 'Verteilte Quellen', foundation: 'Gemeinsame Datenbasis', applications: 'Darauf greifen Ihre Anwendungen zu',
    files: [['SharePoint', 'Änderungsauftrag A-38', 'Projekt P-104 · Bauteil B-217'], ['Dateiserver', 'Prüfbericht PB-12', 'Revision B und Revision C'], ['Projektablage', 'Freigabeprotokoll', 'Zugriff für das Entwicklungsteam']],
    hint: 'Schalten Sie eine Prüfung aus. Beobachten Sie, was sich rechts bei den Anwendungen ändert.',
    mobileHint: 'Schalten Sie eine Prüfung aus. Die Auswirkungen sehen Sie darunter.',
    checks: [
      { title: 'Zusammenhänge zuordnen', text: 'Projekt, Bauteil und Dokument verbinden.', on: 'P-104 und B-217 sind zugeordnet.', off: 'Der Bezug zum Bauteil bleibt ungeprüft.' },
      { title: 'Gültigen Stand prüfen', text: 'Revision und Freigabe abgleichen.', on: 'Revision C ist gültig. B bleibt Historie.', off: 'Revision B und C stehen ungewichtet nebeneinander.' },
      { title: 'Zugriffsrechte prüfen', text: 'Nur erlaubte Inhalte weitergeben.', on: 'Leserechte gelten auch beim KI-Zugriff.', off: 'Eine unzulässige Weitergabe wird zum Risiko.' },
    ],
    checked: 'Prüfung aktiv', unchecked: 'Prüfung ausgeschaltet',
    appNames: ['Chatbot', 'KI-Agent', 'Dashboard'],
    outcomes: ['Antwortentwurf mit Änderungsgrund und Fundstelle.', 'Nächsten Prüfschritt zur Freigabe vorbereiten.', 'Änderungsstatus für P-104 / B-217 anzeigen.'],
    risks: [
      ['Ein Bericht zum falschen Bauteil kann in die Antwort gelangen.', 'Die Antwort kann sich auf Revision B statt C beziehen.', 'Die Antwort kann Inhalte ohne Leserecht offenlegen.'],
      ['Der Agent kann einen Prüfschritt zum falschen Bauteil vorbereiten.', 'Ein überholter Stand kann die Grundlage des nächsten Schritts werden.', 'Der Agent kann unzulässige Inhalte weiterverarbeiten.'],
      ['Ein Änderungsstatus kann dem falschen Bauteil zugeordnet werden.', 'Das Dashboard kann einen überholten Status zeigen.', 'Geschützte Informationen können in einer Auswertung erscheinen.'],
    ],
    ready: 'Eine Grundlage für alle drei Anwendungen.',
    blocked: 'Diese Lücken wirken bis in Ihre Anwendungen.',
    takeaway: 'Zuordnung, Versionen und Rechte gehören in die gemeinsame Datenbasis. So muss jede weitere Anwendung diese Regeln nicht neu aufbauen.',
    reset: 'Alle Prüfungen einschalten',
    note: 'Prinzipdarstellung, kein Live-System. Die Prüfungen müssen für Ihre Quellen eingerichtet und getestet werden. KI-Antworten bleiben fachlich zu prüfen; Aktionen brauchen definierte Freigaben.',
  },
  en: {
    title: 'Your AI depends on the quality of', accent: 'your data.',
    intro: 'A test report assigned to the wrong project. An outdated revision. A document without read permission. Each gap can affect an answer or the next action.',
    question: '“Why was component B-217 changed in revision C?”',
    example: 'Interactive example with fictional data',
    sources: 'Distributed sources', foundation: 'Shared data foundation', applications: 'Your applications use this foundation',
    files: [['SharePoint', 'Change request A-38', 'Project P-104 · Component B-217'], ['File server', 'Test report PB-12', 'Revision B and revision C'], ['Project repository', 'Approval record', 'Access for the development team']],
    hint: 'Switch off a check. See how the applications on the right are affected.',
    mobileHint: 'Switch off a check. See the effects below.',
    checks: [
      { title: 'Map relationships', text: 'Connect project, component and document.', on: 'P-104 and B-217 are linked.', off: 'The link to the component is unchecked.' },
      { title: 'Check the current version', text: 'Match revision and approval status.', on: 'Revision C is valid. B remains in history.', off: 'Revisions B and C appear without a validity check.' },
      { title: 'Check access rights', text: 'Only pass on permitted content.', on: 'Read permissions apply to AI access too.', off: 'Unauthorised disclosure becomes a risk.' },
    ],
    checked: 'Check enabled', unchecked: 'Check disabled',
    appNames: ['Chatbot', 'AI agent', 'Dashboard'],
    outcomes: ['Draft an answer with the reason for the change and its source.', 'Prepare the next review step for approval.', 'Display the change status for P-104 / B-217.'],
    risks: [
      ['A report for the wrong component may enter the answer.', 'The answer may refer to revision B instead of C.', 'The answer may disclose content without read permission.'],
      ['The agent may prepare a review for the wrong component.', 'An outdated version may become the basis for the next action.', 'The agent may process content without permission.'],
      ['A change status may be assigned to the wrong component.', 'The dashboard may display an outdated status.', 'Restricted information may appear in an analysis.'],
    ],
    ready: 'One foundation for all three applications.',
    blocked: 'These gaps affect your applications.',
    takeaway: 'Relationships, versions and permissions belong in the shared data foundation. Each additional application can then use the same rules.',
    reset: 'Enable all checks',
    note: 'Conceptual illustration, not a live system. Checks must be configured and tested for your sources. AI answers still need technical review; actions need defined approvals.',
  },
};

const checkIcons = [GitBranch, FileText, LockKeyhole];
const appIcons = [MessageSquare, Bot, ChartNoAxesCombined];

export default function DataFoundation({ en = false }: { en?: boolean }) {
  const c = copy[en ? 'en' : 'de'];
  const [checks, setChecks] = useState([true, true, true]);
  const ready = checks.every(Boolean);

  return <section id="datenbasis-erleben" className={styles.section} aria-labelledby="foundation-title">
    <header className={styles.heading}>
      <h2 id="foundation-title">{c.title} <span className="highlight">{c.accent}</span></h2>
      <p>{c.intro}</p>
    </header>
    <div className={styles.board}>
      <div className={styles.question}><MessageSquare size={24} aria-hidden="true" /><div><p>{c.example}</p><h3>{c.question}</h3></div></div>
      <div className={styles.flow}>
        <div className={styles.sources}>
          <h3><span aria-hidden="true">01</span>{c.sources}</h3>
          {c.files.map(([source, title, detail], i) => <div className={styles.file} key={source}>
            <FolderOpen size={20} aria-hidden="true" /><div><span>{source}</span><strong>{title}</strong><p>{detail}</p></div>
            <span className={styles.fileKey} aria-hidden="true">{['P-104', 'B-217', 'ACL'][i]}</span>
          </div>)}
        </div>
        <div className={styles.bridge} aria-hidden="true"><ArrowRight className={styles.horizontal} /><ArrowDown className={styles.vertical} /></div>
        <fieldset className={styles.foundation}>
          <legend><span aria-hidden="true">02</span>{c.foundation}</legend>
          <p className={styles.hint}><span className={styles.horizontal}>{c.hint}</span><span className={styles.vertical}>{c.mobileHint}</span></p>
          {c.checks.map((item, i) => {
            const Icon = checkIcons[i];
            return <label className={styles.control} key={item.title}>
              <input type="checkbox" checked={checks[i]} onChange={() => setChecks(previous => previous.map((value, index) => index === i ? !value : value))} aria-label={item.title} aria-controls="foundation-results" />
              <span className={styles.controlText}><strong><Icon size={18} aria-hidden="true" />{item.title}</strong><span>{item.text}</span><small>{checks[i] ? c.checked : c.unchecked}</small></span>
            </label>;
          })}
        </fieldset>
        <div className={styles.bridge} aria-hidden="true"><ArrowRight className={styles.horizontal} /><ArrowDown className={styles.vertical} /></div>
        <div className={styles.results} id="foundation-results" aria-live="polite" aria-atomic="true">
          <h3><span aria-hidden="true">03</span>{c.applications}</h3>
          {c.appNames.map((name, i) => {
            const Icon = appIcons[i];
            return <div className={styles.result} data-ready={ready} key={name}>
              <div className={styles.resultTitle}><Icon size={20} aria-hidden="true" /><strong>{name}</strong>{ready ? <Check size={18} aria-hidden="true" /> : <TriangleAlert size={18} aria-hidden="true" />}</div>
              <p>{ready ? c.outcomes[i] : c.risks[i].filter((_, index) => !checks[index]).join(' ')}</p>
              {ready && <small>{c.checks[i].on}</small>}
            </div>;
          })}
          <p className={styles.resultStatus}>{ready ? c.ready : c.blocked}</p>
        </div>
      </div>
      <div className={styles.takeaway}><ShieldCheck size={26} aria-hidden="true" /><p>{c.takeaway}</p><button type="button" disabled={ready} onClick={() => setChecks([true, true, true])}><RotateCcw size={16} aria-hidden="true" />{c.reset}</button></div>
    </div>
    <p className={styles.note}>{c.note}</p>
  </section>;
}
