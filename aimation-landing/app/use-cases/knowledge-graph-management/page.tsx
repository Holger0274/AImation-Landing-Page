import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Knowledge Graph Management mit KI | Use Case | AI.mation' },
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

          <p className="text-gray-600 font-inter leading-relaxed mb-6 text-lg">
            Wissen gezielt miteinander verknüpfen und ein zweites Brain für Ihr Unternehmen bauen. Vernetzte Informationsarchitektur mit intelligenter Verknüpfung und semantischer Suche, angereichert mit dem Expertenwissen Ihrer Fachbereiche.
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/use-cases/knowledge-graph-hero.jpg"
              alt="Knowledge Graph – 3D-Wissensnetzwerk mit KI-gesteuerten Verbindungen im Unternehmen"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Ein Ingenieur geht in Rente. 35 Jahre Erfahrung, hunderte gelöste Probleme, unzählige Workarounds, die nirgendwo dokumentiert sind. Abschiedsfeier, Blumen, gute Wünsche. Drei Monate später taucht genau das Problem wieder auf, das er vor acht Jahren einmal gelöst hat. Niemand erinnert sich. Das Wissen ist weg.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Solche Momente sind Alltag im deutschen Mittelstand. Wissen steckt in Köpfen, nicht in Systemen. Und selbst dort, wo es dokumentiert ist, liegt es in Silos: E-Mail-Archive, SharePoint, lokale Ordner, Wiki-Systeme, OneNote-Notizen, Besprechungsprotokolle.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Das eigentliche Problem ist nicht die Menge. Es ist die fehlende Verbindung. Ein Protokoll aus der Entwicklung, eine E-Mail vom Einkauf, eine Notiz aus dem Service: drei Dokumente, die denselben Sachverhalt betreffen, aber nichts voneinander wissen. Eine klassische Suche findet das Dokument mit den passenden Stichworten. Sie findet nicht den Zusammenhang.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            In diesem PoC habe ich untersucht, wie ein KI-gestützter Knowledge Graph im Unternehmenskontext funktioniert. Die Basis sind eigene Erfahrungen mit Obsidian aus meiner täglichen Wissensarbeit. Das Prinzip: Dokumente, Notizen und Protokolle werden nicht nur abgelegt, sondern semantisch verknüpft. Wissen das früher bei Suchen nicht auftauchte, wird plötzlich sichtbar, weil Verbindungen zwischen Themen automatisch erkannt werden, ähnlich wie in einem Gehirn.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Der Knowledge Graph lässt sich mit Expertenwissen anreichern: Lastenhefte, technische Richtlinien, Normen, interne Best Practices. So entsteht kein generisches KI-Werkzeug, sondern eines, das die Sprache Ihres Unternehmens spricht.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-8">
            Die Datenintegration erfolgt schrittweise über bestehende Schnittstellen, typischerweise zu SharePoint, Exchange, Dateiservern und Wiki-Systemen. Rechte und Rollen aus Ihren Quellsystemen bleiben erhalten, damit vertrauliche Inhalte vertraulich bleiben.
          </p>
          <div className="bg-[#faf9f7] border border-gray-200 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 font-inter leading-relaxed italic">
              Und jetzt stellen Sie sich vor: Ein neuer Mitarbeiter stellt eine Frage und bekommt nicht nur das passende Dokument, sondern den Kontext dazu. Wer hat daran gearbeitet, welche Entscheidungen wurden getroffen, welche Probleme sind aufgetaucht. Oder ein Ingenieur fragt nach einer technischen Lösung und das System zeigt ihm parallel, dass ein Kollege im Nachbarwerk vor zwei Jahren daran gearbeitet hat. Das ist keine Zukunftsmusik. Das ist der nächste Ausbauschritt auf demselben Fundament.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Wissen liegt in Silos: E-Mail, SharePoint, Wiki, PDF, OneNote, lokale Ordner</li>
                <li>• Notizen und Protokolle kennen sich nicht untereinander, es fehlen die Verbindungen</li>
                <li>• Wenn Mitarbeiter in Rente gehen oder das Unternehmen verlassen, geht ihr Wissen mit</li>
                <li>• Suche findet Dokumente, aber keine Zusammenhänge und keine Kontexte</li>
                <li>• Neue Team-Mitglieder brauchen lange, um sich im Wissensbestand zurechtzufinden</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Semantische Verknüpfung von Dokumenten, Notizen und Gesprächsprotokollen</li>
                <li>• KI erkennt Zusammenhänge automatisch, auch bei unterschiedlicher Wortwahl</li>
                <li>• Suche liefert relevante Kontexte, nicht nur Treffer, ähnlich dem assoziativen Denken im Gehirn</li>
                <li>• Anreicherung mit Expertenwissen aus Ihren Fachbereichen und Normen</li>
                <li>• Wissen bleibt erhalten, auch wenn Mitarbeiter gehen, mit sauberer Rechte- und Rollensteuerung</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/use-cases/knowledge-graph-detail.jpg"
              alt="Semantische Wissensgraph-Karte – Abteilungen, Dokumente und Expertise vernetzt"
              fill
              className="object-cover"
            />
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
            <h2 className="font-heading font-bold mb-4">Was sich verändert</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: 'sichtbar', label: 'Zusammenhänge die bisher verborgen waren' },
                { metric: 'deutlich', label: 'schnelleres Einarbeiten neuer Kollegen' },
                { metric: 'erhalten', label: 'Wissen auch wenn Mitarbeiter gehen' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-[#f90093] mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-inter mb-4">Ihr Unternehmenswissen steckt in Silos? Wir schauen gemeinsam, was möglich ist.</p>
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
