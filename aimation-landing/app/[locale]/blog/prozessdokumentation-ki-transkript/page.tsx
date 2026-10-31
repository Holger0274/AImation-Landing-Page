import BlogAuthor from '@/components/BlogAuthor';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import FaqAccordion, { FAQ_ITEMS } from './FaqAccordion';
import { BlogPostingSchema, FAQPageSchema } from '@/components/StructuredData';
import TranscriptToProcess from '@/components/diagrams/TranscriptToProcess';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/erstgespraech';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Prozessdokumentation mit KI: Vom Gespräch zum geprüften Entwurf | AImation' },
  description: 'Ein Beispielablauf für Prozessdokumentation mit KI: Gespräch aufnehmen, Transkript strukturieren, offene Punkte klären und den Entwurf fachlich prüfen.',
  alternates: { canonical: `${siteUrl}/blog/prozessdokumentation-ki-transkript` },
  openGraph: {
    title: 'Prozessdokumentation mit KI: Vom Gespräch zum geprüften Entwurf',
    description: 'Aus einem Gespräch entsteht ein Entwurf mit Prozessschritten, Verantwortlichkeiten und offenen Fragen. So läuft die fachliche Prüfung ab.',
    url: `${siteUrl}/blog/prozessdokumentation-ki-transkript`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default async function ProzessdokumentationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === 'en') {
    return <GermanOnlyNotice namespace="enBlogNotice" href="/blog/prozessdokumentation-ki-transkript" />;
  }

  return (
    <>
      <BlogPostingSchema
        headline="Prozessdokumentation mit KI: Vom Gespräch zum geprüften Entwurf"
        description={metadata.description as string}
        datePublished="2026-08-10"
        url="/blog/prozessdokumentation-ki-transkript"
      />
      <FAQPageSchema faqs={FAQ_ITEMS} />
      <Header />
      <main id="main-content" className="bg-ground">
        {/* ── HERO ── */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-dim mb-6 font-inter flex-wrap">
              <Link href="/" className="hover:text-ink transition-colors">Startseite</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-ink transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink font-medium">Prozessdokumentation aus Transkript</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-magenta-light text-xs font-heading font-semibold">
                KI-Umsetzung
              </span>
              <span className="text-xs text-gray-400 font-inter">10. August 2026</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">8 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-ink mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              Prozessdokumentation mit KI:{' '}
              <span className="text-magenta-light">vom Gespräch zum geprüften Entwurf</span>
            </h1>

            <BlogAuthor />

            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 mb-2 overflow-x-auto">
              <TranscriptToProcess variant="dark" className="w-full min-w-[560px] h-auto" />
            </div>
          </div>
        </section>

        {/* ── ARTIKEL ── */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="font-inter text-ink" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.75' }}>

              <p className="mb-5">
                Eine Wareneingangsprüfung ist eingespielt. Der zuständige Ingenieur kennt die Prüfschritte, die Toleranzen und die Ausnahmen. Für eine schriftliche Verfahrensanweisung fehlt im Alltag trotzdem oft die Zeit. Ein aufgenommenes Fachgespräch kann als Ausgangspunkt für den ersten Entwurf dienen.
              </p>
              <p className="mb-5">
                Der folgende Beispielablauf zeigt, wie sich Gespräch, Transkript und KI-Strukturierung verbinden lassen. Die Prozessverantwortlichen prüfen die Aussagen und geben das Dokument frei.
              </p>
              <p className="mb-5">
                Für das Beispiel planen wir 45 Minuten für das erste Gespräch ein. Aus dem Transkript entsteht ein Entwurf mit Prozessschritten, Verantwortlichkeiten und offenen Fragen. Ein zweites Gespräch klärt die Lücken. Wie viel Nacharbeit nötig ist, hängt vom Prozess und von der Qualität der Aufnahme ab.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Der alte Weg: Schreiben statt sprechen
              </h2>
              <p className="mb-5">
                Erzählen und Aufschreiben sind zwei unterschiedliche Fähigkeiten. Die meisten erfahrenen Ingenieure können einen Ablauf, den sie seit Jahren beherrschen, druckreif erzählen, Schritt für Schritt, inklusive der Ausnahmen. Denselben Ablauf strukturiert in ein Word-Dokument zu bringen, mit Nummerierung, Verantwortlichkeiten und der richtigen Formulierung für eine Norm, ist eine andere Aufgabe. Sie kostet Zeit, die niemand eingeplant hat, und landet deshalb regelmäßig ganz unten auf der Liste.
              </p>
              <p className="mb-5">
                Das Ergebnis kennt jeder, der schon einmal in einem produzierenden Unternehmen gearbeitet hat: Verfahrensanweisungen, die drei Jahre alt sind und nicht mehr zur echten Arbeitsweise passen. Oder gar keine, weil der Ablauf nur einer Person im Kopf existiert. Genau das Problem, das wir an anderer Stelle unter dem Stichwort Wissenssicherung beschreiben, wenn ein erfahrener Entwickler in Rente geht.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was in dem Gespräch wirklich passiert
              </h2>
              <p className="mb-5">
                Es ist kein Formular, das abgearbeitet wird. Die Frage am Anfang ist immer dieselbe: „Erzählen Sie mir, wie das bei Ihnen abläuft, von vorne bis hinten." Danach hakt der Interviewer an den Stellen nach, an denen es interessant wird: Warum passiert das genau hier? Was, wenn der Standardfall nicht zutrifft? Wer entscheidet, wenn zwei Vorgaben sich widersprechen?
              </p>
              <p className="mb-5">
                Das Gespräch wird aufgenommen und automatisch transkribiert. Für den Ingenieur ändert sich dabei nichts an seiner Arbeit, er beschreibt einen Ablauf, den er sowieso im Kopf hat. Die Übersetzung in ein strukturiertes Dokument passiert danach, nicht während des Gesprächs.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Vom Transkript zum ersten Entwurf
              </h2>
              <p className="mb-5">
                Aus dem rohen Transkript, Füllwörtern und Gedankensprüngen inklusive, entsteht in mehreren KI-Schritten ein strukturierter Entwurf: nummerierte Prozessschritte in der richtigen Reihenfolge, Verantwortlichkeiten pro Schritt, erkannte Entscheidungspunkte, und eine Liste der Stellen, an denen das Gespräch unklar blieb. Diese letzte Liste ist der eigentliche Wert des Schritts, sie sagt genau, wo im zweiten Gespräch nachgehakt werden muss, statt dass jemand das ganze Dokument noch einmal von vorne liest.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was vor der Freigabe geprüft werden muss
              </h2>
              <p className="mb-5">
                Ein gut lesbarer Entwurf kann fachliche Fehler enthalten. Deshalb prüfen wir den Hauptablauf ebenso wie seltene Ausnahmen und Freigaberegeln. Die folgenden drei Bereiche helfen bei der Durchsicht:
              </p>

              <div className="grid gap-4 my-8 sm:grid-cols-3">
                <div className="bg-green-500/10 border border-green-500/25 rounded-xl p-4">
                  <p className="font-heading font-semibold text-ink mb-2 text-sm">Mit dem Gespräch abgleichen</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Hauptablauf in richtiger Reihenfolge</li>
                    <li>Der Standardfall, den man zuerst erzählt</li>
                    <li>Grobe Verantwortlichkeiten</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/25 rounded-xl p-4">
                  <p className="font-heading font-semibold text-ink mb-2 text-sm">Braucht Nachschärfen</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Selten genutzte Ausnahmefälle</li>
                    <li>Exakte Grenzwerte und Toleranzen</li>
                    <li>Formulierung für Normkonformität</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/25 rounded-xl p-4">
                  <p className="font-heading font-semibold text-ink mb-2 text-sm">Bleibt Handarbeit</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Fachliche Freigabe</li>
                    <li>Abgleich mit aktuellen Normen</li>
                    <li>Alles sicherheitsrelevante</li>
                  </ul>
                </div>
              </div>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die zweite Runde: offene Punkte klären
              </h2>
              <p className="mb-5">
                Für das zweite Gespräch werden die offenen Punkte aus dem ersten Entwurf gesammelt: „Bei Schritt 4 ist unklar, was passiert, wenn die Messung außerhalb der Toleranz liegt." Der Ingenieur beantwortet gezielt diese Fragen, der Entwurf wird aktualisiert und anschließend fachlich geprüft. Wer diesen Schritt überspringt, weil der erste Entwurf schon gut aussieht, handelt sich genau die Fehler ein, die eine Verfahrensanweisung eigentlich verhindern soll.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Wo das auf Ihr Zeit- und Kostenkonto einzahlt
              </h2>
              <p className="mb-5">
                Eine Beispielrechnung für die Planung: 45 Minuten erstes Gespräch, 20 Minuten Nachfragen und 30 Minuten Durchsicht ergeben 95 Minuten Fachzeit. Hinzu kommen Aufnahmevorbereitung, Transkription, Korrekturen und gegebenenfalls weitere Prüfungen. Das ist eine Planungsannahme. Der tatsächliche Aufwand muss am konkreten Prozess gemessen werden.
              </p>
              <p className="mb-5">
                Für einen Vergleich erfassen Sie die gesamte Bearbeitungszeit bis zur fachlichen Freigabe, die Zahl der Korrekturen und die Kalenderzeit. Vergleichen Sie diese Werte mit Ihrer bisherigen Dokumentation eines ähnlich komplexen Prozesses. Erst damit lässt sich beurteilen, ob der Ablauf Zeit spart und die nötige Qualität erreicht.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Wo das nicht funktioniert
              </h2>
              <p className="mb-5">
                Für rein handwerkliche Abläufe, bei denen das Entscheidende ein Handgriff oder ein Gefühl ist, zum Beispiel das richtige Anzugsdrehmoment „nach Erfahrung" statt nach Tabelle, ist ein gesprochenes Interview das falsche Werkzeug. Da hilft ein Video mit Kommentar mehr als jede noch so gute Transkription. Offene Punkte müssen vor der Freigabe geklärt werden. Eine plausible Formulierung ersetzt keinen Nachweis für einen Grenzwert oder einen sicherheitsrelevanten Prüfschritt.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was konkret zu tun ist
              </h2>
              <p className="mb-6">Wenn Sie das in Ihrem Team ausprobieren wollen, sehe ich drei pragmatische Schritte:</p>

              <div className="space-y-4 mb-8">
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="font-heading font-semibold text-ink mb-2">1. Einen Prozess auswählen, der nur in einem Kopf steckt</p>
                  <p className="text-muted text-sm leading-relaxed">Am meisten bringt es dort, wo aktuell gar keine Dokumentation existiert, oder wo eine Person kurz vor dem Ruhestand oder Wechsel steht. Ein mittelkomplexer Prozess eignet sich besser als der Extremfall: nicht die einfachste Routine, aber auch nicht der Prozess mit den meisten Sonderfällen im Haus.</p>
                </div>
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="font-heading font-semibold text-ink mb-2">2. Das Gespräch aufnehmen, nicht das Meeting</p>
                  <p className="text-muted text-sm leading-relaxed">Ein Vier-Augen-Gespräch funktioniert deutlich besser als eine Gruppenrunde. In der Gruppe entstehen Diskussionen über den Prozess, im Einzelgespräch wird der Prozess einfach erzählt. Das macht die Transkription sauberer und den ersten Entwurf brauchbarer.</p>
                </div>
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="font-heading font-semibold text-ink mb-2">3. Die zweite Runde nicht überspringen</p>
                  <p className="text-muted text-sm leading-relaxed">Planen Sie Zeit für die offenen Fragen und die anschließende fachliche Prüfung von Anfang an ein. Genau dieser Schritt trennt eine brauchbare Verfahrensanweisung von einer, die nur plausibel klingt.</p>
                </div>
              </div>

              <hr className="border-line my-8" />

              <h2 className="font-heading font-bold text-ink mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was bleibt
              </h2>
              <p className="mb-5">
                Wissen, das nur in einem Kopf existiert, ist immer ein Risiko, nicht erst, wenn jemand kündigt oder in Rente geht. Der Grund, warum es meistens trotzdem nicht aufgeschrieben wird, ist selten Unwille. Es ist schlicht keine Zeit dafür da.
              </p>
              <p className="mb-5">
                Der erste Schritt ist klein: Wählen Sie einen überschaubaren Prozess und vereinbaren Sie ein Gespräch mit der verantwortlichen Person. Am daraus entstehenden Entwurf können Sie prüfen, ob dieser Weg zu Ihrer Dokumentationsarbeit passt.
              </p>
              <p className="mb-5">
                Wenn Sie wissen möchten, welcher Prozess bei Ihnen als erstes dokumentiert werden sollte und wie ein solches Gespräch bei Ihnen konkret aussehen könnte, sprechen Sie mich an. Das erste Gespräch kostet nichts.
              </p>
            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-surface rounded-2xl border border-line">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Umsetzung für den Mittelstand', href: '/ki-automatisierung-mittelstand' },
                  { label: 'KI-Beratung', href: '/ki-beratung-kmu' },
                  { label: 'Use Case: Wissen vernetzen', href: '/use-cases/knowledge-graph-management' },
                  { label: 'Wo steht Ihr Unternehmen bei KI?', href: '/blog/6-stufen-ki-nutzung' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-line text-sm font-inter text-ink hover:border-[#f90093] hover:text-magenta-light transition-colors"
                  >
                    {link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-ink mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
              Häufige Fragen zur Prozessdokumentation mit KI
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
              Den ersten Prozess in Ihrem Team dokumentieren.
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              Wir zeigen Ihnen, welcher Prozess bei Ihnen als erstes dran wäre und wie das Gespräch dafür abläuft. 30 Minuten Erstgespräch. Kostenlos.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-[#071013] transition-all duration-200 hover:scale-105 active:scale-95"
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
