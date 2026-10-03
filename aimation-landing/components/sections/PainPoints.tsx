'use client';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { trackSpotlight } from '@/components/visuals/SpotlightPanel';
import PainSchematic from '@/components/visuals/PainSchematic';
import ImageOriginLabel from '@/components/ui/ImageOriginLabel';
import { Link } from '@/i18n/navigation';

const knowledgeImage = '/images/editorial/knowledge-loss.webp';
const compactStatsConfig = [
  { id: 'reporting', icon: FileSpreadsheet },
  { id: 'knowledge', icon: Brain },
  { id: 'requests', icon: Clock },
  { id: 'searching', icon: AlertTriangle },
  { id: 'research', icon: TrendingDown },
  { id: 'competition', icon: TrendingUp },
] as const;

export default function PainPoints() {
  const t = useTranslations('painPoints');
  const en = useLocale() === 'en';
  return (
    <section className="engineering-section" id="herausforderungen">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro"><h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span> {t('headlineEnd')}</h2></div>
          <div className="section-heading-body"><p>{t('body1')}</p><p>{t('body2')}</p><a className="engineering-text-link mt-4" href="#zeitpotenzial">{t('roiLink')}<ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
        <blockquote className="pain-routine-quote">
          <p className="pain-routine-quote-line">{t('routineQuote')}</p>
          <p className="pain-routine-quote-context">{t('routineContext')}</p>
        </blockquote>
        <div className="pain-grid">
          {compactStatsConfig.map(({ id, icon: Icon }) => (
            <Dialog key={id}>
              <DialogTrigger asChild>
                <button className={`spot-card pain-card ${id === 'reporting' ? 'pain-card-featured' : ''}`} onPointerMove={trackSpotlight}>
                  <span className="pain-card-image">{id !== 'knowledge' ? <PainSchematic type={id}/> : <><Image src={knowledgeImage} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" /><ImageOriginLabel src={knowledgeImage} en={en}/></>}</span>
                  <span className="pain-card-top"><Icon size={22} strokeWidth={1.5} aria-hidden="true" />{id === 'reporting' && <span>{t('reportingBadge')}</span>}<ArrowUpRight size={17} className="pain-card-arrow" aria-hidden="true" /></span>
                  <span className="pain-title">{t(`stats.${id}.title`)}</span>
                  <span className="pain-description">{t(`stats.${id}.description`)}</span>
                  <span className="pain-hint">{en ? 'View illustration' : 'Motiv ansehen'} →</span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100%-32px)] max-w-3xl p-6 md:p-8">
                <DialogTitle className="pr-10">{t(`stats.${id}.title`)}</DialogTitle>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">{id !== 'knowledge' ? <PainSchematic type={id}/> : <><Image src={knowledgeImage} alt={en ? 'Illustration: an experienced engineer leaves while a colleague studies his component notes' : 'Illustration: Ein erfahrener Ingenieur geht, während eine Kollegin seine Bauteilnotizen prüft'} fill sizes="(max-width: 768px) 90vw, 700px" className="object-cover" /><ImageOriginLabel src={knowledgeImage} en={en}/></>}</div>
                {(id !== 'knowledge') && <p className="technical-label">{en ? 'Schematic example, not a software screenshot' : 'Schematisches Beispiel, kein Software-Screenshot'}</p>}
                <DialogDescription>{t(`stats.${id}.description`)}</DialogDescription>
                {t(`stats.${id}.source`) && <p className="text-xs text-dim">{t('quellePrafix')} {t(`stats.${id}.source`)}</p>}
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <Link href="/use-cases/excel-powerpoint-berichte" className="engineering-text-link mt-7">
          {en ? 'Excel, PowerPoint and meeting follow-up: explore a practical workflow' : 'Excel, PowerPoint und Meeting-Nacharbeit: So kann der Ablauf aussehen'}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
