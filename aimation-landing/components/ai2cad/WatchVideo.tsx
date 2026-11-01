'use client';

import { useEffect, useRef, useState } from 'react';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './ai2cad.module.css';

type Chapter = { seconds: number; title: string; text: string };
export default function WatchVideo({ id, title, en, directory = 'ai2cad', describedBy = 'chapter-review', chapters }: { id: string; title: string; en: boolean; directory?: 'ai2cad' | 'demos' | 'elektrik'; describedBy?: string; chapters?: readonly Chapter[] }) {
  const [failed, setFailed] = useState(false);
  const player = useRef<HTMLVideoElement>(null);
  const pending = useRef<number | null>(null);
  const src = `/videos/${directory}/${id}.mp4`;
  useEffect(() => {
    if (!chapters) return;
    const requested = new URLSearchParams(window.location.search).get('t');
    const time = Number(requested);
    if (requested !== null && Number.isFinite(time) && time >= 0) {
      pending.current = time;
      player.current?.load();
    }
  }, [chapters]);
  const seek = (time: number) => {
    const video = player.current;
    if (!video) return;
    if (video.readyState >= 1) video.currentTime = Math.min(time, video.duration);
    else { pending.current = time; video.load(); }
    // Playback is initiated by the visitor; native controls remain the fallback.
    void video.play().catch(() => {});
  };
  return <>
    <div className={styles.player} id={chapters ? 'video' : undefined}>
      <video ref={player} controls playsInline preload="none" width={1920} height={1080} src={src} poster={`/videos/${directory}/${id}.webp`} aria-label={title} aria-describedby={describedBy} onLoadedMetadata={event => { if (pending.current !== null) { event.currentTarget.currentTime = Math.min(pending.current, event.currentTarget.duration); pending.current = null; } }} onPlay={event => pauseOtherVideos(event.currentTarget)} onError={() => setFailed(true)}><a href={src}>{en ? 'Open video' : 'Video öffnen'}</a></video>
      {failed && <div className={styles.error} role="alert"><p>{en ? 'The video could not be loaded.' : 'Das Video konnte nicht geladen werden.'}</p><a href={src}>{en ? 'Open video directly' : 'Video direkt öffnen'}</a></div>}
    </div>
    {chapters && <nav className={styles.moments} aria-label={en ? 'Explore the video chapters' : 'Videokapitel entdecken'}><p>{en ? 'Follow the story or jump to a moment.' : 'Folgen Sie der Geschichte oder springen Sie direkt zu einem Moment.'}</p><ol>{chapters.map(chapter => <li key={chapter.seconds}><a href={`?t=${chapter.seconds}#video`} onClick={event => { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); window.history.replaceState(null, '', `?t=${chapter.seconds}#video`); seek(chapter.seconds); player.current?.scrollIntoView({ block: 'center', behavior: 'instant' }); }}><span>{Math.floor(chapter.seconds / 60)}:{String(chapter.seconds % 60).padStart(2, '0')}</span><strong>{chapter.title}</strong><small>{chapter.text}</small></a></li>)}</ol></nav>}
  </>;
}
