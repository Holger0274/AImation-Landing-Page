import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiBeratungPage from '@/components/pages/KiBeratungPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { FAQ_ITEMS as pageFaqs } from '@/lib/data/faqs-ki-beratung';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Beratung für KMUs | Klarheit statt Hype | AImation' },
  description: 'KI-Beratung für den Mittelstand: KI-Landkarte, Use Case Identifikation, Strategie und Roadmap. Ehrliche Einschätzung, auch wenn KI nicht die Antwort ist.',
  alternates: { canonical: `${siteUrl}/ki-beratung-kmu` },
  openGraph: {
    title: 'KI-Beratung für KMUs | AImation',
    description: 'KI-Beratung für den Mittelstand: KI-Landkarte, Use Case Identifikation, Strategie und Roadmap.',
    url: `${siteUrl}/ki-beratung-kmu`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'KI-Beratung für KMUs', url: '/ki-beratung-kmu' },
];

export default function KiBeratungRoute() {
  return (
    <>
      <FAQPageSchema faqs={pageFaqs} />
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <KiBeratungPage />
      <Footer />
    </>
  );
}
