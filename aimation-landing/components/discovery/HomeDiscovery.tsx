'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { AI2CAD_CHAPTERS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { APPLICATION_DEMOS } from '@/lib/data/demo-videos';
import { QKT_CASES } from '@/lib/data/application-paths';
import { PRICING } from '@/lib/data/pricing';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './discovery.module.css';

function PreviewVideo({ id, en }: { id: typeof AI2CAD_CHAPTERS[number]['id']; en: boolean }) {
  const chapter = AI2CAD_CHAPTERS.find(item => item.id === id)!;
  const copy = chapter[en ? 'en' : 'de'];
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const src = `/videos/ai2cad/${id}.mp4`;
  useEffect(() => {
    if (!playing) return;
    const media = video.current;
    media?.focus({ preventScroll: true });
    void media?.play().catch(() => {});
    return () => media?.pause();
  }, [playing]);
  return <div className={styles.media}>
    {playing ? <video ref={video} controls playsInline preload="none" tabIndex={0} src={src} poster={`/videos/ai2cad/${id}.webp`} aria-label={copy.title} aria-describedby="preview-check" onPlay={event => pauseOtherVideos(event.currentTarget)} onError={() => setFailed(true)} /> : <button type="button" onClick={() => setPlaying(true)} aria-label={`${copy.title}: ${en ? 'play video' : 'Video abspielen'} (${chapter.duration})`}>
      <Image src={`/videos/ai2cad/${id}.webp`} alt={copy.poster} fill sizes="(max-width: 800px) 92vw, 62vw" />
      <span className={styles.play}><Play size={19} fill="currentColor" aria-hidden="true" />{en ? 'Watch' : 'Ansehen'} · {chapter.duration}</span>
    </button>}
    {failed && <p className={styles.mediaError} role="alert">{en ? 'Could not load the video. ' : 'Das Video konnte nicht geladen werden. '}<a href={src}>{en ? 'Open directly' : 'Direkt öffnen'}</a></p>}
  </div>;
}
const tasks = [
  { id: 'knowledge', de: ['Wissen sichern', 'Ein früherer Fehler taucht wieder auf.', 'Spielen Sie durch, wie ein früherer 8D-Bericht eine Ursachenanalyse unterstützt und was Ihr Team weiterhin prüfen muss.'], en: ['Retain knowledge', 'An old defect appears again.', 'Walk through how an earlier 8D report supports root-cause analysis and what your team still needs to check.'], case: QKT_CASES.quality },
  { id: 'reports', de: ['Berichte vorbereiten', 'Messdaten liegen vor. Der Bericht fehlt.', 'Verfolgen Sie den Weg von einer Versuchsnotiz zum Berichtsentwurf. Fehlende Angaben bleiben als offene Punkte sichtbar.'], en: ['Prepare reports', 'The data is ready. The report is missing.', 'Follow a test note through to a draft report. Missing information stays visible as unresolved items.'], case: QKT_CASES.cost },
  { id: 'requirements', de: ['Anforderungen klären', 'Eine Formulierung lässt zu viel offen.', 'Prüfen Sie eine Anforderung auf Mehrdeutigkeit. Daraus entstehen konkrete Rückfragen an den Auftraggeber.'], en: ['Clarify requirements', 'A statement leaves too much open.', 'Check a requirement for ambiguity and turn the findings into specific questions for the customer.'], case: QKT_CASES.timing },
] as const;

