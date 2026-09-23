'use client';
import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function About() {
  const t = useTranslations('about');
  const en = useLocale() === 'en';
  return (
    <section id="ueber-mich" className="engineering-section">
      <div className="engineering-wrap">
        <div className="about-layout">
          <figure className="about-portrait">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line"><Image src="/images/about-holger.png" alt={en ? 'Holger Peschke and his son working together at a laptop' : 'Holger Peschke mit seinem Sohn bei der gemeinsamen Arbeit am Laptop'} fill sizes="(max-width: 900px) 90vw, 400px" className="object-contain" /></div>
            <figcaption><strong>Holger Peschke</strong><span>{en ? 'Founder · AImation' : 'Gründer · AImation'}</span></figcaption>
          </figure>
          <div className="section-intro">
            <p className="technical-label">{t('overline')}</p>
            <h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span></h2>
            <h3 className="about-subheading">{t('introHeadline')} {t('introHighlight')}</h3>
            <p>{t('introText')}</p>
            {t('mainText') && <p className="mt-5">{t('mainText')}</p>}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
              <a href="#kontakt" className="engineering-text-link">{t('ctaPrimary')}<ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="https://linkedin.com/in/holgerpeschke" target="_blank" rel="noopener noreferrer" className="engineering-text-link">{t('ctaLinkedIn')}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <p className="technical-label mt-14 mb-5">{t('differentiatorsLabel')}</p>
        <div className="about-principles">{(t.raw('differentiators') as string[]).map(text => <p key={text}>{text}</p>)}</div>
        <Link href="/facts/aimation" className="engineering-text-link mt-7">{en ? 'Company facts about AImation UG' : 'Unternehmensdaten und Fakten zu AImation UG'}<ArrowUpRight size={14} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
