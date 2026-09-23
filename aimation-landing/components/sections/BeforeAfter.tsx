'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Minus } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';
import WissenVorherNachher from '@/components/diagrams/WissenVorherNachher';
import AgentHumanLoop from '@/components/diagrams/AgentHumanLoop';
import ResearchRadar from '@/components/diagrams/ResearchRadar';

const ids = ['knowledge', 'workflow', 'research'] as const;

export default function BeforeAfter() {
  const [active, setActive] = useState<typeof ids[number]>('knowledge');
  const t = useTranslations('beforeAfter');
  const en = useLocale() === 'en';
  const { openLeadForm } = useLeadForm();
  return (
    <section className="engineering-section">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro"><p className="technical-label">{en ? 'What changes in practice' : 'Was sich konkret verändert'}</p><h2>{t('headline')} {t('headlineChao')} {t('headlineMid')} <span className="highlight">{t('headlineHighlight')}</span></h2></div>
          <div className="section-heading-body"><p>{t('subline')}</p><p className="text-sm">{t('qktIntro')}</p></div>
        </div>
        <div className="comparison-tabs" role="group" aria-label={en ? 'Choose a use case' : 'Anwendungsfall wählen'}>
          {ids.map(id => <button key={id} aria-pressed={id === active} onClick={() => setActive(id)}>{t(`transformations.${id}.title`)}</button>)}
        </div>
        <div className="comparison-diagram">
          {active === 'knowledge' && <WissenVorherNachher variant="dark" className="w-full h-auto" />}
          {active === 'workflow' && <AgentHumanLoop variant="dark" className="w-full h-auto" />}
          {active === 'research' && <ResearchRadar variant="dark" className="w-full h-auto" />}
        </div>
        <div className="comparison-grid" aria-live="polite">
          {(['before', 'after'] as const).map(type => {
            const after = type === 'after';
            const Icon = after ? Check : Minus;
            return <article key={type} className={`comparison-panel ${after ? 'comparison-after' : ''}`}>
              <span className="technical-label">{t(after ? 'labelLoesung' : 'labelProblem')}</span>
              <h3>{t(`transformations.${active}.${type}.title`)}</h3>
              <p>{t(`transformations.${active}.${type}.${after ? 'gain' : 'pain'}`)}</p>
              <ul>{(t.raw(`transformations.${active}.${type}.${after ? 'benefits' : 'problems'}`) as string[]).map(text => <li key={text}><Icon size={15} aria-hidden="true" /><span>{text}</span></li>)}</ul>
              {after && <p className="comparison-result">{t(`transformations.${active}.after.roi`)}</p>}
            </article>;
          })}
        </div>
        <div className="section-footnote"><p>{t('ctaText')}</p><button onClick={openLeadForm} className="engineering-text-link">{t('ctaButton')}<ArrowUpRight size={16} aria-hidden="true" /></button></div>
      </div>
    </section>
  );
}
