'use client';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { PRICING } from '@/lib/data/pricing';

const stages = ['erstgespraech', 'analyse', 'konzept', 'umsetzung', 'begleitung'] as const;

export default function Process() {
  const t = useTranslations('process');
  const en = useLocale() === 'en';
  const money = (n: number) => new Intl.NumberFormat(en ? 'en-GB' : 'de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
  const prices = [en ? 'Free' : 'Kostenlos', (en ? 'From ' : 'Ab ') + money(PRICING.kiLandkarte.priceFrom), money(PRICING.pilot.price), (en ? 'From ' : 'Ab ') + money(PRICING.umsetzung.setupFrom), en ? 'Optional' : 'Nach Aufwand'];
  return (
    <section id="prozess" className="engineering-section">
      <div className="engineering-wrap process-layout">
        <div className="section-intro">
          <p className="technical-label">{en ? 'Our approach' : 'Zusammenarbeit'}</p>
          <h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span> {t('headlineEnd')}</h2>
          <p>{t('subline')}</p>
          <p className="mt-8 text-sm text-muted">{t('ctaText')}</p>
          <a className="engineering-text-link mt-4" href="#kontakt">{t('ctaButton')}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="process-list">
          {stages.map((id, i) => (
            <details className="process-step" key={id} open={i === 1}>
              <summary>
                <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-title"><strong>{t(`steps.${id}.title`)}</strong><small>{t(`steps.${id}.duration`)}</small></span>
                <span className="step-price">{prices[i]}</span>
                <Plus size={16} className="step-expand" aria-hidden="true" />
              </summary>
              <div className="step-body">
                <p className="technical-label mb-3">{t(`steps.${id}.subtitle`)}</p>
                <p>{t(`steps.${id}.description`)}</p>
                <ul>{(t.raw(`steps.${id}.details`) as string[]).map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
