'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp, X, Calculator } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type PainStat = {
  id: string;
  icon: typeof Clock;
  stat: string;
  title: string;
  description: string;
  subtitle?: string;
  statLabel: string;
  source: string;
  imagePath: string;
  imageAlt: string;
};

// Static config (icons + images) — text comes from translations
const compactStatsConfig = [
  { id: 'time', icon: Clock, imagePath: '/images/time-waste.webp', imageAlt: 'Gestresster Büroangestellter verschwendet Zeit mit manuellen repetitiven Aufgaben statt Wertschöpfung' },
  { id: 'cost', icon: TrendingDown, imagePath: '/images/cost-waste.webp', imageAlt: 'Finanzgrafik zeigt Kostenverschwendung durch ineffiziente manuelle Prozesse im KMU' },
  { id: 'quality', icon: AlertTriangle, imagePath: '/images/quality-issues.webp', imageAlt: 'Qualitätsprobleme und Fehler durch manuelle Dateneingabe in Unternehmensprozessen' },
  { id: 'knowledge', icon: Brain, imagePath: '/images/knowledge-loss.webp', imageAlt: 'Wissensverlust durch Mitarbeiter-Fluktuation - Fachkräftemangel im deutschen Mittelstand' },
  { id: 'chaos', icon: FileSpreadsheet, imagePath: '/images/excel-chaos.webp', imageAlt: 'Excel-Chaos und manuelle Rechnungserfassung in KMU - ineffiziente Buchhaltungsprozesse' },
  { id: 'competition', icon: TrendingUp, imagePath: '/images/competition.webp', imageAlt: 'Wettbewerbsvorteil durch KI-Automatisierung - deutsche Unternehmen im digitalen Wettlauf' },
] as const;

const heroStatConfig = {
  id: 'waiting',
  icon: AlertTriangle,
  imagePath: '/images/waiting-competition.webp',
  imageAlt: 'Rückstand im KI-Wettbewerb - Konkurrenz automatisiert während andere warten',
} as const;

