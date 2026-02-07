'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const painPoints = [
  {
    id: 'time',
    icon: Clock,
    title: '40% der Arbeitszeit ist Zeitverschwendung',
    description:
      'Manuelle, repetitive Aufgaben die niemand vermissen würde. Zeit für Wertschöpfung fehlt.',
    stat: '40%',
    statLabel: 'Zeitverschwendung',
    imagePath: '/images/time-waste.webp',
  },
  {
    id: 'cost',
    icon: TrendingDown,
    title: 'Verschwendete Zeit kostet bares Geld',
    description:
      'Bei 10 Mitarbeitern sind das über 100.000€ pro Jahr für Aufgaben ohne Mehrwert.',
    stat: '100k€',
    statLabel: 'Verschwendung/Jahr',
    imagePath: '/images/cost-waste.webp',
  },
  {
    id: 'quality',
    icon: AlertTriangle,
    title: 'Fehlerquote durch manuelle Arbeit',
    description:
      'Jede manuelle Eingabe birgt Fehlerrisiko. Nacharbeit kostet Zeit und Reputation.',
    stat: '30%',
    statLabel: 'mehr Fehler',
    imagePath: '/images/quality-issues.webp',
  },
  {
    id: 'knowledge',
    icon: Brain,
    title: 'Wissen verschwindet mit Mitarbeitern',
    description:
      'Wenn erfahrene Mitarbeiter gehen, geht das Wissen mit. Fachkräftemangel verschärft das Problem.',
    stat: '60%',
    statLabel: 'Wissensverlust',
    imagePath: '/images/knowledge-loss.webp',
  },
  {
    id: 'chaos',
    icon: FileSpreadsheet,
    title: 'Daten in Excel-Silos gefangen',
    description:
      'Prozesse sind historisch gewachsen. Niemand blickt mehr durch. Zusammenführung unmöglich.',
    stat: '15+',
    statLabel: 'Excel-Listen',
    imagePath: '/images/excel-chaos.webp',
  },
  {
    id: 'competition',
    icon: TrendingUp,
    title: 'Konkurrenz nutzt bereits KI',
    description:
      'Wettbewerber werden schneller, effizienter, innovativer. Der Abstand wächst täglich.',
    stat: '67%',
    statLabel: 'nutzen bereits KI',
    imagePath: '/images/competition.webp',
  },
  {
    id: 'waiting',
    icon: AlertTriangle,
    title: 'Während Sie warten, automatisiert Ihr Wettbewerb',
    description:
      'Jeder Tag ohne Automatisierung vergrößert den Rückstand. Die Konkurrenz wird schneller, effizienter und zieht davon.',
    stat: '365',
    statLabel: 'Tage Vorsprung/Jahr',
    imagePath: '/images/waiting-competition.webp',
  },
];

