import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import QktTriangle from '@/components/diagrams/QktTriangle';
import TopicPage, { TopicSteps, topicStyles as s } from '@/components/pages/TopicPage';
import { pageMetadata } from '@/lib/seo/metadata';

const PATH = '/use-cases/technologie-scouting';
export const dynamic = 'force-static';
export const metadata: Metadata = pageMetadata(PATH, 'de', 'Technologie-Scouting mit KI für die Entwicklung | AImation', 'Fachpublikationen und Technologiesignale mit KI sichten, den Bezug zum eigenen Produkt prüfen und Entscheidungen mit Quellen dokumentieren.');

const faqs = [
  { question: 'Welche Quellen kann das Technologie-Scouting beobachten?', answer: 'Das legen wir für Ihren Pilot fest. Möglich sind freigegebene Fachpublikationen, öffentliche Forschungsseiten, Anbieterinformationen, Newsletter, RSS-Feeds und lizenzierte Datenbanken. Zugriff, Nutzungsbedingungen und Aktualisierungsrhythmus müssen je Quelle geprüft werden.' },
  { question: 'Bewertet die KI, welche Technologie wir einsetzen sollen?', answer: 'Nein. Die KI kann Beiträge ordnen, zusammenfassen und mögliche Bezüge zu Ihrem Suchprofil markieren. Technischer Reifegrad, Nutzen, Risiken und die Entscheidung für Versuche oder Investitionen bleiben bei Ihren Fachleuten.' },
  { question: 'Wie verhindern wir eine weitere Informationsflut?', answer: 'Wir starten mit wenigen Suchfeldern und klaren Ausschlussregeln. Doppelte Meldungen werden zusammengeführt, geringe Relevanz bleibt im Archiv und nur fachlich geprüfte Signale kommen in die regelmäßige Übersicht. Schwellenwerte und Kategorien werden anhand echter Treffer nachgeschärft.' },
];

