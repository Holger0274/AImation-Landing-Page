import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import DemoTile from '@/components/ui/DemoTile';
import WissenVorherNachher from '@/components/diagrams/WissenVorherNachher';
import QktTriangle from '@/components/diagrams/QktTriangle';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/erstgespraech';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Knowledge Graph Management mit KI | Use Case | AImation' },
  description: 'Wie AImation Wissen vernetzt: Knowledge Graph mit Obsidian, Claude Code und semantischer Suche. Wissen das lebt, statt in Silos stirbt.',
  alternates: { canonical: `${siteUrl}/use-cases/knowledge-graph-management` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Knowledge Graph Management mit KI | AImation',
    description: 'Knowledge Graph mit Obsidian, Claude Code und semantischer Suche. Wissen das lebt, statt in Silos stirbt.',
    url: `${siteUrl}/use-cases/knowledge-graph-management`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
};

export default async function KnowledgeGraphPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === 'en') {
    return <GermanOnlyNotice namespace="enUseCaseNotice" href="/use-cases/knowledge-graph-management" />;
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
            <span className="text-ink font-medium">Knowledge Graph Management</span>
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
            Knowledge Graph Management:{' '}
            <span className="text-magenta-light">Wissen das lebt, statt in Silos stirbt</span>
          </h1>

          <p className="text-muted font-inter leading-relaxed mb-6 text-lg">
            Unternehmenswissen semantisch verknüpfen, statt es in Silos sterben zu lassen. Dokumente, Notizen und Protokolle werden nicht nur abgelegt, sondern zusammengebracht. Angereichert mit dem Expertenwissen Ihrer Fachbereiche.
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

          <p className="text-muted font-inter leading-relaxed mb-4">
            Ein Ingenieur geht in Rente. 35 Jahre Erfahrung, hunderte gelöste Probleme, unzählige Workarounds, die nirgendwo dokumentiert sind. Abschiedsfeier, Blumen, gute Wünsche. Drei Monate später taucht genau das Problem wieder auf, das er vor acht Jahren einmal gelöst hat. Niemand erinnert sich. Das Wissen ist weg.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            Solche Momente sind Alltag im deutschen Mittelstand. Wissen steckt in Köpfen, nicht in Systemen. Und selbst dort, wo es dokumentiert ist, liegt es in Silos: E-Mail-Archive, SharePoint, lokale Ordner, Wiki-Systeme, OneNote-Notizen, Besprechungsprotokolle.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            Das eigentliche Problem ist nicht die Menge. Es ist die fehlende Verbindung. Ein Protokoll aus der Entwicklung, eine E-Mail vom Einkauf, eine Notiz aus dem Service: drei Dokumente, die denselben Sachverhalt betreffen, aber nichts voneinander wissen. Eine klassische Suche findet das Dokument mit den passenden Stichworten. Sie findet nicht den Zusammenhang.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            In diesem PoC habe ich untersucht, wie ein KI-gestützter Knowledge Graph im Unternehmenskontext funktioniert. Die Basis sind eigene Erfahrungen mit Obsidian aus meiner täglichen Wissensarbeit. Das Prinzip: Dokumente, Notizen und Protokolle werden nicht nur abgelegt, sondern semantisch verknüpft. Wissen das früher bei Suchen nicht auftauchte, wird plötzlich sichtbar, weil Verbindungen zwischen Themen automatisch erkannt werden, ähnlich wie in einem Gehirn.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-4">
            Der Knowledge Graph lässt sich mit Expertenwissen anreichern: Lastenhefte, technische Richtlinien, Normen, interne Best Practices. So entsteht kein generisches KI-Werkzeug, sondern eines, das die Sprache Ihres Unternehmens spricht.
          </p>
          <p className="text-muted font-inter leading-relaxed mb-8">
            Die Datenintegration erfolgt schrittweise über bestehende Schnittstellen, typischerweise zu SharePoint, Exchange, Dateiservern und Wiki-Systemen. Rechte und Rollen aus Ihren Quellsystemen bleiben erhalten, damit vertrauliche Inhalte vertraulich bleiben.
          </p>
          <div className="bg-ground border border-line rounded-2xl p-6 mb-8">
            <p className="text-muted font-inter leading-relaxed italic">
              Was das im Alltag bedeutet: Ein neuer Mitarbeiter stellt eine Frage und bekommt nicht nur das passende Dokument, sondern den Kontext dazu. Wer hat daran gearbeitet, welche Entscheidungen wurden getroffen, welche Probleme sind aufgetaucht. Oder ein Ingenieur fragt nach einer technischen Lösung und das System zeigt ihm, dass ein Kollege im Nachbarwerk vor zwei Jahren daran gearbeitet hat. Wir haben das in einem PoC aufgebaut. Im Erstgespräch zeigen wir, wie das aussieht.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-heading font-bold text-ink mb-4">So sieht das aus</h2>
            <div className="max-w-sm">
              <DemoTile
                title="Wissens-Graph: Frage rein, Antwort mit Quelle raus"
                badge="Demo folgt"
                placeholderNote="Screencast folgt. Im Erstgespräch zeige ich Ihnen, wie der Wissens-Graph auf meine eigenen Projektfragen antwortet, mit Quellenangabe."
              />
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <WissenVorherNachher variant="dark" className="w-full max-w-3xl h-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/25">
              <h2 className="font-heading font-bold text-ink mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-muted">
                <li>• Wissen liegt in Silos: E-Mail, SharePoint, Wiki, PDF, OneNote, lokale Ordner</li>
                <li>• Notizen und Protokolle kennen sich nicht untereinander, es fehlen die Verbindungen</li>
                <li>• Wenn Mitarbeiter in Rente gehen oder das Unternehmen verlassen, geht ihr Wissen mit</li>
                <li>• Suche findet Dokumente, aber keine Zusammenhänge und keine Kontexte</li>
                <li>• Neue Team-Mitglieder brauchen lange, um sich im Wissensbestand zurechtzufinden</li>
              </ul>
            </div>
            <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/25">
              <h2 className="font-heading font-bold text-ink mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-muted">
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

          <div className="bg-surface rounded-2xl border border-line p-6 mb-10">
            <h2 className="font-heading font-bold text-ink mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Obsidian', 'Claude Code', 'Knowledge Graph APIs', 'Vektordatenbank', 'Semantic Search'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-ground rounded-full text-sm font-inter text-muted border border-line">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#071013] rounded-2xl p-6 mb-10 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="font-heading font-bold">Was sich verändert</h2>
              <QktTriangle variant="dark" className="w-16 h-16 flex-shrink-0" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: 'sichtbar', label: 'Zusammenhänge die bisher verborgen waren' },
                { metric: 'deutlich', label: 'schnelleres Einarbeiten neuer Kollegen' },
                { metric: 'erhalten', label: 'Wissen auch wenn Mitarbeiter gehen' },
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
              Der PoC läuft bei AImation intern mit eigenen Notizen und Projektunterlagen. Was er kann: Dokumente semantisch verknüpfen und Zusammenhänge sichtbar machen, die eine Stichwortsuche übersieht. Was er nicht kann: beurteilen, welche Information im Streitfall rechtlich belastbar ist. Diese Einschätzung bleibt bei den Fachleuten im Unternehmen.
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted font-inter mb-4">Ihr Unternehmenswissen steckt in Silos? Wir schauen gemeinsam, was möglich ist.</p>
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
