'use client';
import { FileSpreadsheet, Brain, Clock, TrendingDown, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { trackSpotlight } from '@/components/visuals/SpotlightPanel';
import PainSchematic from '@/components/visuals/PainSchematic';

const compactStatsConfig = [
  { id: 'knowledge', icon: Brain, imagePath: '/images/editorial/knowledge-loss.webp', imageAlt: 'Illustration: Ein erfahrener Ingenieur geht, während eine Kollegin seine Bauteilnotizen prüft' },
  { id: 'reporting', icon: FileSpreadsheet, imagePath: '/images/editorial/reporting-v2.png', imageAlt: 'Illustration: Stapel technischer Berichte auf einem Zeichentisch' },
  { id: 'requests', icon: Clock, imagePath: '/images/editorial/requests-v2.png', imageAlt: 'Illustration: Technische Zeichnung mit markierten Änderungen' },
  { id: 'searching', icon: AlertTriangle, imagePath: '/images/editorial/searching.webp', imageAlt: 'Illustration: Abweichende Zeichnungsstände in Ordner, Laptop und Papierablage' },
  { id: 'research', icon: TrendingDown, imagePath: '/images/editorial/research.webp', imageAlt: 'Manuelle Recherche zu Normen und Patenten ist zeitaufwendig und fehleranfällig' },
  { id: 'competition', icon: TrendingUp, imagePath: '/images/editorial/competition-v2.png', imageAlt: 'Illustration: Präzisionsgehäuse auf einer industriellen Fertigungslinie' },
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
                  <span className="pain-card-image">{id === 'searching' || id === 'research' ? <PainSchematic type={id}/> : <Image src={imagePath} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" />}</span>
                  <span className="pain-card-top"><Icon size={22} strokeWidth={1.5} aria-hidden="true" />{id === 'knowledge' && <span>{t('anchorBadge')}</span>}<ArrowUpRight size={17} className="pain-card-arrow" aria-hidden="true" /></span>
                  <span className="pain-title">{t(`stats.${id}.title`)}</span>
                  <span className="pain-description">{t(`stats.${id}.description`)}</span>
                  <span className="pain-hint">{en ? 'View illustration' : 'Motiv ansehen'} →</span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100%-32px)] max-w-3xl p-6 md:p-8">
                <DialogTitle className="pr-10">{t(`stats.${id}.title`)}</DialogTitle>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">{id === 'searching' || id === 'research' ? <PainSchematic type={id}/> : <Image src={imagePath} alt={en ? `Illustration: ${t(`stats.${id}.title`)}` : imageAlt} fill sizes="(max-width: 768px) 90vw, 700px" className="object-cover" />}</div>
                <p className="technical-label">{id === 'searching' || id === 'research' ? (en ? 'Schematic illustration' : 'Schematische Darstellung') : (en ? 'AI-generated illustration' : 'KI-generierte Illustration')}</p>
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
