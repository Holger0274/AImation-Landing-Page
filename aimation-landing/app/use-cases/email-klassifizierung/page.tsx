import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'E-Mail Klassifizierung mit KI | Use Case | AI.mation' },
  description: 'Wie AI.mation E-Mails automatisch klassifiziert und ans richtige Team routet – mit OpenAI und n8n. PoC abgeschlossen, weniger Sortieraufwand, keine Fehlweiterleitungen.',
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
            <span className="text-[#f90093]">automatisch ans richtige Team, vom Flaschenhals zum stillen Helfer im Hintergrund</span>
          </h1>

          <p className="text-gray-600 font-inter leading-relaxed mb-6 text-lg">
            Intelligente Kategorisierung eingehender E-Mails. Die KI sortiert nach Themengebiet, analysiert Inhalte, priorisiert nach Dringlichkeit und routet automatisch an die richtige Stelle, ohne manuelles Sortieren und ohne dass Kundenanfragen liegen bleiben.
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/use-cases/email-klassifizierung-hero.jpg"
              alt="KI-gestützte E-Mail Klassifizierung – automatisches Routing von Nachrichten"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Montagmorgen, halb neun. 80 ungelesene Mails in der zentralen Inbox. Eine Kundenbeschwerde von Freitagnachmittag, die niemand gesehen hat. Eine dringende Angebotsanfrage, die zwischen Newslettern und Rechnungen verschwindet. Und ein Mitarbeiter, der die erste Stunde des Tages damit verbringt, zu sortieren statt zu arbeiten.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Diesen Anblick kennt jede Firma mit zentraler Inbox. In einem Unternehmen mit hundert Mitarbeitern summieren sich die täglichen Sortier-Minuten schnell auf mehrere Personalstellen im Jahr. Und wenn jemand krank oder im Urlaub ist, wird der Posteingang zum Flaschenhals.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            In unserem PoC haben wir das mit OpenAI und n8n automatisiert. Eingehende Mails werden in Sekunden gelesen, nach Themengebiet sortiert, inhaltlich analysiert und nach Dringlichkeit priorisiert. Anschließend werden sie direkt an das zuständige Team oder Ticketsystem weitergeleitet. Was uns selbst überrascht hat: Die KI klassifiziert zuverlässiger als manuelle Sortierung, weil sie keine schlechten Tage hat und nicht zwischen zwei Terminen nur kurz drüberschaut.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Wichtige Informationen aus E-Mails — etwa Vereinbarungen mit Kunden, technische Details oder Lieferantenauskünfte — lassen sich direkt in den Knowledge Graph überführen. Damit verschwindet Wissen nicht mehr in alten Postfächern, sondern wird Teil des Unternehmensgedächtnisses. Ein Dashboard zeigt zusätzlich Trends und Engpässe und wird so zum Steuerungsinstrument für Führungskräfte.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-8">
            Die Integration erfolgt über bestehende Schnittstellen, typischerweise Microsoft 365, Exchange oder IMAP. Das System lernt mit jeder Korrektur und wird über Monate immer präziser, mit sauberer Rechte- und Rollensteuerung aus Ihren Quellsystemen.
          </p>
          <div className="bg-[#faf9f7] border border-gray-200 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 font-inter leading-relaxed italic">
              Und jetzt stellen Sie sich vor: Die dringende Angebotsanfrage landet ohne Umweg beim Vertrieb, mit Vorschlag für die Antwort und den passenden Unterlagen aus dem Knowledge Graph. Die Beschwerde geht direkt an den Service, inklusive Hinweis auf den letzten Kontakt mit dem Kunden. Der Newsletter wird stumm archiviert. Ihr Team beginnt den Tag nicht mit Sortieren, sondern mit Arbeiten. Das ist keine Zukunftsmusik. Das ist der nächste Ausbauschritt auf demselben Fundament.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Das Problem</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• Täglich gehen Stunden mit manueller E-Mail-Sortierung verloren, im Jahr mehrere Personalstellen</li>
                <li>• Dringende Anfragen gehen zwischen Routine-Mails und Spam unter</li>
                <li>• E-Mails landen beim falschen Team, Weiterleitungen kosten Zeit und Nerven</li>
                <li>• Bei Urlaub oder Krankheit wird der Posteingang schnell zum Flaschenhals</li>
                <li>• Wichtige Informationen aus E-Mails bleiben in Postfächern und gehen dem Unternehmen verloren</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h2 className="font-heading font-bold text-[#071013] mb-3">Die Lösung</h2>
              <ul className="space-y-2 text-sm font-inter text-gray-600">
                <li>• KI sortiert nach Themengebiet, analysiert Inhalte und priorisiert nach Dringlichkeit</li>
                <li>• Automatisches Routing ans richtige Team oder Ticketsystem, rund um die Uhr</li>
                <li>• Relevante Informationen werden direkt in den Knowledge Graph überführt</li>
                <li>• Dashboard für Trends, Engpässe und Workload-Verteilung als Steuerungsinstrument</li>
                <li>• Integration in Microsoft 365, Exchange oder IMAP, lernfähig und mit sauberer Rechtesteuerung</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/use-cases/email-klassifizierung-detail.jpg"
              alt="Vorher/Nachher: Chaotischer Posteingang wird zu strukturiertem KI-Klassifizierungssystem"
              fill
              className="object-cover"
            />
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
            <h2 className="font-heading font-bold mb-4">Ergebnis im PoC</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: '~60%', label: 'weniger manueller Sortieraufwand' },
                { metric: 'spürbar', label: 'weniger Fehlweiterleitungen' },
                { metric: 'sofort', label: 'Überblick über Anfrage-Typen' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="font-heading font-bold text-[#f90093] mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{r.metric}</div>
                  <div className="text-gray-400 font-inter text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-inter mb-4">Ihr Team beginnt den Tag noch mit Sortieren statt Arbeiten? Das muss nicht so bleiben.</p>
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
