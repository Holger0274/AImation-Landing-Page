'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ScrollText } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function EuAiActNotice() {
  const t = useTranslations('euAiAct');

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: '#faf9f7' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center gap-5 bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(96, 175, 255, 0.12)' }}>
            <ScrollText className="w-6 h-6 text-[#60AFFF]" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-[#071013] mb-2" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)' }}>
              {t('headline')}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('body')}
            </p>
          </div>
          <Link
            href="/ki-schulungen-mittelstand"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-[#c2007a] font-heading font-semibold text-sm hover:underline whitespace-nowrap"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
