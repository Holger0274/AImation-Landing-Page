import SketchFilm from '@/components/ai2cad/SketchFilm';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import AutodeskMembership from '@/components/AutodeskMembership';
import Footer from '@/components/layout/Footer';
import FemComparison from '@/components/ai2cad/FemComparison';
import EngineeringExtensions from '@/components/ai2cad/EngineeringExtensions';
import AgenticEngineering from '@/components/ai2cad/AgenticEngineering';
import AssemblyPreview from '@/components/ai2cad/AssemblyPreview';
import { ASSEMBLY_VIDEO } from '@/lib/data/assembly-video';
import ChapterPlayer from '@/components/ai2cad/ChapterPlayer';
import { Link } from '@/i18n/navigation';
import { AI2CAD_CHAPTERS, AI2CAD_PATH, AI2CAD_JOURNEY, getAI2CADFaqs } from '@/lib/data/ai2cad';
import { BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';
import { localizedPath } from '@/lib/seo/locales';
import { pageMetadata } from '@/lib/seo/metadata';
import styles from '@/components/ai2cad/ai2cad.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const en = locale === 'en';
  return pageMetadata(AI2CAD_PATH, locale,
    en ? 'Agentic engineering system: AI2CAD | AImation' : 'Agentisches Entwicklungssystem: AI2CAD | AImation',
    en ? 'Agentic engineering system: AI agents for concepts, detailed design, drawings, FEM and assembly instructions. Explore nine AImation demonstrations.' : 'Agentisches Entwicklungssystem: KI-Agenten für Konzepte, Detailkonstruktion, Zeichnungen, FEM und Montageanleitungen. Neun Demos von AImation ansehen.');
}

