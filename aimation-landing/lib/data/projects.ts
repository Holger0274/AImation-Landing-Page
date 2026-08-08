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
    description: 'Automatisierte Analyse von Patentdatenbanken. Findet relevante Prior Art, identifiziert Wettbewerber-Patente und erstellt strukturierte Übersichten.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Perplexity', 'Claude', 'Patent-APIs'],
    metrics: 'Prior Art vollständig im Blick, bevor die Konstruktion startet. Konto: Qualität und Timing.',
    detailUrl: '/use-cases/patentrecherche-ki',
    image: {
      type: 'image',
      src: '/images/use-cases/patent-research.png',
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
      src: '/images/use-cases/project-review-dashboard.png',
      alt: 'Projekt Review Dashboard mit Reifegradanalyse'
    }
  },
  {
    id: 'email-classification',
    title: 'Technische Anfragen automatisch vorsortieren',
    description: 'Klassifizierung eingehender technischer Anfragen und Änderungsanträge. Sammelt Kontext aus Ihren Systemen und legt einen Antwortentwurf vor. Jede beantwortete Anfrage fließt in die Lessons-Learned-Basis.',
    solutionWorld: 'FLOW',
    status: 'completed',
    tags: ['OpenAI', 'n8n', 'Outlook'],
    metrics: 'Antworten am selben Tag, und jede Antwort wird zu gesichertem Wissen. Konto: Timing und Kosten.',
    detailUrl: '/use-cases/email-klassifizierung',
    image: {
      type: 'image',
      src: '/images/use-cases/email-classification.png',
      alt: 'E-Mail Klassifizierungs-Flow'
    }
  },
  {
    id: 'tech-scouting',
    title: 'Technologie-Scouting',
    description: 'Kontinuierliches Monitoring von Technologie-Trends und Innovationen. Filtert relevante Entwicklungen aus Fachpublikationen, Papers und News und meldet, was Ihre Produkte betrifft.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['RSS', 'Claude', 'Notion'],
    metrics: 'Relevante Entwicklungen landen wöchentlich auf Ihrem Tisch, ohne Suchaufwand. Konto: Timing und Qualität.',
    image: {
      type: 'image',
      src: '/images/use-cases/tech-scouting.png',
      alt: 'Tech-Scouting Automatisierung'
    }
  },
  {
    id: 'knowledge-graph-management',
    title: 'Engineering-Wissen vernetzen',
    description: 'Berichte, Protokolle und Dokumente werden automatisch verschlagwortet, semantisch verknüpft und vernetzt. Jede Frage in Sekunden beantwortet, mit Quellenangabe. Nie mehr Wissen verlieren oder lange suchen.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Obsidian', 'Claude Code', 'Knowledge Graph'],
    metrics: 'Jede Antwort in Sekunden auffindbar, mit Quelle. Konto: Timing und Qualität.',
    detailUrl: '/use-cases/knowledge-graph-management',
    image: {
      type: 'image',
      src: '/images/use-cases/knowledge-graph.png',
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
      src: '/images/use-cases/customer-preparation.png',
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
      src: '/images/use-cases/audit-documentation.png',
      alt: 'Audit-Dokumentenanalyse Dashboard'
    }
  },
  {
    id: 'meeting-transcript-analysis',
    title: 'Besprechungen ohne Protokollaufwand',
    description: 'Transkripte aus Meetings automatisch in To-Dos, Erkenntnisse und offene Punkte kategorisieren. Speicherung für semantische Suche.',
    solutionWorld: 'WORK',
    status: 'in-progress',
    tags: ['Transkription', 'Vektordatenbank', 'Kategorisierung'],
    metrics: 'To-dos und Erkenntnisse sind festgehalten, bevor der Raum leer ist. Konto: Kosten und Timing.',
    image: {
      type: 'image',
      src: '/images/use-cases/meeting-transcript.png',
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
      src: '/images/use-cases/multi-agent-debate.png',
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
      src: '/images/use-cases/competitor-benchmark.png',
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
      src: '/images/use-cases/innovation-dashboard.png',
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
      src: '/images/use-cases/analysis-tools.png',
      alt: 'Business Analyse Tools'
    }
  }
];
