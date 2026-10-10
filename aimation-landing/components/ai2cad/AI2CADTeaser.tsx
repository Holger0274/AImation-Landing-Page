import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { AI2CAD_PATH, AI2CAD_CHAPTERS } from '@/lib/data/ai2cad';
import styles from './ai2cad.module.css';

export default function AI2CADTeaser({ locale }: { locale: string }) {
  const en = locale === 'en';
  return <section className={styles.teaserSection} aria-labelledby="ai2cad-teaser-heading">
    <div className="engineering-wrap"><Link href={AI2CAD_PATH} className={styles.teaser}>
      <div className={styles.teaserCopy}><p className={styles.eyebrow}>AI2CAD + AI2CAE · {en ? 'Design and analysis' : 'Konstruktion und Berechnung'}</p><h2 id="ai2cad-teaser-heading">{en ? 'A CAD model.\n' : 'Ein CAD-Modell.\n'}<span className="highlight">{en ? 'Zero' : 'Null'}</span>{en ? ' mouse clicks.' : ' Mausklicks.'}</h2><p>{en ? 'A large language model controls the CAD system: every parameter, the geometry and the drawing. AI2CAE now adds FEM analysis and comparison with a hand calculation.' : 'Ein Large Language Model steuert das CAD-System: alle Parameter, die Geometrie und die Zeichnung. AI2CAE ergänzt jetzt die FEM-Berechnung und den Vergleich mit der Handrechnung.'}</p><span className={styles.teaserLink}>{en ? 'Explore CAD and FEM' : 'CAD und FEM in Aktion erleben'}<ArrowUpRight size={20} aria-hidden="true" /></span><span className={styles.teaserMeta}>{AI2CAD_CHAPTERS.length} {en ? 'videos' : 'Videos'} · {en ? 'Own development work' : 'Aus eigener Entwicklung'}</span></div>
      <div className={styles.teaserVisual}>
        <Image className={styles.teaserDrawing} src="/videos/ai2cad/welle-zeichnung.webp" alt={en ? 'Technical drawing of a stepped shaft with dimensions and tolerances' : 'Technische Zeichnung einer Stufenwelle mit Bemaßung und Toleranzen'} width={1335} height={943} sizes="(max-width: 760px) 90vw, 650px" />
        <span className={styles.teaserInset}>
          <Image src="/videos/ai2cad/fem.webp" alt={en ? 'Additional FEM analysis of the shaft under a 1,500 N load' : 'Ergänzende FEM-Berechnung der Welle unter 1.500 N Last'} width={1920} height={1080} sizes="200px" />
          <span className={styles.teaserInsetLabel}><Play size={12} fill="currentColor" aria-hidden="true" />AI2CAE · FEM</span>
        </span>
      </div>
    </Link></div>
  </section>;
}
