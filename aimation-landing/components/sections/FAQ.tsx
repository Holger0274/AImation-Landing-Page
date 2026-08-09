'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { faqs } from '@/lib/data/faqs';
import FaqAccordion from '@/components/ui/FaqAccordion';

export { faqs };

export default function FAQ() {
  const t = useTranslations('faq');
  return (
    <section
      id="faq"
      className="py-20 md:py-32"
      style={{
        backgroundColor: '#f3f4f6',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.06) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      {/*
        FAQPageSchema wurde in page.tsx (Server Component) verlagert,
        damit es im initialen HTML-Response fuer AI-Crawler sichtbar ist.
        Die sichtbaren Antworten selbst stehen ueber FaqAccordion (CSS-Auf/Zu,
        kein bedingtes Rendern) ebenfalls im initialen HTML.
      */}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('headline')} <span className="gradient-text">{t('headlineHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600">{t('subline')}</p>
        </motion.div>

        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
