'use client';

import { useState } from 'react';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './ai2cad.module.css';

/** Native source and poster are server-rendered; playback requires no JS. */
export default function WatchVideo({ id, title, en, directory = 'ai2cad', describedBy = 'chapter-review' }: { id: string; title: string; en: boolean; directory?: 'ai2cad' | 'demos'; describedBy?: string }) {
  const [failed, setFailed] = useState(false);
  const src = `/videos/${directory}/${id}.mp4`;
  return <div className={styles.player}>
    <video controls playsInline preload="none" width={1920} height={1080} src={src} poster={`/videos/${directory}/${id}.webp`} aria-label={title} aria-describedby={describedBy} onPlay={event => pauseOtherVideos(event.currentTarget)} onError={() => setFailed(true)}><a href={src}>{en ? 'Open video' : 'Video öffnen'}</a></video>
    {failed && <div className={styles.error} role="alert"><p>{en ? 'The video could not be loaded.' : 'Das Video konnte nicht geladen werden.'}</p><a href={src}>{en ? 'Open video directly' : 'Video direkt öffnen'}</a></div>}
  </div>;
}
