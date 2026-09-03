export type Locale = 'ka' | 'en' | 'ru'

export type LocaleDefinition = {
  id: Locale
  name: string
  nativeName: string
  flag: string
}

export const LOCALES: Record<Locale, LocaleDefinition> = {
  ka: { id: 'ka', name: 'Georgian', nativeName: 'ქართული', flag: '🇬🇪' },
  en: { id: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  ru: { id: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
}

export const LOCALE_IDS = Object.keys(LOCALES) as Locale[]

export const DEFAULT_LOCALE: Locale = 'en'

export type TranslationRow = {
  key: string
  namespace: string
  ka: string
  en: string
  ru: string
}

export type TranslationMap = Record<string, string>

export function isLocale(value: string): value is Locale {
  return value in LOCALES
}

export function rowsToMap(rows: TranslationRow[], locale: Locale): TranslationMap {
  return Object.fromEntries(
    rows.map((row) => [row.key, row[locale] || row[DEFAULT_LOCALE] || row.key]),
  )
}
