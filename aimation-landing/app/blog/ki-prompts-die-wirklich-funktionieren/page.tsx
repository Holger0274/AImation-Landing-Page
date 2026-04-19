import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FaqAccordion from './FaqAccordion';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const metadata: Metadata = {
  title: { absolute: 'KI-Prompts die wirklich funktionieren: 7 Muster für den Mittelstand | AI.mation' },
  description: 'Vague In, Vague Out. Diese 7 Prompt-Muster liefern sofort brauchbare Ergebnisse – in Vertrieb, HR und Produktion. Prompt Engineering für den Arbeitsalltag.',
  alternates: { canonical: `${siteUrl}/blog/ki-prompts-die-wirklich-funktionieren` },
  openGraph: {
    title: 'KI-Prompts die wirklich funktionieren: 7 Muster für den Mittelstand',
    description: 'Vague In, Vague Out. Diese 7 Prompt-Muster liefern sofort brauchbare Ergebnisse.',
    url: `${siteUrl}/blog/ki-prompts-die-wirklich-funktionieren`,
    type: 'article',
    locale: 'de_DE',
  },
  robots: { index: true, follow: true },
};

const PROMPT_MUSTER = [
  {
    nr: '01',
    titel: 'Die Rolle-Aufgabe-Format-Formel',
    prompt: '"Du bist ein erfahrener Vertriebsmitarbeiter in einem deutschen Maschinenbauunternehmen. Schreibe eine Nachfass-E-Mail an einen potenziellen Kunden, der letzte Woche unser Angebot für eine CNC-Fräsmaschine erhalten hat. Ton: professionell, aber nicht aufdringlich. Länge: maximal 8 Sätze."',
    warum: 'Ohne Rolle, Aufgabe und Format bekommt man eine generische E-Mail. Mit diesen drei Elementen bekommt man etwas, das man fast unverändert verschicken kann.',
    anwendung: 'Vertrieb, HR, Marketing',
  },
  {
    nr: '02',
    titel: 'Der Kontext-Block',
    prompt: '"Kontext: Wir sind ein mittelständischer Automobilzulieferer mit 120 Mitarbeitern. Unser Produkt: Präzisionskomponenten für Tier-1-Lieferanten. Unser Problem: Lange Durchlaufzeiten in der Auftragsabwicklung.\n\nAufgabe: Identifiziere die 5 häufigsten Bottlenecks bei der Auftragsabwicklung in Unternehmen wie unserem und nenne konkrete Lösungsansätze."',
    warum: 'Je mehr relevanter Kontext, desto spezifischer die Antwort. Statt generischer Beratung bekommen Sie Antworten, die zu Ihrer Situation passen.',
    anwendung: 'Analyse, Prozessoptimierung, Strategie',
  },
  {
    nr: '03',
    titel: 'Schritt-für-Schritt denken lassen',
    prompt: '"Denke Schritt für Schritt nach, bevor du antwortest: Welche Risiken entstehen, wenn wir unsere Produktionsplanung vollständig auf ein KI-System umstellen? Beginne mit den offensichtlichsten Risiken, dann die weniger offensichtlichen."',
    warum: '"Denke Schritt für Schritt" aktiviert das Reasoning des Modells. Die Antworten werden differenzierter, strukturierter und weniger oberflächlich.',
    anwendung: 'Risikoanalyse, Entscheidungsvorbereitung, technische Bewertung',
  },
  {
    nr: '04',
    titel: 'Das Gegenlese-Muster',
    prompt: '"Hier ist mein Entwurf für ein Angebot an Kunde X: [Text einfügen]\n\nAufgabe: Lies diesen Entwurf wie ein kritischer Einkäufer auf Kundenseite. Welche Fragen bleiben offen? Was klingt unklar? Was könnte Einwände auslösen? Liste die Punkte auf."',
    warum: 'Die KI schlüpft in eine andere Perspektive und findet Schwachstellen, die man selbst nicht mehr sieht. Ein Qualitäts-Check in 30 Sekunden.',
    anwendung: 'Angebote, Präsentationen, Stellenanzeigen, Verträge',
  },
  {
    nr: '05',
    titel: 'Vergleich mit Beispielen',
    prompt: '"Erkläre den Unterschied zwischen RAG-Systemen und Fine-Tuning. Zielgruppe: Geschäftsführer ohne technischen Hintergrund. Nutze ein konkretes Beispiel aus der Fertigung, um den Unterschied zu verdeutlichen."',
    warum: 'Abstrakte Themen werden durch Beispiele greifbar. Mit Zielgruppen-Angabe passt die KI Sprache und Tiefe automatisch an.',
    anwendung: 'Erklärungen, Schulungsunterlagen, interne Kommunikation',
  },
  {
    nr: '06',
    titel: 'Das Brainstorming-Muster',
    prompt: '"Generiere 15 Ideen, wie ein mittelständisches Logistikunternehmen KI in der Kundenkommunikation einsetzen könnte. Sei kreativ. Einige Ideen dürfen gewagt sein. Sortiere sie danach, welche sich in 3 Monaten umsetzen lassen vs. welche 12+ Monate brauchen."',
    warum: 'Durch eine höhere Zahl (15 statt 5) erzwingt man, dass die KI auch über das Offensichtliche hinausdenkt. Die Sortierung nach Umsetzbarkeit macht die Liste sofort nutzbar.',
    anwendung: 'Innovation, Use-Case-Findung, Workshops',
  },
  {
    nr: '07',
    titel: 'Das Erst-dann-Muster',
    prompt: '"Bevor du antwortest: Stelle mir 3 Fragen, die dir helfen, eine bessere Antwort zu geben. Warte auf meine Antworten, dann erstelle die Lösung."',
    warum: 'Bei komplexen Aufgaben lohnt es sich, die KI zuerst nach fehlenden Informationen fragen zu lassen. Das Ergebnis ist deutlich gezielter als ein erster Versuch ins Blaue.',
    anwendung: 'Komplexe Aufgaben, individuelle Texte, Analysen',
  },
];

