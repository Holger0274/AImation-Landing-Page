'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

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

const tools = [
  'ChatGPT',
  'Claude AI',
  'n8n',
  'Make.com',
  'Microsoft 365',
  'Google Workspace',
  'Notion',
  'Airtable',
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
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
          <h3 className="text-2xl font-heading font-bold mb-8">
            Wir arbeiten mit den besten Tools
          </h3>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-8">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-4 bg-gray-100 rounded-lg font-heading font-semibold text-gray-700 whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          Herstellerunabhängig – ich kenne alle relevanten KI-Tools und finde die richtige
          Lösung für Ihren Use Case
        </motion.p>
      </div>
    </section>
  );
}
