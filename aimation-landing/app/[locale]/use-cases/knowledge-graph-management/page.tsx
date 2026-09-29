import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import ImageOriginLabel from '@/components/ui/ImageOriginLabel';
import DemoTile from '@/components/ui/DemoTile';
import WissenVorherNachher from '@/components/diagrams/WissenVorherNachher';
import QktTriangle from '@/components/diagrams/QktTriangle';
import TopicPage, { TopicSteps, topicStyles as s } from '@/components/pages/TopicPage';
import { pageMetadata } from '@/lib/seo/metadata';

const PATH = '/use-cases/knowledge-graph-management';
export const dynamic = 'force-static';
export const metadata: Metadata = pageMetadata(PATH, 'de', 'Entwicklungswissen mit KI finden | Knowledge Graph | AImation', 'Frühere Entwicklungsentscheidungen mit Quellen nachvollziehen: KI-gestützte Wissenssuche, verknüpfte Prüfberichte und Protokolle. Interner Prototyp und Weg zum Pilot.');

const faqs = [
  { question: 'Brauchen wir dafür immer einen Knowledge Graph?', answer: 'Nein. Wir prüfen zuerst, welche Fragen Ihr Team beantworten muss. Eine Suche mit Quellenbezug kann ausreichen. Ein Knowledge Graph kommt infrage, wenn Beziehungen zwischen Bauteilen, Prüfungen, Änderungen und Entscheidungen selbst wichtig sind.' },
  { question: 'Kann die KI fehlendes Erfahrungswissen rekonstruieren?', answer: 'Nicht verlässlich. Wissen, das nur in Köpfen steckt, muss zuerst erhoben werden, etwa in fachlich geprüften Interviews oder Übergaben. Die KI darf Lücken nicht durch plausible Behauptungen schließen. Auch vorhandene Quellen können unvollständig oder widersprüchlich sein.' },
  { question: 'Sind SharePoint und unsere Zugriffsrechte bereits angebunden?', answer: 'Die beschriebene Erprobung arbeitet mit eigenen Notizen und Projektunterlagen bei AImation. Anbindungen an Ihre Systeme, Rechteprüfung und Aktualisierung werden für Ihren Pilot gesondert umgesetzt und getestet. Vertrauliche Inhalte dürfen weder als Treffer noch über eine KI-Antwort an unberechtigte Personen gelangen.' },
];

