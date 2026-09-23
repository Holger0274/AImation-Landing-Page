'use client';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowUpRight, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useLeadForm } from '@/components/LeadFormProvider';
import { LANDSCAPE_PHASES, LANDSCAPE_SNAPSHOT } from '@/lib/data/engineering-landscape';
import { PHASE_PATHS, QKT_CASES } from '@/lib/data/application-paths';
import { TRAINING_COURSES } from '@/lib/data/training';
import CaseWalkthrough from '@/components/visuals/CaseWalkthrough';

export default function DevelopmentLandscape() {
  const en = useLocale() === 'en';
  const lang = en ? 'en' : 'de';
  const [phaseIndex, setPhaseIndex] = useState(1);
  const [caseIndex, setCaseIndex] = useState(0);
  const { openLeadForm } = useLeadForm();
  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.slice('#use-case-'.length);
      if (!window.location.hash.startsWith('#use-case-')) return;
      LANDSCAPE_PHASES.forEach((entry, p) => entry.cases.forEach((candidate, c) => {
        if (candidate.id === id) { setPhaseIndex(p); setCaseIndex(c); }
      }));
    };
    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    return () => window.removeEventListener('hashchange', selectFromHash);
  }, []);
  const selectCase = (p: number, c: number) => {
    setPhaseIndex(p); setCaseIndex(c);
    window.history.replaceState(window.history.state, '', `#use-case-${LANDSCAPE_PHASES[p].cases[c].id}`);
  };
  const phase = LANDSCAPE_PHASES[phaseIndex];
  const item = phase.cases[caseIndex];
  const path = PHASE_PATHS[phase.id];
  const course = TRAINING_COURSES.find(entry => entry.id === path.course)!;
  return <section id="use-cases" className="engineering-section landscape-section">
    <div className="engineering-wrap">
      <div className="section-heading-split">
        <div className="section-intro"><p className="technical-label">{en ? 'The development landscape' : 'Die Entwicklungslandkarte'}</p><h2>{en ? 'Find where AI can' : 'Finden Sie Ihren'} <span className="highlight">{en ? 'help.' : 'Hebel.'}</span></h2></div>
        <div className="section-heading-body"><p>{en ? 'From the first requirement to a field complaint: explore selected tasks from our use-case catalogue. Start with the work that holds your team back.' : 'Von der ersten Anforderung bis zur Feldbeanstandung: Erkunden Sie ausgewählte Aufgaben aus unserer Use-Case-Sammlung. Fangen Sie dort an, wo Ihr Team heute Zeit verliert.'}</p></div>
      </div>
      <div className="landscape-console">
        {LANDSCAPE_PHASES.flatMap(p => p.cases.map(c => <span className="case-anchor" key={c.id} id={`use-case-${c.id}`} aria-hidden="true"/>))}
        <div className="landscape-toolbar"><span className="technical-label">AImation / Development Landscape</span><span>{LANDSCAPE_SNAPSHOT.cases} {en ? 'catalogue entries' : 'Katalogeinträge'} · {LANDSCAPE_SNAPSHOT.areas} {en ? 'areas' : 'Bereiche'}</span></div>
        <div className="landscape-phases" role="group" aria-label={en ? 'Select development area' : 'Entwicklungsbereich wählen'}>
          {LANDSCAPE_PHASES.map((p, i) => <button key={p.id} aria-pressed={i === phaseIndex} onClick={() => selectCase(i, 0)}><span className="phase-index">0{i + 1}</span><span>{p[lang]}</span></button>)}
        </div>
        <div className="landscape-workspace">
          <div className="landscape-case-list"><p className="technical-label">{en ? 'Select an example' : 'Beispiel auswählen'}</p>{phase.cases.map((c, i) => <button key={c.id} aria-pressed={i === caseIndex} onClick={() => selectCase(phaseIndex, i)}><span>{c[lang][0]}</span><ArrowRight size={18} aria-hidden="true" /></button>)}<div className="landscape-quick-start"><p>{en ? 'Three walkthroughs to try' : 'Drei Abläufe zum Durchspielen'}</p>{Object.entries(QKT_CASES).map(([dimension, id]) => <a key={id} href={`#use-case-${id}`} className="engineering-text-link">{dimension === 'quality' ? (en ? 'Recurring defects' : 'Wiederholfehler') : dimension === 'cost' ? (en ? 'Test reports' : 'Prüfberichte') : (en ? 'Unclear requirements' : 'Unklare Anforderungen')} →</a>)}</div></div>
          <div className="landscape-detail" aria-live="polite" aria-atomic="true">
            <span className="technical-label">{en ? 'Application idea / ' : 'Anwendungsidee / '}{phase[lang]}</span>
            <h3>{item[lang][0]}</h3><p>{item[lang][1]}</p>
            <div className="human-check"><UserCheck size={22} aria-hidden="true"/><div><strong>{en ? 'Your team decides.' : 'Ihr Team entscheidet.'}</strong><p>{item[lang][2]}</p></div></div>
            <CaseWalkthrough key={item.id} caseId={item.id} en={en}/>
            <div className="application-next">
              {path.project && <div><span className="technical-label">{en ? 'Related tool from our workshop' : 'Verwandtes Werkzeug aus unserer Werkstatt'}</span><a href={`#werkzeug-${path.project}`} className="engineering-text-link">{path.project === '5why' ? (en ? '5Why: explore root-cause analysis' : '5Why: Ursachenanalyse ansehen') : (en ? 'FEM Visualizer: explore simulation data' : 'FEM-Visualizer: Berechnungsdaten ansehen')}<ArrowUpRight size={17} aria-hidden="true"/></a><p>{en ? 'A separate, built application. Not a demonstration of this catalogue case.' : 'Eine eigene, fertig gebaute Anwendung. Keine Vorführung dieses Katalogfalls.'}</p></div>}
              <div><span className="technical-label">{en ? 'Build the skills in your team' : 'Die Grundlagen im Team aufbauen'}</span><Link href={`/ki-schulungen-mittelstand#kurs-${course.id}`} className="engineering-text-link">{course[lang][0]}<ArrowUpRight size={17} aria-hidden="true"/></Link><p>{path[lang]} {en ? 'Training builds skills; implementing the workflow is a separate step.' : 'Die Schulung vermittelt die Grundlagen. Die Umsetzung des Ablaufs ist ein eigener Schritt.'}</p></div>
              <Link href="/ki-schulungen-mittelstand#lernprobe" className="engineering-text-link">{en ? 'Try the interactive learning sample' : 'Interaktive Lernprobe ausprobieren'}<ArrowUpRight size={17} aria-hidden="true"/></Link>
            </div>
            <button className="engineering-text-link" onClick={openLeadForm}>{en ? 'Discuss this for your team' : 'Auf Ihren Ablauf übertragen'}<ArrowUpRight size={17} aria-hidden="true" /></button>
          </div>
        </div>
        <p className="landscape-catalogue-note">{en ? '12 selected examples from the catalogue, as of September 2026. These are application ideas, not 639 delivered projects. Feasibility depends on your data and process.' : '12 ausgewählte Beispiele aus dem Katalog, Stand September 2026. Das sind Anwendungsideen, keine 639 umgesetzten Projekte. Die Machbarkeit hängt von Ihren Daten und Abläufen ab.'}</p>
      </div>
      <div className="section-footnote"><p>{en ? 'The KI-Landkarte workshop selects and prioritises suitable cases for your business.' : 'Im Workshop KI-Landkarte wählen und priorisieren wir passende Fälle für Ihr Unternehmen.'}</p><Link href="/use-cases" className="engineering-text-link">{en ? 'More detailed use cases' : 'Weitere Use Cases im Detail'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </div>
  </section>;
}
