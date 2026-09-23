import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiSchulungenPage from '@/components/pages/KiSchulungenPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { getTrainingFaqs } from '@/lib/data/faqs-ki-schulungen';
import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === 'en';
  const url = `${siteUrl}${en ? '/en' : ''}/ki-schulungen-mittelstand`;
  const title = en ? 'AI training for engineering teams | AImation' : 'KI-Schulungen für technische Unternehmen | AImation';
  const description = en ? 'Six learning series from AI foundations to Microsoft 365 Copilot. In-house workshops based on your tasks, with supporting learning materials.' : 'KI-Schulungen für technische Unternehmen: sechs Lernreihen von Grundlagen bis Copilot. Inhouse-Workshops an Ihren Aufgaben, mit begleitendem Lernmaterial.';
  return {
  title: { absolute: title },
  description,
  alternates: {
    canonical: url,
    languages: { de: `${siteUrl}/ki-schulungen-mittelstand`, en: `${siteUrl}/en/ki-schulungen-mittelstand` },
  },
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    locale: en ? 'en_GB' : 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  };
}

export default async function KiSchulungenRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const en = locale === 'en';
  const breadcrumbs = [
    { name: en ? 'Home' : 'Startseite', url: en ? '/en' : '/' },
    { name: en ? 'AI training for businesses' : 'KI-Schulungen für Unternehmen', url: `${en ? '/en' : ''}/ki-schulungen-mittelstand` },
  ];
  return (
    <>
      <FAQPageSchema faqs={getTrainingFaqs(locale === 'en')} />
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <KiSchulungenPage />
      <Footer />
    </>
  );
}
