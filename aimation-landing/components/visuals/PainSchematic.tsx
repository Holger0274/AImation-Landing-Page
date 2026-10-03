'use client';

import { useLocale } from 'next-intl';
import styles from './PainSchematic.module.css';

type Scenario = 'reporting' | 'requests' | 'searching' | 'research' | 'competition';

const descriptions: Record<Scenario, { de: string; en: string }> = {
  reporting: { de: 'Projektstände aus Excel werden von Hand in PowerPoint und ein Meetingprotokoll übertragen.', en: 'Project status from Excel is manually transferred into PowerPoint and meeting minutes.' },
  requests: { de: 'Eine Bauteiländerung, eine technische Rückfrage und eine Freigabe warten auf Bearbeitung.', en: 'A component change, a technical question and an approval are waiting to be processed.' },
  searching: { de: 'Lastenheft, Protokoll und Lessons Learned liegen getrennt in Ordnern, E-Mails und einer lokalen Ablage.', en: 'Requirements, minutes and lessons learned are scattered across folders, email and local storage.' },
  research: { de: 'Normen, Patente und Wettbewerber werden einzeln recherchiert. Ein gemeinsamer Vergleich fehlt.', en: 'Standards, patents and competitors are researched separately. A consolidated comparison is missing.' },
  competition: { de: 'Bericht, Recherche und Dokumentation stehen vor der eigentlichen Entwicklungsaufgabe in der Warteschlange.', en: 'Reporting, research and documentation are queued ahead of the actual engineering task.' },
};

export default function PainSchematic({ type }: { type: Scenario }) {
  const en = useLocale() === 'en';
  const label = (de: string, english: string) => en ? english : de;
  return (
    <svg className={styles.scene} viewBox="0 0 480 270" role="img" aria-label={descriptions[type][en ? 'en' : 'de']}>
      <rect x="1" y="1" width="478" height="268" rx="8" className={styles.backdrop} />
      <path d="M0 54H480M0 108H480M0 162H480M0 216H480M80 0V270M160 0V270M240 0V270M320 0V270M400 0V270" className={styles.grid} />
      <text x="24" y="32" className={styles.eyebrow}>{label('ENTWICKLUNGSALLTAG', 'ENGINEERING DAY-TO-DAY')}</text>
      <text x="455" y="32" textAnchor="end" className={styles.eyebrow}>{label('BEISPIEL', 'EXAMPLE')}</text>
      {type === 'reporting' && <>
        <rect x="24" y="56" width="178" height="142" rx="6" className={styles.panel} />
        <text x="39" y="83" className={styles.title}>Excel</text>
        <path d="M38 97H188M38 122H188M38 147H188M38 172H188M95 97V172M144 97V172" className={styles.lines} />
        <path d="M47 110H82M105 110H133M153 110H178M47 135H82M105 135H133M47 160H82M153 160H178" className={styles.entries} />
        <path d="M215 125H250l-9-8m9 8-9 8" className={styles.arrow} />
        <rect x="265" y="56" width="191" height="89" rx="6" className={styles.panel} />
        <text x="280" y="83" className={styles.title}>PowerPoint</text>
        <path d="M280 100H439M280 115H371M280 130H420" className={styles.entries} />
        <rect x="265" y="156" width="191" height="42" rx="6" className={styles.panel} />
        <text x="280" y="182" className={styles.label}>{label('Meetingprotokoll', 'Meeting minutes')}</text>
        <text x="24" y="237" className={styles.caption}>{label('Jede Woche von Hand übertragen.', 'Copied by hand, every week.')}</text>
      </>}
      {type === 'requests' && <>
        {[
          label('Bauteiländerung', 'Component change'),
          label('Technische Rückfrage', 'Technical question'),
          label('Freigabe Zeichnung', 'Drawing approval'),
        ].map((text, index) => <g key={text} transform={`translate(24 ${55 + index * 50})`}>
          <rect width="432" height="42" rx="5" className={styles.panel} />
          <circle cx="20" cy="21" r="5" className={styles.dot} />
          <text x="38" y="27" className={styles.label}>{text}</text>
          <path d="M325 10V32" className={styles.lines} />
          <text x="343" y="27" className={styles.muted}>{label('wartet', 'waiting')}</text>
        </g>)}
        <text x="24" y="237" className={styles.caption}>{label('Im Postfach. Noch nicht bearbeitet.', 'In the inbox. Still unanswered.')}</text>
      </>}
      {type === 'searching' && <>
        {[
          [label('Lastenheft', 'Requirements'), label('Ordner', 'Folder')],
          [label('Protokoll', 'Minutes'), 'E-Mail'],
          ['Lessons', label('Lokal', 'Local')],
        ].map(([name, place], index) => <g key={name} transform={`translate(${24 + index * 149} 65)`}>
          <path d="M0 0H105L130 25V123H0ZM105 0V25H130" className={styles.document} />
          <text x="13" y="49" className={styles.label}>{name}</text>
          {index === 2 ? <text x="13" y="71" className={styles.label}>Learned</text> : <path d="M13 67H100M13 79H76" className={styles.entries} />}
          <text x="13" y="106" className={styles.muted}>{place}</text>
        </g>)}
        <text x="24" y="237" className={styles.caption}>{label('Drei Ablagen. Kein Zusammenhang.', 'Three locations. No shared context.')}</text>
      </>}
      {type === 'research' && <>
        {[label('Normen', 'Standards'), label('Patente', 'Patents'), label('Wettbewerber', 'Competitors')].map((text, index) => <g key={text} transform={`translate(${24 + index * 149} 57)`}>
          <rect width="134" height="62" rx="5" className={styles.panel} />
          <text x="67" y="37" textAnchor="middle" className={styles.label}>{text}</text>
        </g>)}
        <path d="M91 129V148H389V129M240 129V169" className={styles.dashed} />
        <rect x="108" y="170" width="264" height="40" rx="5" className={styles.empty} />
        <text x="240" y="196" textAnchor="middle" className={styles.label}>{label('Vergleich fehlt', 'Comparison missing')}</text>
        <text x="24" y="246" className={styles.caption}>{label('Jede Quelle einzeln durchgehen.', 'Review each source separately.')}</text>
      </>}
      {type === 'competition' && <>
        {[label('Bericht', 'Report'), label('Recherche', 'Research'), label('Dokumentation', 'Documentation')].map((text, index) => <g key={text} transform={`translate(24 ${55 + index * 37})`}>
          <rect width="432" height="30" rx="4" className={styles.panel} />
          <text x="14" y="21" className={styles.label}>{text}</text>
        </g>)}
        <rect x="24" y="179" width="432" height="39" rx="5" className={styles.empty} />
        <text x="38" y="205" className={styles.title}>{label('Bauteil weiterentwickeln', 'Develop the component')}</text>
        <text x="24" y="248" className={styles.caption}>{label('Die eigentliche Entwicklung wartet.', 'The engineering work has to wait.')}</text>
      </>}
    </svg>
  );
}
