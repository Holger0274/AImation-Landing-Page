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
  title: { absolute: 'KI kennt keinen Halt: Warum CAD-Teams jetzt starten müssen | AI.mation' },
  description: 'Claude Opus 4.7 verdreifacht die Bildauflösung – ein Kategoriesprung für Konstruktionsabteilungen. Warum das für CAD so relevant ist. Und warum Abwarten die teuerste Strategie ist.',
  alternates: { canonical: `${siteUrl}/blog/ki-cad-zukunft-jetzt-starten` },
  openGraph: {
    title: 'KI kennt keinen Halt: Warum CAD-Teams jetzt starten müssen',
    description: 'Claude Opus 4.7 verdreifacht die Bildauflösung – ein Kategoriesprung für Konstruktionsabteilungen. Warum Abwarten die teuerste Strategie ist.',
    url: `${siteUrl}/blog/ki-cad-zukunft-jetzt-starten`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function KiCadZukunftPage() {
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
              <span className="text-[#071013] font-medium">KI + CAD: Jetzt starten</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                KI-Umsetzung
              </span>
              <span className="text-xs text-gray-400 font-inter">19. April 2026</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">9 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              KI kennt keinen Halt: warum wir bei CAD jetzt starten müssen,{' '}
              <span className="text-[#f90093]">auch wenn es noch nicht ausgereift ist</span>
            </h1>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-2">
              <Image
                src="/images/blog/ki-cad-ingenieur-hero.jpg"
                alt="Ingenieur analysiert CAD-Modell am Workstation, KI-gestützte Konstruktion im Mittelstand"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── ARTIKEL ── */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.75' }}>

              <p className="mb-5">
                Wenn ich Kunden erkläre, wie schnell sich KI entwickelt, fehlt uns meist das richtige Bild. Wir denken Technologiefortschritt in Jahren. Zwischen zwei Windows-Generationen liegen sechs, zwischen zwei CAD-Major-Releases oft acht.
              </p>
              <p className="mb-5">
                Mit KI funktioniert diese Rechnung nicht mehr.
              </p>
              <p className="mb-5">
                Zwischen dem Release von Claude Opus 4.6 und 4.7 lagen gerade einmal ein paar Monate. Und doch hat sich an einer Sache etwas verschoben, das für die Konstruktionswelt weitreichender ist, als die meisten Ingenieurabteilungen gerade realisieren.
              </p>
              <p className="mb-5">
                Die unterstützte Bildauflösung wurde mehr als verdreifacht: auf bis zu 3,75 Megapixel. Was das bedeutet: Das Modell kann dichte technische Zeichnungen, enge Bemaßungsketten und Symbolbibliotheken erstmals so auflösen, dass verlässliche Extraktion möglich wird. Das ist kein Inkrement. Das ist ein Kategoriesprung.
              </p>
              <p className="mb-5">
                In diesem Beitrag bringe ich drei Dinge nüchtern zusammen: Was sich konkret verändert hat. Warum das für CAD noch nicht ausgereift ist, aber dennoch ein riesiges Potential bedeutet. Und warum genau das der Grund ist, heute mit Proof of Concepts zu starten. Nicht in einem Jahr.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die Kurve, die wir unterschätzen
              </h2>
              <p className="mb-5">
                Menschen sind lineare Denker. Wenn sich eine Technologie in den letzten zwei Jahren „ordentlich verbessert" hat, extrapolieren wir das geradlinig in die Zukunft. Genauso viel Fortschritt in den nächsten zwei Jahren? Erscheint plausibel, ist aber fast immer falsch.
              </p>
              <p className="mb-5">
                KI-Fähigkeiten entwickeln sich in Sprüngen: lange Plateaus, in denen man das Gefühl hat, nichts Relevantes passiert, und dann innerhalb weniger Wochen eine Schwelle, die vorher als unerreichbar galt.
              </p>
              <p className="mb-5">
                Opus 4.7 ist so ein Schwellenmoment. Die maximale Bildauflösung stieg von rund 1,15 auf 3,75 Megapixel. Was das für einen Konstrukteur bedeutet: Das Modell kann dichte technische Zeichnungen, Bemaßungen, Schraffuren und Symbolbibliotheken jetzt erstmals in einer Qualität auflösen, die verlässliche Arbeit erlaubt. Dazu kommt eine deutlich bessere Fähigkeit, direkt mit Software zu interagieren und komplexen Code zu schreiben.
              </p>
              <p className="mb-5">
                In der Summe entsteht eine neue Klasse: Modelle, die Konstruktionsartefakte nicht nur „sehen", sondern auch strukturiert damit arbeiten können.
              </p>
              <p className="mb-5">
                Das Wichtige dabei: Die nächste Schwelle kommt bestimmt. Und sie wird wieder schneller kommen, als wir erwarten.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Der ehrliche Stand von KI + CAD
              </h2>
              <p className="mb-5">
                Parallel zu den Modellen ist ein Ökosystem gewachsen, das fast niemand im deutschen Mittelstand auf dem Schirm hat. Das Model Context Protocol (MCP), ein offener Standard den Anthropic 2024 eingeführt hat, erlaubt die direkte Anbindung von CAD-Systemen an Claude. Es gibt aktive Integrationen für FreeCAD, Blender und Onshape, und die Community arbeitet an Anbindungen für Fusion 360, AutoCAD und SolidWorks.
              </p>
              <p className="mb-4">Ein Modell wie Opus 4.7 kann heute schon:</p>
              <ul className="mb-6 space-y-2 pl-5 list-disc">
                <li>2D-Zeichnungen analysieren und Bemaßungen, Features und Stücklisteninformationen extrahieren</li>
                <li>in FreeCAD oder Onshape parametrische Sketches, Extrudes und Assemblies direkt erzeugen</li>
                <li>Baugruppen aufbauen und als STEP oder STL exportieren</li>
                <li>in Blender 3D-Szenen aus Text-Prompts generieren (für Visualisierung, nicht Fertigung)</li>
              </ul>
              <p className="mb-5">
                Das ist beeindruckend. Und trotzdem bin ich der Letzte, der diesen Stand als „reif" bezeichnen würde.
              </p>

              <div className="grid gap-4 my-8 sm:grid-cols-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="font-heading font-semibold text-[#071013] mb-2 text-sm">Funktioniert heute</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Einfache parametrische Teile</li>
                    <li>Variantenkonstruktion</li>
                    <li>Altzeichnungen digitalisieren</li>
                    <li>Konzept-Visualisierungen</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="font-heading font-semibold text-[#071013] mb-2 text-sm">Noch holprig</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Toleranzketten</li>
                    <li>Normgerechte Konstruktion</li>
                    <li>Komplexe Baugruppen</li>
                    <li>Mehrkörper-Kinematik</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="font-heading font-semibold text-[#071013] mb-2 text-sm">Bleibt Marketing</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>„Ein Satz, fertiges 3D-Modell"</li>
                    <li>Normkonforme Teile per Prompt</li>
                    <li>Vollautomatische Baugruppen</li>
                  </ul>
                </div>
              </div>

              <p className="mb-5">
                Diese drei Kategorien sauber zu trennen, ist meine tägliche Arbeit. Wer den Hype für Reife hält, wird enttäuscht. Wer die Unreife als Beweis nimmt, dass man noch nicht anfangen muss, verpasst den eigentlichen Punkt.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Das Potential, das die meisten noch nicht sehen
              </h2>
              <p className="mb-5">
                Ich habe die letzten Jahre damit verbracht, FEM-Simulationen von Stunden auf Minuten zu beschleunigen. Mit Graph Convolutional Neural Networks haben wir Berechnungen, die drei Stunden dauerten, auf unter drei Minuten gebracht.
              </p>
              <p className="mb-5">
                Das war vor wenigen Jahren so weit weg von der Praxis, dass die meisten CAE-Abteilungen es für eine Spielerei hielten. Heute ist ML-beschleunigte Simulation in führenden Häusern Standard-Werkzeug.
              </p>
              <p className="mb-5">
                Genau diesen Bogen sehe ich jetzt bei CAD kommen. Was FEM vor fünf Jahren durchgemacht hat, von „Forschungsthema" zu „produktiv im Alltag", macht die Konstruktionsseite jetzt durch. Nur schneller. Weil die Modelle besser starten, die Infrastruktur bereits steht, und weil der Druck durch Fachkräftemangel und Variantenvielfalt real ist.
              </p>
              <p className="mb-5">
                Wenn ich heute mit Inhabern mittelständischer Konstruktionsbüros spreche, höre ich oft: „Wir warten, bis das ausgereift ist." Ich verstehe die Haltung. Aber sie ist die teuerste Strategie.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Warum Abwarten nicht funktioniert
              </h2>
              <p className="mb-5">
                Wer bis zur Reife wartet, wartet auf zwei Dinge gleichzeitig: dass die Technologie stabil wird, und dass das eigene Team damit umgehen kann. Letzteres ist das eigentliche Problem.
              </p>
              <p className="mb-5">
                KI-Kompetenz entsteht nicht durch ein Seminar. Sie entsteht durch das Ausprobieren an echten, kleinen Aufgaben. Durch das Scheitern an Toleranzen, das Lernen, welche Prompts zuverlässig welche Ergebnisse liefern, das Entwickeln eines Gefühls dafür, wo die Maschine hilft und wo nicht.
              </p>
              <p className="mb-5">
                Dieses Wissen lässt sich nicht kaufen. Es wird über Monate aufgebaut. Oder eben nicht.
              </p>
              <p className="mb-5">
                Unternehmen, die jetzt starten, sind in drei Jahren nicht einfach „ein bisschen weiter". Sie sind in einer anderen Liga. Nicht wegen der Technik, sondern wegen des Teamwissens und der eingespielten Workflows.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die Antwort ist kein Strategiepapier, sondern ein PoC
              </h2>
              <p className="mb-5">
                Klassische Digitalisierungsstrategien mit 18-Monats-Roadmap funktionieren bei KI nicht. Die Technologie entwickelt sich während der Planungsphase weiter. Wer mit großen Papieren arbeitet, ist bei der Umsetzung immer einen Schritt hinter dem, was schon möglich wäre.
              </p>
              <p className="mb-5">
                Die Antwort heißt Proof of Concept. Klein, konkret, zeitlich begrenzt, mit einem klaren Lernziel. Zum Beispiel:
              </p>
              <ul className="mb-6 space-y-2 pl-5 list-disc">
                <li>eine Variante einer Halteranwendung, die automatisiert aus Parametern generiert wird</li>
                <li>die Extraktion von Stücklisten aus archivierten PDF-Zeichnungen</li>
                <li>ein KI-Assistent, der aus Kundenanforderungen einen Vorschlag für das CAD-Modell macht</li>
              </ul>
              <p className="mb-5">
                Solche PoCs dauern Wochen, nicht Quartale. Sie dürfen scheitern, denn das ist ihr Zweck. Was sie liefern, steht in keinem Whitepaper: die ehrliche Antwort darauf, was in Ihrem Unternehmen mit Ihren Daten und Ihren Prozessen funktioniert. Und Teamerfahrung, die jedes nächste Projekt schneller macht.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was konkret zu tun ist
              </h2>
              <p className="mb-6">Wenn Sie heute in einer Konstruktions-, Entwicklungs- oder Ingenieurverantwortung sind, sehe ich drei pragmatische Schritte:</p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2">1. Einen einzigen Usecase auswählen</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Wählen Sie einen Usecase, der heute Zeit frisst und bei dem ein Fehler nicht katastrophal ist. Digitalisierung von Altbestandzeichnungen ist ein Klassiker. Variantenkonstruktion aus Parametertabellen ein anderer. Anforderungsprotokolle automatisiert in CAD-taugliche Spezifikationen überführen ein dritter.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2">2. Einen Stack wählen, der Datensouveränität wahrt</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Für DACH-Mittelstand empfehlen wir self-hosted Werkzeuge: n8n, Claude über AWS Bedrock in Frankfurt, lokale CAD-Systeme wie FreeCAD oder Onshape mit Unternehmenskonto. Keine unkontrollierten Datenflüsse in US-Clouds.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2">3. Zwei Personen einplanen, nicht eine</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Einen Konstrukteur mit Domänenwissen, eine Person mit Affinität zu Automatisierung. Beide brauchen Zeit. Nicht nebenher. Wer das als „macht der Praktikant mal" behandelt, bekommt auch Praktikantenergebnisse.</p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was bleibt
              </h2>
              <p className="mb-5">
                KI entwickelt sich weiter. Sie macht keine Pause, während Unternehmen noch überlegen, ob sie bereit sind.
              </p>
              <p className="mb-5">
                Der entscheidende Vorteil entsteht nicht beim Werkzeug, sondern beim Team: bei den Menschen, die gelernt haben, damit umzugehen.
              </p>
              <p className="mb-5">
                Wer jetzt einen konkreten Usecase auswählt, einen kleinen PoC startet und das dabei entstehende Wissen im Team verankert, baut etwas auf, das sich nicht kaufen lässt. Keine Beraterpräsentation liefert das. Kein Whitepaper. Nur das eigene Tun.
              </p>
              <p className="mb-5">
                Wenn Sie wissen möchten, welcher Usecase in Ihrer Konstruktionsabteilung als erstes Sinn ergibt und wie ein PoC bei Ihnen konkret aussehen könnte, sprechen Sie mich an. Das erste Gespräch kostet nichts, und Sie wissen danach mehr als vorher.
              </p>
            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Umsetzung für den Mittelstand', href: '/ki-automatisierung-mittelstand' },
                  { label: 'KI-Beratung', href: '/ki-beratung-kmu' },
                  { label: 'KI-Schulungen', href: '/ki-schulungen-mittelstand' },
                  { label: 'Wo steht Ihr Unternehmen bei KI?', href: '/blog/6-stufen-ki-nutzung' },
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
              Häufige Fragen zu KI + CAD
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
              Bereit für den ersten PoC in Ihrer Konstruktionsabteilung?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              Wir helfen Ihnen, den richtigen Usecase zu finden, den passenden Stack aufzusetzen und das Team einzubinden. 30 Minuten Erstgespräch. Kostenlos.
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
