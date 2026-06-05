'use client';

import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const transformationIds = ['workflow', 'knowledge', 'research'] as const;

function BeforeCard({ data, type, labelProblem, labelLoesung }: { data: any; type: 'before' | 'after'; labelProblem: string; labelLoesung: string }) {
  const isBefore = type === 'before';

  return (
    <div
      className={`
        relative h-full rounded-2xl p-8
        ${isBefore
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#f90093]/30'
          : 'bg-gradient-to-br from-[#071013] to-[#0a1419] border-2 border-[#f90093]/50'
        }
      `}
      style={
        isBefore
          ? {}
          : { boxShadow: '0 0 40px rgba(249, 0, 147, 0.3)' }
      }
    >
      {/* Header */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-heading font-bold mb-3
          ${isBefore ? 'bg-[#f90093]/20 text-[#f90093]' : 'bg-[#f90093]/20 text-[#f90093]'}
        `}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
        >
          {isBefore ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
          {isBefore ? labelProblem : labelLoesung}
        </div>
        <h4 className="font-heading font-bold text-white mb-2" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.875rem)' }}>
          {data.title}
        </h4>
        <p className={`font-heading font-semibold text-[#f90093]`}
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            textShadow: '0 0 20px rgba(249, 0, 147, 0.5)'
          }}
        >
          {data.pain || data.gain}
        </p>
      </div>

      {/* List */}
      <ul className="space-y-3 mb-6">
        {(data.problems || data.benefits).map((item: string, index: number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: isBefore ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-[#f90093]/20">
              {isBefore ? (
                <X className="w-3 h-3 text-[#f90093]" />
              ) : (
                <Check className="w-3 h-3 text-[#f90093]" />
              )}
            </div>
            <span className={`${isBefore ? 'text-gray-300' : 'text-gray-200'}`} style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>
              {item}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* ROI Badge (nur bei "after") */}
      {!isBefore && data.roi && (
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f90093]/20 rounded-lg">
            <span className="font-heading font-bold text-[#f90093]" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>
              ✓ {data.roi}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BeforeAfter() {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const t = useTranslations('beforeAfter');

  const transformations = transformationIds.map((id) => ({
    id,
    title: t(`transformations.${id}.title`),
    before: {
      title: t(`transformations.${id}.before.title`),
      pain: t(`transformations.${id}.before.pain`),
      problems: t.raw(`transformations.${id}.before.problems`) as string[],
    },
    after: {
      title: t(`transformations.${id}.after.title`),
      gain: t(`transformations.${id}.after.gain`),
      benefits: t.raw(`transformations.${id}.after.benefits`) as string[],
      roi: t(`transformations.${id}.after.roi`),
    },
  }));

  const labelProblem = t('labelProblem');
  const labelLoesung = t('labelLoesung');

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 0, 147, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            {t('headline')} <span className="text-gray-600">{t('headlineChao')}</span> {t('headlineMid')}{' '}
            <span className="gradient-text">{t('headlineHighlight')}</span>
          </h2>
          <p className="font-semibold text-gray-600 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>
            {t('subline')}
          </p>
        </motion.div>

        {/* Transformation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {transformations.map((transformation, index) => (
            <button
              key={transformation.id}
              onClick={() => setActiveTransformation(index)}
              className={`
                px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-300
                ${activeTransformation === index
                  ? 'bg-gradient-to-r from-magenta to-magenta-light text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-magenta/30'
                }
              `}
              style={
                activeTransformation === index
                  ? { boxShadow: '0 0 30px rgba(249, 0, 147, 0.3)' }
                  : {}
              }
            >
              {transformation.title}
            </button>
          ))}
        </div>

        {/* Before/After Split View */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* BEFORE - Left Side */}
          <motion.div
            key={`before-${activeTransformation}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: 'clamp(400px, 50vw, 500px)' }}
          >
            <BeforeCard
              data={transformations[activeTransformation].before}
              type="before"
              labelProblem={labelProblem}
              labelLoesung={labelLoesung}
            />
          </motion.div>

          {/* Arrow Divider */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-magenta to-magenta-light flex items-center justify-center shadow-lg"
              style={{ boxShadow: '0 0 40px rgba(249, 0, 147, 0.6)' }}
            >
              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center -my-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-magenta to-magenta-light flex items-center justify-center rotate-90">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* AFTER - Right Side */}
          <motion.div
            key={`after-${activeTransformation}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: 'clamp(400px, 50vw, 500px)' }}
          >
            <BeforeCard
              data={transformations[activeTransformation].after}
              type="after"
              labelProblem={labelProblem}
              labelLoesung={labelLoesung}
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            {t('ctaText')}
          </p>
          <button
            onClick={() => (window.location.href = '#kontakt')}
            className="px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            style={{ boxShadow: '0 0 30px rgba(249, 0, 147, 0.2)' }}
          >
            {t('ctaButton')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
