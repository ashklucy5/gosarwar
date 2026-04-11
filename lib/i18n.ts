import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Fallback to 'en' if locale is undefined
  const validLocale = (locale && locales.includes(locale as Locale)) 
    ? (locale as Locale) 
    : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});