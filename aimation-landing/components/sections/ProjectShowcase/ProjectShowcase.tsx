'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/data/projects';

/**
 * Homepage zeigt nur 6 kuratierte Use Cases (Anker zuerst), Rest nur auf /use-cases,
 * siehe aimation-website-specs/2026-07-18_spec-03-startseite.md Punkt 4.
 */
const HOMEPAGE_PROJECT_IDS = [
  'knowledge-graph-management',
  'email-classification',
  'patent-research',
  'tech-scouting',
  'meeting-transcript-analysis',
  'multi-agent-debate',
] as const;

const HOMEPAGE_PROJECTS = HOMEPAGE_PROJECT_IDS.map(
  (id) => PROJECTS.find((p) => p.id === id)!
);

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
      const cardWidth = carousel.scrollWidth / HOMEPAGE_PROJECTS.length;
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
    const cardWidth = carousel.scrollWidth / HOMEPAGE_PROJECTS.length;
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
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
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
            {HOMEPAGE_PROJECTS.map((project, index) => (
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
            {HOMEPAGE_PROJECTS.map((_, index) => (
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

        {/* Link zur vollständigen Use-Case-Übersicht */}
        <div className="text-center mt-2 mb-8">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-1.5 text-[#c2007a] font-heading font-semibold hover:underline"
          >
            {t('allUseCasesLink')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

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
