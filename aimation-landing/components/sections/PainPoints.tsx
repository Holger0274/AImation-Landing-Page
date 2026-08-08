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
  { id: 'knowledge', icon: Brain, imagePath: '/images/knowledge-loss.webp', imageAlt: 'Wissensverlust in der Entwicklungsabteilung - Erfahrung geht mit dem Mitarbeiter verloren' },
  { id: 'reporting', icon: FileSpreadsheet, imagePath: '/images/excel-chaos.webp', imageAlt: 'Ingenieure schreiben Berichte und Protokolle statt zu entwickeln' },
  { id: 'requests', icon: Clock, imagePath: '/images/time-waste.webp', imageAlt: 'Technische Anfragen und Änderungsanträge warten zu lange auf Bearbeitung' },
  { id: 'searching', icon: AlertTriangle, imagePath: '/images/quality-issues.webp', imageAlt: 'Dokumente über viele Systeme verteilt - Wissen geht verloren, Fehler wiederholen sich' },
  { id: 'research', icon: TrendingDown, imagePath: '/images/cost-waste.webp', imageAlt: 'Manuelle Recherche zu Normen und Patenten ist zeitaufwendig und fehleranfällig' },
  { id: 'competition', icon: TrendingUp, imagePath: '/images/competition.webp', imageAlt: 'Wettbewerber automatisiert Entwicklungsprozesse während andere noch abwarten' },
] as const;

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
            {(painPoint.stat || painPoint.statLabel) && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                {painPoint.stat && (
                  <div
                    className="font-heading font-bold text-[#f90093]"
                    style={{
                      fontSize: 'clamp(2.5rem, 10vw, 4rem)',
                      textShadow: '0 0 40px rgba(249, 0, 147, 0.6)'
                    }}
                  >
                    {painPoint.stat}
                  </div>
                )}
                {painPoint.statLabel && (
                  <div className="text-white/70 font-heading font-semibold text-base">
                    {painPoint.statLabel}
                  </div>
                )}
              </motion.div>
            )}

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
              {painPoint.source && (
                <p className="text-gray-400 text-sm italic">
                  {t('quellePrafix')} {painPoint.source}
                </p>
              )}
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
            {(painPoint.stat || painPoint.statLabel) && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                {painPoint.stat && (
                  <div
                    className="font-heading font-bold text-[#f90093]"
                    style={{
                      fontSize: 'clamp(3rem, 10vw, 5rem)',
                      textShadow: '0 0 40px rgba(249, 0, 147, 0.6), 0 0 20px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {painPoint.stat}
                  </div>
                )}
                {painPoint.statLabel && (
                  <div className="text-white/70 font-heading font-semibold text-lg">
                    {painPoint.statLabel}
                  </div>
                )}
              </motion.div>
            )}

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
              {painPoint.source && (
                <p className="text-gray-300 text-sm italic">
                  {t('quellePrafix')} {painPoint.source}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Compact Stat Card Component (NOW CLICKABLE)
function CompactStatCard({ stat, index, onClick, clickHint, isAnchor, anchorBadge }: { stat: PainStat; index: number; onClick: () => void; clickHint: string; isAnchor?: boolean; anchorBadge?: string }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(249, 0, 147, 0.3)' }}
      onClick={onClick}
      className={`relative p-6 rounded-xl bg-white/5 transition-all duration-300 group cursor-pointer ${
        isAnchor ? 'border-2 border-[#f90093]/50' : 'border border-white/10 hover:border-[#f90093]/30'
      }`}
    >
      {/* Anchor Badge */}
      {isAnchor && anchorBadge && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#f90093] text-white text-[11px] font-heading font-semibold">
          {anchorBadge}
        </div>
      )}

      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-8 h-8 text-[#60AFFF]" />
      </div>

      {/* Stat */}
      {stat.stat && (
        <div className="mb-2">
          <div
            className="font-heading font-bold text-[#f90093] leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
          >
            {stat.stat}
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="font-heading font-semibold text-[#faf9f7] text-sm md:text-base leading-tight mb-2">
        {stat.title}
      </h3>

      {/* Description — always visible */}
      <p className="text-xs text-gray-300 leading-relaxed mb-3">
        {stat.description}
      </p>

      {/* Click hint */}
      <p className="text-xs text-gray-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        {clickHint}
      </p>
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

  return (
    <section className="relative overflow-hidden">
      {/* Hybrid Split Container - SYNCHRONIZED HEIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE - LIGHT (Warm White Background) */}
        <div
          className="relative py-12 md:py-16 px-6 md:px-12 flex items-center justify-center order-1"
          style={{
            backgroundColor: '#faf9f7',
            backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        >
          {/* Content */}
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Overline Badge */}
              {t('badge') && (
                <div className="inline-block mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60AFFF]/10 border border-[#60AFFF]/20">
                    <span className="text-sm font-medium text-[#071013]">
                      {t('badge')}
                    </span>
                  </span>
                </div>
              )}

              {/* Main Headline */}
              <h2 className="font-heading font-bold text-[#071013] mb-4 break-words" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: 1.35 }}>
                {t('headline')}{' '}
                <span className="text-[#f90093]">{t('headlineHighlight')}</span>{' '}
                {t('headlineEnd')}
              </h2>

              {/* Supporting Text */}
              <div className="space-y-4 text-[#071013]/80 mb-8 break-words" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                <p className="leading-relaxed break-words">
                  {t('body1')}
                </p>
                {t('body2') && (
                  <p className="leading-relaxed font-medium text-[#071013] break-words">
                    {t('body2')}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Future Perspective - Positive Outlook (only shown when content is set) */}
            {t('futureText') && (
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
            )}

            {/* ROI Calculator Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4"
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
        <div
          className="relative py-12 md:py-16 px-6 md:px-12 flex items-center justify-center order-2"
          style={{
            backgroundColor: '#071013',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        >
          {/* Glow Background */}
          <div className="absolute inset-0 mesh-gradient opacity-30" />

          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f90093]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid of Compact Stats */}
          <div className="relative z-10 w-full max-w-3xl mx-auto lg:mx-0">
            {/* 3-Column Grid for 6 Compact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {compactStats.map((stat, index) => (
                <CompactStatCard
                  key={stat.id}
                  stat={stat}
                  index={index}
                  onClick={() => setModalPainPoint(stat)}
                  clickHint={t('clickHint')}
                  isAnchor={stat.id === 'knowledge'}
                  anchorBadge={t('anchorBadge')}
                />
              ))}
            </div>
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
