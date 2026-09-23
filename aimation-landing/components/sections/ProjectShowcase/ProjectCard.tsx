'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Project, SOLUTION_WORLD_COLORS, STATUS_CONFIG } from './types';
import ImagePlaceholder from './ImagePlaceholder';
import { trackSpotlight } from '@/components/visuals/SpotlightPanel';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projectShowcase');
  const statusConfig = STATUS_CONFIG[project.status];

  const cardContent = (
    <motion.div
      className={`
        spot-card group relative h-full rounded-xl overflow-hidden
        transition-all duration-300
        hover:shadow-xl
      `}
      whileHover={{ y: -4 }}
      onPointerMove={trackSpotlight}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-video overflow-hidden bg-raised">
        {project.detailUrl && project.status === 'completed' && (
          <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <svg className="w-4 h-4 text-magenta-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm font-semibold text-ink">{t('detailsView')}</span>
            </div>
          </div>
        )}
        {project.image.type === 'placeholder' && project.image.placeholderType ? (
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImagePlaceholder
              type={project.image.placeholderType}
              solutionWorld={project.solutionWorld}
              alt={t(`cards.${project.id}.alt`)}
            />
          </motion.div>
        ) : project.image.src ? (
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image.src}
              alt={t(`cards.${project.id}.alt`)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain"
            />
          </motion.div>
        ) : null}
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-4">
        {/* Solution World Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: SOLUTION_WORLD_COLORS[project.solutionWorld] }}
        >
          {project.solutionWorld}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-ink font-space-grotesk">
          {t(`cards.${project.id}.title`)}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed font-inter">
          {t(`cards.${project.id}.description`)}
        </p>

        {/* Metric (if available) */}
        {project.metrics && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ground rounded-lg border border-line">
            <svg
              className="w-4 h-4 text-magenta-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-sm font-medium text-ink">{t(`cards.${project.id}.metrics`)}</span>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-muted bg-raised rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status + Detail Link */}
        <div className="pt-2 border-t border-line">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${statusConfig.dotColor}`} />
              <span className={`text-xs font-medium ${statusConfig.color}`}>
                {t(`status.${project.status}`)}
              </span>
            </div>
            {project.detailUrl && project.status === 'completed' && (
              <span className="flex items-center gap-1 text-xs font-medium text-magenta-light group-hover:gap-2 transition-all duration-200">
                {t('detailsView')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>

    </motion.div>
  );

  if (project.detailUrl && project.status === 'completed') {
    return (
      <Link href={project.detailUrl} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
