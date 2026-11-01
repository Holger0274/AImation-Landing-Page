import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema } from '@/components/StructuredData';
import WatchVideo from '@/components/ai2cad/WatchVideo';
import { ELECTRICAL_PATH, ELECTRICAL_VIDEO as video, ELECTRICAL_SHORT_CIRCUIT_VIDEO } from '@/lib/data/electrical-videos';
import { pageMetadata, SITE_URL } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';
import { Link } from '@/i18n/navigation';
import styles from '@/components/ai2cad/ai2cad.module.css';

type Params = Promise<{ locale: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  const copy = video[locale === 'en' ? 'en' : 'de'];
  const metadata = pageMetadata(video.path, locale, `${copy.title} | KI × Elektro | AImation`, copy.metaDescription);
  const image = { url: `${SITE_URL}/videos/elektrik/${video.id}.webp`, width: 1920, height: 1080, alt: copy.poster };
  return { ...metadata, openGraph: { ...metadata.openGraph, images: [image] }, twitter: { ...metadata.twitter, images: [image.url] } };
}
export default async function ElectricalWatchPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';
  const copy = video[en ? 'en' : 'de'];
  const url = `${SITE_URL}${localizedPath(video.path, locale)}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'VideoObject', '@id': `${url}#video`,
    name: `KI × Elektro 01: ${copy.title}`, description: `${copy.description} ${copy.check}`,
    thumbnailUrl: `${SITE_URL}/videos/elektrik/${video.id}.webp`, contentUrl: `${SITE_URL}/videos/elektrik/${video.id}.mp4`,
    uploadDate: video.uploadDate, duration: `PT${video.seconds}S`, inLanguage: 'de', url, mainEntityOfPage: url,
    creator: { '@id': `${SITE_URL}/#holger-peschke` }, publisher: { '@id': `${SITE_URL}/#organization` },
    hasPart: copy.chapters.map((chapter, index) => ({ '@type': 'Clip', name: chapter.title, startOffset: chapter.seconds, endOffset: copy.chapters[index + 1]?.seconds ?? video.seconds, url: `${url}?t=${chapter.seconds}#video` })),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <BreadcrumbSchema items={[{ name: 'AImation', url: localizedPath('/', locale) }, { name: 'KI × Elektro', url: localizedPath(ELECTRICAL_PATH, locale) }, { name: copy.title, url: localizedPath(video.path, locale) }]} />
    <Header /><main id="main-content" className={`${styles.page} ${styles.watchPage}`}><div className={styles.watchWrap}>
      <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'}><Link href={ELECTRICAL_PATH}>KI × Elektro</Link><span aria-hidden="true">/</span><span aria-current="page">{en ? 'Part' : 'Teil'} 01</span></nav>
      <h1>{en ? 'From a sentence to an ' : 'Vom Satz zum elektrischen '}<span className="highlight">{en ? 'electrical schematic.' : 'Schaltplan.'}</span></h1>
      <p className={styles.watchMeta}>KI × Elektro · {video.duration} · {en ? 'German video with audio' : 'Video mit Ton'} · Holger Peschke / AImation</p>
      <WatchVideo id={video.id} title={copy.title} en={en} directory="elektrik" chapters={copy.chapters} />
      <div className={styles.watchDescription}><h2>{en ? 'The task becomes a visible circuit' : 'Aus dem Auftrag wird ein sichtbarer Ablauf'}</h2><p>{copy.description}</p><p className={styles.watchReview} id="chapter-review">{copy.check}</p><p className={styles.watchReview}>{en ? 'Published' : 'Veröffentlicht'}: <time dateTime={video.uploadDate}>{en ? '1 November 2026' : '1. November 2026'}</time>. {en ? 'The first episode of a separate electrical engineering series. Part 2 explores fault scenarios in a different circuit.' : 'Der Auftakt einer eigenen Elektrikreihe. Teil 2 spielt Fehlerfälle an einer anderen Schaltung durch.'}</p></div>
      <nav className={styles.watchDescription} aria-label={en ? 'Electrical series' : 'Elektrikreihe'}><Link href={ELECTRICAL_SHORT_CIRCUIT_VIDEO.path} className="engineering-text-link">{en ? 'Continue to part 2: The short-circuit test' : 'Weiter zu Teil 2: Der Kurzschluss-Test'} →</Link></nav><div className={styles.watchClosing}><Link href="/entwicklungswerkstatt">{en ? 'Explore CAD, FEM and CNC next' : 'Weiter zu CAD, FEM und CNC'} →</Link><a href="#kontakt" className={styles.primary}>{en ? 'Discuss your engineering task' : 'Ihre Entwicklungsaufgabe besprechen'} ↗</a></div>
    </div></main><Footer />
  </>;
}
