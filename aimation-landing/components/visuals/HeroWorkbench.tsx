'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import { AI2CAD_CHAPTERS } from '@/lib/data/ai2cad';
import styles from './HeroWorkbench.module.css';

const views = [
  { id: 'skizze', de: 'Skizze', en: 'Sketch', image: 'skizze', detailDe: 'Fehlende Maße klären. Ein parametrisches Modell aufbauen.', detailEn: 'Clarify missing dimensions. Build a parametric model.' },
  { id: 'zeichnung', de: 'Zeichnung', en: 'Drawing', image: 'welle-zeichnung', detailDe: 'Ansichten, Maße und Toleranzen. Mit offenen Prüfaufgaben.', detailEn: 'Views, dimensions and tolerances. With review tasks still open.' },
  { id: 'fem', de: 'FEM', en: 'FEM', image: 'fem', detailDe: '1.500 N Last. Drei Netze. Vergleich mit der Handrechnung.', detailEn: '1,500 N load. Three meshes. Compared with a hand calculation.' },
] as const;

export default function HeroWorkbench() {
  const en = useLocale() === 'en';
  const [active, setActive] = useState(1);
  const view = views[active];
  const chapter = AI2CAD_CHAPTERS.find(item => item.id === view.id)!;
  return <div className={styles.workbench}>
    <div className={styles.topline}><span>{en ? 'From our development work' : 'Aus unserer Entwicklung'}</span><span>AI2CAD / AI2CAE</span></div>
    <div className={styles.imageFrame}>
      <Image key={view.id} src={`/videos/ai2cad/${view.image}.webp`} alt={chapter[en ? 'en' : 'de'].poster} fill priority={active === 1} sizes="(max-width: 980px) 92vw, 560px" />
      <span className={styles.imageLabel}>{en ? 'Original demonstration' : 'Original aus der Demonstration'}</span>
    </div>
    <div className={styles.controls} role="group" aria-label={en ? 'Choose a preview' : 'Einblick auswählen'}>
      {views.map((item, index) => <button key={item.id} type="button" aria-pressed={index === active} onClick={() => setActive(index)}><span>0{index + 1}</span>{item[en ? 'en' : 'de']}<ArrowUpRight size={14} aria-hidden="true" /></button>)}
    </div>
    <div className={styles.caption} aria-live="polite"><p>{en ? view.detailEn : view.detailDe}</p></div>
    <a className={styles.explore} href="#entwicklung-erleben">{en ? 'Explore all five video chapters' : 'Die fünf Videoschritte entdecken'}<ArrowDown size={18} aria-hidden="true" /></a>
  </div>;
}
