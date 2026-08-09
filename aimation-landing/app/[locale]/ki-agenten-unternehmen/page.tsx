import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiAgentenPage from '@/components/pages/KiAgentenPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { FAQ_ITEMS as pageFaqs } from '@/lib/data/faqs-ki-agenten';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Agenten für Unternehmen | Was sie können, was sie kosten | AImation' },
  description: 'KI-Agenten erklärt: Was sie von Chatbots unterscheidet, was sie kosten, wann sie sich lohnen. Mit Engineering-Use-Cases, die kein generischer Berater kennt.',
  alternates: {
    canonical: `${siteUrl}/ki-agenten-unternehmen`,
  },
  openGraph: {
    title: 'KI-Agenten für Unternehmen | AImation',
    description: 'KI-Agenten erklärt: Was sie von Chatbots unterscheidet, was sie kosten, wann sie sich lohnen.',
    url: `${siteUrl}/ki-agenten-unternehmen`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'KI-Agenten für Unternehmen', url: '/ki-agenten-unternehmen' },
];

export default function KiAgentenUnternehmenRoute() {
  return (
    <>
      <FAQPageSchema faqs={pageFaqs} />
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <KiAgentenPage />
      <Footer />
    </>
  );
}
