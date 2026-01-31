'use client';

import { motion } from 'framer-motion';
import { FileSpreadsheet, Brain, Clock } from 'lucide-react';

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: 'Excel-Listen die niemand pflegt',
    description:
      'Daten liegen in Silos. Prozesse sind historisch gewachsen. Niemand blickt mehr durch.',
  },
  {
    icon: Brain,
    title: 'Wissen in Köpfen statt Systemen',
    description:
      'Wenn erfahrene Mitarbeiter gehen, geht das Wissen mit. Fachkräftemangel verschärft das Problem.',
  },
  {
    icon: Clock,
    title: 'Wiederkehrende Aufgaben fressen Zeit',
    description:
      'Zu viele manuelle, repetitive Tätigkeiten. Zeit für Wertschöpfung fehlt.',
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Kommt Ihnen das <span className="text-magenta text-glow-magenta">bekannt</span> vor?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Die häufigsten Herausforderungen, die wir bei KMUs sehen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-magenta/10 flex items-center justify-center glow-magenta">
                <point.icon className="w-8 h-8 text-magenta" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
