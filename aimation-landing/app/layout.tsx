import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import {
  OrganizationSchema,
  ServiceSchema,
  WebSiteSchema,
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

  title: {
    default:
      'AI.mation - KI-Automatisierung für KMUs | 20 Jahre Engineering-Erfahrung',
    template: '%s | AI.mation',
  },

  description:
    'KI-Beratung, Schulungen & Umsetzung für den Mittelstand. 40% Zeitersparnis durch intelligente Automatisierung. Kostenloses Erstgespräch vereinbaren.',

  keywords: [
    'KI-Beratung KMU',
    'KI-Automatisierung Mittelstand',
    'KI-Schulungen',
    'Prozessautomatisierung',
    'RAG-Systeme',
    'AI-Readiness',
    'n8n Automatisierung',
    'Multi-Agent-Systeme',
    'Microsoft Copilot Training',
  ],

  authors: [{ name: 'Holger Peschke' }],

  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    siteName: 'AI.mation',
    title: 'KI-Automatisierung für KMUs – Ohne Buzzwords, ohne Konzernpreise',
    description:
      '40% der Arbeitszeit geht für Aufgaben drauf, die niemand vermissen würde. Wir zeigen Ihnen ehrlich, ob KI die Lösung ist.',
    images: [
      {
        url: '/images/og-image.png', // TODO: Erstellen!
        width: 1200,
        height: 630,
        alt: 'AI.mation - KI-Automatisierung für den Mittelstand',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI.mation - KI-Automatisierung für KMUs',
    description:
      '40% Zeitersparnis durch intelligente Automatisierung. Kostenloses Erstgespräch.',
    images: ['/images/og-image.png'], // TODO: Erstellen!
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
        {/* Structured Data (Schema.org) für SEO & AI-Crawler */}
        <OrganizationSchema siteUrl={siteUrl} />
        <WebSiteSchema siteUrl={siteUrl} />
        <ServiceSchema siteUrl={siteUrl} />
      </head>
      <body
        className="antialiased"
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        {/* Calendly Popup Widget Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.css"
          strategy="lazyOnload"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
