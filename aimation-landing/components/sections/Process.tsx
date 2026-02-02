'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, FileText, Rocket, Headphones, CheckCircle, Clock, Euro } from 'lucide-react';
import { useRef, useState } from 'react';

const steps = [
  {
    number: '1',
    icon: Calendar,
    title: 'Erstgespräch',
    subtitle: '30 Minuten, kostenlos',
    description:
      'Wir lernen uns kennen. Ich verstehe Ihre Situation, Herausforderungen und Ziele.',
    details: [
      'Ihre aktuelle Situation',
      'Konkrete Herausforderungen',
      'Erste Potenziale',
    ],
    duration: '30 Min',
    cost: 'Kostenlos',
    mockupType: 'video-call',
  },
  {
    number: '2',
    icon: FileText,
    title: 'Konzept',
    subtitle: 'Transparenter Vorschlag',
    description:
      'Maßgeschneidertes Konzept mit klarem Aufwand, Nutzen und ROI-Berechnung.',
    details: [
      'Detaillierte Analyse',
      'Lösungsvorschlag',
      'ROI-Kalkulation',
    ],
    duration: '3-5 Tage',
    cost: 'Transparent',
    mockupType: 'proposal',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Umsetzung',
    subtitle: 'Gemeinsam umsetzen',
    description:
      'Schulung, Beratung oder Implementierung – wir setzen Ihr Projekt gemeinsam um.',
    details: [
      'Praxisorientiert',
      'Iterativ',
      'Hands-On Support',
    ],
    duration: '2-12 Wochen',
    cost: 'Nach Aufwand',
    mockupType: 'implementation',
  },
  {
    number: '4',
    icon: Headphones,
    title: 'Begleitung',
    subtitle: 'Langfristige Partnerschaft',
    description:
      'Auch nach Go-Live bleibe ich Ihr Ansprechpartner für Fragen, Anpassungen und Weiterentwicklung.',
    details: [
      'Support on Demand',
      'Optimierungen',
      'Neue Features',
    ],
    duration: 'Ongoing',
    cost: 'Optional',
    mockupType: 'support',
  },
];

// Process Step Mockup Component
function StepMockup({ type }: { type: string }) {
  const mockups: Record<string, { icon: any; color: string; elements: string[] }> = {
    'video-call': {
      icon: Calendar,
      color: '#60AFFF',
      elements: ['Video', 'Notizen', 'Screen Share', 'Kalender'],
    },
    'proposal': {
      icon: FileText,
      color: '#f90093',
      elements: ['Analyse', 'Lösungen', 'Timeline', 'Budget'],
    },
    'implementation': {
      icon: Rocket,
      color: '#ff4ecd',
      elements: ['Sprint 1', 'Sprint 2', 'Testing', 'Go-Live'],
    },
    'support': {
      icon: Headphones,
      color: '#60AFFF',
      elements: ['Tickets', 'Updates', 'Monitoring', 'Optimization'],
    },
  };

  const mockup = mockups[type] || mockups['video-call'];
  const Icon = mockup.icon;

  return (
    <div className="relative w-full h-32 bg-white rounded-xl border border-gray-200 p-4 overflow-hidden group hover:border-magenta/30 transition-all">
      {/* Background Icon */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24" style={{ color: mockup.color }} />
      </div>

      {/* Elements Grid */}
      <div className="relative grid grid-cols-2 gap-2">
        {mockup.elements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 bg-gray-50 rounded px-2 py-1"
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mockup.color }} />
            <span className="text-xs text-gray-600 font-heading">{element}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="prozess" className="py-20 md:py-32 bg-gradient-to-b from-warm-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 0, 147, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            So <span className="gradient-text">einfach</span> starten wir
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vom ersten Gespräch bis zur Umsetzung – transparent und strukturiert
          </p>
        </motion.div>

        {/* Timeline - Desktop Horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-32 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              className="h-full bg-gradient-to-r from-magenta to-magenta-light"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative"
                >
                  {/* Icon Circle */}
                  <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                    <div
                      className={`
                        absolute inset-0 rounded-full transition-all duration-300
                        ${isActive
                          ? 'bg-gradient-to-r from-magenta to-magenta-light scale-110'
                          : 'bg-white border-2 border-gray-200'
                        }
                      `}
                      style={isActive ? { boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)' } : {}}
                    />
                    <Icon className={`relative w-10 h-10 z-10 transition-colors ${isActive ? 'text-white' : 'text-gray-600'}`} />

                    {/* Step Number Badge */}
                    <div
                      className={`
                        absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
                        font-heading font-bold text-sm transition-all
                        ${isActive
                          ? 'bg-magenta text-white scale-110'
                          : 'bg-gray-200 text-gray-600'
                        }
                      `}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`
                      bg-white rounded-2xl p-6 border-2 transition-all duration-300
                      ${isActive
                        ? 'border-magenta shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-magenta font-heading font-semibold mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Mockup */}
                    <StepMockup type={step.mockupType} />

                    {/* Details (show on hover) */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-magenta flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Euro className="w-4 h-4" />
                          <span>{step.cost}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gray-200">
                    <motion.div
                      className="w-full bg-gradient-to-b from-magenta to-magenta-light"
                      initial={{ height: '0%' }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                )}

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-magenta to-magenta-light flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-magenta text-white flex items-center justify-center text-xs font-heading font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-heading font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-magenta font-heading font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>

                  <StepMockup type={step.mockupType} />

                  <div className="mt-4 space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-magenta flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Euro className="w-3 h-3" />
                      <span>{step.cost}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Bereit für den ersten Schritt?
          </p>
          <button
            onClick={() => (window.location.href = '#kontakt')}
            className="px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            style={{ boxShadow: '0 0 30px rgba(249, 0, 147, 0.2)' }}
          >
            Kostenloses Erstgespräch vereinbaren
          </button>
        </motion.div>
      </div>
    </section>
  );
}
