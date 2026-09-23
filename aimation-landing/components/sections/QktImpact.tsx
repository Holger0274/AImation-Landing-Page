'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowDownRight } from 'lucide-react';
import QktTriangle from '@/components/diagrams/QktTriangle';
import { QKT_CASES } from '@/lib/data/application-paths';

const dimensions = [
  { id: 'quality', de: ['Qualität', 'Weniger Fehler wiederholen.', 'Prüfhinweise und frühere Entscheidungen mit Fundstelle bereitstellen. Ihr Team bewertet die Ergebnisse und gibt sie frei.', 'Wie vollständig sind die Ergebnisse? Welche Korrekturen und Nacharbeiten bleiben nötig?'], en: ['Quality', 'Repeat fewer mistakes.', 'Provide review findings and past decisions with sources. Your team evaluates and approves the results.', 'How complete are the results? Which corrections and rework are still needed?'] },
  { id: 'cost', de: ['Kosten', 'Engineering-Stunden gezielter einsetzen.', 'Berichte vorbereiten und Daten zusammenführen, damit Fachkräfte weniger Zeit mit Übertragen und Suchen verbringen.', 'Wie viel Arbeitszeit entfällt je Vorgang, nach Abzug von Prüfung, Betrieb und Pflege?'], en: ['Cost', 'Use engineering hours more effectively.', 'Prepare reports and combine data so specialists spend less time copying and searching.', 'How much work is saved per task, after review, operation and maintenance?'] },
  { id: 'timing', de: ['Timing', 'Früher zur Entscheidung kommen.', 'Anfragen vorsortieren, fehlende Angaben markieren und Entscheidungsunterlagen vorbereiten. So kann Ihr Team früher reagieren.', 'Wie lange dauert es vom Eingang bis zum geprüften Ergebnis? Wo bleiben Wartezeiten?'], en: ['Timing', 'Reach decisions sooner.', 'Pre-sort requests, flag missing information and prepare decision documents so your team can respond earlier.', 'How long does it take from receipt to a reviewed result? Where do delays remain?'] },
] as const;

export default function QktImpact() {
  const en = useLocale() === 'en';
  const [active, setActive] = useState(2);
  const copy = dimensions[active][en ? 'en' : 'de'];
  return <section className="engineering-section qkt-impact-section" id="qualitaet-kosten-timing" aria-labelledby="qkt-heading">
    <div className="engineering-wrap">
      <div className="qkt-impact-layout">
        <figure className="qkt-blueprint">
          <div className="qkt-drawing-label"><span>QKT / {en ? 'Development' : 'Entwicklung'}</span><span aria-hidden="true">FIG. 02</span></div>
          <QktTriangle variant="dark" locale={en ? 'en' : 'de'} active={dimensions[active].id} animated={false} className="qkt-large-triangle" />
          <figcaption>{en ? 'Three connected measures. One development process.' : 'Drei Größen, die zusammenhängen. Ein Entwicklungsprozess.'}</figcaption>
        </figure>
        <div className="qkt-impact-copy">
          <div className="section-intro"><p className="technical-label">{en ? 'What matters to your development team' : 'Woran Ihre Entwicklung gemessen wird'}</p><h2 id="qkt-heading">{en ? 'Faster development must ' : 'Schneller entwickeln muss sich '}<span className="highlight">{en ? 'pay off.' : 'rechnen.'}</span></h2><p>{en ? 'Time pressure, rework and tight budgets are connected. We assess an AI application against all three measures.' : 'Zeitdruck, Nacharbeit und knappe Budgets hängen zusammen. Deshalb bewerten wir einen KI-Einsatz an allen drei Größen.'}</p></div>
          <div className="qkt-selector" role="group" aria-label={en ? 'Select quality, cost or timing' : 'Qualität, Kosten oder Timing auswählen'}>
            {dimensions.map((dimension, index) => <button key={dimension.id} aria-pressed={active === index} aria-controls="qkt-impact-detail" onClick={() => setActive(index)}>{dimension[en ? 'en' : 'de'][0]}</button>)}
          </div>
          <div className="qkt-impact-detail" id="qkt-impact-detail" aria-live="polite" aria-atomic="true"><h3>{copy[1]}</h3><p>{copy[2]}</p><div className="qkt-measure"><ArrowDownRight size={20} aria-hidden="true"/><div><strong>{en ? 'What we compare in the pilot' : 'Was wir im Pilot vergleichen'}</strong><p>{copy[3]}</p></div></div></div>
          <a className="engineering-text-link qkt-case-link" href={`#use-case-${QKT_CASES[dimensions[active].id]}`}>{active === 0 ? (en ? 'Walk through a recurring defect' : 'Beispiel Wiederholfehler durchspielen') : active === 1 ? (en ? 'Walk through a test report' : 'Beispiel Prüfbericht durchspielen') : (en ? 'Walk through an unclear requirement' : 'Beispiel unklare Anforderung durchspielen')}<ArrowDownRight size={18} aria-hidden="true"/></a>
        </div>
      </div>
    </div>
  </section>;
}