export default async function TechnologieScoutingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === 'en') return <GermanOnlyNotice namespace="enUseCaseNotice" href={PATH} />;

  return <TopicPage locale="de" path={PATH} label="Technologie-Scouting mit KI"
    title="Neue Technologien erkennen." accent="Produktbezug belegen."
    intro="Fachartikel, Forschungsprojekte und Anbieterinformationen liefern viele Signale. Wir bündeln definierte Quellen, lassen KI Inhalte vorstrukturieren und halten fest, warum ein Fundstück für Ihr Produkt relevant sein könnte. Die technische Bewertung bleibt bei Ihrem Team."
    parent={{ href: '/use-cases', label: 'Use Cases' }}
    facts={['Interner Scouting-Prototyp', 'KI-Auswertung mit Quellenbezug', 'Suchfelder und Quellen im Pilot']}
    visual={<figure className={s.preview}><Image src="/images/editorial/tech-scouting.svg" alt="Prinzipdarstellung eines Technologie-Radars, das Fachpublikationen und neue Technologien mit dem eigenen Produkt verbindet." width={960} height={540} sizes="(max-width: 900px) 94vw, 46vw" priority/><figcaption className="text-sm text-muted leading-relaxed">Das Radar zeigt den Ablauf vom Fundstück zum möglichen Produktbezug. Keine Produktoberfläche und kein Kundenfall.</figcaption></figure>}
    faqs={faqs} cta="Ihr Suchfeld besprechen"
    closing={{ title: 'Starten wir mit einer technischen Suchfrage.', description: 'Im kostenlosen Erstgespräch grenzen wir Suchfeld, Quellen und Prüfkriterien ab. Ein Beispiel aus Ihrer öffentlichen Produktwelt genügt. Interne Roadmaps oder vertrauliche Entwicklungsdaten müssen Sie dafür nicht hochladen.' }}
    related={[{ href: '/use-cases/patentrecherche-ki', label: 'Patente gezielt sichten' }, { href: '/use-cases/knowledge-graph-management', label: 'Entwicklungswissen mit Quellen verbinden' }, { href: '/ki-produktentwicklung', label: 'KI in der technischen Produktentwicklung' }]}>
    <div className="engineering-wrap">
      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Zwischen Recherche und Entscheidung</p><h2>Ein interessanter Artikel ist noch kein Technologiesignal.</h2></div>
        <div><p>Eine neue Fügetechnik klingt relevant. Für Ihre Produktfamilie zählen aber andere Fragen: Welche Werkstoffe wurden untersucht? Welcher Reifegrad ist erkennbar? Passt das Verfahren zu Ihren Stückzahlen und Randbedingungen?</p><p className="mt-5">Das Scouting soll diese Fragen vorbereiten. Eine wöchentliche Linkliste ohne Produktbezug verschiebt die Arbeit nur vom Suchen zum Lesen.</p></div>
      </section>

      <section className={s.section} id="einblick" aria-labelledby="scouting-example-title">
        <div className={s.split}><div><p className={s.eyebrow}>Prinzipdarstellung / kein Kundenfall</p><h2 id="scouting-example-title">Vom Fundstück zur technischen Prüffrage.</h2></div><p>Ein Fachaufsatz beschreibt ein neues Fügeverfahren für Mischbauweisen. Das System ordnet Quelle, Veröffentlichungsdatum und genannte Werkstoffe zu. Die KI schlägt einen möglichen Bezug zu einer Produktanforderung vor. Ein Werkstoff- oder Fertigungsexperte bewertet, ob daraus ein Versuch entstehen sollte.</p></div>
        <div className={s.plate + ' mt-8'}>
          <div className={s.plateRows}>{[
            ['Fundstück', 'Fachaufsatz mit Veröffentlichungsdatum, Herausgeber und direkter Quelle.'],
            ['KI-Vorschlag', 'Möglicher Bezug zu Werkstoffpaarung, Temperaturbereich und bestehender Produktanforderung.'],
            ['Fachliche Prüfung', 'Reifegrad, Übertragbarkeit, offene Nachweise und notwendiger Versuch werden ergänzt.'],
            ['Entscheidung', 'Beobachten, vertiefen, Versuch planen oder mit Begründung zurückstellen.'],
          ].map(([title, text], i) => <div key={title}><span>0{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Der Ablauf für Ihren Pilot</p><h2>Ein gutes Radar beginnt mit einer engen Frage.</h2><p>Wir starten nicht mit dem gesamten Technologiemarkt. Ein Werkstoff, ein Fertigungsverfahren oder eine Produktfunktion reicht für den ersten Test.</p></div>
        <TopicSteps steps={[
          ['Suchfeld und Quellen festlegen', 'Technische Begriffe, Synonyme, Sprachen, Ausschlusskriterien und erlaubte Quellen vereinbaren. Fachverantwortung und Rhythmus festhalten.'],
          ['Fundstücke erfassen', 'Abrufdatum, Quelle, Autor oder Organisation und Originaltext speichern. Dubletten, tote Links und bereits bekannte Beiträge nach festen Regeln behandeln.'],
          ['KI strukturiert vor', 'Inhalte zusammenfassen, Technologien und mögliche Produktbezüge markieren. Jede Aussage verweist auf die ursprüngliche Fundstelle; Unsicherheit bleibt sichtbar.'],
          ['Fachlich bewerten', 'Experten ergänzen Reifegrad, Relevanz und nächste Schritte. Entscheidungen und spätere Neubewertungen werden mit Begründung dokumentiert.'],
        ]}/>
      </section>

      <section className={s.section + ' ' + s.split} id="ki-integration">
        <div><p className={s.eyebrow}>KI, feste Filter und Historie</p><h2>Quellen werden regelbasiert erfasst. Relevanz braucht Fachwissen.</h2></div>
        <div><p>Feste Regeln steuern zugelassene Domains, Suchbegriffe, Veröffentlichungsdatum, Dubletten und Zuständigkeit. KI hilft bei sprachlichen Varianten, Zusammenfassungen und ersten Bezügen zwischen Fundstück und Produktanforderung.</p><p className="mt-5">Für Ihren Pilot planen wir eine Datenbank mit Suchprofil, Quellenstand, KI-Vorschlag, fachlicher Bewertung und Änderungshistorie. Damit bleibt erkennbar, warum ein Signal früher zurückgestellt und später neu bewertet wurde.</p></div>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Stand bei AImation</p><h2>Ein interner Prototyp für Quellen, Filter und Zusammenfassungen.</h2><p>Die vorhandene Erprobung arbeitet mit RSS, Claude und Notion. Sie zeigt den grundsätzlichen Ablauf vom Eingang bis zur strukturierten Übersicht. Welche Datenbanken, Fachmedien oder internen Quellen angebunden werden dürfen, wird für Ihren Pilot gesondert geprüft.</p></div>
        <div className={s.plate}><p className={s.eyebrow}>Beispiel für einen Radar-Eintrag</p><h2 className="mt-3">Fügeverfahren / Mischbauweise</h2><dl className="grid gap-5 mt-7">{[
          ['Quelle', 'Originalbeitrag und Abrufdatum'],
          ['Produktbezug', 'Vorschlag der KI, noch ungeprüft'],
          ['Bewertung', 'Fachlich geprüft, beobachten'],
          ['Historie', 'Änderungen und Gründe nachvollziehbar'],
        ].map(([term, value]) => <div key={term} className="border-t border-line pt-4"><dt className="font-mono text-xs text-dim uppercase tracking-wider">{term}</dt><dd className="text-muted mt-2">{value}</dd></div>)}</dl></div>
      </section>

      <section className={s.section} id="vergleichsplan">
        <div className={s.split}><div><p className={s.eyebrow}>Vergleichsplan / noch keine Messergebnisse</p><h2>Relevanz zählt. Die Anzahl gefundener Links nicht.</h2></div><p>Wir vergleichen ein festes Suchfeld im bisherigen Ablauf und im Pilot. Fachleute definieren bekannte relevante Quellen und bewerten neue Treffer blind nach denselben Kriterien. Pflege- und Prüfaufwand gehören zur Messung.</p></div>
        <div className="flex flex-col sm:flex-row items-start gap-6 mt-8"><QktTriangle variant="dark" className="w-16 h-16 shrink-0"/><dl className="flex-1 grid md:grid-cols-3 gap-8">{[
          ['Qualität', 'Sind Quellen korrekt zitiert? Passen Fundstück und Produktbezug? Werden unpassende Signale zuverlässig aussortiert?'],
          ['Kosten', 'Welcher Aufwand entsteht für Quellenzugang, Einrichtung, Pflege und fachliche Bewertung? Welche Sucharbeit entfällt?'],
          ['Timing', 'Wie lange dauert es vom neuen Fundstück bis zur fachlich geprüften Einordnung und einem beschlossenen nächsten Schritt?'],
        ].map(([title, text]) => <div key={title}><dt className="font-heading text-xl mb-3">{title}</dt><dd className="text-muted leading-relaxed">{text}</dd></div>)}</dl></div>
      </section>

      <section className={s.section + ' ' + s.split}>
        <div><p className={s.eyebrow}>Für den ersten Test</p><h2>Ein Suchfeld, zehn Quellen und ein Fachverantwortlicher reichen.</h2></div>
        <ul className={s.list}><li>Eine konkrete Technologiefrage mit Bezug zu einer Produktfunktion, einem Werkstoff oder Verfahren.</li><li>Bevorzugte Fachmedien, Forschungsseiten, Anbieter und bekannte Ausschlussquellen.</li><li>Prüfkriterien für Reifegrad, Produktbezug und einen möglichen nächsten Schritt.</li><li>Eine Person, die Fundstücke regelmäßig bewertet und das Suchprofil fachlich nachschärft.</li></ul>
      </section>
    </div>
  </TopicPage>;
}
