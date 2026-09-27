import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';
import { PRICING } from '@/lib/data/pricing';
import { pageMetadata } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';

const PATH = '/use-cases/excel-powerpoint-berichte';
const copy = {
  de: {
    title: 'Excel, PowerPoint und Berichte mit KI vorbereiten | AImation',
    description: 'So kann KI Projektberichte aus Excel-Daten und Meetingnotizen vorbereiten: mit Quellenbezug, festen Rechenregeln und menschlicher Freigabe. Ein Praxisablauf für Entwicklungsteams.',
    label: 'Praxisleitfaden / Office in der Entwicklung',
    headline: 'Weniger Berichtsbau. Mehr Zeit für die Entwicklung.',
    intro: 'Excel auswerten, Folien aktualisieren, Beschlüsse aus dem Meeting nachtragen. Das nächste Projektreview kommt bestimmt. KI kann die Vorbereitung übernehmen, wenn Datenstand, Rechenregeln und Freigabe geklärt sind.',
    overview: 'Vom Datenstand zum freigegebenen Bericht',
    caption: 'Beispielablauf zur Veranschaulichung. Keine Kundenreferenz und kein zugesagtes Einsparergebnis.',
    steps: [
      ['Daten übernehmen', 'Excel-Statusliste, freigegebene Meetingnotizen und die PowerPoint-Vorlage zusammenführen. Projekt-ID und Berichtsdatum bleiben erhalten.'],
      ['Zahlen prüfen', 'Summen und Terminabweichungen mit festgelegten Formeln berechnen. Fehlende Werte oder widersprüchliche Versionsstände markieren.'],
      ['Entwurf erstellen', 'KI formuliert den Status, bündelt offene Punkte und bereitet die Folienstruktur vor. Jede Aussage muss auf ihre Quelle zurückgeführt werden können.'],
      ['Fachlich freigeben', 'Der Projektverantwortliche prüft Zahlen, Formulierungen und Maßnahmen. Erst danach wird der Bericht geteilt.'],
    ],
    exampleTitle: 'Aus drei Quellen wird ein prüfbarer Projektstatus.',
    example: 'Für ein Entwicklungsreview liegen eine Excel-Liste mit Arbeitspaketen, ein Besprechungsprotokoll und eine bestehende PowerPoint-Vorlage vor. Der Ablauf ordnet offene Maßnahmen den Arbeitspaketen zu und bereitet Statusfolien vor. Fehlt im Protokoll ein Verantwortlicher, bleibt das Feld offen. Widersprechen sich zwei Termine, wird der Konflikt angezeigt.',
    rule: 'Zahlen werden berechnet. Die KI schreibt den Entwurf. Sie entscheidet nicht, welcher Termin verbindlich ist.',
    meetingTitle: 'Auch die Nacharbeit nach Meetings gehört dazu.',
    meeting: 'Aus freigegebenen Notizen lassen sich Beschlüsse, Aufgaben und offene Fragen für das nächste Review aufbereiten. Verantwortliche und Termine werden nur übernommen, wenn sie in der Quelle stehen. Tonaufnahmen sind dafür keine Voraussetzung. Zugriffsrechte und der Umgang mit personenbezogenen Daten müssen vor dem Einsatz geklärt sein.',
    requirementsTitle: 'Was vor dem ersten Test stehen muss',
    requirements: [
      'Ein wiederkehrender Bericht mit einer benannten Person für die Freigabe.',
      'Ein festgelegter Datenstand, eindeutige Projekt-IDs und verständliche Spalten in Excel.',
      'Eine abgestimmte PowerPoint-Vorlage. Automatische Befüllung und Export werden mit Ihren Dateien getestet.',
      'Freigegebene KI-Werkzeuge, passende Zugriffsrechte und geklärte Verarbeitung der Unternehmensdaten.',
    ],
    measureTitle: 'Erst messen. Dann über Zeitgewinn sprechen.',
    measure: 'Wir vergleichen denselben Bericht vor und nach dem Test: Zeit für Vorbereitung, Kontrolle und Korrekturen; übersehene Abweichungen; Nacharbeit bis zur Freigabe. Ein schneller Entwurf bringt wenig, wenn die Prüfung danach länger dauert. Den Erfolgskorridor legen wir gemeinsam vor dem Pilot fest.',
    offer: `Ein klar abgegrenzter Prozess kann im Pilot geprüft werden: ${PRICING.pilot.priceLabel}, ${PRICING.pilot.duration}. Datenzugang, Umfang und Ergebnis werden vorher abgestimmt.`,
    training: 'Ihr Team soll diese Aufgaben selbst bearbeiten können? Die Schulung verbindet KI-Grundlagen mit Übungen aus dem Arbeitsalltag. Die Lernprobe zeigt, wie das aufgebaut ist.',
    trainingLink: 'Schulung und Lernprobe ansehen',
    cta: 'Eigenen Berichtsprozess besprechen',
    questions: 'Häufige Fragen zum Ablauf',
    faqs: [
      { question: 'Kann KI Excel-Zahlen zuverlässig für PowerPoint übernehmen?', answer: 'Die Übertragung muss mit festen Regeln und Kontrollen umgesetzt werden. Berechnungen gehören in Formeln oder Code. KI kann daraus Texte entwerfen. Zahlen, Quellen und Datenstand werden vor der Freigabe geprüft.' },
      { question: 'Werden fertige Berichte automatisch versendet?', answer: 'In diesem Beispiel nicht. Der Ablauf endet mit einem prüfbaren Entwurf. Eine benannte Person gibt den Bericht frei. Ob später ein Versand ergänzt wird, ist eine eigene Prozessentscheidung.' },
      { question: 'Ist eine drei- oder fünffache Beschleunigung garantiert?', answer: 'Nein. Der Zeitgewinn hängt von Datenqualität, Wiederholbarkeit und Prüfaufwand ab. Im Pilot werden Vorbereitung, Kontrolle und Nacharbeit gemeinsam gemessen. Erst diese Werte tragen eine belastbare Aussage.' },
    ],
    related: 'Weitere Aufgaben in der Entwicklung',
    knowledge: 'Engineering-Wissen auffindbar machen',
    requests: 'Technische Anfragen vorsortieren',
  },
  en: {
    title: 'Prepare Excel reports and PowerPoint slides with AI | AImation',
    description: 'A practical reporting workflow for engineering teams: Excel data, meeting notes, traceable AI drafts, deterministic calculations and human approval.',
    label: 'Practical guide / Engineering office work',
    headline: 'Less report preparation. More time for engineering.',
    intro: 'Analyse Excel files, update slides, follow up on meeting decisions. The next project review is coming. AI can help prepare it once the data version, calculation rules and approval process are clear.',
    overview: 'From source data to an approved report',
    caption: 'Illustrative workflow. Not a customer case study or a promised time saving.',
    steps: [
      ['Collect the inputs', 'Combine the Excel status list, approved meeting notes and PowerPoint template. Retain project identifiers and reporting dates.'],
      ['Check the numbers', 'Calculate totals and schedule deviations using defined formulas. Flag missing values and conflicting document versions.'],
      ['Prepare a draft', 'AI writes the status summary, groups open issues and prepares the slide structure. Every statement must be traceable to its source.'],
      ['Review and approve', 'The project owner checks figures, wording and actions. The report is shared only after approval.'],
    ],
    exampleTitle: 'Turn three sources into a project status you can check.',
    example: 'An engineering review uses an Excel work-package list, meeting minutes and an existing PowerPoint template. The workflow matches actions to work packages and prepares status slides. If the minutes do not name an owner, that field stays empty. If two dates disagree, the conflict is flagged.',
    rule: 'Numbers are calculated. AI writes the draft. It does not decide which deadline is binding.',
    meetingTitle: 'Meeting follow-up belongs in this workflow too.',
    meeting: 'Approved notes can provide decisions, actions and open questions for the next review. Owners and dates are included only when present in the source. Audio recordings are not required. Access permissions and the handling of personal data must be agreed before use.',
    requirementsTitle: 'What needs to be ready before the first test',
    requirements: [
      'A recurring report with a named person responsible for approval.',
      'An agreed data version, unique project identifiers and clear Excel column definitions.',
      'An agreed PowerPoint template. Automated population and export are tested with your files.',
      'Approved AI tools, suitable access permissions and agreed handling of company data.',
    ],
    measureTitle: 'Measure first. Discuss time savings afterwards.',
    measure: 'We compare the same report before and after the test: preparation, review and correction time; missed discrepancies; rework before approval. A fast draft is of little use if checking it takes longer. We agree the success criteria before the pilot.',
    offer: `A clearly scoped process can be tested in a pilot for EUR ${PRICING.pilot.price.toLocaleString('en-GB')}. The current duration is ${PRICING.pilot.duration.replace('Wochen', 'weeks')}. Data access, scope and deliverables are agreed beforehand.`,
    training: 'Would you like your team to handle these tasks themselves? The training combines AI fundamentals with exercises from everyday work. Try the learning sample to see the approach.',
    trainingLink: 'Explore training and the learning sample',
    cta: 'Discuss your reporting workflow',
    questions: 'Common questions about the workflow',
    faqs: [
      { question: 'Can AI reliably transfer Excel figures into PowerPoint?', answer: 'Data transfer needs explicit rules and checks. Calculations belong in formulas or code. AI can draft the accompanying text. Figures, sources and data versions are checked before approval.' },
      { question: 'Are completed reports sent automatically?', answer: 'Not in this example. The workflow ends with a reviewable draft. A named person approves the report. Adding automated delivery later is a separate process decision.' },
      { question: 'Is a threefold or fivefold speed increase guaranteed?', answer: 'No. Time savings depend on data quality, repeatability and review effort. Preparation, checking and rework are measured together during the pilot. Only those measurements support a credible claim.' },
    ],
    related: 'Other engineering tasks',
    knowledge: 'Make engineering knowledge searchable (German)',
    requests: 'Triage technical requests (German)',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = copy[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(PATH, locale, c.title, c.description);
}

export default async function ReportingGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';
  const c = copy[en ? 'en' : 'de'];
  return <>
    <BreadcrumbSchema items={[{ name: en ? 'Home' : 'Startseite', url: localizedPath('/', locale) }, { name: 'Excel & PowerPoint', url: localizedPath(PATH, locale) }]} />
    <FAQPageSchema faqs={c.faqs} />
    <Header />
    <main id="main-content" className="reporting-guide">
      <section className="pt-32 pb-16 md:pt-40">
        <div className="engineering-wrap">
          <Link href="/" className="engineering-text-link mb-8">← {en ? 'Home' : 'Startseite'}</Link>
          <p className="technical-label mb-5">{c.label}</p>
          <h1 className="max-w-4xl text-4xl md:text-6xl font-heading font-medium leading-tight">{c.headline}</h1>
          <p className="max-w-3xl mt-7 text-lg text-muted leading-relaxed">{c.intro}</p>
          <a href="#ablauf" className="engineering-text-link mt-6">{en ? 'Explore the workflow' : 'Den Ablauf ansehen'} ↓</a>
        </div>
      </section>
      <section id="ablauf" className="pb-16">
        <div className="engineering-wrap">
          <h2 className="text-2xl md:text-3xl font-heading mb-8">{c.overview}</h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-line">
            {c.steps.map(([title, description], i) => <li key={title} className="p-6 border-b border-line lg:border-r">
              <span className="block font-mono text-dim text-sm mb-8">0{i + 1} / {i === 3 ? (en ? 'APPROVAL' : 'FREIGABE') : (en ? 'PROCESS' : 'ABLAUF')}</span>
              <h3 className="text-xl font-heading mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{description}</p>
            </li>)}
          </ol>
          <p className="text-sm text-dim mt-4">{c.caption}</p>
        </div>
      </section>
      <section className="engineering-section border-y border-line">
        <div className="engineering-wrap grid lg:grid-cols-2 gap-12">
          <div className="section-intro"><h2>{c.exampleTitle}</h2><p>{c.example}</p><p className="mt-6 border-l-2 border-line-strong pl-5">{c.rule}</p></div>
          <div className="section-intro"><h2>{c.meetingTitle}</h2><p>{c.meeting}</p></div>
        </div>
      </section>
      <section className="engineering-section">
        <div className="engineering-wrap grid lg:grid-cols-2 gap-12">
          <div className="section-intro"><h2>{c.requirementsTitle}</h2><ul className="space-y-4 list-disc pl-5 text-muted leading-relaxed">{c.requirements.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="section-intro"><h2>{c.measureTitle}</h2><p>{c.measure}</p><p className="mt-5">{c.offer}</p><a href={`${localizedPath("/", locale)}#kontakt`} className="engineering-button mt-7">{c.cta} ↗</a></div>
        </div>
      </section>
      <section className="pb-16">
        <div className="engineering-wrap"><div className="border-y border-line py-8 max-w-4xl"><p className="text-muted leading-relaxed">{c.training}</p><Link href="/ki-schulungen-mittelstand#lernprobe" className="engineering-text-link mt-4">{c.trainingLink} →</Link></div></div>
      </section>
      <section className="pb-20">
        <div className="engineering-wrap">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">{c.questions}</h2>
          <div className="max-w-4xl">{c.faqs.map((faq) => <div key={faq.question} className="border-b border-line py-6"><h3 className="font-heading text-xl mb-3">{faq.question}</h3><p className="text-muted leading-relaxed">{faq.answer}</p></div>)}</div>
          <nav aria-label={c.related} className="mt-12"><h2 className="font-heading text-xl mb-5">{c.related}</h2><div className="flex flex-col items-start gap-4"><a href="/use-cases/knowledge-graph-management" className="engineering-text-link">{c.knowledge} →</a><a href="/use-cases/email-klassifizierung" className="engineering-text-link">{c.requests} →</a></div></nav>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
