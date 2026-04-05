import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  WebSiteSchema,
  PersonSchema,
} from '@/components/StructuredData';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://aimation.de'
  ),

  // K1 FIX: Title auf 50-60 Zeichen gekürzt (war 72 Zeichen)
  // Primärkeyword vorne, Brand hinten, wichtigster USP sichtbar
  title: {
    default: 'KI-Beratung & Automatisierung für KMUs | AI.mation',
    template: '%s | AI.mation',
  },

  // W1 FIX: Description auf optimale 155 Zeichen gebracht (war 148)
  description:
    'KI-Beratung, Schulungen & Automatisierung für den Mittelstand. Ehrliche Einschätzung, ob KI hilft. 20 Jahre Engineering-Erfahrung. Kostenloses Erstgespräch.',

  keywords: [
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
  ],

  authors: [{ name: 'Holger Peschke', url: 'https://www.linkedin.com/in/holgerpeschke/' }],

  // K5 FIX: Canonical URL explizit setzen
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
    },
  },

  // OG FIX: Title auf ≤60 Zeichen, Description auf 150-160 Zeichen
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    siteName: 'AI.mation',
    title: 'KI-Beratung für KMUs: Ehrlich, Praktisch, Bezahlbar',
    description:
      '40% der Arbeitszeit geht für Aufgaben drauf, die niemand vermissen würde. KI-Beratung, Schulungen & Automatisierung für den Mittelstand. Ohne leere Versprechen.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI.mation - KI-Beratung und Automatisierung für den Mittelstand',
        type: 'image/png',
      },
    ],
  },

  // N4 FIX: Twitter Creator und Site Tags ergänzt
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Beratung für KMUs | AI.mation',
    description:
      '40% Zeitersparnis durch KI-Automatisierung. Ehrliche Einschätzung, ob KI für Ihr KMU sinnvoll ist. Kostenloses Erstgespräch.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimation.de';

  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ overflowX: 'hidden', maxWidth: '100vw' }}
    >
      <head>
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
      </head>
      <body
        className="antialiased"
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-magenta focus:to-magenta-light focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>

        {/*
          W7 FIX: Calendly-Scripts werden aus dem globalen Layout entfernt.
          Sie werden jetzt nur auf Seiten geladen, die sie benoetigen.
          Globale externe Scripts verschlechtern die Core Web Vitals (TBT/INP)
          auf Seiten wie Impressum und Datenschutz, die kein Calendly brauchen.
          Die LeadFormModal und FinalCTA Komponenten laden Calendly bei Bedarf.
        */}
        {children}
      </body>
    </html>
  );
}
