import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Exclude: static files, images, favicon, api routes, legal pages
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|api/|impressum|datenschutz|images/|logos/|sitemap\\.xml).*)',
  ],
};
