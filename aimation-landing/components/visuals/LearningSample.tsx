'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { TRAINING_COURSES } from '@/lib/data/training';
import { QKT_CASES } from '@/lib/data/application-paths';

// Adapted exercise, not a copy of the full lesson. Source: Copilot 1.2,
// Grundlagen des Promptens: Rolle, Ziel, Kontext, Format (Learing Mats).
const parts = [
  { id: 'role', de: ['Rolle', 'Sie unterstützen die Versuchsplanung.'], en: ['Role', 'You support test planning.'] },
  { id: 'goal', de: ['Ziel', 'Markieren Sie fehlende Angaben in der Versuchsnotiz.'], en: ['Goal', 'Flag missing information in the test note.'] },
  { id: 'context', de: ['Kontext', 'Verwenden Sie nur die beigefügte Notiz V-042. Fehlende Werte bleiben offen.'], en: ['Context', 'Use only the attached note T-042. Leave missing values unresolved.'] },
  { id: 'format', de: ['Format', 'Geben Sie eine Tabelle mit Angabe, Fundstelle und Rückfrage aus.'], en: ['Format', 'Return a table with item, source location and follow-up question.'] },
] as const;

export default function LearningSample() {
  const en = useLocale() === 'en';
  const lang = en ? 'en' : 'de';
  const [answer, setAnswer] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const course = TRAINING_COURSES.find(item => item.id === 'copilot')!;
  return <section id="lernprobe" className="engineering-section learning-sample" aria-labelledby="learning-sample-heading">
    <div className="engineering-wrap">
      <div className="section-heading-split">
        <div className="section-intro"><p className="technical-label">{en ? 'Try a learning exercise' : 'Eine Lernprobe zum Mitmachen'}</p><h2 id="learning-sample-heading">{en ? 'A better task. A ' : 'Eine bessere Aufgabe. Ein '}<span className="highlight">{en ? 'reviewable result.' : 'prüfbares Ergebnis.'}</span></h2></div>
        <div className="section-heading-body"><p>{en ? 'Adapted from our lesson “Prompting fundamentals”, module 1.2 of Microsoft 365 Copilot. Try one of its four building blocks: role, goal, context and format.' : 'Nach unserer Lektion „Grundlagen des Promptens“, Modul 1.2 aus Microsoft 365 Copilot. Probieren Sie einen der vier Bausteine aus: Rolle, Ziel, Kontext und Format.'}</p></div>
      </div>
      <div className="learning-workspace">
        <div className="learning-question"><p className="technical-label">{en ? 'Your task / 01' : 'Ihre Aufgabe / 01'}</p><h3>{en ? 'Which building block is this?' : 'Welcher Baustein ist das?'}</h3><blockquote>{parts[3][lang][1]}</blockquote>
          <div className="learning-options" role="group" aria-label={en ? 'Choose a prompt building block' : 'Prompt-Baustein auswählen'}>{parts.map(part => <button key={part.id} aria-pressed={answer === part.id} onClick={() => setAnswer(part.id)}>{part[lang][0]}</button>)}</div>
          <p className="learning-feedback" role="status">{answer === null ? (en ? 'Choose a building block. You will see the explanation here.' : 'Wählen Sie einen Baustein. Hier erscheint die Erklärung.') : answer === 'format' ? (en ? 'Correct. The table defines the format of the answer. Source locations help you check each finding.' : 'Richtig. Die Tabelle legt das Format der Antwort fest. Mit Fundstellen können Sie die einzelnen Hinweise nachprüfen.') : (en ? 'Not quite. The sentence describes how the answer should be structured, so it defines the format. Try again.' : 'Noch nicht ganz. Der Satz beschreibt, wie die Antwort aufgebaut sein soll. Gemeint ist also das Format. Probieren Sie es noch einmal.')}</p>
        </div>
        <div className="learning-prompt"><p className="technical-label">{en ? 'Applied to test planning / 02' : 'Angewendet auf die Versuchsplanung / 02'}</p><h3>{en ? 'Make the task specific.' : 'Die Aufgabe konkret machen.'}</h3><p>{en ? '“Check the note” leaves a lot open. These four building blocks define a clearer task. Even a good prompt does not guarantee a correct answer.' : '„Prüfen Sie die Notiz“ lässt viel offen. Die vier Bausteine machen daraus einen konkreten Arbeitsauftrag. Auch ein guter Prompt garantiert keine richtige Antwort.'}</p>
          <button className="engineering-text-link" aria-expanded={showPrompt} aria-controls="learning-prompt-example" onClick={() => setShowPrompt(!showPrompt)}>{showPrompt ? (en ? 'Close sample prompt' : 'Beispiel-Prompt schließen') : (en ? 'Show the complete sample prompt' : 'Vollständigen Beispiel-Prompt ansehen')}<span aria-hidden="true">{showPrompt ? '−' : '+'}</span></button>
          <dl id="learning-prompt-example" hidden={!showPrompt}>{parts.map(part => <div key={part.id}><dt>{part[lang][0]}</dt><dd>{part[lang][1]}</dd></div>)}</dl>
        </div>
      </div>
      <div className="section-footnote"><p>{en ? 'A shortened learning exercise with fictional data, no AI request. The full learning series includes further exercises.' : 'Verkürzte Lernübung mit fiktiven Daten, keine KI-Abfrage. Die vollständige Lernreihe enthält weitere Übungen.'}</p><a href={`#kurs-${course.id}`} className="engineering-text-link">{course[lang][0]} →</a></div>
      <Link href={`/#use-case-${QKT_CASES.cost}`} className="engineering-text-link">{en ? 'Explore the related test-report workflow' : 'Den passenden Ablauf für Prüfberichte erkunden'} →</Link>
    </div>
  </section>;
}
