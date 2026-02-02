'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { cn } from '@/lib/utils';
import { Check, Users, Award, TrendingUp } from 'lucide-react';

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
  // Final approved content from AI-mation_Hero-Headline.md
  const headlineStart = '40% der Arbeitszeit Ihrer Mitarbeiter geht für Aufgaben drauf, die ';
  const headlineHighlight = 'niemand vermissen würde';
  const headlineEnd = '.';

  const subtitle = 'Ob KI dafür die Lösung ist? Das sagen wir Ihnen ehrlich. Auch wenn die Antwort Nein lautet.';

  // Trust Elements with animated counters
  const trustElements = [
    {
      icon: <Users className="h-5 w-5 text-magenta" />,
      target: 18000,
      suffix: '+',
      label: 'LinkedIn-Follower',
      hasCounter: true,
    },
    {
      icon: <Award className="h-5 w-5 text-magenta" />,
      target: 20,
      suffix: '+',
      label: 'Jahre Engineering',
      hasCounter: true,
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-magenta" />,
      value: '10-1000',
      label: 'Mitarbeiter (KMUs)',
      hasCounter: false,
    },
  ];

  // Placeholder images - replace with real images later
  const images = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60', // Team collaboration
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60', // Professional meeting
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60', // Office work
  ];

  return (
    <section className="w-full overflow-hidden bg-warm-white py-12 sm:py-24 min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overline Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightblue/10 backdrop-blur-sm border border-lightblue/20">
              <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
              <span className="text-sm font-heading font-semibold text-black">
                KI-Automatisierung für KMUs
              </span>
            </div>
          </motion.div>

          {/* Headline with Magenta Highlight */}
          <motion.h1
            className="text-4xl font-bold tracking-tight font-heading text-black sm:text-5xl lg:text-6xl leading-tight"
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
            className="mt-6 max-w-md text-lg text-gray-600 font-body leading-relaxed"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            <Button
              onClick={() => (window.location.href = '#kontakt')}
              size="lg"
              className="bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold hover:shadow-[0_0_30px_rgba(249,0,147,0.4)] transition-all duration-300"
            >
              Kostenloses Erstgespräch vereinbaren
            </Button>
            <Button
              onClick={() => (window.location.href = '#leistungen')}
              variant="outline"
              size="lg"
              className="border-2 border-gray-200 text-black font-heading font-semibold hover:border-black hover:bg-black hover:text-white transition-all"
            >
              Mehr erfahren
            </Button>
          </motion.div>

          {/* Trust Elements (Stats replacement) with Animated Counters */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            variants={itemVariants}
          >
            {trustElements.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-magenta/10">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-black font-heading">
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
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes with AI.mation colors */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-magenta/20"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-lightblue/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-magenta/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '1s' }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-lg sm:h-64 sm:w-64 border border-gray-100"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src={images[0]}
                alt="KI-Automatisierung für Teams"
                fill
                sizes="(max-width: 640px) 192px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-white p-2 shadow-lg sm:h-56 sm:w-56 border border-gray-100"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src={images[1]}
                alt="Beratung und Schulung"
                fill
                sizes="(max-width: 640px) 160px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-white p-2 shadow-lg sm:h-48 sm:w-48 border border-gray-100"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src={images[2]}
                alt="Prozess-Automatisierung"
                fill
                sizes="(max-width: 640px) 128px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
