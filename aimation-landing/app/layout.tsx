import { Space_Grotesk, Inter } from 'next/font/google';
import { headers } from 'next/headers';
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Locale fuer das <html lang>-Attribut aus dem von der next-intl-Middleware
  // gesetzten Header 'x-next-intl-locale' ableiten. Das Root-Layout bekommt kein
  // [locale]-param, der Header ist aber pro statisch generierter Variante (/de, /en)
  // gesetzt. Legal-Pages ausserhalb [locale] haben keinen Header und fallen auf 'de'.
  const headerList = await headers();
  const locale = headerList.get('x-next-intl-locale') || 'de';

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      suppressHydrationWarning
    >
      <body
        className="antialiased"
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
