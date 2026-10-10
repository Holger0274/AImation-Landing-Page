import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema } from '@/components/StructuredData';
import FemComparison from '@/components/ai2cad/FemComparison';
import WatchVideo from '@/components/ai2cad/WatchVideo';
import VideoSchema from '@/components/ai2cad/VideoSchema';
import { AI2CAD_CHAPTERS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { pageMetadata, SITE_URL } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';
import { Link } from '@/i18n/navigation';
import styles from '@/components/ai2cad/ai2cad.module.css';

type Params = Promise<{ locale: string; chapter: string }>;
export const dynamicParams = false;
export function generateStaticParams() { return AI2CAD_CHAPTERS.map(chapter => ({ chapter: chapter.slug })); }

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, chapter: slug } = await params;
  const chapter = AI2CAD_CHAPTERS.find(item => item.slug === slug);
  if (!chapter) notFound();
  const copy = chapter[locale === 'en' ? 'en' : 'de'];
  const title = `${copy.title} ${locale === 'en' ? 'with AI' : 'mit KI'} | ${chapter.kind} ${chapter.number} | AImation`;
  const metadata = pageMetadata(`${AI2CAD_PATH}/${chapter.slug}`, locale, title, copy.description);
  const image = { url: `${SITE_URL}/videos/ai2cad/${chapter.id}.webp`, width: 1920, height: 1080, alt: copy.poster };
  return { ...metadata, openGraph: { ...metadata.openGraph, images: [image] }, twitter: { ...metadata.twitter, images: [image.url] } };
}

export default async function ChapterPage({ params }: { params: Params }) {
  const { locale, chapter: slug } = await params;
  setRequestLocale(locale);
  const chapter = AI2CAD_CHAPTERS.find(item => item.slug === slug);
  if (!chapter) notFound();
  const en = locale === 'en';
  const copy = chapter[en ? 'en' : 'de'];
  const path = `${AI2CAD_PATH}/${chapter.slug}`;
  return <>
    <VideoSchema chapter={chapter} locale={locale} />
    <BreadcrumbSchema items={[{ name: 'AImation', url: localizedPath('/', locale) }, { name: 'AI2CAD', url: localizedPath(AI2CAD_PATH, locale) }, { name: copy.title, url: localizedPath(path, locale) }]} />
    <Header />
    <main id="main-content" className={`${styles.page} ${styles.watchPage}`}>
      <div className={styles.watchWrap}>
        <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'}><Link href={AI2CAD_PATH}>AI2CAD</Link><span aria-hidden="true">/</span><span aria-current="page">{en ? 'Chapter' : 'Kapitel'} {chapter.number}</span></nav>
        <h1>{copy.title} <span className="highlight">{en ? 'with AI.' : 'mit KI.'}</span></h1>
        <p className={styles.watchMeta}>{chapter.kind} · {chapter.duration} · {en ? 'Video in German, without audio' : 'Video ohne Ton'} · AImation / Holger Peschke</p>
        <WatchVideo id={chapter.id} title={copy.title} en={en} />
        <div className={styles.watchDescription}><h2>{chapter.kind === 'AI2CAE' ? (en ? 'How the LLM controls the CAE workflow' : 'Wie das LLM den CAE-Ablauf steuert') : (en ? 'What the LLM does in the CAD system' : 'Was das LLM im CAD-System übernimmt')}</h2><p>{copy.description}</p><ul>{copy.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p>{chapter.kind === 'AI2CAE' ? (en ? 'The LLM coordinates the modelling, calculation and evaluation steps. The CAE system solves the numerical model; engineering review assesses the assumptions and results.' : 'Das LLM steuert Modellaufbau, Berechnung und Auswertung. Das CAE-System löst das numerische Modell; die fachliche Prüfung bewertet Annahmen und Ergebnisse.') : en ? 'The language model performs the shown CAD operations. Instructions and approvals come through the conversation, without manual mouse clicks in the CAD system.' : 'Das Large Language Model führt die gezeigten CAD-Arbeitsschritte aus. Vorgaben und Freigaben erfolgen im Dialog, ohne manuelle Mausklicks im CAD-System.'}</p><p id="chapter-review" className={styles.watchReview}>{copy.check}</p></div>
        {chapter.kind === 'AI2CAE' && <FemComparison en={en} />}
        <nav className={styles.watchChapters} aria-label={en ? 'All AI2CAD chapters' : 'Alle AI2CAD-Kapitel'}>{AI2CAD_CHAPTERS.map(item => <Link key={item.id} href={`${AI2CAD_PATH}/${item.slug}`} aria-current={item.id === chapter.id ? 'page' : undefined}><small>{item.number} · {item.duration}</small>{item[en ? 'en' : 'de'].title}<span aria-hidden="true">↗</span></Link>)}</nav>
        <div className={styles.watchClosing}><Link href={AI2CAD_PATH}>{en ? 'AI2CAD: overview and questions' : 'AI2CAD: Überblick und Fragen'} →</Link><a href="#kontakt" className={styles.primary}>{en ? 'Discuss your CAD workflow' : 'Ihren CAD-Ablauf besprechen'} ↗</a></div>
      </div>
    </main><Footer />
  </>;
}
