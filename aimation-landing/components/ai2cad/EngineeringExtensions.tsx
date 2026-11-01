import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { ENGINEERING_EXTENSIONS } from '@/lib/data/engineering-extensions';
import styles from './EngineeringExtensions.module.css';

export default function EngineeringExtensions({ en }: { en: boolean }) {
  const lang = en ? 'en' : 'de';
  return <section id="weitere-entwicklungsfelder" className={`engineering-section ${styles.section}`} aria-labelledby="extensions-heading">
    <div className="engineering-wrap">
      <div className={styles.heading}>
        <div><p className="technical-label">{en ? 'The series continues · Parts 06 and 07' : 'Die Serie geht weiter · Teil 06 und 07'}</p><h2 id="extensions-heading">{en ? 'Patents and ' : 'Patente und '}<span className="highlight">{en ? 'manufacturing.' : 'Fertigung.'}</span></h2></div>
        <p>{en ? 'Two standalone development tasks, each with its own part and starting point. Choose the example that relates to your work.' : 'Zwei eigenständige Entwicklungsaufgaben, jeweils mit eigenem Bauteil und Ausgangspunkt. Wählen Sie das Beispiel, das zu Ihrer Arbeit passt.'}</p>
      </div>
      <div className={styles.grid}>{ENGINEERING_EXTENSIONS.map(video => <article key={video.id} className={styles.card}>
        <Link href={`/ai2cad/${video.slug}`} className={styles.media} aria-label={`${video[lang].title}: ${en ? 'watch video' : 'Video ansehen'} (${video.duration})`}>
          <Image src={`/videos/ai2cad/${video.id}.webp`} alt={video[lang].poster} width={1920} height={1080} sizes="(max-width: 700px) 90vw, 45vw" />
          <span className={styles.play}><Play size={16} aria-hidden="true" />{en ? 'Watch video' : 'Video ansehen'}<span>{video.duration}</span></span>
        </Link>
        <div className={styles.copy}><p className="technical-label">{video.number} / {video.field[lang]}</p><h3><Link href={`/ai2cad/${video.slug}`}>{video[lang].short}<ArrowUpRight size={20} aria-hidden="true" /></Link></h3><p>{video[lang].teaser}</p></div>
      </article>)}</div>
    </div>
  </section>;
}
