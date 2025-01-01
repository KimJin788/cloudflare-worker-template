import { createNavigation } from 'next-intl/navigation';

export const defaultLocale = 'en'

export const locales = ['en', 'de', 'fr', 'it', 'es', 'ja', 'ko-kr', 'pl', 'pt-br', 'zh-hant', 'zh-hans']

export const localePrefix = process.env.NEXT_PUBLIC_LOCALE_PREFIX === 'never' ? 'never' : 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales, localePrefix, defaultLocale })
