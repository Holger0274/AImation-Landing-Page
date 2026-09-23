'use client';
import { ArrowUpRight, Plus, GraduationCap, Lightbulb, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import SpotlightPanel from '@/components/visuals/SpotlightPanel';

const services = [
  { id: 'schulungen', icon: GraduationCap, href: '/ki-schulungen-mittelstand' },
  { id: 'beratung', icon: Lightbulb, href: '/ki-beratung-kmu' },
  { id: 'umsetzung', icon: Zap, href: '/ki-automatisierung-mittelstand' },
] as const;

export default function Services() {
  const t = useTranslations('services');
  return (
    <section id="leistungen" className="engineering-section">
      <div className="engineering-wrap">
        <div className="section-intro section-intro-wide">
          <h2>{t('headline')} <span className="highlight">{t('headlineHighlight')}</span>{t('headlineEnd')}</h2>
          <p>{t('subline')}</p>
        </div>
        <div className="service-rows">
          {services.map(({ id, icon: Icon, href }) => {
            const item = t.raw(`items.${id}`) as { title: string; subtitle: string; description: string; features: string[]; backFeatures?: string[]; detail: string };
            const examples = t.raw(`useCases.${id}`) as { title: string; description: string; result: string }[];
            return (
              <SpotlightPanel className="service-row" key={id}>
                <div className="service-identity"><Icon size={25} strokeWidth={1.4} aria-hidden="true" /><h3>{item.title}</h3><p>{item.subtitle}</p><Link href={href} className="engineering-text-link">{t('moreInfo')}<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
                <div className="service-description"><p>{item.description}</p><ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p className="service-detail">{item.detail}</p>
                  <details className="service-examples"><summary>{t('practiceExamples')}<Plus size={16} aria-hidden="true" /></summary>
                    {item.backFeatures && <ul>{item.backFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul>}
                    <div className="service-example-grid">{examples.map(example => <article key={example.title}><h4>{example.title}</h4><p>{example.description}</p><p className="text-ink">{example.result}</p></article>)}</div>
                    <a href="#kontakt" className="engineering-text-link">{t('similarProject')}<ArrowUpRight size={16} aria-hidden="true" /></a>
                  </details>
                </div>
              </SpotlightPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
