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

const float1 = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0 },
  },
};
const float2 = {
  animate: {
    y: [0, -7, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.2 },
  },
};
const float3 = {
  animate: {
    y: [0, -9, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.6 },
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
    <section className="w-full overflow-hidden bg-warm-white pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-screen flex flex-col justify-center max-w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Zweispaltiges Grid: nur Text oben + Bilder — gleiche Höhe */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Column: Badge + H1 + Subline + CTA */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Overline Badge */}
            <motion.div variants={itemVariants} className="mb-6">
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
          </motion.div>

        {/* Right Column: Scattered photo stack — desktop only */}
        <motion.div
          className="relative hidden lg:block w-full"
          style={{ height: '420px', alignSelf: 'flex-start', marginTop: '40px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Magenta Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '15%',
              left: '20%',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(249,0,147,0.13) 0%, transparent 70%)',
              filter: 'blur(50px)',
              zIndex: 0,
            }}
          />

          {/* Bild 1: Konstruktionszeichnung — klein, oben links, stark geneigt */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.06, zIndex: 20, transition: { duration: 0.2 } }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '240px',
              height: '160px',
              borderRadius: '14px',
              border: '1px solid rgba(7,16,19,0.09)',
              boxShadow: '0 12px 40px rgba(7,16,19,0.16)',
              overflow: 'hidden',
              transform: 'rotate(-6deg)',
              zIndex: 2,
            }}
          >
            <motion.div className="w-full h-full" variants={float1} animate="animate">
              <Image
                src={images[0]}
                alt="Hand prüft technische Konstruktionszeichnung mit markierten Prüfstellen"
                fill
                sizes="240px"
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Bild 3: Laptop — mittel, oben rechts, nach rechts geneigt, stark überlappend */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.06, zIndex: 20, transition: { duration: 0.2 } }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '200px',
              width: '300px',
              height: '200px',
              borderRadius: '14px',
              border: '1px solid rgba(7,16,19,0.09)',
              boxShadow: '0 16px 50px rgba(7,16,19,0.18)',
              overflow: 'hidden',
              transform: 'rotate(5deg)',
              zIndex: 4,
            }}
          >
            <motion.div className="w-full h-full" variants={float3} animate="animate">
              <Image
                src={images[2]}
                alt="Laptop mit Auswertungs-Dashboard neben gefrästem Bauteil auf dem Schreibtisch"
                fill
                sizes="300px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Bild 2: Projektboard — groß, unten, leicht geneigt, überlappt beide stark */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.04, zIndex: 20, transition: { duration: 0.2 } }}
            style={{
              position: 'absolute',
              top: '160px',
              left: '60px',
              width: '380px',
              height: '250px',
              borderRadius: '14px',
              border: '1px solid rgba(7,16,19,0.09)',
              boxShadow: '0 24px 64px rgba(7,16,19,0.20)',
              overflow: 'hidden',
              transform: 'rotate(-2.5deg)',
              zIndex: 5,
            }}
          >
            <motion.div className="w-full h-full" variants={float2} animate="animate">
              <Image
                src={images[1]}
                alt="Ingenieur arbeitet am Projektboard mit Statuskarten im Projektraum"
                fill
                sizes="380px"
                className="object-cover"
                priority
              />
            </motion.div>
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

        </div>{/* end grid */}

        {/* Subline + CTA — volle Breite, linksbündig */}
        <motion.div
          className="mt-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="max-w-2xl text-gray-600 font-body leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start"
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

          <motion.p
            className="mt-2 text-sm text-gray-500 font-body"
            variants={itemVariants}
          >
            {t('ctaMicrocopy')}
          </motion.p>
        </motion.div>

        {/* Trust Elements — volle Breite unter dem Grid */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6 lg:gap-10 lg:justify-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trustElements.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-magenta/10 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-[#071013] font-heading text-lg">
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
                <p className="text-sm text-gray-600 font-body">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
