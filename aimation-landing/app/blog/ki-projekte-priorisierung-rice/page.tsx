import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Warum Ihr spannendstes KI-Projekt nicht zuerst kommt | AI.mation' },
  description: 'Fünf KI-Ideen, Budget für zwei: Die RICE-Formel aus dem Produktmanagement hilft bei der Priorisierung, wenn man ihre Grenzen kennt. Mit konkretem Beispiel aus einer Entwicklungsabteilung.',
  alternates: { canonical: `${siteUrl}/blog/ki-projekte-priorisierung-rice` },
  openGraph: {
    title: 'Warum Ihr spannendstes KI-Projekt nicht zuerst kommt',
    description: 'Eine einfache Formel aus dem Produktmanagement hilft bei der KI-Priorisierung, wenn man ihre Grenzen kennt.',
    url: `${siteUrl}/blog/ki-projekte-priorisierung-rice`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RicePriorisierungPage() {
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
              <span className="text-[#071013] font-medium">KI-Projekte priorisieren mit RICE</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                KI-Strategie
              </span>
              <span className="text-xs text-gray-400 font-inter">24. April 2026</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">11 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              Warum Ihr spannendstes KI-Projekt{' '}
              <span className="text-[#f90093]">nicht zuerst kommt</span>
            </h1>

            <p className="text-gray-600 font-inter leading-relaxed mb-8" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              Fünf Ideen liegen auf dem Tisch, das Budget reicht für zwei. Eine einfache Formel aus dem Produktmanagement hilft bei der Entscheidung. Wenn man ihre Grenzen kennt.
            </p>

            {/* Hero-Bild */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-2" style={{ aspectRatio: '3/2' }}>
              <Image
                src="/images/blog/rice-priorisierung-hero.jpg"
                alt="Fünf Projektkarten auf einem Schreibtisch, zwei davon mit Magenta-Highlight als priorisierte KI-Projekte"
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

              <p className="mb-5">
                Wer schon einmal in einem Priorisierungs-Meeting saß, kennt den Ablauf. Fünf Projektvorschläge, fünf Fürsprecher, fünf Folienpräsentationen. Jede Idee klingt sinnvoll. Am Ende entscheidet entweder der Lauteste oder der Ranghöchste. Manchmal beides in Personalunion.
              </p>
              <p className="mb-5">
                Dass dabei nicht zwangsläufig die besten Projekte gewinnen, ist ein offenes Geheimnis. Es liegt nicht an fehlender Kompetenz, sondern an fehlender Struktur. Wo kein gemeinsamer Maßstab existiert, setzt sich Rhetorik durch.
              </p>
              <p className="mb-5">
                Eine Formel kann das ändern. Sie heißt RICE und ist seit etwa zehn Jahren im Produktmanagement etabliert. Für die Priorisierung von KI-Projekten funktioniert sie genauso gut.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── DAS PRINZIP ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Das Prinzip
              </h2>
              <p className="mb-5">
                Jedes Projekt bekommt vier Zahlen.
              </p>

              <div className="grid gap-4 my-8 sm:grid-cols-2">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}>R</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Reach – Reichweite</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Wie viele Menschen oder Vorgänge sind pro Quartal betroffen? Eine konkrete Zahl, keine vage Andeutung.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}>I</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Impact – Wirkung</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Wie stark wirkt die Lösung pro betroffener Einheit? Skala von 3 (massiv) bis 0,25 (minimal).
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}>C</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Confidence – Sicherheit</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Wie sicher sind Sie bei Ihren Schätzungen? 100 % nur bei harten Daten, 50 % oder weniger bei Bauchgefühl. Dieser Faktor ist der heimliche Held der Formel.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}>E</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Effort – Aufwand</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Gesamtaufwand in Person-Monaten. Nicht nur Entwicklung, sondern alles: Datenaufbereitung, Integration, Schulung, Einführung.
                  </p>
                </div>
              </div>

              <div className="bg-[#071013] rounded-xl p-6 my-8 text-white text-center">
                <p className="text-xs font-heading font-semibold uppercase tracking-widest mb-5" style={{ color: '#f90093' }}>Die Formel</p>
                <div className="inline-flex items-center gap-4 font-heading font-bold" style={{ fontSize: 'clamp(1rem, 3vw, 1.375rem)' }}>
                  <span>RICE</span>
                  <span className="text-gray-400">=</span>
                  <div className="flex flex-col items-center gap-0">
                    <span className="pb-1.5" style={{ color: '#f90093' }}>Reach &times; Impact &times; Confidence</span>
                    <div className="w-full h-px bg-white" />
                    <span className="pt-1.5 text-gray-300">Effort</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-5 font-inter">Je höher der Score, desto mehr Wert pro investiertem Aufwand</p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── FÜNF IDEEN ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Fünf Ideen, eine Entwicklungsabteilung
              </h2>
              <p className="mb-5">
                Ein mittelständischer Maschinenbauer. Dreißig Konstrukteure, ein Patentingenieur. Fünf Vorschläge auf dem Tisch des Entwicklungsleiters.
              </p>

              {/* Use Case 1 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)' }}>
                Patent-Intelligence für Konstrukteure
              </h3>
              <p className="mb-5">
                Patentwissen liegt in einer Nische. Der Patentingenieur im Haus beherrscht das Patentdeutsch, ein Spezialvokabular, bei dem selbst erfahrene Konstrukteure nach drei Sätzen aussteigen. Patentansprüche werden nicht gelesen. Freedom-to-Operate-Prüfungen passieren zu spät. Patentierbare Ideen bleiben unerkannt, weil niemand im Team die Relevanz einschätzen kann.
              </p>
              <p className="mb-5">
                Ein Assistent ändert das: Jeder Konstrukteur greift in seiner eigenen Sprache auf Patentdatenbanken zu. "Verletzt meine Konstruktion hier Patente?" Der Assistent übersetzt Patentdeutsch in Konstrukteurssprache und weist konsequent darauf hin, wo der Patentingenieur vor einer finalen Entscheidung einzubinden ist.
              </p>
              <p className="mb-5">
                Aus einem Wissen, das heute in einem Kopf verwaltet wird, wird ein Alltagswerkzeug für dreißig. Der Patentingenieur verliert nicht seinen Job. Er gewinnt Zeit für die wirklich komplexen Fragen.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Reach', value: '300/Q' },
                    { label: 'Impact', value: '3 (massiv)' },
                    { label: 'Confidence', value: '75%' },
                    { label: 'Effort', value: '4 PM' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-xs text-gray-400 font-inter mb-1">{item.label}</p>
                      <p className="font-heading font-semibold text-[#071013] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-inter">300 × 3 × 0,75 ÷ 4</p>
                  <p className="font-heading font-bold text-[#f90093] text-lg">RICE = 168,75</p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* Use Case 2 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)' }}>
                Das digitale Zeichnungs-Archiv
              </h3>
              <p className="mb-5">
                Einige tausend alte Zeichnungen liegen im Archiv, viele als PDF oder TIFF, manche noch als Papierscan. Wer heute eine ähnliche Lösung aus der Vergangenheit finden will, verbringt eine halbe Stunde mit der Suche. Und findet sie oft trotzdem nicht.
              </p>
              <p className="mb-5">
                Moderne Bilderkennung macht das Archiv durchsuchbar. Maße, Toleranzen, Materialien und Teilenummern werden automatisch extrahiert. Die Frage "Wo haben wir schon mal eine Dichtung für 200 Grad und 40 bar verbaut?" beantwortet sich in Sekunden.
              </p>
              <p className="mb-5">
                Interessant ist dabei weniger die Zeitersparnis als die Verhaltensänderung. Dreißig Minuten Suche sind eine Hürde, um die man sich herumdrückt. Dreißig Sekunden werden zur Gewohnheit. Plötzlich wird mehr wiederverwendet, weniger doppelt entwickelt.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Reach', value: '400/Q' },
                    { label: 'Impact', value: '2 (hoch)' },
                    { label: 'Confidence', value: '70%' },
                    { label: 'Effort', value: '5 PM' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-xs text-gray-400 font-inter mb-1">{item.label}</p>
                      <p className="font-heading font-semibold text-[#071013] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-inter">400 × 2 × 0,70 ÷ 5</p>
                  <p className="font-heading font-bold text-[#f90093] text-lg">RICE = 112</p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* Use Case 3 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)' }}>
                Multi-Agent Innovation-Scout
              </h3>
              <p className="mb-5">
                Das strategische Projekt. Nicht für einzelne Konstruktionen, sondern für Weichenstellungen. Sollen wir auf additive Fertigung umstellen? Lohnt sich das neue Simulations-Tool? Make-or-Buy für diese Baugruppe?
              </p>
              <p className="mb-5">
                Vier spezialisierte Software-Agenten für Markt, Technik, Kosten und Risiko bekommen denselben Briefing-Input und diskutieren untereinander. Der Mensch entscheidet am Ende. Aber mit einer Datenbasis, die sich ein kleines Team allein kaum erarbeiten kann. Jede einzelne Fehlentscheidung dieser Art kostet sechs- oder siebenstellig.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Reach', value: '20/Q' },
                    { label: 'Impact', value: '3 (massiv)' },
                    { label: 'Confidence', value: '35%' },
                    { label: 'Effort', value: '8 PM' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-xs text-gray-400 font-inter mb-1">{item.label}</p>
                      <p className="font-heading font-semibold text-[#071013] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-inter">20 × 3 × 0,35 ÷ 8</p>
                  <p className="font-heading font-bold text-[#071013] text-lg">RICE = 2,6</p>
                </div>
              </div>

              <p className="mb-5 text-gray-500 italic text-sm">
                Eine Zahl, bei der man zweimal hinschaut. Dazu gleich mehr.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* Use Case 4 + 5 kompakt */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)' }}>
                Norm-Checker und Datenblatt-Extractor
              </h3>
              <p className="mb-5">
                Der Norm-Checker prüft Konstruktionen gegen DIN-, ISO- und VDI-Normen. Klingt nach einem Selbstgänger, ist aber keiner: Normen sind urheberrechtlich geschützt, viele existieren nicht in maschinenlesbarer Form. Score: 10.
              </p>
              <p className="mb-5">
                Der Datenblatt-Extractor liest Lieferanten-PDFs automatisch aus, extrahiert Kennwerte und baut Vergleichstabellen. Unspektakulär, aber solide. 150 Komponenten-Auswahlen pro Quartal, Confidence 90 %, Aufwand zwei Person-Monate. Score: 67,5.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── RANGLISTE ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die Rangliste
              </h2>

              {/* Score-Tabelle */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-[#071013] px-5 py-3">
                  <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest">RICE-Scores im Vergleich</p>
                </div>
                {[
                  { rank: 1, name: 'Patent-Intelligence', score: 168.75, tag: 'Start', top: true },
                  { rank: 2, name: 'Digitales Zeichnungs-Archiv', score: 112, tag: 'Start', top: true },
                  { rank: 3, name: 'Datenblatt-Extractor', score: 67.5, tag: 'Warteschleife', top: false },
                  { rank: 4, name: 'Norm-Checker', score: 10, tag: 'Warteschleife', top: false },
                  { rank: 5, name: 'Multi-Agent Innovation-Scout', score: 2.6, tag: 'Trotzdem starten?', top: false, strategic: true },
                ].map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-4 px-5 py-4 border-b border-gray-100 last:border-0 ${item.top ? 'bg-white' : 'bg-[#faf9f7]'}`}
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading font-bold"
                      style={item.top ? { background: 'linear-gradient(135deg, #f90093, #ff4ecd)', color: 'white' } : { background: '#e5e7eb', color: '#6b7280' }}
                    >
                      {item.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-heading font-semibold text-sm truncate ${item.top ? 'text-[#071013]' : 'text-gray-500'}`}>{item.name}</p>
                      {item.strategic && (
                        <p className="text-xs text-amber-600 font-inter mt-0.5">Strategische Reserve, trotz niedrigem Score</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="hidden sm:block w-24 bg-gray-100 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${Math.min((item.score / 169) * 100, 100)}%`,
                            background: item.top ? 'linear-gradient(135deg, #f90093, #ff4ecd)' : '#d1d5db',
                          }}
                        />
                      </div>
                      <span className={`font-heading font-bold text-sm w-12 text-right ${item.top ? 'text-[#f90093]' : 'text-gray-400'}`}>
                        {item.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-5">
                Die Entscheidung scheint offensichtlich: Budget an Patent-Intelligence und Zeichnungs-Archiv, der Rest wartet.
              </p>
              <p className="mb-5">
                Beide Siegerprojekte folgen übrigens demselben Muster. Sie nehmen Wissen aus einem Silo und machen es für viele zugänglich. Aus einem Patentingenieur werden dreißig Konstrukteure mit Patentzugang. Aus einer halbstündigen Suche wird ein Reflex.
              </p>
              <p className="mb-5">
                Die meisten KI-Projekte, die in mittelständischen Entwicklungsabteilungen wirklich funktionieren, folgen diesem Prinzip: nicht "Software macht den Spezialisten schneller", sondern "Software gibt dem Laien Zugriff auf Spezialistenwissen". Wer seine Projektliste unter dieser Brille prüft, findet oft versteckte Gewinner.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── DER MULTI-AGENT-FALL ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Der Multi-Agent-Fall
              </h2>
              <p className="mb-5">
                Und dann ist da das Multi-Agent-System. Strategisch das spannendste Projekt auf der Liste, potenziell das mit dem größten Hebel. Und mit einem Score von 2,6 abgeschlagen auf dem letzten Platz.
              </p>
              <p className="mb-5">
                Hier wird es interessant.
              </p>
              <p className="mb-5">
                Die Formel ist nicht kaputt. Sie beantwortet genau die Frage, die sie beantworten soll: Was liefert heute den größten Wert pro investiertem Aufwand? Für diese Frage stimmt der Score.
              </p>
              <p className="mb-5">
                Die Formel beantwortet aber nicht die zweite wichtige Frage, die ein Entwicklungsleiter stellen muss: Was baut uns Fähigkeiten auf, die wir in drei Jahren brauchen werden?
              </p>

              <div className="bg-[#071013] rounded-xl p-6 my-8 text-white">
                <p className="font-heading font-semibold mb-3 text-sm uppercase tracking-widest" style={{ color: '#f90093' }}>Der entscheidende Unterschied</p>
                <div className="space-y-3 text-sm leading-relaxed text-gray-200">
                  <p className="flex items-start gap-2">
                    <span className="text-[#f90093] mt-1 flex-shrink-0">→</span>
                    RICE bewertet operative Wirkung: Was liefert heute mehr Wert als es kostet?
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#f90093] mt-1 flex-shrink-0">→</span>
                    RICE bewertet keine Lernkurve: Was brauchen wir als Fähigkeit für übermorgen?
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#f90093] mt-1 flex-shrink-0">→</span>
                    Wer heute kein Team hat, das mit Multi-Agent-Systemen arbeitet, startet in drei Jahren bei null. Wenn die Technologie dann reif ist.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── 70/30 REGEL ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die 70/30-Regel
              </h2>
              <p className="mb-5">
                Was in der Praxis funktioniert: Siebzig Prozent des Budgets werden nach RICE vergeben, dreißig Prozent werden strategisch zurückgehalten.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">70 %</span> Operative Quick Wins
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sie liefern messbare Ergebnisse, bauen Vertrauen auf und finanzieren sich oft selbst. Hier ist RICE der richtige Filter. Diese Projekte rechtfertigen das Budget für die nächste Runde.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">30 %</span> Strategische Reserve
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Projekte, die RICE niedrig bewertet, die aber Zukunftsfähigkeit schaffen. Kein schneller Ertrag erwartet. Dafür weiß das Team in zwei Jahren, was es tut. Während der Wettbewerb noch Grundlagen lernt.
                  </p>
                </div>
              </div>

              <p className="mb-5">
                Wer RICE als Orakel behandelt, wird innovationsarm. Wer RICE als Filter behandelt und bewusst einen Strategie-Topf daneben stellt, hat das Beste aus beiden Welten.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── WIE SIE ANFANGEN ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Wie Sie anfangen
              </h2>
              <p className="mb-6">
                Zwei Stunden mit Ihrem Team, zehn Ideen aus der Schublade, vier Spalten in einer Tabelle.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">01</span> Bei Confidence besonders ehrlich sein.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Das ist der Faktor, der am meisten schiefgeht. Niemand gibt gern zu, sich nicht sicher zu sein. 100 % Confidence ist nur bei harten Daten gerechtfertigt. Bauchgefühl: maximal 50 %.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">02</span> Effort vollständig schätzen.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nicht nur die Entwicklung, sondern alles: Datenvorbereitung, Integration, Schulung der Nutzer, Einführungsbegleitung. Wer nur die Coding-Zeit zählt, unterschätzt systematisch.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">03</span> Einen Strategie-Slot bewusst reservieren.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Benennen Sie vor der Priorisierung explizit: "Wir reservieren 30 % für ein Projekt, das RICE niedrig bewertet, das wir aber trotzdem brauchen." Dann die Diskussion führen, welches das ist.
                  </p>
                </div>
              </div>

              <p className="mb-5">
                Am Ende des Workshops werden Sie überrascht sein. Laute Projekte rutschen nach hinten. Unscheinbare tauchen vorne auf. Das Meeting, das sonst folgenlos blieb, endet mit einer klaren Reihenfolge.
              </p>
              <p className="mb-5">
                Das ist der eigentliche Gewinn. Nicht die Zahlen, sondern die Diskussion, die dahin führt.
              </p>
            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Beratung für den Mittelstand', href: '/ki-beratung-kmu' },
                  { label: 'KI-Umsetzung & Automatisierung', href: '/ki-automatisierung-mittelstand' },
                  { label: 'Wo steht Ihr Unternehmen bei KI?', href: '/blog/6-stufen-ki-nutzung' },
                  { label: 'KI-Projekte: Das Fundament entscheidet', href: '/blog/ki-projekte-scheitern-fundament' },
                  { label: 'Patentrecherche mit KI', href: '/use-cases/patentrecherche-ki' },
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

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-[#071013]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-heading font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
            >
              Sie stehen vor der gleichen Frage?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              Ein Use-Case-Workshop mit strukturierter Priorisierung bringt in zwei halben Tagen die Reihenfolge, die Ihnen sonst Monate an Diskussion kostet. Kein Framework-Verkauf, sondern eine ehrliche Landkarte Ihrer Projektlandschaft.
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
              Discovery-Gespräch vereinbaren
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
