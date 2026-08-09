import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiSchulungenPage from '@/components/pages/KiSchulungenPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { FAQ_ITEMS as pageFaqs } from '@/lib/data/faqs-ki-schulungen';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Schulungen für KMUs und Mittelstand | Praxis, kein Hype | AImation' },
  description: 'KI-Schulungen für KMUs: Von Grundlagen bis Multi-Agent-Systeme. 3 Ebenen, alle Module kombinierbar. 20 Jahre Engineering-Erfahrung. Direkt anwendbar.',
  alternates: {
    canonical: `${siteUrl}/ki-schulungen-mittelstand`,
  },
  openGraph: {
    title: 'KI-Schulungen für KMUs und Mittelstand | AImation',
    description: 'KI-Schulungen für KMUs: Von Grundlagen bis Multi-Agent-Systeme. 3 Ebenen, alle Module kombinierbar.',
    url: `${siteUrl}/ki-schulungen-mittelstand`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'KI-Schulungen für Unternehmen', url: '/ki-schulungen-mittelstand' },
];

export default function KiSchulungenRoute() {
  return (
    <>
      <FAQPageSchema faqs={pageFaqs} />
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <KiSchulungenPage />
      <Footer />
    </>
  );
}