export default function KiPromptsPage() {
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
              <span className="text-[#071013] font-medium">KI-Prompts für den Arbeitsalltag</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                Prompt Engineering
              </span>
              <span className="text-xs text-gray-400 font-inter">1. April 2025</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">6 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              KI-Prompts, die wirklich funktionieren:{' '}
              <span className="text-[#f90093]">7 Muster für den Arbeitsalltag im Mittelstand</span>
            </h1>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-2">
              <Image
                src="/images/blog/ki-prompts-hero.jpg"
                alt="Prompt Engineering – präzise KI-Befehle die sofort funktionierende Ergebnisse liefern"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── ARTIKEL ── */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-gray max-w-none font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.75' }}>

              <p>
                "Schreib mir eine E-Mail." Wer so einen Prompt eingibt, bekommt eine generische E-Mail. "Schreib mir eine Nachfass-E-Mail an einen Kunden, der seit zwei Wochen nicht geantwortet hat, für ein Angebot über eine neue Fertigungslinie – sachlich, nicht aufdringlich, max. 6 Sätze." Wer das eingibt, bekommt etwas, das er fast unverändert verschicken kann.
              </p>
              <p className="font-semibold text-[#071013]">Der Unterschied liegt im Prompt. Nicht im Modell.</p>
              <p>
                Viele Mittelständler testen KI, sind enttäuscht und schließen den Tab wieder. Nicht weil die KI schlecht ist. Sondern weil niemand erklärt hat, wie man mit ihr spricht. Diese 7 Muster nutze ich selbst täglich — und sie sind das, was ich in KI-Schulungen immer zuerst zeige, weil sie sofort einen Unterschied machen.
              </p>

              <hr className="border-gray-200 my-8" />
            </div>

            {/* ── MUSTER-CARDS ── */}
            <div className="space-y-6 mb-12">
              {PROMPT_MUSTER.map((muster) => (
                <div key={muster.nr} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-heading font-bold text-sm"
                        style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                      >
                        {muster.nr}
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-[#071013] leading-snug" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                          {muster.titel}
                        </h2>
                        <p className="text-xs text-gray-400 font-inter mt-1">Einsatz: {muster.anwendung}</p>
                      </div>
                    </div>

                    <div className="bg-[#faf9f7] rounded-xl p-4 mb-4 border border-gray-200">
                      <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-2">Beispiel-Prompt</p>
                      <p className="font-inter text-sm text-gray-700 leading-relaxed whitespace-pre-line italic">
                        {muster.prompt}
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <p className="text-xs font-heading font-semibold text-green-700 uppercase tracking-widest mb-1">Warum das funktioniert</p>
                      <p className="font-inter text-sm text-gray-700 leading-relaxed">{muster.warum}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-gray max-w-none font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.75' }}>
              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Vom einzelnen Prompt zur Prompt-Bibliothek
              </h2>
              <p>
                Diese 7 Muster sind ein Anfang. Das Ziel für Ihr Unternehmen sollte eine eigene Prompt-Bibliothek sein: eine Sammlung getesteter, rollenspezifischer Vorlagen, die das ganze Team nutzt – für Vertrieb, HR, Produktion, Marketing und Führung.
              </p>
              <p>
                Der Unterschied zwischen Einzelprompts und einer Prompt-Bibliothek ist der Unterschied zwischen einem Mitarbeiter, der gelegentlich KI nutzt, und einem Team, das systematisch davon profitiert. In unseren{' '}
                <Link href="/ki-schulungen-mittelstand" className="text-[#f90093] hover:underline">KI-Schulungen</Link>
                {' '}bauen wir genau das gemeinsam auf.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was gute Prompts nicht ersetzen können
              </h2>
              <p>
                Auch der beste Prompt ersetzt kein kritisches Denken. KI-Modelle halluzinieren. Sie erfinden Fakten, die plausibel klingen. Sie übernehmen Bias aus ihren Trainingsdaten. Und sie kennen Ihr Unternehmen so gut wie Sie es ihnen erklären.
              </p>
              <p>
                Das ist kein Argument gegen KI. Es ist ein Argument dafür, KI mit dem richtigen Rahmen einzusetzen: mit klaren Regeln, welche Outputs geprüft werden müssen, und mit einem Team, das weiß, wann man KI vertraut und wann nicht. Das ist genau das, was wir in unserer{' '}
                <Link href="/ki-beratung-kmu" className="text-[#f90093] hover:underline">KI-Beratung</Link>
                {' '}erarbeiten.
              </p>
            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Schulungen für den Mittelstand', href: '/ki-schulungen-mittelstand' },
                  { label: 'KI-Beratung', href: '/ki-beratung-kmu' },
                  { label: 'Schatten-KI im Unternehmen', href: '/blog/schatten-ki-unternehmen' },
                  { label: 'Die 6 Stufen der KI-Nutzung', href: '/blog/6-stufen-ki-nutzung' },
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
              Häufige Fragen zu Prompt Engineering
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
              KI-Kompetenz für Ihr ganzes Team aufbauen?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              In einem halben Tag zeigen wir Ihrem Team, wie sie KI wirklich produktiv einsetzen – mit konkreten Prompts für Ihre Aufgaben. 30 Minuten Erstgespräch. Kostenlos.
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
