import type { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { Link } from '@/i18n/navigation';
import { DISCOVERY_PAGES, type DiscoveryKey } from '@/lib/data/discovery';
import { SITE_URL } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';
import styles from './discovery.module.css';

export default function DetailLayout({ page, locale, children, stops }: { page: DiscoveryKey; locale: string; children: ReactNode; stops: { id: string; de: string; en: string }[] }) {
  const en = locale === 'en';
  const entry = DISCOVERY_PAGES[page];
  const copy = entry[en ? 'en' : 'de'];
  const url = SITE_URL + localizedPath(entry.path, locale);
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': page === 'person' ? 'AboutPage' : 'CollectionPage', '@id': `${url}#webpage`, url, name: copy.title, description: copy.description, inLanguage: locale, isPartOf: { '@id': `${SITE_URL}/#website` }, publisher: { '@id': `${SITE_URL}/#organization` }, ...(page === 'person' ? { about: { '@id': `${SITE_URL}/#holger-peschke` } } : {}), breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Startseite', item: SITE_URL + localizedPath('/', locale) },
      { '@type': 'ListItem', position: 2, name: copy.label, item: url },
    ] },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <Header />
    <main id="main-content" className="home-page">
      <div className={`engineering-wrap ${styles.detailHero}`}>
        <nav aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'} className={styles.breadcrumb}><Link href="/">{en ? 'Home' : 'Startseite'}</Link><span aria-hidden="true">/</span><span aria-current="page">{copy.label}</span></nav>
        <p className="technical-label">AImation / {copy.label}</p><h1>{copy.title}</h1><p className={styles.lead}>{copy.description}</p>
        <nav className={styles.stops} aria-label={en ? 'On this page' : 'Auf dieser Seite'}>{stops.map(stop => <a key={stop.id} href={`#${stop.id}`}>{stop[en ? 'en' : 'de']} <span aria-hidden="true">↓</span></a>)}</nav>
      </div>
      {children}
      <nav className={`engineering-wrap ${styles.related}`} aria-label={en ? 'Continue exploring' : 'Weiter entdecken'}><p className="technical-label">{en ? 'Continue exploring' : 'Weiter entdecken'}</p><div>{Object.entries(DISCOVERY_PAGES).filter(([key]) => key !== page).map(([key, item]) => <Link href={item.path} key={key}>{item[en ? 'en' : 'de'].label} <span aria-hidden="true">↗</span></Link>)}<Link href="/">{en ? 'Back to overview' : 'Zurück zur Übersicht'} <span aria-hidden="true">↗</span></Link></div></nav>
      <FinalCTA />
    </main><Footer />
  </>;
}
