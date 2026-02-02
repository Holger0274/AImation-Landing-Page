'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ClaudeAIIcon } from '@/components/icons/ClaudeAIIcon';

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
  { name: 'ChatGPT', category: 'AI', hasIcon: false },
  { name: 'Claude AI', category: 'AI', hasIcon: true, icon: ClaudeAIIcon },
  { name: 'Gemini', category: 'AI', hasIcon: false },
  { name: 'DeepSeek', category: 'AI', hasIcon: false },
  { name: 'Perplexity AI', category: 'AI', hasIcon: false },
  { name: 'n8n', category: 'Automation', hasIcon: false },
  { name: 'Make.com', category: 'Automation', hasIcon: false },
  { name: 'Microsoft 365', category: 'Enterprise', hasIcon: false },
  { name: 'Copilot', category: 'AI', hasIcon: false },
  { name: 'Google Workspace', category: 'Enterprise', hasIcon: false },
  { name: 'Notion', category: 'Knowledge', hasIcon: false },
  { name: 'Obsidian', category: 'Knowledge', hasIcon: false },
  { name: 'Airtable', category: 'Database', hasIcon: false },
  { name: 'Supabase', category: 'Database', hasIcon: false },
  { name: 'Pinecone', category: 'AI', hasIcon: false },
  { name: 'Claude Code', category: 'Development', hasIcon: false },
  { name: 'Lovable', category: 'Development', hasIcon: false },
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

        {/* Logo Carousel - Enhanced */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-lg">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-magenta/30 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center gap-2">
                    {tool.hasIcon && tool.icon ? (
                      <tool.icon className="w-12 h-12" />
                    ) : null}
                    <span className={`font-heading font-bold text-gray-800 whitespace-nowrap ${tool.hasIcon ? 'text-xs' : 'text-sm'}`}>
                      {tool.name}
                    </span>
                    <span className="text-xs text-gray-500 font-body">
                      {tool.category}
                    </span>
                  </div>
                </div>
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
