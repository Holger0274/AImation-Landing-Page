'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { PRICING } from '@/lib/data/pricing';
import EuAiActNotice from '@/components/sections/EuAiActNotice';
import SharedFaqAccordion from '@/components/ui/FaqAccordion';
import { FAQ_ITEMS } from '@/lib/data/faqs-ki-schulungen';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/erstgespraech';

const ROLLEN_MATRIX = [
  { rolle: 'Ingenieure, Konstrukteure, Berechner', einstieg: 'Einstieg generative KI im Engineering, danach Copilot im Entwicklungsalltag' },
  { rolle: 'Entwicklungsleiter, Teamleiter', einstieg: 'KI im Leadership, danach KI-Agenten in der Produktentwicklung' },
  { rolle: 'Geschäftsführung', einstieg: 'KI im Leadership (Kompaktformat), danach KI-Landkarte als nächster Schritt' },
  { rolle: 'Skeptiker im Team', einstieg: 'Einstieg generative KI, an eigenen Aufgaben, keine Folienschlacht' },
];

const SCHULUNGEN_LEVELS = [
  {
    level: '1',
    name: 'Einstieg & Awareness',
    subtitle: 'Grundverständnis schaffen',
    courses: [
      { title: 'Generative KI verstehen', duration: '½ Tag', audience: 'Alle Mitarbeiter' },
      { title: 'KI für Führungskräfte', duration: '1 Tag', audience: 'C-Level, Abteilungsleiter' },
      { title: 'Prompt Engineering Basics', duration: '½ Tag', audience: 'Alle KI-Nutzer' },
    ],
  },
  {
    level: '2',
    name: 'Anwendung & Tools',
    subtitle: 'Konkrete Werkzeuge einsetzen',
    courses: [
      { title: 'Microsoft Copilot', duration: '½–1 Tag', audience: 'Office-Nutzer' },
      { title: 'Prompt Engineering Fortgeschritten', duration: '1 Tag', audience: 'Power User' },
      { title: 'Automatisierung ohne Code', duration: '1 Tag', audience: 'HR, Marketing, Assistenz, PM' },
    ],
  },
  {
    level: '3',
    name: 'Fortgeschritten & Spezialisiert',
    subtitle: 'Multiplikatoren ausbilden',
    courses: [
      { title: 'Multi-Agent-Systeme', duration: '2 Tage', audience: 'Entwickler, Architekten' },
      { title: 'Vibe Coding', duration: '1–2 Tage', audience: 'Nicht-Entwickler mit Lösungsideen' },
      { title: 'KI in Engineering', duration: '1–2 Tage', audience: 'Ingenieure, QS-Leiter' },
    ],
  },
];

function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}

export default function KiSchulungenPage() {
  return (
    <main id="main-content" className="bg-[#faf9f7]">
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter">
            <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#071013] font-medium">KI-Schulungen für Unternehmen</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#c2007a] text-xs font-heading font-semibold mb-6">
            Säule 1: Schulungen
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[#071013] mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            KI-Schulungen für den Mittelstand:{' '}
            <span className="text-[#f90093]">Wissen, das am nächsten Tag funktioniert</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 font-inter leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
          >
            Keine Theorie-Vorträge, die nach zwei Stunden vergessen sind. Wir vermitteln KI-Kompetenz so,
            dass Ihr Team es versteht, anwendet und weitermacht. Von der Führungskraft bis zum Sachbearbeiter.
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

      {/* 3 LEVELS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            Drei Ebenen. <span className="text-[#f90093]">Ihr Einstiegspunkt.</span>
          </h2>
          <p className="text-gray-600 font-inter text-center mb-12 max-w-2xl mx-auto">
            Wir starten dort, wo Ihr Team steht. Alle Module sind frei kombinierbar.
          </p>
          <div className="space-y-8">
            {SCHULUNGEN_LEVELS.map((lvl) => (
              <div key={lvl.level} className="rounded-2xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}>
                    {lvl.level}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#071013]" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.375rem)' }}>{lvl.name}</h3>
                    <p className="text-gray-500 font-inter text-sm">{lvl.subtitle}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {lvl.courses.map((c) => (
                    <div key={c.title} className="bg-[#faf9f7] rounded-xl p-4">
                      <p className="font-heading font-semibold text-[#071013] text-sm mb-1">{c.title}</p>
                      <p className="text-gray-500 font-inter text-xs">{c.duration} · {c.audience}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Preis */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-[#faf9f7] p-6 md:p-8 text-center">
            <p className="font-heading font-semibold text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              Inhouse-Schulung: {PRICING.schulung.priceLabel}, unabhängig von der Teilnehmerzahl. {PRICING.schulung.priceHalfDayLabel}.
            </p>
          </div>

          {/* Rollen-Matrix */}
          <div className="mt-10">
            <h3 className="font-heading font-bold text-[#071013] text-center mb-6" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>
              Welche Schulung <span className="text-[#c2007a]">für wen</span>?
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm font-inter">
                <thead>
                  <tr className="bg-[#071013] text-white">
                    <th className="text-left px-4 py-3 font-heading font-semibold">Rolle</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Empfohlener Einstieg</th>
                  </tr>
                </thead>
                <tbody>
                  {ROLLEN_MATRIX.map((row, i) => (
                    <tr key={row.rolle} className={i % 2 === 0 ? 'bg-white' : 'bg-[#faf9f7]'}>
                      <td className="px-4 py-3 text-[#071013] font-medium">{row.rolle}</td>
                      <td className="px-4 py-3 text-gray-600">{row.einstieg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bruecke zur Landkarte */}
          <div className="mt-10 rounded-2xl border border-[#f90093]/30 bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <p className="text-gray-600 text-sm md:text-base">
              Nicht sicher, ob Schulung der richtige erste Schritt ist? Die KI-Landkarte beantwortet genau das: ein Workshop-Tag, der zeigt, wo Schulung reicht und wo Automatisierung mehr bringt.
            </p>
            <Link
              href="/#kontakt"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-[#c2007a] font-heading font-semibold whitespace-nowrap hover:underline"
            >
              Holen Sie sich Ihre KI-Landkarte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Warum Schulungen von <span className="text-[#f90093]">AImation</span>?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Kein Hype, echte Praxis', text: '20 Jahre Engineering. Wir kennen den Alltag in produzierenden Unternehmen. Unsere Beispiele kommen aus der Realität.' },
              { title: 'Direkt anwendbar', text: 'Jeder Teilnehmer verlässt die Schulung mit Werkzeugen, die er am nächsten Tag einsetzt. Kein Wissen fürs Schubladenschließen.' },
              { title: 'Maßgeschneidert', text: 'Keine Standardfolien. Wir passen Inhalte, Beispiele und Tempo an Ihre Branche und Ihr Team an.' },
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
            Häufige Fragen zu <span className="text-[#f90093]">KI-Schulungen</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      <EuAiActNotice />

      {/* CTA */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Bereit für die <span className="text-[#f90093]">KI-Zukunft</span>?
          </h2>
          <p className="text-gray-400 font-inter mb-8">
            30 Minuten Erstgespräch. Wir zeigen Ihnen, welche Schulung für Ihr Team Sinn ergibt.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white"
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
