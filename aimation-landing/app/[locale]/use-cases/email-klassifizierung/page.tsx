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

const PATH = '/use-cases/email-klassifizierung';
export const dynamic = 'force-static';
export const metadata: Metadata = pageMetadata(PATH, 'de', 'Technische Anfragen mit KI bearbeiten | AImation', 'Technische Kundenanfragen und Änderungsanträge vorsortieren, Kontext zusammenführen und Antwortentwürfe fachlich prüfen. Interner Prototyp für KI und Workflow-Automatisierung.');

const faqs = [
  { question: 'Sendet die KI Antworten automatisch an Kunden?', answer: 'Im beschriebenen Ablauf nicht. Die KI bereitet einen Entwurf mit Quellen und offenen Punkten vor. Eine fachlich verantwortliche Person prüft, ändert und versendet die Antwort. Spätere Automatisierungsschritte werden nur für klar abgegrenzte Fälle und mit vereinbarten Freigaberegeln eingerichtet.' },
  { question: 'Kann das System Outlook, Ticketsystem und PLM verbinden?', answer: 'Diese Anbindungen werden für Ihren Pilot einzeln geprüft. Voraussetzung sind verfügbare Schnittstellen, passende Rechte und ein klares Datenmodell. Der interne Prototyp belegt keine fertige Verbindung zu Ihren Systemen.' },
  { question: 'Lernt die KI automatisch aus jeder Korrektur?', answer: 'Korrekturen können als geprüfte Beispiele und Lessons Learned gespeichert werden. Daraus entsteht aber nicht automatisch ein verlässliches selbstlernendes System. Wir legen fest, welche Änderungen übernommen werden, wer sie freigibt und wie ältere Stände nachvollziehbar bleiben.' },
];

