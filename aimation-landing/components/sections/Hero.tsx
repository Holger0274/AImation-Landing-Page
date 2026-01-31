'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const headline =
    '40% der Arbeitszeit Ihrer Mitarbeiter geht für Aufgaben drauf, die niemand vermissen würde.';
  const words = headline.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 noise-texture"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-magenta/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overline Badge */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightblue/10 backdrop-blur-sm border border-lightblue/20">
              <div className="w-2 h-2 rounded-full bg-lightblue animate-pulse" />
              <span className="text-sm font-heading font-semibold text-black">
                KI-Automatisierung für KMUs
              </span>
            </div>
          </motion.div>

          {/* Headline with Word-by-Word Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 md:mb-8"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-2 md:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed"
          >
            Ob KI dafür die Lösung ist? Das sagen wir Ihnen ehrlich.{' '}
            <span className="font-medium text-black">
              Auch wenn die Antwort Nein lautet.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16"
          >
            <motion.a
              href="#kontakt"
              className="group relative px-8 py-4 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-lg overflow-hidden glow-magenta"
              whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(249, 0, 147, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Kostenloses Erstgespräch vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-magenta-hover to-magenta opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            <motion.a
              href="#leistungen"
              className="px-8 py-4 border-2 border-gray-200 text-black font-heading font-semibold rounded-lg hover:border-black hover:bg-black hover:text-white transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Mehr erfahren
            </motion.a>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-gray-600"
          >
            {[
              '18.000+ LinkedIn-Follower',
              '20 Jahre Engineering-Erfahrung',
              'Für Unternehmen von 10-1000 Mitarbeitern',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-magenta" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-magenta rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