// Light Blue Illustration Component (Abstract, Friendly)
function PainPointIllustrations() {
  return (
    <div className="relative w-full h-full min-h-[300px] max-h-[400px] flex items-center justify-center">
      {/* Abstract Grid Pattern with Connected Dots */}
      <svg
        className="w-full h-full max-w-md mx-auto"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background subtle grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#60AFFF" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />

        {/* Connection lines (Light Blue, subtle) */}
        <g stroke="#60AFFF" strokeWidth="2" opacity="0.3" fill="none">
          <motion.path
            d="M 80 100 Q 150 150 220 100"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.path
            d="M 220 100 L 300 180"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
          <motion.path
            d="M 80 100 L 100 250"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
          <motion.path
            d="M 100 250 Q 200 280 280 260"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.path
            d="M 300 180 L 280 260"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.0 }}
          />
          <motion.path
            d="M 220 100 L 200 320"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </g>

        {/* Nodes (circles) */}
        <g>
          {[
            { x: 80, y: 100, delay: 0.2 },
            { x: 220, y: 100, delay: 0.4 },
            { x: 300, y: 180, delay: 0.6 },
            { x: 100, y: 250, delay: 0.8 },
            { x: 280, y: 260, delay: 1.0 },
            { x: 200, y: 320, delay: 1.2 },
          ].map((node, i) => (
            <motion.g key={i}>
              {/* Outer glow ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="#60AFFF"
                opacity="0.15"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: node.delay }}
              />
              {/* Inner node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="#60AFFF"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: node.delay }}
              />
              {/* Center dot */}
              <circle cx={node.x} cy={node.y} r="3" fill="#ffffff" />
            </motion.g>
          ))}
        </g>

        {/* Abstract problem icons (simplified, Light Blue) */}
        {/* Clock (Time) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <circle cx="80" cy="100" r="25" fill="none" stroke="#60AFFF" strokeWidth="2" opacity="0.3" />
          <line x1="80" y1="100" x2="80" y2="85" stroke="#60AFFF" strokeWidth="2" opacity="0.3" />
          <line x1="80" y1="100" x2="92" y2="100" stroke="#60AFFF" strokeWidth="2" opacity="0.3" />
        </motion.g>

        {/* Document/Excel (Chaos) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <rect x="190" y="305" width="20" height="30" fill="none" stroke="#60AFFF" strokeWidth="2" opacity="0.3" rx="2" />
          <line x1="193" y1="312" x2="207" y2="312" stroke="#60AFFF" strokeWidth="1" opacity="0.3" />
          <line x1="193" y1="318" x2="207" y2="318" stroke="#60AFFF" strokeWidth="1" opacity="0.3" />
          <line x1="193" y1="324" x2="207" y2="324" stroke="#60AFFF" strokeWidth="1" opacity="0.3" />
        </motion.g>

        {/* Brain (Knowledge) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <ellipse cx="300" cy="180" rx="22" ry="18" fill="none" stroke="#60AFFF" strokeWidth="2" opacity="0.3" />
          <path d="M 285 175 Q 290 170 295 175" fill="none" stroke="#60AFFF" strokeWidth="1.5" opacity="0.3" />
          <path d="M 305 175 Q 310 170 315 175" fill="none" stroke="#60AFFF" strokeWidth="1.5" opacity="0.3" />
        </motion.g>
      </svg>
    </div>
  );
}

// Image Modal Component
function ImageModal({ painPoint, onClose }: { painPoint: typeof painPoints[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative max-w-4xl w-full bg-[#071013] rounded-2xl overflow-hidden border-2 border-[#f90093]/50"
        style={{ boxShadow: '0 0 60px rgba(249, 0, 147, 0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image */}
        <div className="relative aspect-[4/3]">
          <Image
            src={painPoint.imagePath}
            alt={painPoint.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
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
              className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg mb-4"
            >
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl">
                {painPoint.title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg"
            >
              <p className="text-gray-300 text-lg">
                {painPoint.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PainPoints() {
  const [activePainPoint, setActivePainPoint] = useState(0);
  const [modalPainPoint, setModalPainPoint] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden">
      {/* Hybrid Split Container - SYNCHRONIZED HEIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">

        {/* LEFT SIDE - LIGHT (Warm White Background) */}
        <div className="relative bg-[#faf9f7] py-16 md:py-20 px-6 md:px-12 flex items-center justify-center order-1">
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
                    Die häufigsten Herausforderungen
                  </span>
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading font-bold text-[#071013] mb-8 break-words" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', lineHeight: 1.35 }}>
                Kommt Ihnen das{' '}
                <span className="text-[#f90093]">bekannt</span>{' '}
                vor?
              </h2>

              {/* Supporting Text */}
              <div className="space-y-4 text-[#071013]/80 mb-8 break-words" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                <p className="leading-relaxed break-words">
                  Diese Probleme kennen wir von vielen KMUs im deutschen Mittelstand. Sie kosten täglich Zeit, Geld und Nerven.
                </p>
                <p className="leading-relaxed font-medium text-[#071013] break-words">
                  Die gute Nachricht: Für jedes dieser Probleme gibt es bewährte Lösungen.
                </p>
              </div>

              {/* Small CTA/Hint */}
              <div className="flex items-center gap-2 text-sm text-[#071013]/60 mb-8">
                <svg className="w-5 h-5 text-[#60AFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Klicken Sie auf die Karten für Details & Bilder</span>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PainPointIllustrations />
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
        <div className="relative bg-[#071013] py-16 md:py-20 px-6 md:px-12 flex items-center justify-center order-2">
          {/* Glow Background */}
          <div className="absolute inset-0 mesh-gradient opacity-30" />

          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f90093]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Interactive Pain Points Cards */}
          <div className="relative z-10 w-full max-w-xl mx-auto lg:mx-0">
            <div className="space-y-4">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                const isActive = activePainPoint === index;

                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    onClick={() => {
                      setActivePainPoint(index);
                      setModalPainPoint(index);
                    }}
                    onMouseEnter={() => setActivePainPoint(index)}
                    className={`
                      relative p-5 rounded-xl cursor-pointer transition-all duration-300
                      ${isActive
                        ? 'bg-[#f90093]/10 border-2 border-[#f90093]'
                        : 'bg-white/5 border-2 border-white/10 hover:border-white/20'
                      }
                    `}
                    style={isActive ? { boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)' } : {}}
                  >
                    {/* Icon and Content */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`
                          flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center
                          ${isActive ? 'bg-[#f90093]/20' : 'bg-white/10'}
                        `}
                      >
                        <Icon
                          className={`w-5 h-5 ${isActive ? 'text-[#f90093]' : 'text-white/70'}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between mb-1 gap-2">
                          <h3
                            className={`
                              font-heading font-bold flex-1 min-w-0
                              ${isActive ? 'text-white' : 'text-white/90'}
                            `}
                            style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)' }}
                          >
                            {point.title}
                          </h3>
                          <span className={`
                            font-heading font-bold flex-shrink-0
                            ${isActive ? 'text-[#f90093]' : 'text-white/40'}
                          `}
                            style={{
                              fontSize: 'clamp(1rem, 3vw, 1.35rem)',
                              ...(isActive ? { textShadow: '0 0 20px rgba(249, 0, 147, 0.5)' } : {})
                            }}
                          >
                            {point.stat}
                          </span>
                        </div>

                        <motion.p
                          initial={false}
                          animate={{
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className={`
                            overflow-hidden text-xs
                            ${isActive ? 'text-gray-300' : 'text-gray-500'}
                          `}
                        >
                          {point.description}
                        </motion.p>

                        {/* Collapsed hint */}
                        {!isActive && (
                          <p className="text-xs text-gray-500 mt-1">
                            Klicken für Bild & Details →
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#f90093] rounded-r"
                        style={{ boxShadow: '0 0 10px #f90093' }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* ROI Calculator Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 font-body text-sm mb-2">
                Wie viel kosten Sie diese Probleme pro Jahr?
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-magenta font-heading font-semibold hover:text-[#ff4ecd] transition-colors underline decoration-magenta/50 hover:decoration-magenta underline-offset-4"
                onClick={(e) => {
                  e.preventDefault();
                  const kontaktSection = document.getElementById('kontakt');
                  if (kontaktSection) {
                    kontaktSection.scrollIntoView({ behavior: 'smooth' });
                    // Trigger ROI calculator after scroll (with delay)
                    setTimeout(() => {
                      const roiButton = document.querySelector('[data-roi-calculator-trigger]') as HTMLButtonElement;
                      if (roiButton) roiButton.click();
                    }, 800);
                  }
                }}
              >
                ROI-Rechner starten →
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalPainPoint !== null && (
          <ImageModal
            painPoint={painPoints[modalPainPoint]}
            onClose={() => setModalPainPoint(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
