'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Award, Target, Users } from 'lucide-react';
import { PersonSchema } from '@/components/StructuredData';

const highlights = [
  {
    icon: Award,
    text: '20 Jahre Engineering-Führungserfahrung',
  },
  {
    icon: Target,
    text: 'Vom Shopfloor bis zur Führungsebene',
  },
  {
    icon: Users,
    text: 'Verständnis für alle Unternehmensbereiche',
  },
  {
    icon: CheckCircle2,
    text: 'Praktische KI-Lösungen statt Buzzwords',
  },
];

export default function About() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimation.de';

  return (
    <section id="ueber-mich" className="py-20 md:py-32 bg-white">
      {/* Person Schema.org for Holger Peschke */}
      <PersonSchema siteUrl={siteUrl} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Über <span className="gradient-text">mich</span>
          </h2>
        </motion.div>

        {/* Split Layout: Image + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              {/* Placeholder - Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center p-8">
                  <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 text-sm">Professionelles Foto<br />folgt in Kürze</p>
                </div>
              </div>
              {/* Uncomment when image is available:
              <Image
                src="/images/holger-peschke.jpg"
                alt="Holger Peschke - AI.mation Gründer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              */}
            </div>
            {/* Accent Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-magenta rounded-2xl -z-10" />
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-soft-black mb-6">
              KI ist nicht mein Job – <span className="gradient-text">es ist das Thema, das mich antreibt</span>
            </h3>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-4 mb-8">
              <p>
                Nach 20 Jahren im Engineering habe ich gesehen, wie viel Potenzial in deutschen Unternehmen brachliegt. Mein Ziel: KI zugänglich machen – ohne Buzzwords, ohne Konzernpreise, mit echtem Verständnis für eure Prozesse.
              </p>
              <p>
                Mit 20 Jahren Erfahrung im Engineering kenne ich die Herausforderungen in produzierenden Unternehmen aus erster Hand. Ich weiß, wie frustrierend es ist, wenn Potenzial brachliegt, weil die richtigen Tools oder das Know-how fehlen.
              </p>
              <p>
                <strong className="text-soft-black">Was mich unterscheidet:</strong> Ich spreche eure Sprache – vom Shopfloor bis zur Führungsebene. Ich kenne nicht nur Engineering, sondern verstehe auch, wie Vertrieb, Marketing, HR und alle anderen Abteilungen funktionieren. Dieses ganzheitliche Verständnis ist entscheidend für erfolgreiche KI-Implementierungen.
              </p>
              <p className="text-soft-black font-medium">
                Mein Versprechen: Keine leeren Buzzwords, sondern ehrliche Einschätzungen und praktische Lösungen, die funktionieren.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6 bg-warm-white rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-magenta to-[#ff4ecd] flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium leading-snug">
                  {highlight.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
