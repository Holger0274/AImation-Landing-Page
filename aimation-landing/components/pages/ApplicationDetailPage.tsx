import Image from 'next/image';
import TopicPage, { TopicSteps, topicStyles as s } from './TopicPage';
import { ApplicationDemoVideo } from '@/components/sections/ApplicationDemos';
import { APPLICATION_PAGES } from '@/lib/data/application-pages';
import { APPLICATION_COMPARISONS } from '@/lib/data/application-comparisons';
import ProjectReviewFlow from '@/components/visuals/ProjectReviewFlow';

export default function ApplicationDetailPage({ locale, application }: { locale: string; application: string }) {
  const en = locale === 'en';
  const app = APPLICATION_PAGES[application];
  const c = app[en ? 'en' : 'de'];
  const comparison = APPLICATION_COMPARISONS[application][en ? 'en' : 'de'];
  return <TopicPage locale={locale} path={app.path} label={c.label} title={c.title} accent={c.accent} intro={c.intro}
    parent={{ href: '/ki-produktentwicklung', label: en ? 'Product development' : 'Produktentwicklung' }}
    facts={[app.name, c.status, c.aiRole]}
    visual={<a href="#einblick" className={s.preview} aria-label={en ? `Go to the ${app.name} video` : `Zum Video: ${app.name}`}><span className={s.eyebrow}>{app.name} / 01:30</span><Image src={`/videos/demos/${app.demo}.webp`} width={1280} height={720} alt={en ? `${app.name} application interface with sample data` : `${app.name}: Anwendungsoberfläche mit Beispieldaten`} sizes="(max-width: 900px) 94vw, 46vw" priority/><span className="engineering-text-link">{en ? 'Watch the application in action' : 'Die Anwendung in Aktion ansehen'} ↘</span></a>}
    faqs={c.faqs} cta={comparison.cta}
    closing={{ title: en ? 'Bring one case to the free initial call.' : 'Ein eigener Fall fürs kostenlose Erstgespräch.', description: comparison.next }}
    related={[{ href: '/ki-produktentwicklung', label: en ? 'AI in product development' : 'KI in der Produktentwicklung' }, { href: '/use-cases/excel-powerpoint-berichte', label: en ? 'Replace Excel with dashboards and apps' : 'Excel durch Dashboards und Apps ablösen' }, { href: '/ki-schulungen-mittelstand', label: en ? 'Training for your team' : 'Schulung für Ihr Team' }]}>
    <div className="engineering-wrap">
      <section className={`${s.section} ${s.split}`}><div><p className={s.eyebrow}>{en ? 'For your working day' : 'Für Ihren Arbeitsalltag'}</p><h2>{comparison.benefit}</h2></div><p>{c.problem}</p></section>
      {application === 'projects' && <ProjectReviewFlow en={en} />}
      <section className={s.section} id="einblick"><p className={s.eyebrow}>{en ? 'Original recording / German' : 'Originalaufnahme / Deutsch'}</p><h2>{en ? 'See the workflow for yourself.' : 'Schauen Sie dem Ablauf zu.'}</h2><p>{comparison.video}</p><div className={s.showcase}><ApplicationDemoVideo id={app.demo} en={en} note={c.boundary}/></div></section>
      <section className={`${s.section} ${s.split}`}><div><p className={s.eyebrow}>{en ? 'From input to decision' : 'Vom Eingang zur Entscheidung'}</p><h2>{en ? 'What the workflow involves.' : 'Was im Ablauf passiert.'}</h2></div><TopicSteps steps={c.steps}/></section>
      <section className={`${s.section} ${s.split}`} id="ki-integration" aria-labelledby="integration-title"><div><p className={s.eyebrow}>{en ? 'AI, rules and data history' : 'KI, Regeln und Datenhistorie'}</p><h2 id="integration-title">{en ? 'Where AI helps. What follows fixed rules.' : 'Wo KI hilft. Was nach festen Regeln läuft.'}</h2></div><p>{c.integration}</p></section>
      <section className={s.section} id="praxisvergleich" aria-labelledby="comparison-title">
        <div className={s.split}><div><p className={s.eyebrow}>{en ? 'Evaluation plan / results not yet measured' : 'Vergleichsplan / noch keine Messergebnisse'}</p><h2 id="comparison-title">{en ? 'The same task. Both workflows under review.' : 'Dieselbe Aufgabe. Beide Abläufe auf dem Prüfstand.'}</h2></div><p>{comparison.task}</p></div>
        <div className={s.comparison}>{comparison.rows.map(row => <article className={s.comparisonRow} key={row.task}><h3>{row.task}</h3><dl><div><dt>{en ? 'Current workflow' : 'Bisheriger Ablauf'}</dt><dd>{row.before}</dd></div><div><dt>{en ? `With ${app.name}` : `Mit ${app.name}`}</dt><dd>{row.withTool}</dd></div><div className={s.comparisonMeasure}><dt>{en ? 'What we measure' : 'Das messen wir'}</dt><dd>{row.measure}</dd></div></dl></article>)}</div>
        <p className={s.note}>{comparison.owner}</p>
      </section>
      <section className={`${s.section} ${s.split}`}><div><p className={s.eyebrow}>{en ? 'For a first test' : 'Für einen ersten Test'}</p><h2>{en ? 'What we need from your workflow.' : 'Was wir aus Ihrem Ablauf brauchen.'}</h2></div><ul className={s.list}>{c.requirements.map(item => <li key={item}>{item}</li>)}</ul></section>
    </div>
  </TopicPage>;
}
