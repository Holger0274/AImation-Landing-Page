'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Lightbulb, Zap, ArrowRight, Code, Users, Database, Mail, FileText, TrendingUp } from 'lucide-react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { throttle } from '@/lib/utils/throttle';

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
    gradientFrom: '#f90093',
    gradientTo: '#ff4ecd',
    patternOpacity: 0.08,
    useCases: [
      {
        title: 'Workshop: Prompt Engineering für Marketing-Teams',
        description: '1-Tages-Workshop für Marketing-Teams: Von den Grundlagen bis zu fortgeschrittenen Prompt-Techniken. Teilnehmer lernen, ChatGPT, Claude und andere KI-Tools effektiv für Content-Erstellung, Recherche und Kampagnen einzusetzen.',
        result: '80% der Teilnehmer nutzen KI-Tools täglich im Arbeitsalltag',
        mockupType: 'training-workshop',
      },
      {
        title: 'Vibe Coding Workshop: Landing Page in 2 Stunden bauen',
        description: 'Praktischer Workshop für Product Owner und Innovation Labs: Teilnehmer erstellen mit Claude Code und Lovable eine funktionierende Landing Page – ohne klassische Programmierkenntnisse. Von der Idee zum Live-Deployment.',
        result: '100% der Teilnehmer verlassen den Workshop mit eigener Live-Seite',
        mockupType: 'vibe-coding',
      },
    ],
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
    gradientFrom: '#f90093',
    gradientTo: '#ff4ecd',
    patternOpacity: 0.06,
    useCases: [
      {
        title: 'AI Readiness Assessment für mittelständischen Maschinenbauer',
        description: '2-Tages-Workshop mit Geschäftsführung und Führungskräften: IST-Analyse der Technik, Prozesse, Daten und Menschen. Potenzialidentifikation über alle Abteilungen. Entwicklung einer konkreten Roadmap mit priorisierten Quick Wins.',
        result: '12 Use Cases identifiziert, 3 Quick Wins in Q1 umgesetzt',
        mockupType: 'readiness-assessment',
      },
      {
        title: 'Use Case Workshop: Produktionsoptimierung für Zulieferer',
        description: 'Workshop mit Produktions- und Prozessverantwortlichen: Gemeinsam konkrete Automatisierungs-Potenziale identifizieren, nach Impact und Aufwand bewerten. ROI-Kalkulation für Top-Use-Cases. Priorisierung und Nächste-Schritte-Plan.',
        result: 'ROI-Kalkulation zeigt 150k€ Ersparnis im ersten Jahr',
        mockupType: 'use-case-workshop',
      },
    ],
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
    gradientFrom: '#f90093',
    gradientTo: '#ff4ecd',
    patternOpacity: 0.07,
    useCases: [
      {
        title: 'RAG-Chatbot für technische Dokumentation (Maschinenbau)',
        description: 'Umsetzung eines RAG-Systems für 5000+ PDF-Seiten technischer Dokumentation: Vektorisierung mit Pinecone, LLM-Integration für semantische Suche, Chat-Interface für Service-Techniker. Antworten mit Quellenangaben für Nachvollziehbarkeit.',
        result: '70% weniger Support-Anfragen an Experten, 95% Antwort-Genauigkeit',
        mockupType: 'rag-chatbot',
      },
      {
        title: 'E-Mail-Automatisierung mit n8n für Vertriebsteam',
        description: 'Intelligenter E-Mail-Workflow mit n8n: Eingehende E-Mails werden automatisch analysiert, kategorisiert (Anfrage, Beschwerde, Bestellung), mit CRM-Daten angereichert und an zuständige Mitarbeiter geroutet. Tickets werden automatisch erstellt.',
        result: '2 Stunden pro Tag gespart, keine E-Mail geht mehr verloren',
        mockupType: 'email-automation',
      },
    ],
  },
];

