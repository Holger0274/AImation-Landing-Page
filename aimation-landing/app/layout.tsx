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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
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
