'use client';

import { useState, useCallback, useMemo } from 'react';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Lightbulb, Zap, ArrowRight, Code, Users, Database, Mail, FileText, TrendingUp } from 'lucide-react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { throttle } from '@/lib/utils/throttle';
import { useTranslations } from 'next-intl';

type ServiceData = {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  backFeatures?: string[];
  detail: string;
  gradientFrom: string;
  gradientTo: string;
  patternOpacity: number;
  href: string;
  useCases: { title: string; description: string; result: string; mockupType: string }[];
};

// Static config (icons, colors, links, mockup types) — text comes from translations
const servicesConfig = [
  {
    id: 'schulungen',
    icon: GraduationCap,
    gradientFrom: '#f90093',
    gradientTo: '#ff4ecd',
    patternOpacity: 0.08,
    href: '/ki-schulungen-mittelstand',
    mockupTypes: ['training-workshop', 'automation-workshop'],
  },
  {
    id: 'beratung',
    icon: Lightbulb,
    gradientFrom: '#f90093',
    gradientTo: '#ff4ecd',
    patternOpacity: 0.06,
    href: '/ki-beratung-kmu',
    mockupTypes: ['ai-audit', 'tool-selection'],
  },
  {
    id: 'umsetzung',
    icon: Zap,
    gradientFrom: '#f90093',
    gradientTo: '#ff4ecd',
    patternOpacity: 0.07,
    href: '/ki-automatisierung-mittelstand',
    mockupTypes: ['rag-chatbot', 'email-automation'],
  },
] as const;

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
    'automation-workshop': {
      icon: Zap,
      iconColor: '#60AFFF',
      sections: [
        { title: 'Klassische Automatisierung', items: ['Regelbasierte Workflows', 'If-Then-Logik', 'API-Integrationen'] },
        { title: 'KI-Automatisierung', items: ['Intelligente Entscheidungen', 'Natürliche Sprache', 'Multi-Agent-Systeme'] },
      ],
    },
    'ai-audit': {
      icon: FileText,
      iconColor: '#f90093',
      sections: [
        { title: 'Ist-Aufnahme', items: ['12 Tools im Einsatz erfasst', '8 Teams befragt', 'Schatten-KI aufgedeckt'] },
        { title: 'Risikobewertung', items: ['DSGVO-Verstöße identifiziert', 'Lizenzkosten analysiert', 'Konsolidierung geplant'] },
      ],
    },
    'tool-selection': {
      icon: TrendingUp,
      iconColor: '#60AFFF',
      sections: [
        { title: 'Requirements', items: ['CRM-Integration erforderlich', 'DSGVO-konform', 'Budget max. 5k€/Monat'] },
        { title: 'Anbieter-Vergleich', items: ['Microsoft Copilot (8/10)', 'Google Workspace AI (7/10)', 'OpenAI API (6/10)'] },
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
          <div className="flex-1 space-y-2">
            <div className="flex gap-2">
              <div className="h-3 bg-gray-200 rounded-full w-40" />
              <div className="h-3 bg-gray-100 rounded-full w-24" />
            </div>
            <div className="h-2 bg-gray-100 rounded-full w-32" />
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

function FlipCard({ service, index, onSelect, labels }: { service: ServiceData; index: number; onSelect: () => void; labels: { moreInfo: string; flipHintDesktop: string; flipHintMobile: string; useCasesButton: string } }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Performance & Accessibility hooks
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const handleMouseMove = useMemo(
    () => throttle((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    }, 16),
    []
  );

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
      style={{
        height: 'clamp(460px, 55vw, 500px)',
        isolation: 'isolate',
        willChange: 'transform',
        contain: 'layout style',
      }}
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
          className="absolute inset-0 rounded-2xl p-6 md:p-8 overflow-hidden group"
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
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 group-hover:scale-110"
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
            <p className="text-gray-600 mb-4 md:mb-6 flex-grow" style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}>{service.description}</p>

            <div className="text-gray-500 italic mb-3 md:mb-4" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>{service.detail}</div>

            <div className="flex items-center justify-between">
              <Link
                href={service.href}
                className="font-heading font-semibold flex items-center gap-2 group/link"
                style={{ color: service.gradientFrom }}
              >
                {labels.moreInfo}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-gray-400 hidden lg:inline">{labels.flipHintDesktop}</span>
              <span className="text-xs text-gray-400 lg:hidden">{labels.flipHintMobile}</span>
            </div>
          </div>
        </div>

        {/* Back Side - Enhanced Dark */}
        <div
          className="absolute inset-0 rounded-2xl p-6 md:p-8"
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
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6"
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
              className="font-heading font-bold mb-3 md:mb-4"
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

            <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
              {(service.backFeatures ?? service.features).map((feature, i) => (
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
              className="w-full text-center py-3 font-heading font-semibold cursor-pointer transition-all"
              style={{
                color: service.gradientFrom,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'none'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'underline'}
            >
              {labels.useCasesButton}
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
  const t = useTranslations('services');

  const services: ServiceData[] = servicesConfig.map((cfg) => {
    const rawItem = t.raw(`items.${cfg.id}`) as Record<string, unknown>;
    return {
      icon: cfg.icon,
      gradientFrom: cfg.gradientFrom,
      gradientTo: cfg.gradientTo,
      patternOpacity: cfg.patternOpacity,
      href: cfg.href,
      title: t(`items.${cfg.id}.title`),
      subtitle: t(`items.${cfg.id}.subtitle`),
      description: t(`items.${cfg.id}.description`),
      features: rawItem.features as string[],
      ...(rawItem.backFeatures ? { backFeatures: rawItem.backFeatures as string[] } : {}),
      detail: t(`items.${cfg.id}.detail`),
      useCases: (t.raw(`useCases.${cfg.id}`) as { title: string; description: string; result: string }[]).map(
        (uc, i) => ({ ...uc, mockupType: cfg.mockupTypes[i] })
      ),
    };
  });

  const flipLabels = {
    moreInfo: t('moreInfo'),
    flipHintDesktop: t('flipHintDesktop'),
    flipHintMobile: t('flipHintMobile'),
    useCasesButton: t('useCasesButton'),
  };

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
            {t('headline')} <span className="gradient-text">{t('headlineHighlight')}</span> {t('headlineEnd')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>
            {t('subline')}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" style={{ alignItems: 'start' }}>
          {services.map((service, index) => (
            <FlipCard
              key={service.title}
              service={service}
              index={index}
              onSelect={() => setSelectedService(index)}
              labels={flipLabels}
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
                      {t('practiceExamples')}
                    </p>
                    <h3 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                      {services[selectedService].title} {t('inPractice')}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white/50 hover:text-white transition-colors text-sm font-heading"
                  >
                    {t('close')}
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
                      className="space-y-6 md:space-y-4"
                    >
                      {/* Mockup */}
                      <div className="h-64 rounded-xl overflow-hidden mb-6 md:mb-0">
                        <UseCaseMockup type={useCase.mockupType} />
                      </div>

                      {/* Details */}
                      <div className="space-y-4 md:space-y-3">
                        <h4 className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
                          {useCase.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>
                          {useCase.description}
                        </p>
                        <div className="flex items-start gap-2 px-4 py-3 bg-magenta/20 rounded-lg border border-magenta/30">
                          <span className="font-heading font-bold text-magenta" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                            ✓ {useCase.result}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                  <a
                    href="#kontakt"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    style={{ boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)' }}
                  >
                    {t('similarProject')}
                  </a>
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
