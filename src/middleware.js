import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';
import { NextResponse } from 'next/server';
import { localePrefix } from './app/navigation';

const intlMiddleware = createMiddleware({ locales, defaultLocale, localePrefix });
export default intlMiddleware;

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};