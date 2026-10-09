import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { AI2CAD_PATH } from '@/lib/data/ai2cad';
import styles from './ai2cad.module.css';

export default function AI2CADTeaser({ locale }: { locale: string }) {
  const en = locale === 'en';
  return <section className={styles.teaserSection} aria-labelledby="ai2cad-teaser-heading">
    <div className="engineering-wrap"><Link href={AI2CAD_PATH} className={styles.teaser}>
      <div className={styles.teaserCopy}><p className={styles.eyebrow}>AI2CAD · {en ? 'New demonstration' : 'Neue Demonstration'}</p><h2 id="ai2cad-teaser-heading">{en ? 'A CAD model.\n' : 'Ein CAD-Modell.\n'}<span className="highlight">{en ? 'Zero' : 'Null'}</span>{en ? ' mouse clicks.' : ' Mausklicks.'}</h2><p>{en ? 'A large language model controls the CAD system: every parameter, the geometry and the drawing. Watch the process in four videos.' : 'Ein Large Language Model steuert das CAD-System: alle Parameter, die Geometrie und die Zeichnung. Sehen Sie den Ablauf in vier Videos.'}</p><span className={styles.teaserLink}>{en ? 'Explore AI2CAD' : 'AI2CAD in Aktion erleben'}<ArrowUpRight size={20} aria-hidden="true" /></span><span className={styles.teaserMeta}>4 {en ? 'videos' : 'Videos'} · {en ? 'Own development work' : 'Aus eigener Entwicklung'}</span></div>
      <div className={styles.teaserVisual}><Image src="/videos/ai2cad/welle-zeichnung.webp" alt={en ? 'Technical drawing of the shaft created in the demonstration' : 'Technische Zeichnung der in der Demonstration erstellten Welle'} width={1335} height={943} sizes="(max-width: 760px) 90vw, 650px" /><span className={styles.teaserPlay}><Play size={20} fill="currentColor" aria-hidden="true" /></span></div>
    </Link></div>
  </section>;
}
