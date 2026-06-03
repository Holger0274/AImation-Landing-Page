import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiUmsetzungPage from '@/components/pages/KiUmsetzungPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Automatisierung für den Mittelstand | Workflows & Agenten | AI.mation' },
  description: 'KI-Automatisierung für KMUs: Workflows, RAG-Systeme, KI-Agenten. FLOW, KNOW, THINK, WORK – 4 Lösungswelten, modular kombinierbar. PoC-First-Ansatz.',
  alternates: {
    canonical: `${siteUrl}/ki-automatisierung-mittelstand`,
  },
  openGraph: {
    title: 'KI-Automatisierung für den Mittelstand | AI.mation',
    description: 'KI-Automatisierung für KMUs: Workflows, RAG-Systeme, KI-Agenten. 4 Lösungswelten, modular kombinierbar.',
    url: `${siteUrl}/ki-automatisierung-mittelstand`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const pageFaqs = [
  {
    question: 'Was ist der Unterschied zwischen einem Workflow und einem KI-Agenten?',
    answer: 'Ein Workflow folgt festen Regeln: Wenn A, dann B. Ein KI-Agent kann eigenständig entscheiden, Informationen recherchieren und Aufgaben planen, ohne dass jeder Schritt vorprogrammiert ist. Für strukturierte Prozesse reicht oft ein Workflow. Für komplexe Aufgaben mit variablen Inputs brauchen Sie einen Agenten.',
  },
  {
    question: 'Wie lange dauert die Implementierung?',
    answer: 'Ein einfacher Workflow ist in 1-2 Wochen live. Ein RAG-System auf Ihren Dokumenten in 3-6 Wochen. Komplexe Multi-Agent-Systeme in 8-16 Wochen. Wir starten immer mit einem PoC – dann entscheiden Sie, ob Sie skalieren.',
  },
  {
    question: 'Welche Systeme können integriert werden?',
    answer: 'Wir integrieren mit praktisch allem, das eine API hat: SAP, Salesforce, Microsoft 365, Google Workspace, Slack, E-Mail-Server, ERP-Systeme, Produktionsdaten. Und wenn es keine API gibt, bauen wir eine Brücke.',
  },
  {
    question: 'Bleiben unsere Daten in Deutschland?',
    answer: 'Das entscheiden Sie. Wir bieten Lösungen mit deutschen Cloud-Providern, europäischen Modellen (Mistral) oder komplett On-Premise-Setups. DSGVO-Konformität ist Standard, keine Option.',
  },
  {
    question: 'Was kostet ein typisches Implementierungsprojekt?',
    answer: 'Das variiert stark je nach Komplexität. Ein E-Mail-Klassifizierungs-Workflow kostet weniger als ein vollständiges RAG-System mit 50.000 Dokumenten. Wir erstellen nach dem Erstgespräch ein transparentes Angebot mit klarem Scope.',
  },
];

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
