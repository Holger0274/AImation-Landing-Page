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
            <p className="technical-label mb-4">02 / {en ? 'Applications from our workshop' : 'Anwendungen aus unserer Werkstatt'}</p>
            <h2 id="early-demos-heading">
              {en ? 'Explore what moves your ' : 'Entdecken Sie, was Ihr Team '}<span className="highlight">{en ? 'team.' : 'bewegt.'}</span>
            </h2>
          </div>
          <p className="section-heading-body">
            {en
              ? 'Project bottlenecks, variant rules or knowledge in your team: choose your topic. Each video takes you into one of our applications for 90 seconds.'
              : 'Engpässe im Projekt, Regeln für Varianten oder Wissen im Team: Wählen Sie Ihr Thema. Jedes Video führt Sie 90 Sekunden durch eine unserer Anwendungen.'}
          </p>
        </div>
        <ApplicationDemos compact />
      </div>
    </section>
  );
}
