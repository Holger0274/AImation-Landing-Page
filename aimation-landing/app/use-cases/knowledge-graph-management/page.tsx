import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Knowledge Graph Management mit KI | Use Case | AI.mation',
  description: 'Wie AI.mation Wissen vernetzt: Knowledge Graph mit Obsidian, Claude Code und semantischer Suche. Wissen das lebt, statt in Silos stirbt.',
  alternates: { canonical: `${siteUrl}/use-cases/knowledge-graph-management` },
  robots: { index: true, follow: true },
};

export default function KnowledgeGraphPage() {
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
            <span className="text-[#071013] font-medium">Knowledge Graph Management</span>
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
            Knowledge Graph Management:{' '}
            <span className="text-[#f90093]">Wissen das lebt, statt in Silos stirbt</span>
          </h1>

          <p className="text-gray-600 font-inter leading-relaxed mb-8 text-lg">
            Wissen gezielt miteinander verknüpfen und ein zweites Brain für Ihr Unternehmen bauen.
            Vernetzte Informationsarchitektur mit intelligenter Verknüpfung und semantischer Suche.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Wissen liegt in Silos: E-Mail, SharePoint, Wiki, PDF</li>
                <li>• Wenn Mitarbeiter gehen, geht ihr Wissen mit</li>
                <li>• Suche findet Dokumente, nicht Zusammenhänge</li>
                <li>• Keine Verbindung zwischen verwandten Themen</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Semantische Verknüpfung von Dokumenten und Ideen</li>
                <li>• KI erkennt Zusammenhänge automatisch</li>
                <li>• Suche liefert relevante Kontexte, nicht nur Treffer</li>
                <li>• Wissen bleibt auch wenn Mitarbeiter gehen</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
            <h2 className="font-heading font-bold text-[#071013] mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Obsidian', 'Claude Code', 'Knowledge Graph APIs', 'Vektordatenbank', 'Semantic Search'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-[#faf9f7] rounded-full text-sm font-inter text-gray-700 border border-gray-200">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#071013] rounded-2xl p-6 mb-10 text-white">
            <h2 className="font-heading font-bold mb-4">Ergebnis</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: '10x', label: 'schnelleres Finden von Wissen' },
                { metric: '100%', label: 'Wissen bleibt im Unternehmen' },
                { metric: '0', label: 'Wissensverlust bei Fluktuation' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-[#f90093] mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-inter mb-4">Wissen geht mit Mitarbeitern? Das muss nicht so sein.</p>
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
