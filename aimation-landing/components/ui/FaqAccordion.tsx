'use client';

import { useId, useState } from 'react';
import { motion } from 'framer-motion';

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqAccordionItem[];
  className?: string;
}

/**
 * Antworten stehen immer im HTML (auch beim ersten Server-Render), das
 * Auf/Zu ist reines CSS (grid-template-rows), kein bedingtes Rendern.
 * Ohne das sehen AI-Crawler und Featured-Snippet-Bots nur die Fragen.
 */
export default function FaqAccordion({ items, className }: FaqAccordionProps) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-2 ${className ?? ''}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.question}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-surface rounded-xl border border-line overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-heading font-semibold text-ink hover:bg-ground transition-colors"
              aria-expanded={isOpen}
              aria-controls={`${id}-${i}`}
            >
              <span style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}>{item.question}</span>
              <span
                className={`flex-shrink-0 text-magenta-light text-lg transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`${id}-${i}`}
              aria-hidden={!isOpen}
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-muted font-inter text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
