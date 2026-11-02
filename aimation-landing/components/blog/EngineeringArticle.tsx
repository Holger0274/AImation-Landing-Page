import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { VIDEO_ARTICLES, type VideoArticle } from '@/lib/data/video-articles';
import VideoWalkthrough from './VideoWalkthrough';
import DevelopmentJourney from './DevelopmentJourney';
import { PRODUCT_DEVELOPMENT_ARTICLE, journeyArtworkUri, type JourneyArticle } from '@/lib/data/product-development-article';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogAuthor from '@/components/BlogAuthor';
import { BlogPostingSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { ARTICLE_DATE, ARTICLE_SOURCES, ENGINEERING_ARTICLES, articleReadingMinutes, type EngineeringArticle as Article } from '@/lib/data/engineering-articles';
import { SITE_URL, pageMetadata } from '@/lib/seo/metadata';
import EngineeringExplainer from './EngineeringExplainer';
import ArticleContact from './ArticleContact';
import EngineeringArtwork from './EngineeringArtwork';
import s from './engineering-article.module.css';

export function engineeringArticleMetadata(article: Article | VideoArticle | JourneyArticle): Metadata {
  const path = `/blog/${article.slug}`;
  const image = `${SITE_URL}${path}/opengraph-image`;
  return {
    ...pageMetadata(path, 'de', `${article.shortTitle} | AImation`, article.description),
    openGraph: { type: 'article', title: article.title, description: article.description, url: `${SITE_URL}${path}`, locale: 'de_DE', siteName: 'AImation', publishedTime: article.date ?? ARTICLE_DATE, modifiedTime: article.date ?? ARTICLE_DATE, authors: [`${SITE_URL}/facts/holger-peschke`], images: [{ url: image, width: 1200, height: 630, alt: article.shortTitle }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [image] },
  };
}
export default function EngineeringArticle({ article }: { article: Article | VideoArticle | JourneyArticle }) {
  const path = `/blog/${article.slug}`;
  const date = article.date ?? ARTICLE_DATE;
  const dateLabel = new Date(`${date}T12:00:00Z`).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Berlin' });
  const videoArticle = 'steps' in article ? article : null;
  const journey = 'journey' in article ? article : null;
  return <>
    <BlogPostingSchema headline={article.title} description={article.description} datePublished={date} url={path} image={`${SITE_URL}${path}/opengraph-image`} siteUrl={SITE_URL} />
    <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Blog', url: '/blog' }, { name: article.shortTitle, url: path }]} />
    <FAQPageSchema faqs={article.faqs} />
    <Header />
    <main id="main-content" className={s.page}>
      <article>
        <header className={s.hero}>
          <div className={s.heroAtmosphere} aria-hidden="true">{'journey' in article ? <Image src={journeyArtworkUri()} alt="" width={1000} height={720} unoptimized className={s.heroArtwork} /> : 'key' in article ? <EngineeringArtwork kind={article.key} className={s.heroArtwork} /> : <Image src={article.poster} alt="" width={1920} height={1080} sizes="(max-width: 650px) 650px, 900px" className={s.heroArtwork} />}</div>
          <div className={s.heroContent}>
          <nav className={s.breadcrumb} aria-label="Brotkrumennavigation"><Link href="/">Startseite</Link><span aria-hidden="true">/</span><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{article.tag}</span></nav>
          <div className={s.meta}><span>{article.tag}</span><time dateTime={date}>{dateLabel}</time><span>{articleReadingMinutes(article)} Min. Lesezeit</span></div>
          <h1>{article.title}</h1>
          <BlogAuthor />
          <p className={s.lead}>{article.lead}</p>
          <p className={s.answer}>{article.answer}</p>
          <a href="#visual-title" className={s.exploreLink}>{journey ? 'Die Entwicklungskette entdecken' : videoArticle ? 'Den Ablauf und die Videos entdecken' : 'Interaktives Beispiel entdecken'} <span aria-hidden="true">↓</span></a>
          </div>
          <span className={s.artworkNote} aria-hidden="true">AImation / {article.tag}<br />{journey ? 'Schematische Entwicklungskette' : videoArticle ? 'Originalbild aus der Video-Demo' : 'Schematische Illustration'}</span>
        </header>
        <section className={s.visualSection} aria-labelledby="visual-title"><p className="technical-label">{journey ? 'Die Entwicklung im Zusammenhang' : videoArticle ? 'Der Ablauf im Bild' : 'Selbst ausprobieren'}</p><h2 id="visual-title">{article.visualTitle}</h2><p className={s.visualIntro}>{article.visualIntro}</p>{'journey' in article ? <DevelopmentJourney article={article} /> : 'key' in article ? <EngineeringExplainer kind={article.key} /> : <VideoWalkthrough article={article} />}</section>
        <div className={s.bodyLayout}>
          <nav className={s.contents} aria-label="Inhaltsverzeichnis"><p>In diesem Artikel</p><ol>{article.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>0{index + 1}</span>{section.title}</a></li>)}</ol><a href="#fragen">Häufige Fragen</a><a href="#quellen">Quellen</a></nav>
          <div className={s.prose}>
            {article.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph.text}{paragraph.source && <> <a href={ARTICLE_SOURCES[paragraph.source].url} target="_blank" rel="noopener noreferrer">{ARTICLE_SOURCES[paragraph.source].label}</a>.</>}</p>)}{section.table && <div className={s.tableWrap} tabIndex={0} role="region" aria-label={`Vergleich: ${section.title}`}><table><thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>}{section.links && <nav className={s.sectionLinks} aria-label={`Vertiefung: ${section.title}`}>{section.links.map(link => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}</nav>}</section>)}
            <section id="fragen"><h2>Häufige Fragen</h2><FaqAccordion items={article.faqs} /></section>
            <section id="quellen" className={s.sources}><h2>Quellen und Einordnung</h2><p>{'sourceNote' in article ? article.sourceNote : 'Die Quellen stützen die beschriebenen Grundlagen. Die fiktiven Beispiele und Vorschläge für einen Pilot sind eine redaktionelle Übertragung auf die technische Produktentwicklung durch AImation. Sie sind keine Messergebnisse aus Kundenprojekten.'}</p><ul>{article.sources.map(id => <li key={id}><a href={ARTICLE_SOURCES[id].url} target="_blank" rel="noopener noreferrer">{ARTICLE_SOURCES[id].label}<ArrowUpRight size={15} aria-hidden="true" /></a></li>)}</ul><p>Quellen geprüft am {dateLabel}.</p></section>
            <aside className={s.related} aria-label="Passende Beispiele und Angebote"><h2>Vom Artikel zu Ihrem Ablauf</h2>{article.related.map(link => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}</aside>
            <section id="kontakt" className={s.cta}><h2>Bringen Sie einen Ablauf aus Ihrer Entwicklung mit.</h2><p>Im kostenlosen Erstgespräch schauen wir auf Ihre Aufgabe, die vorhandenen Daten und einen sinnvollen nächsten Schritt.</p><ArticleContact /></section>
          </div>
        </div>
      </article>
      <nav className={s.more} aria-label="Weitere Artikel zur technischen Produktentwicklung"><p className="technical-label">Weiterlesen</p>{[PRODUCT_DEVELOPMENT_ARTICLE, ...VIDEO_ARTICLES, ...ENGINEERING_ARTICLES].filter(item => item.slug !== article.slug).map(item => <Link href={`/blog/${item.slug}`} key={item.slug}>{item.shortTitle}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}<Link href="/blog">Alle Blogartikel<ArrowUpRight size={20} aria-hidden="true" /></Link></nav>
    </main><Footer />
  </>;
}
