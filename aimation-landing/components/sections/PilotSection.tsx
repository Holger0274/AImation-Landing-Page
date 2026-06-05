'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export function PilotSection() {
  const t = useTranslations('pilot')

  const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#'

  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: '#071013',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t('headline')}{' '}
            <span style={{ color: '#f90093' }}>{t('headlineHighlight')}</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            {t('body')}
          </p>

          <ul className="space-y-4 mb-10">
            {(['point1', 'point2', 'point3'] as const).map((key) => (
              <li key={key} className="flex items-start gap-3 text-gray-200">
                <span className="mt-1 flex-shrink-0" style={{ color: '#f90093' }}>✓</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
              boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {t('cta')}
          </a>
          <p className="mt-3 text-sm text-gray-400">{t('ctaMicrocopy')}</p>
        </motion.div>
      </div>
    </section>
  )
}
