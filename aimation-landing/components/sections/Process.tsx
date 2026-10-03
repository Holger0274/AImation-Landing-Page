'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { PRICING } from '@/lib/data/pricing';
import { Link } from '@/i18n/navigation';

const stages = ['erstgespraech', 'analyse', 'konzept', 'umsetzung', 'begleitung'] as const;

export default function Process() {
  const t = useTranslations('process');
  const en = useLocale() === 'en';
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [dismissedHover, setDismissedHover] = useState<string | null>(null);
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({});
  const money = (n: number) => new Intl.NumberFormat(en ? 'en-GB' : 'de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
  const prices = [en ? 'Free' : 'Kostenlos', (en ? 'From ' : 'Ab ') + money(PRICING.kiLandkarte.priceFrom), money(PRICING.pilot.price), (en ? 'From ' : 'Ab ') + money(PRICING.umsetzung.setupFrom), en ? 'Time and materials' : 'Nach Aufwand'];
  return (
    <section id="prozess" className="engineering-section process-section" aria-labelledby="process-heading">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro">
            <h2 id="process-heading">{t('headline')} <span className="highlight">{t('headlineHighlight')}</span></h2>
          </div>
          <p className="section-heading-body">{t('subline')}</p>
        </div>
        <ol className="process-roadmap">
          {stages.map((id, i) => {
            const isOpen = expandedStages[id] || (hoveredStage === id && dismissedHover !== id);
            return (
            <li className="roadmap-stage" key={id} data-open={Boolean(isOpen)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setExpandedStages((current) => ({ ...current, [id]: false }));
                  setDismissedHover(id);
                }
              }}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') {
                  setHoveredStage(id);
                  setDismissedHover(null);
                }
              }}
              onPointerLeave={() => { setHoveredStage(null); setDismissedHover(null); }}
            >
              <div className="roadmap-heading">
                <span className="roadmap-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t(`steps.${id}.title`)}</h3>
              </div>
              <div className="roadmap-content">
                <p className="roadmap-duration">{t(`steps.${id}.duration`)}</p>
                <div className="roadmap-copy">
                  <p className="roadmap-outcome" aria-hidden={Boolean(isOpen)}>{t(`steps.${id}.outcome`)}</p>
                  <p className="roadmap-explanation" id={`roadmap-detail-${id}`} aria-hidden={!isOpen}>{t(`steps.${id}.description`)}</p>
                </div>
                <div className="roadmap-cost">
                  <p className={`roadmap-price${i === 0 ? ' roadmap-price-free' : ''}`}>{prices[i]}</p>
                  {i === 3 && <p className="roadmap-recurring">{en ? 'Plus ' : 'Zzgl. '}{money(PRICING.umsetzung.monthlyFrom)} {en ? 'to' : 'bis'} {money(PRICING.umsetzung.monthlyTo)}{en ? '/month' : '/Monat'}</p>}
                </div>
                <div className="roadmap-details" data-open={Boolean(isOpen)}>
                  <button type="button" aria-expanded={Boolean(isOpen)} aria-controls={`roadmap-detail-${id}`} onClick={() => {
                    setExpandedStages((current) => ({ ...current, [id]: !isOpen }));
                    setDismissedHover(isOpen ? id : null);
                  }}>{t('detailsLabel')}<span className="sr-only">: {t(`steps.${id}.title`)}</span><span className="roadmap-details-icon" aria-hidden="true">+</span></button>
                </div>
              </div>
            </li>
          ); })}
        </ol>
        <div className="process-options">
          <p>{t('directPilot')}</p>
          <p>{t('training')} <Link href="/ki-schulungen-mittelstand">{t('trainingLink')} <span aria-hidden="true">↗</span></Link></p>
        </div>
        <div className="process-offer-details">
          <details id="ki-landkarte">
            <summary>{en ? 'What you receive with the KI-Landkarte' : 'Was Sie mit der KI-Landkarte erhalten'}<span aria-hidden="true">+</span></summary>
            <p>{en ? 'In a workshop with your team, we review your workflows, data and systems. You receive two to three prioritised use cases with an ROI estimate and a written report within three to five days.' : 'In einem Workshop mit Ihrem Team prüfen wir Abläufe, Daten und Systeme. Sie erhalten zwei bis drei priorisierte Anwendungsfälle mit ROI-Schätzung und einen schriftlichen Bericht nach drei bis fünf Tagen.'}</p>
            <Link href="/ki-beratung-kmu" className="engineering-text-link">{en ? 'More about the workshop' : 'Mehr zum Workshop'}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </details>
          <details>
            <summary>{en ? 'When you can start directly with a pilot' : 'Wann Sie direkt mit einem Pilot starten können'}<span aria-hidden="true">+</span></summary>
            <p>{en ? 'If the first workflow is already clear, you can start with the four-week pilot. We agree the scope, test with your data and compare time spent and result quality. You then decide whether to proceed.' : 'Wenn der erste Ablauf bereits feststeht, können Sie mit dem vierwöchigen Pilot starten. Wir vereinbaren den Umfang, testen mit Ihren Daten und vergleichen Zeitaufwand und Ergebnisqualität. Danach entscheiden Sie über die Fortsetzung.'}</p>
            <Link href="/ki-automatisierung-mittelstand" className="engineering-text-link">{en ? 'More about implementation' : 'Mehr zur Umsetzung'}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </details>
        </div>
        <div className="section-footnote">
          <p>{t('ctaText')}</p>
          <a className="engineering-text-link" href="#kontakt">{t('ctaButton')}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
