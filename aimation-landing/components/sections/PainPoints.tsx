'use client';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { trackSpotlight } from '@/components/visuals/SpotlightPanel';

const compactStatsConfig = [
  { id: 'knowledge', icon: Brain, imagePath: '/images/knowledge-loss.webp', imageAlt: 'Wissensverlust in der Entwicklungsabteilung - Erfahrung geht mit dem Mitarbeiter verloren' },
  { id: 'reporting', icon: FileSpreadsheet, imagePath: '/images/excel-chaos.webp', imageAlt: 'Ingenieure schreiben Berichte und Protokolle statt zu entwickeln' },
  { id: 'requests', icon: Clock, imagePath: '/images/time-waste.webp', imageAlt: 'Technische Anfragen und Änderungsanträge warten zu lange auf Bearbeitung' },
  { id: 'searching', icon: AlertTriangle, imagePath: '/images/quality-issues.webp', imageAlt: 'Dokumente über viele Systeme verteilt - Wissen geht verloren, Fehler wiederholen sich' },
  { id: 'research', icon: TrendingDown, imagePath: '/images/cost-waste.webp', imageAlt: 'Manuelle Recherche zu Normen und Patenten ist zeitaufwendig und fehleranfällig' },
  { id: 'competition', icon: TrendingUp, imagePath: '/images/competition.webp', imageAlt: 'Wettbewerber automatisiert Entwicklungsprozesse während andere noch abwarten' },
] as const;


export default function PainPoints() {
  const t = useTranslations('painPoints');
  const en = useLocale() === 'en';
  return (
    <section className="engineering-section" id="herausforderungen">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro"><p className="technical-label">{en ? 'The engineering day-to-day' : 'Alltag in der Entwicklung'}</p><h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span> {t('headlineEnd')}</h2></div>
          <div className="section-heading-body"><p>{t('body1')}</p><p>{t('body2')}</p><button className="engineering-text-link mt-4" onClick={() => document.querySelector<HTMLButtonElement>('[data-roi-calculator-trigger]')?.click()}>{t('roiLink')}<ArrowUpRight size={16} aria-hidden="true" /></button></div>
        </div>
        <div className="pain-grid">
          {compactStatsConfig.map(({ id, icon: Icon, imagePath, imageAlt }) => (
            <Dialog key={id}>
              <DialogTrigger asChild>
                <button className={`spot-card pain-card ${id === 'knowledge' ? 'pain-card-featured' : ''}`} onPointerMove={trackSpotlight}>
                  <span className="pain-card-top"><Icon size={22} strokeWidth={1.5} aria-hidden="true" />{id === 'knowledge' && <span>{t('anchorBadge')}</span>}<ArrowUpRight size={17} className="pain-card-arrow" aria-hidden="true" /></span>
                  <span className="pain-title">{t(`stats.${id}.title`)}</span>
                  <span className="pain-description">{t(`stats.${id}.description`)}</span>
                  <span className="pain-hint">{t('clickHint')}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100%-32px)] max-w-3xl p-6 md:p-8">
                <DialogTitle className="pr-10">{t(`stats.${id}.title`)}</DialogTitle>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden"><Image src={imagePath} alt={imageAlt} fill sizes="(max-width: 768px) 90vw, 700px" className="object-cover" /></div>
                <p className="technical-label">{en ? 'Illustration' : 'Illustration'}</p>
                <DialogDescription>{t(`stats.${id}.description`)}</DialogDescription>
                {t(`stats.${id}.source`) && <p className="text-xs text-dim">{t('quellePrafix')} {t(`stats.${id}.source`)}</p>}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
