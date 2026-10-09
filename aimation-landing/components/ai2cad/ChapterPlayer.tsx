'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Play, Check, Clock3 } from 'lucide-react';
import { AI2CAD_CHAPTERS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { Link } from '@/i18n/navigation';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './ai2cad.module.css';

function Video({ chapter, en }: { chapter: typeof AI2CAD_CHAPTERS[number]; en: boolean }) {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const copy = chapter[en ? 'en' : 'de'];
  const src = `/videos/ai2cad/${chapter.id}.mp4`;
  const poster = `/videos/ai2cad/${chapter.id}.webp`;

  useEffect(() => {
    if (!started) return;
    const video = ref.current;
    video?.focus({ preventScroll: true });
    void video?.play().catch(() => {});
    return () => video?.pause();
  }, [started]);

  return <div className={styles.player}>
    {!started ? <button className={styles.poster} type="button" onClick={() => setStarted(true)} aria-label={`${copy.title}: ${en ? 'play video' : 'Video abspielen'} (${chapter.duration})`}>
      <Image src={poster} alt={copy.poster} fill sizes="(max-width: 900px) 92vw, 850px" />
      <span className={styles.play}><Play size={23} fill="currentColor" aria-hidden="true" />{en ? 'Watch chapter' : 'Kapitel ansehen'}<span>{chapter.duration}</span></span>
    </button> : <video ref={ref} controls playsInline preload="none" tabIndex={0} src={src} poster={poster} aria-label={copy.title} aria-describedby={`ai2cad-check-${chapter.id}`} onPlay={event => pauseOtherVideos(event.currentTarget)} onError={() => setFailed(true)}>
      <a href={src}>{en ? 'Open video' : 'Video öffnen'}</a>
    </video>}
    {failed && <div className={styles.error} role="alert"><p>{en ? 'The video could not be loaded.' : 'Das Video konnte nicht geladen werden.'}</p><a href={src}>{en ? 'Open video directly' : 'Video direkt öffnen'} <ArrowUpRight size={16} aria-hidden="true" /></a></div>}
  </div>;
}

export default function ChapterPlayer({ en }: { en: boolean }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === 'ArrowRight' ? (index + 1) % 4 : event.key === 'ArrowLeft' ? (index + 3) % 4 : event.key === 'Home' ? 0 : event.key === 'End' ? 3 : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }
  return <div className={styles.cinema}>
    <div className={styles.tabs} role="tablist" aria-label={en ? 'AI2CAD video chapters' : 'AI2CAD-Videokapitel'}>
      {AI2CAD_CHAPTERS.map((chapter, index) => <button key={chapter.id} type="button" ref={node => { refs.current[index] = node; }} role="tab" id={`ai2cad-tab-${chapter.id}`} aria-controls={`ai2cad-panel-${chapter.id}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}>
        <span className={styles.tabNumber}>{chapter.number}</span><span>{chapter[en ? 'en' : 'de'].short}<small><Clock3 size={12} aria-hidden="true" />{chapter.duration}</small></span>
      </button>)}
    </div>
    {AI2CAD_CHAPTERS.map((chapter, index) => {
      const copy = chapter[en ? 'en' : 'de'];
      return <div key={chapter.id} role="tabpanel" id={`ai2cad-panel-${chapter.id}`} aria-labelledby={`ai2cad-tab-${chapter.id}`} hidden={active !== index} tabIndex={0}>
        <div className={styles.screenGrid}>
          {active === index && <Video key={chapter.id} chapter={chapter} en={en} />}
          <div className={styles.chapterCopy}><p className={styles.chapterLabel}>{en ? 'Chapter' : 'Kapitel'} {chapter.number} / 04</p><h3>{copy.title}</h3><p>{copy.description}</p><ul>{copy.features.map(feature => <li key={feature}><Check size={16} aria-hidden="true" /><span>{feature}</span></li>)}</ul></div>
        </div>
        <p className={styles.reviewNote} id={`ai2cad-check-${chapter.id}`}><strong>{en ? 'Engineering review' : 'Fachliche Einordnung'}</strong>{copy.check}</p>
        <Link className={styles.chapterLink} href={`${AI2CAD_PATH}/${chapter.slug}`}>{en ? 'Open this video on its own page' : 'Dieses Video auf eigener Seite öffnen'}<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>;
    })}
    <p className={styles.mediaNote}>{en ? 'Own development demonstration · German on-screen text · Website editions without audio, product names obscured · Videos load on play' : 'Eigene Entwicklungsdemonstration · Website-Fassungen ohne Ton, Produktnamen verdeckt · Videos laden erst beim Abspielen'}</p>
  </div>;
}
