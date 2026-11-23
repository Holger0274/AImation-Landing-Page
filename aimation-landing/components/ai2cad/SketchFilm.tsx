'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { useLeadForm } from '@/components/LeadFormProvider';
import { Link } from '@/i18n/navigation';
import { AI2CAD_PATH, SKETCH_VIDEO } from '@/lib/data/ai2cad';
import { pauseOtherVideos } from '@/lib/media/playback';
import styles from './SketchFilm.module.css';

export default function SketchFilm({ en }: { en: boolean }) {
  const player = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const { openLeadForm } = useLeadForm();
  const copy = SKETCH_VIDEO[en ? 'en' : 'de'];
  const path = `${AI2CAD_PATH}/${SKETCH_VIDEO.slug}`;
  const media = `/videos/ai2cad/${SKETCH_VIDEO.id}`;

  function play() {
    const video = player.current;
    if (!video) return;
    setStarted(true);
    void video.play().catch(() => { /* Native controls allow another attempt. */ });
  }

  return <section id="handy-demo" className={styles.film} aria-labelledby="sketch-film-title">
    <header className={styles.header}>
      <p className={styles.edition}><strong>{en ? 'New' : 'Neu'}</strong> in AI2CAD</p>
      <h2 id="sketch-film-title">{copy.title}</h2>
    </header>
    <div className={styles.screen}>
      <video ref={player} controls playsInline preload="none" tabIndex={started ? 0 : -1}
        aria-hidden={!started} aria-label={copy.title} src={media + '.mp4'} width={1920} height={1080}
        onPlay={event => {
          event.currentTarget.focus({ preventScroll: true });
          pauseOtherVideos(event.currentTarget);
        }} onError={() => setFailed(true)} />
      {!started && <button type="button" className={styles.cover} onClick={play}
        aria-label={en ? 'Play the phone-to-CAD film' : 'Film abspielen: vom Handyfoto zum CAD-Modell'}>
        <Image className={styles.paper} src={media + '-papier.webp'} alt="" width={820} height={543} priority sizes="(max-width: 700px) 65vw, 450px" />
        <Image className={styles.phone} src={media + '-handy.webp'} alt="" width={360} height={762} priority sizes="(max-width: 700px) 22vw, 168px" />
        <span className={styles.play}><Play size={15} fill="currentColor" aria-hidden="true" />
          {en ? 'Watch film' : 'Film ansehen'} <small>{SKETCH_VIDEO.duration}</small>
        </span>
      </button>}
      {started && failed && <a className={styles.error} href={media + '.mp4'}>{en ? 'Open video file' : 'Videodatei öffnen'}</a>}
    </div>
    <dl className={styles.timeline} aria-label={en ? 'Times shown in this demonstration' : 'Uhrzeiten im gezeigten Versuch'}>
      <div><dt>19:12</dt><dd>{en ? 'Sketch sent' : 'Skizze gesendet'}</dd></div>
      <div><dt>19:16</dt><dd>{en ? '3D view and STEP file back on the phone' : '3D-Ansicht und STEP-Datei auf dem Handy'}</dd></div>
    </dl>
    <div className={styles.actions}>
      {started && <button type="button" className={styles.discuss} onClick={() => {
        player.current?.pause();
        openLeadForm();
      }}>{en ? 'Discuss my sketch' : 'Meine Skizze besprechen'}<ArrowUpRight size={16} aria-hidden="true" /></button>}
      <Link className={styles.details} href={path}>{started
        ? (en ? 'Chapters' : 'Filmkapitel')
        : (en ? 'Video chapters' : 'Zu den Filmkapiteln')}<ArrowUpRight size={16} aria-hidden="true" /></Link>
    </div>
  </section>;
}
