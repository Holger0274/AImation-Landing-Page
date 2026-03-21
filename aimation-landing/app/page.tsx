import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Services from '@/components/sections/Services';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Process from '@/components/sections/Process';
import SocialProof from '@/components/sections/SocialProof';
import About from '@/components/sections/About';
import WhyAImation from '@/components/sections/WhyAImation';
import FAQ from '@/components/sections/FAQ';
import { faqs } from '@/lib/data/faqs';
import FinalCTA from '@/components/sections/FinalCTA';
import { FAQPageSchema } from '@/components/StructuredData';

/**
 * Static Site Generation (SSG) aktivieren für SEO & AI-Crawler
 *
 * KRITISCH: AI-Crawler wie GPTBot, ClaudeBot, PerplexityBot können
 * KEIN JavaScript ausführen! Ohne SSG/SSR sehen sie nur leere HTML-Shells.
 *
 * 'force-static' = Seite wird beim Build gerendert
 */
export const dynamic = 'force-static';

export default function Home() {
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
        <Services />
        <ProjectShowcase />
        <Process />
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
