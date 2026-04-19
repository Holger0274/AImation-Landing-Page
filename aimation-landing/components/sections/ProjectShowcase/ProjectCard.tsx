'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project, SOLUTION_WORLD_COLORS, STATUS_CONFIG } from './types';
import ImagePlaceholder from './ImagePlaceholder';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusConfig = STATUS_CONFIG[project.status];
  const isComingSoon = project.status === 'coming-soon';

  const cardContent = (
    <motion.div
      className={`
        group relative h-full bg-white rounded-xl border border-gray-200 overflow-hidden
        transition-all duration-300
        hover:shadow-xl
        ${isComingSoon ? 'opacity-60' : ''}
      `}
      whileHover={{ y: -4 }}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        {project.detailUrl && project.status === 'completed' && (
          <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <svg className="w-4 h-4 text-[#f90093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm font-semibold text-[#071013]">Details ansehen</span>
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
              alt={project.image.alt}
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
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
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
        <h3 className="text-xl font-semibold text-[#071013] font-space-grotesk">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed font-inter">
          {project.description}
        </p>

        {/* Metric (if available) */}
        {project.metrics && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#faf9f7] rounded-lg border border-gray-200">
            <svg
              className="w-4 h-4 text-[#f90093]"
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
            <span className="text-sm font-medium text-[#071013]">{project.metrics}</span>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status + Detail Link */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${statusConfig.dotColor}`} />
              <span className={`text-xs font-medium ${statusConfig.color}`}>
                {statusConfig.label}
              </span>
            </div>
            {project.detailUrl && project.status === 'completed' && (
              <span className="flex items-center gap-1 text-xs font-medium text-[#f90093] group-hover:gap-2 transition-all duration-200">
                Details ansehen
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      {isComingSoon && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
          <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
            <span className="text-sm font-semibold text-gray-600">Coming Soon</span>
          </div>
        </div>
      )}
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
