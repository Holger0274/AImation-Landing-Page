import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { ELECTRICAL_VIDEO } from '@/lib/data/electrical-videos';
import { ENGINEERING_EXTENSIONS } from '@/lib/data/engineering-extensions';
import styles from './EngineeringExtensions.module.css';

export default function EngineeringExtensions({ en }: { en: boolean }) {
  const lang = en ? 'en' : 'de';
  return <section id="weitere-entwicklungsfelder" className={`engineering-section ${styles.section}`} aria-labelledby="extensions-heading">
    <div className="engineering-wrap">
      <div className={styles.heading}>
        <div><p className="technical-label">{en ? 'Explore further after CAD and FEM' : 'Nach CAD und FEM weiterentdecken'}</p><h2 id="extensions-heading">{en ? 'Choose your next ' : 'Wählen Sie Ihren nächsten '}<span className="highlight">{en ? 'step.' : 'Einblick.'}</span></h2></div>
        <p>{en ? 'Understand a patent, prepare a CNC program or follow an electrical schematic taking shape. Each example opens a separate development task with its own starting point.' : 'Ein Patent verstehen, ein CNC-Programm vorbereiten oder einen Schaltplan entstehen sehen. Jedes Beispiel öffnet eine eigene Entwicklungsaufgabe mit einem eigenen Ausgangspunkt.'}</p>
      </div>
      <div className={styles.grid}>{ENGINEERING_EXTENSIONS.map(video => <article key={video.id} className={styles.card}>
        <Link href={`/ai2cad/${video.slug}`} className={styles.media} aria-label={`${video[lang].title}: ${en ? 'watch video' : 'Video ansehen'} (${video.duration})`}>
          <Image src={`/videos/ai2cad/${video.id}.webp`} alt={video[lang].poster} width={1920} height={1080} sizes="(max-width: 700px) 90vw, 45vw" />
          <span className={styles.play}><Play size={16} aria-hidden="true" />{en ? 'Watch video' : 'Video ansehen'}<span>{video.duration}</span></span>
        </Link>
        <div className={styles.copy}><p className="technical-label">{video.number} / {video.field[lang]}</p><h3><Link href={`/ai2cad/${video.slug}`}>{video[lang].short}<ArrowUpRight size={20} aria-hidden="true" /></Link></h3><p>{video[lang].teaser}</p></div>
      </article>)}</div>
      <article className={styles.electrical} id="elektrik-entdecken">
        <Link href={ELECTRICAL_VIDEO.path} className={styles.media} aria-label={en ? 'Watch electrical planning: 1 minute 52 seconds' : 'Elektroplanung ansehen: 1 Minute 52 Sekunden'}>
          <Image src="/videos/elektrik/schaltplan.webp" alt={ELECTRICAL_VIDEO[lang].poster} width={1920} height={1080} sizes="(max-width: 900px) 90vw, 55vw" />
          <span className={styles.play}><Play size={16} aria-hidden="true" />{en ? 'Follow the process' : 'Den Ablauf erleben'}<span>1:52</span></span>
        </Link>
        <div className={styles.copy}><p className="technical-label">{en ? 'New series' : 'Neue Reihe'} · KI × Elektro · 01</p><h3><Link href={ELECTRICAL_VIDEO.path}>{en ? 'A sentence becomes a schematic.' : 'Aus einem Satz wird ein Schaltplan.'}<ArrowUpRight size={20} aria-hidden="true" /></Link></h3><p>{en ? 'A pump needs a motor feeder. Watch how the task becomes a calculation, how assumptions are exposed and how the circuit takes shape. The switching states make the result visible.' : 'Eine Pumpe braucht einen Motorabgang. Verfolgen Sie, wie aus dem Auftrag eine Rechnung wird, Annahmen sichtbar werden und der Schaltplan entsteht. Die Schaltzustände machen das Ergebnis greifbar.'}</p><Link href="/ki-elektrik" className={styles.seriesLink}>{en ? 'Explore the electrical series' : 'Die Elektrikreihe entdecken'} →</Link></div>
      </article>
    </div>
  </section>;
}
