import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowUpRight } from 'lucide-react';
import type { VideoArticle } from '@/lib/data/video-articles';
import s from './engineering-article.module.css';

export default function VideoWalkthrough({ article }: { article: VideoArticle }) {
  return <div className={s.explainer}>
    <div className={s.consoleHeader}><span>AImation / {article.tag}</span><span>Eigene Video-Demonstration</span></div>
    <div className={s.videoJourney}>
      <figure>
        <Link href={article.videoHref} className={s.videoPreview} aria-label={article.videoLabel}>
          <Image src={article.poster} alt={article.posterAlt} width={1920} height={1080} sizes="(max-width: 950px) 90vw, 650px" />
          <span><Play size={22} aria-hidden="true" />{article.videoLabel}</span>
        </Link>
        <figcaption>Originalbild aus der Demonstration. Das Video öffnet auf seiner eigenen Seite.</figcaption>
      </figure>
      <div className={s.journeySteps}>
        {article.steps.map((step, index) => <details key={step.label} open={index === 0}>
          <summary><span className={s.nodeLabel}>0{index + 1}</span>{step.label}<span className={s.stepToggle} aria-hidden="true">+</span></summary>
          <div><p>{step.result}</p><p className={s.stepReview}><strong>Ihre Prüffrage</strong>{step.review}</p><Link href={step.href}>{step.linkLabel}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </details>)}
      </div>
    </div>
    <p className={s.visualNote}>Die Stationen ordnen die gezeigten Videos ein. Hier wird keine Live-Simulation ausgeführt.</p>
  </div>;
}
