'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

const FAQ_ITEMS = [
  { q: 'Ersetzen KI-Agenten Mitarbeiter?', a: 'Nein. Sie ersetzen Routineaufgaben. Der QS-Leiter mit 28 Jahren Erfahrung wird nicht durch einen Agenten ersetzt. Aber sein Wissen wird digital verfügbar, und seine Routineprüfungen kann der Agent übernehmen. Das Ergebnis: Ihr QS-Leiter hat mehr Zeit für die Aufgaben, für die Sie ihn eigentlich eingestellt haben.' },
  { q: 'Wie zuverlässig sind KI-Agenten?', a: 'Moderne Agenten erreichen bei gut definierten Aufgaben Genauigkeitsraten von über 95%. Aber 95% ist nicht 100%. Deshalb gibt es menschliche Kontrolle: bei kritischen Entscheidungen prüft ein Mensch. Bei Routinetätigkeiten läuft der Agent eigenständig, mit Logging und Eskalation bei Unsicherheit.' },
  { q: 'Was passiert mit unseren Daten?', a: 'Das bestimmen Sie. Wir bieten Lösungen, die komplett auf Ihren Servern laufen: lokale Sprachmodelle (Ollama), selbst gehostete Orchestrierung (n8n), europäische Cloud-Anbieter. Keine Daten verlassen Ihr Unternehmen, wenn Sie das nicht wollen.' },
  { q: 'Brauchen wir dafür ein großes IT-Team?', a: 'Für den Aufbau: Nein, das machen wir. Für den Betrieb: Eine technisch affine Person sollte die Systeme im Blick haben. Bei einfacheren Agenten reicht auch ein Power User ohne IT-Hintergrund.' },
  { q: 'Wie lange dauert es, bis ein Agent produktiv läuft?', a: 'Einen einfachen Agenten haben wir in 2 bis 4 Wochen live. Die erste Woche ist Analyse und Setup, die zweite Implementierung, dann folgen Test und Parallelbetrieb. Bei komplexeren Systemen rechnen Sie mit 8 bis 16 Wochen.' },
  { q: 'Können wir klein anfangen?', a: 'Sollten Sie sogar. Wir empfehlen: einen Prozess identifizieren, einen PoC bauen, messen, lernen, dann skalieren. Nicht fünf Agenten gleichzeitig in die Produktion drücken.' },
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

export default function KiAgentenPage() {
  return (
    <main id="main-content" className="bg-[#faf9f7]">
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter">
            <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#071013] font-medium">KI-Agenten für Unternehmen</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold mb-6">
            KI-Agenten
          </div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[#071013] mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            KI-Agenten für Unternehmen: Was sie können, was sie kosten,{' '}
            <span className="text-[#f90093]">ob Sie sie brauchen</span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 font-inter leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
          >
            Jeder redet 2026 über KI-Agenten. Die meisten können nicht erklären, was das eigentlich ist.
            Kein Wunder: Die Begriffe werden wild durcheinandergeworfen. Chatbot, KI-Assistent, KI-Agent,
            Multi-Agenten-System. Alles dasselbe? Überhaupt nicht.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-600 font-inter leading-relaxed mb-10"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
          >
            Diese Seite erklärt den Unterschied. Ohne Buzzwords, ohne Hype, mit konkreten Beispielen
            aus dem Engineering. Damit Sie entscheiden können, ob ein KI-Agent für Ihr Unternehmen
            Sinn ergibt. Oder ob eine einfachere Lösung reicht.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-white font-heading font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Erstgespräch buchen
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── AGENT VS CHATBOT ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-6" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            KI-Agent vs. Chatbot: Der Unterschied in{' '}
            <span className="text-[#f90093]">30 Sekunden</span>
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed mb-4" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
            Ein Chatbot antwortet auf Fragen. Sie fragen, er antwortet. Fragen Sie nichts, passiert
            nichts. Er ist reaktiv.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-10" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
            Ein KI-Agent handelt eigenständig. Er bekommt ein Ziel, plant die Schritte, greift auf
            Tools zu und liefert ein Ergebnis. Ohne dass Sie jeden Schritt vorgeben müssen. Er liest
            Ihr Postfach, erkennt eine Reklamation, sucht die zugehörige Bestellung, prüft die
            Lieferhistorie und schlägt eine Antwort vor. Alles in Sekunden. Ohne dass ein Mensch
            auch nur eine Taste gedrückt hat.
          </p>
          <p className="text-gray-500 font-inter italic mb-8" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
            Der Unterschied ist wie zwischen einem Taschenrechner und einem Buchhalter. Beide rechnen.
            Aber nur einer weiß, wann er rechnen muss.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="bg-[#071013] text-white">
                  <th className="text-left px-4 py-3 font-heading font-semibold rounded-tl-xl">Eigenschaft</th>
                  <th className="text-center px-4 py-3 font-heading font-semibold">Chatbot</th>
                  <th className="text-center px-4 py-3 font-heading font-semibold rounded-tr-xl">KI-Agent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Reagiert auf Eingaben', chatbot: '✓', agent: '✓' },
                  { label: 'Handelt eigenständig', chatbot: '✗', agent: '✓' },
                  { label: 'Plant mehrstufige Aufgaben', chatbot: '✗', agent: '✓' },
                  { label: 'Greift auf externe Systeme zu', chatbot: 'Begrenzt', agent: '✓ (ERP, CRM, E-Mail)' },
                  { label: 'Lernt aus Unternehmenskontext', chatbot: 'Optional (RAG)', agent: 'Standardmäßig' },
                  { label: 'Trifft Entscheidungen', chatbot: '✗', agent: 'Im definierten Rahmen' },
                  { label: 'Typischer Einsatz', chatbot: 'FAQ, einfache Auskünfte', agent: 'Prozessautomatisierung, Analyse' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#faf9f7]'}>
                    <td className="px-4 py-3 text-[#071013] font-medium">{row.label}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.chatbot}</td>
                    <td className="px-4 py-3 text-center text-[#071013] font-medium">{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 7 REIFESTUFEN ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-4" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            Die 7 Reifestufen der{' '}
            <span className="text-[#f90093]">KI-Nutzung</span>
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed mb-10" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
            Nicht jedes Unternehmen braucht sofort KI-Agenten. Die meisten starten sinnvollerweise
            auf einer niedrigeren Stufe und arbeiten sich hoch. Hier ist der Weg:
          </p>

          <div className="space-y-4">
            {[
              {
                level: 1,
                title: 'Basis-KI',
                text: 'ChatGPT, Claude oder Gemini als Werkzeug für einzelne Mitarbeiter. Texte schreiben, Fragen beantworten, Ideen generieren. Kein Unternehmenskontext, keine Integration.',
                link: null,
                highlight: false,
              },
              {
                level: 2,
                title: 'KI-Tools',
                text: 'Spezialisierte Anwendungen für konkrete Aufgaben: Übersetzung (DeepL), Bildgenerierung, Transkription. Punktueller Einsatz, kein Workflow.',
                link: null,
                highlight: false,
              },
              {
                level: 3,
                title: 'Kontextualisierte KI',
                text: 'Die KI kennt Ihr Unternehmen. Sie greift auf interne Dokumente zu, versteht Ihre Produkte, kennt Ihre Prozesse. Technisch realisiert über RAG-Systeme. Typische Anwendungen: interne Wissenssuche, FAQ-Bots, Dokumentenanalyse.',
                link: { href: '/ki-automatisierung-mittelstand', label: 'Mehr zu RAG und Wissensmanagement' },
                highlight: false,
              },
              {
                level: 4,
                title: 'Automatisierte Workflows',
                text: 'KI ist in Prozesse eingebettet. E-Mails werden automatisch sortiert, Daten automatisch übertragen, Reports automatisch erstellt. Der Mensch prüft und gibt frei, aber die Routinearbeit läuft automatisch.',
                link: { href: '/ki-automatisierung-mittelstand', label: 'Mehr zu Workflow-Automatisierung' },
                highlight: false,
              },
              {
                level: 5,
                title: 'KI-Agenten',
                text: 'Hier beginnt die eigenständige Handlung. Der Agent plant, entscheidet im definierten Rahmen und nutzt mehrere Tools. Er liest ein Briefing, fasst zusammen, legt einen Termin an, erstellt eine Antwort und dokumentiert das Ergebnis. Teilautonom, mit menschlicher Aufsicht.',
                link: null,
                highlight: true,
              },
              {
                level: 6,
                title: 'Multi-Agenten-Systeme',
                text: 'Mehrere spezialisierte Agenten arbeiten zusammen. Ein Recherche-Agent sammelt Informationen, ein Analyse-Agent bewertet sie, ein Reporting-Agent erstellt den Bericht. Wie ein Team, nur ohne Kaffeepause.',
                link: null,
                highlight: false,
              },
              {
                level: 7,
                title: 'Autonome Systeme',
                text: 'Vollständig eigenständig arbeitende KI-Systeme. Für die meisten Unternehmen heute noch Zukunftsmusik. Und in vielen Fällen auch gar nicht das Ziel.',
                link: null,
                highlight: false,
              },
            ].map((stufe) => (
              <div
                key={stufe.level}
                className={`flex gap-4 p-5 rounded-xl border ${stufe.highlight ? 'border-[#f90093] bg-white' : 'border-gray-200 bg-white'}`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm"
                  style={stufe.highlight
                    ? { background: 'linear-gradient(135deg, #f90093, #ff4ecd)', color: 'white' }
                    : { backgroundColor: '#f4f4f5', color: '#071013' }
                  }
                >
                  {stufe.level}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-[#071013] mb-1" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
                    {stufe.title}
                    {stufe.highlight && (
                      <span className="ml-2 text-xs font-normal text-[#f90093] font-inter">(Sie sind hier)</span>
                    )}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">{stufe.text}</p>
                  {stufe.link && (
                    <Link href={stufe.link.href} className="text-[#f90093] text-sm font-inter hover:underline mt-1 inline-block">
                      {stufe.link.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#faf9f7] rounded-xl border border-gray-200">
            <p className="text-gray-600 font-inter text-sm">
              <strong className="text-[#071013]">Wo stehen Sie?</strong> Die meisten Mittelständler befinden sich auf Stufe 1 bis 2.
              Der größte Produktivitätssprung liegt oft zwischen Stufe 3 und 5.{' '}
              <Link href="/ki-beratung-kmu" className="text-[#f90093] hover:underline">
                AI Readiness Check: Finden Sie es heraus
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-4" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            KI-Agenten im Engineering: Use Cases, die kein generischer Berater{' '}
            <span className="text-[#f90093]">kennt</span>
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed mb-10" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
            Diese Use Cases kommen aus 20 Jahren Erfahrung in der Industrie. Nicht aus
            KI-Marketing-Präsentationen.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Der Lessons-Learned-Agent',
                status: 'PoC in Entwicklung',
                statusColor: '#60AFFF',
                problem: 'Ihr Unternehmen hat in den letzten 15 Jahren hunderte Projekte durchgeführt. Die Fehler und Lösungen stecken in Protokollen, E-Mails und in den Köpfen von Mitarbeitern, die teilweise nicht mehr da sind. Bei neuen Projekten werden dieselben Fehler wieder gemacht, weil niemand weiß, dass das Problem schon mal gelöst wurde.',
                solution: 'Ein KI-Agent, der auf die gesamte Projekthistorie zugreift. Wenn ein neues Retrofit-Projekt startet, warnt er automatisch: "Bei Projekt X 2019 wurde die Demontagezeit um Faktor 3 unterschätzt, weil die Verkabelung hinter der Verkleidung nicht dokumentiert war." Nicht weil jemand danach gefragt hat, sondern weil der Agent den Kontext erkennt.',
                link: null,
              },
              {
                title: 'Der Qualitätssicherungs-Agent',
                status: 'Konzeptphase',
                statusColor: '#9ca3af',
                problem: 'Ihr QS-Leiter hat 28 Jahre Erfahrung. Er hört am Klang einer CNC-Maschine, ob ein Teil innerhalb der Toleranz liegt. Wenn er in Rente geht, geht dieses Wissen mit ihm. Kein Handbuch fängt das auf.',
                solution: 'Ein Agent, der Maschinendaten (Vibrationen, Sounds, Stromaufnahme) in Echtzeit analysiert und Anomalien erkennt. Nicht als Ersatz für den QS-Leiter, sondern als System, das sein Erfahrungswissen digitalisiert und für alle verfügbar macht.',
                link: null,
              },
              {
                title: 'Der Patent-Recherche-Agent',
                status: 'PoC abgeschlossen',
                statusColor: '#f90093',
                problem: 'Patentrecherchen dauern Wochen und kosten zwischen 5.000 und 15.000 Euro pro Recherche. Trotzdem werden relevante Patente übersehen, weil die Datenmengen zu groß sind.',
                solution: 'Ein Agent, der automatisiert Patentdatenbanken durchsucht, relevante Prior Art identifiziert, Wettbewerber-Patente erkennt und strukturierte Übersichten erstellt. Der Mensch prüft und bewertet, aber die Recherche-Arbeit schrumpft um 80%.',
                link: { href: '/use-cases/patentrecherche-ki', label: 'Use Case im Detail ansehen' },
              },
              {
                title: 'Das Multi-Agenten-Debattiersystem',
                status: 'PoC in Entwicklung',
                statusColor: '#60AFFF',
                problem: 'Innovationsentscheidungen werden oft von der lautesten Stimme im Raum getrieben. Kritische Perspektiven werden als "Bedenkenträgerei" abgetan. Oder umgekehrt: Gute Ideen sterben im Risiko-Komitee.',
                solution: 'Drei KI-Agenten bewerten eine Idee aus verschiedenen Perspektiven: einer argumentiert für die Idee, einer dagegen, einer moderiert neutral und fasst zusammen. Erweiterbar mit der 6-Hüte-Methode von De Bono. Das Ergebnis ersetzt keine menschliche Entscheidung. Es stellt sicher, dass alle Perspektiven gehört werden.',
                link: null,
              },
              {
                title: 'Technische Zeichnungen als Datenquelle',
                status: 'Konzeptphase',
                statusColor: '#9ca3af',
                problem: 'In Ihrem Archiv liegen tausende technische Zeichnungen. Wenn ein Kunde nach einem ähnlichen Bauteil fragt, suchen Ihre Ingenieure manuell, ob es schon mal etwas Vergleichbares gab. Stunden später haben sie vielleicht drei Treffer.',
                solution: 'Multimodale KI analysiert technische Zeichnungen: nicht nur den Text (Maße, Materialangaben, Stücklisten), sondern die visuelle Geometrie. "Zeig mir alle Bauteile mit ähnlicher Form, die wir in den letzten 5 Jahren aus Aluminium gefertigt haben." In Sekunden statt Stunden.',
                link: null,
              },
            ].map((uc, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-heading font-semibold text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                    {uc.title}
                  </h3>
                  <span
                    className="flex-shrink-0 text-xs font-heading font-semibold px-2.5 py-1 rounded-full border"
                    style={{ color: uc.statusColor, borderColor: uc.statusColor }}
                  >
                    {uc.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wide mb-1">Das Problem</p>
                    <p className="text-gray-600 font-inter text-sm leading-relaxed">{uc.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wide mb-1">Die Lösung</p>
                    <p className="text-gray-600 font-inter text-sm leading-relaxed">{uc.solution}</p>
                  </div>
                  {uc.link && (
                    <Link href={uc.link.href} className="inline-flex items-center gap-1 text-[#f90093] text-sm font-inter hover:underline mt-2">
                      {uc.link.label} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNISCHE ARCHITEKTUR ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-4" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            Die technische Architektur{' '}
            <span className="text-[#f90093]">(vereinfacht)</span>
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed mb-8" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
            Sie müssen kein Entwickler sein, um das Prinzip zu verstehen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Sprachmodell (LLM)', role: 'Das "Gehirn"', text: 'Versteht Text, trifft Entscheidungen, generiert Antworten. Beispiele: Claude, GPT-4, Gemini, oder lokale Modelle für maximale Datenkontrolle.' },
              { title: 'Vektordatenbank', role: 'Das "Langzeitgedächtnis"', text: 'Speichert Ihre Unternehmensdokumente so, dass die KI sie semantisch durchsuchen kann.' },
              { title: 'Tool-Integration', role: 'Die "Hände"', text: 'Schnittstellen zu E-Mail, ERP, CRM, Dateisystemen, externen APIs. Damit der Agent nicht nur denken, sondern auch handeln kann.' },
              { title: 'Orchestrierung', role: 'Der "Projektmanager"', text: 'Steuert, welcher Agent wann was tut. Teilt komplexe Aufgaben in Teilschritte auf. Sorgt dafür, dass Agenten zusammenarbeiten.' },
              { title: 'Menschliche Kontrolle', role: 'Der "Auftraggeber"', text: 'Jeder Agent arbeitet in einem definierten Rahmen. Entscheidungen ab einer bestimmten Tragweite landen beim Menschen.' },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-xl border border-gray-200 p-5 ${i === 4 ? 'sm:col-span-2' : ''}`}>
                <p className="text-xs font-heading font-semibold text-[#f90093] mb-1">{item.role}</p>
                <h3 className="font-heading font-semibold text-[#071013] mb-2" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.title}</h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KOSTEN ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            Was kosten{' '}
            <span className="text-[#f90093]">KI-Agenten?</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="bg-[#071013] text-white">
                  <th className="text-left px-4 py-3 font-heading font-semibold rounded-tl-xl">Agenten-Typ</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold">Investition (Richtwert)</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold rounded-tr-xl">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Einfacher Agent (z.B. E-Mail-Routing)', cost: 'ab 5.000 €', timeline: '2 bis 4 Wochen' },
                  { type: 'Spezialisierter Agent (z.B. Dokumentenanalyse)', cost: 'ab 10.000 €', timeline: '4 bis 8 Wochen' },
                  { type: 'Multi-System-Agent (z.B. Lessons-Learned)', cost: 'ab 20.000 €', timeline: '6 bis 12 Wochen' },
                  { type: 'Multi-Agenten-System (z.B. Debattiersystem)', cost: 'ab 30.000 €', timeline: '8 bis 16 Wochen' },
                  { type: 'Laufende Kosten (API, Hosting, Wartung)', cost: '200 bis 800 €/Monat', timeline: '' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#faf9f7]'}>
                    <td className="px-4 py-3 text-[#071013]">{row.type}</td>
                    <td className="px-4 py-3 text-[#071013] font-medium">{row.cost}</td>
                    <td className="px-4 py-3 text-gray-600">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-[#faf9f7] rounded-xl border border-gray-200">
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              <strong className="text-[#071013]">Faustregel:</strong> Ein KI-Agent rechnet sich, wenn er mindestens 20 Stunden manuelle Routinearbeit pro Woche ersetzt oder ab 1.000 wiederkehrende Vorgänge pro Monat automatisiert. Darunter ist eine einfachere Automatisierung oft die bessere Wahl.{' '}
              <Link href="/ki-automatisierung-mittelstand" className="text-[#f90093] hover:underline">
                Mehr zu Workflow-Automatisierung
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── WANN / WANN NICHT ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            Wann brauchen Sie einen KI-Agenten?{' '}
            <span className="text-[#f90093]">Und wann nicht?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-heading font-semibold text-[#071013] mb-4 flex items-center gap-2">
                <span className="text-[#f90093]">✓</span> Ein KI-Agent macht Sinn, wenn:
              </h3>
              <ul className="space-y-2">
                {[
                  'Der Prozess mehrere Schritte umfasst und auf verschiedene Systeme zugreift',
                  'Entscheidungen getroffen werden müssen, die Kontextverständnis erfordern',
                  'Das Volumen hoch genug ist (1.000+ Vorgänge/Monat oder 20+ Stunden/Woche)',
                  'Wissen aus verschiedenen Quellen zusammengeführt werden muss',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 font-inter text-sm">
                    <span className="text-[#f90093] mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#faf9f7] rounded-xl border border-gray-200 p-6">
              <h3 className="font-heading font-semibold text-[#071013] mb-4 flex items-center gap-2">
                <span className="text-gray-400">✗</span> Ein KI-Agent ist überdimensioniert, wenn:
              </h3>
              <ul className="space-y-2">
                {[
                  'Der Prozess einfach regelbasiert ist ("Wenn X, dann Y")',
                  'Das Volumen niedrig ist (unter 500 Vorgänge/Monat)',
                  'Ein Standard-Tool das Problem bereits löst',
                  'Die Datenqualität grundsätzlich nicht stimmt (erst aufräumen, dann automatisieren)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 font-inter text-sm">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 font-inter text-xs mt-4">
                In diesen Fällen reicht oft eine{' '}
                <Link href="/ki-automatisierung-mittelstand" className="text-[#f90093] hover:underline">einfache Automatisierung</Link>
                {' '}oder eine{' '}
                <Link href="/ki-schulungen-mittelstand" className="text-[#f90093] hover:underline">Schulung</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-[#071013] mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
            Häufige <span className="text-[#f90093]">Fragen</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: '#071013' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full border border-[#f90093]/40 text-[#f90093] text-sm font-heading font-semibold mb-6"
            style={{ boxShadow: '0 0 20px rgba(249, 0, 147, 0.2)' }}
          >
            Kostenloses Erstgespräch
          </div>
          <h2
            className="font-heading font-bold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            Welcher Prozess in Ihrem Unternehmen wäre der perfekte Kandidat für einen{' '}
            <span className="text-[#f90093]">KI-Agenten?</span>
          </h2>
          <p className="text-gray-300 font-inter mb-10" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.125rem)' }}>
            Wir finden es gemeinsam heraus. 30 Minuten Erstgespräch, kostenlos. Keine Verkaufsveranstaltung,
            sondern eine klare Einschätzung: Lohnt sich ein Agent? Oder reicht eine einfachere Lösung?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-heading font-semibold text-white rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
                boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)',
              }}
            >
              Erstgespräch buchen
            </a>
            <Link
              href="/ki-beratung-kmu"
              className="px-8 py-4 font-heading font-semibold text-white rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Erst mehr zur Beratung erfahren
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
