'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectCard from '@/components/sections/ProjectShowcase/ProjectCard';
import { PROJECTS } from '@/lib/data/projects';
import { SolutionWorld, SOLUTION_WORLD_COLORS } from '@/components/sections/ProjectShowcase/types';
import { useLeadForm } from '@/components/LeadFormProvider';

const SOLUTION_WORLDS: SolutionWorld[] = ['KNOW', 'THINK', 'FLOW', 'WORK'];

export default function UseCasesOverviewPage() {
  const t = useTranslations('useCasesPage');
  const { openLeadForm } = useLeadForm();
  const [activeFilter, setActiveFilter] = useState<SolutionWorld | 'ALL'>('ALL');

  const filteredProjects = useMemo(
    () => (activeFilter === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.solutionWorld === activeFilter)),
    [activeFilter]
  );

  return (
    <main id="main-content">
      {/* Hero / Intro */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{
          backgroundColor: '#faf9f7',
          backgroundImage:
            'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-[#071013] mb-6"
          >
            {t('h1')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 font-inter"
          >
            {t('intro')}
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#faf9f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kategorie-Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-4 py-2 rounded-full text-sm font-heading font-semibold border transition-colors ${
                activeFilter === 'ALL'
                  ? 'bg-[#071013] text-white border-[#071013]'
                  : 'bg-white text-[#071013] border-gray-200 hover:border-[#071013]/30'
              }`}
            >
              {t('filterAll')}
            </button>
            {SOLUTION_WORLDS.map((world) => (
              <button
                key={world}
                onClick={() => setActiveFilter(world)}
                className="px-4 py-2 rounded-full text-sm font-heading font-semibold border transition-colors"
                style={
                  activeFilter === world
                    ? { backgroundColor: SOLUTION_WORLD_COLORS[world], borderColor: SOLUTION_WORLD_COLORS[world], color: '#fff' }
                    : { backgroundColor: '#fff', borderColor: '#e5e7eb', color: '#071013' }
                }
              >
                {world}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 md:py-28 text-white text-center"
        style={{ backgroundColor: '#071013' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">{t('ctaHeadline')}</h2>
          <p className="text-gray-400 mb-10">{t('ctaText')}</p>
          <button
            onClick={openLeadForm}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-white font-heading font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(249,0,147,0.4)] transition-all duration-300"
          >
            {t('ctaButton')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
