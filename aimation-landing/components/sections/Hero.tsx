'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';
import SketchFilm from '@/components/ai2cad/SketchFilm';
import TechnicalAtmosphere from '@/components/visuals/TechnicalAtmosphere';
import styles from './Hero.module.css';

export default function Hero() {
  const en = useLocale() === 'en';
  const t = useTranslations('hero');
  const { openLeadForm } = useLeadForm();

  return (
    <section className="engineering-hero atmosphere-section" aria-labelledby="hero-heading">
      <TechnicalAtmosphere motif="assembly" />
      <div className={`engineering-wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-heading">{t('headlineStart')}<span className="highlight">{t('headlineHighlight')}</span>{t('headlineEnd')}</h1>
          <p>{t('subline')}</p>
          <button type="button" className="engineering-button" onClick={openLeadForm}>
            {t('cta')}<ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
        <SketchFilm en={en} />
      </div>
    </section>
  );
}
