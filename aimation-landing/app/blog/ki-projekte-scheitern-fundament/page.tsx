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
  title: { absolute: 'KI-Projekte scheitern nicht am Modell – sondern am Fundament | AI.mation' },
  description: 'Warum KI-Einführungen im Mittelstand still im Sand verlaufen: schmutzige Daten, Compliance-Wände, Faktor Mensch. Und warum ein kleiner PoC mehr liefert als jede Strategie.',
  alternates: { canonical: `${siteUrl}/blog/ki-projekte-scheitern-fundament` },
  openGraph: {
    title: 'KI-Projekte scheitern nicht am Modell – sondern am Fundament',
    description: 'Warum KI-Einführungen im Mittelstand still im Sand verlaufen – und wie ein Proof of Concept mehr liefert als jede Strategie.',
    url: `${siteUrl}/blog/ki-projekte-scheitern-fundament`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function KiProjekteScheiternPage() {
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
              <span className="text-[#071013] font-medium">KI-Projekte: Das Fundament entscheidet</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                KI-Strategie
              </span>
              <span className="text-xs text-gray-400 font-inter">20. April 2026</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">10 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              KI-Projekte scheitern nicht am Modell.{' '}
              <span className="text-[#f90093]">Sie scheitern an dem, was darunter liegt.</span>
            </h1>

            {/* Infografik */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-2" style={{ aspectRatio: '2/3', maxHeight: '520px' }}>
              <Image
                src="/images/blog/ki-projekte-scheitern-infografik.png"
                alt="Infografik: Die 4 häufigsten Gründe warum KI-Projekte im Mittelstand scheitern – Daten, Demo vs. Realität, Compliance, Faktor Mensch"
                fill
                className="object-contain object-top"
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
                In den letzten Monaten habe ich mit einer ganzen Reihe mittelständischer Unternehmen über KI-Einführungen gesprochen. Produktionsbetriebe, Ingenieurbüros, spezialisierte Dienstleister. Was alle gemeinsam haben: Sie wissen, dass sie handeln müssen. Was keiner offen sagt: Die meisten haben schon einen ersten Versuch hinter sich, der still und leise im Sand verlaufen ist.
              </p>
              <p className="mb-5">
                Die Erzählung lautet dann: „Wir haben das mal probiert, war irgendwie noch nicht so weit." Oder: „Der Anbieter hat uns was verkauft, das in der Demo lief, aber bei uns nicht." Oder einfach Schweigen.
              </p>
              <p className="mb-5">
                Ich möchte hier eine These ausformulieren, die sich aus zwei Dekaden in Konzernstrukturen und inzwischen etlichen Proof-of-Concepts mit Mittelständlern für mich verfestigt hat: KI-Projekte scheitern im Mittelstand selten am Modell oder an der Rechenleistung. Sie scheitern an dem, was darunter liegt. Und genau deshalb ist der kleine, ehrliche Proof of Concept kein Nice-to-have, sondern der einzige sinnvolle Einstieg.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 1: Was bremst ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was wirklich bremst
              </h2>
              <p className="mb-5">
                Bevor ich zu konkreten Beispielen komme, eine nüchterne Bestandsaufnahme, wo die Reibung in aller Regel sitzt.
              </p>

              {/* 4 Reibungspunkte als Cards */}
              <div className="grid gap-4 my-8 sm:grid-cols-2">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#f90093] text-lg">●</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Datenzustand</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Was auf PowerPoint-Folien als sauberer „Data Lake" steht, ist in der Realität oft eine gewachsene Landschaft aus SharePoint-Ablagen, Netzlaufwerken, veralteten Excel-Listen und mehreren Versionen derselben Wahrheit. Niemand ist offiziell zuständig.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#f90093] text-lg">●</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Demo versus Skalierung</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Im kleinen Pilot-Chat wirkt das Modell souverän. Im produktiven Betrieb tauchen Halluzinationen dort auf, wo vorher keine waren — weil plötzlich Sonderfälle kommen, die in der Demo nicht vorkamen. Was auf zehn Testdokumenten funktioniert, stößt auf zehntausend an Grenzen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#f90093] text-lg">●</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Compliance-Wand</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    DSGVO, EU AI Act, interne IT-Security, Haftungsfragen. Sicherheit und Recht sind keine Bremsen, die man später noch schnell umfährt. Sie sind Teil der eigentlichen Konstruktionsaufgabe. Wer das nicht von Tag eins mitdenkt, baut ein Luftschloss.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#f90093] text-lg">●</span>
                    <p className="font-heading font-semibold text-[#071013] text-sm">Faktor Mensch</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Das technisch beste Werkzeug bleibt ungenutzt, wenn das Team nicht mitgenommen wurde. Widerstand kommt selten aus Bosheit. Er kommt aus Unsicherheit — die berechtigte Sorge, den eigenen Arbeitsplatz oder das vertraute Selbstverständnis zu verlieren.
                  </p>
                </div>
              </div>

              <p className="mb-5">
                So weit die Diagnose, die sich in fast jedem Discovery-Gespräch bestätigt. Jetzt zu den Beispielen, an denen das konkret wird.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 2: Patent-PoC ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Beispiel 1: Der Patent-PoC, der etwas ganz anderes zeigte als geplant
              </h2>
              <p className="mb-5">
                Ein klassischer Use Case, den ich bei AImation in Varianten regelmäßig sehe: Ein Unternehmen möchte seine eigene Patentlandschaft und die des Wettbewerbs systematisch auswerten lassen. Auf den ersten Blick eine typische KI-Aufgabe — Texte analysieren, Cluster bilden, Trends erkennen. Moderne Sprachmodelle liefern dafür auf Anhieb beeindruckende Ergebnisse in der Demo.
              </p>
              <p className="mb-5">
                Der PoC, den wir aufsetzen, ist bewusst klein: ein definierter Technologiebereich, ein paar hundert Patentschriften, eine konkrete Fragestellung. Zeitrahmen: vier bis sechs Wochen.
              </p>
              <p className="mb-5">
                Was dabei meistens passiert, hat wenig mit der KI zu tun. In den ersten Tagen wird klar, dass die interne Patentdatenbank drei verschiedene Nummernsysteme parallel führt — aus unterschiedlichen Firmenübernahmen. Zwei Fachbereiche haben unabhängig voneinander an derselben Frage gearbeitet, mit unterschiedlichen Begriffen. Die Rechtsabteilung meldet sich und will wissen, ob externe KI-Dienste überhaupt mit diesen Dokumenten in Berührung kommen dürfen.
              </p>

              <div className="bg-[#071013] rounded-xl p-6 my-8 text-white">
                <p className="font-heading font-semibold mb-3 text-sm uppercase tracking-widest" style={{ color: '#f90093' }}>Was dieser PoC wirklich lieferte</p>
                <ul className="space-y-2 text-sm leading-relaxed text-gray-200">
                  <li className="flex items-start gap-2"><span className="text-[#f90093] mt-1 flex-shrink-0">→</span> Die KI-Komponente war in zwei Wochen lauffähig.</li>
                  <li className="flex items-start gap-2"><span className="text-[#f90093] mt-1 flex-shrink-0">→</span> Die anderen vier Wochen gingen in Datenhygiene, Abstimmung und ein sauberes Setup mit Claude über AWS Bedrock in Frankfurt.</li>
                  <li className="flex items-start gap-2"><span className="text-[#f90093] mt-1 flex-shrink-0">→</span> Am Ende lag ein ehrliches Bild vor: welche Datenquelle führend wird, welche Schnittstellen gebraucht werden, wer zuständig ist.</li>
                </ul>
              </div>

              <p className="mb-5">
                Ohne diesen PoC hätte der Kunde ein Budget für ein „Patent-KI-System" freigegeben, das mit hoher Wahrscheinlichkeit in exakt den oben genannten Hürden stecken geblieben wäre. Mit dem PoC weiß er vorher, was zu tun ist — und was nicht.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 3: Wissensbasis ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Beispiel 2: Die multimodale Ablage, die ein Organisationsproblem offenlegte
              </h2>
              <p className="mb-5">
                Ein zweites Muster, das ich immer wieder sehe: Ein Mittelständler hat über Jahre technische Dokumentationen, Prüfberichte, Herstellerunterlagen, Fotos von Anlagen, handschriftliche Notizen und gescannte Altpläne angesammelt. Die Bedienung verteilt sich auf verschiedene Systeme — und zunehmend auf das Gedächtnis einzelner Mitarbeiter. Wenn einer davon in Rente geht, entsteht ein spürbares Loch.
              </p>
              <p className="mb-5">
                Die Wunsch-Story lautet: „Wir wollen eine KI, die unsere gesamte Wissensbasis durchsuchbar macht — auch die Fotos, auch die gescannten PDFs, auch die handschriftlichen Protokolle." Technisch ist das heute mit moderner multimodaler KI grundsätzlich machbar. Modelle lesen Bilder, extrahieren Text aus schlechten Scans, verstehen Tabellen.
              </p>
              <p className="mb-5">
                Was der PoC in diesem Fall zeigt, ist selten ein technisches Problem:
              </p>

              <ul className="mb-6 space-y-3 pl-0">
                {[
                  'Niemand im Haus hat eine belastbare Antwort darauf, welche Dokumente überhaupt noch aktuell sind.',
                  'Zwei Abteilungen führen dasselbe Prüfprotokoll in zwei Versionen — und niemand kann sagen, welche stimmt.',
                  'Einige Dokumente dürfen aus rechtlichen Gründen überhaupt nicht in ein KI-System einfließen.',
                  'Die betroffenen Mitarbeiter haben Vorbehalte, wenn ihr implizites Erfahrungswissen plötzlich „abfragbar" werden soll.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f90093] text-white text-xs font-heading font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-5">
                Der PoC löst diese Probleme nicht. Aber er bringt sie zum ersten Mal auf einen Tisch, an dem sie bearbeitet werden können — bevor sechs- oder siebenstellige Budgets auf eine Lösung geworfen werden, die an genau diesen Punkten scheitern würde.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 4: Warum PoC ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Warum der PoC das richtige Werkzeug ist
              </h2>
              <p className="mb-5">
                Beide Geschichten haben dieselbe Pointe. Der PoC ist nicht in erster Linie ein technisches Bauprojekt. Er ist ein Diagnose-Instrument — für den Zustand der Daten, die Belastbarkeit der Prozesse, die Haltung des Teams und die Compliance-Realität.
              </p>
              <p className="mb-5">
                Genau das ist der Grund, warum ich bei AImation konsequent vom PoC ausgehe, statt mit einer großen Strategie zu starten. Eine Strategie, die auf ungeprüften Annahmen über die eigenen Daten, Prozesse und Menschen aufsetzt, ist in einem sich monatlich verändernden KI-Umfeld bestenfalls Theater.
              </p>

              {/* PoC Ablauf */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 my-8">
                <p className="font-heading font-semibold text-[#071013] mb-5 text-sm uppercase tracking-widest">Unser Ablauf: Discovery bis PoC</p>
                <div className="flex flex-col sm:flex-row gap-0">
                  {[
                    { step: '1', title: 'Discovery', desc: '1–2 Workshops: Daten, Tools, Prozesse, Team', weeks: 'Woche 1–2' },
                    { step: '2', title: 'PoC aufsetzen', desc: 'Konkreter Usecase, definiertes Ziel', weeks: 'Woche 2–3' },
                    { step: '3', title: 'Lernen & anpassen', desc: 'Echte Daten, echte Reibung sichtbar machen', weeks: 'Woche 3–5' },
                    { step: '4', title: 'Erkenntnisse', desc: 'Ehrliches Bild: was skaliert, was nicht', weeks: 'Woche 5–6' },
                  ].map((item, i) => (
                    <div key={i} className="flex sm:flex-col flex-1 gap-3 sm:gap-0 items-start sm:items-center relative">
                      <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                        <div className="w-10 h-10 rounded-full bg-[#f90093] text-white font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">
                          {item.step}
                        </div>
                        {i < 3 && (
                          <div className="hidden sm:block flex-1 h-px bg-gray-200 mx-2" />
                        )}
                        {i < 3 && (
                          <div className="sm:hidden w-px flex-1 bg-gray-200 ml-5 my-1" style={{ minHeight: '12px' }} />
                        )}
                      </div>
                      <div className="sm:text-center sm:mt-3 pb-4 sm:pb-0 sm:px-1">
                        <p className="font-heading font-semibold text-[#071013] text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                        <p className="text-xs text-[#f90093] font-semibold mt-1">{item.weeks}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-5">
                Das ist auch der Grund, warum der Discovery-Schritt bei uns nie übersprungen wird. Bevor ein PoC überhaupt aufgesetzt wird, schauen wir uns an, welche Tools tatsächlich im Einsatz sind, wie Daten fließen, wo sie liegen und welche Prozesse betroffen sind. Die Hälfte der späteren Reibung ist damit schon sichtbar, bevor die erste Zeile Code geschrieben wird.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 5: Was das für Sie heißt ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was das für Sie konkret heißt
              </h2>
              <p className="mb-6">
                Wenn Sie in einem mittelständischen Unternehmen Verantwortung für Digitalisierung, IT oder eine Fachabteilung tragen und gerade überlegen, wo Sie mit KI ansetzen:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">01</span> Widerstehen Sie der Versuchung, mit einer großen Strategie zu starten.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Das ist der teuerste und langsamste Weg zu scheitern. Wählen Sie eine konkrete, begrenzte Frage aus, die heute Zeit oder Geld frisst, und setzen Sie einen PoC dazu auf.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">02</span> Planen Sie ein, dass die ersten zwei Wochen Überraschungen bringen.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Datenprobleme, Zuständigkeitslücken, Compliance-Fragen, Skepsis im Team. Das ist kein Zeichen, dass Sie den falschen Anbieter gewählt haben. Das ist der Wert des PoCs — er zeigt Ihnen das Haus, bevor Sie es umbauen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">03</span> Rechnen Sie mit schmutzigen Daten, sich ändernden Anforderungen und langsamer Compliance.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ein ehrliches KI-Audit am Anfang spart am Ende sechsstellige Fehlbeträge. Das gilt für den Mittelständler genauso wie für den Konzern — ich habe die Abkürzungsversuche über viele Jahre aus der Nähe erlebt.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── FAZIT ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was bleibt
              </h2>
              <p className="mb-5">
                KI im Mittelstand gewinnt am Ende nicht, wer das modernste Modell hat. Sondern wer das Fundament sauber gebaut hat, auf dem diese Modelle arbeiten können.
              </p>
              <p className="mb-5">
                Wer jetzt einen konkreten Usecase auswählt, einen kleinen PoC startet und das dabei entstehende Wissen im Team verankert, baut etwas auf, das sich nicht kaufen lässt. Keine Beraterpräsentation liefert das. Kein Whitepaper. Nur das eigene Tun.
              </p>
              <p className="mb-5">
                Alles andere ist ein teures Luftschloss.
              </p>
            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Beratung für den Mittelstand', href: '/ki-beratung-kmu' },
                  { label: 'KI-Umsetzung & Automatisierung', href: '/ki-automatisierung-mittelstand' },
                  { label: 'KI-Schulungen für Teams', href: '/ki-schulungen-mittelstand' },
                  { label: 'Wo steht Ihr Unternehmen bei KI?', href: '/blog/6-stufen-ki-nutzung' },
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

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-[#071013] mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
              Häufige Fragen zu KI-Projekten im Mittelstand
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
              Bereit für einen ehrlichen Blick auf Ihr KI-Fundament?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              Im ersten Gespräch schauen wir gemeinsam, welcher Usecase bei Ihnen als erstes Sinn ergibt und wie ein PoC konkret aussehen könnte. 30 Minuten. Kostenlos. Ohne Verkaufspitch.
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
