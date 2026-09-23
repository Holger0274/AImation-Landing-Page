'use client';
import { ArrowUpRight, Check } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';
import SpotlightPanel from '@/components/visuals/SpotlightPanel';
import { PRICING } from '@/lib/data/pricing';

export default function KiLandkarte() {
  const t = useTranslations('kiLandkarte');
  const en = useLocale() === 'en';
  const { openLeadForm } = useLeadForm();
  const price = new Intl.NumberFormat(en ? 'en-GB' : 'de-DE', { maximumFractionDigits: 0 }).format(PRICING.kiLandkarte.priceFrom);
  return (
    <section id="ki-landkarte" className="engineering-section">
      <div className="engineering-wrap">
        <SpotlightPanel className="landkarte-panel">
          <div className="section-intro">
            <p className="technical-label">{en ? 'A clear starting point' : 'Ihr Einstieg'}</p>
            <h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span></h2>
            <p>{t('body')}</p>
            <button className="engineering-button mt-8" onClick={openLeadForm}>{t('cta')}<ArrowUpRight size={18} aria-hidden="true" /></button>
          </div>
          <div className="landkarte-deliverables">
            <div className="document-heading"><span>{en ? 'Scope of work' : 'Leistungsumfang'}</span><span>AImation</span></div>
            {[t('check1'), t('check2')].map(check => <div className="deliverable" key={check}><Check size={17} aria-hidden="true" /><p>{check}</p></div>)}
            <div className="landkarte-price"><span className="technical-label">{en ? 'Fixed price from' : 'Festpreis ab'}</span><strong>{price}<small> EUR</small></strong><p>{t('check3')}</p></div>
          </div>
        </SpotlightPanel>
      </div>
    </section>
  );
}
