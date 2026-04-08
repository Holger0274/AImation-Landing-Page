'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

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

const FAQ_ITEMS = [
  { q: 'Für wen sind die Schulungen geeignet?', a: 'Für alle Unternehmensgrößen und Rollen. Wir starten mit einer Bedarfsanalyse und empfehlen dann den passenden Einstiegspunkt. Einsteiger ohne Vorkenntnisse starten mit Ebene 1, Teams die schon KI nutzen profitieren direkt von Ebene 2 oder 3.' },
  { q: 'Wie lange dauern die Schulungen?', a: 'Je nach Modul zwischen einem halben und zwei Tagen. Viele Unternehmen kombinieren mehrere Module zu einem Schulungstag. Wir passen Dauer und Format an Ihre Bedürfnisse an.' },
  { q: 'Können Schulungen auch online stattfinden?', a: 'Ja. Alle Module sind für Präsenz, Online oder Hybrid konzipiert. Bei Online-Schulungen arbeiten wir mit Live-Übungen, Breakout-Räumen und praktischen Demos – kein PowerPoint-Marathon.' },
  { q: 'Was kostet eine Schulung?', a: 'Die Preise richten sich nach Modul, Teilnehmerzahl und Format. Wir erstellen gerne ein individuelles Angebot. Als Orientierung: Ein halbtägiges Modul für eine Gruppe von 10 Personen liegt in einer anderen Preisklasse als ein zweitägiges Spezialprogramm.' },
  { q: 'Gibt es Train-the-Trainer-Formate?', a: 'Ja. Für Unternehmen, die KI-Wissen intern multiplizieren möchten, bieten wir Train-the-Trainer-Programme. Ihre internen Multiplikatoren lernen nicht nur die Inhalte, sondern auch wie sie diese weitervermitteln.' },
  { q: 'Bekommt jeder Teilnehmer Unterlagen?', a: 'Ja. Alle Teilnehmer erhalten praxisnahe Unterlagen, Prompt-Bibliotheken und Checklisten. Kein Lehrbuch-Material, sondern Werkzeuge die am nächsten Tag einsetzbar sind.' },
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold mb-6">
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
              KI-Potenzial-Check anfragen
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
        </div>
      </section>

      {/* USP STRIP */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Warum Schulungen von <span className="text-[#f90093]">AI.mation</span>?
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
