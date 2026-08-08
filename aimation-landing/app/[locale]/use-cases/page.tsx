import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UseCasesOverviewPage from '@/components/pages/UseCasesOverviewPage';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'Use Cases: KI in der Produktentwicklung | AImation' },
  description:
    'Anwendungsfälle aus dem Entwicklungsalltag, von der Patentrecherche bis zur Wissenssicherung, mit Effekt auf Qualität, Kosten und Timing.',
  alternates: {
    canonical: `${siteUrl}/use-cases`,
  },
  openGraph: {
    title: 'Use Cases: KI in der Produktentwicklung | AImation',
    description:
      'Anwendungsfälle aus dem Entwicklungsalltag, von der Patentrecherche bis zur Wissenssicherung.',
    url: `${siteUrl}/use-cases`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'Use Cases', url: '/use-cases' },
];

export default function UseCasesRoute() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <UseCasesOverviewPage />
      <Footer />
    </>
  );
}
