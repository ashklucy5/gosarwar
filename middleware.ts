import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pages except API routes, static files, and images
  matcher: ['/', '/(en|zh)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};