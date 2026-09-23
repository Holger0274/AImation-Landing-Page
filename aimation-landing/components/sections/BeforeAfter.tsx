'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useLeadForm } from '@/components/LeadFormProvider';
import ProcessComparison from '@/components/visuals/ProcessComparison';

const ids = ['knowledge', 'workflow', 'research'] as const;

export default function BeforeAfter() {
  const [active, setActive] = useState<typeof ids[number]>('knowledge');
  const t = useTranslations('beforeAfter');
  const en = useLocale() === 'en';
  const { openLeadForm } = useLeadForm();
  return (
    <section className="engineering-section" id="vorher-nachher">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro"><p className="technical-label">{en ? 'Before / after' : 'Vorher / Nachher'}</p><h2>{en ? 'Less preparation.' : 'Weniger Vorarbeit.'}<br/><span className="highlight">{en ? 'More development.' : 'Mehr Entwicklung.'}</span></h2></div>
          <div className="section-heading-body"><p>{en ? 'AI takes on searching, sorting and drafting. Your team reviews results and makes the decisions. Here is how a process could change.' : 'KI übernimmt Suchen, Sortieren und Entwürfe. Ihr Team prüft die Ergebnisse und trifft die Entscheidungen. So kann sich ein Ablauf verändern.'}</p></div>
        </div>
        <div className="comparison-tabs" role="group" aria-label={en ? 'Choose a use case' : 'Anwendungsfall wählen'}>
          {ids.map((id, i) => <button key={id} aria-pressed={id === active} onClick={() => setActive(id)}>{(en ? ['Find knowledge', 'Handle requests', 'Review research'] : ['Wissen finden', 'Anfragen bearbeiten', 'Recherche auswerten'])[i]}</button>)}
        </div>
        <ProcessComparison active={active} />
        <div className="section-footnote"><p>{en ? 'We measure time saved and check result quality in your pilot.' : 'Zeitgewinn und Ergebnisqualität prüfen wir in Ihrem Pilot.'}</p><button onClick={openLeadForm} className="engineering-text-link">{t('ctaButton')}<ArrowUpRight size={16} aria-hidden="true" /></button></div>
      </div>
    </section>
  );
}
