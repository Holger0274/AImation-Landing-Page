import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import ImageOriginLabel from '@/components/ui/ImageOriginLabel';
import DemoTile from '@/components/ui/DemoTile';
import AgentHumanLoop from '@/components/diagrams/AgentHumanLoop';
import QktTriangle from '@/components/diagrams/QktTriangle';
import TopicPage, { TopicSteps, topicStyles as s } from '@/components/pages/TopicPage';
import { pageMetadata } from '@/lib/seo/metadata';

const PATH = '/use-cases/patentrecherche-ki';
export const dynamic = 'force-static';
export const metadata: Metadata = pageMetadata(PATH, 'de', 'Patentrecherche mit KI für die Produktentwicklung | AImation', 'Technische Merkmale recherchieren, Patentfundstellen mit KI aufbereiten und fachlich prüfen. Interner Prototyp für die Vorrecherche, keine FTO-Freigabe.');

const faqs = [
  { question: 'Ersetzt die KI eine Prüfung durch die Patentabteilung?', answer: 'Nein. Sie unterstützt die technische Vorrecherche und bereitet Fundstellen zur Prüfung auf. Eine Aussage zur Patentierbarkeit oder zur Nutzung einer Lösung ohne Verletzung fremder Schutzrechte gehört nicht zum Leistungsumfang dieses Prototyps. Dafür braucht es eine gesonderte fachliche und rechtliche Prüfung.' },
  { question: 'Welche Patentdatenbanken werden angebunden?', answer: 'Datenquellen, Länder, Sprachen und Suchumfang werden für Ihren Pilot festgelegt. Öffentliche Recherchemöglichkeiten sind etwa Espacenet und WIPO PATENTSCOPE. Ob eine automatisierte Anbindung verfügbar und zulässig ist, prüfen wir je Quelle. Eine Website mit Suchfunktion ist nicht automatisch eine frei nutzbare API.' },
  { question: 'Kann die Lösung neue Wettbewerber-Patente beobachten?', answer: 'Ein regelmäßiger Abgleich veröffentlichter Dokumente kann als Erweiterung eingerichtet werden. Suchprofil, Prüftermin und verantwortliche Person werden vereinbart. Noch nicht veröffentlichte Anmeldungen sind darüber nicht auffindbar. Monitoring ersetzt weder eine vollständige Recherche noch eine rechtliche Bewertung.' },
];

