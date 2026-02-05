'use client';

import { motion } from 'framer-motion';
import { Target, Wrench, Factory } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'Ehrlich',
    description:
      'Keine Marketing-Versprechen. Wir sagen auch Nein, wenn KI nicht die richtige Lösung ist.',
  },
  {
    icon: Wrench,
    title: 'Praxisnah',
    description:
      'Keine Theorie-Vorträge. Lösungen die am nächsten Tag funktionieren.',
  },
  {
    icon: Factory,
    title: 'KMU-fokussiert',
    description:
      'Maßgeschneidert für den Mittelstand. Keine Konzern-Beratung, keine Konzern-Preise.',
  },
];

export default function Solution() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            Die Lösung: <span className="gradient-text">Systematische</span> KI-Integration
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>
            Wir helfen Ihnen, KI dort einzusetzen, wo sie echten Mehrwert bringt – ohne
            Buzzwords, ohne Konzernpreise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-lightblue/10 flex items-center justify-center">
                <solution.icon className="w-8 h-8 text-lightblue" />
              </div>
              <h3 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>{solution.title}</h3>
              <p className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
