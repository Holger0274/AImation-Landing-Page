'use client';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';
import EngineeringDrawing from '@/components/visuals/EngineeringDrawing';

export default function Hero() {
  const t = useTranslations('hero');
  const en = useLocale() === 'en';
  const { openLeadForm } = useLeadForm();
  return (
    <section className="engineering-hero" aria-labelledby="hero-heading">
      <div className="engineering-wrap">
        <div className="hero-kicker"><span className="status-dot" aria-hidden="true" />{t('badge')}</div>
        <div className="engineering-hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading">{t('headlineStart')}<span className="highlight">{t('headlineHighlight')}</span>{t('headlineEnd')}</h1>
            <p className="hero-description">{t('subline')}</p>
            <div className="hero-actions">
              <button className="engineering-button" onClick={openLeadForm}>{t('cta')}<ArrowUpRight size={19} aria-hidden="true" /></button>
              <button className="engineering-text-link" onClick={() => document.querySelector<HTMLButtonElement>('[data-roi-calculator-trigger]')?.click()}>{t('ctaSecondary')}<ArrowUpRight size={16} aria-hidden="true" /></button>
            </div>
            <p className="hero-microcopy">{t('ctaMicrocopy')}</p>
          </div>
          <EngineeringDrawing />
        </div>
        <div className="hero-footline">
          <p>{t('trustLine')}</p>
          <a href="#ki-landkarte" className="hero-explore">{en ? 'Discover the approach' : 'Vorgehen entdecken'}<ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
