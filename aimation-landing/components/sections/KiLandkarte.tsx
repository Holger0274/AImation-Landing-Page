'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Map } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';

export default function KiLandkarte() {
  const t = useTranslations('kiLandkarte');
  const { openLeadForm } = useLeadForm();

  const checks = [t('check1'), t('check2'), t('check3')];

  return (
    <section
      id="ki-landkarte"
      className="py-20 md:py-32"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage:
          'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(249, 0, 147, 0.1)' }}>
            <Map className="w-7 h-7 text-[#f90093]" />
          </div>

          <h2 className="font-heading font-bold text-[#071013] mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}>
            {t('headline')} <span className="text-[#f90093]">{t('headlineHighlight')}</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
            {t('body')}
          </p>

          <div className="space-y-3 mb-10">
            {checks.map((check, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f90093]/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#f90093]" />
                </div>
                <span className="text-[#071013] font-medium">{check}</span>
              </div>
            ))}
          </div>

          <motion.button
            onClick={openLeadForm}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-white font-heading font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            style={{ boxShadow: '0 0 30px rgba(249, 0, 147, 0.2)' }}
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
