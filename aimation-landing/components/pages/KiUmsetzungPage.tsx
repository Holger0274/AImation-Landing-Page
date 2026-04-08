'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

const SOLUTION_WORLDS = [
  {
    id: 'FLOW',
    color: '#0077B6',
    name: 'FLOW',
    subtitle: 'Workflows & Prozesse',
    type: 'Regelbasiert',
    solutions: [
      'E-Mail-Automatisierung',
      'Intelligentes Ticket-System',
      'Dokumenten-Workflows',
      'Daten-Synchronisation',
      'Lead-Qualifizierung & CRM-Automation',
    ],
  },
  {
    id: 'KNOW',
    color: '#7209B7',
    name: 'KNOW',
    subtitle: 'Wissen & Intelligence',
    type: 'Intelligent',
    solutions: [
      'RAG-Systeme & Chatbots auf Unternehmensdaten',
      'Knowledge Graph Agent',
      'Patent-Assistent',
      'Virtueller Mitarbeiter Agent',
      'Automatisierte Markt- und Technologierecherche',
    ],
  },
  {
    id: 'THINK',
    color: '#F72585',
    name: 'THINK',
    subtitle: 'Innovation & Strategie',
    type: 'Kreativ',
    solutions: [
      'Innovations-Agent (6 Hüte Methode)',
      'Ideen-Scoring-Agent',
      'Business Model Canvas Agent',
      'Transkript-Agent (Meeting-Analyse)',
      'Recherche-Agent (autonome Tiefenrecherche)',
    ],
  },
  {
    id: 'WORK',
    color: '#4CC9F0',
    name: 'WORK',
    subtitle: 'Assistenten & Produktivität',
    type: 'Assistierend',
    solutions: [
      'E-Mail-Assistent',
      'Sales Intelligence Assistent',
      'KI-gestützte Gesprächsvorbereitung',
      'Onboarding-Assistent',
      'Content-Generator',
    ],
  },
];

const FAQ_ITEMS = [
  { q: 'Was ist der Unterschied zwischen einem Workflow und einem KI-Agenten?', a: 'Ein Workflow folgt festen Regeln: Wenn A, dann B. Ein KI-Agent kann eigenständig entscheiden, Informationen recherchieren und Aufgaben planen, ohne dass jeder Schritt vorprogrammiert ist. Für strukturierte Prozesse reicht oft ein Workflow. Für komplexe Aufgaben mit variablen Inputs brauchen Sie einen Agenten.' },
  { q: 'Wie lange dauert die Implementierung?', a: 'Ein einfacher Workflow ist in 1-2 Wochen live. Ein RAG-System auf Ihren Dokumenten in 3-6 Wochen. Komplexe Multi-Agent-Systeme in 8-16 Wochen. Wir starten immer mit einem PoC – dann entscheiden Sie, ob Sie skalieren.' },
  { q: 'Welche Systeme können integriert werden?', a: 'Wir integrieren mit praktisch allem, das eine API hat: SAP, Salesforce, Microsoft 365, Google Workspace, Slack, E-Mail-Server, ERP-Systeme, Produktionsdaten. Und wenn es keine API gibt, bauen wir eine Brücke.' },
  { q: 'Bleiben unsere Daten in Deutschland?', a: 'Das entscheiden Sie. Wir bieten Lösungen mit deutschen Cloud-Providern, europäischen Modellen (Mistral) oder komplett On-Premise-Setups. DSGVO-Konformität ist Standard, keine Option.' },
  { q: 'Was kostet ein typisches Implementierungsprojekt?', a: 'Das variiert stark je nach Komplexität. Ein E-Mail-Klassifizierungs-Workflow kostet weniger als ein vollständiges RAG-System mit 50.000 Dokumenten. Wir erstellen nach dem Erstgespräch ein transparentes Angebot mit klarem Scope.' },
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

export default function KiUmsetzungPage() {
  return (
    <main id="main-content" className="bg-[#faf9f7]">
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter">
            <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#071013] font-medium">KI-Automatisierung für den Mittelstand</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold mb-6">
            Säule 3: Umsetzung
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[#071013] mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            KI-Automatisierung für den Mittelstand:{' '}
            <span className="text-[#f90093]">Lösungen, die morgen funktionieren</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 font-inter leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
          >
            Von einfachen Workflows bis zu KI-Agenten, die eigenständig recherchieren, entscheiden und handeln.
            Wir bauen Lösungen, die in Ihrer IT-Umgebung laufen – nicht nur auf Demo-Slides.
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
              href="/#use-cases"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold border-2 border-[#071013] text-[#071013] hover:bg-[#071013] hover:text-white transition-all"
            >
              Use Cases ansehen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4 SOLUTION WORLDS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            Vier Lösungswelten. <span className="text-[#f90093]">Ein Anbieter.</span>
          </h2>
          <p className="text-gray-600 font-inter text-center mb-12 max-w-2xl mx-auto">
            Alle Lösungen sind modular und kombinierbar. Wir starten dort, wo der größte Hebel liegt.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {SOLUTION_WORLDS.map((world) => (
              <div key={world.id} className="rounded-2xl border-2 p-6 md:p-8" style={{ borderColor: world.color + '40' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full text-white text-xs font-heading font-bold" style={{ backgroundColor: world.color }}>
                    {world.name}
                  </div>
                  <span className="text-gray-500 font-inter text-sm">{world.type}</span>
                </div>
                <h3 className="font-heading font-bold text-[#071013] mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>{world.subtitle}</h3>
                <ul className="space-y-2">
                  {world.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm font-inter text-gray-600">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: world.color }}></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Umsetzung, die <span className="text-[#f90093]">in der Praxis besteht</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'PoC-First-Ansatz', text: 'Kein Big Bang. Wir starten mit einem Proof of Concept, messen den Nutzen, dann skalieren wir.' },
              { title: 'Keine Vendor-Abhängigkeit', text: 'Wir bauen auf offenen Standards. Kein proprietäres System, das nur wir warten können.' },
              { title: 'DSGVO-konform', text: 'Alle Lösungen sind EU-konform. Auf Wunsch On-Premise oder mit europäischen Cloud-Providern.' },
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
            Häufige Fragen zur <span className="text-[#f90093]">KI-Automatisierung</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#071013]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Bereit für die <span className="text-[#f90093]">Umsetzung</span>?
          </h2>
          <p className="text-gray-400 font-inter mb-8">
            30 Minuten. Wir schauen gemeinsam, welche Lösung in Ihrem Unternehmen den größten Hebel hat.
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