export default function HomeDiscovery({ en }: { en: boolean }) {
  const lang = en ? 'en' : 'de';
  const [active, setActive] = useState(1);
  const [taskIndex, setTaskIndex] = useState(0);
  const chapter = AI2CAD_CHAPTERS[active];
  const copy = chapter[lang];
  const task = tasks[taskIndex];
  const money = (value: number) => new Intl.NumberFormat(en ? 'en-GB' : 'de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  return <>
    <section id="entwicklung-erleben" className="engineering-section" aria-labelledby="discovery-heading"><div className="engineering-wrap">
      <div className={styles.sectionHead}><div><p className="technical-label">01 / AI2CAD + AI2CAE</p><h2 id="discovery-heading">{en ? 'An idea becomes ' : 'Aus einer Idee wird '}<span className="highlight">{en ? 'geometry.' : 'Geometrie.'}</span></h2></div><p>{en ? 'Choose a step. Watch AI operate CAD and FEM in our own development recordings.' : 'Wählen Sie einen Schritt. Sehen Sie in unseren eigenen Entwicklungsaufnahmen, wie KI CAD und FEM bedient.'}</p></div>
      <div className={styles.chapterChoices} role="group" aria-label={en ? 'Choose a development step' : 'Entwicklungsschritt wählen'}>{AI2CAD_CHAPTERS.map((item, index) => <button key={item.id} type="button" aria-pressed={index === active} aria-controls="chapter-preview" onClick={() => setActive(index)}><span>{item.number}</span>{item[lang].short}</button>)}</div>
      <div className={styles.preview} id="chapter-preview">
        <PreviewVideo id={chapter.id} en={en} key={chapter.id} />
        <div className={styles.previewCopy} aria-live="polite"><p className="technical-label">{chapter.kind} / {chapter.number}</p><h3>{copy.title}</h3><p>{copy.description}</p><p className={styles.note} id="preview-check">{copy.check}</p><Link href={`${AI2CAD_PATH}/${chapter.slug}`} className="engineering-text-link">{en ? 'Read the complete workflow' : 'Den vollständigen Ablauf ansehen'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      </div>
      <div className={styles.footLinks}><Link href="/ai2cad" className="engineering-text-link">{en ? 'All five videos and CAD integration' : 'Alle fünf Videos und die CAD-Anbindung'}<ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/entwicklungswerkstatt#selbst-gebaut" className="engineering-text-link">{en ? 'Explore 5Why, FEM Visualizer and idea evaluation' : '5Why, FEM-Visualizer und Ideenbewertung entdecken'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </div></section>
    <section id="anwendungsdemos" className={`engineering-section ${styles.appsSection}`} aria-labelledby="apps-heading"><div className="engineering-wrap">
      <div className={styles.sectionHead}><div><p className="technical-label">02 / {en ? 'Applications' : 'Anwendungen'}</p><h2 id="apps-heading">{en ? 'A look inside our ' : 'Ein Blick in unsere '}<span className="highlight">{en ? 'workshop.' : 'Werkstatt.'}</span></h2></div><p>{en ? 'Projects, variants or skills: each 90-second recording shows a specific development stage with example data.' : 'Projekte, Varianten oder Kompetenzen: Jede Aufnahme zeigt in 90 Sekunden einen konkreten Entwicklungsstand mit Beispieldaten.'}</p></div>
      <div className={styles.apps}>{APPLICATION_DEMOS.map((demo, index) => <Link className={styles.app} key={demo.id} href={`/videos/${demo.id}`}><div className={styles.appImage}><Image src={`/videos/demos/${demo.id}.webp`} alt={demo[lang].poster} fill sizes="(max-width: 650px) 90vw, 32vw" /><span>0{index + 1} / 1:30</span></div><div className={styles.appCopy}><span className="technical-label">{demo[lang].status}</span><h3>{demo[lang].topic}<ArrowUpRight size={20} aria-hidden="true" /></h3><p>{demo.name}</p></div></Link>)}</div>
      <Link href="/entwicklungswerkstatt" className="engineering-text-link">{en ? 'Enter the complete workshop' : 'Die vollständige Entwicklungswerkstatt öffnen'}<ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div></section>
    <section id="aufgabe-waehlen" className="engineering-section" aria-labelledby="task-heading"><div className="engineering-wrap">
      <div className={styles.sectionHead}><div><p className="technical-label">03 / {en ? 'Your workflow' : 'Ihr Ablauf'}</p><h2 id="task-heading">{en ? 'Start with your ' : 'Beginnen Sie bei Ihrer '}<span className="highlight">{en ? 'task.' : 'Aufgabe.'}</span></h2></div><p>{en ? 'Explore an example before discussing implementation. These walkthroughs use fictional data.' : 'Spielen Sie ein Beispiel durch, bevor wir über die Umsetzung sprechen. Die Abläufe verwenden fiktive Daten.'}</p></div>
      <div className={styles.taskLayout}><div className={styles.taskChoices} role="group" aria-label={en ? 'Select your task' : 'Ihre Aufgabe wählen'}>{tasks.map((item, index) => <button type="button" aria-pressed={taskIndex === index} aria-controls="task-preview" key={item.id} onClick={() => setTaskIndex(index)}><span>0{index + 1}</span>{item[lang][0]}<ArrowUpRight size={18} aria-hidden="true" /></button>)}</div><div className={styles.taskPanel} id="task-preview" aria-live="polite"><p className="technical-label">{en ? 'Example to explore' : 'Beispiel zum Durchspielen'}</p><h3>{task[lang][1]}</h3><p>{task[lang][2]}</p><Link href={`/ki-anwendungsfaelle#use-case-${task.case}`} className="engineering-text-link">{en ? 'Explore this workflow' : 'Diesen Ablauf durchspielen'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
      <div className={styles.footLinks}><Link href="/ki-produktentwicklung" className="engineering-text-link">{en ? 'AI in product development: background' : 'KI in der Produktentwicklung: Hintergründe'}<ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/ki-anwendungsfaelle" className="engineering-text-link">{en ? 'Explore all areas and compare workflows' : 'Alle Bereiche erkunden und Abläufe vergleichen'}<ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/wirtschaftlichkeit#zeitpotenzial" className="engineering-text-link">{en ? 'Calculate with your own assumptions' : 'Mit Ihren eigenen Annahmen rechnen'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </div></section>
    <section id="prozess" className={`engineering-section ${styles.process}`} aria-labelledby="start-heading"><div className="engineering-wrap">
      <div className={styles.sectionHead}><div><p className="technical-label">04 / {en ? 'Working together' : 'Zusammenarbeit'}</p><h2 id="start-heading">{en ? 'Make the next step ' : 'Der nächste Schritt wird '}<span className="highlight">{en ? 'concrete.' : 'konkret.'}</span></h2></div><p>{en ? 'Bring a workflow from your team. We discuss the task, the data and whether a pilot makes sense.' : 'Bringen Sie einen Ablauf aus Ihrem Team mit. Wir besprechen die Aufgabe, die Daten und ob ein Pilot sinnvoll ist.'}</p></div>
      <ol className={styles.steps}><li><span>01</span><h3>{en ? 'First conversation' : 'Erstgespräch'}</h3><p>{en ? 'Free' : 'Kostenlos'} · {PRICING.erstgespraech.duration}</p></li><li><span>02</span><h3>{en ? 'AI roadmap' : 'KI-Landkarte'}</h3><p>{en ? 'From ' : 'Ab '}{money(PRICING.kiLandkarte.priceFrom)}</p></li><li><span>03</span><h3>Pilot</h3><p>{money(PRICING.pilot.price)} · {en ? '4 weeks' : PRICING.pilot.duration}</p></li></ol>
      <div className={styles.footLinks}><Link href="/zusammenarbeit" className="engineering-text-link">{en ? 'Complete process, prices and implementation' : 'Vollständiger Ablauf, Preise und Umsetzung'}<ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/ki-schulungen-mittelstand" className="engineering-text-link">{en ? 'Book training independently' : 'Schulung unabhängig davon buchen'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </div></section>
  </>;
}
