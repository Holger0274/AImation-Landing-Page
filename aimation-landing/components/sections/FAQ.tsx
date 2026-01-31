'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Was kostet das?',
    answer:
      'Die Investition richtet sich nach Umfang und Komplexität. Ein Erstgespräch ist kostenlos – dort klären wir, was für Ihr Unternehmen sinnvoll ist und welches Budget realistisch wäre. Keine Überraschungen.',
  },
  {
    question: 'Wie schnell sehe ich Ergebnisse?',
    answer:
      'Bei Schulungen sofort – Ihr Team kann das Gelernte am nächsten Tag anwenden. Bei Automatisierungsprojekten rechnen wir mit 2-6 Wochen bis zum ersten funktionierenden Prototyp, je nach Komplexität.',
  },
  {
    question: 'Brauche ich dafür eine IT-Abteilung?',
    answer:
      'Nein. Ich arbeite mit dem, was da ist. Viele meiner Kunden haben keine dedizierte IT – genau dafür bin ich da. Von der Strategie bis zur Umsetzung aus einer Hand.',
  },
  {
    question: 'Funktioniert das mit unseren bestehenden Systemen?',
    answer:
      'In der Regel ja. Ich arbeite tool-agnostisch und finde Lösungen, die sich in Ihre bestehende Infrastruktur integrieren – ob Microsoft 365, Google Workspace, SAP oder branchenspezifische Software.',
  },
  {
    question: 'Wie messen wir den ROI?',
    answer:
      'Vor jedem Projekt definieren wir gemeinsam messbare Ziele: Zeitersparnis in Stunden, reduzierte Fehlerquoten, eingesparte Kosten. Nach der Umsetzung messen wir gegen diese Baseline.',
  },
  {
    question: 'Was passiert mit unseren Daten?',
    answer:
      'Datenschutz ist nicht verhandelbar. Ich arbeite DSGVO-konform, bevorzuge europäische oder lokale Lösungen wo möglich, und sensible Daten verlassen Ihr Unternehmen nur, wenn Sie es explizit freigeben.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-heading font-semibold text-lg pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-magenta flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Häufige <span className="gradient-text">Fragen</span>
          </h2>
          <p className="text-lg text-gray-600">Die Antworten auf die wichtigsten Fragen</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
