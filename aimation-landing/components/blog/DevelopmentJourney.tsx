import Link from 'next/link';
import { ClipboardList, BookOpen, Box, Settings, ClipboardCheck, ArrowUpRight, RotateCcw } from 'lucide-react';
import type { JourneyArticle } from '@/lib/data/product-development-article';
import s from './engineering-article.module.css';
const icons = [ClipboardList, BookOpen, Box, Settings, ClipboardCheck];
export default function DevelopmentJourney({ article }: { article: JourneyArticle }) {
  return <div className={s.explainer}>
    <div className={s.consoleHeader}><span>AImation / Vom Auftrag zur Prüfung</span><span>5 Stationen zum Entdecken</span></div>
    <ol className={s.developmentChain} aria-label="Stationen der Produktentwicklung">
      {article.journey.map((stage, index) => { const Icon = icons[index]; return <li key={stage.section}>
        <details open={index === 0}>
          <summary><span className={s.phaseNumber}>0{index + 1}<Icon size={24} aria-hidden="true" /></span><strong>{stage.label}</strong><span className={s.phaseQuestion}>{stage.question}</span><span className={s.phaseAction}>Einblick und Beispiele <span aria-hidden="true">+</span></span></summary>
          <div className={s.phaseDetail}><p>{stage.result}</p><Link href={stage.link.href}>{stage.link.label}<ArrowUpRight size={16} aria-hidden="true" /></Link><a href={`#${stage.section}`}>Einordnung im Artikel ↓</a></div>
        </details>
      </li>; })}
    </ol>
    <p className={s.feedbackLoop}><RotateCcw size={20} aria-hidden="true" />Rückfragen und Prüfergebnisse führen zurück zu früheren Stationen.</p>
    <p className={s.visualNote}>Schematische Orientierung. Die verlinkten Demonstrationen zeigen eigenständige Beispiele und kein durchgängig entwickeltes Produkt.</p>
  </div>;
}
