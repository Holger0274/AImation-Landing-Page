import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI.mation – Automatisierung mit Intelligenz',
  description:
    'KI-Automatisierung für kleine und mittlere Unternehmen. Schulungen, Beratung, Umsetzung – ohne Buzzwords, ohne Konzernpreise.',
  keywords: [
    'KI',
    'Künstliche Intelligenz',
    'Automatisierung',
    'KMU',
    'Mittelstand',
    'Schulungen',
    'Beratung',
    'Umsetzung',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
