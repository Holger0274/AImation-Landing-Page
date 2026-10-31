'use client';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { PRICING } from '@/lib/data/pricing';
import { useLeadForm } from '@/components/LeadFormProvider';
import HeroWorkbench from '@/components/visuals/HeroWorkbench';
import { Link } from '@/i18n/navigation';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');
  const en = useLocale() === 'en';
  const duration = en ? PRICING.erstgespraech.duration.toLowerCase() : PRICING.erstgespraech.duration;
  const { openLeadForm } = useLeadForm();
  return (
    <section className="engineering-hero" aria-labelledby="hero-heading">
      <div className="engineering-wrap">
        <div className={`engineering-hero-grid ${styles.grid}`}>
          <div className={`hero-copy ${styles.copy}`}>
            <h1 id="hero-heading">{t('headlineStart')}<span className="highlight">{t('headlineHighlight')}</span>{t('headlineEnd')}</h1>
            <p className="hero-description">{t('subline')}</p>
            <p className="hero-privacy">{t('privacy')}</p>
            <div className="hero-actions">
              <button className="engineering-button" onClick={openLeadForm}><span>{t('cta', { duration: duration.replace(/ /g, '\u00a0') })}</span><ArrowUpRight size={19} aria-hidden="true" /></button>
              <a className="engineering-text-link" href="#entwicklung-erleben">{en ? 'Explore the development work' : 'Entwicklungsarbeit entdecken'}<ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero-microcopy">{t('ctaMicrocopy')}</p>
          </div>
          <div className={styles.visual}><HeroWorkbench /></div>
          <div className={styles.support}>
            <p className="hero-promise">{t('promise')}</p>
            <nav className="hero-topics" aria-label={t('topicsLabel')}>
              <p>{t('topicsLabel')}</p>
              <ul>
                <li><Link href="/use-cases/knowledge-graph-management">{t('topicKnowledge')}<ArrowUpRight size={16} aria-hidden="true" /></Link></li>
                <li><Link href="/ai2cad">{t('topicCad')}<ArrowUpRight size={16} aria-hidden="true" /></Link></li>
                <li><Link href="/use-cases/projektsteuerung-entwicklung">{t('topicProjects')}<ArrowUpRight size={16} aria-hidden="true" /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hero-footline">
          <p>{t('trustLine')}</p>
          <a className="engineering-text-link" href={`${en ? '/en' : ''}/wirtschaftlichkeit#zeitpotenzial`}>{t('ctaSecondary')}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
