import s from '@/components/pages/TopicPage.module.css';
import styles from './ProjectReviewFlow.module.css';

export default function ProjectReviewFlow({ en }: { en: boolean }) {
  const steps = en ? [
    { label: 'Project update', title: 'The test moves.', text: 'The team records a new forecast date and the reason for the delay.' },
    { label: 'Deterministic checks', title: 'Trace the consequences.', text: 'Check dependent work packages, the milestone and available team capacity against the plan.' },
    { label: 'AI assistance', title: 'Prepare the review.', text: 'AI drafts a report from project data and suggests risks for the project lead to check.' },
    { label: 'Human approval', title: 'Decide and record.', text: 'The project lead checks the draft, agrees actions and approves the report. Changes remain traceable.' },
  ] : [
    { label: 'Meldung aus dem Projekt', title: 'Der Versuch verschiebt sich.', text: 'Das Team trägt den neuen Prognosetermin ein und begründet die Verzögerung.' },
    { label: 'Deterministische Prüfung', title: 'Die Folgen werden sichtbar.', text: 'Abhängige Arbeitspakete, Meilenstein und verfügbare Teamkapazität werden am Plan geprüft.' },
    { label: 'KI-Unterstützung', title: 'Das Review wird vorbereitet.', text: 'KI formuliert einen Berichtsentwurf aus den Projektdaten und liefert Risikohinweise zur Prüfung.' },
    { label: 'Fachliche Freigabe', title: 'Die Projektleitung entscheidet.', text: 'Sie prüft den Entwurf, legt Maßnahmen fest und gibt den Bericht frei. Änderungen bleiben nachvollziehbar.' },
  ];

  return <section className={s.section} id="projektbeispiel" aria-labelledby="project-flow-title">
    <div className={s.split}>
      <div><p className={s.eyebrow}>{en ? 'Illustrative workflow / not a customer case' : 'Schematischer Ablauf / kein Kundenfall'}</p><h2 id="project-flow-title">{en ? 'One delayed test affects the whole plan.' : 'Ein verspäteter Versuch betrifft den ganzen Plan.'}</h2></div>
      <p>{en ? 'The question in the review is what the delay changes. This example shows how a project update connects to dependencies, capacity and an approved report.' : 'Im Review zählt, was die Verschiebung für das Projekt bedeutet. Das Beispiel zeigt den Zusammenhang zwischen einer Terminänderung, den Abhängigkeiten, der Auslastung und einem freigegebenen Bericht.'}</p>
    </div>
    <ol className={styles.flow}>
      {steps.map((step, index) => <li className={styles.step} key={step.label}>
        <span className={styles.number} aria-hidden="true">0{index + 1}</span>
        <p className={styles.label}>{step.label}</p><h3>{step.title}</h3><p>{step.text}</p>
      </li>)}
    </ol>
    <p className={s.note}>{en ? 'The video shows the proof of concept with fictional data. For your pilot, we agree project phases, status rules, report structure and interfaces. A changed date alone does not trigger an automatic replanning decision.' : 'Das Video zeigt den Proof of Concept mit fiktiven Daten. Für Ihren Pilot stimmen wir Projektphasen, Statusregeln, Berichtsaufbau und Schnittstellen ab. Ein geänderter Termin löst keine automatische Entscheidung zur Umplanung aus.'}</p>
  </section>;
}
