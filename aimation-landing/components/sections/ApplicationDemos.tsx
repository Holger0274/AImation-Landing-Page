'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowUpRight, Play } from 'lucide-react';
import { useLeadForm } from '@/components/LeadFormProvider';
import styles from './ApplicationDemos.module.css';

// Source descriptions and original recordings: /Videos, September 2026.
// AI shown in a recording is described as such, not as a production guarantee.
const demos = [
  {
    id: 'pm-demonstrator', name: 'PM Demonstrator',
    de: {
      topic: 'Projekte & Kapazitäten', status: 'Proof of Concept',
      headline: 'Projekte steuern. Den Überblick behalten.',
      description: 'Arbeitspakete, Termine und Kapazitäten laufen in einem System zusammen. Das Video zeigt, wie daraus begründete Projektampeln und ein Statusbericht entstehen.',
      features: ['Terminabweichungen und Abhängigkeiten erkennen', 'Engpässe in der Teamplanung nachvollziehen', 'Berichtsentwürfe prüfen und freigeben'],
      note: 'Im Video: KI-Risiko-Radar und KI-Berichtsentwurf. Gezeigt wird ein Demonstrationsstand mit fiktiven Projektdaten. Funktionsumfang, Anmeldung und Schnittstellen werden für einen Piloten abgestimmt.',
      poster: 'PM Demonstrator: Projektportfolio mit Statusampeln und hervorgehobenem Lieferverzug',
    },
    en: {
      topic: 'Projects & capacity', status: 'Proof of concept',
      headline: 'Manage projects. Keep the overview.',
      description: 'Work packages, schedules and capacity come together in one system. The video shows how they inform explained project indicators and a status report.',
      features: ['Identify schedule deviations and dependencies', 'Understand bottlenecks in team planning', 'Review and approve draft reports'],
      note: 'Shown in the video: AI risk radar and AI report drafts. This is a demonstration using fictional project data. Pilot scope, authentication and integrations need to be agreed.',
      poster: 'PM Demonstrator: project portfolio with status indicators and a highlighted supplier delay',
    },
  },
  {
    id: 'varianthub', name: 'VariantHub',
    de: {
      topic: 'Varianten & Regeln', status: 'Lauffähiger Prototyp',
      headline: 'Varianten prüfen, bevor Fehler entstehen.',
      description: 'Welche Kombination ist technisch machbar? VariantHub prüft Merkmale und Regeln, erklärt Ausschlüsse und zeigt die Folgen einer Änderung vor der Freigabe.',
      features: ['Excel-Variantenlisten einlesen und prüfen', 'Unzulässige Kombinationen mit Begründung erkennen', 'Auswirkungen von Regeländerungen vorab sehen'],
      note: 'Mit KI entwickelt. Der fachliche Kern prüft deterministisch anhand von Regeln. KI-Regelvorschläge sind als Erweiterung vorgesehen. Das Video zeigt Demodaten.',
      poster: 'VariantHub: Kreisdiagramm des gültigen Lösungsraums aus Leistung, Einsatzbereich und Schutzart',
    },
    en: {
      topic: 'Variants & rules', status: 'Working prototype',
      headline: 'Check variants before errors arise.',
      description: 'Which combination is technically feasible? VariantHub checks features and rules, explains exclusions and shows the impact of a change before approval.',
      features: ['Import and check Excel variant lists', 'Identify invalid combinations with explanations', 'Preview the impact of rule changes'],
      note: 'Developed with AI. The core uses deterministic rule checks. AI-generated rule suggestions are a planned extension. The video uses demo data.',
      poster: 'VariantHub: radial chart of valid combinations of power, application and protection class',
    },
  },
  {
    id: 'skillmatrix', name: 'Skillmatrix',
    de: {
      topic: 'Wissen & Teams', status: 'Demo mit Beispieldaten',
      headline: 'Wissen sichtbar machen, bevor es fehlt.',
      description: 'Welche Kompetenzen trägt das Team, und wo hängt Wissen an einzelnen Personen? Die Skillmatrix verbindet Teamübersicht, Wissensrisiken und den Abgleich mit künftigen Anforderungen.',
      features: ['Kompetenzen nach Team und Standort überblicken', 'Wissenslücken und einzelne Wissensträger erkennen', 'Wissenstransfer und Schulung gezielt planen'],
      note: 'Mit KI entwickelt. Gezeigt wird das fiktive Unternehmen Musterwerk Mechatronik. Die Auswertungen unterstützen die Kompetenzplanung und sind keine Leistungsbewertung von Personen.',
      poster: 'Skillmatrix: Verteilung von Entwicklungskapazitäten zwischen Standorten und Produktlinien',
    },
    en: {
      topic: 'Knowledge & teams', status: 'Demo with sample data',
      headline: 'Make knowledge visible before it is missing.',
      description: 'Which skills does the team hold, and where does knowledge depend on one person? Skillmatrix connects team coverage, knowledge risks and future requirements.',
      features: ['See skills by team and location', 'Identify knowledge gaps and single knowledge holders', 'Plan knowledge transfer and targeted training'],
      note: 'Developed with AI. The demonstration uses the fictional company Musterwerk Mechatronik. These views support skills planning, not individual performance evaluation.',
      poster: 'Skillmatrix: engineering capacity flows between locations and product lines',
    },
  },
] as const;

