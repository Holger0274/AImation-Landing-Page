import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  WebSiteSchema,
  PersonSchema,
} from '@/components/StructuredData';
import LeadFormProvider from '@/components/LeadFormProvider';

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
        ? 'KI in der Produktentwicklung: Beratung, Schulung, Umsetzung | AImation'
        : 'AI Consulting & Automation for SMEs | AImation',
      template: '%s | AImation',
    },

    description: isDE
      ? 'KI für die technische Produktentwicklung im Mittelstand: Wissenssicherung, Anfragen-Automatisierung, Recherche. DSGVO-konform, aus 20 Jahren Entwicklungspraxis. Einstieg mit der KI-Landkarte zum Festpreis.'
      : 'AI for technical product development in the German Mittelstand: knowledge retention, request automation, research. GDPR-compliant, built on 20 years of engineering practice. Start with the KI-Landkarte at a fixed price.',

    keywords: isDE
      ? [
          'KI-Beratung KMU',
          'KI-Automatisierung Mittelstand',
          'KI-Schulungen Unternehmen',
          'Prozessautomatisierung',
          'KI-Landkarte',
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
          'AI Landscape Map',
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
      siteName: 'AImation',
      title: isDE
        ? 'KI-Beratung für KMUs: Klartext, Praxis, bezahlbar | AImation'
        : 'AI Consulting for SMEs: Clarity, Practice, Affordable | AImation',
      description: isDE
        ? '40% der Arbeitszeit geht für Aufgaben drauf, die niemand vermissen würde. KI-Beratung, Schulungen & Automatisierung für den Mittelstand. Ohne leere Versprechen.'
        : '40% of working time goes on tasks no one would miss. AI consulting, training & automation for SMEs. No empty promises.',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: isDE
            ? 'AImation - KI-Beratung und Automatisierung für den Mittelstand'
            : 'AImation - AI Consulting and Automation for SMEs',
          type: 'image/png',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: isDE ? 'KI-Beratung für KMUs | AImation' : 'AI Consulting for SMEs | AImation',
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ungueltige Locales (z.B. /xx) auf 404 leiten, statt still auf Deutsch zu fallen
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Locale fuer statisches Rendering an next-intl weitergeben.
  // OHNE diesen Aufruf rendert /en still die deutsche Version.
  setRequestLocale(locale);

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
      <NextIntlClientProvider locale={locale} messages={messages}>
        <LeadFormProvider>
          {children}
        </LeadFormProvider>
      </NextIntlClientProvider>
    </>
  );
}
