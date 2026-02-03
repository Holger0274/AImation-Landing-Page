'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { AI_TOOLS } from '@/lib/tools-config';

const stats = [
  {
    value: 18000,
    suffix: '+',
    label: 'LinkedIn-Follower vertrauen meinen KI-Einschätzungen',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Jahre Engineering-Erfahrung',
  },
  {
    value: 10,
    suffix: '-1000',
    label: 'Mitarbeiter in Zielunternehmen',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Vertrauen durch <span className="gradient-text">Erfahrung</span>
          </h2>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Neue AnimatedCounter Komponente mit mehr Features */}
              <div className="text-5xl md:text-6xl font-heading font-bold gradient-text">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  separator={true}
                  delay={index * 0.1}
                />
              </div>
              <p className="text-gray-600 mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            Wir arbeiten mit den <span className="gradient-text">besten Tools</span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Herstellerunabhängig – ich kenne alle relevanten KI-Tools und finde die richtige
            Lösung für Ihren Use Case
          </p>
        </motion.div>

        {/* Logo Carousel - Infinite Scroll with lobe-icons */}
        <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 md:gap-12 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
            style={{
              willChange: 'transform',
            }}
          >
            {/* Double the array for seamless loop */}
            {[...AI_TOOLS, ...AI_TOOLS].map((tool, index) => {
              const IconComponent = (tool.icon as any).Color || tool.icon;
              return (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  title={tool.description || tool.name}
                >
                  <div className="flex flex-col items-center gap-3 px-4">
                    {/* Icon with hover effect */}
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <IconComponent size={56} className="md:w-14 md:h-14 w-10 h-10" />
                    </div>
                    {/* Tool name - visible on hover/large screens */}
                    <span className="text-xs font-heading font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300">
                      {tool.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