export default async function KnowledgeGraphPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === 'en') return <GermanOnlyNotice namespace="enUseCaseNotice" href={PATH} />;

  return <TopicPage locale="de" path={PATH} label="KI-Wissensmanagement für die Entwicklung"
    title="Entwicklungswissen finden." accent="Entscheidungen nachvollziehen."
    intro="Eine Bauteiländerung ist dokumentiert, ihre Begründung schwer auffindbar. Wir verbinden Entwicklungsunterlagen mit KI-gestützter Suche und nachvollziehbaren Quellen. Ihr Team soll frühere Lösungen und ihre Begründung wiederfinden, bevor es dieselbe Frage erneut bearbeitet."
    parent={{ href: '/use-cases', label: 'Use Cases' }}
    facts={['Interner Prototyp mit eigenen Unterlagen', 'KI-Suche mit Quellenbezug', 'Unternehmensanbindung im Pilot']}
    visual={<figure className={s.preview}><div className="relative overflow-hidden rounded-md"><Image src="/images/editorial/engineering-knowledge.webp" alt="Illustration: Ein Gehäuse ist mit Zeichnung, Prüfbericht und Entwicklungsnotizen verknüpft." width={1280} height={720} sizes="(max-width: 900px) 94vw, 46vw" priority/><ImageOriginLabel src="/images/editorial/engineering-knowledge.webp" /></div><figcaption className="text-sm text-muted leading-relaxed">Bauteil, Prüfung und Entscheidung gehören zusammen. Die Darstellung veranschaulicht das Prinzip.</figcaption></figure>}
    faqs={faqs} cta="Einen Wissensfall besprechen"
    closing={{ title: 'Starten wir mit einer Frage aus Ihrem Projekt.', description: 'Wählen Sie eine technische Entscheidung, deren Begründung heute schwer auffindbar ist. Im kostenlosen Erstgespräch klären wir Quellen, Zugriffsrechte und einen abgegrenzten ersten Test. Vertrauliche Unterlagen müssen Sie dafür noch nicht hochladen.' }}
    related={[{ href: '/use-cases/skillmatrix-entwicklung', label: 'Wissensrisiken im Team erkennen' }, { href: '/use-cases/excel-powerpoint-berichte', label: 'Excel durch Dashboards und Apps ablösen' }, { href: '/ki-schulungen-mittelstand', label: 'KI-Schulung für Ihr Team' }]}>
    <div className="engineering-wrap">
      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Im Entwicklungsalltag</p><h2>Der Prüfbericht ist da. Die Begründung fehlt.</h2></div>
        <div><p>Eine Zeichnung liegt im Projektordner, das Versuchsprotokoll in SharePoint und die Begründung einer Änderung in einer Besprechungsnotiz. Das Team findet einzelne Dateien. Welche Fassung zur damaligen Entscheidung gehörte, muss es erst zusammensuchen.</p><p className="mt-5">Bei Übergaben und Einarbeitung fällt das besonders auf. Erfahrungswissen, das noch nicht dokumentiert ist, muss zuerst mit den Fachleuten erhoben werden. Eine KI kann es nicht aus leeren Ordnern holen.</p></div>
      </section>

      <section className={s.section} id="einblick" aria-labelledby="knowledge-example-title">
        <div className={s.split}><div><p className={s.eyebrow}>Prinzipdarstellung / kein Kundenfall</p><h2 id="knowledge-example-title">Von der Frage zur belegten Entscheidung.</h2></div><p>Eine Frage zur Bauteiländerung führt zu den zugehörigen Prüfberichten und Freigabeprotokollen. Die KI kann eine Antwort entwerfen. Sie muss dabei die verwendeten Quellen und ihren Stand nennen. Fehlt ein Beleg, bleibt die Aussage offen.</p></div>
        <figure className={s.plate + ' mt-8'}><Image src="/images/editorial/knowledge-detail.svg" alt="Eine Frage zur Bauteiländerung wird mit Änderungsgrund, Prüfbericht und Freigabeprotokoll verbunden. Illustratives Beispiel." width={960} height={540} sizes="(max-width: 900px) 94vw, 1100px" className="hidden sm:block w-full h-auto"/><ol className="sm:hidden space-y-6">{[
          ['Die Frage', 'Warum wurde das Bauteil geändert?'],
          ['Der Prüfbericht', 'Welche Beobachtung hat die Änderung ausgelöst?'],
          ['Das Freigabeprotokoll', 'Welcher Stand wurde mit welcher Begründung freigegeben?'],
        ].map(([title, text], i) => <li key={title} className="border-l border-line-strong pl-5"><span className="text-sm text-dim font-mono">0{i + 1}</span><h3 className="mt-2">{title}</h3><p>{text}</p></li>)}</ol><figcaption className="text-sm text-muted leading-relaxed mt-4">Beispiel zur Erläuterung. Keine echte Projektentscheidung und kein Screenshot einer Kundenanwendung.</figcaption></figure>
      </section>

      <section className={s.section + ' ' + s.split}><div><p className={s.eyebrow}>So entsteht die Wissensbasis</p><h2>Quellen verbinden. Aussagen prüfbar halten.</h2></div><TopicSteps steps={[
        ['Quellen und Fragen abgrenzen', 'Mit einem Projekt, freigegebenen Unterlagen und typischen Fragen beginnen. Dokumentstände, fachliche Verantwortung und Zugriffsrechte klären.'],
        ['Beziehungen aufbauen', 'Bauteile, Anforderungen, Versuche und Entscheidungen über bekannte IDs und feste Regeln zuordnen. KI kann weitere Verbindungen vorschlagen; fachliche Prüfung ist nötig.'],
        ['Antwort mit Belegen prüfen', 'KI-Suche und Antwortentwurf an konkreten Fragen testen. Fundstellen, Versionsstand und widersprüchliche Angaben müssen sichtbar bleiben.'],
        ['Änderungen nachführen', 'Neue Dokumentstände, ersetzte Quellen und Freigaben nachvollziehbar pflegen. Für Datenbank, Synchronisation und Historie feste Zuständigkeiten vereinbaren.'],
      ]}/></section>

      <section className={s.section}>
        <div className={s.split}><div><p className={s.eyebrow}>Von getrennten Ablagen zum Zusammenhang</p><h2>Die Verbindung macht die Unterlagen nutzbar.</h2></div><p>Ein Knowledge Graph hält Beziehungen fest, etwa „Bauteil wurde geprüft in Versuch“ oder „Änderung wurde freigegeben in Protokoll“. Er lohnt sich, wenn Ihr Team solche Zusammenhänge regelmäßig braucht. Für einfachere Fragen kann eine Suche mit Quellenbezug genügen.</p></div>
        <figure className="mt-8"><WissenVorherNachher variant="dark" animated={false} className="w-full max-w-3xl mx-auto h-auto"/><figcaption className={s.note}>Zielbild möglicher Quellen, keine Liste bereits vorhandener Anbindungen. Welche Systeme tatsächlich angebunden werden, legen wir für Ihren Pilot fest.</figcaption></figure>
      </section>

      <section className={s.section + ' ' + s.split} id="ki-integration"><div><p className={s.eyebrow}>KI, feste Regeln und Historie</p><h2>Rechte werden geprüft. Antworten werden belegt.</h2></div><div><p>Bekannte Dokument-IDs, Versionen und Zugriffsrechte verarbeiten wir nach festen Regeln. Die KI unterstützt bei der inhaltlichen Suche, bei Vorschlägen für Beziehungen und bei Antwortentwürfen. Berechtigungen darf sie nicht selbst festlegen.</p><p className="mt-5">Für den Unternehmenseinsatz planen wir Datenbankanbindung, Dokumenthistorie und Aktualisierung gemeinsam. Eine neue Dokumentfassung darf nicht unbemerkt zur Grundlage einer alten Entscheidung werden. Die Rechteprüfung muss auch abgeleitete Antworten und verknüpfte Informationen erfassen.</p></div></section>

      <section className={s.section + ' ' + s.split}><div><p className={s.eyebrow}>Stand bei AImation</p><h2>Intern erprobt. Ihr Pilot wird gesondert aufgebaut.</h2><p>Der beschriebene Prototyp entstand aus der eigenen Wissensarbeit mit Obsidian, Claude Code und Projektunterlagen. Der öffentliche Screencast steht noch aus. Für Ihren Bestand werden Datenmodell, Suche, Schnittstellen und Betrieb abgestimmt.</p></div><div className="max-w-lg"><DemoTile previewSrc="/images/editorial/knowledge-graph.svg" title="Wissens-Graph: Antwort mit Quellenbezug" badge="Screencast folgt" placeholderNote="Prinzipdarstellung des internen Prototyps. Im Erstgespräch besprechen wir den Ablauf anhand eigener Projektfragen und Unterlagen. Ihre Unternehmensquellen sind noch nicht angebunden."/></div></section>

      <section className={s.section}><div className={s.split}><div><p className={s.eyebrow}>Vergleichsplan / noch keine Messergebnisse</p><h2>Eine gute Antwort hält der Quellenprüfung stand.</h2></div><p>Wir vergleichen dieselben Projektfragen mit der bisherigen Suche und dem Pilot. Fachleute legen die erwarteten Belege fest. Suchzeit allein reicht als Erfolgskriterium nicht: Falsche Antworten, fehlende Quellen und Datenpflege zählen mit.</p></div><div className="flex flex-col sm:flex-row items-start gap-6 mt-8"><QktTriangle variant="dark" className="w-16 h-16 shrink-0"/><dl className="flex-1 grid md:grid-cols-3 gap-8">{[
        ['Qualität', 'Sind Antwort, Dokumentfassung und Belege fachlich richtig? Werden Widersprüche und Wissenslücken benannt?'],
        ['Kosten', 'Welcher Aufwand entsteht für Aufbereitung, Pflege, Rechteprüfung und Betrieb? Welche Doppelarbeit entfällt?'],
        ['Timing', 'Wie lange dauert es bis zur fachlich geprüften Antwort, einschließlich Rückfragen und Kontrolle?'],
      ].map(([title, text]) => <div key={title}><dt className="font-heading text-xl mb-3">{title}</dt><dd className="text-muted leading-relaxed">{text}</dd></div>)}</dl></div></section>

      <section className={s.section + ' ' + s.split}><div><p className={s.eyebrow}>Für den ersten Test</p><h2>Ein Projekt und nachvollziehbare Quellen reichen als Anfang.</h2></div><ul className={s.list}><li>Typische Fragen zu einer Produktfamilie, einem Entwicklungsprojekt oder einer Übergabe.</li><li>Freigegebene Prüfberichte, Änderungsstände und Protokolle mit verständlichen Bezeichnungen.</li><li>Eine fachlich verantwortliche Person, die Antworten und Belege beurteilen kann.</li><li>Geklärte Zugriffsrechte, erlaubte Datenverarbeitung und Zuständigkeiten für neue Dokumentstände.</li></ul></section>
    </div>
  </TopicPage>;
}
