'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp } from 'lucide-react';
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
    mockupType: 'time-waste',
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
    mockupType: 'cost-waste',
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
    mockupType: 'quality-issues',
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
    mockupType: 'knowledge-loss',
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
    mockupType: 'excel-chaos',
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
    mockupType: 'competition',
    imagePath: '/images/competition.webp',
  },
];

// Placeholder Mockup Component
function MockupPlaceholder({ type, stat, statLabel, imagePath }: { type: string; stat: string; statLabel: string; imagePath?: string }) {
  const mockupConfig = {
    'time-waste': {
      title: 'Zeit-Verschwendung',
      subtitle: 'Repetitive Aufgaben',
      bgGradient: 'from-orange-900/30 to-red-900/20',
      iconColor: 'text-orange-400',
      visual: Clock,
    },
    'cost-waste': {
      title: 'Kosten-Explosion',
      subtitle: 'Verschwendete Arbeitszeit',
      bgGradient: 'from-red-900/30 to-pink-900/20',
      iconColor: 'text-red-400',
      visual: TrendingDown,
    },
    'quality-issues': {
      title: 'Fehler-Quote',
      subtitle: 'Manuelle Prozesse',
      bgGradient: 'from-yellow-900/30 to-orange-900/20',
      iconColor: 'text-yellow-400',
      visual: AlertTriangle,
    },
    'knowledge-loss': {
      title: 'Wissens-Verlust',
      subtitle: 'Know-how verschwindet',
      bgGradient: 'from-purple-900/30 to-blue-900/20',
      iconColor: 'text-purple-400',
      visual: Brain,
    },
    'excel-chaos': {
      title: 'Excel-Chaos',
      subtitle: 'Daten in Silos',
      bgGradient: 'from-green-900/30 to-teal-900/20',
      iconColor: 'text-green-400',
      visual: FileSpreadsheet,
    },
    'competition': {
      title: 'Wettbewerbs-Druck',
      subtitle: 'Konkurrenz nutzt KI',
      bgGradient: 'from-blue-900/30 to-cyan-900/20',
      iconColor: 'text-blue-400',
      visual: TrendingUp,
    },
  };

  const config = mockupConfig[type as keyof typeof mockupConfig];
  const VisualIcon = config.visual;

  return (
    <div
      className={`w-full h-full rounded-2xl bg-gradient-to-br ${config.bgGradient} border border-white/10 flex flex-col items-center justify-center p-8 relative overflow-hidden`}
    >
      {/* Image Background (if provided) */}
      {imagePath && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image
            src={imagePath}
            alt={config.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Dark Overlay for text readability - Enhanced */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/45" />
        </div>
      )}

      {/* Background Icon Pattern (only if no image) */}
      {!imagePath && (
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <VisualIcon className="w-64 h-64" />
        </div>
      )}

      {/* Content */}
      <div className="relative text-center space-y-6">
        {/* Large Statistic */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-2"
        >
          <div className={`font-heading font-bold ${config.iconColor}`}
            style={{
              fontSize: 'clamp(3rem, 12vw, 6rem)',
              textShadow: `0 0 40px ${config.iconColor.replace('text-', 'rgba(').replace('-400', ', 0.6)')}, 0 0 20px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.5)`,
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)'
            }}
          >
            {stat}
          </div>
          <div className="text-white/70 font-heading font-semibold" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>
            {statLabel}
          </div>
        </motion.div>

        {/* Icon */}
        <div className={`inline-flex p-4 rounded-full bg-white/5 ${config.iconColor}`}>
          <VisualIcon className="w-10 h-10" />
        </div>

        {/* Title - Enhanced with background box */}
        <div className="space-y-2">
          <div className="inline-block bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
            <p className="font-bold text-white/90 font-heading" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>{config.title}</p>
          </div>
          <div className="inline-block bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
            <p className="text-white/50" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>{config.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Decorative Grid Pattern (only if no image) */}
      {!imagePath && (
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      )}
    </div>
  );
}

export default function PainPoints() {
  const [activePainPoint, setActivePainPoint] = useState(0);

  return (
    <section className="relative py-20 md:py-32 bg-[#071013] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f90093]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            Kommt Ihnen das <span className="text-[#f90093]" style={{ textShadow: '0 0 40px rgba(249, 0, 147, 0.5)' }}>bekannt</span> vor?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>
            Die 6 größten Herausforderungen, die wir bei KMUs sehen
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Mockup Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Glow Border Effect - Enhanced */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f90093]/35 to-transparent p-[3px]">
                <div className="w-full h-full bg-[#071013] rounded-2xl" />
              </div>

              {/* Mockup Content with AnimatePresence */}
              <div className="absolute inset-0 p-[3px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePainPoint}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <MockupPlaceholder
                      type={painPoints[activePainPoint].mockupType}
                      stat={painPoints[activePainPoint].stat}
                      statLabel={painPoints[activePainPoint].statLabel}
                      imagePath={painPoints[activePainPoint].imagePath}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Outer Glow - Enhanced */}
              <div
                className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none"
                style={{ boxShadow: '0 0 80px rgba(249, 0, 147, 0.4)' }}
              />
            </div>
          </motion.div>

          {/* RIGHT: Interactive Pain Points List */}
          <div className="order-1 lg:order-2 space-y-4">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              const isActive = activePainPoint === index;

              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onClick={() => setActivePainPoint(index)}
                  onMouseEnter={() => setActivePainPoint(index)}
                  className={`
                    relative p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${isActive
                      ? 'bg-[#f90093]/10 border-2 border-[#f90093]'
                      : 'bg-white/5 border-2 border-white/10 hover:border-white/20'
                    }
                  `}
                  style={isActive ? { boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)' } : {}}
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                        ${isActive ? 'bg-[#f90093]/20' : 'bg-white/10'}
                      `}
                    >
                      <Icon
                        className={`w-6 h-6 ${isActive ? 'text-[#f90093]' : 'text-white/70'}`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between mb-2 gap-2">
                        <h3
                          className={`
                            font-heading font-bold flex-1 min-w-0
                            ${isActive ? 'text-white' : 'text-white/90'}
                          `}
                          style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
                        >
                          {point.title}
                        </h3>
                        <span className={`
                          font-heading font-bold flex-shrink-0
                          ${isActive ? 'text-[#f90093]' : 'text-white/40'}
                        `}
                          style={{
                            fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)',
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
                          overflow-hidden
                          ${isActive ? 'text-gray-300' : 'text-gray-500'}
                        `}
                      >
                        {point.description}
                      </motion.p>

                      {/* Collapsed hint */}
                      {!isActive && (
                        <p className="text-sm text-gray-500 mt-1">
                          Klicken für Details →
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
        </div>
      </div>
    </section>
  );
}
