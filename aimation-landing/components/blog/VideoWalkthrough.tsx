import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowUpRight } from 'lucide-react';
import type { VideoArticle } from '@/lib/data/video-articles';
import flow from './FilmProcess.module.css';
import s from './engineering-article.module.css';

export default function VideoWalkthrough({ article }: { article: VideoArticle }) {
  if (article.steps.every(step => step.frame)) {
    return <div className={flow.film}>
      <ol className={flow.stations} aria-labelledby="visual-title">
        {article.steps.map((step, index) => <li key={step.label}>
          <details open={index === 0}>
            <summary>
              <span className={flow.station}>{step.frame!.station}</span>
              <span className={flow.still}><Image
                src={step.frame!.image}
                alt={step.frame!.alt} fill sizes="(max-width: 680px) 150px, 260px" /></span>
              <span className={flow.label}>{step.label}<span aria-hidden="true" className={flow.toggle}>+</span></span>
            </summary>
            <div className={flow.note}><p>{step.result}</p><Link href={step.href}>{step.linkLabel}<ArrowUpRight size={15} aria-hidden="true" /></Link></div>
          </details>
        </li>)}
      </ol>
      <footer><span>Originalbilder aus der CAD-Demo</span>
        <Link href={article.videoHref}><Play size={15} aria-hidden="true" />{article.videoLabel}</Link>
      </footer>
    </div>;
  }
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
