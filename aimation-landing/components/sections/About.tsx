'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const quotes = [
  {
    text: '„20 Jahre Engineering-Führungskraft in der Industrie."',
    highlight: null,
  },
  {
    text: '„Ich kenne [Ihre Prozesse], nicht aus Büchern, sondern aus der Praxis."',
    highlight: 'Ihre Prozesse',
  },
  {
    text: '„Wenn KI für Sie keinen Sinn ergibt, sage ich Ihnen das. Auch wenn mich das einen Auftrag kostet."',
    highlight: null,
  },
  {
    text: '„[Machen] statt reden. Fertige Lösungen, die am nächsten Tag funktionieren."',
    highlight: 'Machen',
  },
  {
    text: '„20 Jahre Erfahrung haben mir eines gezeigt: [Die einfachste Lösung], die wirklich funktioniert, ist immer die beste."',
    highlight: 'Die einfachste Lösung',
  },
];

function QuoteCard({ text, highlight, index }: { text: string; highlight: string | null; index: number }) {
  let content: React.ReactNode = text;

  if (highlight) {
    const parts = text.split(`[${highlight}]`);
    content = (
      <>
        {parts[0]}
        <strong className="text-magenta not-italic underline decoration-magenta/40 underline-offset-[3px]">
          {highlight}
        </strong>
        {parts[1]}
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="relative bg-white rounded-2xl border border-gray-100 px-5 pt-7 pb-5 shadow-sm hover:shadow-[0_8px_32px_rgba(249,0,147,0.13)] hover:-translate-y-1 transition-all duration-200"
    >
      <span className="absolute -top-4 left-4 text-5xl text-magenta font-serif leading-none">&ldquo;</span>
      <p className="text-sm text-gray-600 italic leading-relaxed">{content}</p>
      <span className="absolute -bottom-3 right-4 text-5xl text-magenta font-serif leading-none rotate-180">&ldquo;</span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="ueber-mich" className="py-20 md:py-32 bg-warm-white">
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
          <p className="text-xs font-heading font-bold tracking-[2px] uppercase text-magenta mb-3">Über uns</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-black">
            KI-Expertise mit <span className="gradient-text">echtem Fundament</span>
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
                alt="Holger Peschke, Gründer AI.mation"
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
              KI ist nicht unser Job.<br />
              <span className="gradient-text">Es ist das Thema, das uns antreibt.</span>
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              20 Jahre Engineering haben mir gezeigt, wo die Zeit wirklich verloren geht. Nicht in der Arbeit selbst, sondern im Drumherum. Daran arbeite ich.
            </p>
          </motion.div>
        </div>

        {/* Zitat-Karten */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-heading font-bold tracking-[2.5px] uppercase text-gray-300 mb-7"
        >
          Das sind wir in 5 Sätzen
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {quotes.map((q, i) => (
            <QuoteCard key={i} text={q.text} highlight={q.highlight} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#kontakt" className="btn-primary text-sm px-8 py-4">
            Kostenloses Erstgespräch vereinbaren
          </a>
          <a
            href="https://linkedin.com/in/holgerpeschke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-heading font-semibold text-magenta underline underline-offset-4"
          >
            LinkedIn folgen. 18.000 Follower
          </a>
        </div>

      </div>
    </section>
  );
}
