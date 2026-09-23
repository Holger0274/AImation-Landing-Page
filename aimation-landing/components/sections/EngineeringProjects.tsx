'use client';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from '@/i18n/navigation';

// Status: Development Landscape/src/data/referenzen.ts, 2026-09-23.
const projects = [
  { id: '5why', image: '/images/workbench/5why.png', de: ['5Why', 'Fertig gebaut', 'Der Ursache auf den Grund gehen.', 'Ein KI-Coach führt durch die Ursachenanalyse und fragt bei unklaren Antworten nach. Das Beispiel zeigt eine gebrochene Rastnase am Montageband.', 'Die Ursache und die passende Maßnahme bestätigt das Team.'], en: ['5Why', 'Built', 'Get to the root cause.', 'An AI coach guides root-cause analysis and asks follow-up questions. The example shows a broken snap-fit on an assembly line.', 'The team confirms the root cause and corrective action.'] },
  { id: 'fem', image: '/images/workbench/fem-visualizer.png', de: ['FEM-Visualizer', 'Fertig gebaut', 'Mit Berechnungsdaten arbeiten.', 'Ein Werkzeug für Fragen an eigene Berechnungsdaten und deren Visualisierung. Hier: die von-Mises-Spannung eines Beispielbauteils.', 'Lastfall, Modellannahmen und Freigabe bleiben Aufgabe der Berechnung.'], en: ['FEM Visualizer', 'Built', 'Work with simulation data.', 'A tool for querying and visualising your own simulation data. Shown here: von Mises stress in a sample component.', 'Load cases, model assumptions and approval remain the analyst’s responsibility.'] },
  { id: 'ideas', image: '/images/workbench/ideenrat.png', de: ['Ideen-Agentensystem', 'In Erprobung', 'Eine Idee. Drei Gegenpositionen.', 'Optimist, Realist und kritischer Gegenpart arbeiten eine Idee aus und diskutieren ihre Schwächen. Der Screenshot zeigt die Auswertung einer solchen Debatte.', 'Die Bewertungen sind Diskussionshilfen. Welche Idee weiterverfolgt wird, entscheiden Sie.'], en: ['Idea agent system', 'In testing', 'One idea. Three perspectives.', 'An optimist, a realist and a critical counterpart develop an idea and debate its weaknesses. The screenshot shows a debate assessment.', 'Scores support discussion. You decide which idea to pursue.'] },
] as const;

export default function EngineeringProjects() {
  const en = useLocale() === 'en';
  const lang = en ? 'en' : 'de';
  return <div className="workbench-projects">
    {projects.map((project, index) => { const copy = project[lang]; return <article id={`werkzeug-${project.id}`} key={project.id} className={`workbench-project workbench-${project.id}`}>
      <Dialog>
        <DialogTrigger asChild><button className="workbench-preview" aria-label={`${en ? 'Enlarge screenshot' : 'Screenshot vergrößern'}: ${copy[0]}`}><Image src={project.image} alt={en ? `${copy[0]}: actual application screenshot` : `${copy[0]}: echter Screenshot der Anwendung`} fill sizes="(max-width: 760px) 90vw, 50vw" className="object-contain"/><span className="preview-enlarge"><Maximize2 size={16} aria-hidden="true"/>{en ? 'Enlarge' : 'Vergrößern'}</span></button></DialogTrigger>
        <DialogContent className={`workbench-dialog workbench-dialog-${project.id}`}><DialogTitle className="pr-10">{copy[0]}</DialogTitle><div className="workbench-dialog-image"><Image src={project.image} alt={copy[2]} fill sizes="(max-width: 1000px) 90vw, 1000px" className="object-contain"/></div><DialogDescription>{copy[3]} {copy[4]}</DialogDescription></DialogContent>
      </Dialog>
      <div className="workbench-copy"><div className="workbench-meta"><span className="technical-label">0{index + 1} / {copy[0]}</span><span className="project-status">{copy[1]}</span></div><h3>{copy[2]}</h3><p>{copy[3]}</p><p className="workbench-responsibility">{copy[4]}</p><span className="technical-label">{en ? 'Original screenshot · own project' : 'Original-Screenshot · Eigenes Projekt'}</span></div>
    </article>; })}
    <p className="workbench-note">{en ? 'A look at our own development work. The examples are not customer references or evidence of a guaranteed time saving.' : 'Einblicke in unsere eigene Entwicklungsarbeit. Die Beispiele sind keine Kundenreferenzen und kein Nachweis für eine garantierte Zeitersparnis.'}<a href="#use-cases" className="engineering-text-link">{en ? 'Explore application ideas' : 'Anwendungsideen erkunden'}<ArrowUpRight size={16} aria-hidden="true"/></a><Link href="/ki-schulungen-mittelstand#lernprobe" className="engineering-text-link">{en ? 'Experience how your team learns to work with AI' : 'Ausprobieren, wie Ihr Team den Umgang mit KI lernt'}<ArrowUpRight size={16} aria-hidden="true"/></Link></p>
  </div>;
}
