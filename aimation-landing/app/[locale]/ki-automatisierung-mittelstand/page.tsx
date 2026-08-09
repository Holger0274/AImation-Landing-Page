import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiUmsetzungPage from '@/components/pages/KiUmsetzungPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { FAQ_ITEMS as pageFaqs } from '@/lib/data/faqs-ki-umsetzung';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Automatisierung für den Mittelstand | Workflows & Agenten | AImation' },
  description: 'KI-Automatisierung für KMUs: Workflows, RAG-Systeme, KI-Agenten. FLOW, KNOW, THINK, WORK: 4 Lösungswelten, modular kombinierbar. PoC-First-Ansatz.',
  alternates: {
    canonical: `${siteUrl}/ki-automatisierung-mittelstand`,
  },
  openGraph: {
    title: 'KI-Automatisierung für den Mittelstand | AImation',
    description: 'KI-Automatisierung für KMUs: Workflows, RAG-Systeme, KI-Agenten. 4 Lösungswelten, modular kombinierbar.',
    url: `${siteUrl}/ki-automatisierung-mittelstand`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'KI-Automatisierung für den Mittelstand', url: '/ki-automatisierung-mittelstand' },
];

export default function KiAutomatisierungRoute() {
  return (
    <>
      <FAQPageSchema faqs={pageFaqs} />
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <KiUmsetzungPage />
      <Footer />
    </>
  );
}
