'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Project } from './types';
import ProjectCard from './ProjectCard';

const PROJECTS: Project[] = [
  {
    id: 'patent-research',
    title: 'Patentrecherche und Prior Art',
    description: 'Automatisierte Analyse von Patentdatenbanken. Findet relevante Prior Art, identifiziert Wettbewerber-Patente und erstellt strukturierte Übersichten.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Perplexity', 'Claude', 'Patent-APIs'],
    metrics: 'Prior Art vollständig im Blick, bevor die Konstruktion startet.',
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
    metrics: 'Reifegrad auf einen Blick, Schwachstellen zeigen sich vor dem Gate statt danach.',
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
    metrics: 'Antworten am selben Tag, und jede Antwort wird zu gesichertem Wissen.',
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
    metrics: 'Relevante Entwicklungen landen wöchentlich auf Ihrem Tisch, ohne Suchaufwand.',
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
    metrics: 'Jede Antwort in Sekunden auffindbar, mit Quelle.',
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
    metrics: 'Vorbereitet in Minuten, kein offener Punkt wird vergessen.',
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
    metrics: 'Anforderungen und Risiken aus Prüfdokumenten automatisch erfasst.',
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
    metrics: 'To-dos und Erkenntnisse sind festgehalten, bevor der Raum leer ist.',
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
    metrics: 'Schwächen einer Idee zeigen sich, bevor Budget hineinfließt.',
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
    metrics: 'Preise, Funktionen und Positionierung der Wettbewerber regelmäßig im Vergleich.',
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
    metrics: 'Machbarkeit und Wirtschaftlichkeit vergleichbar bewertet, statt nach Bauchgefühl.',
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
    metrics: 'Anforderungen und Schmerzpunkte der Kunden strukturiert statt anekdotisch.',
    image: {
      type: 'image',
      src: '/images/use-cases/analysis-tools.png',
      alt: 'Business Analyse Tools'
    }
  }
];

export default function ProjectShowcase() {
  const t = useTranslations('projectShowcase');
  const sectionRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Track scroll position for indicators and arrows
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.scrollWidth / PROJECTS.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);

      // Update arrow visibility
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(
        scrollLeft < carousel.scrollWidth - carousel.clientWidth - 10
      );
    };

    carousel.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (index: number) => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const cardWidth = carousel.scrollWidth / PROJECTS.length;
    carousel.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const cardWidth = carousel.clientWidth * 0.8;
    carousel.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const cardWidth = carousel.clientWidth * 0.8;
    carousel.scrollBy({
      left: cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#faf9f7] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-[#f90093] rounded-full" />
            <span className="text-sm font-medium text-[#071013]">{t('badge')}</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071013] mb-4 font-space-grotesk">
            {t('headline')}{' '}
            <span className="text-[#f90093]">{t('headlineHighlight')}</span>{' '}
            {t('headlineEnd')}
          </h2>

          {/* Subline */}
          <p className="text-lg text-gray-600 font-inter">
            {t('subline')}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative -mx-4 md:-mx-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Scroll Buttons (Desktop only) */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="
                hidden md:flex
                absolute left-0 top-1/2 -translate-y-1/2 z-10
                w-12 h-12 items-center justify-center
                bg-white border border-gray-200 rounded-full shadow-lg
                text-gray-700 hover:text-[#f90093] hover:border-[#f90093]
                transition-all duration-300
                hover:scale-110
              "
              aria-label={t('scrollLeft')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="
                hidden md:flex
                absolute right-0 top-1/2 -translate-y-1/2 z-10
                w-12 h-12 items-center justify-center
                bg-white border border-gray-200 rounded-full shadow-lg
                text-gray-700 hover:text-[#f90093] hover:border-[#f90093]
                transition-all duration-300
                hover:scale-110
              "
              aria-label={t('scrollRight')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={carouselRef}
            className="
              flex gap-4 md:gap-6
              overflow-x-scroll
              snap-x snap-mandatory
              pb-8 px-4 md:px-8
              scrollbar-hide
              scroll-smooth
            "
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                className="snap-center snap-always shrink-0 w-[90vw] sm:w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] min-w-[320px] max-w-[500px]"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? 'bg-[#f90093] w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4 font-inter">
            {t('ctaText')}
          </p>
          <a
            href="#kontakt"
            className="
              inline-flex items-center gap-2 px-6 py-3
              bg-gradient-to-br from-[#f90093] to-[#ff4ecd]
              text-white font-semibold rounded-lg
              transition-all duration-300
              hover:shadow-lg hover:shadow-[#f90093]/30
              hover:-translate-y-0.5
            "
          >
            {t('ctaButton')}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
