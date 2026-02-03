/**
 * AI.mation Tools Configuration
 * Centralized configuration for all AI tools and platforms we work with.
 * Icons are automatically managed via @lobehub/icons and custom components.
 */

import {
  OpenAI,
  Claude,
  Gemini,
  DeepSeek,
  Mistral,
  Perplexity,
  N8n,
  Make,
  Copilot,
  Google,
  Notion,
  Lovable,
  Cline,
} from '@lobehub/icons';
import { SupabaseIcon } from '@/components/icons/SupabaseIcon';
import { ObsidianIcon } from '@/components/icons/ObsidianIcon';
import { PineconeIcon } from '@/components/icons/PineconeIcon';
import { AirtableIcon } from '@/components/icons/AirtableIcon';
import { ComponentType } from 'react';

export interface Tool {
  name: string;
  category: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  description?: string;
}

/**
 * Complete list of AI tools and platforms AI.mation works with.
 * Organized by category for easy filtering and display.
 */
export const AI_TOOLS: Tool[] = [
  // AI Assistants & LLMs
  {
    name: 'ChatGPT',
    category: 'AI Assistants',
    icon: OpenAI,
    description: 'Text generation, analysis, coding',
  },
  {
    name: 'Claude AI',
    category: 'AI Assistants',
    icon: Claude,
    description: 'Complex analyses, documents, coding',
  },
  {
    name: 'Gemini',
    category: 'AI Assistants',
    icon: Gemini,
    description: 'Multimodal AI, Google integration',
  },
  {
    name: 'DeepSeek',
    category: 'AI Assistants',
    icon: DeepSeek,
    description: 'Open source AI alternative',
  },
  {
    name: 'Mistral',
    category: 'AI Assistants',
    icon: Mistral,
    description: 'European AI, data privacy focus',
  },
  {
    name: 'Perplexity AI',
    category: 'AI Assistants',
    icon: Perplexity,
    description: 'Research, fact-checking',
  },

  // Automation & Workflows
  {
    name: 'n8n',
    category: 'Automation',
    icon: N8n,
    description: 'Open source workflow automation',
  },
  {
    name: 'Make.com',
    category: 'Automation',
    icon: Make,
    description: 'No-code automation platform',
  },

  // Enterprise & Productivity
  {
    name: 'Microsoft Copilot',
    category: 'Enterprise',
    icon: Copilot,
    description: 'Microsoft 365 AI integration',
  },
  {
    name: 'Google Workspace',
    category: 'Enterprise',
    icon: Google,
    description: 'Google Docs, Sheets, Gemini integration',
  },
  {
    name: 'Notion',
    category: 'Productivity',
    icon: Notion,
    description: 'Documentation, wikis, knowledge management',
  },
  {
    name: 'Obsidian',
    category: 'Productivity',
    icon: ObsidianIcon,
    description: 'Personal knowledge management',
  },

  // Development & Data
  {
    name: 'Lovable',
    category: 'Development',
    icon: Lovable,
    description: 'Rapid prototyping, web apps',
  },
  {
    name: 'Claude Code',
    category: 'Development',
    icon: Cline,
    description: 'AI-assisted development',
  },
  {
    name: 'Supabase',
    category: 'Database',
    icon: SupabaseIcon,
    description: 'Backend, database, authentication',
  },
  {
    name: 'Airtable',
    category: 'Database',
    icon: AirtableIcon,
    description: 'Flexible database, workflows',
  },
  {
    name: 'Pinecone',
    category: 'AI Infrastructure',
    icon: PineconeIcon,
    description: 'Vector database, RAG systems',
  },
];

/**
 * Tools grouped by category for organized display
 */
export const TOOLS_BY_CATEGORY = AI_TOOLS.reduce((acc, tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {} as Record<string, Tool[]>);

/**
 * Get all unique categories
 */
export const TOOL_CATEGORIES = Array.from(new Set(AI_TOOLS.map((t) => t.category)));

/**
 * Get tools by category
 */
export const getToolsByCategory = (category: string): Tool[] => {
  return AI_TOOLS.filter((tool) => tool.category === category);
};

/**
 * Total number of tools
 */
export const TOTAL_TOOLS = AI_TOOLS.length;
