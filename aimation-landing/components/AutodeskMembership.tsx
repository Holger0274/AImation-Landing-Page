import { ArrowUpRight } from 'lucide-react';
import { ADN_MEMBERSHIP } from '@/lib/config/facts';
import styles from './AutodeskMembership.module.css';

export default function AutodeskMembership({ en, card = false }: { en: boolean; card?: boolean }) {
  const date = new Intl.DateTimeFormat(en ? 'en-GB' : 'de-DE', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(ADN_MEMBERSHIP.since));

  // This is AImation typography, not an Autodesk logo or a partner badge.
  // Use an official Developer Logo only after the member-specific license is confirmed.
  return <aside
    data-partner-card={card ? true : undefined}
    aria-label={en ? 'Autodesk Developer Network membership' : 'Mitgliedschaft im Autodesk Developer Network'}
    className={`${styles.membership} ${card ? styles.card : styles.compact}`}
  >
    <div className={styles.titleBlock}>
      <p className={styles.category}>{en ? 'Category' : 'Kategorie'} {ADN_MEMBERSHIP.category}</p>
      <p className={styles.title}><span>{en ? 'Member of the ' : 'Mitglied im '}</span><strong>{ADN_MEMBERSHIP.name}</strong></p>
    </div>
    <div className={styles.details}>
      <p className={styles.person}>Holger Peschke</p>
      <p className={styles.date}>{en ? 'Member since ' : 'Mitglied seit '}<time dateTime={ADN_MEMBERSHIP.since}>{date}</time></p>
      {card && <p className={styles.description}>{en
        ? 'A developer network for applications and integrations built on Autodesk technologies.'
        : 'Ein Entwicklernetzwerk für Anwendungen und Integrationen auf Basis von Autodesk-Technologien.'}</p>}
    </div>
    <a href={ADN_MEMBERSHIP.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {en ? 'About the developer network' : 'Zum Entwicklernetzwerk'}<ArrowUpRight size={18} aria-hidden="true" />
    </a>
  </aside>;
}
