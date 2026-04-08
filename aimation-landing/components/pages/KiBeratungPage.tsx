'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

const BERATUNG_PHASES = [
  {
    phase: '1',
    name: 'Analyse',
    subtitle: 'Wo stehen wir?',
    modules: [
      { title: 'AI Readiness Assessment', desc: 'Wie bereit ist Ihr Unternehmen für KI? Prozesse, Daten, Kultur.' },
      { title: 'AI Audit', desc: 'Bewertung bestehender KI-Initiativen und Tools auf Nutzen und Risiken.' },
      { title: 'Data Readiness Check', desc: 'Sind Ihre Daten qualitativ und strukturell fit für KI-Anwendungen?' },
    ],
  },
  {
    phase: '2',
    name: 'Strategie',
    subtitle: 'Wo wollen wir hin?',
    modules: [
      { title: 'Use Case Identifikation', desc: 'Welche KI-Anwendungsfälle bringen tatsächlich ROI?' },
      { title: 'KI-Strategie & Roadmap', desc: 'Priorisierter Plan mit klaren Meilensteinen und Quick Wins.' },
      { title: 'ROI & Business Case', desc: 'Zahlen auf den Tisch: Was kostet es, was bringt es?' },
    ],
  },
  {
    phase: '3',
    name: 'Begleitung',
    subtitle: 'Wie kommen wir dahin?',
    modules: [
      { title: 'Vendor & Tool Selection', desc: 'Herstellerunabhängige Bewertung der richtigen Tools für Ihren Use Case.' },
      { title: 'Change Management', desc: 'Mitarbeiter mitnehmen. KI-Kultur aufbauen. Widerstand abbauen.' },
      { title: 'KI-Governance Setup', desc: 'Richtlinien, Datenschutz, AI Act – rechtssicher aufgestellt.' },
    ],
  },
];

const FAQ_ITEMS = [
  { q: 'Was kostet ein AI Readiness Assessment?', a: 'Das hängt von der Unternehmensgröße und Tiefe der Analyse ab. Ein Quick Check für ein KMU ist in 1-2 Tagen machbar. Wir erstellen gerne ein transparentes Angebot nach dem ersten Gespräch.' },
  { q: 'Müssen wir alle drei Phasen durchlaufen?', a: 'Nein. Alle Module sind einzeln buchbar. Wer bereits eine klare Strategie hat, startet direkt mit Begleitung. Wer Use Cases identifizieren möchte, braucht nicht zwingend einen vollständigen Audit.' },
  { q: 'Was ist der Unterschied zu einer klassischen Unternehmensberatung?', a: 'Wir sind selbst Praktiker. 20 Jahre Engineering bedeutet: Wir verstehen Ihre Prozesse, nicht nur Ihre Kennzahlen. Und wir empfehlen keine Lösung, wenn KI nicht die richtige Antwort ist – auch wenn es uns einen Auftrag kostet.' },
  { q: 'Wie lange dauert eine typische Beratung?', a: 'Ein Quick Check dauert 1-2 Tage. Ein vollständiges Strategy Package typischerweise 4-6 Wochen. Wir richten uns nach Ihrem Tempo, nicht umgekehrt.' },
  { q: 'Was passiert nach der Beratung?', a: 'Sie entscheiden. Wir können die Umsetzung begleiten, Schulungen für Ihr Team anbieten – oder Sie setzen die Roadmap mit Ihren eigenen Ressourcen um. Kein Lock-in.' },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-semibold text-[#071013] hover:bg-[#faf9f7] transition-colors"
            aria-expanded={open === i}
            style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
          >
            {item.q}
            <span className={`ml-4 flex-shrink-0 text-[#f90093] transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 font-inter text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold mb-6">
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
              AI Readiness Check anfragen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3 PHASES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            Drei Phasen. <span className="text-[#f90093]">Ein roter Faden.</span>
          </h2>
          <p className="text-gray-600 font-inter text-center mb-12 max-w-2xl mx-auto">
            Jede Phase ist einzeln buchbar. Oder wir begleiten Sie durch alle drei.
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
