'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Project } from './types';
import ProjectCard from './ProjectCard';

const PROJECTS: Project[] = [
  {
    id: 'patent-research',
    title: 'Patentrecherche & Prior Art',
    description: 'Automatisierte Analyse von Patentdatenbanken. Findet relevante Prior Art, identifiziert Wettbewerber-Patente und erstellt strukturierte Übersichten.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Perplexity', 'Claude', 'Patent-APIs'],
    metrics: '80% schnellere Recherche',
    image: {
      type: 'image',
      src: '/images/use-cases/patent-research.png',
      alt: 'Patent-Recherche Workflow'
    }
  },
  {
    id: 'tech-scouting',
    title: 'Technologie-Scouting',
    description: 'Kontinuierliches Monitoring von Technologie-Trends und Innovationen. Filtert relevante Entwicklungen aus Fachpublikationen, Papers und News.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['RSS', 'Claude', 'Notion'],
    metrics: 'Wöchentlicher Tech-Radar',
    image: {
      type: 'image',
      src: '/images/use-cases/tech-scouting.png',
      alt: 'Tech-Scouting Automatisierung'
    }
  },
  {
    id: 'knowledge-graph-management',
    title: 'Knowledge Graph Management',
    description: 'Wissen gezielt miteinander verknüpfen und ein zweites Brain bauen. Vernetzte Informationsarchitektur mit intelligenter Verknüpfung und semantischer Suche.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Obsidian', 'Claude Code', 'Knowledge Graph'],
    metrics: 'Vernetztes Wissensmanagement',
    image: {
      type: 'image',
      src: '/images/use-cases/knowledge-graph.png',
      alt: 'Knowledge Graph Struktur'
    }
  },
  {
    id: 'email-classification',
    title: 'E-Mail Klassifizierung',
    description: 'Intelligente Kategorisierung eingehender E-Mails. Erkennt Anfrage-Typ, Dringlichkeit und routet automatisch an die richtige Stelle.',
    solutionWorld: 'FLOW',
    status: 'completed',
    tags: ['OpenAI', 'n8n', 'Outlook'],
    metrics: '60% weniger Sortieraufwand',
    image: {
      type: 'image',
      src: '/images/use-cases/email-classification.png',
      alt: 'E-Mail Klassifizierungs-Flow'
    }
  },
  {
    id: 'meeting-transcript-analysis',
    title: 'Meeting-Transkript-Analyse',
    description: 'Transkripte aus Meetings automatisch in To-Dos, Ideen, Probleme, Wissen und Lösungen kategorisieren. Speicherung in Vektordatenbanken für semantische Suche. Coming soon: Audit-Dokumente, automatisierte Kategorisierung.',
    solutionWorld: 'WORK',
    status: 'in-progress',
    tags: ['Transkription', 'Vektordatenbank', 'Kategorisierung'],
    metrics: 'PoC in Entwicklung',
    image: {
      type: 'image',
      src: '/images/use-cases/meeting-transcript.png',
      alt: 'Transkript-Analyse Pipeline'
    }
  },
  {
    id: 'competitor-benchmark',
    title: 'Wettbewerbs-Benchmark',
    description: 'Automatisierte Analyse von Wettbewerbern. Vergleicht Preise, Features, Positionierung und erstellt regelmäßige Reports.',
    solutionWorld: 'THINK',
    status: 'coming-soon',
    tags: ['Web Scraping', 'Claude', 'Airtable'],
    image: {
      type: 'image',
      src: '/images/use-cases/competitor-benchmark.png',
      alt: 'Benchmark-Prozess'
    }
  },
  {
    id: 'multi-agent-debate',
    title: 'Multi-Agenten-Debattier-System',
    description: 'KI-Agenten debattieren Ideen aus verschiedenen Perspektiven. Drei Agenten (positiv, neutral, negativ) analysieren Konzepte systematisch. Erweiterbar mit der 6-Hüte-Innovationsmethode für umfassende Ideenvalidierung.',
    solutionWorld: 'THINK',
    status: 'in-progress',
    tags: ['Claude', 'Multi-Agent', '6-Hüte-Methode'],
    metrics: 'PoC in Entwicklung',
    image: {
      type: 'image',
      src: '/images/use-cases/multi-agent-debate.png',
      alt: 'Multi-Agenten-Debattier-System'
    }
  },
  {
    id: 'audit-documentation',
    title: 'Audit & Dokumentenanalyse',
    description: 'Intelligente Analyse und Kategorisierung von Audit-Dokumenten. Automatisches Extrahieren von Compliance-Anforderungen, Risiken und Handlungsempfehlungen aus Prüfberichten und Dokumentationen.',
    solutionWorld: 'KNOW',
    status: 'coming-soon',
    tags: ['Claude', 'Dokumentenanalyse', 'OCR'],
    metrics: 'Compliance-Ready',
    image: {
      type: 'image',
      src: '/images/use-cases/audit-documentation.png',
      alt: 'Audit-Dokumentenanalyse Dashboard'
    }
  }
];

export default function ProjectShowcase() {
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
      className="relative py-20 md:py-24 bg-[#faf9f7] overflow-hidden"
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
            <span className="text-sm font-medium text-[#071013]">Use Cases</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071013] mb-4 font-space-grotesk">
            So sieht{' '}
            <span className="text-[#f90093]">KI-Automatisierung</span>{' '}
            in der Praxis aus
          </h2>

          {/* Subline */}
          <p className="text-lg text-gray-600 font-inter">
            Konkrete Anwendungsfälle – von der Patentrecherche bis zum Technologie-Radar.
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
              aria-label="Scroll left"
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
              aria-label="Scroll right"
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
            Haben Sie einen ähnlichen Anwendungsfall im Kopf?
          </p>
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2 px-6 py-3
              bg-gradient-to-br from-[#f90093] to-[#ff4ecd]
              text-white font-semibold rounded-lg
              transition-all duration-300
              hover:shadow-lg hover:shadow-[#f90093]/30
              hover:-translate-y-0.5
            "
          >
            Kostenloses Erstgespräch buchen
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
