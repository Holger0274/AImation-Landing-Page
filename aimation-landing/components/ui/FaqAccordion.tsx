'use client';

import { useState } from 'react';
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-2 ${className ?? ''}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-heading font-semibold text-[#071013] hover:bg-[#faf9f7] transition-colors"
              aria-expanded={isOpen}
            >
              <span style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}>{item.question}</span>
              <span
                className={`flex-shrink-0 text-[#f90093] text-lg transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-gray-600 font-inter text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
