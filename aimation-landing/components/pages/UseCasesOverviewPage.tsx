'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import ProjectCard from '@/components/sections/ProjectShowcase/ProjectCard';
import { PROJECTS } from '@/lib/data/projects';
import { SolutionWorld, SOLUTION_WORLD_COLORS } from '@/components/sections/ProjectShowcase/types';
import { useLeadForm } from '@/components/LeadFormProvider';
import { Link } from '@/i18n/navigation';
import { AI2CAD_VIDEOS, AI2CAD_PATH } from '@/lib/data/ai2cad';

const SOLUTION_WORLDS: SolutionWorld[] = ['KNOW', 'THINK', 'FLOW', 'WORK'];

export default function UseCasesOverviewPage() {
  const t = useTranslations('useCasesPage');
  const en = useLocale() === 'en';
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
          backgroundColor: 'transparent',
          backgroundImage:
            'none',
          backgroundSize: '72px 72px',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-ink mb-6"
          >
            {t('h1')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted font-inter"
          >
            {t('intro')}
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="engineering-wrap pb-8" aria-labelledby="cad-demos-title">
        <div className="border-y border-line py-8">
          <p className="technical-label mb-3">AI2CAD / AI2CAE</p>
          <h2 id="cad-demos-title" className="font-heading text-2xl md:text-3xl mb-4">{en ? 'CAD automation and FEM with ' : 'CAD-Automatisierung und FEM mit '}<span className="highlight">{en ? 'AI' : 'KI'}</span></h2>
          <p className="max-w-3xl text-muted leading-relaxed">{en ? 'A mounting plate from text, a shaft from a hand sketch and FEM analysis under a 1,500 N load. These videos show our own development demonstrations, including the remaining engineering checks.' : 'Eine Montageplatte aus Text, eine Welle aus einer Handskizze und eine FEM-Berechnung unter 1.500 N. Die Videos zeigen eigene Entwicklungsdemonstrationen mit den noch offenen fachlichen Prüfaufgaben.'}</p>
          <ul className="grid gap-3 md:grid-cols-2 mt-5">
            {AI2CAD_VIDEOS.map(chapter => <li key={chapter.id}><Link href={`${AI2CAD_PATH}/${chapter.slug}`} className="engineering-text-link">{chapter[en ? 'en' : 'de'].title} →</Link></li>)}
          </ul>
          <Link href={AI2CAD_PATH} className="engineering-text-link mt-5">{en ? 'AI2CAD and AI2CAE: workflow and questions' : 'AI2CAD und AI2CAE: Ablauf und Fragen'} →</Link>
        </div>
      </section>
      <section className="engineering-wrap pb-8" aria-labelledby="praxisleitfaden-title">
        <div className="border-y border-line py-8">
          <p className="technical-label mb-3">Praxisleitfaden</p>
          <h2 id="praxisleitfaden-title" className="font-heading text-2xl md:text-3xl mb-4">Excel und PowerPoint durch Dashboards und Apps ablösen</h2>
          <p className="max-w-3xl text-muted leading-relaxed">Kalkulationstabellen und gewachsene Excel-Tools in Anwendungen mit gemeinsamer Datenbasis überführen. Mit BI-Auswertungen, geprüfter Rechenlogik, gezielter KI-Unterstützung und nachvollziehbarer Historie.</p>
          <Link href="/use-cases/excel-powerpoint-berichte" className="engineering-text-link mt-5">Den Weg zur Anwendung ansehen →</Link>
        </div>
      </section>
      <section className="engineering-wrap py-10" aria-labelledby="anwendungsdemos-title">
        <p className="technical-label mb-3">Eigene Anwendungen mit Video</p>
        <h2 id="anwendungsdemos-title" className="font-heading text-2xl md:text-3xl mb-6">Vom Ablauf zum gebauten Werkzeug.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['/use-cases/variantenmanagement', 'VariantHub', 'Technische Varianten und Regeländerungen prüfen. Mit KI entwickelter, regelbasierter Prototyp.'],
            ['/use-cases/skillmatrix-entwicklung', 'Skillmatrix', 'Kompetenzabdeckung, Wissensrisiken und Transferbedarf im Team betrachten. Demo mit Beispieldaten.'],
            ['/use-cases/projektsteuerung-entwicklung', 'PM Demonstrator', 'Kapazitäten, Abhängigkeiten und Berichtsentwürfe zusammenführen. Proof of Concept.'],
          ].map(([href, title, description]) => <article key={href} className="border-t border-line py-6"><h3 className="font-heading text-xl mb-4">{title}</h3><p className="text-muted leading-relaxed">{description}</p><Link href={href} className="engineering-text-link mt-5">Video und Ablauf ansehen →</Link></article>)}
        </div>
        <Link href="/ki-produktentwicklung" className="engineering-text-link mt-6">Die Aufgaben in der Produktentwicklung im Überblick →</Link>
      </section>
      <section className="py-16 md:py-24" style={{ backgroundColor: 'transparent' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kategorie-Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('ALL')}
              aria-pressed={activeFilter === 'ALL'}
              className={`px-4 py-2 rounded-full text-sm font-heading font-semibold border transition-colors ${
                activeFilter === 'ALL'
                  ? 'bg-[#071013] text-white border-line'
                  : 'bg-surface text-ink border-line hover:border-line/30'
              }`}
            >
              {t('filterAll')}
            </button>
            {SOLUTION_WORLDS.map((world) => (
              <button
                key={world}
                onClick={() => setActiveFilter(world)}
                aria-pressed={activeFilter === world}
                className="px-4 py-2 rounded-full text-sm font-heading font-semibold border transition-colors"
                style={
                  activeFilter === world
                    ? { backgroundColor: SOLUTION_WORLD_COLORS[world], borderColor: SOLUTION_WORLD_COLORS[world], color: world === 'WORK' || world === 'THINK' ? '#071013' : '#ffffff' }
                    : { backgroundColor: 'var(--surface)', borderColor: 'var(--line)', color: 'var(--ink)' }
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
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-[#071013] font-heading font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(249,0,147,0.4)] transition-all duration-300"
          >
            {t('ctaButton')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
