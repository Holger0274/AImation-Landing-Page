'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator } from 'lucide-react';
import ROICalculator from '@/components/ROICalculator/ROICalculator';
import LeadFormModal from '@/components/LeadFormModal';

export default function FinalCTA() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section id="kontakt" className="relative py-20 md:py-32 bg-[#071013] text-white overflow-hidden">
      {/* Animated Glow Background - Responsive */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 'clamp(300px, 80vw, 800px)',
            height: 'clamp(200px, 50vh, 500px)',
            background: 'radial-gradient(ellipse, rgba(249, 0, 147, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(2rem, 7vw, 3.75rem)' }}>
            Lust auf ein{' '}
            <span className="text-magenta text-glow-magenta">Gespräch?</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
            Reden wir – oder rechnen Sie erstmal selbst nach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA - Magenta Button (Erstgespräch) */}
            <motion.button
              onClick={() => setIsLeadFormOpen(true)}
              className="group px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-lg glow-magenta-strong w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Kostenloses Erstgespräch buchen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA - Ghost Button (ROI Calculator) */}
            <motion.button
              onClick={() => setIsCalculatorOpen(true)}
              data-roi-calculator-trigger
              className="group px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-heading font-semibold rounded-lg backdrop-blur-sm transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />
                ROI selbst berechnen
              </span>
            </motion.button>
          </div>

          {/* Microcopy below CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300">
            <p>30 Minuten • Unverbindlich • Sofort verfügbar</p>
            <p className="hidden sm:block">|</p>
            <p>2 Minuten • Keine Vorkenntnisse nötig</p>
          </div>
        </motion.div>
      </div>

      {/* ROI Calculator Modal */}
      <ROICalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        calendlyUrl="https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai"
      />

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </section>
  );
}
