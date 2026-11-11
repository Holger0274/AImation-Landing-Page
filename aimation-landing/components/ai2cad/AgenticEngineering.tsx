import { Link } from '@/i18n/navigation';
import { AGENTIC_ENGINEERING } from '@/lib/data/agentic-engineering';
import styles from './ai2cad.module.css';

export default function AgenticEngineering({ en }: { en: boolean }) {
  const copy = AGENTIC_ENGINEERING[en ? 'en' : 'de'];
  return <section id="agentisches-entwicklungssystem" className={styles.agentic} aria-labelledby="agentic-heading">
    <div className={styles.wrap}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}>{en ? 'How the engineering tasks connect' : 'So hängen die Entwicklungsaufgaben zusammen'}</p><h2 id="agentic-heading">{en ? 'An agentic ' : 'Ein agentisches '}<span className="highlight">{en ? 'engineering system.' : 'Entwicklungssystem.'}</span></h2><p>{copy.definition}</p></div>
      <div className={styles.agentRoles}>{copy.groups.map((group, index) => <article key={group.title}><small>0{index + 1}</small><h3>{group.title}</h3><p>{group.text}</p><ul>{group.links.map(link => <li key={link.slug}><Link href={`/ai2cad/${link.slug}`}>{link.label} →</Link></li>)}</ul></article>)}</div>
      <p className={styles.journeyNote}>{copy.evidence}</p>
      <Link href="/ki-produktentwicklung" className="engineering-text-link">{en ? 'AI across product development' : 'KI in der gesamten Produktentwicklung'} →</Link>
    </div>
  </section>;
}
