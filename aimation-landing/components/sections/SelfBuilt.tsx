'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  OpenAI,
  Claude,
  Mistral,
  N8n,
  Copilot,
  Google,
} from '@lobehub/icons';
import { SupabaseIcon } from '@/components/icons/SupabaseIcon';
import { ObsidianIcon } from '@/components/icons/ObsidianIcon';
import { useLeadForm } from '@/components/LeadFormProvider';
import DemoTile from '@/components/ui/DemoTile';

interface ToolPill {
  name: string;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
}

const OpenAIColor = (OpenAI as any).Color ?? OpenAI;
const ClaudeColor = (Claude as any).Color ?? Claude;
const MistralColor = (Mistral as any).Color ?? Mistral;
const N8nColor = (N8n as any).Color ?? N8n;
const CopilotColor = (Copilot as any).Color ?? Copilot;
const GoogleColor = (Google as any).Color ?? Google;

// 8 Tools, DSGVO-first kuratiert. Kein DeepSeek (Glaubwuerdigkeitsrisiko beim IT-Gatekeeper).
const TOOL_PILLS: ToolPill[] = [
  { name: 'Claude', category: 'LLM', categoryColor: 'llm', icon: <ClaudeColor size={28} /> },
  { name: 'ChatGPT (OpenAI)', category: 'LLM', categoryColor: 'llm', icon: <OpenAIColor size={28} /> },
  { name: 'Mistral', category: 'LLM, EU-Anbieter', categoryColor: 'llm', icon: <MistralColor size={28} /> },
  { name: 'Microsoft Copilot', category: 'Enterprise', categoryColor: 'enterprise', icon: <CopilotColor size={28} /> },
  { name: 'Google Workspace + Gemini', category: 'Enterprise', categoryColor: 'enterprise', icon: <GoogleColor size={28} /> },
  { name: 'n8n', category: 'Automatisierung, self-hosted möglich', categoryColor: 'automation', icon: <N8nColor size={28} /> },
  { name: 'Supabase', category: 'Datenbank, EU-Hosting möglich', categoryColor: 'dev', icon: <SupabaseIcon className="w-7 h-7" /> },
  { name: 'Obsidian / Notion', category: 'Wissensmanagement', categoryColor: 'productivity', icon: <ObsidianIcon className="w-7 h-7" /> },
];

const ROW_1 = TOOL_PILLS.slice(0, 4);
const ROW_2 = TOOL_PILLS.slice(4, 8);

const categoryStyles: Record<string, string> = {
  llm: 'bg-violet-50 text-violet-600 border-violet-100',
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
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#f90093]/5 transition-colors duration-300">
        {tool.icon}
      </div>
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

export default function SelfBuilt() {
  const t = useTranslations('selfBuilt');
  const tTools = useTranslations('socialProof');
  const { openLeadForm } = useLeadForm();

  return (
    <section
      className="py-20 md:py-32"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage:
          'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-[#071013] leading-tight">
            {t('headline')} <span className="gradient-text">{t('headlineHighlight')}</span>
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed">{t('body')}</p>
        </motion.div>

        {/* Demo-Kacheln. Screencasts liefert Holger, siehe TODO-assets.md */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          <DemoTile
            title={t('demoTiles.knowledgeGraph.title')}
            badge={t('demoTiles.badge')}
            placeholderNote={t('demoTiles.knowledgeGraph.note')}
          />
          <DemoTile
            title={t('demoTiles.requestAgent.title')}
            badge={t('demoTiles.badge')}
            placeholderNote={t('demoTiles.requestAgent.note')}
          />
          <DemoTile
            title={t('demoTiles.patentResearch.title')}
            badge={t('demoTiles.badge')}
            placeholderNote={t('demoTiles.patentResearch.note')}
          />
        </div>

        <div className="text-center mb-20">
          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
          >
            {t('ctaButton')}
          </button>
        </div>

        {/* Tool-Wand aus Spec 01, hier in die neue Sektion umgezogen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-[#071013]">
            {tTools('toolsHeadline')} <span className="gradient-text">{tTools('toolsHighlight')}</span>
          </h3>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">{tTools('toolsSubline')}</p>
        </motion.div>

        <div className="space-y-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-3">
            {ROW_1.map((tool, i) => (
              <ToolPillItem key={tool.name} tool={tool} delay={i * 0.07} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:translate-x-8">
            {ROW_2.map((tool, i) => (
              <ToolPillItem key={tool.name} tool={tool} delay={0.1 + i * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
