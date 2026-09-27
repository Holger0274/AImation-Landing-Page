import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiBeratungPage from '@/components/pages/KiBeratungPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { FAQ_ITEMS as pageFaqs } from '@/lib/data/faqs-ki-beratung';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Beratung für die Produktentwicklung | AImation' },
  description: 'KI-Beratung für Entwicklungsleiter im Mittelstand: Prozesse prüfen, Use Cases priorisieren und einen Pilot festlegen. Mit KI-Landkarte und ROI-Schätzung.',
  alternates: { canonical: `${siteUrl}/ki-beratung-kmu` },
  openGraph: {
    title: 'KI-Beratung für die Produktentwicklung | AImation',
    description: 'Prozesse prüfen, Use Cases priorisieren und einen Pilot festlegen. KI-Beratung aus 20 Jahren Entwicklungspraxis.',
    url: `${siteUrl}/ki-beratung-kmu`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'KI-Beratung für die Produktentwicklung', url: '/ki-beratung-kmu' },
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
