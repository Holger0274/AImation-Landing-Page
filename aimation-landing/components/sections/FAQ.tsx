'use client';
import { useTranslations } from 'next-intl';
import FaqAccordion, { type FaqAccordionItem } from '@/components/ui/FaqAccordion';

export default function FAQ({ items }: { items: FaqAccordionItem[] }) {
  const t = useTranslations('faq');
  return (
    <section id="faq" className="engineering-section">
      <div className="engineering-wrap faq-layout">
        <div className="section-intro"><h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span></h2><p>{t('subline')}</p></div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
