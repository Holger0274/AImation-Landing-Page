'use client';
import { ArrowUpRight } from 'lucide-react';
import { useLeadForm } from '@/components/LeadFormProvider';
export default function ArticleContact() {
  const { openLeadForm } = useLeadForm();
  return <button type="button" onClick={openLeadForm} className="engineering-button">Kostenloses Erstgespräch vereinbaren<ArrowUpRight size={18} aria-hidden="true" /></button>;
}
