import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localePrefix: 'as-needed',
  localeDetection: false,
});

export const config = {
  // Exclude: static files, images, favicon, api routes, legal pages
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|api/|impressum|datenschutz|images/|logos/|sitemap\\.xml).*)',
  ],
};
