import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FaqAccordion from './FaqAccordion';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Die 6 Stufen der KI-Nutzung: Von Prompting bis autonome Agenten | AI.mation' },
  description: '82% der KMUs haben Kompetenzlücken bei KI. Wo steht Ihr Unternehmen? Die 6 Stufen von Prompting bis Multi-Agenten-Systeme – mit konkreten Beispielen und nächsten Schritten.',
  alternates: { canonical: `${siteUrl}/blog/6-stufen-ki-nutzung` },
  openGraph: {
    title: 'Die 6 Stufen der KI-Nutzung: Von Prompting bis autonome Agenten',
    description: '82% der KMUs haben Kompetenzlücken bei KI. Wo steht Ihr Unternehmen? Mit konkreten Beispielen und nächsten Schritten.',
    url: `${siteUrl}/blog/6-stufen-ki-nutzung`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const STUFEN = [
  {
    nr: '01',
    titel: 'Prompting (Fragen stellen)',
    wasPassiert: 'Einzelne Mitarbeiter nutzen ChatGPT, Claude oder Gemini, um Texte zu schreiben, Fragen zu beantworten oder Ideen zu generieren. "Schreib mir eine E-Mail an den Kunden." "Fasse diesen Bericht zusammen."',
    wasBringt: 'Zeitersparnis bei Einzelaufgaben. Jeder Mitarbeiter profitiert individuell.',
    wasFehlt: 'Kein Unternehmenskontext. Die KI kennt Ihre Produkte nicht, Ihre Prozesse nicht, Ihre Kunden nicht. Und wenn 30 Leute im Team jeweils eigene Prompts schreiben, ist die Qualität Zufall.',
    zeichen: '"Ja, ein paar Leute nutzen ChatGPT, aber so richtig systematisch machen wir das noch nicht."',
    naechsterSchritt: { text: 'KI-Schulung', href: '/ki-schulungen-mittelstand', suffix: ', damit das ganze Team auf einem Niveau ist und Best Practices kennt.' },
  },
  {
    nr: '02',
    titel: 'Custom GPTs (Spezialisierte KI)',
    wasPassiert: 'Statt der Standard-KI nutzen Sie vorkonfigurierte Assistenten für bestimmte Aufgaben. Ein Bot für Werkstofffragen. Ein Assistent, der Ihre Angebotsvorlagen kennt. Ein GPT, das Ihre Markensprache beherrscht.',
    wasBringt: 'Konsistentere Ergebnisse. Weniger Prompt-Bastelei. Die KI kennt zumindest einen Teil Ihres Kontexts.',
    wasFehlt: 'Die Assistenten sind isoliert. Sie können nicht auf Ihre Systeme zugreifen, keine Aktionen auslösen, keine Prozesse automatisieren. Es ist immer noch Copy-Paste zwischen KI und Ihren Tools.',
    zeichen: '"Wir haben ein paar Custom GPTs gebaut, aber die nutzen nur 3 Leute."',
    naechsterSchritt: { text: null, href: null, suffix: 'Integration in echte Workflows. Dafür brauchen Sie Stufe 3.' },
  },
  {
    nr: '03',
    titel: 'Automatisierung (Workflows)',
    wasPassiert: 'KI wird nicht mehr manuell bedient, sondern in automatisierte Abläufe eingebaut. E-Mails werden automatisch sortiert und weitergeleitet. Daten fließen von System A nach System B. Reports werden zu festen Zeiten generiert.',
    wasBringt: 'Messbare Zeitersparnis. Nicht für Einzelpersonen, sondern für ganze Teams. Prozesse laufen rund um die Uhr, auch nachts und am Wochenende.',
    wasFehlt: null,
    werkzeuge: 'n8n, Make.com, Power Automate. In Kombination mit KI-Modellen für intelligente Entscheidungen im Workflow.',
    zeichen: '"Wir haben erste Automatisierungen laufen, aber noch keine KI drin."',
    naechsterSchritt: { text: 'KI-Automatisierung', href: '/ki-automatisierung-mittelstand', suffix: ': KI in die Workflows einbauen. Das ist der Sprung zu Stufe 4.' },
  },
  {
    nr: '04',
    titel: 'KI-Automatisierung (KI in Workflows)',
    wasPassiert: 'Die Automatisierung trifft auf KI. Nicht nur "wenn Feld A = X, dann tue Y", sondern: Die KI liest eine E-Mail, versteht den Inhalt, erkennt ob es eine Beschwerde oder Bestellung ist und routet sie an die richtige Stelle. Technische Zeichnungen werden gelesen, Daten extrahiert, Normen automatisch geprüft.',
    wasBringt: 'Prozesse, die vorher manuell sortiert, geprüft oder bewertet werden mussten, laufen automatisch. Auch bei unstrukturierten Daten: Freitext-E-Mails, gescannte Dokumente, handschriftliche Notizen.',
    beispiel: 'KI liest eine technische Zeichnung (PDF, TIFF, DXF oder Scan), extrahiert Maße, Toleranzen, Werkstoffangaben und Normenverweise. Füllt Tabellen für Fertigung, QM und Einkauf. Pro Bauteil spart das Stunden.',
    zeichen: '"Unsere Automatisierungen funktionieren, aber bei unstrukturierten Daten müssen wir immer noch manuell ran."',
    naechsterSchritt: { text: null, href: null, suffix: 'Wenn die KI nicht nur in Workflows reagiert, sondern eigenständig plant und handelt, sind Sie bei Stufe 5.' },
  },
  {
    nr: '05',
    titel: 'KI-Agenten (Autonom handeln)',
    wasPassiert: 'Der Agent bekommt ein Ziel und arbeitet selbstständig darauf hin. Er plant die Schritte, greift auf verschiedene Tools zu und liefert ein Ergebnis. Ohne dass Sie jeden Schritt vorgeben. Er recherchiert Patente, schreibt den Bericht, legt ihn ab und informiert das Team. Alles in einem Durchlauf.',
    wasBringt: 'Aufgaben, die vorher einen halben Tag eines qualifizierten Mitarbeiters gekostet haben, erledigt der Agent in Minuten. Nicht bei jeder Aufgabe. Aber bei denen, die strukturiert und wiederkehrend sind.',
    beispiel: 'Der Lessons-Learned-Agent durchsucht die Projekthistorie, wenn ein neues Projekt startet. Er warnt: "Bei einem ähnlichen Retrofit-Projekt 2019 wurde die Demontagezeit um Faktor 3 unterschätzt, weil die Verkabelung hinter der Verkleidung nicht dokumentiert war." Ohne dass jemand danach gefragt hat.',
    zeichen: '"Wir haben KI-Automatisierungen, aber bei komplexen Aufgaben fehlt uns der nächste Schritt."',
    naechsterSchritt: { text: 'Alles über KI-Agenten', href: '/ki-agenten-unternehmen', suffix: ': Mehrere spezialisierte Agenten zusammenarbeiten lassen.' },
  },
  {
    nr: '06',
    titel: 'Agentische KI (Multi-Agent-Systeme)',
    wasPassiert: 'Mehrere spezialisierte Agenten arbeiten als Team. Jeder hat eine Rolle. Ein Recherche-Agent sammelt Informationen, ein Analyse-Agent bewertet sie, ein Reporting-Agent erstellt den Bericht. Oder: Drei Agenten debattieren Ihre Innovationsidee aus verschiedenen Perspektiven.',
    wasBringt: 'Komplexe, mehrstufige Aufgaben, die vorher ein ganzes Projektteam beschäftigt haben, werden systematisch und reproduzierbar bearbeitet. Jede Perspektive wird gehört. Kein Detail geht verloren.',
    beispiel: 'Das KI-Debattiersystem bewertet eine neue Produktidee. Agent 1 sammelt Argumente für die Idee (Marktpotenzial, technische Machbarkeit). Agent 2 sammelt Gegenargumente (Risiken, Kosten, Wettbewerb). Agent 3 moderiert und fasst zusammen.',
    zeichen: 'Sie brauchen Stufe 6 nicht, wenn Stufe 5 Ihre Probleme löst. Multi-Agent-Systeme lohnen sich bei hochkomplexen, strategischen Aufgaben.',
    naechsterSchritt: null,
  },
];

export default function SechsStufenPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#faf9f7]">
        {/* ── HERO ── */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter flex-wrap">
              <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-[#071013] transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#071013] font-medium">Die 6 Stufen der KI-Nutzung</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                KI-Strategie
              </span>
              <span className="text-xs text-gray-400 font-inter">15. März 2025</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">8 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              Wo steht Ihr Unternehmen bei KI?{' '}
              <span className="text-[#f90093]">Die 6 Stufen von Prompting bis autonome Agenten.</span>
            </h1>

            <p className="text-gray-600 font-inter leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)' }}>
              82% der KMUs berichten von erheblichen Kompetenzlücken bei KI, nur 23% haben bislang erfolgreiche KI-Projekte umgesetzt. Die meisten, die KI nutzen, stecken bei Stufe 1: jemand tippt eine Frage in ChatGPT. Oft ohne dass die IT davon weiß.{' '}
              <Link href="/blog/schatten-ki-unternehmen" className="text-[#f90093] hover:underline">Warum das ein Problem ist.</Link>
            </p>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-8">
              <Image
                src="/images/blog/6-stufen-hero.jpg"
                alt="Die 6 Stufen der KI-Nutzung – von Prompting bis autonome Multi-Agenten-Systeme"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="pb-8 px-4">
          <div className="max-w-3xl mx-auto font-inter text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)' }}>
            <p>
              Gleichzeitig automatisieren andere Unternehmen bereits ganze Abteilungen mit KI-Agenten, die eigenständig recherchieren, Berichte schreiben und Entscheidungen vorbereiten.
            </p>
            <p className="mt-4">
              Zwischen diesen beiden Welten liegen 6 Stufen. Dieser Artikel zeigt Ihnen, wo Sie stehen und wo der nächste sinnvolle Schritt liegt. Nicht jedes Unternehmen muss auf Stufe 6. Aber jedes sollte wissen, wo es steht.
            </p>
          </div>
        </section>

        {/* ── DIAGRAMM ── */}
        <section className="pb-8 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <Image
                src="/images/blog/6-stufen-diagramm.png"
                alt="Die 6 Stufen der KI-Nutzung im Überblick: von Prompting (01) über Custom GPTs, Automatisierung, KI-Automatisierung, KI-Agenten bis zur agentischen KI (06) – dargestellt nach Komplexität und Wertschöpfung"
                width={1366}
                height={768}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ── DIE 6 STUFEN ── */}
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {STUFEN.map((stufe) => (
              <article
                key={stufe.nr}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm"
                    style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                  >
                    {stufe.nr}
                  </span>
                  <h2 className="font-heading font-bold text-[#071013]" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.375rem)' }}>
                    Stufe {parseInt(stufe.nr, 10)}: {stufe.titel}
                  </h2>
                </div>
                <div className="px-6 py-5 space-y-4 font-inter text-sm text-gray-600 leading-relaxed">
                  <div>
                    <span className="font-semibold text-[#071013]">Was passiert: </span>
                    {stufe.wasPassiert}
                  </div>
                  <div>
                    <span className="font-semibold text-[#071013]">Was es bringt: </span>
                    {stufe.wasBringt}
                  </div>
                  {stufe.wasFehlt && (
                    <div>
                      <span className="font-semibold text-[#071013]">Was fehlt: </span>
                      {stufe.wasFehlt}
                    </div>
                  )}
                  {stufe.werkzeuge && (
                    <div>
                      <span className="font-semibold text-[#071013]">Werkzeuge: </span>
                      {stufe.werkzeuge}
                    </div>
                  )}
                  {stufe.beispiel && (
                    <div className="bg-[#faf9f7] rounded-xl p-4 border border-gray-100">
                      <span className="font-semibold text-[#071013]">Konkretes Beispiel: </span>
                      {stufe.beispiel}
                    </div>
                  )}
                  <div className="pt-1">
                    <span className="font-semibold text-[#071013]">Typisches Zeichen: </span>
                    <span className="italic">{stufe.zeichen}</span>
                  </div>
                  {stufe.naechsterSchritt && (
                    <div className="pt-1 text-[#071013]">
                      <span className="font-semibold">Nächster Schritt: </span>
                      {stufe.naechsterSchritt.text && stufe.naechsterSchritt.href ? (
                        <>
                          <Link href={stufe.naechsterSchritt.href} className="text-[#f90093] hover:underline">
                            {stufe.naechsterSchritt.text}
                          </Link>
                          {stufe.naechsterSchritt.suffix}
                        </>
                      ) : (
                        stufe.naechsterSchritt.suffix
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── WO STEHEN DIE MEISTEN ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#071013] rounded-2xl p-8 text-white">
              <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Wo stehen die meisten Unternehmen?
              </h2>
              <p className="font-inter text-gray-300 leading-relaxed mb-4" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.0625rem)' }}>
                82% der KMUs melden Kompetenzlücken bei KI, nur 23% haben erfolgreiche KI-Projekte umgesetzt. Die meisten, die KI nutzen, stecken auf Stufe 1 bis 2 – oft als Schatten-KI: Mitarbeiter nutzen ChatGPT auf dem Privathandy, ohne dass die IT davon weiß.{' '}
                <Link href="/blog/schatten-ki-unternehmen" className="text-[#f90093] hover:underline">Warum das ein Risiko ist.</Link>
              </p>
              <p className="font-inter text-gray-300 leading-relaxed mb-4" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.0625rem)' }}>
                Der größte Produktivitätssprung liegt zwischen Stufe 2 und 4. Hier wird aus "ein paar Leute nutzen ChatGPT" ein messbarer Wettbewerbsvorteil. Und der Einstieg ist günstiger und schneller als die meisten vermuten.
              </p>
              <p className="font-inter text-gray-300 leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.0625rem)' }}>
                Stufe 5 und 6 sind für Unternehmen relevant, die bereits Erfahrung mit KI-Automatisierung haben und den nächsten Schritt gehen wollen.
              </p>
            </div>
          </div>
        </section>

        {/* ── WIE FINDEN SIE IHRE STUFE ── */}
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-[#071013] mb-6" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
              Wie finden Sie Ihre Stufe?
            </h2>
            <p className="font-inter text-gray-600 mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)' }}>Drei Fragen reichen:</p>
            <div className="space-y-4">
              {[
                { nr: '1', frage: 'Gibt es in Ihrem Unternehmen eine offizielle KI-Richtlinie?', antwort: 'Wenn nein: Stufe 1, vermutlich mit Schatten-KI.' },
                { nr: '2', frage: 'Laufen KI-gestützte Prozesse automatisch, ohne dass jemand manuell eingreifen muss?', antwort: 'Wenn nein: Stufe 2 oder darunter.' },
                { nr: '3', frage: 'Können Ihre KI-Systeme eigenständig auf mehrere Datenquellen zugreifen und mehrstufige Aufgaben planen?', antwort: 'Wenn nein: Stufe 3 oder 4.' },
              ].map((q) => (
                <div key={q.nr} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-white text-xs"
                    style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                  >
                    {q.nr}
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-[#071013] text-sm mb-1">{q.frage}</p>
                    <p className="font-inter text-gray-500 text-sm">{q.antwort}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 font-inter text-gray-600 text-sm leading-relaxed">
              Für eine fundierte Einordnung gibt es den{' '}
              <Link href="/ki-beratung-kmu" className="text-[#f90093] hover:underline">AI Readiness Check</Link>
              : In zwei Tagen wissen Sie, wo Sie stehen und was der nächste sinnvolle Schritt ist.
            </p>
          </div>
        </section>

        {/* ── INTERNE LINKS ── */}
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Schulungen (Stufe 1–2)', href: '/ki-schulungen-mittelstand' },
                  { label: 'KI-Automatisierung (Stufe 3–4)', href: '/ki-automatisierung-mittelstand' },
                  { label: 'KI-Agenten (Stufe 5–6)', href: '/ki-agenten-unternehmen' },
                  { label: 'KI-Beratung', href: '/ki-beratung-kmu' },
                  { label: 'Schatten-KI im Unternehmen', href: '/blog/schatten-ki-unternehmen' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm font-inter text-[#071013] hover:border-[#f90093] hover:text-[#f90093] transition-colors"
                  >
                    {link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-[#071013] mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
              Häufige Fragen zu den KI-Stufen
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-[#071013]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-heading font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
            >
              Auf welcher Stufe steht Ihr Unternehmen?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              30 Minuten Erstgespräch. Kostenlos. Wir finden gemeinsam heraus, wo Sie stehen und welcher nächste Schritt den größten Hebel hat.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
                boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              }}
            >
              Erstgespräch buchen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
