'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import LeadFormModal from '@/components/LeadFormModal';

interface LeadFormContextValue {
  openLeadForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error('useLeadForm muss innerhalb von LeadFormProvider verwendet werden');
  }
  return ctx;
}

/**
 * Stellt das Erstgespräch-Modal global bereit und faengt Klicks auf jeden
 * Link ab, dessen href auf "#kontakt" endet (Header, Footer, Unterseiten-CTAs).
 * Ohne das oeffnete "#kontakt" auf Seiten ohne eigenen #kontakt-Anker gar nichts,
 * siehe aimation-website-specs/2026-07-18_spec-01-technik-fixes.md Punkt 6.
 */
export default function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href$="#kontakt"]');
      if (anchor) {
        e.preventDefault();
        setIsOpen(true);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <LeadFormContext.Provider value={{ openLeadForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </LeadFormContext.Provider>
  );
}
