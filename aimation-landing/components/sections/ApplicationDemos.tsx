'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowUpRight, Play } from 'lucide-react';
import { useLeadForm } from '@/components/LeadFormProvider';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './ApplicationDemos.module.css';
import { Link } from '@/i18n/navigation';

import { APPLICATION_DEMOS as demos, DEMO_PATHS } from '@/lib/data/demo-videos';
export { DEMO_PATHS } from '@/lib/data/demo-videos';

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
        <video ref={videoRef} src={src} poster={poster} controls playsInline preload="none" tabIndex={0} aria-label={`${name}: ${en ? 'application demo in German' : 'Anwendungsdemo auf Deutsch'}`} aria-describedby={`demo-note-${id}`} onPlay={(event) => pauseOtherVideos(event.currentTarget)} onError={() => setFailed(true)}>
          <a href={src}>{en ? 'Open video' : 'Video öffnen'}</a>
        </video>
      )}
      {failed && <div className={styles.error} role="alert"><p>{en ? 'The video could not be loaded.' : 'Das Video konnte nicht geladen werden.'}</p><a href={src}>{en ? 'Open video directly' : 'Video direkt öffnen'} <ArrowUpRight size={16} aria-hidden="true" /></a></div>}
    </div>
  );
}

export default function ApplicationDemos({ compact = false }: { compact?: boolean }) {
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
    <div className={`${styles.showcase} ${compact ? styles.compact : ''}`}>
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
            <div className={styles.outcomes}>{!compact && <p className={styles.label}>{en ? 'What the demo shows' : 'Das zeigt die Demo'}</p>}{!compact && <ul>{copy.features.map((feature, i) => <li key={feature}><span aria-hidden="true">0{i + 1}</span>{feature}</li>)}</ul>}<button type="button" onClick={openLeadForm} className={styles.contact}>{en ? 'Discuss your application' : 'Ihre Anwendung besprechen'}<ArrowUpRight size={18} aria-hidden="true" /></button></div>
          </div>
          <p id={`demo-note-${demo.id}`} className={styles.note}>{copy.note}<br /><Link href={`/videos/${demo.id}`} className="engineering-text-link mr-6 mt-3">{en ? `${demo.name}: video and description` : `${demo.name}: Video und Beschreibung`} ↗</Link><Link href={DEMO_PATHS[demo.id]} className="engineering-text-link mt-3">{en ? `${demo.name}: workflow and prerequisites` : `${demo.name}: Ablauf und Voraussetzungen`} →</Link></p>
        </div>;
      })}
      <p className={styles.footnote}>{en ? 'Own projects with demo data. The recordings show development stages, not customer references. Videos only load when you press play.' : 'Eigene Projekte mit Demodaten. Die Aufnahmen zeigen Entwicklungsstände, keine Kundenreferenzen. Videos laden erst beim Abspielen.'}</p>
    </div>
  );
}

/** The same on-demand player and factual note used on the homepage. */
export function ApplicationDemoVideo({ id, en, note }: { id: keyof typeof DEMO_PATHS; en: boolean; note?: string }) {
  const demo = demos.find(item => item.id === id)!;
  const copy = demo[en ? 'en' : 'de'];
  return <figure><DemoPlayer id={id} name={demo.name} alt={copy.poster} en={en} /><figcaption id={`demo-note-${id}`}>{note ?? copy.note}<br /><Link href={`/videos/${id}`} className="engineering-text-link mt-3">{en ? 'Open the video on its own page' : 'Video auf eigener Seite öffnen'} ↗</Link></figcaption></figure>;
}
