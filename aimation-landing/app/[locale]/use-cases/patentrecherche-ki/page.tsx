import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import DemoTile from '@/components/ui/DemoTile';
import AgentHumanLoop from '@/components/diagrams/AgentHumanLoop';
import QktTriangle from '@/components/diagrams/QktTriangle';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/erstgespraech';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Patentrecherche automatisieren mit KI | Use Case | AImation' },
  description: 'Wie AImation Patentrecherche automatisiert: Prior-Art-Analyse in Stunden statt Tagen mit Perplexity AI und Claude. Live-Demo im Erstgespräch verfügbar.',
  alternates: { canonical: `${siteUrl}/use-cases/patentrecherche-ki` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Patentrecherche automatisieren mit KI | AImation',
    description: 'Prior-Art-Analyse in Stunden statt Tagen mit Perplexity AI und Claude. Live-Demo im Erstgespräch verfügbar.',
    url: `${siteUrl}/use-cases/patentrecherche-ki`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
};

export default async function PatentrechercheKiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === 'en') {
    return <GermanOnlyNotice namespace="enUseCaseNotice" href="/use-cases/patentrecherche-ki" />;
  }

  return (
    <>
      <Header />
      <main id="main-content" className="bg-ground pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-dim mb-6 font-inter flex-wrap">
            <Link href="/" className="hover:text-ink transition-colors">Startseite</Link>
            <span>/</span>
            <Link href="/#use-cases" className="hover:text-ink transition-colors">Use Cases</Link>
            <span>/</span>
            <span className="text-ink font-medium">Patentrecherche & Prior Art</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-heading font-semibold" style={{ backgroundColor: '#7209B7' }}>
              KNOW · Wissensmanagement
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-300 text-xs font-heading font-semibold">
              ✓ Live-Demo im Erstgespräch verfügbar
            </div>
          </div>

          <h1 className="font-heading font-bold text-ink mb-4 leading-tight" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
            Patentrecherche & Prior Art:{' '}
            <span className="text-magenta-light">Stunden statt Tage, vom Spezialisten ins ganze Team</span>
          </h1>

          <p className="text-muted font-inter leading-relaxed mb-6 text-lg">
            Automatisierte Analyse über Patentdatenbanken hinweg. Der Recherche-Agent greift per API auf EPA, USPTO, WIPO, Google Patents und weitere Quellen zu, findet relevante Prior Art, vergleicht Claims und liefert strukturierte Übersichten, ohne dass Ingenieure manuell durchsuchen müssen.
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/editorial/research.webp"
              alt="Illustration: Technische Merkmale mehrerer Lagerkonstruktionen werden anhand von Patentzeichnungen verglichen."
              fill
              sizes="(max-width: 768px) 92vw, 768px"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-dim -mt-5 mb-8">KI-generierte Illustration des Anwendungsfalls</p>

          <p className="text-muted font-inter leading-relaxed mb-4">
            Wochen Konzeptarbeit. Dann die Mail aus der Patentabteilung: Ein Wettbewerber hat genau das bereits geschützt. Projekt zurück auf Null.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            Solche Momente kennt jeder R&amp;D-Leiter. Sie entstehen nicht aus mangelnder Sorgfalt, sondern weil Patentrecherche hochqualifizierte Ingenieure über Tage bindet.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            Das Wissen über Claims und Freiheitsgrade liegt fast ausschließlich beim Patentingenieur. Der Kollege im Design entwickelt im Blindflug: entweder in ein Konkurrenzpatent hinein oder an Freiräumen vorbei, die man hätte nutzen können.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            In unserem PoC haben wir mit Perplexity AI und Claude einen Agenten gebaut, der parallel mehrere Datenbank-APIs abfragt, Claims analysiert und einen Bericht auf Engineering-Niveau liefert. Das Ziel: Recherchen, die bisher einen Tag dauern, in Stunden abzuschließen.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            Die Ergebnisse stehen nicht nur der Patentabteilung zur Verfügung, sondern jedem Ingenieur im Projekt. Was bisher beim Patentingenieur saß, ist jetzt Alltagswerkzeug für das ganze Team.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-8">
            Zusätzlich kann der Agent definierte Technologiegruppen und Wettbewerber dauerhaft überwachen und neue Anmeldungen früh melden, oft bevor sie in Fachpresse oder Produkten sichtbar werden.
          </p>
          <div className="bg-ground border border-line rounded-2xl p-6 mb-8">
            <p className="text-muted font-inter leading-relaxed italic">
              Der nächste Schritt wäre ein Chatbot, mit dem Ingenieure direkt mit den Patenten sprechen: Fragen stellen, Claims verstehen, Zusammenhänge erklären lassen, angereichert mit dem technischen Wissen Ihres Unternehmens. Oder ein autonomer Agent, der die komplette Vorrecherche übernimmt und morgens einen Bericht liefert. Beides haben wir in Projekten aufgebaut. Wer das live sehen möchte, kann das im Erstgespräch tun.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-heading font-bold text-ink mb-4">So sieht das aus</h2>
            <div className="max-w-sm">
              <DemoTile
                previewSrc="/images/editorial/patent-research.svg"
                title="Patentrecherche: strukturierter Bericht statt Trefferliste"
                badge="Demo folgt"
                placeholderNote="Screencast folgt. Im Erstgespräch zeige ich Ihnen den strukturierten Bericht, den der Recherche-Agent aus einer Patentanfrage erstellt."
              />
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <AgentHumanLoop variant="dark" className="w-full max-w-2xl h-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/25">
              <h2 className="font-heading font-bold text-ink mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-muted">
                <li>• Manuelle Patentrecherche dauert Tage und bindet teure Ingenieurskapazität</li>
                <li>• Prior Art und relevante Claims werden übersehen oder falsch eingeordnet</li>
                <li>• Freiheitsgrade bleiben unklar, Design arbeitet im Blindflug</li>
                <li>• Überblick liegt nur beim Patentingenieur, nicht bei den Entwicklern im Projekt</li>
                <li>• Wettbewerber-Monitoring und Technologiegruppen-Tracking laufen selten systematisch</li>
              </ul>
            </div>
            <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/25">
              <h2 className="font-heading font-bold text-ink mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-muted">
                <li>• Parallele Abfrage mehrerer Datenbank-APIs: EPA, USPTO, WIPO, Google Patents und weitere</li>
                <li>• Claim-Analyse und strukturierte Berichte, direkt im Engineering-Alltag weiterverwendbar</li>
                <li>• Freiheitsgrade werden sichtbar, Gestaltungsspielräume sofort erkennbar</li>
                <li>• Ergebnisse für das gesamte Team zugänglich, nicht nur für die Patentabteilung</li>
                <li>• Dauerhaftes Monitoring mit Frühwarnung bei neuen Anmeldungen und Erfindungsmeldungen</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/editorial/patent-detail.svg"
              alt="Prinzipdarstellung: Technisches Merkmal, belegte Fundstelle und fachliche Einordnung einer Patentrecherche."
              fill
              sizes="(max-width: 768px) 92vw, 768px"
              className="object-contain"
            />
          </div>

          <div className="bg-surface rounded-2xl border border-line p-6 mb-10">
            <h2 className="font-heading font-bold text-ink mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Perplexity AI', 'Claude (Anthropic)', 'Patentdatenbanken (EPA, Google Patents)', 'n8n Automation', 'Structured Output'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-ground rounded-full text-sm font-inter text-muted border border-line">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#071013] rounded-2xl p-6 mb-10 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="font-heading font-bold">Ergebnis im PoC</h2>
              <QktTriangle variant="dark" className="w-16 h-16 flex-shrink-0" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: 'Stunden', label: 'statt Tage pro Recherche' },
                { metric: 'strukturiert', label: 'Berichte statt roher Trefferlisten' },
                { metric: 'laufend', label: 'Wettbewerber-Monitoring möglich' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-magenta-light mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ground border border-line rounded-2xl p-6 mb-10">
            <h2 className="font-heading font-bold text-ink mb-3">Ehrliche Einordnung</h2>
            <p className="text-muted font-inter leading-relaxed">
              Der PoC läuft bei AImation intern. Was er kann: parallele Abfrage von EPA, USPTO, WIPO und Google Patents, strukturierte Berichte in Stunden statt Tagen. Was er nicht kann: die Bewertung durch einen Patentanwalt ersetzen. Die letzte Einschätzung bleibt beim Menschen.
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted font-inter mb-4">Haben Sie einen ähnlichen Anwendungsfall? Wir schauen gemeinsam, was auf Ihrem Fundament möglich ist.</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-[#071013]"
              style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
            >
              Kostenloses Erstgespräch buchen
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-line text-ink font-heading font-semibold hover:bg-[#071013] hover:text-white transition-all duration-200"
            >
              ← Zurück zur Hauptseite
            </Link>
            <Link
              href="/#use-cases"
              className="text-sm font-inter text-magenta-light hover:underline"
            >
              Alle Use Cases ansehen →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
