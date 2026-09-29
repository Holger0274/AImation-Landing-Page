import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import AgentHumanLoop from '@/components/diagrams/AgentHumanLoop';
import QktTriangle from '@/components/diagrams/QktTriangle';
import TopicPage, { TopicSteps, topicStyles as s } from '@/components/pages/TopicPage';
import { pageMetadata } from '@/lib/seo/metadata';

const PATH = '/use-cases/meeting-transkript-analyse';
export const dynamic = 'force-static';
export const metadata: Metadata = pageMetadata(PATH, 'de', 'Meeting-Protokolle mit KI auswerten | AImation', 'Besprechungen mit KI in Entscheidungen, Aufgaben und offene Punkte strukturieren. Mit Zeitbezug, menschlicher Freigabe und nachvollziehbarer Historie.');

const faqs = [
  { question: 'Müssen wir jedes Meeting aufzeichnen?', answer: 'Nein. Der Ablauf kann auch mit vorhandenen Transkripten oder freigegebenen Notizen starten. Wenn Audio oder Video verarbeitet wird, müssen Aufnahme, Information der Beteiligten, erlaubter Zweck, Zugriff und Aufbewahrung vorab in Ihrem Unternehmen geklärt sein.' },
  { question: 'Erkennt die KI Entscheidungen und Verantwortliche zuverlässig?', answer: 'Sie erstellt Vorschläge. Unklare Formulierungen, Sprecherwechsel und nur angedeutete Zusagen können zu Fehlern führen. Deshalb bleiben Zeitstelle, Originalaussage und Unsicherheit sichtbar. Eine verantwortliche Person bestätigt Aufgaben, Termine und Entscheidungen.' },
  { question: 'Können Aufgaben direkt nach Teams, Jira oder Planner übertragen werden?', answer: 'Das kann Teil eines Piloten sein, ist aber keine pauschal fertige Funktion. Schnittstelle, Rechte, Pflichtfelder und Freigabeschritt werden je Zielsystem geprüft. Im sicheren Start werden bestätigte Aufgaben erst nach menschlicher Freigabe übertragen.' },
];

