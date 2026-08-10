'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { PRICING } from '@/lib/data/pricing';
import SharedFaqAccordion from '@/components/ui/FaqAccordion';
import { FAQ_ITEMS } from '@/lib/data/faqs-ki-beratung';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/erstgespraech';

const BERATUNG_PHASES = [
  {
    phase: '1',
    name: 'KI-Landkarte',
    subtitle: 'Wo stehen wir, wo wollen wir hin?',
    modules: [
      { title: 'Priorisierte Use Cases', desc: '2 bis 3 priorisierte Use Cases mit ROI-Schätzung, intern vorzeigbar.' },
      { title: 'Realitäts-Check', desc: 'Welche Daten und Systeme haben Sie wirklich? Wir prüfen die Lage vor Ort.' },
      { title: 'Festpreis, ein Tag', desc: `${PRICING.kiLandkarte.priceLabel}, ${PRICING.kiLandkarte.duration}.` },
    ],
  },
  {
    phase: '2',
    name: 'Begleitung',
    subtitle: 'Wie kommen wir dahin?',
    modules: [
      { title: 'Vendor & Tool Selection', desc: 'Herstellerunabhängige Bewertung der richtigen Tools für Ihren Use Case.' },
      { title: 'Change Management', desc: 'Mitarbeiter mitnehmen. KI-Kultur aufbauen. Widerstand abbauen.' },
      { title: 'KI-Governance Setup', desc: 'Richtlinien, Datenschutz, AI Act – rechtssicher aufgestellt.' },
    ],
  },
];

function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}

export default function KiBeratungPage() {
  return (
    <main id="main-content" className="bg-[#faf9f7]">
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter">
            <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#071013] font-medium">KI-Beratung für KMUs</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#c2007a] text-xs font-heading font-semibold mb-6">
            Säule 2: Beratung
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[#071013] mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            KI-Beratung für KMUs:{' '}
            <span className="text-[#f90093]">Klarheit statt Hype</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 font-inter leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
          >
            Wo stehen Sie wirklich? Welche KI-Investitionen lohnen sich? Was kostet zu viel, was bringt zu wenig?
            Wir sagen Ihnen die Wahrheit – auch wenn die Antwort lautet: KI ist hier nicht die richtige Lösung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
            >
              Kostenloses Erstgespräch buchen
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold border-2 border-[#071013] text-[#071013] hover:bg-[#071013] hover:text-white transition-all"
            >
              Holen Sie sich Ihre KI-Landkarte
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3 PHASES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            Zwei Phasen. <span className="text-[#f90093]">Ein roter Faden.</span>
          </h2>
          <p className="text-gray-600 font-inter text-center mb-12 max-w-2xl mx-auto">
            Jede Phase ist einzeln buchbar. Oder wir begleiten Sie durch beide.
          </p>
          <div className="space-y-8">
            {BERATUNG_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}>
                    {phase.phase}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#071013]" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.375rem)' }}>{phase.name}</h3>
                    <p className="text-gray-500 font-inter text-sm">{phase.subtitle}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {phase.modules.map((m) => (
                    <div key={m.title} className="bg-[#faf9f7] rounded-xl p-4">
                      <p className="font-heading font-semibold text-[#071013] text-sm mb-1">{m.title}</p>
                      <p className="text-gray-500 font-inter text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Beratung, die <span className="text-[#f90093]">unbequeme Wahrheiten</span> ausspricht
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Herstellerunabhängig', text: 'Keine Provisionen, keine bevorzugten Anbieter. Wir empfehlen die Lösung, die zu Ihrem Problem passt.' },
              { title: 'Engineering-Background', text: 'Wir haben Prozesse gelebt, nicht nur beschrieben. Das macht unsere Empfehlungen konkreter und realistischer.' },
              { title: 'Kein Lock-in', text: 'Nach der Beratung können Sie selbst weiterarbeiten. Wir übergeben Wissen, keine Abhängigkeiten.' },
            ].map((u) => (
              <div key={u.title} className="bg-white/5 rounded-2xl p-6 text-left">
                <h3 className="font-heading font-bold text-white mb-2 text-base">{u.title}</h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-10 text-center" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Häufige Fragen zur <span className="text-[#f90093]">KI-Beratung</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Bereit für den <span className="text-[#f90093]">nächsten Schritt</span>?
          </h2>
          <p className="text-gray-400 font-inter mb-8">
            30 Minuten. Wir schauen gemeinsam, ob und wo KI-Beratung für Sie Sinn ergibt.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
              boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)',
            }}
          >
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      </section>
    </main>
  );
}
