import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import { BlogPostingSchema } from '@/components/StructuredData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Wenn RICE nicht reicht: Vier Methoden zur Bewertung von KI-Projekten | AImation' },
  description: 'Die RICE-Formel hat blinde Flecken. Vier ergänzende Methoden zur Bewertung von KI-Projekten, erklärt an denselben Engineering-Beispielen wie Teil 1.',
  alternates: { canonical: `${siteUrl}/blog/bewertungsmethoden-ki-projekte` },
  openGraph: {
    title: 'Wenn RICE nicht reicht: Vier Methoden zur Bewertung von KI-Projekten',
    description: 'Impact-Effort-Matrix, WSJF, AI-Feasibility und Weighted Scoring im direkten Vergleich, mit denselben fünf Projekten aus dem Maschinenbau.',
    url: `${siteUrl}/blog/bewertungsmethoden-ki-projekte`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const METHODS = [
  {
    id: '01',
    name: 'Impact-Effort-Matrix',
    tagline: 'Workshop-Einstieg',
    description: 'Zwei Achsen, vier Quadranten. In zehn Minuten ein gemeinsames Bild. Kein gemeinsames Urteil.',
  },
  {
    id: '02',
    name: 'WSJF',
    tagline: 'Zeitdruck & Compliance',
    description: 'Weighted Shortest Job First. Macht Dringlichkeit zu einer eigenen Dimension neben dem Wert.',
  },
  {
    id: '03',
    name: 'AI-Feasibility Matrix',
    tagline: 'KI-spezifisch',
    description: 'Bewertet technische Machbarkeit getrennt vom Wunschdenken. Speziell für KI-Projekte entwickelt.',
  },
  {
    id: '04',
    name: 'Weighted Scoring',
    tagline: 'C-Level-Entscheidungen',
    description: 'Frei wählbare Kriterien, explizite Gewichte. Flexibel und angreifbar zugleich. Das ist die Stärke.',
  },
];

const USE_CASES = [
  { name: 'Patent-Intelligence', wsjf: '2,25', feasibility: 'Hoch', weighted: '3,75' },
  { name: 'Zeichnungs-Archiv', wsjf: '2,10', feasibility: 'Mittel', weighted: '2,90' },
  { name: 'Datenblatt-Extractor', wsjf: '1,80', feasibility: 'Sehr hoch', weighted: '3,05' },
  { name: 'Norm-Checker', wsjf: '2,88', feasibility: 'Niedrig', weighted: '3,15' },
  { name: 'Multi-Agent Scout', wsjf: '2,75', feasibility: 'Niedrig', weighted: '3,10' },
];

export default async function BewertungsmethodenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === 'en') {
    return <GermanOnlyNotice namespace="enBlogNotice" href="/blog/bewertungsmethoden-ki-projekte" />;
  }

  return (
    <>
      <BlogPostingSchema
        headline="Wenn RICE nicht reicht: Vier Methoden zur Bewertung von KI-Projekten"
        description={metadata.description as string}
        datePublished="2026-05-02"
        url="/blog/bewertungsmethoden-ki-projekte"
      />
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
              <span className="text-[#071013] font-medium">Wenn RICE nicht reicht</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#c2007a] text-xs font-heading font-semibold">
                KI-Strategie
              </span>
              <span className="text-xs text-gray-400 font-inter">2. Mai 2026</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">10 Min. Lesezeit</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <Link
                href="/blog/ki-projekte-priorisierung-rice"
                className="text-xs text-[#c2007a] font-inter hover:underline"
              >
                Teil 1 lesen →
              </Link>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              Wenn RICE nicht reicht:{' '}
              <span className="text-[#f90093]">Vier Methoden</span>{' '}
              zur Bewertung von KI-Projekten
            </h1>

            <p className="text-gray-600 font-inter leading-relaxed mb-8" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              Die RICE-Formel ist ein guter Filter, aber sie hat blinde Flecken. Vier ergänzende Methoden und wann welche passt, erklärt an denselben fünf Projekten aus der Entwicklungsabteilung.
            </p>

            {/* Hero-Bild */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-2" style={{ aspectRatio: '3/2' }}>
              <Image
                src="/images/blog/bewertungsmethoden-hero.jpg"
                alt="Team bespricht gemeinsam eine Impact-Effort-Matrix am hellen Whiteboard: strukturierte Priorisierung von KI-Projekten"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── ARTIKEL ── */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.8' }}>

              {/* ── INTRO ── */}
              <p className="mb-5">
                Im ersten Teil dieser Serie haben wir fünf KI-Projektvorschläge mit der RICE-Formel durchgerechnet: Patent-Intelligence für Konstrukteure, ein digitales Zeichnungs-Archiv, ein Multi-Agent Innovation-Scout, ein Norm-Checker und ein Datenblatt-Extractor. RICE hat klar entschieden, aber auch Grenzen gezeigt.
              </p>
              <p className="mb-5">
                Das Multi-Agent-System als strategisch wichtigstes Projekt landete auf dem letzten Platz. Der Norm-Checker wurde trotz Compliance-Relevanz niedrig bewertet. Die Formel sieht nur operative Durchschlagkraft pro investiertem Aufwand.
              </p>
              <p className="mb-5">
                Wenn man dieselben fünf Projekte mit anderen Methoden bewertet, verschiebt sich das Bild. Das ist kein Widerspruch, sondern ein Hinweis: Jede Methode beantwortet eine andere Frage. Hier sind vier, die RICE sinnvoll ergänzen.
              </p>

              {/* ── METHODEN-ÜBERSICHT ── */}
              <div className="grid gap-4 my-10 sm:grid-cols-2">
                {METHODS.map((m) => (
                  <div key={m.id} className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-xs text-white"
                        style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                      >
                        {m.id}
                      </span>
                      <div>
                        <p className="font-heading font-semibold text-[#071013] text-sm leading-tight">{m.name}</p>
                        <p className="text-xs text-[#c2007a] font-inter mt-0.5">{m.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── METHODE 1 ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Methode 1: Impact-Effort-Matrix
              </h2>
              <p className="mb-5">
                Die einfachste aller Methoden. Und oft der beste Workshop-Einstieg. Zwei Achsen, vier Quadranten. Auf der X-Achse der Aufwand, auf der Y-Achse der geschäftliche Nutzen. Jedes Projekt wird als Punkt eingetragen.
              </p>
              <p className="mb-5">
                Quick Wins sitzen oben links (hoher Nutzen, geringer Aufwand). Big Bets oben rechts (hoher Nutzen, hoher Aufwand). Fill-Ins unten links (geringer Nutzen, geringer Aufwand). Der Quadrant unten rechts heißt je nach Autor „Money Pit" oder schlicht „nicht machen".
              </p>

              {/* Matrix-Visualisierung */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-[#071013] px-5 py-3">
                  <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest">Impact-Effort-Matrix: Unsere fünf Use Cases</p>
                </div>
                <div className="bg-white p-5">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        label: 'Quick Wins',
                        color: 'border-[#f90093] bg-pink-50',
                        badge: 'Sofort starten',
                        badgeColor: 'bg-[#f90093] text-white',
                        items: ['Datenblatt-Extractor'],
                        desc: 'Hoher Nutzen · Geringer Aufwand',
                      },
                      {
                        label: 'Big Bets',
                        color: 'border-gray-300 bg-gray-50',
                        badge: 'Planen & starten',
                        badgeColor: 'bg-gray-700 text-white',
                        items: ['Patent-Intelligence', 'Zeichnungs-Archiv', 'Multi-Agent Scout'],
                        desc: 'Hoher Nutzen · Hoher Aufwand',
                      },
                      {
                        label: 'Money Pit',
                        color: 'border-red-200 bg-red-50',
                        badge: 'Überdenken',
                        badgeColor: 'bg-red-500 text-white',
                        items: ['Norm-Checker'],
                        desc: 'Geringer Nutzen · Hoher Aufwand',
                      },
                      {
                        label: 'Fill-Ins',
                        color: 'border-gray-200 bg-gray-50',
                        badge: 'Wann Zeit ist',
                        badgeColor: 'bg-gray-400 text-white',
                        items: ['–'],
                        desc: 'Geringer Nutzen · Geringer Aufwand',
                      },
                    ].map((q) => (
                      <div key={q.label} className={`rounded-xl border p-4 ${q.color}`}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-heading font-semibold text-[#071013] text-xs">{q.label}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-inter ${q.badgeColor}`}>{q.badge}</span>
                        </div>
                        <p className="text-xs text-gray-400 font-inter mb-2">{q.desc}</p>
                        <ul className="space-y-1">
                          {q.items.map((item) => (
                            <li key={item} className="text-sm font-inter text-[#071013]">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mb-5">
                Die Stärke der Matrix ist ihre Sichtbarkeit. Ein Team, das fünfzehn Ideen auf ein Whiteboard klebt, hat in zehn Minuten einen gemeinsamen Überblick. Die Schwäche ist offensichtlich: Confidence fehlt. Das Multi-Agent-System erscheint hier als attraktives Big Bet, obwohl RICE zeigt, dass die Umsetzungswahrscheinlichkeit heute niedrig ist.
              </p>

              <div className="bg-[#071013] rounded-xl p-5 my-6 text-white">
                <p className="font-heading font-semibold text-sm mb-2" style={{ color: '#f90093' }}>Empfehlung</p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Impact-Effort-Matrix als Einstieg in ein Priorisierungs-Meeting nutzen, um die Landschaft zu sehen. Danach mit RICE oder einer der folgenden Methoden nachschärfen.
                </p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── METHODE 2 ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Methode 2: WSJF (Weighted Shortest Job First)
              </h2>
              <p className="mb-5">
                WSJF stammt aus dem Scaled Agile Framework und wird vor allem in größeren Entwicklungsorganisationen genutzt. Die Formel:
              </p>

              <div className="bg-[#071013] rounded-xl p-6 my-8 text-white text-center">
                <p className="text-xs font-heading font-semibold uppercase tracking-widest mb-5" style={{ color: '#f90093' }}>Die Formel</p>
                <div className="inline-flex items-center gap-4 font-heading font-bold" style={{ fontSize: 'clamp(1rem, 3vw, 1.375rem)' }}>
                  <span>WSJF</span>
                  <span className="text-gray-400">=</span>
                  <div className="flex flex-col items-center gap-0">
                    <span className="pb-1.5" style={{ color: '#f90093' }}>Cost of Delay</span>
                    <div className="w-full h-px bg-white" />
                    <span className="pt-1.5 text-gray-300">Job Size</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-5 font-inter">Cost of Delay = User-Business Value + Time Criticality + Risk Reduction/Opportunity Enablement</p>
              </div>

              <p className="mb-5">
                Der entscheidende Unterschied zu RICE: Zeitliche Dringlichkeit ist eine eigene Dimension. Ein Projekt mit Deadline wird anders bewertet als eines ohne.
              </p>
              <p className="mb-5">
                Beim Norm-Checker wirkt sich das sofort aus. Der{' '}
                <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ%3AL_202401689" target="_blank" rel="noopener" className="text-[#c2007a] underline underline-offset-2 hover:no-underline">
                  EU AI Act
                </a>{' '}
                gilt seit August 2024, die Pflichten für Hochrisiko-Anwendungen wie Norm-Checks wurden durch den EU-Digital-Omnibus zwar auf Dezember 2027 verschoben, die Vorarbeit lohnt sich trotzdem schon jetzt. Ein KI-gestützter Norm-Checker, der Konstruktionen gegen DIN-, ISO- und VDI-Normen prüft, fällt potenziell in diesen Bereich. Das erzeugt echten, messbaren Zeitdruck. User-Business Value 5, Time Criticality 9, Risk Reduction/Opportunity Enablement 9, Job Size 8, WSJF-Score: 2,88. Bei RICE lag dasselbe Projekt auf Platz 4. In der WSJF-Bewertung rückt es in die obere Hälfte.
              </p>
              <p className="mb-5">
                Beim Multi-Agent-System ist der Effekt geringer. User-Business Value 9, Time Criticality 5 (kein akuter Zeitdruck, aber mittelfristig strategisch wichtig), Risk Reduction/Opportunity Enablement 8, Job Size 8, WSJF-Score: 2,75. Besser als bei RICE, aber nicht dramatisch anders, weil die akute Dringlichkeit fehlt.
              </p>

              <div className="bg-[#071013] rounded-xl p-5 my-6 text-white">
                <p className="font-heading font-semibold text-sm mb-2" style={{ color: '#f90093' }}>Empfehlung</p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  WSJF nutzen, wenn Compliance-Themen, Marktfenster oder Wettbewerbsdruck relevant sind. Für operative Quick Wins ohne Zeitdruck bringt die zusätzliche Komplexität wenig.
                </p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── METHODE 3 ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Methode 3: Business Value vs. AI Feasibility Matrix
              </h2>
              <p className="mb-5">
                Dieser Ansatz ist speziell für KI-Projekte gedacht und wird in Varianten von Gartner, McKinsey und anderen Beratungen genutzt. Wieder eine Zwei-Achsen-Matrix, diesmal mit einer KI-spezifischen Dimension.
              </p>
              <p className="mb-5">
                Auf der X-Achse steht die AI Feasibility, zusammengesetzt aus Datenverfügbarkeit, Reifegrad der Modelle, Integrationsaufwand und interner Expertise. Auf der Y-Achse der Business Value. Das Ergebnis für unsere fünf Projekte:
              </p>

              {/* Feasibility-Tabelle */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-[#071013] px-5 py-3">
                  <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest">AI Feasibility Matrix: Einordnung der fünf Projekte</p>
                </div>
                {[
                  { name: 'Patent-Intelligence', value: 'Hoch', feasibility: 'Hoch', action: 'Jetzt starten', top: true },
                  { name: 'Zeichnungs-Archiv', value: 'Hoch', feasibility: 'Mittel', action: 'Direkt parallel starten', top: true },
                  { name: 'Datenblatt-Extractor', value: 'Mittel', feasibility: 'Sehr hoch', action: 'Quick Win: sofort', top: true },
                  { name: 'Multi-Agent Scout', value: 'Hoch', feasibility: 'Niedrig', action: 'Monitor & prepare', top: false },
                  { name: 'Norm-Checker', value: 'Mittel', feasibility: 'Niedrig', action: 'Neu zuschneiden', top: false },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-wrap items-center gap-3 px-5 py-4 border-b border-gray-100 last:border-0 ${item.top ? 'bg-white' : 'bg-[#faf9f7]'}`}>
                    <div className="flex-1 min-w-0">
                      <p className={`font-heading font-semibold text-sm ${item.top ? 'text-[#071013]' : 'text-gray-500'}`}>{item.name}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-center">
                        <p className="text-xs text-gray-400 font-inter mb-0.5">Wert</p>
                        <p className="font-heading font-semibold text-xs text-[#071013]">{item.value}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400 font-inter mb-0.5">Machbarkeit</p>
                        <p className="font-heading font-semibold text-xs text-[#071013]">{item.feasibility}</p>
                      </div>
                      <span
                        className="inline-flex px-3 py-1 rounded-full text-xs font-inter"
                        style={item.top
                          ? { background: 'linear-gradient(135deg, #f90093, #ff4ecd)', color: 'white' }
                          : { background: '#e5e7eb', color: '#6b7280' }
                        }
                      >
                        {item.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-5">
                Die Stärke dieser Matrix ist ihre KI-Spezifik. Sie zwingt Teams, technische Machbarkeit getrennt vom Wunschdenken zu bewerten. Das ist besonders wertvoll, wenn die Organisation wenig KI-Erfahrung hat und Gefahr läuft, jedes Projekt zu starten, bei dem jemand „mit KI" sagt.
              </p>
              <p className="mb-5">
                Der Multi-Agent Innovation-Scout sitzt oben links: hoher Business Value, niedrige Machbarkeit. Das ist der Quadrant „Monitor and prepare". Nicht ignorieren, aber auch nicht mit Vollgas angehen. Ein kleines Team sollte Erfahrung sammeln, ohne den Ruf des ganzen KI-Programms zu riskieren.
              </p>

              <div className="bg-[#071013] rounded-xl p-5 my-6 text-white">
                <p className="font-heading font-semibold text-sm mb-2" style={{ color: '#f90093' }}>Empfehlung</p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Diese Matrix nutzen, wenn die Organisation wenig KI-Erfahrung hat. Sie verhindert den häufigsten Fehler: strategisch attraktive Projekte starten, bevor die technischen Voraussetzungen reif sind.
                </p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── METHODE 4 ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Methode 4: Weighted Scoring Model
              </h2>
              <p className="mb-5">
                Wenn die drei bisherigen Methoden nicht passen, bleibt das flexibelste Werkzeug: ein gewichtetes Bewertungsmodell mit selbst definierten Kriterien. Fünf bis sieben Kriterien, jedes mit einem Gewicht, jedes Projekt auf einer Skala von 1 bis 5. Der gewichtete Mittelwert entscheidet.
              </p>
              <p className="mb-5">
                Für die fünf Beispielprojekte könnten die Kriterien so aussehen: Compliance-Relevanz (25 %), Business Value (25 %), technische Machbarkeit (20 %), Datenverfügbarkeit (15 %), strategischer Fit (15 %).
              </p>

              {/* Scoring-Tabelle */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-[#071013] px-5 py-3 flex items-center justify-between">
                  <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest">Weighted Scoring: Ergebnisse</p>
                  <p className="text-xs text-gray-500 font-inter">Skala 1–5</p>
                </div>
                {[
                  { name: 'Patent-Intelligence', score: 3.75, top: true },
                  { name: 'Norm-Checker', score: 3.15, top: true },
                  { name: 'Multi-Agent Scout', score: 3.10, top: false },
                  { name: 'Datenblatt-Extractor', score: 3.05, top: false },
                  { name: 'Zeichnungs-Archiv', score: 2.90, top: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 px-5 py-4 border-b border-gray-100 last:border-0 ${item.top ? 'bg-white' : 'bg-[#faf9f7]'}`}>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading font-bold"
                      style={item.top ? { background: 'linear-gradient(135deg, #f90093, #ff4ecd)', color: 'white' } : { background: '#e5e7eb', color: '#6b7280' }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-heading font-semibold text-sm truncate ${item.top ? 'text-[#071013]' : 'text-gray-500'}`}>{item.name}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="hidden sm:block w-24 bg-gray-100 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${(item.score / 5) * 100}%`,
                            background: item.top ? 'linear-gradient(135deg, #f90093, #ff4ecd)' : '#d1d5db',
                          }}
                        />
                      </div>
                      <span className={`font-heading font-bold text-sm w-10 text-right ${item.top ? 'text-[#c2007a]' : 'text-gray-400'}`}>
                        {item.score.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-5">
                Interessant ist, wie sich die Rangfolge gegenüber RICE verschiebt. Wenn Compliance wichtig ist, rückt der Norm-Checker nach vorne. Wenn strategischer Fit hoch gewichtet wird, profitiert das Multi-Agent-System. Wenn Datenverfügbarkeit entscheidend ist, steigt der Datenblatt-Extractor.
              </p>
              <p className="mb-5">
                Das ist zugleich die Stärke und die Schwäche der Methode. Die Gewichte bestimmen das Ergebnis. Wer die Gewichte wählt, entscheidet implizit die Rangfolge. Ein ehrliches Team nutzt das bewusst: Die Diskussion über die Gewichte ist oft wertvoller als die Rechnung danach.
              </p>

              <div className="bg-[#071013] rounded-xl p-5 my-6 text-white">
                <p className="font-heading font-semibold text-sm mb-2" style={{ color: '#f90093' }}>Empfehlung</p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Weighted Scoring Model für komplexe Entscheidungen mit vielen Interessengruppen. In C-Level-Meetings schlägt sich die Methode besser als RICE, weil sie die strategischen Kriterien explizit macht.
                </p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── INFOGRAFIK ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Zwei weitere, kurz eingeordnet
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 text-sm">MoSCoW</p>
                  <p className="text-xs text-[#c2007a] font-inter mb-3">Must · Should · Could · Won't</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Entwickelt 1994 von Dai Clegg bei Oracle, heute fester Bestandteil agiler Methoden. Für die Priorisierung zwischen strategischen Projekten zu grob, aber hervorragend geeignet, um im ersten Schritt Muss-Projekte von Kann-Projekten zu trennen. Ein Norm-Checker mit EU-AI-Act-Deadline ist ein klares „Must have". Er wandert gar nicht erst in RICE.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 text-sm">ICE</p>
                  <p className="text-xs text-[#c2007a] font-inter mb-3">Impact · Confidence · Ease</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Von Sean Ellis entwickelt, dem Begründer des Growth Hacking. ICE ist der Vorläufer von RICE. RICE ergänzt es um die Reach-Dimension. Für schnelle Experiment-Entscheidungen in kleinen Teams ideal. Für Mittelstands-Budgetentscheidungen fehlt genau dieser Reach-Faktor: Wie viele Vorgänge oder Personen sind betroffen? Das ist oft der Unterschied zwischen Platz 1 und Platz 4.
                  </p>
                </div>
              </div>

              {/* Infografik-Bild */}
              <div className="relative w-full rounded-2xl overflow-hidden my-10" style={{ aspectRatio: '3/2' }}>
                <Image
                  src="/images/blog/bewertungsmethoden-infografik.png"
                  alt="Managerin bewertet Scoring-Modelle am Laptop: Entscheidungsunterstützung für die richtige Bewertungsmethode"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs text-gray-400 font-inter text-center -mt-6 mb-10">
                Die richtige Methode hängt von der Entscheidungssituation ab, nicht vom persönlichen Favoriten.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── WELCHE METHODE WANN ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Welche Methode wann?
              </h2>
              <p className="mb-5">
                Die ehrliche Antwort ist, dass keine einzelne Methode alle Fragen beantwortet. Eine praktische Orientierung:
              </p>

              <div className="space-y-3 my-8">
                {[
                  { context: 'Workshop-Einstieg mit vielen Ideen', method: 'Impact-Effort-Matrix', reason: 'Schafft in zehn Minuten einen gemeinsamen Überblick' },
                  { context: 'Operative Roadmap-Entscheidungen', method: 'RICE', reason: 'Das präziseste Werkzeug für Wert pro Aufwand' },
                  { context: 'Zeitdruck & Compliance-Themen', method: 'WSJF', reason: 'Macht Dringlichkeit zur eigenständigen Dimension' },
                  { context: 'KI-spezifische Priorisierung', method: 'AI-Feasibility-Matrix', reason: 'Nimmt technische Machbarkeit als eigene Achse ernst' },
                  { context: 'C-Level-Entscheidungen mit vielen Kriterien', method: 'Weighted Scoring', reason: 'Flexibel genug für komplexe Interessenlagen' },
                ].map((item) => (
                  <div key={item.context} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 font-inter mb-0.5">{item.context}</p>
                      <p className="font-heading font-semibold text-[#071013] text-sm">{item.method}</p>
                    </div>
                    <p className="text-xs text-gray-500 font-inter sm:text-right sm:max-w-[200px] leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── KOMBINATION ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die beste Praxis: Zwei bis drei kombinieren
              </h2>
              <p className="mb-5">
                Impact-Effort-Matrix zur visuellen Filterung, danach RICE oder AI-Feasibility-Matrix für die Top-Kandidaten, ergänzt durch WSJF bei Compliance-Themen, und die 70/30-Regel aus dem ersten Artikel für strategische Lerninvestitionen.
              </p>

              <div className="bg-[#071013] rounded-xl p-6 my-8 text-white">
                <p className="font-heading font-semibold mb-4 text-sm uppercase tracking-widest" style={{ color: '#f90093' }}>Der Sweet Spot</p>
                <div className="space-y-3 text-sm leading-relaxed text-gray-200">
                  <p className="flex items-start gap-2">
                    <span className="text-[#f90093] mt-1 flex-shrink-0">→</span>
                    Wer nur eine Methode wählt, wird unvollständig priorisieren.
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#f90093] mt-1 flex-shrink-0">→</span>
                    Wer alle gleichzeitig einsetzt, diskutiert nur noch Methoden statt Projekte.
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#f90093] mt-1 flex-shrink-0">→</span>
                    Der Sweet Spot liegt bei zwei bis drei passenden Werkzeugen, bewusst kombiniert auf Basis der eigenen Entscheidungssituation.
                  </p>
                </div>
              </div>

              <p className="mb-5">
                Das ist keine Methodendiskussion um ihrer selbst willen. Es ist die Antwort auf die Frage, die in jedem Priorisierungs-Meeting unausgesprochen bleibt: Messen wir hier eigentlich dasselbe?
              </p>
              <p className="mb-5">
                Meistens nicht. Und sobald das klar ist, wird die Diskussion produktiver.
              </p>

            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Teil 1: KI-Projekte priorisieren mit RICE', href: '/blog/ki-projekte-priorisierung-rice' },
                  { label: 'KI-Beratung für den Mittelstand', href: '/ki-beratung-kmu' },
                  { label: 'KI-Umsetzung & Automatisierung', href: '/ki-automatisierung-mittelstand' },
                  { label: 'KI-Projekte: Das Fundament entscheidet', href: '/blog/ki-projekte-scheitern-fundament' },
                  { label: 'Wo steht Ihr Unternehmen bei KI?', href: '/blog/6-stufen-ki-nutzung' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm font-inter text-[#071013] hover:border-[#f90093] hover:text-[#c2007a] transition-colors"
                  >
                    {link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-[#071013]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-heading font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
            >
              Welche Ihrer KI-Projekte kommt zuerst?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              Methoden sind ein Werkzeug, kein Selbstzweck. Die eigentliche Arbeit beginnt mit der ehrlichen Bewertung konkreter Vorschläge in Ihrer Organisation, mit Ihren Daten, Ihren Kriterien, Ihren strategischen Zielen. In der KI-Landkarte kombinieren wir die Methoden, die für Ihre Entscheidungen wirklich relevant sind.
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
              Holen Sie sich Ihre KI-Landkarte
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
