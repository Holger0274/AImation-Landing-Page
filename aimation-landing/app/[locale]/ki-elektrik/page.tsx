import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/navigation';
import { ELECTRICAL_PATH, ELECTRICAL_VIDEOS } from '@/lib/data/electrical-videos';
import { pageMetadata } from '@/lib/seo/metadata';
import styles from '@/components/ai2cad/ai2cad.module.css';

type Params = Promise<{ locale: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  return pageMetadata(ELECTRICAL_PATH, locale, locale === 'en' ? 'AI in electrical planning: the video series | AImation' : 'KI in der Elektroplanung: die Videoreihe | AImation', locale === 'en' ? 'Follow electrical planning with AI: from the task and assumptions to a schematic and review. Two episodes cover a motor feeder, simulated faults and a star-delta design.' : 'Elektroplanung mit KI verfolgen: vom Auftrag über Annahmen zum Schaltplan und zur Prüfung. Zwei Folgen zeigen Motorabgang, simulierte Fehlerfälle und Stern-Dreieck.');
}
export default async function ElectricalSeriesPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';
  return <><Header /><main id="main-content" className={`${styles.page} ${styles.watchPage}`}><div className={styles.watchWrap}>
    <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'}><Link href="/entwicklungswerkstatt">{en ? 'Engineering workshop' : 'Entwicklungswerkstatt'}</Link><span>/</span><span aria-current="page">KI × Elektro</span></nav>
    <h1>{en ? 'Electrical planning. ' : 'Elektroplanung. '}<span className="highlight">{en ? 'Follow the process.' : 'Den Ablauf mitverfolgen.'}</span></h1>
    <div className={styles.watchDescription}><p>{en ? 'The CAD videos begin with geometry. This series opens another field: electrical planning. Follow a concrete task from its first description through to the schematic and the checks shown.' : 'Die CAD-Videos beginnen bei der Geometrie. Diese Reihe öffnet ein weiteres Feld: die Elektroplanung. Begleiten Sie eine konkrete Aufgabe von der ersten Beschreibung bis zum Schaltplan und den gezeigten Prüfungen.'}</p></div>
    {ELECTRICAL_VIDEOS.map(episode => { const episodeCopy = episode[en ? 'en' : 'de']; return <article key={episode.id} className="mb-12"><Link href={episode.path} className={styles.player} style={{ display: 'block' }}><Image src={`/videos/elektrik/${episode.id}.webp`} alt={episodeCopy.poster} width={1920} height={1080} sizes="(max-width: 760px) 90vw, 1044px" style={{ width: '100%', height: 'auto', borderRadius: 8 }} /><span className={styles.play}>{en ? 'Watch episode' : 'Folge ansehen'} {episode.number}<span>{episode.duration}</span></span></Link><div className={styles.watchDescription}><p className="technical-label">KI × Elektro · {en ? 'Part' : 'Teil'} {episode.number} · {episode.duration}</p><h2 style={{ marginTop: 16 }}><Link href={episode.path}>{episodeCopy.title} →</Link></h2><p>{episodeCopy.description}</p><p className={styles.watchReview}>{episodeCopy.check}</p></div><Link href={episode.path} className={styles.primary}>{en ? 'Watch the full episode' : 'Die vollständige Folge ansehen'} ↗</Link></article>; })}
    <div className={styles.watchDescription}><h2>{en ? 'A series that will grow' : 'Eine Reihe, die weitergeht'}</h2><p>{en ? 'Parts 1 and 2 are available now. Further electrical engineering examples are planned and will be added here once the recordings are ready.' : 'Teil 1 und Teil 2 sind jetzt zu sehen. Weitere Beispiele aus der Elektrik sind geplant und kommen hier dazu, sobald die Aufnahmen fertig sind.'}</p></div>
    <div className={styles.watchClosing}><Link href="/ai2cad">{en ? 'Explore the CAD and FEM series' : 'Die CAD- und FEM-Reihe entdecken'} →</Link></div>
  </div></main><Footer /></>;
}
