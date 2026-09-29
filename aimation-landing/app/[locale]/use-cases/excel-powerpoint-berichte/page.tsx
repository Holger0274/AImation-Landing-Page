import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';
import { PRICING } from '@/lib/data/pricing';
import { pageMetadata } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';
import ReportingWorkbench from '@/components/visuals/ReportingWorkbench';

const PATH = '/use-cases/excel-powerpoint-berichte';
const copy = {
  de: {
    title: 'Excel und PowerPoint ablösen: Dashboards, BI und Apps | AImation',
    description: 'Excel-Tools und PowerPoint-Berichte durch Dashboards, BI und eigene Apps ablösen. Mit geprüfter Rechenlogik, gezielter KI-Integration, Datenbank und Historie.',
    label: 'Excel und PowerPoint ablösen / Entwicklung',
    headline: 'Raus aus Excel und PowerPoint.',
    accent: 'Rein in Ihre Anwendung.',
    intro: 'Kalkulationen in einer Datei, Projektstände in der nächsten, Ergebnisse auf Folien. Wir überführen solche Abläufe in eigene Apps, Dashboards und BI-Auswertungen auf einer gemeinsamen Datenbasis. Ihr Team arbeitet direkt in der Anwendung. KI unterstützt dort, wo feste Regeln allein nicht reichen.',
    sourcesTitle: 'Aus Ihren Excel-Tools werden Anwendungen.',
    sourcesIntro: 'In Kalkulationstabellen, Aufwandsrechnern und Variantenvergleichen steckt Ihr Fachwissen. Wir übernehmen die geprüfte Logik und bauen die passende Oberfläche darum. Welche Dateien vollständig entfallen können, klären wir am konkreten Ablauf.',
    sources: [
      ['Kalkulations- und Fachanwendungen', 'Materialkosten, Entwicklungsaufwand oder Varianten direkt in einer App berechnen und vergleichen. Eingaben werden geprüft, Rechenregeln zentral gepflegt und Ergebnisse mit ihren Annahmen gespeichert.'],
      ['Dashboards und BI-Auswertungen', 'Projektstände, Abweichungen und Kennzahlen aus der gemeinsamen Datenbasis betrachten. Nach Projekt oder Zeitraum filtern und bis zur zugrunde liegenden Information gehen. Das Review findet am Dashboard statt.'],
      ['Aufgaben und Freigaben in der App', 'Zuständigkeiten, Rückfragen und Entscheidungen direkt am Vorgang bearbeiten. Rollen, Freigaben und Änderungshistorie gehören zum geplanten Ablauf. PowerPoint bleibt bei Bedarf ein optionaler Export.'],
    ],
    overview: 'Von der Datei zur gemeinsam genutzten Anwendung',
    caption: 'Beispielablauf zur Veranschaulichung. Keine Kundenreferenz und kein zugesagtes Einsparergebnis.',
    steps: [
      ['Excel-Logik prüfen', 'Kalkulationstabellen, Formeln, Makros und externe Verknüpfungen aufnehmen. Bekannte Testfälle zeigen, welche Ergebnisse die neue Anwendung liefern muss.'],
      ['Datenbasis aufbauen', 'Datenmodell, Datenbank und benötigte Schnittstellen festlegen. Datenstände, Zugriffsrechte und Historie von Beginn an mitplanen.'],
      ['Dashboard und App bauen', 'Auswertungen, Eingabemasken und Freigaben für Ihren Ablauf umsetzen. KI ergänzt etwa die Auswertung von Notizen oder einen erklärenden Textentwurf.'],
      ['Prüfen und umstellen', 'Berechnungen und Abläufe mit den bisherigen Dateien vergleichen. Nach fachlicher Freigabe wird die Anwendung führend; welche Excel-Dateien entfallen, ist eindeutig vereinbart.'],
    ],
    exampleTitle: 'Das Review findet in der Anwendung statt.',
    example: 'Heute werden Arbeitspakete aus Excel und Beschlüsse aus Meetingnotizen für PowerPoint zusammengetragen. Im Zielablauf sehen Sie den Projektstand im Dashboard und öffnen von dort den betroffenen Vorgang in der App. Rückfragen und Entscheidungen bleiben am Arbeitspaket. Fehlt ein Verantwortlicher, bleibt das sichtbar, bis jemand ihn fachlich zuordnet.',
    rule: 'Berechnungen und Statusregeln laufen deterministisch. KI kann Notizen auswerten und Erläuterungen entwerfen. Fachliche Entscheidungen bleiben bei Ihnen.',
    historyTitle: 'Ein Datenstand für Dashboard, BI und App.',
    history: 'Für die Umsetzung planen wir eine gemeinsame Datenbank mit versionierten Datenständen. Eingaben, Rechenergebnisse und Freigaben sollen zusammen nachvollziehbar bleiben. Eine neue Prognose darf den alten Planstand nicht still überschreiben. Datenquellen, Aktualisierungsrhythmus, Rollen und Aufbewahrung stimmen wir ab. Das Beispiel oben ist eine Veranschaulichung, keine fertige Anbindung an Ihre Systeme.',
    meetingTitle: 'Beschlüsse werden zu Aufgaben in der App.',
    meeting: 'KI kann aus freigegebenen Notizen Aufgaben und offene Fragen vorschlagen. Eine Person prüft die Vorschläge und ordnet sie dem passenden Vorgang zu. Verantwortliche und Termine werden nicht erfunden. Die weitere Bearbeitung findet in der Anwendung statt. Tonaufnahmen sind dafür keine Voraussetzung; Zugriffsrechte und der Umgang mit personenbezogenen Daten werden vorher geklärt.',
    requirementsTitle: 'Was vor dem ersten Test stehen muss',
    requirements: [
      'Ein konkreter Ablauf, dessen Excel-Dateien und PowerPoint-Berichte abgelöst werden sollen, mit fachlich verantwortlicher Person.',
      'Eine Kalkulationstabelle, ein Excel-Tool oder eine Statusliste mit festgelegtem Datenstand, erklärter Rechenlogik und bekannten Prüfergebnissen.',
      'Die benötigten Dashboard-Sichten, Eingaben, Rollen und Freigaben. Verbleibende Exporte werden ausdrücklich festgelegt.',
      'Freigegebene KI-Werkzeuge, passende Zugriffsrechte und geklärte Verarbeitung der Unternehmensdaten.',
    ],
    measureTitle: 'Erst messen. Dann über Zeitgewinn sprechen.',
    measure: 'Wir vergleichen denselben Vorgang im bisherigen Dateiablauf und in der Anwendung: manuelle Übertragungen, Pflegeaufwand, Kontrollzeit und Nacharbeit. Zusätzlich prüfen wir Rechenergebnisse und die Nachvollziehbarkeit von Änderungen. Entscheidend ist, welche Doppelpflege tatsächlich entfällt. Die Kriterien legen wir vor dem Pilot fest.',
    offer: `Ein klar abgegrenzter Prozess kann im Pilot geprüft werden: ${PRICING.pilot.priceLabel}, ${PRICING.pilot.duration}. Datenzugang, Umfang und Ergebnis werden vorher abgestimmt.`,
    training: 'Ihr Team soll die KI-Funktionen fachlich prüfen und im Alltag sinnvoll einsetzen können? Die Schulung ergänzt die Einführung. KI-Grundlagen und Übungen helfen, Entwürfe zu beurteilen und Grenzen zu erkennen.',
    trainingLink: 'Schulung und Lernprobe ansehen',
    cta: 'Excel-Ablösung besprechen',
    questions: 'Häufige Fragen zum Ablauf',
    faqs: [
      { question: 'Sollen Excel und PowerPoint wirklich ersetzt werden?', answer: 'Ja, für den gemeinsam abgegrenzten Ablauf ist das das Ziel. Berechnungen, Auswertungen und Bearbeitung wandern in eine Anwendung mit gemeinsamer Datenbasis. Ein Excel-Import oder PowerPoint-Export kann für Übergänge oder externe Empfänger bleiben. Die laufende Arbeit soll ohne parallele Datei- und Folienpflege auskommen.' },
      { question: 'Bauen Sie ein Dashboard, eine BI-Lösung oder eine App?', answer: 'Das hängt von der Aufgabe ab. Dashboards und BI dienen der Auswertung. Eine App wird gebraucht, wenn Personen Daten eingeben, Vorgänge bearbeiten oder Entscheidungen freigeben. Beides kann dieselbe Datenbasis nutzen. Bestehende Systeme, Rechenlogik und Schnittstellen prüfen wir vor der Umsetzung.' },
      { question: 'Ist eine drei- oder fünffache Beschleunigung garantiert?', answer: 'Nein. Der Zeitgewinn hängt von Datenqualität, Wiederholbarkeit und Prüfaufwand ab. Im Pilot werden Vorbereitung, Kontrolle und Nacharbeit gemeinsam gemessen. Erst diese Werte tragen eine belastbare Aussage.' },
    ],
    related: 'Weitere Aufgaben in der Entwicklung',
    knowledge: 'Engineering-Wissen auffindbar machen',
    requests: 'Technische Anfragen vorsortieren',
  },
  en: {
    title: 'Replace Excel and PowerPoint with dashboards, BI and apps | AImation',
    description: 'Replace Excel tools and PowerPoint reporting with dashboards, BI and custom apps. Validated calculations, targeted AI integration, a shared database and change history.',
    label: 'Replacing Excel and PowerPoint / Engineering',
    headline: 'Out of Excel and PowerPoint.',
    accent: 'Into your own application.',
    intro: 'Calculations in one file, project status in another, results on slides. We turn these workflows into custom apps, dashboards and BI analysis on a shared data foundation. Your team works directly in the application. AI assists where fixed rules alone are insufficient.',
    sourcesTitle: 'Turn your Excel tools into applications.',
    sourcesIntro: 'Calculation spreadsheets, effort estimators and variant comparisons contain your technical knowledge. We reuse validated logic and build the right interface around it. We agree which files can be fully retired by examining your workflow.',
    sources: [
      ['Calculation and engineering apps', 'Calculate and compare material costs, engineering effort or variants directly in an app. Validate inputs, maintain calculation rules centrally and store results with their assumptions.'],
      ['Dashboards and BI analysis', 'Review project status, deviations and metrics from shared data. Filter by project or period and trace results to their underlying information. Hold the review in the dashboard.'],
      ['Tasks and approvals in the app', 'Manage ownership, questions and decisions directly on the record. Roles, approvals and change history are part of the planned workflow. PowerPoint remains an optional export where needed.'],
    ],
    overview: 'From a file to a shared application',
    caption: 'Illustrative workflow. Not a customer case study or a promised time saving.',
    steps: [
      ['Validate the Excel logic', 'Review spreadsheets, formulas, macros and external links. Known test cases define the results the new application must produce.'],
      ['Build the data foundation', 'Define the data model, database and required interfaces. Plan versioning, access permissions and history from the start.'],
      ['Build dashboards and the app', 'Implement analysis, input forms and approvals for your workflow. AI can assist with interpreting notes or drafting explanatory text.'],
      ['Validate and switch over', 'Compare calculations and workflows with the existing files. Following expert approval, the application becomes the primary system; agree exactly which Excel files are retired.'],
    ],
    exampleTitle: 'Run the review in the application.',
    example: 'Today, work packages from Excel and decisions from meeting notes are assembled for PowerPoint. In the target workflow, you see project status in the dashboard and open the relevant record in the app. Questions and decisions stay with the work package. A missing owner remains visible until someone makes the assignment.',
    rule: 'Calculations and status rules are deterministic. AI can interpret notes and draft explanations. Technical decisions remain with you.',
    historyTitle: 'Shared data for dashboards, BI and the app.',
    history: 'We plan a shared database with versioned records for implementation. Inputs, calculation results and approvals should remain traceable together. A new forecast must not silently overwrite the previous plan. We agree sources, refresh intervals, roles and retention. The example above is an illustration, not an existing integration with your systems.',
    meetingTitle: 'Meeting decisions become tasks in the app.',
    meeting: 'AI can suggest tasks and open questions from approved notes. A person checks the suggestions and assigns them to the relevant record. Owners and dates are not invented. Further work takes place in the application. Audio recordings are not required; access rights and handling of personal data are agreed beforehand.',
    requirementsTitle: 'What needs to be ready before the first test',
    requirements: [
      'A specific workflow whose Excel files and PowerPoint reporting should be replaced, with a named technical owner.',
      'A calculation spreadsheet, Excel tool or status list with an agreed data version, documented calculation logic and known validation results.',
      'The required dashboard views, input forms, roles and approvals. Any remaining exports are explicitly agreed.',
      'Approved AI tools, suitable access permissions and agreed handling of company data.',
    ],
    measureTitle: 'Measure first. Discuss time savings afterwards.',
    measure: 'We compare the same task in the existing file-based workflow and in the application: manual transfers, maintenance, checking and rework. We also validate calculation results and traceability of changes. What matters is which duplicate work actually disappears. We agree the criteria before the pilot.',
    offer: `A clearly scoped process can be tested in a pilot for EUR ${PRICING.pilot.price.toLocaleString('en-GB')}. The current duration is ${PRICING.pilot.duration.replace('Wochen', 'weeks')}. Data access, scope and deliverables are agreed beforehand.`,
    training: 'Does your team need to review AI features and use them appropriately in everyday work? Training supports the rollout. AI fundamentals and practical exercises help people assess drafts and recognise limitations.',
    trainingLink: 'Explore training and the learning sample',
    cta: 'Discuss replacing your Excel workflow',
    questions: 'Common questions about the workflow',
    faqs: [
      { question: 'Is the intention to replace Excel and PowerPoint?', answer: 'Yes, for the agreed scope. Calculations, analysis and task handling move into an application with shared data. Excel imports or PowerPoint exports may remain for a transition or external recipients. Day-to-day work should no longer require maintaining parallel files and slides.' },
      { question: 'Will you build a dashboard, a BI solution or an app?', answer: 'That depends on the task. Dashboards and BI support analysis. An app is needed when people enter data, process records or approve decisions. Both can use the same data foundation. We review existing systems, calculation logic and interfaces before implementation.' },
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
          <h1 className="max-w-4xl text-4xl md:text-6xl font-heading font-medium leading-tight">{c.headline} <span className="highlight">{c.accent}</span></h1>
          <p className="max-w-3xl mt-7 text-lg text-muted leading-relaxed">{c.intro}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6"><a href="#reporting-example-title" className="engineering-text-link">{en ? 'Try the example' : 'Das Beispiel durchspielen'} ↓</a><a href="#kontakt" className="engineering-text-link">{c.cta} ↗</a></div>
        </div>
      </section>
      <div className="engineering-wrap"><ReportingWorkbench en={en}/></div>
      <section id="kalkulation-und-excel-tools" className="pb-16" aria-labelledby="reporting-sources-title">
        <div className="engineering-wrap grid lg:grid-cols-2 gap-12">
          <div className="section-intro"><h2 id="reporting-sources-title">{c.sourcesTitle}</h2><p>{c.sourcesIntro}</p></div>
          <dl className="border-t border-line">{c.sources.map(([title, description]) => <div key={title} className="py-6 border-b border-line"><dt className="font-heading text-xl mb-3">{title}</dt><dd className="text-muted leading-relaxed">{description}</dd></div>)}</dl>
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
        <div className="engineering-wrap grid lg:grid-cols-2 gap-12"><div className="section-intro"><h2>{c.historyTitle}</h2></div><p className="text-muted leading-relaxed max-w-2xl">{c.history}</p></div>
      </section>
      <section className="engineering-section border-t border-line">
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
          <nav aria-label={c.related} className="mt-12"><h2 className="font-heading text-xl mb-5">{c.related}</h2><div className="flex flex-col items-start gap-4"><Link href="/schulungen/microsoft-365-copilot" className="engineering-text-link">{en ? 'Microsoft 365 Copilot training' : 'Microsoft 365 Copilot Schulung'} →</Link><Link href="/ki-produktentwicklung" className="engineering-text-link">{en ? 'AI in product development' : 'KI in der Produktentwicklung'} →</Link><a href="/use-cases/knowledge-graph-management" className="engineering-text-link">{c.knowledge} →</a><a href="/use-cases/email-klassifizierung" className="engineering-text-link">{c.requests} →</a></div></nav>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
