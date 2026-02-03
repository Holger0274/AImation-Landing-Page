export type SolutionWorld = 'FLOW' | 'KNOW' | 'THINK' | 'WORK';
export type ProjectStatus = 'completed' | 'in-progress' | 'coming-soon';
export type PlaceholderType = 'n8n' | 'excalidraw' | 'screenshot' | 'diagram';

export interface Project {
  id: string;
  title: string;
  description: string;
  solutionWorld: SolutionWorld;
  status: ProjectStatus;
  tags: string[];
  metrics?: string;
  image: {
    type: 'placeholder' | 'image';
    src?: string;
    placeholderType?: PlaceholderType;
    alt: string;
  };
}

export const SOLUTION_WORLD_COLORS: Record<SolutionWorld, string> = {
  FLOW: '#0077B6',
  KNOW: '#7209B7',
  THINK: '#F72585',
  WORK: '#4CC9F0',
};

export const SOLUTION_WORLD_LABELS: Record<SolutionWorld, string> = {
  FLOW: 'Workflow-Automatisierung',
  KNOW: 'Wissensmanagement',
  THINK: 'KI-Assistenten',
  WORK: 'Arbeitsplatz-Tools',
};

export const STATUS_CONFIG = {
  completed: {
    label: 'PoC abgeschlossen',
    color: 'text-green-600',
    dotColor: 'bg-green-500',
  },
  'in-progress': {
    label: 'In Entwicklung',
    color: 'text-amber-600',
    dotColor: 'bg-amber-500',
  },
  'coming-soon': {
    label: 'Coming Soon',
    color: 'text-gray-500',
    dotColor: 'bg-gray-400',
  },
};