export default async function PatentrechercheKiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === 'en') return <GermanOnlyNotice namespace="enUseCaseNotice" href={PATH} />;

  return <TopicPage locale="de" path={PATH} label="KI-gestützte Patentrecherche"
    title="Patente gezielt sichten." accent="Fundstellen nachvollziehen."
    intro="Welche technischen Lösungen sind bereits beschrieben? Wir unterstützen Ihre Vorrecherche mit KI: Suchbegriffe ausarbeiten, Patenttexte aufbereiten und Merkmale mit Fundstellen verbinden. So erhält Ihr Entwicklungsteam eine prüfbare Grundlage für die nächste Konzeptbesprechung."
    parent={{ href: '/use-cases', label: 'Use Cases' }}
    facts={['Interner Recherche-Prototyp', 'KI-Auswertung mit Quellenbezug', 'Keine FTO-Freigabe']}
    visual={<figure className={s.preview}><div className="relative overflow-hidden rounded-md"><Image src="/images/editorial/research.webp" alt="Illustration: Technische Merkmale mehrerer Lagerkonstruktionen werden anhand von Patentzeichnungen verglichen." width={1280} height={720} sizes="(max-width: 900px) 94vw, 46vw" priority/><ImageOriginLabel src="/images/editorial/research.webp"/></div><figcaption className="text-sm text-muted leading-relaxed">Merkmale vergleichen und Fundstellen prüfen. Die Illustration zeigt das Prinzip, keinen realen Patentbefund.</figcaption></figure>}
    faqs={faqs} cta="Ihre Rechercheaufgabe besprechen"
    closing={{ title: 'Beginnen wir mit einem technischen Merkmal.', description: 'Im kostenlosen Erstgespräch grenzen wir Ihre Recherchefrage, mögliche Quellen und die fachliche Prüfung ab. Ein bereits öffentliches Beispiel reicht. Vertrauliche Erfindungsdetails müssen Sie dafür nicht hochladen.' }}
    related={[{ href: '/use-cases/knowledge-graph-management', label: 'Entwicklungswissen mit Quellen verbinden' }, { href: '/use-cases/variantenmanagement', label: 'Varianten und Regeln beherrschbar machen' }, { href: '/ki-produktentwicklung', label: 'KI in der technischen Produktentwicklung' }]}>
    <div className="engineering-wrap">
      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Vor der nächsten Konzeptentscheidung</p><h2>Viele Treffer. Welche betreffen Ihre Konstruktion?</h2></div>
        <div><p>Ein Mechanismus taucht unter verschiedenen Begriffen auf. Eine Zeichnung sieht ähnlich aus, beschreibt aber eine andere Funktion. Das Team muss Patenttexte lesen, Merkmale zuordnen und seine Auswahl begründen.</p><p className="mt-5">Hier setzen wir an. Eine vorsortierte Auswahl mit konkreten Textstellen lässt sich gemeinsam prüfen. Eine überzeugend formulierte KI-Zusammenfassung ohne Belege hilft dabei wenig.</p></div>
      </section>

      <section className={s.section} id="einblick" aria-labelledby="patent-example-title">
        <div className={s.split}><div><p className={s.eyebrow}>Prinzipdarstellung / kein Kundenfall</p><h2 id="patent-example-title">Vom Merkmal zur belegten Fundstelle.</h2></div><p>Für eine Lagerkonstruktion könnte die Frage lauten: Welche Veröffentlichungen beschreiben einen vergleichbaren Ausgleich von Fertigungstoleranzen? Suchbegriffe, gefundene Dokumente und die fachliche Einordnung bleiben getrennt nachvollziehbar.</p></div>
        <figure className={s.plate + ' mt-8'}><Image src="/images/editorial/patent-detail.svg" alt="Technisches Merkmal, belegte Fundstelle und fachliche Einordnung einer Patentrecherche." width={960} height={540} sizes="(max-width: 900px) 94vw, 1100px" className="hidden sm:block w-full h-auto"/>
          <ol className="sm:hidden space-y-6">{[
            ['Merkmal', 'Welche Funktion oder konstruktive Lösung wird gesucht?'],
            ['Fundstelle', 'Welche Veröffentlichungsnummer und welcher Absatz oder Anspruch belegen den Treffer?'],
            ['Einordnung', 'Was passt technisch, was weicht ab und welche Frage bleibt offen?'],
          ].map(([title, text], i) => <li key={title} className="border-l border-line-strong pl-5"><span className="text-sm text-dim font-mono">0{i + 1}</span><h3 className="mt-2">{title}</h3><p>{text}</p></li>)}</ol>
          <figcaption className="text-sm text-muted leading-relaxed mt-4">Illustratives Beispiel. Keine echte Patentauswertung und keine Aussage zu bestehenden Schutzrechten.</figcaption>
        </figure>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Der Ablauf für Ihren Pilot</p><h2>Die Suchfrage entscheidet über die Treffer.</h2><p>Am Ende sollen eine begründete Trefferauswahl, ein Merkmalsvergleich und ein Rechercheprotokoll vorliegen. Offene Fragen gehen mit in die Besprechung.</p></div>
        <TopicSteps steps={[
          ['Recherche abgrenzen', 'Funktion, Bauteil und technische Merkmale beschreiben. Begriffe, Sprachen, Quellen und Suchzeitraum festlegen. Die zulässige Verarbeitung vertraulicher Angaben vorab klären.'],
          ['Treffer erfassen und ordnen', 'Suchanfragen und Abrufdatum protokollieren. Veröffentlichungsnummern, Dubletten und Filter nach festen Regeln verarbeiten. Den erfassten Quellenumfang sichtbar halten.'],
          ['KI-Auswertung prüfen', 'KI schlägt Suchbegriffe vor und entwirft Zusammenfassungen mit Absatz- oder Anspruchsbezug. Jede relevante Aussage wird am Original geprüft. Fehlende Belege bleiben als Lücke markiert.'],
          ['Ergebnisse einordnen', 'Entwicklung und Patentverantwortliche prüfen die Trefferauswahl. Technische Relevanz, offene Fragen und nächste Prüfschritte werden dokumentiert. Eine rechtliche Freigabe ist ein gesonderter Schritt.'],
        ]}/>
      </section>

      <section className={s.section} id="ki-integration">
        <div className={s.split}><div><p className={s.eyebrow}>KI, feste Regeln und Datenhistorie</p><h2>Die KI formuliert. Ihr Team prüft die Belege.</h2></div><div><p>Deterministische Automatisierung hat Vorrang, wo Regeln ausreichen: Dokumentnummern abgleichen, Treffer filtern und Bearbeitungsstände zuordnen. KI unterstützt beim Lesen, bei Begriffsvorschlägen und beim Vergleich technischer Beschreibungen.</p><p className="mt-5">Für Ihren Pilot planen wir die Datenbankanbindung mit Suchprotokoll, Quellenstand und Änderungshistorie. KI-Entwurf und fachlich geprüfte Bewertung müssen unterscheidbar sein. Zugriffsrechte, Aufbewahrung und erlaubte Dienste werden vor dem Einsatz festgelegt.</p></div></div>
        <figure className="mt-10"><AgentHumanLoop variant="dark" animated={false} className="hidden sm:block w-full max-w-4xl mx-auto h-auto"/>
          <ol className="sm:hidden space-y-3 text-muted">{['Recherchefrage erfassen', 'Agent sammelt Quellen', 'KI erstellt einen belegten Entwurf', 'Fachperson prüft die technische Einordnung', 'Erkenntnisse mit Prüfstand ablegen'].map((step, i) => <li key={step} className="border-l border-line-strong pl-5 py-2"><span className="font-mono text-dim mr-3">0{i + 1}</span>{step}</li>)}</ol>
          <figcaption className={s.note}>Zielablauf mit menschlicher Prüfung. Die technische Einordnung in dieser Darstellung ist keine rechtliche Nutzungsfreigabe.</figcaption>
        </figure>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Stand bei AImation</p><h2>Ein Prototyp für die Vorrecherche.</h2><p>Der interne Ansatz nutzt Perplexity und Claude zur Rechercheunterstützung und Aufbereitung. Der öffentliche Screencast steht noch aus. Welche Datenquellen automatisiert angebunden werden, wird für Ihren Pilot geprüft und umgesetzt.</p><p className="mt-5">Ein wiederkehrender Abgleich veröffentlichter Dokumente ist als Erweiterung denkbar. Er braucht ein gepflegtes Suchprofil und jemanden, der neue Treffer bewertet.</p></div>
        <div className="max-w-lg"><DemoTile previewSrc="/images/editorial/patent-research.svg" title="Patentrecherche: vom Merkmal zur Fundstelle" badge="Screencast folgt" placeholderNote="Prinzipdarstellung des internen Recherche-Ansatzes. Datenquellen, Schnittstellen und Berichtsumfang werden für Ihren Pilot abgestimmt."/></div>
      </section>

      <section className={s.section} id="vergleichsplan">
        <div className={s.split}><div><p className={s.eyebrow}>Vergleichsplan / noch keine Messergebnisse</p><h2>Prüfaufwand gehört zur Recherchezeit.</h2></div><p>Wir vergleichen dieselbe technische Frage im bisherigen Ablauf und im Pilot. Bekannte relevante Dokumente dienen als Prüfbeispiele. So wird sichtbar, ob der Ansatz Arbeit spart oder nur von der Suche in die Nachkontrolle verlagert.</p></div>
        <div className="flex flex-col sm:flex-row items-start gap-6 mt-8"><QktTriangle variant="dark" className="w-16 h-16 shrink-0"/><dl className="flex-1 grid md:grid-cols-3 gap-8">{[
          ['Qualität', 'Werden bekannte relevante Dokumente gefunden? Stimmen die zitierten Textstellen? Welche Treffer sind unpassend?'],
          ['Kosten', 'Was kosten Datenzugang, Einrichtung, Modellnutzung und fachliche Nachprüfung je Recherche?'],
          ['Timing', 'Wie lange dauert es bis zur geprüften Trefferauswahl, einschließlich Suchvorbereitung und Korrekturen?'],
        ].map(([title, text]) => <div key={title}><dt className="font-heading text-xl mb-3">{title}</dt><dd className="text-muted leading-relaxed">{text}</dd></div>)}</dl></div>
      </section>

      <section className={s.section + ' ' + s.split} id="grenzen">
        <div><p className={s.eyebrow}>Die Grenze des Angebots</p><h2>Vorrecherche ist keine Nutzungsfreigabe.</h2></div>
        <div><p>Eine KI-Trefferliste beantwortet nicht, ob Sie eine Lösung rechtlich nutzen dürfen. Eine Freedom-to-operate-Prüfung berücksichtigt unter anderem Patentansprüche, relevante Länder und den Rechtsstand. Diese Prüfung wird hier nicht angeboten oder ersetzt.</p><p className="mt-5">Auch eine Suche ohne Treffer belegt keine Freiheit von Schutzrechten. Nicht veröffentlichte Anmeldungen sind in öffentlichen Quellen noch nicht sichtbar. Eine vollständige Prior-Art-Recherche kann zudem Quellen außerhalb von Patentdatenbanken erfordern.</p><p className={s.note}>Zur Einordnung: <a className="engineering-text-link" href="https://www.epo.org/en/searching-for-patents/helpful-resources/patent-knowledge-news/epos-global-patent-index-fit-your-fto" target="_blank" rel="noopener noreferrer">EPA zur FTO-Recherche ↗</a> und <a className="engineering-text-link" href="https://www.wipo.int/en/web/patents/faq_patents" target="_blank" rel="noopener noreferrer">WIPO zu Patenten und Veröffentlichung ↗</a>.</p></div>
      </section>
    </div>
  </TopicPage>;
}
