import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { ASSEMBLY_VIDEO } from '@/lib/data/assembly-video';
import { ASSEMBLY_INSTRUCTIONS_VIDEO } from '@/lib/data/assembly-instructions-video';
import styles from './EngineeringExtensions.module.css';

export default function AssemblyPreview({ en, previous = false }: { en: boolean; previous?: boolean }) {
  const video = previous ? ASSEMBLY_VIDEO : ASSEMBLY_INSTRUCTIONS_VIDEO;
  const copy = video[en ? 'en' : 'de'];
  const label = previous ? (en ? 'The starting point · Part 8' : 'Der Ausgangspunkt · Teil 8') : (en ? 'Continue with part 9' : 'Weiter mit Teil 9');
  return <aside aria-label={label}>
    <Link href={`/ai2cad/${video.slug}`} className={styles.continuation}>
      <div className={styles.continuationMedia}>
        <Image src={`/videos/ai2cad/${video.id}.webp`} alt={copy.poster} width={1920} height={1080} sizes="(max-width: 700px) 90vw, 240px" />
        <span><Play size={14} aria-hidden="true" />{video.duration}</span>
      </div>
      <div><p className="technical-label">{label}</p><h3>{copy.short}<ArrowUpRight size={20} aria-hidden="true" /></h3><p>{copy.teaser}</p><span className={styles.seriesLink}>{en ? `Watch part ${Number(video.number)}` : `Teil ${Number(video.number)} ansehen`} →</span></div>
    </Link>
  </aside>;
}