export default async function AI2CADPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';
  const faqs = getAI2CADFaqs(en);
  return <>
    <BreadcrumbSchema items={[{ name: 'AImation', url: localizedPath('/', locale) }, { name: 'AI2CAD', url: localizedPath(AI2CAD_PATH, locale) }]} />
    <FAQPageSchema faqs={faqs} />
    <Header />
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="ai2cad-title">
        <div className={styles.wrap}>
          <nav className={styles.breadcrumb} aria-label={en ? 'Breadcrumb' : 'Brotkrumennavigation'}><Link href="/">AImation</Link><span aria-hidden="true">/</span><span>AI2CAD</span></nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{en ? 'Agentic engineering system · Nine videos' : 'Agentisches Entwicklungssystem · Neun Videos'}</p>
              <h1 id="ai2cad-title">AI<span className="highlight">2</span>CAD<span className="sr-only">: {en ? 'CAD automation with AI and LLMs' : 'CAD-Automatisierung mit KI und LLM'}</span></h1>
              <p className={styles.headline}>{en ? 'From a hand sketch to a STEP file by chat.' : 'Per Chat von der Handskizze zur STEP-Datei.'}</p>
              <p className={styles.intro}>{en ? 'Holger sends a sketch from his phone. The AI agent asks about unclear dimensions, then builds the shaft in the connected CAD system. Four minutes later, the 3D view and STEP file arrive on the same phone.' : 'Holger schickt eine Skizze per Handy. Der KI-Agent fragt bei unklaren Maßen nach und modelliert die Welle im angebundenen CAD-System. Vier Minuten später kommen die 3D-Ansicht und die STEP-Datei auf demselben Handy an.'}</p>
              <a className="engineering-text-link" href="#videos">{en ? 'Explore the CAD and FEM chapters' : 'Alle CAD- und FEM-Kapitel entdecken'} ↓</a>
            </div>
            <SketchFilm en={en} />
          </div>
          <nav className={styles.seriesRoute} aria-label={en ? 'Explore the series' : 'Die Serie entdecken'}>
            <a href="#videos"><small>{en ? '01 to 05' : '01 bis 05'}</small><span>{en ? 'From part to FEM' : 'Vom Bauteil zur FEM'}</span><MoveRight size={20} aria-hidden="true" /></a>
            <a href="#weitere-entwicklungsfelder"><small>06 / 07</small><span>{en ? 'Patent models and CNC' : 'Patentmodelle und CNC'}</span><MoveRight size={20} aria-hidden="true" /></a>
            <Link href={`${AI2CAD_PATH}/${ASSEMBLY_VIDEO.slug}`}><small>08</small><span>{en ? 'From drawing to assembly' : 'Von der Zeichnung zur Baugruppe'}</span><MoveRight size={20} aria-hidden="true" /></Link>
          </nav>
          <AssemblyPreview en={en} />
        </div>
      </section>

      <AgenticEngineering en={en} />

      <section id="videos" className={styles.videoSection} aria-labelledby="video-heading">
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>{en ? 'Five chapters, from geometry to FEM.' : 'Fünf Kapitel, von der Geometrie zur FEM.'}</p><h2 id="video-heading">{en ? 'Watch the ' : 'Schauen Sie der KI beim '}<span className="highlight">{en ? 'modelling.' : 'Konstruieren'}</span>{en ? '' : ' zu.'}</h2><p>{en ? 'Chapter 1 starts with a mounting plate. Chapter 2 follows a sketch sent by phone through to the STEP file. Chapters 3 to 5 show design review, drawing preparation and FEM analysis on a shaft.' : 'Kapitel 1 beginnt mit einer Montageplatte. Kapitel 2 führt vom Handyfoto einer Skizze bis zur STEP-Datei. Kapitel 3 bis 5 zeigen an einer Welle die Konstruktionsprüfung, die Zeichnung und die FEM-Berechnung.'}</p></div>
          <p className={styles.journeyNote}>{AI2CAD_JOURNEY[en ? 'en' : 'de']}</p>
          <ChapterPlayer en={en} />
          <nav className={styles.chapterIndex} aria-label={en ? 'Direct video links' : 'Direkt zu den einzelnen Videos'}>{AI2CAD_CHAPTERS.map(chapter => <Link key={chapter.id} href={`${AI2CAD_PATH}/${chapter.slug}`}>{chapter.number} · {chapter[en ? 'en' : 'de'].title} ↗</Link>)}</nav>
          <p className={styles.author}>{en ? 'Demonstration by Holger Peschke, AImation. Updated 23 November 2026.' : 'Demonstration von Holger Peschke, AImation. Stand: 23. November 2026.'} <Link href="/facts/holger-peschke">{en ? 'About the author' : 'Zum fachlichen Hintergrund'} →</Link></p>
        </div>
      </section>

      <EngineeringExtensions en={en} showAssembly={false} />

      <div className={styles.wrap}><AutodeskMembership en={en} /><FemComparison en={en} /></div>

      <section className={styles.approach} aria-labelledby="approach-heading">
        <div className={styles.wrap}>
          <div className={styles.approachGrid}><div><h2 id="approach-heading">{en ? 'Every parameter.\nControlled by the ' : 'Jeder Parameter.\nGesteuert vom '}<span className="highlight">LLM.</span></h2><p>{en ? 'The language model operates the CAD system through a tool interface. In the demonstration, it carries out the CAD operations: creating sketches, setting dimensions, building features, selecting views and laying out the drawing. No manual CAD clicks are needed for these steps.' : 'Das Large Language Model bedient das CAD-System über eine Werkzeugschnittstelle. In der Demonstration führt es die CAD-Arbeitsschritte aus: Skizzen anlegen, Maße setzen, Formelemente aufbauen, Ansichten wählen und die Zeichnung aufbauen. Dafür erfolgt kein manueller Mausklick im CAD.'}</p><p className={styles.editableNote}>{en ? 'The resulting model remains parametric and editable. Questions and engineering approvals happen in the conversation.' : 'Das entstandene Modell bleibt parametrisch und editierbar. Rückfragen und fachliche Freigaben erfolgen im Dialog.'}</p></div><div className={styles.parameterExample}><span>{en ? 'Chapter 2 · Time in the chat' : 'Kapitel 2 · Uhrzeit im Chat'}</span><div><span>{en ? 'Photo sent' : 'Foto gesendet'}</span><strong>19:12</strong></div><div><span>{en ? 'Preview and STEP file received' : 'Vorschau und STEP-Datei erhalten'}</span><strong>19:16</strong></div><p>{en ? 'About four minutes for the shaft shown in this demonstration.' : 'Rund vier Minuten für die Welle im gezeigten Versuch.'}</p></div></div>
          <div className={styles.responsibility}>
            <h3>{en ? 'Approval needs engineering judgment.' : 'Die Freigabe braucht Ihren Sachverstand.'}</h3>
            <p>{en ? 'The recordings show an AImation development demonstration. AI proposes dimensions, tolerances and corrections. A design engineer checks function, standards and manufacturability before approving a drawing.' : 'Die Aufnahmen zeigen eine Entwicklungsdemonstration von AImation. Die KI schlägt Maße, Toleranzen und Korrekturen vor. Konstrukteure prüfen Funktion, Normen und Fertigbarkeit, bevor sie eine Zeichnung freigeben.'}</p>
            <p>{en ? 'Transfer to your environment depends on the CAD system, available interfaces and your data requirements. The demonstration does not establish compatibility with every CAD system.' : 'Die Übertragung auf Ihre Umgebung hängt vom CAD-System, den verfügbaren Schnittstellen und Ihren Datenvorgaben ab. Die Demonstration belegt keine Anbindung an jedes beliebige CAD-System.'}</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="ai2cad-faq-heading"><div className={styles.wrap}>
        <h2 id="ai2cad-faq-heading">{en ? 'Questions about AI in ' : 'Fragen zu KI in der '}<span className="highlight">{en ? 'CAD.' : 'Konstruktion.'}</span></h2>
        <div className={styles.faqGrid}>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        <nav className={styles.related} aria-label={en ? 'Related topics' : 'Verwandte Themen'}><Link href="/ki-produktentwicklung">{en ? 'AI in product development' : 'KI in der Produktentwicklung'} →</Link><Link href="/ki-automatisierung-mittelstand">{en ? 'Implementation and integration' : 'Umsetzung und Integration'} →</Link></nav>
      </div></section>

      <section className={styles.contact} aria-labelledby="ai2cad-contact-heading"><div className={styles.wrap}><div className={styles.contactInner}><div><h2 id="ai2cad-contact-heading">{en ? 'Bring your ' : 'Bringen Sie Ihr '}<span className="highlight">{en ? 'part.' : 'Bauteil'}</span>{en ? '' : ' mit.'}</h2><p>{en ? 'A recurring part, a typical sketch, a drawing task. In an initial conversation, we will discuss which step is worth testing in your environment.' : 'Ein wiederkehrendes Bauteil, eine typische Skizze, eine Zeichnungsaufgabe. Im Erstgespräch klären wir, welcher Arbeitsschritt sich in Ihrer Umgebung sinnvoll erproben lässt.'}</p></div><a href="#kontakt" className={styles.primary}>{en ? 'Discuss your CAD workflow' : 'Ihren CAD-Ablauf besprechen'}<ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
    </main>
    <Footer />
  </>;
}