// Use Case Mockup Component - PROFESSIONAL DASHBOARD DESIGN
function UseCaseMockup({ type }: { type: string }) {
  const mockupConfig: Record<string, {
    icon: any;
    iconColor: string;
    sections: { title: string; items: string[] }[]
  }> = {
    'training-workshop': {
      icon: Users,
      iconColor: '#f90093',
      sections: [
        { title: 'Agenda', items: ['Grundlagen & Konzepte', 'Tool-Einführung', 'Hands-On Übungen'] },
        { title: 'Methoden', items: ['Chain-of-Thought', 'Few-Shot Learning', 'Prompt-Templates'] },
      ],
    },
    'vibe-coding': {
      icon: Code,
      iconColor: '#60AFFF',
      sections: [
        { title: 'Technologie', items: ['Claude Code', 'Next.js', 'Tailwind CSS'] },
        { title: 'Ergebnis', items: ['Landing Page (live)', 'Deployment (Vercel)', 'Source Code'] },
      ],
    },
    'readiness-assessment': {
      icon: TrendingUp,
      iconColor: '#f90093',
      sections: [
        { title: 'Phase 1: Analyse', items: ['IST-Zustand erfassen', 'Potenziale identifizieren', 'Quick Wins finden'] },
        { title: 'Phase 2: Roadmap', items: ['Use Cases priorisieren', 'Timeline entwickeln', 'Ressourcen planen'] },
      ],
    },
    'use-case-workshop': {
      icon: Lightbulb,
      iconColor: '#60AFFF',
      sections: [
        { title: 'Workshop-Ablauf', items: ['Problem-Analyse', 'Lösungs-Brainstorming', 'Machbarkeits-Check'] },
        { title: 'Output', items: ['Priorisierte Use Cases', 'ROI-Schätzung', 'Nächste Schritte'] },
      ],
    },
    'rag-chatbot': {
      icon: Database,
      iconColor: '#7209B7',
      sections: [
        { title: 'Technologie', items: ['Vektordatenbank (Pinecone)', 'LLM Integration', 'Chat Interface'] },
        { title: 'Funktionen', items: ['Dokumenten-Upload', 'Semantische Suche', 'Quellenangaben'] },
      ],
    },
    'email-automation': {
      icon: Mail,
      iconColor: '#0077B6',
      sections: [
        { title: 'Workflow', items: ['E-Mail Empfang', 'KI-Analyse', 'Auto-Kategorisierung'] },
        { title: 'Actions', items: ['Smart Routing', 'Ticket erstellen', 'Auto-Antwort'] },
      ],
    },
  };

  const config = mockupConfig[type] || mockupConfig['training-workshop'];
  const Icon = config.icon;

  return (
    <div className="relative w-full h-full rounded-2xl bg-white border-2 border-gray-100 p-6 overflow-hidden shadow-lg">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${config.iconColor}, transparent 70%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon Header */}
        <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-100">
          <div
            className="p-3 rounded-xl"
            style={{
              backgroundColor: `${config.iconColor}15`,
            }}
          >
            <Icon className="w-7 h-7" style={{ color: config.iconColor }} />
          </div>
          <div className="flex-1">
            <div className="flex gap-2">
              <div className="h-2.5 bg-gray-200 rounded-full w-32" />
              <div className="h-2.5 bg-gray-100 rounded-full w-20" />
            </div>
          </div>
        </div>

        {/* Sections */}
        {config.sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.15 }}
            className="space-y-3"
          >
            {/* Section Title */}
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: config.iconColor }}
              />
              <h4 className="font-heading font-bold text-[#071013] text-sm">
                {section.title}
              </h4>
            </div>

            {/* Section Items */}
            <div className="space-y-2 pl-3.5">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <div className="w-5 h-5 rounded border-2 border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-sm bg-gray-300" />
                  </div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle corner accent */}
      <div
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-5"
        style={{ backgroundColor: config.iconColor }}
      />
    </div>
  );
}

