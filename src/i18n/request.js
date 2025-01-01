import { getRequestConfig } from 'next-intl/server';

  /**
   * Array of supported languages.
   *
   * Each language object contains the following properties:
   * - `code`: The ISO 639-1 language code.
   * - `lang`: The language code used in the URL.
   * - `label`: The language name in its native language.
   */
export const languages = [
  {
    code: 'en-US',
    lang: 'en',
    label: 'English',
  },
  {
    code: 'fr-FR',
    lang: 'fr',
    label: 'Français',
  },
  {
    code: 'it-IT',
    lang: 'it',
    label: 'Italiano',
  },
  {
    code: 'de-DE',
    lang: 'de',
    label: 'Deutsch',
  },
  {
    code: 'pl-PL',
    lang: 'pl',
    label: 'Polski',
  },
  {
    code: 'es-ES',
    lang: 'es',
    label: 'Español',
  },
  {
    code: 'pt-BR',
    lang: 'pt-br',
    label: 'Português do Brasil',
  },
  {
    code: 'ru-RU',
    lang: 'ru',
    label: 'Русский',
  },
  {
    code: 'zh-hans',
    lang: 'zh-hans',
    label: '简体中文',
  },
  {
    code: 'zh-hant',
    lang: 'zh-hant',
    label: '繁體中文',
  },
  {
    code: 'ko-KR',
    lang: 'ko-kr',
    label: '한국어',
  },
  {
    code: 'ja-JP',
    lang: 'ja',
    label: '日本語',
  },
  
];

export const defaultLocale = 'en';

export const locales = languages.map((lang) => lang.lang);

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
});