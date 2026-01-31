'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Schulungen',
    subtitle: 'Wissen vermitteln',
    description:
      'Von KI-Grundlagen bis zu fortgeschrittenen Techniken. Ihr Team lernt, KI-Tools souverän einzusetzen.',
    features: [
      'Generative KI verstehen',
      'Microsoft Copilot & Tools',
      'Prompt Engineering',
      'Multi-Agent-Systeme',
      'Vibe Coding',
    ],
    detail: '3 Ebenen: Einstieg, Anwendung, Fortgeschritten',
  },
  {
    icon: Lightbulb,
    title: 'Beratung',
    subtitle: 'Denken, planen, entscheiden',
    description:
      'Wo stehen Sie? Wo wollen Sie hin? Wir entwickeln gemeinsam die Strategie für Ihre KI-Reise.',
    features: [
      'AI Readiness Assessment',
      'Use Case Identifikation',
      'Strategie & Roadmap',
      'ROI & Business Case',
      'Change Management',
    ],
    detail: '3 Phasen: Analyse, Strategie, Begleitung',
  },
  {
    icon: Zap,
    title: 'Umsetzung',
    subtitle: 'Bauen, implementieren, betreiben',
    description:
      'Von Workflows über Wissenssysteme bis zu intelligenten Assistenten – wir setzen Lösungen um, die funktionieren.',
    features: [
      'Workflow-Automatisierung',
      'RAG-Systeme & Chatbots',
      'Intelligente Agenten',
      'Dokumenten-Workflows',
      'Knowledge Management',
    ],
    detail: '4 Lösungswelten: FLOW, KNOW, THINK, WORK',
  },
];

function FlipCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-[500px] perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-lightblue/10 flex items-center justify-center mb-6">
              <service.icon className="w-6 h-6 text-lightblue" />
            </div>

            <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
            <p className="text-magenta font-heading font-semibold mb-4">
              {service.subtitle}
            </p>
            <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

            <div className="text-sm text-gray-500 italic mb-4">{service.detail}</div>

            <div className="text-magenta font-heading font-semibold flex items-center gap-2 group cursor-pointer">
              Mehr erfahren
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex flex-col h-full text-white">
            <div className="w-12 h-12 rounded-xl bg-magenta/20 flex items-center justify-center mb-6 glow-magenta">
              <service.icon className="w-6 h-6 text-magenta text-glow-magenta" />
            </div>

            <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
              {service.title}
            </h3>

            <ul className="space-y-3 mb-6 flex-grow">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-magenta mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button className="w-full py-3 bg-gradient-to-r from-magenta to-magenta-light rounded-lg font-heading font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all glow-magenta">
              Jetzt anfragen →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Die 3 <span className="gradient-text">Säulen</span> unserer Arbeit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alle Bausteine sind frei kombinierbar – je nach Ihrem Bedarf
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FlipCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
