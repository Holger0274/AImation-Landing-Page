'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, FileText, Rocket, Headphones, CheckCircle, Clock, Euro, Search } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Static config (numbers, icons, mockup types) — text comes from translations
const stepsConfig = [
  { id: 'erstgespraech', number: '1', icon: Calendar, mockupType: 'video-call' },
  { id: 'analyse', number: '2', icon: Search, mockupType: 'analysis' },
  { id: 'konzept', number: '3', icon: FileText, mockupType: 'proposal' },
  { id: 'umsetzung', number: '4', icon: Rocket, mockupType: 'implementation' },
  { id: 'begleitung', number: '5', icon: Headphones, mockupType: 'support' },
] as const;

// Process Step Mockup Component
function StepMockup({ type }: { type: string }) {
  const mockups: Record<string, { icon: any; color: string; imageUrl: string; imageAlt: string }> = {
    'video-call': {
      icon: Calendar,
      color: '#60AFFF',
      imageUrl: '/images/process-step-1-erstgespraech.png',
      imageAlt: 'Erstgespräch - Professionelles Video-Call Setup',
    },
    'analysis': {
      icon: Search,
      color: '#60AFFF',
      imageUrl: '/images/process-step-2-analyse.png',
      imageAlt: 'KI-Landkarte - Workshop und priorisierte Use Cases',
    },
    'proposal': {
      icon: FileText,
      color: '#f90093',
      imageUrl: '/images/process-step-3-konzept.png',
      imageAlt: 'Pilot - Klar definiertes Projektergebnis',
    },
    'implementation': {
      icon: Rocket,
      color: '#ff4ecd',
      imageUrl: '/images/process-step-4-umsetzung.png',
      imageAlt: 'Umsetzung - Agile Development Workspace',
    },
    'support': {
      icon: Headphones,
      color: '#60AFFF',
      imageUrl: '/images/process-step-5-begleitung.png',
      imageAlt: 'Begleitung - Langfristige Partnerschaft',
    },
  };

  const mockup = mockups[type] || mockups['video-call'];
  const Icon = mockup.icon;

  return (
    <div className="relative w-full h-36 bg-white overflow-hidden group transition-all">
      {/* Background Icon - subtle */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24" style={{ color: mockup.color }} />
      </div>

      {/* Professional Image - Fixed Height for Alignment */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={mockup.imageUrl}
          alt={mockup.imageAlt}
          fill
          className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useTranslations('process');

  const steps = stepsConfig.map((cfg) => ({
    number: cfg.number,
    icon: cfg.icon,
    mockupType: cfg.mockupType,
    title: t(`steps.${cfg.id}.title`),
    subtitle: t(`steps.${cfg.id}.subtitle`),
    description: t(`steps.${cfg.id}.description`),
    details: t.raw(`steps.${cfg.id}.details`) as string[],
    duration: t(`steps.${cfg.id}.duration`),
    cost: t(`steps.${cfg.id}.cost`),
  }));

  return (
    <section
      id="prozess"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
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
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            {t('headline')} <span className="gradient-text">{t('headlineHighlight')}</span> {t('headlineEnd')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>
            {t('subline')}
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
          <div className="grid grid-cols-5 gap-6 items-stretch">
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
                  className="relative flex flex-col"
                >
                  {/* Icon Circle */}
                  <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <div
                      className={`
                        absolute inset-0 rounded-full transition-all duration-300
                        ${isActive
                          ? 'bg-gradient-to-r from-magenta to-magenta-light scale-110'
                          : 'bg-white border-2 border-gray-200'
                        }
                      `}
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

                  {/* Content Card - feste Höhe, kein Layout-Shift */}
                  <div
                    className={`
                      flex-1 flex flex-col bg-white rounded-2xl border-2 transition-colors duration-300 overflow-hidden
                      ${isActive
                        ? 'border-magenta shadow-lg'
                        : 'border-gray-200'
                      }
                    `}
                  >
                    {/* Text Content */}
                    <div className="p-6 pb-4">
                      <h3 className="font-heading font-bold mb-2 text-[#071013]" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
                        {step.title}
                      </h3>
                      <p className="text-magenta font-heading font-semibold mb-3 line-clamp-1" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed line-clamp-4" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Mockup */}
                    <div className="px-4 pb-4">
                      <StepMockup type={step.mockupType} />
                    </div>

                    {/* Details - immer sichtbar, kein Aufklappen */}
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex-1 flex flex-col justify-between">
                      <div className="space-y-2 pt-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-magenta flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Euro className="w-4 h-4" />
                          <span>{step.cost}</span>
                        </div>
                      </div>
                    </div>
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
                  <h3 className="font-heading font-bold mb-1" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>{step.title}</h3>
                  <p className="text-magenta font-heading font-semibold mb-3" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4" style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.875rem)' }}>{step.description}</p>

                  {/* Image with consistent height */}
                  <StepMockup type={step.mockupType} />

                  {/* Details - always visible on mobile, consistent 3 items */}
                  <div className="mt-4 space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-magenta flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Info */}
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
            {t('ctaText')}
          </p>
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            style={{ boxShadow: '0 0 30px rgba(249, 0, 147, 0.2)' }}
          >
            {t('ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
