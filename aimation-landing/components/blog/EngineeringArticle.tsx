import type { Metadata } from 'next';
import Link from 'next/link';
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

export function engineeringArticleMetadata(article: Article): Metadata {
  const path = `/blog/${article.slug}`;
  const image = `${SITE_URL}${path}/opengraph-image`;
  return {
    ...pageMetadata(path, 'de', `${article.shortTitle} | AImation`, article.description),
    openGraph: { type: 'article', title: article.title, description: article.description, url: `${SITE_URL}${path}`, locale: 'de_DE', siteName: 'AImation', publishedTime: ARTICLE_DATE, modifiedTime: ARTICLE_DATE, authors: [`${SITE_URL}/facts/holger-peschke`], images: [{ url: image, width: 1200, height: 630, alt: article.shortTitle }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [image] },
  };
}
export default function EngineeringArticle({ article }: { article: Article }) {
  const path = `/blog/${article.slug}`;
  return <>
    <BlogPostingSchema headline={article.title} description={article.description} datePublished={ARTICLE_DATE} url={path} image={`${SITE_URL}${path}/opengraph-image`} siteUrl={SITE_URL} />
    <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Blog', url: '/blog' }, { name: article.shortTitle, url: path }]} />
    <FAQPageSchema faqs={article.faqs} />
    <Header />
    <main id="main-content" className={s.page}>
      <article>
        <header className={s.hero}>
          <div className={s.heroAtmosphere} aria-hidden="true"><EngineeringArtwork kind={article.key} className={s.heroArtwork} /></div>
          <div className={s.heroContent}>
          <nav className={s.breadcrumb} aria-label="Brotkrumennavigation"><Link href="/">Startseite</Link><span aria-hidden="true">/</span><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{article.tag}</span></nav>
          <div className={s.meta}><span>{article.tag}</span><time dateTime={ARTICLE_DATE}>31. Oktober 2026</time><span>{articleReadingMinutes(article)} Min. Lesezeit</span></div>
          <h1>{article.title}</h1>
          <BlogAuthor />
          <p className={s.lead}>{article.lead}</p>
          <p className={s.answer}>{article.answer}</p>
          <a href="#visual-title" className={s.exploreLink}>Interaktives Beispiel entdecken <span aria-hidden="true">↓</span></a>
          </div>
          <span className={s.artworkNote} aria-hidden="true">AImation / {article.tag}<br />Schematische Illustration</span>
        </header>
        <section className={s.visualSection} aria-labelledby="visual-title"><p className="technical-label">Selbst ausprobieren</p><h2 id="visual-title">{article.visualTitle}</h2><p className={s.visualIntro}>{article.visualIntro}</p><EngineeringExplainer kind={article.key} /></section>
        <div className={s.bodyLayout}>
          <nav className={s.contents} aria-label="Inhaltsverzeichnis"><p>In diesem Artikel</p><ol>{article.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>0{index + 1}</span>{section.title}</a></li>)}</ol><a href="#fragen">Häufige Fragen</a><a href="#quellen">Quellen</a></nav>
          <div className={s.prose}>
            {article.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph.text}{paragraph.source && <> <a href={ARTICLE_SOURCES[paragraph.source].url} target="_blank" rel="noopener noreferrer">{ARTICLE_SOURCES[paragraph.source].label}</a>.</>}</p>)}{section.table && <div className={s.tableWrap} tabIndex={0} role="region" aria-label={`Vergleich: ${section.title}`}><table><thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>}</section>)}
            <section id="fragen"><h2>Häufige Fragen</h2><FaqAccordion items={article.faqs} /></section>
            <section id="quellen" className={s.sources}><h2>Quellen und Einordnung</h2><p>Die Quellen stützen die beschriebenen Grundlagen. Die fiktiven Beispiele und Vorschläge für einen Pilot sind eine redaktionelle Übertragung auf die technische Produktentwicklung durch AImation. Sie sind keine Messergebnisse aus Kundenprojekten.</p><ul>{article.sources.map(id => <li key={id}><a href={ARTICLE_SOURCES[id].url} target="_blank" rel="noopener noreferrer">{ARTICLE_SOURCES[id].label}<ArrowUpRight size={15} aria-hidden="true" /></a></li>)}</ul><p>Quellen geprüft am 31. Oktober 2026.</p></section>
            <aside className={s.related} aria-label="Passende Beispiele und Angebote"><h2>Vom Artikel zu Ihrem Ablauf</h2>{article.related.map(link => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}</aside>
            <section id="kontakt" className={s.cta}><h2>Bringen Sie einen Ablauf aus Ihrer Entwicklung mit.</h2><p>Im kostenlosen Erstgespräch schauen wir auf Ihre Aufgabe, die vorhandenen Daten und einen sinnvollen nächsten Schritt.</p><ArticleContact /></section>
          </div>
        </div>
      </article>
      <nav className={s.more} aria-label="Weitere Artikel zur technischen Produktentwicklung"><p className="technical-label">Weiterlesen</p>{ENGINEERING_ARTICLES.filter(item => item.key !== article.key).map(item => <Link href={`/blog/${item.slug}`} key={item.slug}>{item.shortTitle}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}<Link href="/blog">Alle Blogartikel<ArrowUpRight size={20} aria-hidden="true" /></Link></nav>
    </main><Footer />
  </>;
}
