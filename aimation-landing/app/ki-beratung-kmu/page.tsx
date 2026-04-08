import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiBeratungPage from '@/components/pages/KiBeratungPage';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: 'KI-Beratung für KMUs | Klarheit statt Hype | AI.mation',
  description: 'KI-Beratung für den Mittelstand: AI Readiness Assessment, Use Case Identifikation, Strategie & Roadmap. Ehrliche Einschätzung – auch wenn KI nicht die Antwort ist.',
  alternates: { canonical: `${siteUrl}/ki-beratung-kmu` },
  openGraph: {
    title: 'KI-Beratung für KMUs | AI.mation',
    description: 'KI-Beratung für den Mittelstand: AI Readiness Assessment, Use Case Identifikation, Strategie & Roadmap.',
    url: `${siteUrl}/ki-beratung-kmu`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function KiBeratungRoute() {
  return (
    <>
      <Header />
      <KiBeratungPage />
      <Footer />
    </>
  );
}
