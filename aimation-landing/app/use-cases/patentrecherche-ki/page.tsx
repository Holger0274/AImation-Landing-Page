import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Patentrecherche automatisieren mit KI | Use Case | AI.mation',
  description: 'Wie AI.mation Patentrecherche automatisiert: 80% schnellere Prior-Art-Analyse mit Perplexity, Claude und Patent-APIs. PoC abgeschlossen.',
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
            <span className="text-[#f90093]">80% schneller mit KI</span>
          </h1>

          <p className="text-gray-600 font-inter leading-relaxed mb-8 text-lg">
            Automatisierte Analyse von Patentdatenbanken. Findet relevante Prior Art, identifiziert
            Wettbewerber-Patente und erstellt strukturierte Übersichten – ohne manuelles Durchsuchen.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Manuelle Patentrecherche dauert Tage bis Wochen</li>
                <li>• Wichtige Prior Art wird übersehen</li>
                <li>• Ergebnisse sind unstrukturiert und schwer auswertbar</li>
                <li>• Hoher Aufwand für Ingenieure und Patentabteilung</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• KI durchsucht Datenbanken automatisch (EPA, USPTO, WIPO)</li>
                <li>• Relevante Patente werden nach Ähnlichkeit gerankt</li>
                <li>• Strukturierte Berichte mit Zusammenfassungen</li>
                <li>• Regelmäßige Monitoring-Updates möglich</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
            <h2 className="font-heading font-bold text-[#071013] mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Perplexity AI', 'Claude (Anthropic)', 'Patent-APIs (EPO, USPTO)', 'n8n Automation', 'Structured Output'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-[#faf9f7] rounded-full text-sm font-inter text-gray-700 border border-gray-200">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#071013] rounded-2xl p-6 mb-10 text-white">
            <h2 className="font-heading font-bold mb-4">Ergebnis</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: '80%', label: 'schnellere Recherche' },
                { metric: '3x', label: 'mehr gefundene relevante Patente' },
                { metric: '1 Tag', label: 'statt 1 Woche pro Recherche' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-[#f90093] mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-inter mb-4">Haben Sie einen ähnlichen Anwendungsfall?</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
            >
              Kostenloses Erstgespräch buchen
            </a>
            <div className="mt-4">
              <Link href="/#use-cases" className="text-sm font-inter text-[#f90093] hover:underline">
                ← Alle Use Cases ansehen
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
