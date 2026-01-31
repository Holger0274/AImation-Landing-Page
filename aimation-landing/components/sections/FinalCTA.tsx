'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="kontakt" className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Bereit für den{' '}
            <span className="text-magenta text-glow-magenta">nächsten Schritt?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie KI Ihr
            Unternehmen voranbringen kann.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="#calendly"
              className="group px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-lg glow-magenta-strong"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Kostenloses Erstgespräch buchen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#download"
              className="px-8 py-4 border-2 border-white/20 text-white font-heading font-semibold rounded-lg hover:bg-white hover:text-black transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                KI-Potenzial-Check herunterladen
              </span>
            </motion.a>
          </div>

          <p className="text-sm text-gray-500">
            30 Minuten, unverbindlich, per Video-Call oder vor Ort
          </p>
        </motion.div>
      </div>
    </section>
  );
}
