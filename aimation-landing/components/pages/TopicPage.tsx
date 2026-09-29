import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';
import { localizedPath } from '@/lib/seo/locales';
import styles from './TopicPage.module.css';

export type TopicFAQ = { question: string; answer: string };
export { styles as topicStyles };

export default function TopicPage({ locale, path, label, title, accent, intro, visual, facts, children, faqs, cta, related, parent, closing }: {
  locale: string; path: string; label: string; title: string; accent: string; intro: string;
  visual: ReactNode; facts: string[]; children: ReactNode; faqs: TopicFAQ[]; cta: string;
  related: { href: string; label: string }[]; parent?: { href: string; label: string };
  closing?: { title: string; description: string };
}) {
  const en = locale === 'en';
  return <>
    <BreadcrumbSchema items={[{ name: en ? 'Home' : 'Startseite', url: localizedPath('/', locale) }, ...(parent ? [{ name: parent.label, url: localizedPath(parent.href, locale) }] : []), { name: label, url: localizedPath(path, locale) }]} />
    <FAQPageSchema faqs={faqs} />
    <Header />
    <main id="main-content" className={styles.page}>
      <div className="engineering-wrap">
        <nav aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'} className={styles.breadcrumb}>
          <Link href="/">{en ? 'Home' : 'Startseite'}</Link><span aria-hidden="true">/</span>
          {parent && <><a href={localizedPath(parent.href, locale)}>{parent.label}</a><span aria-hidden="true">/</span></>}
          <span aria-current="page">{label}</span>
        </nav>
        <section className={styles.hero}>
          <div><p className={styles.eyebrow}>AImation / {label}</p><h1>{title} <span className="highlight">{accent}</span></h1><p className={styles.intro}>{intro}</p>
            <div className={styles.heroActions}><a href="#einblick" className="engineering-text-link">{en ? 'Explore the details' : 'Den Einblick ansehen'} ↓</a><a href="#kontakt" className="engineering-text-link">{cta} ↗</a></div>
          </div>
          {visual}
        </section>
        <div className={styles.meta}>{facts.map(fact => <span key={fact}>{fact}</span>)}</div>
      </div>
      {children}
      <div className="engineering-wrap">
        <section className={`${styles.section} ${styles.faq}`} aria-labelledby="topic-faq">
          <div><p className={styles.eyebrow}>{en ? 'Before we start' : 'Vor dem Einstieg'}</p><h2 id="topic-faq">{en ? 'Questions worth asking.' : 'Was Sie vorab wissen sollten.'}</h2></div>
          <div>{faqs.map(faq => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
        </section>
        <section className={styles.closing}>
          <div><p className={styles.eyebrow}>{en ? 'Your next step' : 'Ihr nächster Schritt'}</p><h2>{closing?.title ?? (en ? 'Start with your own task.' : 'Fangen wir bei Ihrer Aufgabe an.')}</h2><p>{closing?.description ?? (en ? 'In the free initial call, we discuss your workflow, your team and a useful starting point. We also say when the approach does not fit.' : 'Im kostenlosen Erstgespräch besprechen wir Ihren Ablauf, Ihr Team und einen sinnvollen Einstieg. Wir sagen auch, wenn der Ansatz nicht passt.')}</p></div>
          <div><a href="#kontakt" className="engineering-button">{cta} ↗</a></div>
        </section>
        <nav className={styles.related} aria-label={en ? 'Related topics' : 'Verwandte Themen'}><h2>{en ? 'Continue exploring' : 'Hier geht es weiter'}</h2><div>{related.map(link => <a key={link.href} href={localizedPath(link.href, locale)} className="engineering-text-link">{link.label} →</a>)}</div></nav>
      </div>
    </main><Footer />
  </>;
}

export function TopicSteps({ steps }: { steps: readonly (readonly [string, string])[] }) {
  return <ol className={styles.steps}>{steps.map(([title, text]) => <li className={styles.step} key={title}><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>;
}
