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
  title: { absolute: 'Die KI-Lüge im Mittelstand: Warum der gerade Strich auf der Roadmap eine Illusion ist | AI.mation' },
  description: 'Warum KI-Projekte im Mittelstand nicht am Modell scheitern, sondern an der Roadmap-Illusion. Mit einem echten Beispiel aus dem Maschinenbau und der Landkarten-Methodik als Gegenmittel.',
  alternates: { canonical: `${siteUrl}/blog/ki-roadmap-illusion-mittelstand` },
  openGraph: {
    title: 'Die KI-Lüge im Mittelstand: Warum der gerade Strich auf der Roadmap eine Illusion ist',
    description: 'Warum der Weg von der ersten KI-Idee zum produktiven Einsatz nie geradeaus verläuft – und was das für Ihre Planung bedeutet.',
    url: `${siteUrl}/blog/ki-roadmap-illusion-mittelstand`,
    type: 'article',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function KiRoadmapIllusionPage() {
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
              <span className="text-[#071013] font-medium">Die KI-Roadmap-Illusion</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                KI-Strategie
              </span>
              <span className="text-xs text-gray-400 font-inter">8. Mai 2026</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">12 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              Die KI-Lüge im Mittelstand: Warum der gerade Strich auf der{' '}
              <span className="text-[#f90093]">Roadmap eine Illusion ist.</span>
            </h1>

            <p className="font-inter text-gray-600 mb-8 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              Die größte Lüge über KI im Mittelstand ist nicht das Versprechen, dass sie alles kann. Es ist der gerade Strich auf der Roadmap.
            </p>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-2">
              <Image
                src="/images/blog/ki-roadmap-illusion-hero.jpg"
                alt="Mittelstand-Manager hält einen Projektplan mit geradem Pfeil – dahinter zeigt ein Whiteboard die chaotische Realität von KI-Implementierungen"
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
            <div className="font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.8' }}>

              <p className="mb-5">
                Wer glaubt, der Weg von der ersten Idee zum produktiven Einsatz verläuft ohne Umweg, hat noch nie ein KI-System in einem deutschen Mittelständler implementiert. Diese Lüge wird nicht aus böser Absicht verbreitet. Sie wird verbreitet von Beratern, die noch nie eine echte Implementierung begleitet haben, von Anbietern, die nur ihre Demo verkaufen wollen, und manchmal auch von uns selbst, weil die Wahrheit unbequem ist.
              </p>
              <p className="mb-5">
                Die Wahrheit ist: KI scheitert im Mittelstand selten am Modell oder an der Rechenleistung. Sie scheitert an dem, was darunter liegt.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 1: Wunsch vs Realität ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Wunsch und Realität
              </h2>
              <p className="mb-5">
                Auf der Folie sieht es immer gleich aus. Pfeil von links nach rechts. &bdquo;Idee&ldquo;, &bdquo;Pilot&ldquo;, &bdquo;Rollout&ldquo;, &bdquo;Skalierung&ldquo;. Vier Boxen, drei Pfeile, ein gerader Kurs. Auf einem Whiteboard im Vorstandszimmer wirkt das logisch und überzeugend.
              </p>
              <p className="mb-5">
                Im echten Leben sieht der Pfeil aus, als hätte man ihn fünf Mal verknotet, dreimal stecken bleiben lassen und nach vier neuen Hindernissen wieder abgesetzt. Das ist kein Versagen. Das ist das Normale.
              </p>

              <div className="bg-[#071013] rounded-xl p-6 my-8 text-white">
                <p className="font-heading font-semibold mb-2 text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                  Wer den geraden Strich verspricht, lügt.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wer das Chaos einplant, gewinnt.
                </p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 2: Praxisbeispiel ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Eine Episode aus der Beratungspraxis
              </h2>
              <p className="mb-5">
                Ein Projekt der letzten Monate, anonymisiert. Mittelständischer Maschinenbauer, Familienunternehmen, etwa 350 Mitarbeiter. Der Wunsch des Geschäftsführers: ein KI-Assistent, der Lastenhefte automatisch in strukturierte Anforderungslisten überführt. Klingt nach einem Stunde-Pilot, dann Rollout.
              </p>
              <p className="mb-5">
                In der Audit-Phase stellte sich heraus: Die &bdquo;aktuellsten&ldquo; Lastenheft-Vorlagen lagen in vier verschiedenen SharePoint-Bereichen. Drei davon stammten noch aus der Zeit vor dem letzten ERP-Wechsel. Niemand im Unternehmen konnte mit Sicherheit sagen, welche die führende Vorlage ist.
              </p>

              {/* Drei-Spalten-Karten für die Chaos-Situation */}
              <div className="grid gap-4 my-8 sm:grid-cols-3">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] text-sm mb-2">Vertrieb</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Arbeitete mit Vorlage A</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] text-sm mb-2">Konstruktion</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Arbeitete mit Vorlage C</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] text-sm mb-2">Qualitätssicherung</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Nutzte eine Mischung aus B und einer ISO-Excel-Datei aus 2014</p>
                </div>
              </div>

              <p className="mb-5">
                Der ursprünglich geschätzte Aufwand: drei Wochen Pilot. Realer Aufwand bis zum produktiven Einsatz: vier Monate. Davon drei Monate für die Aufräumarbeit an der Datenbasis. Erst dann hat sich überhaupt eine sinnvolle KI-Anwendung gerechnet.
              </p>
              <p className="mb-5">
                Genau diese Geschichte erlebe ich in der einen oder anderen Variante in fast jedem Projekt. Die Details unterscheiden sich. Das Muster nicht.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 3: Vier Hindernisse ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die vier Hindernisse, an denen KI im Mittelstand wirklich scheitert
              </h2>

              {/* Hindernis 1 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                1. Der Daten-Sumpf
              </h3>
              <p className="mb-5">
                Die erste Frage, die im Audit gestellt werden muss, lautet nicht: &bdquo;Welches Modell setzen wir ein?&ldquo; Sie lautet: &bdquo;Wem gehören diese Daten?&ldquo;
              </p>
              <p className="mb-5">
                Die Antwort ist im Mittelstand fast immer: niemandem so richtig. Stücklisten leben in vier Systemen parallel. Bauteilstände kennt nur ein bestimmter Mensch im Kopf. Reviews kommen per E-Mail-Anhang in Outlook und landen in einem persönlichen Ordner, den niemand außer dem Empfänger kennt. Die Excel-Datei, die als Wahrheit gilt, hat seit 2019 keiner mehr versioniert.
              </p>
              <p className="mb-5">
                Das ist kein Vorwurf. Das ist die normale Datenrealität in Unternehmen, die in den letzten 30 Jahren organisch gewachsen sind. Aber es ist auch der Grund, warum eine KI-Anwendung, die auf diesen Daten ansetzt, von Tag eins an gegen die eigene Datenbasis kämpft.
              </p>
              <p className="mb-5">
                Was als &bdquo;Data Lake&ldquo; geplant wird, entpuppt sich oft als Sumpf, der erst Trockenlegung braucht. Drei Monate. Manchmal sechs.
              </p>

              {/* Hindernis 2 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                2. Die &bdquo;Es funktioniert&ldquo;-Falle
              </h3>
              <p className="mb-5">
                Das Modell läuft im Test. In der kontrollierten Demo-Umgebung mit drei sauberen Beispielen sieht alles gut aus. Der Vorstand ist begeistert. Das Pilotprojekt wird genehmigt.
              </p>
              <p className="mb-5">
                Dann kommt die Realität. Das Modell halluziniert eine DIN-Norm, die es so nie gegeben hat. Es erfindet eine Materialeigenschaft, weil im Trainingsdatensatz eine Lücke war. Es verwechselt zwei Bauteilversionen, weil die Bezeichnungen sich nur durch eine Endung unterscheiden, die der Vorlieferant intern nutzt, aber nicht der Hersteller.
              </p>
              <p className="mb-5">
                Jeder gelöste Sonderfall produziert zwei neue. Das ist keine Fehlfunktion. Das ist die statistische Natur generativer Modelle. Sie interpolieren plausibel, sie garantieren nichts.
              </p>

              <div className="bg-white border-l-4 border-[#f90093] rounded-r-xl p-5 my-8">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Im Engineering-Kontext sind genau die 5&thinsp;% der Fälle, in denen das Modell irrt, oft die, die zählen. Wer das ignoriert, baut ein Werkzeug, das in 95&thinsp;% der Fälle hilft und in 5&thinsp;% teuren Schaden anrichtet.
                </p>
              </div>

              {/* Hindernis 3 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                3. Die Compliance-Wand
              </h3>
              <p className="mb-5">
                IT-Sicherheit und Recht sind keine Bremsen. Sie sind der Kern der Arbeit. Wer das ignoriert, baut ein technisches Luftschloss, das die erste Sicherheitsprüfung nicht überlebt.
              </p>
              <p className="mb-5">
                Im Mittelstand kommt erschwerend hinzu, dass die IT-Sicherheits-Funktion oft halbtags besetzt ist oder fehlt. Compliance-Anforderungen sind aber dieselben wie im Konzern. DSGVO, Auftragsverarbeitungsverträge, Datenresidenz, Audit-Fähigkeit. Bei manchen Branchen kommen Spezifika dazu: IATF&nbsp;16949 in der Automotive-Zulieferindustrie, Medical Device Regulation in der Medizintechnik, Geheimschutz in der Verteidigungsbranche.
              </p>
              <p className="mb-5">
                Was funktioniert, sind technische Maßnahmen, die Compliance erzwingen statt nur dokumentieren. Logging jeder Tool-Nutzung. Prüf-Hooks, die Werte ohne Quellenangabe blockieren. Klare Permission-Strukturen. Das ist machbar, kostet aber Aufwand, und der muss eingeplant sein, nicht hinterhergeschoben.
              </p>

              {/* Hindernis 4 */}
              <h3 className="font-heading font-semibold text-[#071013] mt-8 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                4. Der Faktor Mensch
              </h3>
              <p className="mb-5">
                Das Tool ist fertig, aber das Team wurde nicht mitgenommen. Die Nutzungsrate bleibt bei null. Drei Monate später wird das Projekt eingestampft, weil &bdquo;es niemand verwendet&ldquo;.
              </p>
              <p className="mb-5">
                Change-Management ist im Mittelstand das am häufigsten unterschätzte Risiko. Es ist nicht der nachgelagerte Roll-out-Workshop. Es ist der Kern. Wenn Mitarbeiter Angst haben, ihren Job an die KI zu verlieren, oder wenn sie nicht wissen, wie sie das Werkzeug sinnvoll einsetzen, oder wenn die Führung kein klares Signal gibt, dass Lernzeit erlaubt ist, passiert nichts. Egal wie gut das Modell ist.
              </p>
              <p className="mb-5">
                Das löst sich nicht durch eine Schulung. Es löst sich durch Co-Training: Mensch und Maschine arbeiten gemeinsam, lernen gemeinsam, machen gemeinsam Fehler. Wer das nicht plant, hat ein Tool ohne Nutzer.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 4: Das Muster ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Das Muster hinter den vier Hindernissen
              </h2>
              <p className="mb-5">
                In allen vier Hindernissen taucht dasselbe Problem auf: Technische Teams bauen isoliert. Die organisatorische Reibung tötet den Rollout. Niemand integriert die Bestandsaufnahme von Daten, Compliance, Tools und Menschen miteinander. Jeder Bereich macht sein Ding, und das Ergebnis ist ein Pilotprojekt, das auf isolierten Annahmen basiert.
              </p>
              <p className="mb-5">
                Wenn diese Reibung nicht in die Roadmap eingebaut wird, entsteht nicht KI im Mittelstand. Es entsteht eine teure Demo.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 5: Landkarten-Methodik ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was wirklich hilft: die ehrliche Methodik
              </h2>
              <p className="mb-5">
                Ich habe AImation genau aus diesem Grund um eine klare Vorabphase aufgebaut, bevor das erste Modell zum Einsatz kommt. Wir nennen das Landkarten-Erstellung. Vier Bestandsaufnahmen, die zusammen ergeben, ob ein KI-Projekt überhaupt lebensfähig ist.
              </p>

              {/* Vier Landkarten als Cards */}
              <div className="space-y-4 my-8">
                {[
                  {
                    number: '01',
                    title: 'Tool-Inventory',
                    desc: 'Welche Systeme gibt es, welche sind führend, welche werden nur gefühlt benutzt?',
                  },
                  {
                    number: '02',
                    title: 'Datenfluss-Mapping',
                    desc: 'Wo entstehen die Daten, wo werden sie verarbeitet, wo enden sie?',
                  },
                  {
                    number: '03',
                    title: 'Datenspeicher-Analyse',
                    desc: 'In welchem Zustand sind die Datenbestände, wie strukturiert, wie aktuell?',
                  },
                  {
                    number: '04',
                    title: 'Prozess-Landkarte',
                    desc: 'Welche Workflows sind real, welche sind nur dokumentiert, wo gibt es Schatten-Prozesse?',
                  },
                ].map((item) => (
                  <div key={item.number} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-5">
                    <span className="font-heading font-bold text-[#f90093] text-2xl flex-shrink-0 leading-none mt-0.5">{item.number}</span>
                    <div>
                      <p className="font-heading font-semibold text-[#071013] mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-5">
                Klingt unspektakulär. Ist aber der Unterschied zwischen einem Pilot, der nach drei Monaten produktiv ist, und einem, der nach drei Monaten als &bdquo;lernreiches Experiment&ldquo; beerdigt wird.
              </p>
              <p className="mb-5">
                Die Landkarten-Erstellung ist nicht das, was Vorstände hören wollen. Sie hören lieber Demos. Aber sie spart in der Implementierung typisch das Drei- bis Fünffache an Zeit und Budget. Ein Projekt, das ohne Audit für zwölf Monate und 200.000 Euro angesetzt war, läuft mit Audit oft in sechs Monaten und 80.000 Euro durch. Vor allem aber liefert es am Ende, was die Demo versprochen hat.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 6: Drei Empfehlungen ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Plane das Chaos ein
              </h2>
              <p className="mb-6">
                Drei Empfehlungen, die ich jedem Geschäftsführer mitgebe, der über ein KI-Projekt nachdenkt:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">01</span> Rechne mit drei Monaten Datenarbeit, bevor das eigentliche Projekt anfängt.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wenn weniger Zeit gebraucht wird, ist das eine schöne Überraschung. Wenn mehr gebraucht wird, fliegt man nicht aus dem Plan.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">02</span> Hol IT-Sicherheit und Recht von Tag eins an den Tisch.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nicht als Bremsklotz, sondern als Co-Architekt. Was später nachgeschoben wird, kostet das Vielfache.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-heading font-semibold text-[#071013] mb-2 flex items-center gap-2">
                    <span className="text-[#f90093]">03</span> Plane Change-Management nicht ans Ende, sondern an den Anfang.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Die Frage &bdquo;Wie nehme ich mein Team mit?&ldquo; gehört in den ersten Strategieworkshop, nicht in den Roll-out-Plan.
                  </p>
                </div>
              </div>

              <p className="mb-5">
                Ein ehrliches KI-Audit zu Beginn spart am Ende Geld, Nerven und manchmal das ganze Projekt.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* ── ABSCHNITT 7: Was danach kommt ── */}
              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-5" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Wenn du wissen willst, wie das produktive Setup danach aussieht
              </h2>
              <p className="mb-5">
                Diese Diagnose ist die eine Hälfte der Geschichte. Die andere ist: Was kommt nach dem Audit? Wie sieht ein Setup aus, das tatsächlich produktiv läuft?
              </p>
              <p className="mb-5">
                Genau das habe ich im nächsten Beitrag im Detail beschrieben: <Link href="/blog/ki-projekte-scheitern-fundament" className="text-[#f90093] underline hover:no-underline">KI-Projekte scheitern nicht am Modell. Sie scheitern an dem, was darunter liegt.</Link> Dort geht es konkret um die Werkzeugkette, mit der sich KI im Engineering-Alltag etabliert, und zwei echte PoC-Beispiele zeigen, was ein Audit in der Praxis wirklich bringt.
              </p>

            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Beratung für den Mittelstand', href: '/ki-beratung-kmu' },
                  { label: 'KI-Umsetzung & Automatisierung', href: '/ki-automatisierung-mittelstand' },
                  { label: 'KI-Schulungen für Teams', href: '/ki-schulungen-mittelstand' },
                  { label: 'KI-Projekte: Das Fundament entscheidet', href: '/blog/ki-projekte-scheitern-fundament' },
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
              Häufige Fragen zur KI-Planung im Mittelstand
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
              Use Case Workshop für Ihr Engineering-Team
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              In einem Use Case Workshop erarbeiten wir gemeinsam die drei bis fünf Workflows, bei denen KI bei Ihnen realistisch Wirkung zeigt. Mit einer ehrlichen Einschätzung, wo Ihre Roadmap geradeaus geht und wo sie Umwege braucht. Sie gehen nicht mit Folien raus, sondern mit einer priorisierten Roadmap.
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
              Use Case Workshop buchen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