export default async function MeetingTranskriptPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === 'en') return <GermanOnlyNotice namespace="enUseCaseNotice" href={PATH} />;

  return <TopicPage locale="de" path={PATH} label="Meeting-Protokolle mit KI"
    title="Entscheidungen festhalten." accent="Aufgaben mit Kontext übergeben."
    intro="Nach einer technischen Besprechung erinnern sich drei Personen an drei verschiedene Ergebnisse. Wir strukturieren freigegebene Transkripte mit KI in Entscheidungen, Aufgaben und offene Punkte. Zeitstelle und Originalaussage bleiben sichtbar, bevor jemand das Ergebnis freigibt."
    parent={{ href: '/use-cases', label: 'Use Cases' }}
    facts={['Bei AImation im Aufbau', 'Mensch bestätigt Aufgaben und Entscheidungen', 'Zielsysteme im Pilot']}
    visual={<figure className={s.preview}><Image src="/images/editorial/meeting-transcript.svg" alt="Prinzipdarstellung: Aus einem Gespräch entstehen Entscheidung, Aufgabe mit Verantwortlichem und offene Frage." width={960} height={540} sizes="(max-width: 900px) 94vw, 46vw" priority/><figcaption className="text-sm text-muted leading-relaxed">Strukturierter Besprechungsstand mit Rückbezug auf das Gespräch. Keine Produktoberfläche und kein Kundenfall.</figcaption></figure>}
    faqs={faqs} cta="Ihren Besprechungsprozess besprechen"
    closing={{ title: 'Starten wir mit einem freigegebenen Transkript.', description: 'Im kostenlosen Erstgespräch betrachten wir eine wiederkehrende Besprechung, die gewünschte Struktur und den Freigabeweg. Für den Einstieg reichen anonymisierte Ausschnitte oder ein fiktives Beispiel.' }}
    related={[{ href: '/use-cases/projektsteuerung-entwicklung', label: 'Projektengpässe früher erkennen' }, { href: '/use-cases/email-klassifizierung', label: 'Technische Anfragen vorbereiten' }, { href: '/schulungen/microsoft-365-copilot', label: 'Microsoft 365 Copilot Schulung' }]}>
    <div className="engineering-wrap">
      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Nach dem Jour fixe</p><h2>Die Entscheidung fiel im Gespräch. Im Protokoll fehlt der Zusammenhang.</h2></div>
        <div><p>„Prüfung wiederholen“ ist noch keine belastbare Aufgabe. Welche Abweichung war gemeint? Wer übernimmt den Versuch? Bis wann, mit welchem Prüfling und welcher Entscheidung danach?</p><p className="mt-5">Eine KI kann diese Punkte aus dem Gespräch herausarbeiten. Sie darf aus einer vagen Diskussion aber keine verbindliche Zusage erfinden.</p></div>
      </section>

      <section className={s.section} id="einblick" aria-labelledby="meeting-example-title">
        <div className={s.split}><div><p className={s.eyebrow}>Prinzipdarstellung / kein Kundenfall</p><h2 id="meeting-example-title">Aus dem Gespräch wird ein prüfbarer Besprechungsstand.</h2></div><p>In einem Projekt-Review wird ein Versuch verschoben, eine technische Entscheidung vertagt und eine neue Aufgabe vergeben. Der Entwurf trennt diese drei Aussagen. Jede erhält die passende Zeitstelle und bleibt bis zur Freigabe als Vorschlag gekennzeichnet.</p></div>
        <div className={s.plate + ' mt-8'}>
          <div className={s.plateRows}>{[
            ['Entscheidung', 'Freigabe wird bis zum Ergebnis des Wiederholungsversuchs zurückgestellt. Quelle: Gesprächsausschnitt 18:42.'],
            ['Aufgabe', 'Versuchsplanung ergänzen. Verantwortliche Person und Termin müssen im Review bestätigt werden.'],
            ['Offene Frage', 'Welcher Prüflingsstand gilt für den Wiederholungsversuch? Noch keine Antwort im Transkript.'],
            ['Freigabestatus', 'Entwurf der KI. Fachliche Bestätigung steht aus.'],
          ].map(([title, text], i) => <div key={title}><span>0{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Der Ablauf für Ihren Pilot</p><h2>Erst freigeben, was verarbeitet werden darf.</h2><p>Der technische Ablauf beginnt nach der organisatorischen Klärung. Meetingtyp, Beteiligte, Quellen und Aufbewahrung müssen zum gewählten Einsatz passen.</p></div>
        <TopicSteps steps={[
          ['Besprechung und Freigabe abgrenzen', 'Meetingtyp, Zweck, Beteiligte und erlaubte Eingangsform festlegen. Aufnahme und Verarbeitung erst nach geklärter Freigabe; alternativ mit vorhandenem Transkript starten.'],
          ['Transkript nachvollziehbar erfassen', 'Sprecher, Zeitstellen und Abschnitte nach festen Regeln übernehmen. Unverständliche Passagen und fehlende Zuordnung sichtbar markieren.'],
          ['KI erstellt den Entwurf', 'Entscheidungen, Aufgaben, offene Fragen und Begründungen vorschlagen. Jede Aussage mit Gesprächsstelle verbinden und Unsicherheit kennzeichnen.'],
          ['Prüfen, freigeben und übergeben', 'Verantwortliche Person korrigiert Inhalt, Zuständigkeit und Termin. Erst der bestätigte Stand wird an Projektablage oder Aufgabenwerkzeug übergeben.'],
        ]}/>
      </section>

      <section className={s.section} id="ki-integration">
        <div className={s.split}><div><p className={s.eyebrow}>KI, feste Regeln und Historie</p><h2>Die KI strukturiert Sprache. Freigaben folgen festen Regeln.</h2></div><div><p>Zeitstempel, Sprecherkennungen, Pflichtfelder, Status und Zielsystem werden deterministisch verarbeitet. KI hilft beim Zusammenfassen und beim Erkennen möglicher Entscheidungen, Aufgaben und offener Punkte.</p><p className="mt-5">Für Ihren Pilot planen wir Datenbankanbindung und Änderungshistorie. Transkriptstelle, KI-Vorschlag, Korrektur, Freigabe und spätere Statusänderung müssen getrennt nachvollziehbar sein. Zugriffsrechte gelten auch für Zusammenfassungen und Suchergebnisse.</p></div></div>
        <figure className="mt-10"><AgentHumanLoop variant="dark" animated={false} className="hidden sm:block w-full max-w-4xl mx-auto h-auto"/>
          <ol className="sm:hidden space-y-3 text-muted">{['Freigegebenes Transkript erfassen', 'KI sammelt Aussagen mit Zeitbezug', 'Besprechungsentwurf erstellen', 'Verantwortliche Person prüft und bestätigt', 'Geprüften Stand mit Historie ablegen'].map((step, i) => <li key={step} className="border-l border-line-strong pl-5 py-2"><span className="font-mono text-dim mr-3">0{i + 1}</span>{step}</li>)}</ol>
          <figcaption className={s.note}>Zielablauf. Die Ablage in einem Zielsystem erfolgt erst nach der vereinbarten menschlichen Freigabe.</figcaption>
        </figure>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Stand bei AImation</p><h2>Die Auswertung ist im Aufbau.</h2><p>Der Projektkatalog führt die Meeting-Analyse als in Arbeit. Vorhanden sind Ablauf, Kategorien und das Transkript-Dossier als Grundlage. Eine produktive Anbindung an Teams, Zoom, Jira, Planner oder Ihre Projektablage wird damit nicht behauptet.</p></div>
        <div className={s.plate}><p className={s.eyebrow}>Ausgabe des Entwurfs</p><h2 className="mt-3">Besprechungsstand mit Belegen</h2><dl className="grid gap-5 mt-7">{[
          ['Quelle', 'Transkript mit Sprecher und Zeitstelle'],
          ['Struktur', 'Entscheidung, Aufgabe, offene Frage'],
          ['Prüfung', 'Bestätigt, korrigiert oder weiterhin offen'],
          ['Historie', 'Änderung und Freigabe nachvollziehbar'],
        ].map(([term, value]) => <div key={term} className="border-t border-line pt-4"><dt className="font-mono text-xs text-dim uppercase tracking-wider">{term}</dt><dd className="text-muted mt-2">{value}</dd></div>)}</dl></div>
      </section>

      <section className={s.section} id="vergleichsplan">
        <div className={s.split}><div><p className={s.eyebrow}>Vergleichsplan / noch keine Messergebnisse</p><h2>Ein kurzes Protokoll darf keine falsche Entscheidung erzeugen.</h2></div><p>Wir vergleichen mehrere freigegebene Transkripte mit manuell geprüften Referenzprotokollen. Neben Zeit und Vollständigkeit zählen falsch zugeordnete Aufgaben, erfundene Termine und fehlende Gesprächsbelege.</p></div>
        <div className="flex flex-col sm:flex-row items-start gap-6 mt-8"><QktTriangle variant="dark" className="w-16 h-16 shrink-0"/><dl className="flex-1 grid md:grid-cols-3 gap-8">{[
          ['Qualität', 'Stimmen Entscheidung, Aufgabe und offene Frage? Sind Verantwortliche, Termine und Gesprächsstellen korrekt zugeordnet?'],
          ['Kosten', 'Welcher Aufwand entsteht für Transkription, Prüfung, Korrektur, Schnittstellen und Aufbewahrung? Welche Nacharbeit entfällt?'],
          ['Timing', 'Wie lange dauert es vom Meetingende bis zum fachlich bestätigten Besprechungsstand und zur Übergabe der Aufgaben?'],
        ].map(([title, text]) => <div key={title}><dt className="font-heading text-xl mb-3">{title}</dt><dd className="text-muted leading-relaxed">{text}</dd></div>)}</dl></div>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Für den ersten Test</p><h2>Drei Besprechungen zeigen die typischen Missverständnisse.</h2></div>
        <ul className={s.list}><li>Anonymisierte, freigegebene Transkripte eines wiederkehrenden Meetingtyps.</li><li>Bestehende Protokolle oder eine fachlich geprüfte Referenz für Entscheidungen, Aufgaben und offene Punkte.</li><li>Klare Regeln für Verantwortliche, Termine, Freigabe und den Umgang mit unklaren Aussagen.</li><li>Geklärter Zugriff, Aufbewahrung und ein Ziel für den bestätigten Besprechungsstand.</li></ul>
      </section>
    </div>
  </TopicPage>;
}
