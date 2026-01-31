'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Erstgespräch',
    description:
      '30 Minuten, kostenlos. Wir lernen uns kennen und ich verstehe Ihre Situation.',
  },
  {
    number: '2',
    title: 'Konzept',
    description:
      'Ich erarbeite einen maßgeschneiderten Vorschlag – transparent mit Aufwand und Nutzen.',
  },
  {
    number: '3',
    title: 'Umsetzung',
    description:
      'Schulung, Beratung oder Implementierung – gemeinsam setzen wir Ihr Projekt um.',
  },
  {
    number: '4',
    title: 'Begleitung',
    description:
      'Auch nach Go-Live bleibe ich Ihr Ansprechpartner – für Fragen, Anpassungen, Weiterentwicklung.',
  },
];

export default function Process() {
  return (
    <section id="prozess" className="py-20 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            So <span className="gradient-text">einfach</span> starten wir
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vom ersten Gespräch bis zur Umsetzung – transparent und strukturiert
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-magenta text-white flex items-center justify-center font-heading font-bold text-2xl glow-magenta">
                {step.number}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
