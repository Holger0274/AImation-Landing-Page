import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FounderIntro from '@/components/sections/FounderIntro';
import EarlyDemos from '@/components/sections/EarlyDemos';
import PainPoints from '@/components/sections/PainPoints';
import TimeEstimate from '@/components/sections/TimeEstimate';
import QktImpact from '@/components/sections/QktImpact';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Services from '@/components/sections/Services';
import DevelopmentLandscape from '@/components/sections/DevelopmentLandscape';
import Process from '@/components/sections/Process';
import SelfBuilt from '@/components/sections/SelfBuilt';
import EuAiActNotice from '@/components/sections/EuAiActNotice';
import About from '@/components/sections/About';
import Partnership from '@/components/sections/Partnership';
import FAQ from '@/components/sections/FAQ';
import { getHomeFaqs } from '@/lib/data/faqs';
import FinalCTA from '@/components/sections/FinalCTA';
import { FAQPageSchema } from '@/components/StructuredData';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { HOME_COPY, pageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = HOME_COPY[locale === 'en' ? 'en' : 'de'];
  return pageMetadata('/', locale, copy.title, copy.description);
}

/**
 * Static Site Generation (SSG) für SEO & AI-Crawler.
 *
 * Inhalte und strukturierte Daten sind ohne JavaScript-Ausführung lesbar.
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
  const faqs = getHomeFaqs(locale);

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
      <main id="main-content" className="home-page">
        <Hero />
        <FounderIntro />
        <EarlyDemos />
        <PainPoints />
        <TimeEstimate />
        <QktImpact />
        <Process />
        <BeforeAfter />
        <Services />
        <DevelopmentLandscape />
        <SelfBuilt />
        <EuAiActNotice />
        <About />
        <Partnership />
        <FAQ items={faqs} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