function FlipCard({ service, index, onSelect, isSelected }: { service: typeof services[0]; index: number; onSelect: () => void; isSelected: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Performance & Accessibility hooks
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Mouse tracking - UNTHROTTLED FOR DEBUGGING
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 50 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : index * 0.2,
      }}
      className="perspective-1000"
      style={{ height: 'clamp(450px, 60vw, 500px)', minHeight: '450px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => !isMobile && setIsFlipped(true)}
      onHoverEnd={() => !isMobile && setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          rotateX: !isFlipped && !isMobile && !reducedMotion ? mousePosition.y * -15 : 0,
          rotateZ: !isFlipped && !isMobile && !reducedMotion ? mousePosition.x * 10 : 0,
        }}
        transition={{ duration: reducedMotion ? 0 : 0.3, ease: 'easeOut' }}
        style={{
          transformStyle: 'preserve-3d',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      >
        {/* Front Side - Glassmorphism - ENHANCED */}
        <div
          className="absolute inset-0 rounded-2xl p-8 overflow-hidden group"
          style={{
            backfaceVisibility: 'hidden',
            background: 'rgba(250, 249, 247, 0.7)', // MORE TRANSPARENT (was 0.85)
            backdropFilter: 'blur(20px)', // STRONGER BLUR (was 10px)
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.5)', // MORE VISIBLE BORDER
            boxShadow: `
              0 12px 40px 0 rgba(7, 16, 19, 0.15),
              0 4px 12px 0 rgba(7, 16, 19, 0.08),
              inset 0 2px 0 0 rgba(255, 255, 255, 0.9)
            `, // STRONGER SHADOWS
          }}
        >
          {/* Enhanced Gradient Background - ALWAYS VISIBLE */}
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500" // MUCH MORE VISIBLE
            style={{
              background: `radial-gradient(circle at 50% 50%, ${service.gradientFrom}40 0%, transparent 70%)`, // 40 = 25% opacity
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col h-full z-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${service.gradientFrom}15, ${service.gradientTo}10)`,
                boxShadow: `0 4px 16px ${service.gradientFrom}20`,
              }}
            >
              <service.icon
                className="w-6 h-6 transition-colors duration-300"
                style={{ color: service.gradientFrom }}
              />
            </div>

            <h3 className="font-heading font-bold mb-2 text-[#071013]" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
              {service.title}
            </h3>
            <p
              className="font-heading font-semibold mb-4"
              style={{
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {service.subtitle}
            </p>
            <p className="text-gray-600 mb-6 flex-grow" style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}>{service.description}</p>

            <div className="text-gray-500 italic mb-4" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>{service.detail}</div>

            <div
              className="font-heading font-semibold flex items-center gap-2 group/link cursor-pointer"
              style={{ color: service.gradientFrom }}
            >
              Mehr erfahren
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back Side - Enhanced Dark */}
        <div
          className="absolute inset-0 rounded-2xl p-8"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #071013 0%, #0a1419 100%)',
            boxShadow: `
              0 20px 60px 0 rgba(7, 16, 19, 0.4),
              0 0 80px 0 ${service.gradientFrom}40,
              inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          {/* Animated Glow Background - Only when flipped and motion allowed */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-40"
            animate={
              isFlipped && !reducedMotion
                ? {
                    background: [
                      `radial-gradient(circle at 30% 30%, ${service.gradientFrom}20 0%, transparent 70%)`,
                      `radial-gradient(circle at 70% 70%, ${service.gradientTo}20 0%, transparent 70%)`,
                      `radial-gradient(circle at 30% 30%, ${service.gradientFrom}20 0%, transparent 70%)`,
                    ],
                  }
                : {
                    background: `radial-gradient(circle at 30% 30%, ${service.gradientFrom}20 0%, transparent 70%)`,
                  }
            }
            transition={{
              duration: reducedMotion ? 0 : 8,
              repeat: isFlipped && !reducedMotion ? Infinity : 0,
              ease: 'linear',
            }}
          />

          <div className="relative flex flex-col h-full text-white z-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{
                background: `${service.gradientFrom}20`,
                boxShadow: `0 0 30px ${service.gradientFrom}60`,
              }}
            >
              <service.icon
                className="w-6 h-6"
                style={{
                  color: service.gradientFrom,
                  filter: `drop-shadow(0 0 8px ${service.gradientFrom})`,
                }}
              />
            </div>

            <h3
              className="font-heading font-bold mb-4"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 20px ${service.gradientFrom}80)`,
              }}
            >
              {service.title}
            </h3>

            <ul className="space-y-3 mb-6 flex-grow">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={
                    reducedMotion
                      ? {}
                      : isFlipped
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: reducedMotion ? 0 : i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{
                      backgroundColor: service.gradientFrom,
                      boxShadow: `0 0 6px ${service.gradientFrom}`,
                    }}
                  />
                  <span className="text-gray-300" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={onSelect}
              className="w-full py-3 rounded-lg font-heading font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              style={{
                background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                boxShadow: `0 0 30px ${service.gradientFrom}40`,
              }}
            >
              Use Cases ansehen →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const reducedMotion = useReducedMotion();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="leistungen" className="relative py-20 md:py-32 bg-[#faf9f7] overflow-hidden">
      {/* Gradient Mesh Background for Glassmorphism Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 0, 147, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(96, 175, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 78, 205, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            Die 3 <span className="gradient-text">Säulen</span> unserer Arbeit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>
            Alle Bausteine sind frei kombinierbar – je nach Ihrem Bedarf
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <FlipCard
              key={service.title}
              service={service}
              index={index}
              onSelect={() => setSelectedService(index)}
              isSelected={selectedService === index}
            />
          ))}
        </div>

        {/* Use Case Showcase */}
        <AnimatePresence mode="wait">
          {selectedService !== null && (
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 50, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 50, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-br from-[#071013] to-[#0a1419] rounded-3xl p-8 md:p-12 border-2 border-magenta/30"
                style={{ boxShadow: '0 0 60px rgba(249, 0, 147, 0.2)' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-magenta font-heading font-bold mb-2" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                      PRAXIS-BEISPIELE
                    </p>
                    <h3 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                      {services[selectedService].title} in der Praxis
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white/50 hover:text-white transition-colors text-sm font-heading"
                  >
                    Schließen ✕
                  </button>
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {services[selectedService].useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="space-y-4"
                    >
                      {/* Mockup */}
                      <div className="h-64 rounded-xl overflow-hidden">
                        <UseCaseMockup type={useCase.mockupType} />
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <h4 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
                          {useCase.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>
                          {useCase.description}
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-magenta/20 rounded-lg border border-magenta/30">
                          <span className="text-sm font-heading font-bold text-magenta">
                            ✓ {useCase.result}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                  <button
                    onClick={() => (window.location.href = '#kontakt')}
                    className="px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    style={{ boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)' }}
                  >
                    Ähnliches Projekt besprechen
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
