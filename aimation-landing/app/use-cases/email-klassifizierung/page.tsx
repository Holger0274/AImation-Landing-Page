import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'E-Mail Klassifizierung mit KI | Use Case | AI.mation',
  description: 'Wie AI.mation E-Mails automatisch klassifiziert: 60% weniger Sortieraufwand mit OpenAI, n8n und Outlook. PoC abgeschlossen.',
  alternates: { canonical: `${siteUrl}/use-cases/email-klassifizierung` },
  robots: { index: true, follow: true },
};

export default function EmailKlassifizierungPage() {
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
            <span className="text-[#071013] font-medium">E-Mail Klassifizierung</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-heading font-semibold" style={{ backgroundColor: '#0077B6' }}>
              FLOW · Workflow-Automatisierung
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-heading font-semibold">
              ✓ PoC abgeschlossen
            </div>
          </div>

          <h1 className="font-heading font-bold text-[#071013] mb-4 leading-tight" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
            E-Mail Klassifizierung:{' '}
            <span className="text-[#f90093]">60% weniger Sortieraufwand</span>
          </h1>

          <p className="text-gray-600 font-inter leading-relaxed mb-8 text-lg">
            Intelligente Kategorisierung eingehender E-Mails. Die KI erkennt Anfrage-Typ und Dringlichkeit
            und routet automatisch an die richtige Stelle – ohne manuelles Sortieren.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Täglich Stunden mit E-Mail-Sortierung verloren</li>
                <li>• Dringende Anfragen gehen unter</li>
                <li>• Falsches Team bekommt die E-Mail</li>
                <li>• Keine Übersicht über Anfrage-Typen und Trends</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• KI liest eingehende E-Mails automatisch</li>
                <li>• Klassifizierung nach Typ, Dringlichkeit, Abteilung</li>
                <li>• Automatisches Routing ans richtige Team</li>
                <li>• Dashboard für Trends und Workload-Verteilung</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
            <h2 className="font-heading font-bold text-[#071013] mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['OpenAI GPT-4', 'n8n Automation', 'Microsoft Outlook', 'Webhook Integration', 'Structured Output'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-[#faf9f7] rounded-full text-sm font-inter text-gray-700 border border-gray-200">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#071013] rounded-2xl p-6 mb-10 text-white">
            <h2 className="font-heading font-bold mb-4">Ergebnis</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: '60%', label: 'weniger Sortieraufwand' },
                { metric: '2h', label: 'täglich gespart pro Mitarbeiter' },
                { metric: '98%', label: 'Klassifizierungsgenauigkeit' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-[#f90093] mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-inter mb-4">Auch Ihre Inbox könnte so aussehen.</p>
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
