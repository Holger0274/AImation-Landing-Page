import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiSchulungenPage from '@/components/pages/KiSchulungenPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Schulungen für KMUs und Mittelstand | Praxis, kein Hype | AI.mation' },
  description: 'KI-Schulungen für KMUs: Von Grundlagen bis Multi-Agent-Systeme. 3 Ebenen, alle Module kombinierbar. 20 Jahre Engineering-Erfahrung. Direkt anwendbar.',
  alternates: {
    canonical: `${siteUrl}/ki-schulungen-mittelstand`,
  },
  openGraph: {
    title: 'KI-Schulungen für KMUs und Mittelstand | AI.mation',
    description: 'KI-Schulungen für KMUs: Von Grundlagen bis Multi-Agent-Systeme. 3 Ebenen, alle Module kombinierbar.',
    url: `${siteUrl}/ki-schulungen-mittelstand`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const pageFaqs = [
  {
    question: 'Für wen sind die Schulungen geeignet?',
    answer: 'Für alle Unternehmensgrößen und Rollen. Wir starten mit einer Bedarfsanalyse und empfehlen dann den passenden Einstiegspunkt. Einsteiger ohne Vorkenntnisse starten mit Ebene 1, Teams die schon KI nutzen profitieren direkt von Ebene 2 oder 3.',
  },
  {
    question: 'Wie lange dauern die Schulungen?',
    answer: 'Je nach Modul zwischen einem halben und zwei Tagen. Viele Unternehmen kombinieren mehrere Module zu einem Schulungstag. Wir passen Dauer und Format an Ihre Bedürfnisse an.',
  },
  {
    question: 'Können Schulungen auch online stattfinden?',
    answer: 'Ja. Alle Module sind für Präsenz, Online oder Hybrid konzipiert. Bei Online-Schulungen arbeiten wir mit Live-Übungen, Breakout-Räumen und praktischen Demos – kein PowerPoint-Marathon.',
  },
  {
    question: 'Was kostet eine Schulung?',
    answer: 'Die Preise richten sich nach Modul, Teilnehmerzahl und Format. Wir erstellen gerne ein individuelles Angebot. Als Orientierung: Ein halbtägiges Modul für eine Gruppe von 10 Personen liegt in einer anderen Preisklasse als ein zweitägiges Spezialprogramm.',
  },
  {
    question: 'Gibt es Train-the-Trainer-Formate?',
    answer: 'Ja. Für Unternehmen, die KI-Wissen intern multiplizieren möchten, bieten wir Train-the-Trainer-Programme. Ihre internen Multiplikatoren lernen nicht nur die Inhalte, sondern auch wie sie diese weitervermitteln.',
  },
  {
    question: 'Bekommt jeder Teilnehmer Unterlagen?',
    answer: 'Ja. Alle Teilnehmer erhalten praxisnahe Unterlagen, Prompt-Bibliotheken und Checklisten. Kein Lehrbuch-Material, sondern Werkzeuge die am nächsten Tag einsetzbar sind.',
  },
];

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
