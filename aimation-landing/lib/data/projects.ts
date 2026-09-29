import { Project } from '@/components/sections/ProjectShowcase/types';

/**
 * Single source of truth fuer die Use-Case-Karten. Wird sowohl von der
 * Homepage-Sektion (ProjectShowcase) als auch von der /use-cases
 * Uebersichtsseite verwendet, siehe
 * aimation-website-specs/2026-07-18_spec-01-technik-fixes.md Punkt 1.
 */
export const PROJECTS: Project[] = [
  {
    id: 'patent-research',
    title: 'Patentrecherche und Prior Art',
    description: 'KI-gestützte Vorrecherche: technische Merkmale mit Patentfundstellen verbinden und zur fachlichen Prüfung aufbereiten. Interner Recherche-Prototyp, keine rechtliche Nutzungsfreigabe.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Perplexity', 'Claude', 'Quellenbezug'],
    metrics: 'Im Pilot prüfen wir Trefferqualität, Quellenbelege und den gesamten Rechercheaufwand. Noch keine gemessenen Kundenergebnisse.',
    detailUrl: '/use-cases/patentrecherche-ki',
    image: {
      type: 'image',
      src: '/images/editorial/patent-research.svg',
      alt: 'Patent-Recherche Workflow'
    }
  },
  {
    id: 'project-review-dashboard',
    title: 'Projekt-Review-Dashboard',
    description: 'Automatisierte Analyse des Projektreifegrads mit Ampelsystem. Identifiziert Schwachstellen, bewertet Freigabekriterien und gibt datenbasierte Empfehlungen für die nächsten Entwicklungsschritte.',
    solutionWorld: 'THINK',
    status: 'coming-soon',
    tags: ['Claude', 'Analytics', 'Dashboard'],
    metrics: 'Reifegrad auf einen Blick, Schwachstellen zeigen sich vor dem Gate statt danach. Konto: Qualität und Timing.',
    image: {
      type: 'image',
      src: '/images/editorial/project-review-dashboard.svg',
      alt: 'Projekt Review Dashboard mit Reifegradanalyse'
    }
  },
  {
    id: 'email-classification',
    title: 'Technische Anfragen automatisch vorsortieren',
    description: 'Technische Anfragen und Änderungsanträge vorsortieren, freigegebene Quellen zuordnen und einen Antwortentwurf zur fachlichen Prüfung vorbereiten. Interner Workflow-Prototyp.',
    solutionWorld: 'FLOW',
    status: 'completed',
    tags: ['OpenAI', 'n8n', 'Outlook'],
    metrics: 'Im Pilot prüfen wir Zuordnung, Quellenqualität und den Aufwand bis zur Freigabe. Noch keine gemessenen Kundenergebnisse.',
    detailUrl: '/use-cases/email-klassifizierung',
    image: {
      type: 'image',
      src: '/images/editorial/email-classification.svg',
      alt: 'E-Mail Klassifizierungs-Flow'
    }
  },
  {
    id: 'tech-scouting',
    title: 'Technologie-Scouting',
    description: 'Definierte Fachquellen beobachten, Fundstücke mit KI vorstrukturieren und ihren möglichen Bezug zum eigenen Produkt fachlich bewerten. Interner Scouting-Prototyp.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['RSS', 'Claude', 'Notion'],
    metrics: 'Im Pilot prüfen wir Quellenqualität, Produktbezug und Aufwand bis zur fachlichen Einordnung. Noch keine gemessenen Kundenergebnisse.',
    detailUrl: '/use-cases/technologie-scouting',
    image: {
      type: 'image',
      src: '/images/editorial/tech-scouting.svg',
      alt: 'Tech-Scouting Automatisierung'
    }
  },
  {
    id: 'knowledge-graph-management',
    title: 'Engineering-Wissen vernetzen',
    description: 'Entwicklungsunterlagen mit KI durchsuchen und frühere Entscheidungen anhand ihrer Quellen nachvollziehen. Interner Prototyp mit eigenen Notizen und Projektunterlagen; Unternehmensanbindungen werden im Pilot abgestimmt.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Obsidian', 'Claude Code', 'Knowledge Graph'],
    metrics: 'Im Pilot prüfen wir Suchzeit, Quellenqualität und Pflegeaufwand. Noch keine gemessenen Kundenergebnisse.',
    detailUrl: '/use-cases/knowledge-graph-management',
    image: {
      type: 'image',
      src: '/images/editorial/knowledge-graph.svg',
      alt: 'Knowledge Graph Struktur'
    }
  },
  {
    id: 'customer-meeting-prep',
    title: 'Technische Kundengespräche vorbereiten',
    description: 'Briefing vor jeder Abstimmungsrunde: Anforderungsstand, offene Punkte, letzte Protokolle, aktuelle Entwicklungen beim Kunden. Kompakt und vollständig.',
    solutionWorld: 'WORK',
    status: 'coming-soon',
    tags: ['Perplexity', 'n8n', 'LinkedIn API'],
    metrics: 'Vorbereitet in Minuten, kein offener Punkt wird vergessen. Konto: Timing und Qualität.',
    image: {
      type: 'image',
      src: '/images/editorial/customer-preparation.svg',
      alt: 'Kundenvorbereitung Dashboard'
    }
  },
  {
    id: 'audit-documentation',
    title: 'Audit und Dokumentenanalyse',
    description: 'Intelligente Analyse und Kategorisierung von Audit-Dokumenten. Automatisches Extrahieren von Compliance-Anforderungen, Risiken und Handlungsempfehlungen aus Prüfberichten.',
    solutionWorld: 'KNOW',
    status: 'coming-soon',
    tags: ['Claude', 'Dokumentenanalyse', 'OCR'],
    metrics: 'Anforderungen und Risiken aus Prüfdokumenten automatisch erfasst. Konto: Qualität und Kosten.',
    image: {
      type: 'image',
      src: '/images/editorial/audit-documentation.svg',
      alt: 'Audit-Dokumentenanalyse Dashboard'
    }
  },
  {
    id: 'meeting-transcript-analysis',
    title: 'Besprechungen ohne Protokollaufwand',
    description: 'Freigegebene Meeting-Transkripte mit KI in Entscheidungen, Aufgaben und offene Punkte strukturieren. Mit Zeitbezug und menschlicher Freigabe. Bei AImation im Aufbau.',
    solutionWorld: 'WORK',
    status: 'in-progress',
    tags: ['Transkription', 'Vektordatenbank', 'Kategorisierung'],
    metrics: 'Im Pilot prüfen wir Vollständigkeit, Gesprächsbelege und Aufwand bis zum bestätigten Protokoll. Noch keine gemessenen Kundenergebnisse.',
    detailUrl: '/use-cases/meeting-transkript-analyse',
    image: {
      type: 'image',
      src: '/images/editorial/meeting-transcript.svg',
      alt: 'Transkript-Analyse Pipeline'
    }
  },
  {
    id: 'multi-agent-debate',
    title: 'Konzepte aus mehreren Blickwinkeln prüfen',
    description: 'KI-Agenten prüfen Ideen aus verschiedenen Perspektiven. Analysiert Konzepte systematisch, erweiterbar mit der 6-Hüte-Innovationsmethode für umfassende Ideenvalidierung.',
    solutionWorld: 'THINK',
    status: 'in-progress',
    tags: ['Claude', 'Multi-Agent', '6-Hüte-Methode'],
    metrics: 'Schwächen einer Idee zeigen sich, bevor Budget hineinfließt. Konto: Qualität und Kosten.',
    image: {
      type: 'image',
      src: '/images/editorial/multi-agent-debate.svg',
      alt: 'Multi-Agenten-Debattier-System'
    }
  },
  {
    id: 'competitor-benchmark',
    title: 'Wettbewerbs-Benchmark',
    description: 'Automatisierte Analyse von Wettbewerbern. Vergleicht Preise, Funktionen und Positionierung und erstellt regelmäßige Reports.',
    solutionWorld: 'THINK',
    status: 'coming-soon',
    tags: ['Web Scraping', 'Claude', 'Automation'],
    metrics: 'Preise, Funktionen und Positionierung der Wettbewerber regelmäßig im Vergleich. Konto: Qualität und Timing.',
    image: {
      type: 'image',
      src: '/images/editorial/competitor-benchmark.svg',
      alt: 'Benchmark-Prozess'
    }
  },
  {
    id: 'innovation-assessment-dashboard',
    title: 'Innovations-Assessment Dashboard',
    description: 'Systematische Bewertung von Technologien und Innovationsideen. Analysiert technische Machbarkeit, Herstellbarkeit und Wirtschaftlichkeit.',
    solutionWorld: 'THINK',
    status: 'coming-soon',
    tags: ['Claude', 'Scoring-Algorithmen', 'Analytics'],
    metrics: 'Machbarkeit und Wirtschaftlichkeit vergleichbar bewertet, statt nach Bauchgefühl. Konto: Qualität und Kosten.',
    image: {
      type: 'image',
      src: '/images/editorial/innovation-dashboard.svg',
      alt: 'Innovations-Assessment Dashboard'
    }
  },
  {
    id: 'analysis-tools-framework',
    title: 'Kundenbedarf systematisch verstehen',
    description: 'Systematische Kundenbedarfsanalyse mit Jobs-to-be-Done Framework und Customer Journey Mapping. KI unterstützt bei der Identifikation von Anforderungen und Schmerzpunkten.',
    solutionWorld: 'THINK',
    status: 'coming-soon',
    tags: ['Business Canvas', 'Jobs-to-be-Done', 'Customer Journey'],
    metrics: 'Anforderungen und Schmerzpunkte der Kunden strukturiert statt anekdotisch. Konto: Qualität.',
    image: {
      type: 'image',
      src: '/images/editorial/analysis-tools.svg',
      alt: 'Business Analyse Tools'
    }
  }
];
