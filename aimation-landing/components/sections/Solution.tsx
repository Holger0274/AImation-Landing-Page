'use client';

import { motion } from 'framer-motion';
import { Award, Users, Factory } from 'lucide-react';

const trustBadges = [
  {
    icon: Award,
    text: '20+ Jahre Engineering-Erfahrung',
  },
  {
    icon: Users,
    text: '18.000+ LinkedIn-Follower',
  },
  {
    icon: Factory,
    text: 'Spezialisiert auf KMU (10-1000 MA)',
  },
];

export default function Solution() {
  return (
    <section className="py-12 md:py-16 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-semibold text-gray-700 mb-4" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
            Warum <span className="gradient-text">AI.mation</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)' }}>
            20 Jahre Engineering-Erfahrung trifft auf KI-Know-how – für Lösungen, die funktionieren statt nur gut klingen.
          </p>
        </motion.div>

        {/* Trust Badges - Horizontal Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-lightblue/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-lightblue" />
                </div>
                <span className="font-body text-gray-700 font-medium text-sm md:text-base">
                  {badge.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
