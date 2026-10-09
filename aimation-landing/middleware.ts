import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { basePath, ENGLISH_PATHS } from './lib/seo/locales';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.startsWith('/en/') && !ENGLISH_PATHS.has(basePath(path))) {
    const target = request.nextUrl.clone();
    target.pathname = basePath(path);
    // Temporary while these pages have no English translation.
    return NextResponse.redirect(target, 307);
  }
  return intlMiddleware(request);
}

export const config = {
  // Exclude: static files, images, favicon, api routes, legal pages
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|api/|impressum|datenschutz|images/|videos/(?:ai2cad|demos)/|logos/|sitemap\\.xml|robots\\.txt|llms\\.txt).*)',
  ],
};
