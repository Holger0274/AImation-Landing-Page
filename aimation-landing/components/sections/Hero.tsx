'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { cn } from '@/lib/utils';
import { Check, Users, Award, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LeadFormModal from '@/components/LeadFormModal';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('hero');

  // Final approved content from AI-mation_Hero-Headline.md
  const headlineStart = t('headlineStart');
  const headlineHighlight = t('headlineHighlight');
  const headlineEnd = t('headlineEnd');

  const subtitle = t('subline');

  // Trust Elements with animated counters
  const trustElements = [
    {
      icon: <Award className="h-5 w-5 text-magenta" />,
      target: 20,
      suffix: '+',
      label: t('trust1Label'),
      hasCounter: true,
    },
    {
      icon: <Users className="h-5 w-5 text-magenta" />,
      target: 18000,
      suffix: '+',
      label: t('trust2Label'),
      hasCounter: true,
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-magenta" />,
      value: t('trust3Value'),
      label: t('trust3Label'),
      hasCounter: false,
    },
  ];

  // Custom generated images with AI.mation brand colors
  const images = [
    '/images/hero-engineering-desk.jpg', // Engineering desk with magenta highlights — main hero image
    '/images/hero-project-room-kanban.jpg', // Project room kanban board
    '/images/hero-laptop-dashboard.jpg', // Laptop with magenta dashboard + engineering parts
  ];

  return (
    <section className="w-full overflow-hidden bg-warm-white pt-24 pb-12 sm:py-24 min-h-screen flex items-center max-w-full">
      <div className="container mx-auto grid grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 max-w-7xl">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overline Badge */}
          <motion.div variants={itemVariants} className="mb-6 mt-4 sm:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magenta/10 backdrop-blur-sm border border-magenta/20">
              <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
              <span className="text-sm font-heading font-semibold text-[#071013]">
                {t('badge')}
              </span>
            </div>
          </motion.div>

          {/* Headline with Magenta Highlight */}
          <motion.h1
            className="font-bold tracking-tight font-heading text-[#071013] leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}
            variants={itemVariants}
          >
            {headlineStart}
            <span className="text-magenta">
              {headlineHighlight}
            </span>
            {headlineEnd}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-md text-gray-600 font-body leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold hover:shadow-[0_0_30px_rgba(249,0,147,0.4)] transition-all duration-300"
            >
              {t('cta')}
            </Button>
          </motion.div>

          {/* CTA Microcopy */}
          <motion.p
            className="mt-2 text-sm text-gray-500 font-body text-center lg:text-left"
            variants={itemVariants}
          >
            {t('ctaMicrocopy')}
          </motion.p>

          {/* Trust Elements (Stats replacement) with Animated Counters */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 lg:justify-start max-w-2xl"
            variants={itemVariants}
          >
            {trustElements.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-0">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-magenta/10 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[#071013] font-heading" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
                    {item.hasCounter ? (
                      <AnimatedCounter
                        target={item.target!}
                        suffix={item.suffix}
                        duration={2.5}
                        separator={true}
                        delay={0.5 + index * 0.2}
                      />
                    ) : (
                      item.value
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 font-body break-words leading-tight">{item.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage — desktop only */}
        {/* Container starts at same level as left column (items-start on grid),
            so top-0 of container = top of badge. Bild 1 gets a negative marginTop
            to align its top edge with the H1 (~48px below badge+margin). */}
        <motion.div
          className="relative w-full max-w-full hidden lg:block"
          style={{ height: '580px', marginTop: '-150px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Deko-Kreis: oben links, teilweise hinter Bild 1 (z-index 0) */}
          <motion.div
            className="absolute rounded-full bg-magenta/15"
            style={{
              top: '0px',
              left: '-16px',
              width: '120px',
              height: '120px',
              zIndex: 0,
            }}
            variants={floatingVariants}
            animate="animate"
          />

          {/* Bild 1: Konstruktionszeichnung — Leitbild, oben rechts, -2deg */}
          {/* top: 0 → Oberkante des Containers = Oberkante Badge.
              Wir verschieben mit marginTop auf den Container, nicht hier. */}
          <motion.div
            className="absolute overflow-hidden"
            style={{
              top: '0px',
              right: '0px',
              width: '460px',
              height: '345px',
              borderRadius: '20px',
              border: '1px solid rgba(7,16,19,0.08)',
              boxShadow: '0 20px 50px rgba(7,16,19,0.10)',
              transform: 'rotate(-2deg)',
              zIndex: 2,
            }}
            variants={imageVariants}
          >
            <Image
              src={images[0]}
              alt="Hand prüft technische Konstruktionszeichnung mit markierten Prüfstellen"
              fill
              sizes="460px"
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* Bild 3: Laptop Dashboard — unten rechts, überlappt Bild 1 um 32px, +2deg */}
          {/* Bild 1 endet bei top(0) + height(345) = 345px.
              Überlappung 32px → Bild 3 top = 345 - 32 = 313px */}
          <motion.div
            className="absolute overflow-hidden"
            style={{
              top: '313px',
              right: '0px',
              width: '340px',
              height: '255px',
              borderRadius: '20px',
              border: '1px solid rgba(7,16,19,0.08)',
              boxShadow: '0 20px 50px rgba(7,16,19,0.10)',
              transform: 'rotate(2deg)',
              zIndex: 3,
            }}
            variants={imageVariants}
          >
            <Image
              src={images[2]}
              alt="Laptop mit Auswertungs-Dashboard neben gefrästem Bauteil auf dem Schreibtisch"
              fill
              sizes="340px"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Bild 2: Projektboard — links, Unterkante = Unterkante Bild 3, gerade */}
          {/* Bild 3 Unterkante: 313 + 255 = 568px. Bild 2 Höhe: 255px → top = 313px */}
          <motion.div
            className="absolute overflow-hidden"
            style={{
              top: '313px',
              right: '364px',
              width: '310px',
              height: '255px',
              borderRadius: '20px',
              border: '1px solid rgba(7,16,19,0.08)',
              boxShadow: '0 20px 50px rgba(7,16,19,0.10)',
              zIndex: 2,
            }}
            variants={imageVariants}
          >
            <Image
              src={images[1]}
              alt="Ingenieur arbeitet am Projektboard mit Statuskarten im Projektraum"
              fill
              sizes="310px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Mobile: single image */}
        <motion.div
          className="relative w-full lg:hidden overflow-hidden"
          style={{
            height: '260px',
            borderRadius: '20px',
            border: '1px solid rgba(7,16,19,0.08)',
            boxShadow: '0 20px 50px rgba(7,16,19,0.10)',
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={images[0]}
            alt="Hand prüft technische Konstruktionszeichnung mit markierten Prüfstellen"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </div>

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
