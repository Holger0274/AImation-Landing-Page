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
import { HOME_COPY } from '@/lib/seo/metadata';

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
      default: HOME_COPY[isDE ? 'de' : 'en'].title,
      template: '%s | AImation',
    },

    description: HOME_COPY[isDE ? 'de' : 'en'].description,

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

    openGraph: {
      type: 'website',
      locale: isDE ? 'de_DE' : 'en_GB',
      siteName: 'AImation',
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
      images: ['/images/og-image.png'],
    },

    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/apple-touch-icon.png',
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
        So sind sie auch ohne clientseitige JavaScript-Ausführung lesbar.
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-magenta focus:to-magenta-light focus:text-[#071013] focus:font-semibold focus:rounded-lg focus:shadow-lg"
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
