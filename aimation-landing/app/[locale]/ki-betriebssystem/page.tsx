import { setRequestLocale } from 'next-intl/server';
import TopicPage, { TopicSteps, topicStyles as s } from '@/components/pages/TopicPage';
import { AI_OS_COPY, AI_OS_PATH } from '@/lib/data/ai-operating-system';
import { pageMetadata } from '@/lib/seo/metadata';
import DataFoundation from '@/components/visuals/DataFoundation';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = AI_OS_COPY[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(AI_OS_PATH, locale, copy.metaTitle, copy.description);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';
  const c = AI_OS_COPY[en ? 'en' : 'de'];
  return <TopicPage locale={locale} path={AI_OS_PATH} label={c.label} title={c.title} accent={c.accent} intro={c.intro}
    facts={[...c.facts]} cta={c.cta} faqs={[...c.faqs]}
    closing={{ title: c.closingTitle, description: c.closingText }}
    related={['/ki-agenten-unternehmen', '/use-cases/knowledge-graph-management', '/use-cases/excel-powerpoint-berichte'].map((href, i) => ({ href, label: c.related[i] }))}
    visual={<figure className={styles.architecture} aria-label={c.diagram.title}>
      <div className={styles.layer}><p>{c.diagram.sources}</p><div className={styles.chips}>{c.diagram.sourceNames.map(name => <span key={name}>{name}</span>)}</div></div>
      <span className={styles.connector} aria-hidden="true">↓</span>
      <a className={styles.core} href="#datenbasis"><strong>{c.diagram.core}</strong><span>{c.diagram.coreText}</span><small>{c.diagram.controls}</small><span aria-hidden="true">↗</span></a>
      <span className={styles.connector} aria-hidden="true">↓</span>
      <div className={styles.layer}><p>{c.diagram.apps}</p><div className={styles.chips}>{c.diagram.appNames.map(name => <a key={name} href="#anwendungen">{name} <span aria-hidden="true">↗</span></a>)}</div></div>
      <figcaption>{c.diagram.caption}</figcaption>
    </figure>}>
    <div className="engineering-wrap">
      <section className={`${s.section} ${s.split}`} id="einblick"><div><h2>{c.definitionTitle}</h2><p>{c.definition}</p></div><div><p>{c.definitionNext}</p><p className={s.note}>{c.definitionNote}</p></div></section>
      <DataFoundation en={en} />
      <section className={s.section}><div className={s.split}><h2>{c.sourcesTitle}</h2><p>{c.sourcesText}</p></div><div className={`${s.qkt} ${styles.sourceCards}`}>{c.sources.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={s.section} id="datenbasis"><div className={s.split}><h2>{c.mappingTitle}</h2><p>{c.mappingText}</p></div>
        <div className={styles.mapping}><p>{c.mappingExample}</p>{c.mappingRows.map((row, i) => <dl key={i}>{row.map((value, j) => <div key={c.mappingLabels[j]}><dt>{c.mappingLabels[j]}</dt><dd>{value}</dd></div>)}</dl>)}</div><p className={s.note}>{c.mappingNote}</p>
      </section>
      <section className={s.section} id="anwendungen"><div className={s.split}><h2>{c.appsTitle}</h2><p>{c.appsText}</p></div><div className={s.catalogue}>{c.applications.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={`${s.section} ${s.split}`}><div><h2>{c.exampleTitle}</h2><blockquote className={styles.question}>{c.exampleQuestion}</blockquote></div><div><p>{c.exampleText}</p><p className={s.note}>{c.exampleNote}</p></div></section>
      <section className={`${s.section} ${s.split}`} id="plattformen"><div><h2>{c.partnerTitle}</h2><p>{c.partnerIntro}</p><p className={s.note}>{c.partnerNote}</p></div><div className={styles.partners}><article><p className={styles.partnerStatus}>{c.uknowStatus}</p><h3>U-KNOW.AI</h3><p>{c.uknowText}</p><a href="https://www.u-know.ai/enterprise-os" target="_blank" rel="noopener noreferrer" className="engineering-text-link">{c.uknowLink} ↗</a></article><article><p className={styles.partnerStatus}>{c.amberStatus}</p><h3>amber</h3><p>{c.amberText}</p><a href="https://amber.de/en/product/" target="_blank" rel="noopener noreferrer" className="engineering-text-link">{c.amberLink} ↗</a></article></div></section>
      <section className={`${s.section} ${s.split}`}><div><h2>{c.deliveryTitle}</h2><p>{c.deliveryText}</p></div><TopicSteps steps={c.steps} /></section>
    </div>
  </TopicPage>;
}
