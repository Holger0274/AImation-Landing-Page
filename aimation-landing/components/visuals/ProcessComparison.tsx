'use client';
import { useLocale } from 'next-intl';
import { ArrowRight, Files, Search, FileCheck2, UserCheck, Mail, ListFilter, ScanSearch, BookOpen, ClipboardCheck } from 'lucide-react';

const flows = {
  knowledge: { icons: [Files, Search, FileCheck2], de: {
    question: 'Warum wurde dieses Bauteil geändert?',
    before: [['Ordner öffnen', 'Zeichnung, E-Mail und Bericht einzeln durchsuchen.'], ['Kollegen fragen', 'Wer kennt die Entscheidung von damals?'], ['Antwort zusammensetzen', 'Versionsstand und Begründung selbst abgleichen.']],
    after: [['Quellen verbinden', 'Freigegebene Dokumente mit ihren Zugriffsrechten.'], ['Gezielt fragen', 'Die KI sucht passende Stellen und nennt die Quellen.'], ['Antwort prüfen', 'Ihr Team prüft Beleg und Aktualität.']],
    result: 'Vom Suchweg zur belegten Antwort.', human: 'Ohne belastbare Quelle bleibt die Frage offen.'
  }, en: {
    question: 'Why was this component changed?',
    before: [['Open folders', 'Search drawings, emails and reports separately.'], ['Ask colleagues', 'Who remembers the original decision?'], ['Reconstruct the answer', 'Check versions and rationale yourself.']],
    after: [['Connect sources', 'Approved documents, respecting access permissions.'], ['Ask a specific question', 'AI retrieves relevant passages with sources.'], ['Check the answer', 'Your team checks evidence and currency.']],
    result: 'From searching to a supported answer.', human: 'Without reliable evidence, the question stays open.'
  } },
  workflow: { icons: [Mail, ListFilter, ClipboardCheck], de: {
    question: 'Welche Anfrage braucht jetzt Ihre Entscheidung?',
    before: [['Postfach sichten', 'Anfragen zwischen Rückfragen und CC-Mails suchen.'], ['Informationen sammeln', 'Bauteil, Termin und Verantwortliche zusammentragen.'], ['Antwort schreiben', 'Unterlagen abgleichen und alles neu formulieren.']],
    after: [['Eingang erfassen', 'Anfrage und Anhänge strukturiert übernehmen.'], ['Vorarbeit erledigen', 'KI ordnet zu, markiert Lücken und entwirft die Antwort.'], ['Freigeben', 'Ihr Team prüft Inhalt und entscheidet über den Versand.']],
    result: 'Bearbeitungsbereit statt nur weitergeleitet.', human: 'Unklare Fälle gehen direkt an eine zuständige Person.'
  }, en: {
    question: 'Which request needs your decision now?',
    before: [['Review the inbox', 'Find requests among follow-ups and CC emails.'], ['Collect information', 'Gather component, deadline and ownership details.'], ['Write a reply', 'Compare documents and draft from scratch.']],
    after: [['Capture the request', 'Structure the request and attachments.'], ['Prepare the work', 'AI routes it, flags gaps and drafts a response.'], ['Approve', 'Your team checks the content and decides whether to send.']],
    result: 'Ready for review, not merely forwarded.', human: 'Unclear cases go directly to a responsible person.'
  } },
  research: { icons: [ScanSearch, BookOpen, FileCheck2], de: {
    question: 'Welche technische Neuerung ist für Ihr Projekt relevant?',
    before: [['Einzeln suchen', 'Datenbanken, Fachportale und Veröffentlichungen prüfen.'], ['Treffer durchlesen', 'Dubletten entfernen und Relevanz beurteilen.'], ['Ergebnisse übertragen', 'Fundstellen und Erkenntnisse in einen Bericht kopieren.']],
    after: [['Suchfeld festlegen', 'Ihr Team definiert Quellen und technische Kriterien.'], ['Funde vorsortieren', 'KI bündelt Treffer und erstellt Kurzfassungen mit Beleg.'], ['Fachlich bewerten', 'Ihr Team prüft Originalquelle und Bedeutung fürs Projekt.']],
    result: 'Eine prüfbare Auswahl für Ihre Entscheidung.', human: 'Die fachliche Bewertung bleibt bei Ihren Experten.'
  }, en: {
    question: 'Which technical development matters to your project?',
    before: [['Search separately', 'Check databases, technical portals and publications.'], ['Read the results', 'Remove duplicates and assess relevance.'], ['Transfer findings', 'Copy sources and findings into a report.']],
    after: [['Define the scope', 'Your team chooses sources and technical criteria.'], ['Prepare findings', 'AI groups results and drafts summaries with evidence.'], ['Evaluate', 'Your team checks original sources and project relevance.']],
    result: 'A reviewable selection for your decision.', human: 'Your experts retain responsibility for technical judgement.'
  } },
} as const;

export default function ProcessComparison({ active }: { active: keyof typeof flows }) {
  const en = useLocale() === 'en';
  const flow = flows[active];
  const content = flow[en ? 'en' : 'de'];
  return <div className="flow-board" aria-live="polite" aria-atomic="true">
    <div className="flow-heading"><span className="technical-label">{en ? 'Illustrative process' : 'Beispielhafter Ablauf'}</span><h3>{content.question}</h3><span className="flow-sheet" aria-hidden="true">AIM / 0{Object.keys(flows).indexOf(active) + 1}</span></div>
    {(['before', 'after'] as const).map(type => <div key={type} className={`flow-lane flow-lane-${type}`}>
      <div className="flow-lane-label"><span>{type === 'before' ? (en ? 'Today' : 'Heute') : (en ? 'With AI' : 'Mit KI')}</span><small>{type === 'before' ? (en ? 'Manual preparation' : 'Manuelle Vorarbeit') : (en ? 'Assisted, with review' : 'Unterstützt, mit Prüfung')}</small></div>
      <ol className="flow-steps">{content[type].map(([title, description], i) => { const Icon = type === 'after' && i === 2 ? UserCheck : flow.icons[i]; return <li key={title}><span className="flow-step-marker"><Icon size={23} strokeWidth={1.5} aria-hidden="true"/><span>0{i + 1}</span></span><h4>{title}</h4><p>{description}</p>{i < 2 && <ArrowRight className="flow-connector" size={21} aria-hidden="true"/>}</li>; })}</ol>
    </div>)}
    <div className="flow-outcome"><div><UserCheck size={24} aria-hidden="true"/><strong>{content.result}</strong></div><p>{content.human}</p></div>
  </div>;
}
