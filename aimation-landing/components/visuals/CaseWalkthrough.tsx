'use client';

import { useState } from 'react';
import { CASE_WALKTHROUGHS } from '@/lib/data/application-paths';

export default function CaseWalkthrough({ caseId, en }: { caseId: string; en: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const sample = CASE_WALKTHROUGHS.find(entry => entry.caseId === caseId);
  if (!sample) return null;
  const copy = sample[en ? 'en' : 'de'];
  return <div className="case-walkthrough">
    <p className="technical-label">{en ? 'Walk through an example' : 'Ein Beispiel durchspielen'}</p>
    <p className="sample-disclaimer">{en ? 'Fictional data. Authored walkthrough, no live AI.' : 'Fiktive Daten. Redaktionelles Ablaufbeispiel, keine Live-KI.'}</p>
    <blockquote>{copy.input}</blockquote>
    <button className="engineering-text-link" aria-expanded={revealed} aria-controls={`sample-${caseId}`} onClick={() => setRevealed(!revealed)}>{revealed ? (en ? 'Close review notes' : 'Prüfhinweise schließen') : (en ? 'Show review notes and draft' : 'Prüfhinweise und Entwurf ansehen')}<span aria-hidden="true">{revealed ? '−' : '+'}</span></button>
    <div id={`sample-${caseId}`} hidden={!revealed} className="sample-result">
      <ol>{copy.findings.map(finding => <li key={finding}>{finding}</li>)}</ol>
      <h4>{en ? 'Prepared next step' : 'Vorbereiteter nächster Schritt'}</h4><p>{copy.result}</p>
      <h4>{en ? 'What still needs checking' : 'Was noch geprüft werden muss'}</h4><p>{copy.check}</p>
    </div>
  </div>;
}
