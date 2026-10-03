'use client';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { PRICING } from '@/lib/data/pricing';
import { useLeadForm } from '@/components/LeadFormProvider';
import EngineeringDrawing from '@/components/visuals/EngineeringDrawing';

export default function Hero() {
  const t = useTranslations('hero');
  const duration = useLocale() === 'en' ? PRICING.erstgespraech.duration.toLowerCase() : PRICING.erstgespraech.duration;
  const { openLeadForm } = useLeadForm();
  return (
    <section className="engineering-hero" aria-labelledby="hero-heading">
      <div className="engineering-wrap">
        <div className="engineering-hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading">{t('headlineStart')}<span className="highlight">{t('headlineHighlight')}</span>{t('headlineEnd')}</h1>
            <p className="hero-description">{t('subline')}</p>
            <p className="hero-privacy">{t('privacy')}</p>
            <div className="hero-actions">
              <button className="engineering-button" onClick={openLeadForm}><span>{t('cta', { duration: duration.replace(/ /g, '\u00a0') })}</span><ArrowUpRight size={19} aria-hidden="true" /></button>
              <a className="engineering-text-link" href="#prozess">{t('processLink')}<ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero-microcopy">{t('ctaMicrocopy')}</p>
            <p className="hero-promise">{t('promise')}</p>
          </div>
          <EngineeringDrawing />
        </div>
        <div className="hero-footline">
          <p>{t('trustLine')}</p>
          <a className="engineering-text-link" href="#zeitpotenzial">{t('ctaSecondary')}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
