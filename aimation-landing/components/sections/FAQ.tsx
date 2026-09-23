'use client';
import { useTranslations } from 'next-intl';
import { faqs } from '@/lib/data/faqs';
import FaqAccordion from '@/components/ui/FaqAccordion';
export { faqs };

export default function FAQ() {
  const t = useTranslations('faq');
  return (
    <section id="faq" className="engineering-section">
      <div className="engineering-wrap faq-layout">
        <div className="section-intro"><p className="technical-label">FAQ</p><h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span></h2><p>{t('subline')}</p></div>
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
