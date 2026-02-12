'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, FileSearch } from 'lucide-react';

const methods = [
  {
    icon: CheckCircle,
    label: 'AI Readiness Assessment',
    description: 'Ist Ihr Unternehmen bereit für KI?',
  },
  {
    icon: TrendingUp,
    label: 'AI ROI-Kalkulation',
    description: 'Welchen Mehrwert bringt KI konkret?',
  },
  {
    icon: FileSearch,
    label: 'AI Audit',
    description: 'Welche Tools bringen wirklich Nutzen?',
  },
];

export default function MethodBadgeBar() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h3 className="font-heading font-semibold text-gray-600 mb-8" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
            Unsere <span className="gradient-text">bewährten Analyse-Methoden</span>
          </h3>

          {/* Badge Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className="
                      relative overflow-hidden
                      bg-gradient-to-br from-warm-white to-gray-50
                      border-2 border-gray-200
                      rounded-2xl p-6
                      hover:border-magenta/30
                      hover:shadow-lg
                      transition-all duration-300
                    "
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at top right, rgba(249, 0, 147, 0.05) 0%, transparent 70%)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon */}
                      <div
                        className="
                          w-12 h-12 mb-4
                          rounded-xl
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:scale-110
                        "
                        style={{
                          background: 'linear-gradient(135deg, rgba(249, 0, 147, 0.1), rgba(255, 78, 205, 0.05))',
                        }}
                      >
                        <Icon className="w-6 h-6 text-magenta" />
                      </div>

                      {/* Label */}
                      <h4 className="font-heading font-bold text-[#071013] mb-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                        {method.label}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Optional CTA or Trust Element */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-sm mt-8"
          >
            Wissenschaftlich fundierte Methoden für messbare Ergebnisse
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