// Image Modal Component
function ImageModal({ painPoint, onClose }: { painPoint: PainStat; onClose: () => void }) {
  const t = useTranslations('painPoints');
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071013]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative max-w-4xl w-full bg-[#071013] rounded-2xl overflow-hidden border-2 border-[#f90093]/50 my-8"
        style={{ boxShadow: '0 0 60px rgba(249, 0, 147, 0.4)' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={painPoint.title}
      >
        {/* Close Button - Fixed position with safe-area support */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 sm:absolute sm:top-4 sm:right-4 z-[60] w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg"
          style={{
            // Respect safe-area insets on mobile devices (notches, etc.)
            top: 'max(1.5rem, env(safe-area-inset-top, 1.5rem))',
          }}
          aria-label={t('modalClose')}
        >
          <X className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>

        {/* Mobile: Stacked Layout | Desktop: Image with Overlay */}
        <div className="block md:hidden">
          {/* MOBILE: Stacked Layout */}
          {/* Image */}
          <div className="relative aspect-[4/3]">
            <Image
              src={painPoint.imagePath}
              alt={painPoint.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Content Below Image */}
          <div className="p-6 space-y-4">
            {/* Stat */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div
                className="font-heading font-bold text-[#f90093]"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 4rem)',
                  textShadow: '0 0 40px rgba(249, 0, 147, 0.6)'
                }}
              >
                {painPoint.stat}
              </div>
              <div className="text-white/70 font-heading font-semibold text-base">
                {painPoint.statLabel}
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-heading font-bold text-white text-xl">
                {painPoint.title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-300 text-base leading-relaxed mb-2">
                {painPoint.description}
              </p>
              <p className="text-gray-400 text-sm italic">
                {t('quellePrafix')} {painPoint.source}
              </p>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP: Image with Text Overlay */}
        <div className="hidden md:block relative aspect-[4/3]">
          <Image
            src={painPoint.imagePath}
            alt={painPoint.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center overflow-y-auto">
            {/* Stat */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <div
                className="font-heading font-bold text-[#f90093]"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 5rem)',
                  textShadow: '0 0 40px rgba(249, 0, 147, 0.6), 0 0 20px rgba(0, 0, 0, 0.8)'
                }}
              >
                {painPoint.stat}
              </div>
              <div className="text-white/70 font-heading font-semibold text-lg">
                {painPoint.statLabel}
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#071013]/90 backdrop-blur-md px-6 py-3 rounded-lg mb-4 border border-white/10"
            >
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl drop-shadow-lg">
                {painPoint.title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl bg-[#071013]/90 backdrop-blur-md px-6 py-4 rounded-lg border border-white/10"
            >
              <p className="text-white text-lg mb-2 leading-relaxed drop-shadow-md">
                {painPoint.description}
              </p>
              <p className="text-gray-300 text-sm italic">
                {t('quellePrafix')} {painPoint.source}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Compact Stat Card Component (NOW CLICKABLE)
function CompactStatCard({ stat, index, onClick, clickHint }: { stat: PainStat; index: number; onClick: () => void; clickHint: string }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(249, 0, 147, 0.3)' }}
      onClick={onClick}
      className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#f90093]/30 transition-all duration-300 group cursor-pointer"
    >
      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-8 h-8 text-[#60AFFF]" />
      </div>

      {/* Stat */}
      <div className="mb-2">
        <div
          className="font-heading font-bold text-[#f90093] leading-none"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
        >
          {stat.stat}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-[#faf9f7] text-sm md:text-base leading-tight mb-2">
        {stat.title}
      </h3>

      {/* Click hint */}
      <p className="text-xs text-gray-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        {clickHint}
      </p>
    </motion.div>
  );
}

// Hero Highlight Card Component (NOW CLICKABLE)
function HeroHighlightCard({ stat, onClick, clickHint }: { stat: PainStat; onClick: () => void; clickHint: string }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        boxShadow: [
          '0 0 30px rgba(249, 0, 147, 0.3)',
          '0 0 40px rgba(249, 0, 147, 0.5)',
          '0 0 30px rgba(249, 0, 147, 0.3)',
        ],
      }}
      transition={{
        duration: 0.6,
        delay: 0.7,
        boxShadow: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      onClick={onClick}
      className="relative p-5 md:p-8 rounded-2xl border-2 border-[#f90093] overflow-hidden cursor-pointer group hover:scale-[1.01] transition-transform duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(249, 0, 147, 0.1), rgba(96, 175, 255, 0.05))',
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Icon + Stat */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#f90093]/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-[#f90093]" />
          </div>
          <div
            className="font-heading font-bold text-[#f90093]"
            style={{
              fontSize: 'clamp(3rem, 8vw, 4rem)',
              textShadow: '0 0 30px rgba(249, 0, 147, 0.5)',
            }}
          >
            {stat.stat}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h3
            className="font-heading font-bold text-[#faf9f7] mb-2"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            {stat.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-2">
            {stat.subtitle}
          </p>
          {/* Click hint */}
          <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            {clickHint}
          </p>
        </div>
      </div>

      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#f90093]/20 rounded-full blur-3xl pointer-events-none opacity-50" />
    </motion.div>
  );
}

export default function PainPoints() {
  const [modalPainPoint, setModalPainPoint] = useState<PainStat | null>(null);
  const t = useTranslations('painPoints');

  const compactStats: PainStat[] = compactStatsConfig.map((c) => ({
    ...c,
    stat: t(`stats.${c.id}.stat`),
    title: t(`stats.${c.id}.title`),
    description: t(`stats.${c.id}.description`),
    statLabel: t(`stats.${c.id}.statLabel`),
    source: t(`stats.${c.id}.source`),
  }));

  const heroStat: PainStat = {
    ...heroStatConfig,
    stat: t('stats.waiting.stat'),
    title: t('stats.waiting.title'),
    subtitle: t('stats.waiting.subtitle'),
    description: t('stats.waiting.subtitle'),
    statLabel: t('stats.waiting.statLabel'),
    source: t('stats.waiting.source'),
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hybrid Split Container - SYNCHRONIZED HEIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">

        {/* LEFT SIDE - LIGHT (Warm White Background) */}
        <div className="relative bg-[#faf9f7] py-20 md:py-32 px-6 md:px-12 flex items-center justify-center order-1">
          {/* Content */}
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Overline Badge */}
              <div className="inline-block mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60AFFF]/10 border border-[#60AFFF]/20">
                  <span className="text-sm font-medium text-[#071013]">
                    {t('badge')}
                  </span>
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading font-bold text-[#071013] mb-8 break-words" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: 1.35 }}>
                {t('headline')}{' '}
                <span className="text-[#f90093]">{t('headlineHighlight')}</span>{' '}
                {t('headlineEnd')}
              </h2>

              {/* Supporting Text */}
              <div className="space-y-4 text-[#071013]/80 mb-8 break-words" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                <p className="leading-relaxed break-words">
                  {t('body1')}
                </p>
                <p className="leading-relaxed font-medium text-[#071013] break-words">
                  {t('body2')}
                </p>
              </div>
            </motion.div>

            {/* Future Perspective - Positive Outlook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 p-6 rounded-xl bg-gradient-to-r from-[#60AFFF]/10 to-[#f90093]/5 border-l-4 border-[#60AFFF]"
            >
              <p className="text-[#071013] font-medium leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                {t('futureText')}{' '}
                <span className="text-[#f90093] font-bold">{t('futureHighlight')}</span>{' '}
                {t('futureEnd')}{' '}
                <span className="font-bold text-[#071013]">{t('futureStrong')}</span> {t('futureEndText')}
              </p>
            </motion.div>

            {/* ROI Calculator Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const kontaktSection = document.getElementById('kontakt');
                  if (kontaktSection) {
                    kontaktSection.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      const roiButton = document.querySelector('[data-roi-calculator-trigger]') as HTMLButtonElement;
                      if (roiButton) roiButton.click();
                    }, 800);
                  }
                }}
                className="inline-flex items-center gap-2 text-[#f90093] font-heading font-semibold hover:underline transition-all group"
              >
                <Calculator className="w-5 h-5" />
                {t('roiLink')}
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </motion.div>
          </div>

          {/* Diagonal Divider (visible on desktop only) */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#faf9f7] to-transparent z-20 pointer-events-none"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0% 100%)',
            }}
          />
        </div>

        {/* RIGHT SIDE - DARK (Soft Black Background with Cards) */}
        <div className="relative bg-[#071013] py-20 md:py-32 px-6 md:px-12 flex items-center justify-center order-2">
          {/* Glow Background */}
          <div className="absolute inset-0 mesh-gradient opacity-30" />

          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f90093]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid of Compact Stats + Hero Card */}
          <div className="relative z-10 w-full max-w-3xl mx-auto lg:mx-0">
            {/* 3-Column Grid for 6 Compact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {compactStats.map((stat, index) => (
                <CompactStatCard
                  key={stat.id}
                  stat={stat}
                  index={index}
                  onClick={() => setModalPainPoint(stat)}
                  clickHint={t('clickHint')}
                />
              ))}
            </div>

            {/* Hero Highlight Card (Full Width) */}
            <HeroHighlightCard
              stat={heroStat}
              onClick={() => setModalPainPoint(heroStat)}
              clickHint={t('clickHint')}
            />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalPainPoint && (
          <ImageModal
            painPoint={modalPainPoint}
            onClose={() => setModalPainPoint(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
