import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import KiAgentenPage from '@/components/pages/KiAgentenPage';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/StructuredData';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'KI-Agenten für Unternehmen | Was sie können, was sie kosten | AI.mation' },
  description: 'KI-Agenten erklärt: Was sie von Chatbots unterscheidet, was sie kosten, wann sie sich lohnen. Mit Engineering-Use-Cases, die kein generischer Berater kennt.',
  alternates: {
    canonical: `${siteUrl}/ki-agenten-unternehmen`,
  },
  openGraph: {
    title: 'KI-Agenten für Unternehmen | AI.mation',
    description: 'KI-Agenten erklärt: Was sie von Chatbots unterscheidet, was sie kosten, wann sie sich lohnen.',
    url: `${siteUrl}/ki-agenten-unternehmen`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const pageFaqs = [
  {
    question: 'Ersetzen KI-Agenten Mitarbeiter?',
    answer: 'Nein. Sie ersetzen Routineaufgaben. Der QS-Leiter mit 28 Jahren Erfahrung wird nicht durch einen Agenten ersetzt. Aber sein Wissen wird digital verfügbar, und seine Routineprüfungen kann der Agent übernehmen.',
  },
  {
    question: 'Wie zuverlässig sind KI-Agenten?',
    answer: 'Moderne Agenten erreichen bei gut definierten Aufgaben Genauigkeitsraten von über 95%. Deshalb gibt es menschliche Kontrolle: bei kritischen Entscheidungen prüft ein Mensch. Bei Routinetätigkeiten läuft der Agent eigenständig, mit Logging und Eskalation bei Unsicherheit.',
  },
  {
    question: 'Was passiert mit unseren Daten?',
    answer: 'Das bestimmen Sie. Wir bieten Lösungen, die komplett auf Ihren Servern laufen: lokale Sprachmodelle (Ollama), selbst gehostete Orchestrierung (n8n), europäische Cloud-Anbieter. Keine Daten verlassen Ihr Unternehmen, wenn Sie das nicht wollen.',
  },
  {
    question: 'Brauchen wir dafür ein großes IT-Team?',
    answer: 'Für den Aufbau: Nein, das machen wir. Für den Betrieb: Eine technisch affine Person sollte die Systeme im Blick haben. Bei einfacheren Agenten reicht auch ein Power User ohne IT-Hintergrund.',
  },
  {
    question: 'Wie lange dauert es, bis ein Agent produktiv läuft?',
    answer: 'Einen einfachen Agenten haben wir in 2 bis 4 Wochen live. Die erste Woche ist Analyse und Setup, die zweite Implementierung, dann folgen Test und Parallelbetrieb. Bei komplexeren Systemen rechnen Sie mit 8 bis 16 Wochen.',
  },
  {
    question: 'Können wir klein anfangen?',
    answer: 'Sollten Sie sogar. Wir empfehlen: einen Prozess identifizieren, einen PoC bauen, messen, lernen, dann skalieren. Nicht fünf Agenten gleichzeitig in die Produktion drücken.',
  },
];

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
