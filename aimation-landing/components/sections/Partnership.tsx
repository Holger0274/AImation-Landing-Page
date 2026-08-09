'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Partnership() {
  const t = useTranslations('partnership');

  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 text-center"
        >
          <span className="inline-block mb-6 text-xs font-heading font-semibold uppercase tracking-wide text-gray-500">
            {t('kicker')}
          </span>

          <div className="flex flex-col items-center gap-3 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#071013] flex items-center justify-center p-3">
              <Image
                src="/logos/partners/u-know-ai-icon.webp"
                alt="U-KNOW.AI"
                width={40}
                height={42}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#071013]">
              U-KNOW<span className="text-[#f90093]">.AI</span>
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-6" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.0625rem)' }}>
            {t('body')}
          </p>

          <a
            href="https://www.u-know.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#c2007a] font-heading font-semibold hover:underline transition-all group"
          >
            {t('link')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
