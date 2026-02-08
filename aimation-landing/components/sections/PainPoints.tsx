'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp, X, Calculator } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// Compact Stats (6 main pain points for grid display) - WITH MODAL DATA
const compactStats = [
  {
    id: 'time',
    icon: Clock,
    stat: '40%',
    title: 'der Arbeitszeit verpufft für Aufgaben, die niemand vermissen würde',
    description: 'Ihre Mitarbeiter tippen Zahlen ab, die längst digital vorliegen. Kopieren Daten von Excel in SAP. Erstellen manuell Berichte, die automatisiert werden könnten. Während die Konkurrenz automatisiert, verschwenden Sie Potenzial.',
    statLabel: 'Zeitverschwendung',
    source: 'McKinsey Global Survey 2024',
    imagePath: '/images/time-waste.webp',
    imageAlt: 'Gestresster Büroangestellter verschwendet Zeit mit manuellen repetitiven Aufgaben statt Wertschöpfung',
  },
  {
    id: 'cost',
    icon: TrendingDown,
    stat: '200k€',
    title: 'Das sind 200.000€ aus dem Fenster geworfen – jedes Jahr',
    description: 'Bei nur 10 Mitarbeitern verbrennen Sie über 200.000€ pro Jahr für Tätigkeiten ohne Mehrwert. Das ist ein Mittelklasse-Auto. Jedes Jahr. Einfach weg. Für Aufgaben, die längst automatisierbar wären.',
    statLabel: 'Verschwendung/Jahr',
    source: 'Berechnung: McKinsey-Studie 2024',
    imagePath: '/images/cost-waste.webp',
    imageAlt: 'Finanzgrafik zeigt Kostenverschwendung durch ineffiziente manuelle Prozesse im KMU',
  },
  {
    id: 'quality',
    icon: AlertTriangle,
    stat: '1-4%',
    title: 'Jeder Fehler kostet Geld – und Ihr Image',
    description: 'Bei jeder manuellen Dateneingabe passieren Fehler. Kunden beschweren sich. Rechnungen stimmen nicht. Liefertermine werden verpasst. Und während Ihr Team Fehler korrigiert, bleibt die eigentliche Arbeit liegen. Frustrierend? Absolut. Vermeidbar? Ja.',
    statLabel: 'Fehlerrate',
    source: 'Gartner 2023 & Ernst & Young 2025',
    imagePath: '/images/quality-issues.webp',
    imageAlt: 'Qualitätsprobleme und Fehler durch manuelle Dateneingabe in Unternehmensprozessen',
  },
  {
    id: 'knowledge',
    icon: Brain,
    stat: '71%',
    title: 'Wenn Petra in Rente geht, geht 30 Jahre Erfahrung mit',
    description: 'Nur sie weiß, wie dieser eine Prozess funktioniert. Nur sie kennt alle Sonderfälle. Und wenn sie geht? Chaos. Fehler. Verzögerungen. Neue Mitarbeiter brauchen Monate, um aufzuholen – wenn Sie überhaupt jemanden finden.',
    statLabel: 'der IT-Führungskräfte sehen Wissensverlust',
    source: 'Sinequa-Studie 2022',
    imagePath: '/images/knowledge-loss.webp',
    imageAlt: 'Wissensverlust durch Mitarbeiter-Fluktuation - Fachkräftemangel im deutschen Mittelstand',
  },
  {
    id: 'chaos',
    icon: FileSpreadsheet,
    stat: '86%',
    title: '86% tippen Rechnungen ab – als gäbe es kein Internet',
    description: 'PDF kommt per E-Mail. Ihre Mitarbeiter öffnen es, lesen die Zahlen, tippen sie ins ERP. Fehler inklusive. Es gibt OCR-Software seit 20 Jahren. Trotzdem tippen 86% der KMUs wie 1995. Absurd? Ja. Änderbar? Sofort.',
    statLabel: 'erfassen Rechnungen manuell',
    source: 'KfW Digitalisierungsbericht 2024',
    imagePath: '/images/excel-chaos.webp',
    imageAlt: 'Excel-Chaos und manuelle Rechnungserfassung in KMU - ineffiziente Buchhaltungsprozesse',
  },
  {
    id: 'competition',
    icon: TrendingUp,
    stat: '81%',
    title: '81% wissen: Ohne KI verlieren wir den Anschluss',
    description: 'Ihre Konkurrenz nutzt bereits KI. Ihre Branche verändert sich. Schneller, effizienter, günstiger – ohne Sie. Während Sie noch überlegen, ob KI etwas für Sie ist, ziehen andere davon. Der Abstand wächst. Jeden Tag.',
    statLabel: 'sehen KI als wichtigste Zukunftstechnologie',
    source: 'Bitkom-Studie September 2025',
    imagePath: '/images/competition.webp',
    imageAlt: 'Wettbewerbsvorteil durch KI-Automatisierung - deutsche Unternehmen im digitalen Wettlauf',
  },
];

