import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Patentrecherche automatisieren mit KI | Use Case | AI.mation' },
  description: 'Wie AI.mation Patentrecherche automatisiert: Prior-Art-Analyse in Stunden statt Tagen mit Perplexity AI und Claude. PoC abgeschlossen.',
  alternates: { canonical: `${siteUrl}/use-cases/patentrecherche-ki` },
  robots: { index: true, follow: true },
};

export default function PatentrechercheKiPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#faf9f7] pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter flex-wrap">
            <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
            <span>/</span>
            <Link href="/#use-cases" className="hover:text-[#071013] transition-colors">Use Cases</Link>
            <span>/</span>
            <span className="text-[#071013] font-medium">Patentrecherche & Prior Art</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-heading font-semibold" style={{ backgroundColor: '#7209B7' }}>
              KNOW · Wissensmanagement
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-heading font-semibold">
              ✓ PoC abgeschlossen
            </div>
          </div>

          <h1 className="font-heading font-bold text-[#071013] mb-4 leading-tight" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
            Patentrecherche & Prior Art:{' '}
            <span className="text-[#f90093]">Stunden statt Tage, vom Spezialisten ins ganze Team</span>
          </h1>

          <p className="text-gray-600 font-inter leading-relaxed mb-6 text-lg">
            Automatisierte Analyse über Patentdatenbanken hinweg. Der Recherche-Agent greift per API auf EPA, USPTO, WIPO, Google Patents und weitere Quellen zu, findet relevante Prior Art, vergleicht Claims und liefert strukturierte Übersichten, ohne dass Ingenieure manuell durchsuchen müssen.
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/use-cases/patentrecherche-hero.jpg"
              alt="KI-gestützte Patentrecherche – automatische Prior-Art-Analyse mit Wissensgraph"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Wochen Konzeptarbeit. Dann die Mail aus der Patentabteilung: Ein Wettbewerber hat genau das bereits geschützt. Projekt zurück auf Null.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Solche Momente kennt jeder R&amp;D-Leiter. Sie entstehen nicht aus mangelnder Sorgfalt, sondern weil Patentrecherche hochqualifizierte Ingenieure über Tage bindet.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Das Wissen über Claims und Freiheitsgrade liegt fast ausschließlich beim Patentingenieur. Der Kollege im Design entwickelt im Blindflug: entweder in ein Konkurrenzpatent hinein oder an Freiräumen vorbei, die man hätte nutzen können.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            In unserem PoC haben wir mit Perplexity AI und Claude einen Agenten gebaut, der parallel mehrere Datenbank-APIs abfragt, Claims analysiert und einen Bericht auf Engineering-Niveau liefert. Das Ziel: Recherchen, die bisher einen Tag dauern, in Stunden abzuschließen.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Die Ergebnisse stehen nicht nur der Patentabteilung zur Verfügung, sondern jedem Ingenieur im Projekt. Wir nennen das die Demokratisierung der Patentwelt.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-8">
            Zusätzlich kann der Agent definierte Technologiegruppen und Wettbewerber dauerhaft überwachen und neue Anmeldungen früh melden, oft bevor sie in Fachpresse oder Produkten sichtbar werden.
          </p>
          <div className="bg-[#faf9f7] border border-gray-200 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 font-inter leading-relaxed italic">
              Und jetzt stellen Sie sich vor: ein Chatbot, mit dem Ihre Ingenieure direkt mit den Patenten sprechen. Fragen stellen, Claims verstehen, Zusammenhänge erklären lassen, angereichert mit dem technischen Wissen Ihres Unternehmens. Oder ein autonomer KI-Agent, der die komplette Vorrecherche übernimmt und Ihnen morgens den Bericht auf den Tisch legt. Das ist keine Zukunftsmusik. Das ist der nächste Ausbauschritt auf demselben Fundament.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Manuelle Patentrecherche dauert Tage und bindet teure Ingenieurskapazität</li>
                <li>• Prior Art und relevante Claims werden übersehen oder falsch eingeordnet</li>
                <li>• Freiheitsgrade bleiben unklar, Design arbeitet im Blindflug</li>
                <li>• Überblick liegt nur beim Patentingenieur, nicht bei den Entwicklern im Projekt</li>
                <li>• Wettbewerber-Monitoring und Technologiegruppen-Tracking laufen selten systematisch</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
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
              src="/images/use-cases/patentrecherche-detail.jpg"
              alt="Holografische Patentanalyse – KI erkennt Wettbewerber-Patente und White-Space-Chancen"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
            <h2 className="font-heading font-bold text-[#071013] mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Perplexity AI', 'Claude (Anthropic)', 'Patentdatenbanken (EPA, Google Patents)', 'n8n Automation', 'Structured Output'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-[#faf9f7] rounded-full text-sm font-inter text-gray-700 border border-gray-200">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#071013] rounded-2xl p-6 mb-10 text-white">
            <h2 className="font-heading font-bold mb-4">Ergebnis im PoC</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: 'Stunden', label: 'statt Tage pro Recherche' },
                { metric: 'strukturiert', label: 'Berichte statt roher Trefferlisten' },
                { metric: 'laufend', label: 'Wettbewerber-Monitoring möglich' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-[#f90093] mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-inter mb-4">Haben Sie einen ähnlichen Anwendungsfall? Wir schauen gemeinsam, was auf Ihrem Fundament möglich ist.</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
            >
              Kostenloses Erstgespräch buchen
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#071013] text-[#071013] font-heading font-semibold hover:bg-[#071013] hover:text-white transition-all duration-200"
            >
              ← Zurück zur Hauptseite
            </Link>
            <Link
              href="/#use-cases"
              className="text-sm font-inter text-[#f90093] hover:underline"
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
