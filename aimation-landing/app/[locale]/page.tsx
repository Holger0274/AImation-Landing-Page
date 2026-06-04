import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Services from '@/components/sections/Services';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Process from '@/components/sections/Process';
import { PilotSection } from '@/components/sections/PilotSection';
import SocialProof from '@/components/sections/SocialProof';
import About from '@/components/sections/About';
import WhyAImation from '@/components/sections/WhyAImation';
import FAQ from '@/components/sections/FAQ';
import { faqs } from '@/lib/data/faqs';
import FinalCTA from '@/components/sections/FinalCTA';
import { FAQPageSchema } from '@/components/StructuredData';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

/**
 * Static Site Generation (SSG) für SEO & AI-Crawler.
 *
 * KRITISCH: AI-Crawler wie GPTBot, ClaudeBot, PerplexityBot können KEIN
 * JavaScript ausführen. Ohne SSG/SSR sehen sie nur leere HTML-Shells.
 *
 * Statisches Rendering wird über generateStaticParams + setRequestLocale
 * (next-intl) erreicht. KEIN 'force-static': das würde das Root-Layout
 * statisch einfrieren und das pro-Locale-`<html lang>`-Attribut verhindern.
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Locale fuer statisches Rendering setzen, bevor next-intl-Hooks laufen.
  // Layout und Page werden von Next.js unabhaengig gerendert, daher hier erneut noetig.
  setRequestLocale(locale);

  return (
    <>
      {/*
        K3 FIX: FAQPageSchema hier als Server Component einbinden.
        Da page.tsx eine Server Component ist, wird das Schema im initialen
        HTML-Response gerendert und ist fuer AI-Crawler sichtbar.
        Die FAQ-Komponente selbst ist 'use client' fuer die Accordion-Interaktion,
        aber das Schema wird serverseitig aus den exportierten faqs-Daten erzeugt.
      */}
      <FAQPageSchema faqs={faqs} />
      <Header />
      <main id="main-content">
        <Hero />
        <PainPoints />
        <BeforeAfter />
        <Process />
        <PilotSection />
        <Services />
        <ProjectShowcase />
        <SocialProof />
        <About />
        <WhyAImation />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
