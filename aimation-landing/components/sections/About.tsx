'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="ueber-mich" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/holger-consulting.png"
              alt="Holger im Beratungsgespräch - zeigt einem Mitarbeiter AI-Automatisierung"
              width={2400}
              height={1792}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Über uns</h2>

            <blockquote className="font-medium text-black italic mb-6 pl-4 border-l-4 border-magenta" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
              "KI ist nicht unser Job – es ist das Thema, das uns antreibt."
            </blockquote>

            <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
              Mit 20 Jahren Engineering-Erfahrung haben wir gesehen, wie viel Potenzial in deutschen
              Unternehmen brachliegt. Unser Ziel: KI zugänglich machen – ohne Buzzwords, ohne
              Konzernpreise, mit echtem Verständnis für eure Prozesse.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
              Mit AI.mation bringen wir beides zusammen: Tiefes technisches Verständnis und die
              Fähigkeit, komplexe Themen verständlich zu machen. Unser Versprechen: Keine leeren
              Buzzwords, sondern ehrliche Einschätzungen und praktische Lösungen, die
              funktionieren.
            </p>

            <div className="space-y-3">
              <p className="font-heading font-bold mb-4">Was uns auszeichnet:</p>
              {[
                '20 Jahre Engineering-Erfahrung – wir sprechen eure Sprache',
                'Aktiv in internationalem KI-Expertennetzwerk',
                'Zugang zu neuesten Methoden und Tools',
                'Ehrliche Einschätzung – auch wenn die Antwort Nein lautet',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
