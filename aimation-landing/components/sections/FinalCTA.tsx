'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';
import ROICalculator from '@/components/ROICalculator/ROICalculator';

export default function FinalCTA() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const { openLeadForm } = useLeadForm();
  const t = useTranslations('finalCta');
  return (
    <section id="kontakt" className="engineering-section closing-section">
      <div className="engineering-wrap closing-layout">
        <div className="section-intro"><h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span> {t('headlineEnd')}</h2><p>{t('subline')}</p></div>
        <div className="closing-actions">
          <button onClick={openLeadForm} className="engineering-button">{t('ctaPrimary')}<ArrowUpRight size={18} aria-hidden="true" /></button>
          <p>{t('microcopy1')}</p>
          <button onClick={() => setIsCalculatorOpen(true)} data-roi-calculator-trigger className="engineering-text-link">{t('ctaSecondary')}<ArrowUpRight size={16} aria-hidden="true" /></button>
          <p>{t('microcopy2')}</p>
        </div>
      </div>
      <ROICalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} calendlyUrl="https://calendly.com/holgerpeschke-hp/erstgespraech" />
    </section>
  );
}
