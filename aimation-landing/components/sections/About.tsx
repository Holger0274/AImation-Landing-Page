'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Target, Heart, Zap, Users } from 'lucide-react';

const differentiatorIcons = [Target, Heart, Zap, Users];

function DifferentiatorCard({ text, icon: Icon, index }: { text: string; icon: typeof Target; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-[0_8px_32px_rgba(249,0,147,0.13)] hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-magenta/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-magenta" />
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function About() {
  const t = useTranslations('about');
  const differentiators = (t.raw('differentiators') as string[]);

  return (
    <section
      id="ueber-mich"
      className="py-20 md:py-32"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      {/*
        PersonSchema wurde in layout.tsx (Server Component) verlagert.
        Damit ist es fuer AI-Crawler im initialen HTML sichtbar.
      */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-heading font-bold tracking-[2px] uppercase text-magenta mb-3">{t('overline')}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-black">
            {t('headline')} <span className="gradient-text">{t('headlineHighlight')}</span>
          </h2>
        </motion.div>

        {/* Split Layout: Foto + Intro-Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src="/images/about-holger.png"
                alt="Holger Peschke, Gründer AImation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            {/* Magenta Akzentrahmen */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-magenta/50 rounded-2xl -z-10" />
          </motion.div>

          {/* Intro-Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-soft-black mb-6 leading-snug">
              {t('introHeadline')}<br />
              <span className="gradient-text">{t('introHighlight')}</span>
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              {t('introText')}
            </p>
            {t('mainText') && (
              <p className="text-base text-gray-500 leading-relaxed mt-4">
                {t('mainText')}
              </p>
            )}
          </motion.div>
        </div>

        {/* Differenzierungs-Punkte */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-heading font-bold tracking-[2.5px] uppercase text-gray-300 mb-7"
        >
          {t('differentiatorsLabel')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {differentiators.map((text, i) => (
            <DifferentiatorCard key={i} text={text} icon={differentiatorIcons[i]} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#kontakt" className="btn-primary text-sm px-8 py-4">
            {t('ctaPrimary')}
          </a>
          <a
            href="https://linkedin.com/in/holgerpeschke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-heading font-semibold text-magenta underline underline-offset-4"
          >
            {t('ctaLinkedIn')}
          </a>
        </div>

        {/* Grounding Page Link — interne Verlinkung für Google + KI-Systeme */}
        <p className="text-center mt-6 text-xs text-gray-400 font-inter">
          <a href="/facts/aimation" className="hover:text-gray-600 transition-colors underline underline-offset-2">
            Unternehmensdaten und Fakten zu AImation UG
          </a>
        </p>

      </div>
    </section>
  );
}
