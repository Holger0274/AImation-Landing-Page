import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  WebSiteSchema,
  PersonSchema,
} from '@/components/StructuredData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale !== 'en';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

  return {
    metadataBase: new URL(siteUrl),

    title: {
      default: isDE
        ? 'KI-Beratung & Automatisierung für KMUs | AI.mation'
        : 'AI Consulting & Automation for SMEs | AI.mation',
      template: '%s | AI.mation',
    },

    description: isDE
      ? 'KI-Beratung, Schulungen & Automatisierung für den Mittelstand. Ehrliche Einschätzung, ob KI hilft. 20 Jahre Engineering-Erfahrung. Kostenloses Erstgespräch.'
      : 'AI consulting, training & automation for mid-sized businesses. Honest assessment of whether AI helps. 20 years engineering experience. Free initial consultation.',

    keywords: isDE
      ? [
          'KI-Beratung KMU',
          'KI-Automatisierung Mittelstand',
          'KI-Schulungen Unternehmen',
          'Prozessautomatisierung',
          'AI Readiness Assessment',
          'RAG-Systeme',
          'n8n Automatisierung',
          'Multi-Agent-Systeme',
          'Microsoft Copilot Training',
          'KI-Beratung DACH',
          'Künstliche Intelligenz Mittelstand',
        ]
      : [
          'AI consulting SME',
          'AI automation business',
          'AI training companies',
          'process automation',
          'AI readiness assessment',
          'RAG systems',
          'AI consulting Germany',
        ],

    authors: [{ name: 'Holger Peschke', url: 'https://www.linkedin.com/in/holgerpeschke/' }],

    alternates: {
      canonical: isDE ? '/' : '/en/',
      languages: {
        'de-DE': '/',
        'en': '/en/',
      },
    },

    openGraph: {
      type: 'website',
      locale: isDE ? 'de_DE' : 'en_US',
      alternateLocale: isDE ? ['en_US'] : ['de_DE'],
      url: isDE ? '/' : '/en/',
      siteName: 'AI.mation',
      title: isDE
        ? 'KI-Beratung für KMUs: Klartext, Praxis, bezahlbar | AI.mation'
        : 'AI Consulting for SMEs: Clarity, Practice, Affordable | AI.mation',
      description: isDE
        ? '40% der Arbeitszeit geht für Aufgaben drauf, die niemand vermissen würde. KI-Beratung, Schulungen & Automatisierung für den Mittelstand. Ohne leere Versprechen.'
        : '40% of working time goes on tasks no one would miss. AI consulting, training & automation for SMEs. No empty promises.',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: isDE
            ? 'AI.mation - KI-Beratung und Automatisierung für den Mittelstand'
            : 'AI.mation - AI Consulting and Automation for SMEs',
          type: 'image/png',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: isDE ? 'KI-Beratung für KMUs | AI.mation' : 'AI Consulting for SMEs | AI.mation',
      description: isDE
        ? '40% Zeitersparnis durch KI-Automatisierung. Ehrliche Einschätzung, ob KI für Ihr KMU sinnvoll ist. Kostenloses Erstgespräch.'
        : '40% time savings through AI automation. Honest assessment of whether AI makes sense for your business. Free initial consultation.',
      images: ['/images/og-image.png'],
      creator: '@holgerpeschke',
      site: '@aimation_de',
    },

    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

  return (
    <>
      {/*
        Structured Data (Schema.org) für SEO & AI-Crawler
        WICHTIG: Alle Schemas hier als Server Components rendern,
        damit sie im initialen HTML sichtbar sind.
        GPTBot, ClaudeBot, PerplexityBot koennen kein JavaScript ausfuehren.
      */}
      <OrganizationSchema siteUrl={siteUrl} />
      <LocalBusinessSchema siteUrl={siteUrl} />
      <WebSiteSchema siteUrl={siteUrl} />
      <ServiceSchema siteUrl={siteUrl} />
      {/* K3 FIX: PersonSchema von 'use client' About.tsx hierher verlagert */}
      <PersonSchema siteUrl={siteUrl} />
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-magenta focus:to-magenta-light focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        {locale === 'de' ? 'Zum Hauptinhalt springen' : 'Skip to main content'}
      </a>
      {/*
        W7 FIX: Calendly-Scripts werden nicht global geladen.
        Sie werden jetzt nur auf Seiten geladen, die sie benoetigen.
        Globale externe Scripts verschlechtern die Core Web Vitals (TBT/INP)
        auf Seiten wie Impressum und Datenschutz, die kein Calendly brauchen.
        Die LeadFormModal und FinalCTA Komponenten laden Calendly bei Bedarf.
      */}
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
