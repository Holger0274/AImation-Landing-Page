import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema } from '@/components/StructuredData';
import WatchVideo from '@/components/ai2cad/WatchVideo';
import { DEMO_VIDEOS } from '@/lib/data/demo-videos';
import { pageMetadata, SITE_URL } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';
import { Link } from '@/i18n/navigation';
import styles from '@/components/ai2cad/ai2cad.module.css';

type Params = Promise<{ locale: string; video: string }>;
export const dynamicParams = false;
export function generateStaticParams() { return DEMO_VIDEOS.map(video => ({ video: video.id })); }

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, video: id } = await params;
  const video = DEMO_VIDEOS.find(item => item.id === id);
  if (!video) notFound();
  const en = locale === 'en';
  const copy = video[en ? 'en' : 'de'];
  const title = `${video.name}: ${copy.topic} ${en ? 'video' : 'im Video'} | AImation`;
  const metadata = pageMetadata(video.path, locale, title, copy.description);
  const image = { url: `${SITE_URL}/videos/demos/${video.id}.webp`, width: video.width, height: video.height, alt: copy.poster };
  return { ...metadata, openGraph: { ...metadata.openGraph, images: [image] }, twitter: { ...metadata.twitter, images: [image.url] } };
}

export default async function DemoVideoPage({ params }: { params: Params }) {
  const { locale, video: id } = await params;
  setRequestLocale(locale);
  const video = DEMO_VIDEOS.find(item => item.id === id);
  if (!video) notFound();
  const en = locale === 'en';
  const copy = video[en ? 'en' : 'de'];
  const url = `${SITE_URL}${localizedPath(video.path, locale)}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'VideoObject', '@id': `${url}#video`,
    name: `${video.name}: ${copy.topic}`, description: `${copy.description} ${copy.note}`,
    thumbnailUrl: `${SITE_URL}/videos/demos/${video.id}.webp`,
    contentUrl: `${SITE_URL}/videos/demos/${video.id}.mp4`,
    uploadDate: video.uploadDate, duration: `PT${video.seconds}S`, inLanguage: 'de',
    url, mainEntityOfPage: url,
    creator: { '@id': `${SITE_URL}/#holger-peschke` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <BreadcrumbSchema items={[{ name: 'AImation', url: localizedPath('/', locale) }, { name: `${video.name}: Video`, url: localizedPath(video.path, locale) }]} />
    <Header />
    <main id="main-content" className={`${styles.page} ${styles.watchPage}`}>
      <div className={styles.watchWrap}>
        <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'}><Link href="/">AImation</Link><span aria-hidden="true">/</span><span aria-current="page">{video.name}</span></nav>
        <h1>{video.name}: <span className="highlight">{en ? 'video demo' : 'Video-Demo'}</span></h1>
        <p className={styles.watchMeta}>{copy.topic} · {video.duration} · {en ? 'Video in German' : 'Video auf Deutsch'} · {copy.status}</p>
        <WatchVideo directory="demos" id={video.id} title={`${video.name}: ${copy.topic}`} en={en} describedBy="demo-review" />
        <div className={styles.watchDescription}>
          <h2>{copy.headline}</h2><p>{copy.description}</p>
          <ul>{copy.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
          <p id="demo-review" className={styles.watchReview}>{copy.note}</p>
          <p className={styles.author}>{en ? 'From the development work of Holger Peschke, AImation.' : 'Aus der Entwicklungsarbeit von Holger Peschke, AImation.'} <Link href="/facts/holger-peschke">{en ? 'Engineering background' : 'Zum fachlichen Hintergrund'} →</Link></p>
        </div>
        <nav className={styles.watchChapters} aria-label={en ? 'More demonstration videos' : 'Weitere Demonstrationsvideos'}>
          {DEMO_VIDEOS.map(item => <Link key={item.id} href={item.path} aria-current={item.id === video.id ? 'page' : undefined}><small>{item.duration} · {en ? 'German' : 'Deutsch'}</small>{item.name}<span aria-hidden="true">↗</span></Link>)}
        </nav>
        <div className={styles.watchClosing}>
          <Link href={video.related}>{video.id === 'development-landscape' ? (en ? 'Explore the application map' : 'Anwendungslandkarte erkunden') : (en ? 'Workflow, prerequisites and application' : 'Ablauf, Voraussetzungen und Anwendung')} →</Link>
          <a href="#kontakt" className={styles.primary}>{en ? 'Discuss your application' : 'Ihre Anwendung besprechen'} ↗</a>
        </div>
      </div>
    </main><Footer />
  </>;
}
