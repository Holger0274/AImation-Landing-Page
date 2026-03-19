'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
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
  NotebookLM,
} from '@lobehub/icons';
import { SupabaseIcon } from '@/components/icons/SupabaseIcon';
import { ObsidianIcon } from '@/components/icons/ObsidianIcon';
import { PineconeIcon } from '@/components/icons/PineconeIcon';
import { ClaudeAIIcon } from '@/components/icons/ClaudeAIIcon';

const stats = [
  {
    value: 18000,
    suffix: '+',
    label: 'LinkedIn-Follower vertrauen unseren KI-Einschätzungen',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Jahre Engineering-Erfahrung',
  },
  {
    value: 10,
    suffix: '-1000',
    label: 'Mitarbeiter in Zielunternehmen',
  },
];

interface ToolPill {
  name: string;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
}

const OpenAIColor = (OpenAI as any).Color ?? OpenAI;
const ClaudeColor = (Claude as any).Color ?? Claude;
const GeminiColor = (Gemini as any).Color ?? Gemini;
const DeepSeekColor = (DeepSeek as any).Color ?? DeepSeek;
const MistralColor = (Mistral as any).Color ?? Mistral;
const PerplexityColor = (Perplexity as any).Color ?? Perplexity;
const N8nColor = (N8n as any).Color ?? N8n;
const MakeColor = (Make as any).Color ?? Make;
const CopilotColor = (Copilot as any).Color ?? Copilot;
const GoogleColor = (Google as any).Color ?? Google;
const NotionColor = (Notion as any).Color ?? Notion;
const LovableColor = (Lovable as any).Color ?? Lovable;
const ClineColor = (Cline as any).Color ?? Cline;
const NotebookLMColor = (NotebookLM as any).Color ?? NotebookLM;

const TOOL_PILLS: ToolPill[] = [
  // Reihe 1: AI Assistants
  { name: 'ChatGPT', category: 'AI', categoryColor: 'ai', icon: <OpenAIColor size={28} /> },
  { name: 'Claude.ai', category: 'AI', categoryColor: 'ai', icon: <ClaudeAIIcon className="w-7 h-7" /> },
  { name: 'Gemini', category: 'AI', categoryColor: 'ai', icon: <GeminiColor size={28} /> },
  { name: 'Perplexity', category: 'Research', categoryColor: 'ai', icon: <PerplexityColor size={28} /> },
  { name: 'DeepSeek', category: 'AI', categoryColor: 'ai', icon: <DeepSeekColor size={28} /> },
  { name: 'Mistral', category: 'AI', categoryColor: 'ai', icon: <MistralColor size={28} /> },
  // Reihe 2: Automation + Enterprise
  { name: 'n8n', category: 'Automation', categoryColor: 'automation', icon: <N8nColor size={28} /> },
  { name: 'Make.com', category: 'Automation', categoryColor: 'automation', icon: <MakeColor size={28} /> },
  { name: 'MS Copilot', category: 'Enterprise', categoryColor: 'enterprise', icon: <CopilotColor size={28} /> },
  { name: 'Google Workspace', category: 'Enterprise', categoryColor: 'enterprise', icon: <GoogleColor size={28} /> },
  { name: 'Notion', category: 'Wissen', categoryColor: 'productivity', icon: <NotionColor size={28} /> },
  // Reihe 3: Dev + Infra + Speziell
  { name: 'Claude Code', category: 'Dev', categoryColor: 'dev', icon: <ClineColor size={28} /> },
  { name: 'Claude.ai Cowork', category: 'Kollaboration', categoryColor: 'ai', icon: <ClaudeColor size={28} /> },
  { name: 'Lovable', category: 'Dev', categoryColor: 'dev', icon: <LovableColor size={28} /> },
  { name: 'Supabase', category: 'Datenbank', categoryColor: 'dev', icon: <SupabaseIcon className="w-7 h-7" /> },
  { name: 'Obsidian', category: 'Wissen', categoryColor: 'productivity', icon: <ObsidianIcon className="w-7 h-7" /> },
  { name: 'Pinecone', category: 'AI Infra', categoryColor: 'dev', icon: <PineconeIcon className="w-7 h-7" /> },
  { name: 'NotebookLM', category: 'Research', categoryColor: 'ai', icon: <NotebookLMColor size={28} /> },
];

const ROW_1 = TOOL_PILLS.slice(0, 6);
const ROW_2 = TOOL_PILLS.slice(6, 11);
const ROW_3 = TOOL_PILLS.slice(11, 18);

const categoryStyles: Record<string, string> = {
  ai: 'bg-violet-50 text-violet-600 border-violet-100',
  automation: 'bg-rose-50 text-rose-600 border-rose-100',
  enterprise: 'bg-blue-50 text-blue-600 border-blue-100',
  productivity: 'bg-amber-50 text-amber-600 border-amber-100',
  dev: 'bg-emerald-50 text-emerald-600 border-emerald-100',
};

function ToolPillItem({ tool, delay }: { tool: ToolPill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm cursor-default select-none hover:border-[#f90093]/30 hover:shadow-md transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#f90093]/5 transition-colors duration-300">
        {tool.icon}
      </div>
      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-heading font-semibold text-[#071013] whitespace-nowrap leading-tight">
          {tool.name}
        </span>
        <span
          className={`mt-0.5 inline-flex items-center text-[10px] font-medium px-1.5 py-0.5 rounded-full border whitespace-nowrap w-fit ${categoryStyles[tool.categoryColor]}`}
        >
          {tool.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Vertrauen durch <span className="gradient-text">Erfahrung</span>
          </h2>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold gradient-text">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  separator={true}
                  delay={index * 0.1}
                />
              </div>
              <p className="text-gray-600 mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            Wir arbeiten mit den <span className="gradient-text">besten Tools</span>
          </h3>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Herstellerunabhängig – wir kennen alle relevanten KI-Tools und finden die richtige
            Lösung für Ihren Use Case
          </p>
        </motion.div>

        {/* Floating Pills – 3 versetzte Reihen */}
        <div className="space-y-4 overflow-hidden">
          {/* Reihe 1 – zentriert */}
          <div className="flex flex-wrap justify-center gap-3">
            {ROW_1.map((tool, i) => (
              <ToolPillItem key={tool.name} tool={tool} delay={i * 0.07} />
            ))}
          </div>

          {/* Reihe 2 – leicht nach rechts versetzt */}
          <div className="flex flex-wrap justify-center gap-3 md:translate-x-8">
            {ROW_2.map((tool, i) => (
              <ToolPillItem key={tool.name} tool={tool} delay={0.1 + i * 0.07} />
            ))}
          </div>

          {/* Reihe 3 – leicht nach links versetzt */}
          <div className="flex flex-wrap justify-center gap-3 md:-translate-x-6">
            {ROW_3.map((tool, i) => (
              <ToolPillItem key={tool.name} tool={tool} delay={0.2 + i * 0.07} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
