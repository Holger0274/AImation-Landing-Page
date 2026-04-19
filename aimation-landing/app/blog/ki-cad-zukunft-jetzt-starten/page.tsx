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
  description: 'Claude Opus 4.7 liest technische Zeichnungen mit 98,5 % Genauigkeit. Warum das für Konstruktionsabteilungen ein Kategoriesprung ist. Und warum Abwarten die teuerste Strategie ist.',
  alternates: { canonical: `${siteUrl}/blog/ki-cad-zukunft-jetzt-starten` },
  openGraph: {
    title: 'KI kennt keinen Halt: Warum CAD-Teams jetzt starten müssen',
    description: 'Claude Opus 4.7 liest technische Zeichnungen mit 98,5 % Genauigkeit. Warum Abwarten die teuerste Strategie für Konstruktionsabteilungen ist.',
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
            <div className="prose prose-gray max-w-none font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.75' }}>

              <p>
                Wenn ich Kunden erkläre, wie schnell sich KI entwickelt, fehlt uns meist das richtige Bild. Wir denken Technologiefortschritt in Jahren. Zwischen zwei Windows-Generationen liegen sechs, zwischen zwei CAD-Major-Releases oft acht. Mit KI funktioniert diese Rechnung nicht mehr.
              </p>
              <p>
                Zwischen dem Release von Claude Opus 4.6 und 4.7 lagen gerade einmal ein paar Monate. Und doch hat sich an einer einzigen Kennzahl etwas verschoben, das für die Konstruktionswelt weitreichender ist, als die meisten Ingenieurabteilungen gerade realisieren: Die visuelle Genauigkeit beim Lesen von Screenshots und Zeichnungen ist von 54,5 % auf 98,5 % gesprungen. Das ist kein Inkrement. Das ist ein Kategoriesprung.
              </p>
              <p>
                Ich will in diesem Beitrag drei Dinge nüchtern zusammenbringen. Erstens: Was sich mit Opus 4.7 konkret verändert hat. Zweitens: Warum das für CAD noch nicht ausgereift ist, aber dennoch ein riesiges Potential bedeutet. Und drittens: Warum genau das der Grund ist, heute mit Proof of Concepts zu starten. Nicht in einem Jahr.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die Kurve, die wir unterschätzen
              </h2>
              <p>
                Menschen sind lineare Denker. Wenn sich eine Technologie in den letzten zwei Jahren „ordentlich verbessert" hat, extrapolieren wir das geradlinig in die Zukunft. Genauso viel Fortschritt in den nächsten zwei Jahren? Erscheint plausibel, ist aber fast immer falsch. KI-Fähigkeiten entwickeln sich nicht linear, sondern in Sprüngen: lange Plateaus, in denen man das Gefühl hat, nichts Relevantes passiert, und dann innerhalb weniger Wochen eine Schwelle, die vorher als unerreichbar galt.
              </p>
              <p>
                Opus 4.7 ist so ein Schwellenmoment. Die Bildauflösung wurde mehr als verdreifacht. Was das für einen Konstrukteur bedeutet: Das Modell liest dichte technische Zeichnungen, Bemaßungen, Schraffuren und Symbolbibliotheken jetzt erstmals zuverlässig. Die Genauigkeit beim Lesen von Zeichnungen ist von 54,5 % auf 98,5 % gestiegen. Dazu kommt eine deutlich bessere Fähigkeit, direkt mit Software zu interagieren und komplexen Code zu schreiben. In der Summe entsteht eine neue Klasse: Modelle, die Konstruktionsartefakte nicht nur „sehen", sondern auch strukturiert damit arbeiten können.
              </p>
              <p>Das Wichtige dabei: Die nächste Schwelle kommt bestimmt. Und sie wird wieder schneller kommen, als wir erwarten.</p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Der ehrliche Stand von KI + CAD
              </h2>
              <p>
                Parallel zu den Modellen ist ein Ökosystem gewachsen, das fast niemand im deutschen Mittelstand auf dem Schirm hat. Das Model Context Protocol (MCP), ein offener Standard den Anthropic 2024 eingeführt hat, erlaubt die direkte Anbindung von CAD-Systemen an Claude. Es gibt aktive Open-Source-Integrationen für FreeCAD, Blender, Onshape, und die Community arbeitet an Anbindungen für Fusion 360, AutoCAD und SolidWorks.
              </p>
              <p>Das heißt praktisch: Ein Modell wie Opus 4.7 kann heute schon</p>
              <ul>
                <li>eine 2D-Zeichnung analysieren und daraus Bemaßungen, Features und Stücklisteninformationen extrahieren,</li>
                <li>in FreeCAD oder Onshape parametrische Sketches, Extrudes, Fillets und Assemblies direkt erzeugen,</li>
                <li>Baugruppen mit Mates aufbauen und als STEP oder STL exportieren,</li>
                <li>in Blender ganze 3D-Szenen aus Text-Prompts generieren (für Visualisierung, nicht für Fertigung).</li>
              </ul>
              <p>Das ist beeindruckend. Und trotzdem bin ich der Letzte, der diesen Stand als „reif" bezeichnen würde.</p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                Was realistisch funktioniert
              </h3>
              <p>
                Einfache parametrische Teile, Variantenkonstruktion auf Basis bestehender Vorlagen, Digitalisierung alter 2D-Zeichnungen in strukturierte Daten, Feature-Tree-Cleanup in Onshape, schnelle Konzept-Visualisierungen.
              </p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                Was noch holprig ist
              </h3>
              <p>
                Toleranzketten, normgerechte Konstruktion, komplexe Baugruppen mit Bewegungsanalyse, Fertigungsgerechtheit (DFM), realistische Mehrkörper-Kinematik. Hier braucht es weiterhin den erfahrenen Konstrukteur.
              </p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                Was Marketing bleibt
              </h3>
              <p>
                „Ein Satz, druckfertiges 3D-Modell." Solche Clips laufen gerade auf LinkedIn und TikTok. Für Werbezwecke klappt das in kuratierten Demos. Für reale Konstruktionsaufgaben mit Normen, Toleranzen und Prüfpflichten ist das heute nicht der Fall.
              </p>
              <p>
                Diese drei Kategorien sauber zu trennen, ist meine tägliche Arbeit bei AImation. Wer den Hype für Reife hält, wird enttäuscht. Wer die Unreife als Beweis nimmt, dass man noch nicht anfangen muss, verpasst den eigentlichen Punkt.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Das Potential, das die meisten noch nicht sehen
              </h2>
              <p>
                Ich habe die letzten Jahre damit verbracht, FEM-Simulationen von Stunden auf Minuten zu beschleunigen. Mit Graph Convolutional Neural Networks haben wir Berechnungen, die drei Stunden dauerten, auf unter drei Minuten gebracht. Das war vor wenigen Jahren so weit weg von der Praxis, dass die meisten CAE-Abteilungen es für eine Spielerei hielten. Heute ist ML-beschleunigte Simulation in führenden Häusern Standard-Werkzeug.
              </p>
              <p>
                Genau diesen Bogen sehe ich jetzt bei CAD kommen. Was FEM vor fünf Jahren durchgemacht hat, von „Forschungsthema" zu „produktiv im Alltag", macht die Konstruktionsseite jetzt durch. Nur schneller. Weil die Modelle besser starten, die Tooling-Infrastruktur (MCP, Cloud-CAD, Open-Source-Integrationen) bereits steht, und weil der Druck auf Konstruktionsabteilungen durch Fachkräftemangel und Variantenvielfalt real ist.
              </p>
              <p>
                Wenn ich heute mit Inhabern mittelständischer Konstruktions- und Ingenieurbüros spreche, höre ich oft: „Wir warten, bis das ausgereift ist." Ich verstehe die Haltung. Aber sie ist aus meiner Sicht die teuerste Strategie.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Warum Abwarten nicht funktioniert
              </h2>
              <p>
                Wer bis zur Reife wartet, wartet auf zwei Dinge gleichzeitig: dass die Technologie stabil wird, und dass das eigene Team damit umgehen kann. Letzteres ist das eigentliche Problem.
              </p>
              <p>
                KI-Kompetenz in einer Konstruktionsabteilung entsteht nicht durch ein Seminar. Sie entsteht durch das Ausprobieren von Werkzeugen an echten, kleinen Aufgaben. Durch das Scheitern an Toleranzen, das Lernen, welche Prompts zuverlässig welche Ergebnisse liefern, das Entwickeln eines Gefühls dafür, wo die Maschine hilft und wo sie noch nicht kann. Dieses Erfahrungswissen lässt sich nicht kaufen und nicht nachholen. Es wird über Monate aufgebaut. Oder eben nicht.
              </p>
              <p>
                Unternehmen, die jetzt starten, sind in drei Jahren nicht einfach „ein bisschen weiter". Sie sind in einer anderen Liga. Nicht wegen der Technik, sondern wegen des Teamwissens und der eingespielten Workflows.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die Antwort ist kein Strategiepapier, sondern ein PoC
              </h2>
              <p>
                Klassische Digitalisierungsstrategien mit 18-Monats-Roadmap funktionieren bei KI nicht. Die Technologie entwickelt sich während der Planungsphase weiter, als die Planung zu Ende ist. Wer in diesem Umfeld mit großen Papieren arbeitet, ist bei der Umsetzung immer einen Schritt hinter dem, was schon möglich wäre.
              </p>
              <p>
                Die Antwort, die wir bei AImation konsequent vertreten, heißt Proof of Concept. Klein, konkret, zeitlich begrenzt, mit einem klaren Lernziel. Zum Beispiel: eine Variante einer Halteranwendung, die automatisiert aus Parametern generiert wird. Oder die Extraktion von Stücklisten aus archivierten PDF-Zeichnungen. Oder ein KI-Assistent, der aus Kundenanforderungen einen Vorschlag für das CAD-Modell macht, den der Konstrukteur anschließend prüft und übernimmt.
              </p>
              <p>
                Solche PoCs kosten nicht viel. Sie dauern Wochen, nicht Quartale. Sie sind so gebaut, dass sie scheitern dürfen, denn das ist ihr Zweck. Was sie liefern, ist genau das, was in keinem Benchmark und keinem Whitepaper steht: die Antwort auf die Frage, was in meinem Unternehmen mit meinen Daten und meinen Prozessen funktioniert und was nicht. Und sie liefern Teamerfahrung, die jedes nächste Projekt schneller macht.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was konkret zu tun ist
              </h2>
              <p>Wenn Sie heute in einer Konstruktions-, Entwicklungs- oder Ingenieurverantwortung sind, sehe ich drei pragmatische Schritte:</p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                1. Einen einzigen Usecase auswählen
              </h3>
              <p>
                Wählen Sie einen Usecase, der heute Zeit frisst und bei dem ein Fehler nicht katastrophal ist. Digitalisierung von Altbestandzeichnungen ist ein Klassiker. Variantenkonstruktion aus Parametertabellen ein anderer. Meeting- und Anforderungsprotokolle automatisiert in CAD-taugliche Spezifikationen zu überführen ein dritter.
              </p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                2. Einen Stack wählen, der Datensouveränität wahrt
              </h3>
              <p>
                Für DACH-Mittelstand empfehlen wir self-hosted Werkzeuge: n8n, Claude über AWS Bedrock in Frankfurt, lokale CAD-Systeme wie FreeCAD oder Onshape mit Unternehmenskonto. Keine unkontrollierten Datenflüsse in US-Clouds.
              </p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                3. Zwei Personen aus dem Team einplanen, nicht eine
              </h3>
              <p>
                Einen Konstrukteur mit Domänenwissen, eine Person mit Affinität zu Automatisierung. Beide brauchen Zeit. Nicht nebenher. Wer das als „macht der Praktikant mal" behandelt, bekommt auch Praktikantenergebnisse.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was bleibt
              </h2>
              <p>
                KI entwickelt sich weiter. Sie macht keine Pause, während Unternehmen noch überlegen, ob sie bereit sind. Und der entscheidende Vorteil entsteht nicht beim Werkzeug, sondern beim Team: bei den Menschen, die gelernt haben, damit umzugehen.
              </p>
              <p>
                Wer jetzt einen konkreten Usecase auswählt, einen kleinen PoC startet und das dabei entstehende Wissen im Team verankert, baut etwas auf, das sich nicht kaufen lässt. Keine Beraterpräsentation liefert das. Kein Whitepaper. Nur das eigene Tun.
              </p>
              <p>
                Wenn Sie wissen möchten, welcher Usecase in Ihrer Konstruktionsabteilung als erstes Sinn ergibt und wie ein PoC bei Ihnen aussehen könnte, sprechen Sie mich an. Das erste Gespräch kostet nichts, und Sie wissen danach mehr als vorher.
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
