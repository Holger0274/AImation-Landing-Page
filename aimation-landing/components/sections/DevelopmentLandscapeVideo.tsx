'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { LANDSCAPE_SNAPSHOT } from '@/lib/data/engineering-landscape';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './DevelopmentLandscapeVideo.module.css';

const src = '/videos/demos/development-landscape.mp4';
const poster = '/videos/demos/development-landscape.webp';

export default function DevelopmentLandscapeVideo({ en }: { en: boolean }) {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!started) return;
    const video = videoRef.current;
    video?.focus({ preventScroll: true });
    void video?.play().catch(() => {});
    return () => { video?.pause(); };
  }, [started]);

  return (
    <div id="development-landscape-video" className={styles.feature} role="region" aria-labelledby="landscape-video-heading">
      <div className={styles.intro}>
        <div>
        <h3 id="landscape-video-heading">{en ? 'Find your starting point among ' : 'Finden Sie Ihren Einstieg unter '}{LANDSCAPE_SNAPSHOT.cases}{en ? ' application ideas.' : ' Anwendungsideen.'}</h3>
        </div>
        <p>{en
          ? `A tour of ${LANDSCAPE_SNAPSHOT.areas} areas in product development and adjacent functions. See the catalogue, our own tools and how we assess ideas.`
          : `Ein Rundgang durch ${LANDSCAPE_SNAPSHOT.areas} Bereiche der Produktentwicklung und angrenzender Aufgaben. Sie sehen den Katalog, eigene Werkzeuge und die Bewertung von Ideen.`}</p>
      </div>
      <div className={styles.player}>
        {!started ? (
          <button type="button" className={styles.poster} onClick={() => setStarted(true)} aria-label={en ? 'Play Development Landscape video, 2 minutes 20 seconds, in German' : 'Development-Landscape-Video abspielen, 2 Minuten 20 Sekunden'}>
            <Image src={poster} alt={en ? `Development Landscape: ${LANDSCAPE_SNAPSHOT.cases} application ideas across development phases` : `Development Landscape: ${LANDSCAPE_SNAPSHOT.cases} Anwendungsideen entlang der Entwicklungsphasen`} fill sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 1216px" />
            <span className={styles.playPrompt}><span className={styles.playIcon}><Play size={22} fill="currentColor" aria-hidden="true" /></span><span>{en ? 'Watch the video' : 'Video ansehen'}<small>02:20 · {en ? 'German' : 'Deutsch'}</small></span></span>
          </button>
        ) : (
          <video ref={videoRef} src={src} poster={poster} controls playsInline preload="none" tabIndex={0} aria-label={en ? 'Development Landscape demonstration in German' : 'Development Landscape: Demonstration auf Deutsch'} aria-describedby="landscape-video-note" onPlay={(event) => pauseOtherVideos(event.currentTarget)} onError={() => setFailed(true)}>
            <a href={src}>{en ? 'Open video' : 'Video öffnen'}</a>
          </video>
        )}
        {failed && <div className={styles.error} role="alert"><p>{en ? 'The video could not be loaded.' : 'Das Video konnte nicht geladen werden.'}</p><a href={src}>{en ? 'Open video directly' : 'Video direkt öffnen'} <ArrowUpRight size={16} aria-hidden="true" /></a></div>}
      </div>
      <div className={styles.bridge}>
        <div><strong>{en ? 'Now explore selected examples yourself.' : 'Jetzt ausgewählte Beispiele selbst erkunden.'}</strong><p>{en ? 'Choose a development phase below and explore an application.' : 'Wählen Sie unten eine Entwicklungsphase und schauen Sie sich einen Anwendungsfall an.'}</p></div>
        <a href="#landscape-entdecken" onClick={() => videoRef.current?.pause()}>{en ? 'Explore the map' : 'Landkarte erkunden'}<ArrowDown size={18} aria-hidden="true" /></a>
      </div>
      <p id="landscape-video-note" className={styles.note}>{en ? `The catalogue contains application ideas, not ${LANDSCAPE_SNAPSHOT.cases} delivered customer projects. The video loads only when you press play.` : `Der Katalog enthält Anwendungsideen, keine ${LANDSCAPE_SNAPSHOT.cases} umgesetzten Kundenprojekte. Das Video lädt erst beim Abspielen.`}</p>
    </div>
  );
}
