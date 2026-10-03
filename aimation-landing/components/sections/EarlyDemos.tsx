'use client';

import { useLocale } from 'next-intl';
import ApplicationDemos from './ApplicationDemos';

export default function EarlyDemos() {
  const en = useLocale() === 'en';

  return (
    <section id="anwendungsdemos" className="engineering-section" aria-labelledby="early-demos-heading">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro">
            <h2 id="early-demos-heading">
              {en ? 'See our applications ' : 'So sehen unsere Anwendungen '}<span className="highlight">{en ? 'at work.' : 'aus.'}</span>
            </h2>
          </div>
          <p className="section-heading-body">
            {en
              ? 'Start with the PM Demonstrator: project status, capacity and draft reports in one application. Each video shows 90 seconds of our own development work.'
              : 'Starten Sie mit dem PM Demonstrator: Projektstatus, Kapazitäten und Berichtsentwürfe in einer Anwendung. Jedes Video zeigt 90 Sekunden aus unserer eigenen Entwicklungsarbeit.'}
          </p>
        </div>
        <ApplicationDemos compact />
      </div>
    </section>
  );
}