export default async function EmailKlassifizierungPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === 'en') return <GermanOnlyNotice namespace="enUseCaseNotice" href={PATH} />;

  return <TopicPage locale="de" path={PATH} label="Technische Anfragen mit KI"
    title="Anfragen richtig einordnen." accent="Antworten fundiert vorbereiten."
    intro="Eine technische Anfrage kommt mit Zeichnung, Änderungswunsch und einer knappen E-Mail. Wir verbinden Klassifizierung, feste Routing-Regeln und KI-gestützte Kontextsuche. Ihr zuständiger Ingenieur erhält einen vorbereiteten Vorgang und entscheidet selbst, was an den Kunden geht."
    parent={{ href: '/use-cases', label: 'Use Cases' }}
    facts={['Interner Workflow-Prototyp', 'Mensch prüft vor dem Versand', 'Systemanbindungen im Pilot']}
    visual={<figure className={s.preview}><div className="relative overflow-hidden rounded-md"><Image src="/images/editorial/requests.webp" alt="Illustration: Technische Anfragen mit Bauteilzeichnungen warten in einer Eingangsablage." width={1280} height={720} sizes="(max-width: 900px) 94vw, 46vw" priority/><ImageOriginLabel src="/images/editorial/requests.webp"/></div><figcaption className="text-sm text-muted leading-relaxed">Anfrage, Anhang und technischer Kontext gehören in einen Vorgang. Die Illustration zeigt das Prinzip.</figcaption></figure>}
    faqs={faqs} cta="Ihren Anfrageprozess besprechen"
    closing={{ title: 'Starten wir mit einer wiederkehrenden Anfrage.', description: 'Im kostenlosen Erstgespräch betrachten wir Eingangskanal, Kategorien, Quellsysteme und Freigabe. Ein anonymisiertes Beispiel genügt. Kundendaten und vertrauliche Zeichnungen müssen Sie dafür nicht hochladen.' }}
    related={[{ href: '/use-cases/knowledge-graph-management', label: 'Entwicklungswissen mit Quellen verbinden' }, { href: '/use-cases/projektsteuerung-entwicklung', label: 'Projektengpässe früher erkennen' }, { href: '/ki-automatisierung-mittelstand', label: 'KI-Automatisierung für Unternehmen' }]}>
    <div className="engineering-wrap">
      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Im technischen Posteingang</p><h2>Die E-Mail ist nur der Eingang. Der Vorgang beginnt dahinter.</h2></div>
        <div><p>Eine Kundenanfrage nennt ein Bauteil, hängt eine Zeichnung an und verweist auf einen alten Versuch. Für eine belastbare Antwort braucht das Team den passenden Projektstand, frühere Absprachen und eine fachliche Zuständigkeit.</p><p className="mt-5">Manuelles Weiterleiten löst diesen Zusammenhang nicht. Der bessere Prüfpunkt lautet: Kommt ein vollständiger, nachvollziehbarer Vorgang bei der richtigen Person an?</p></div>
      </section>

      <section className={s.section} id="einblick" aria-labelledby="request-example-title">
        <div className={s.split}><div><p className={s.eyebrow}>Prinzipdarstellung / kein Kundenfall</p><h2 id="request-example-title">Aus Eingang und Anhang wird ein prüfbarer Entwurf.</h2></div><p>Die Anfrage wird zunächst als Vorgang erfasst. Regeln ordnen Kunde, Produkt und bekannte Kategorien zu. KI kann Text und Anhang zusammenfassen, passende Quellen vorschlagen und einen Entwurf erstellen. Der Ingenieur prüft Aussage, Stand und Empfänger.</p></div>
        <figure className={s.plate + ' mt-8'}><Image src="/images/editorial/request-detail.svg" alt="Eine technische Anfrage wird erfasst, mit Kontext vorbereitet und vor der Antwort von einem Menschen freigegeben." width={960} height={540} sizes="(max-width: 900px) 94vw, 1100px" className="hidden sm:block w-full h-auto"/>
          <ol className="sm:hidden space-y-6">{[
            ['Eingang', 'E-Mail, Anhang, Absender und Zeitstempel als Vorgang erfassen.'],
            ['Vorbereitung', 'Kategorie, Produktbezug, Quellen und offene Punkte für den Antwortentwurf zusammenstellen.'],
            ['Freigabe', 'Fachperson prüft Inhalt, Empfänger und freizugebende Unterlagen vor dem Versand.'],
          ].map(([title, text], i) => <li key={title} className="border-l border-line-strong pl-5"><span className="text-sm text-dim font-mono">0{i + 1}</span><h3 className="mt-2">{title}</h3><p>{text}</p></li>)}</ol>
          <figcaption className="text-sm text-muted leading-relaxed mt-4">Beispiel zur Erläuterung. Keine echte Kundenanfrage und kein Screenshot einer Produktivlösung.</figcaption>
        </figure>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Der Ablauf für Ihren Pilot</p><h2>Zuerst Zuständigkeit. Dann Kontext und Entwurf.</h2><p>Wir beginnen mit wenigen Anfragearten und eindeutigen Freigaberegeln. Sonderfälle dürfen sichtbar liegen bleiben, statt unbemerkt falsch bearbeitet zu werden.</p></div>
        <TopicSteps steps={[
          ['Eingang und Kategorien abgrenzen', 'Festlegen, welche Postfächer und Anfragearten dazugehören. Pflichtangaben, Anhänge, Ausschlussfälle und verantwortliche Rollen dokumentieren.'],
          ['Regeln und KI trennen', 'Kunde, Produktnummer, Sperrlisten und bekannte Absender nach festen Regeln prüfen. KI klassifiziert freie Texte und markiert Unsicherheit oder fehlende Angaben.'],
          ['Kontext belegen', 'Freigegebene Quellen aus CRM, Ticketsystem oder Wissensbasis zum Vorgang zuordnen. Jeder verwendete Stand und jede Fundstelle bleiben sichtbar.'],
          ['Prüfen und nachführen', 'Fachperson korrigiert Kategorie und Antwortentwurf. Versand, Korrekturgrund und freigegebener Stand fließen nachvollziehbar in die Historie ein.'],
        ]}/>
      </section>

      <section className={s.section} id="ki-integration">
        <div className={s.split}><div><p className={s.eyebrow}>KI, feste Regeln und Historie</p><h2>Routing folgt Regeln. KI hilft bei Sprache und Kontext.</h2></div><div><p>Deterministische Automatisierung übernimmt, was eindeutig prüfbar ist: Absenderlisten, Produktnummern, Pflichtfelder, Fristen und die Übergabe an definierte Teams. KI unterstützt bei freien Formulierungen, Zusammenfassungen und Antwortentwürfen.</p><p className="mt-5">Für Ihren Pilot planen wir Datenbankanbindung, Statusmodell und Änderungshistorie. Rohmail, Anhänge, KI-Entwurf, menschliche Korrektur und versendete Antwort brauchen unterscheidbare Stände. Rechte und Aufbewahrung werden je Quelle festgelegt.</p></div></div>
        <figure className="mt-10"><AgentHumanLoop variant="dark" animated={false} className="hidden sm:block w-full max-w-4xl mx-auto h-auto"/>
          <ol className="sm:hidden space-y-3 text-muted">{['Anfrage und Anhang erfassen', 'Regeln und KI sammeln Kontext', 'Antwortentwurf mit Quellen vorbereiten', 'Ingenieur prüft und gibt frei', 'Geprüften Stand als Lessons Learned ablegen'].map((step, i) => <li key={step} className="border-l border-line-strong pl-5 py-2"><span className="font-mono text-dim mr-3">0{i + 1}</span>{step}</li>)}</ol>
          <figcaption className={s.note}>Zielablauf mit menschlicher Freigabe. Automatischer Versand ist nicht Bestandteil des gezeigten Prototyps.</figcaption>
        </figure>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Stand bei AImation</p><h2>Intern erprobt. Ihre Systeme kommen im Pilot dazu.</h2><p>Der interne Prototyp erprobt Klassifizierung, Kontextaufbereitung und Entwurf. Der öffentliche Screencast steht noch aus. Outlook, Exchange, CRM, Ticketsystem oder PLM sind keine pauschal fertigen Anschlüsse. Verfügbarkeit, Rechte und Datenfluss werden für Ihre Umgebung geprüft.</p></div>
        <div className="max-w-lg"><DemoTile previewSrc="/images/editorial/email-classification.svg" title="Technische Anfrage: vom Eingang zum geprüften Entwurf" badge="Screencast folgt" placeholderNote="Prinzipdarstellung des internen Workflows. Kategorien, Quellsysteme und Freigabeschritte werden für Ihren Pilot festgelegt. Ihre Unternehmenssysteme sind noch nicht angebunden."/></div>
      </section>

      <section className={s.section} id="vergleichsplan">
        <div className={s.split}><div><p className={s.eyebrow}>Vergleichsplan / noch keine Messergebnisse</p><h2>Eine schnelle Fehlleitung bleibt eine Fehlleitung.</h2></div><p>Wir testen vorhandene, anonymisierte Anfragen mit bekannter Zuständigkeit und fachlich geprüfter Antwort. Gemessen wird der gesamte Weg bis zur Freigabe. Unsichere Fälle, Nacharbeit und falsch zugeordnete Quellen zählen mit.</p></div>
        <div className="flex flex-col sm:flex-row items-start gap-6 mt-8"><QktTriangle variant="dark" className="w-16 h-16 shrink-0"/><dl className="flex-1 grid md:grid-cols-3 gap-8">{[
          ['Qualität', 'Stimmen Kategorie, Zuständigkeit und verwendete Quellen? Werden fehlende Angaben und Unsicherheit sichtbar?'],
          ['Kosten', 'Wie viel Aufwand entsteht für Einrichtung, Quellenpflege, Prüfung, Korrektur und Betrieb? Welche manuelle Zuordnung entfällt?'],
          ['Timing', 'Wie lange dauert es vom Eingang bis zum geprüften Entwurf und anschließend bis zur versandfähigen Antwort?'],
        ].map(([title, text]) => <div key={title}><dt className="font-heading text-xl mb-3">{title}</dt><dd className="text-muted leading-relaxed">{text}</dd></div>)}</dl></div>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Für den ersten Test</p><h2>Zwanzig typische Anfragen zeigen mehr als eine allgemeine Demo.</h2></div>
        <ul className={s.list}><li>Anonymisierte Beispiele aus zwei bis vier wiederkehrenden Anfragearten, einschließlich schwieriger Grenzfälle.</li><li>Bekannte Zuständigkeiten, erlaubte Antwortquellen und die bisherige Bearbeitung je Beispiel.</li><li>Eine fachlich verantwortliche Person, die Kategorie, Quellen und Entwurf beurteilen kann.</li><li>Geklärte Zugriffsrechte, Aufbewahrung und Regeln für Anhänge, personenbezogene Daten und vertrauliche Inhalte.</li></ul>
      </section>
    </div>
  </TopicPage>;
}