// Hero Highlight (most important pain point) - WITH MODAL DATA
const heroStat = {
  id: 'waiting',
  icon: AlertTriangle,
  stat: '2x',
  title: 'Während Sie noch planen, hat Ihr Wettbewerber schon automatisiert',
  subtitle: 'Die KI-Nutzung in deutschen Unternehmen hat sich im letzten Jahr verdoppelt. Nicht in 10 Jahren. In 12 Monaten. Wer jetzt wartet, holt diesen Vorsprung nicht mehr auf. Die Frage ist nicht OB, sondern WANN Sie starten.',
  description: 'Die KI-Nutzung in deutschen Unternehmen hat sich im letzten Jahr verdoppelt. Nicht in 10 Jahren. In 12 Monaten. Wer jetzt wartet, holt diesen Vorsprung nicht mehr auf. Die Frage ist nicht OB, sondern WANN Sie starten.',
  statLabel: 'KI-Wachstum in 12 Monaten',
  source: 'Bitkom September 2025',
  imagePath: '/images/waiting-competition.webp',
  imageAlt: 'Rückstand im KI-Wettbewerb - Konkurrenz automatisiert während andere warten',
};

// Light Blue Illustration Component (kept from original)
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
function ImageModal({ painPoint, onClose }: { painPoint: typeof compactStats[0]; onClose: () => void }) {
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
            alt={painPoint.imageAlt}
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
              <p className="text-gray-300 text-lg mb-2">
                {painPoint.description}
              </p>
              <p className="text-gray-400 text-sm italic">
                Quelle: {painPoint.source}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Compact Stat Card Component (NOW CLICKABLE)
function CompactStatCard({ stat, index, onClick }: { stat: typeof compactStats[0]; index: number; onClick: () => void }) {
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
      <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
        Klicken für Bild & Details →
      </p>
    </motion.div>
  );
}

// Hero Highlight Card Component (NOW CLICKABLE)
function HeroHighlightCard({ stat, onClick }: { stat: typeof heroStat; onClick: () => void }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.7 }}
      animate={{
        boxShadow: [
          '0 0 30px rgba(249, 0, 147, 0.3)',
          '0 0 40px rgba(249, 0, 147, 0.5)',
          '0 0 30px rgba(249, 0, 147, 0.3)',
        ],
      }}
      transition={{
        boxShadow: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      onClick={onClick}
      className="relative p-8 rounded-2xl border-2 border-[#f90093] overflow-hidden cursor-pointer group hover:scale-[1.01] transition-transform duration-300"
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
            Klicken für Bild & Details →
          </p>
        </div>
      </div>

      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#f90093]/20 rounded-full blur-3xl pointer-events-none opacity-50" />
    </motion.div>
  );
}

export default function PainPoints() {
  const [modalPainPoint, setModalPainPoint] = useState<typeof compactStats[0] | null>(null);

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
                    Kennen Sie das auch?
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

            {/* ROI Calculator Teaser - ON LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 relative p-8 md:p-10 rounded-2xl border-2 border-[#f90093]/30 bg-white overflow-hidden"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
            >
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f90093]/10 mb-6"
                >
                  <Calculator className="w-8 h-8 md:w-10 md:h-10 text-[#f90093]" />
                </motion.div>

                {/* Headline */}
                <h3
                  className="font-heading font-bold text-[#071013] mb-4"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                >
                  Wie viel kosten Sie diese Probleme <span className="text-[#f90093]">pro Jahr</span>?
                </h3>

                {/* Description */}
                <p className="text-[#071013]/70 font-body text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Berechnen Sie mit unserem ROI-Rechner, wie viel Zeit und Geld Sie durch Automatisierung einsparen können.
                </p>

                {/* CTA Button */}
                <motion.button
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-lg text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
                    boxShadow: '0 4px 20px rgba(249, 0, 147, 0.3)',
                  }}
                >
                  <Calculator className="w-5 h-5" />
                  ROI-Rechner jetzt starten
                </motion.button>

                {/* Hint Text */}
                <p className="text-[#071013]/60 text-sm mt-4 font-body">
                  ⏱ Dauert nur 2 Minuten • 💡 Sofortiges Ergebnis
                </p>
              </div>
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
                />
              ))}
            </div>

            {/* Hero Highlight Card (Full Width) */}
            <HeroHighlightCard
              stat={heroStat}
              onClick={() => setModalPainPoint(heroStat as typeof compactStats[0])}
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
