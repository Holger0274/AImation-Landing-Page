'use client';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { PRICING } from '@/lib/data/pricing';
import { Link } from '@/i18n/navigation';

const stages = ['erstgespraech', 'analyse', 'konzept', 'umsetzung', 'begleitung'] as const;

export default function Process() {
  const t = useTranslations('process');
  const en = useLocale() === 'en';
  const money = (n: number) => new Intl.NumberFormat(en ? 'en-GB' : 'de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
  const prices = [en ? 'Free' : 'Kostenlos', (en ? 'From ' : 'Ab ') + money(PRICING.kiLandkarte.priceFrom), money(PRICING.pilot.price), (en ? 'From ' : 'Ab ') + money(PRICING.umsetzung.setupFrom), en ? 'Optional' : 'Nach Aufwand'];
  return (
    <section id="prozess" className="engineering-section process-section" aria-labelledby="process-heading">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro">
            <p className="technical-label">{en ? 'How we work together' : 'So läuft die Zusammenarbeit'}</p>
            <h2 id="process-heading">{t('headline')} <span className="highlight">{t('headlineHighlight')}</span></h2>
          </div>
          <p className="section-heading-body">{t('subline')}</p>
        </div>
        <ol className="process-roadmap">
          {stages.map((id, i) => (
            <li className="roadmap-stage" key={id}>
              <span className="roadmap-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="roadmap-content">
                <h3>{t(`steps.${id}.title`)}</h3>
                <p className="roadmap-duration">{t(`steps.${id}.duration`)}</p>
                <p className="roadmap-description">{t(`steps.${id}.description`)}</p>
                <div className="roadmap-cost">
                  <p className="roadmap-price">{prices[i]}</p>
                  {i === 3 && <p className="roadmap-recurring">{en ? 'Plus ' : 'Zzgl. '}{money(PRICING.umsetzung.monthlyFrom)} {en ? 'to' : 'bis'} {money(PRICING.umsetzung.monthlyTo)}{en ? '/month' : '/Monat'}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="process-options">
          <p>{t('directPilot')}</p>
          <p>{t('training')} <Link href="/ki-schulungen-mittelstand">{t('trainingLink')} <span aria-hidden="true">↗</span></Link></p>
        </div>
        <div className="section-footnote">
          <p>{t('ctaText')}</p>
          <a className="engineering-text-link" href="#kontakt">{t('ctaButton')}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
