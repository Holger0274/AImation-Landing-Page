'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="ueber-mich" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            {/* Animated Geometric Shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-lightblue/10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-br from-magenta/20 to-lightblue/20"
                  style={{
                    width: `${100 + i * 50}px`,
                    height: `${100 + i * 50}px`,
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 15}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Über uns</h2>

            <blockquote className="text-xl font-medium text-black italic mb-6 pl-4 border-l-4 border-magenta">
              "KI ist nicht unser Job – es ist das Thema, das uns antreibt."
            </blockquote>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Mit 20 Jahren Engineering-Erfahrung haben wir gesehen, wie viel Potenzial in deutschen
              Unternehmen brachliegt. Unser Ziel: KI zugänglich machen – ohne Buzzwords, ohne
              Konzernpreise, mit echtem Verständnis für eure Prozesse.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
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
                  <Check className="w-5 h-5 text-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
