import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { AI2CAD_PATH, AI2CAD_CHAPTERS } from '@/lib/data/ai2cad';
import ChapterPlayer from './ChapterPlayer';
import AutodeskMembership from '@/components/AutodeskMembership';
import styles from './ai2cad.module.css';

export default function AI2CADTeaser({ locale }: { locale: string }) {
  const en = locale === 'en';
  return <section id="entwicklung-erleben" className="engineering-section" aria-labelledby="ai2cad-teaser-heading">
    <div className="engineering-wrap">
      <div className={styles.experienceIntro}>
        <div>
          <p className={styles.eyebrow}>01 / AI2CAD + AI2CAE</p>
          <h2 id="ai2cad-teaser-heading">{en ? 'An idea becomes ' : 'Aus einer Idee wird '}<span className="highlight">{en ? 'geometry.' : 'Geometrie.'}</span></h2>
        </div>
        <div>
          <p>{en ? 'Start with a photo of a sketch. See the 3D view and STEP file return to the phone, or choose another CAD or FEM example.' : 'Starten Sie mit dem Handyfoto einer Skizze. Sehen Sie, wie die 3D-Ansicht und die STEP-Datei zurück aufs Handy kommen, oder wählen Sie ein anderes CAD- oder FEM-Beispiel.'}</p>
          <span className={styles.experienceMeta}>{AI2CAD_CHAPTERS.length} {en ? 'videos · Choose your starting point' : 'Videos · Ihr Einstieg ist frei wählbar'}</span>
        </div>
      </div>
      <ChapterPlayer en={en} immersive />
      <div className={styles.experienceFooter}>
        <p>{en ? 'Start with a sketch, inspect a drawing or jump straight to the FEM analysis.' : 'Beginnen Sie bei der Skizze, schauen Sie in die Zeichnung oder springen Sie direkt zur FEM-Berechnung.'}</p>
        <Link href={AI2CAD_PATH} className="engineering-text-link">{en ? 'Background and questions about CAD integration' : 'Hintergründe und Fragen zur CAD-Anbindung'}<ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
      <AutodeskMembership en={en} />
    </div>
  </section>;
}