function DemoPlayer({ id, name, alt, en }: { id: string; name: string; alt: string; en: boolean }) {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = `/videos/demos/${id}.mp4`;
  const poster = `/videos/demos/${id}.webp`;

  useEffect(() => {
    if (!started) return;
    const video = videoRef.current;
    video?.focus({ preventScroll: true });
    // Only mounted after an explicit play click. Native controls remain available
    // if the browser declines programmatic playback (e.g. low-power mode).
    void video?.play().catch(() => {});
    return () => { video?.pause(); };
  }, [started]);

  return (
    <div className={styles.player}>
      {!started ? (
        <button type="button" className={styles.poster} onClick={() => setStarted(true)} aria-label={`${name}: ${en ? 'play 90-second demo video (German)' : '90-Sekunden-Demo abspielen'}`}>
          <Image src={poster} alt={alt} fill sizes="(max-width: 768px) 94vw, (max-width: 1280px) 90vw, 1216px" />
          <span className={styles.playPrompt}><span className={styles.playIcon}><Play size={22} fill="currentColor" aria-hidden="true" /></span><span>{en ? 'Watch demo' : 'Demo ansehen'}<small>01:30 · {en ? 'German' : 'Deutsch'}</small></span></span>
        </button>
      ) : (
        <video ref={videoRef} src={src} poster={poster} controls playsInline preload="none" tabIndex={0} aria-label={`${name}: ${en ? 'application demo in German' : 'Anwendungsdemo auf Deutsch'}`} aria-describedby={`demo-note-${id}`} onError={() => setFailed(true)}>
          <a href={src}>{en ? 'Open video' : 'Video öffnen'}</a>
        </video>
      )}
      {failed && <div className={styles.error} role="alert"><p>{en ? 'The video could not be loaded.' : 'Das Video konnte nicht geladen werden.'}</p><a href={src}>{en ? 'Open video directly' : 'Video direkt öffnen'} <ArrowUpRight size={16} aria-hidden="true" /></a></div>}
    </div>
  );
}

export default function ApplicationDemos() {
  const en = useLocale() === 'en';
  const lang = en ? 'en' : 'de';
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const { openLeadForm } = useLeadForm();

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % demos.length;
    else if (event.key === 'ArrowLeft') next = (index + demos.length - 1) % demos.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = demos.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className={styles.showcase}>
      <div className={styles.topline}><span>{en ? 'From our own development work' : 'Einblicke in unsere Entwicklungsarbeit'}</span><span>3 {en ? 'demos' : 'Demos'} · {en ? '90 seconds each' : 'je 90 Sekunden'}</span></div>
      <div className={styles.tabs} role="tablist" aria-label={en ? 'Select an application demo' : 'Anwendungsdemo auswählen'}>
        {demos.map((demo, index) => <button key={demo.id} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" id={`demo-tab-${demo.id}`} aria-controls={`demo-panel-${demo.id}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => navigateTabs(event, index)} className={styles.tab}>
          <span className={styles.number}>0{index + 1}</span><span><strong>{demo.name}</strong><small>{demo[lang].topic}</small></span><Play size={16} aria-hidden="true" />
        </button>)}
      </div>
      {demos.map((demo, index) => {
        const copy = demo[lang];
        return <div key={demo.id} role="tabpanel" id={`demo-panel-${demo.id}`} aria-labelledby={`demo-tab-${demo.id}`} hidden={active !== index} tabIndex={0} className={styles.panel}>
          {active === index && <DemoPlayer key={demo.id} id={demo.id} name={demo.name} alt={copy.poster} en={en} />}
          <div className={styles.details}>
            <div><span className={styles.status}>{copy.status}</span><h3>{copy.headline}</h3><p>{copy.description}</p></div>
            <div className={styles.outcomes}><p className={styles.label}>{en ? 'What the demo shows' : 'Das zeigt die Demo'}</p><ul>{copy.features.map((feature, i) => <li key={feature}><span aria-hidden="true">0{i + 1}</span>{feature}</li>)}</ul><button type="button" onClick={openLeadForm} className={styles.contact}>{en ? 'Discuss your application' : 'Ihre Anwendung besprechen'}<ArrowUpRight size={18} aria-hidden="true" /></button></div>
          </div>
          <p id={`demo-note-${demo.id}`} className={styles.note}>{copy.note}</p>
        </div>;
      })}
      <p className={styles.footnote}>{en ? 'Own projects with demo data. The recordings show development stages, not customer references. Videos only load when you press play.' : 'Eigene Projekte mit Demodaten. Die Aufnahmen zeigen Entwicklungsstände, keine Kundenreferenzen. Videos laden erst beim Abspielen.'}</p>
    </div>
  );
}
