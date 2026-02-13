'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Heart, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const differentiators = [
  {
    icon: Target,
    title: 'Aus der Praxis, nicht aus dem Lehrbuch',
    description: 'Wir kennen den Alltag in produzierenden Unternehmen. Nicht aus Studien, sondern weil wir selbst jahrelang mittendrin waren.',
    highlight: 'Keine Theorie-Consultants'
  },
  {
    icon: Heart,
    title: 'Nutzen vor Umsatz',
    description: 'Wir schauen uns eure Prozesse genau an. Und wenn KI nicht die richtige Lösung ist, sagen wir das auch.',
    highlight: 'Kein Verkaufsgespräch'
  },
  {
    icon: Zap,
    title: 'Für KMUs gemacht',
    description: 'Keine Konzernpreise, keine Projekte die sich ewig ziehen. Lösungen die funktionieren. Nicht in 2 Jahren, sondern morgen.',
    highlight: 'Schnell & bezahlbar'
  },
  {
    icon: TrendingUp,
    title: 'Alles aus einer Hand',
    description: 'Beratung, Schulung, Umsetzung. Ihr braucht nicht drei verschiedene Anbieter unter einen Hut zu bringen.',
    highlight: '3 Säulen, 1 Partner'
  }
];

export default function WhyAImation() {
  const sectionRef = useRef(null);

  return (
    <section
      id="warum-aimation"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#071013] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#f90093] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#071013] border border-[#f90093]/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-[#f90093] rounded-full shadow-[0_0_10px_#f90093]" />
            <span className="text-2xl font-bold text-white">Warum AI.mation?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
            Nicht noch eine{' '}
            <span className="text-[#f90093] drop-shadow-[0_0_40px_rgba(249,0,147,0.5)]">
              KI-Beratung
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Die meisten Berater reden über KI. Wir bauen sie. Und sagen euch, ob ihr sie überhaupt braucht.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#f90093]/50 transition-all duration-300"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f90093]/0 to-[#f90093]/0 group-hover:from-[#f90093]/10 group-hover:to-transparent rounded-2xl transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f90093] to-[#ff4ecd] shadow-[0_0_30px_rgba(249,0,147,0.3)]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#f90093] bg-[#f90093]/10 rounded-full border border-[#f90093]/20">
                    {item.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 font-space-grotesk">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Services Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-[#f90093]/10 to-[#ff4ecd]/10 border border-[#f90093]/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-space-grotesk">
              Startet mit einem{' '}
              <span className="text-[#f90093] drop-shadow-[0_0_20px_rgba(249,0,147,0.4)]">
                AI Readiness Check
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              In 2 Tagen wisst ihr, wo ihr steht: <strong className="text-white">AI Audit</strong> eurer aktuellen Prozesse,
              klare <strong className="text-white">AI Readiness</strong> Bewertung und eine ehrliche <strong className="text-white">AI ROI</strong> Einschätzung.
              Ohne Buzzwords, ohne Verkaufsdruck.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
                <span className="text-white font-semibold">✓ AI Readiness Assessment</span>
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
                <span className="text-white font-semibold">✓ AI Audit & Potenzialanalyse</span>
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
                <span className="text-white font-semibold">✓ AI ROI Kalkulation</span>
              </div>
            </div>

            <a
              href="#kontakt"
              className="
                inline-flex items-center gap-2 px-8 py-4
                bg-gradient-to-br from-[#f90093] to-[#ff4ecd]
                text-white font-bold text-lg rounded-xl
                shadow-[0_0_30px_rgba(249,0,147,0.4)]
                transition-all duration-300
                hover:shadow-[0_0_40px_rgba(249,0,147,0.6)]
                hover:-translate-y-1
                hover:scale-105
              "
            >
              Jetzt AI Readiness Check anfragen
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
