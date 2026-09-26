import * as rootParams from 'next/root-params'
import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

export default getRequestConfig(async ({ locale }) => {
  let activeLocale = locale

  if (!activeLocale) {
    const paramValue = await rootParams.locale()
    if (hasLocale(routing.locales, paramValue)) {
      activeLocale = paramValue
    } else {
      activeLocale = routing.defaultLocale 
    }
  }

  return {
    locale: activeLocale,
    messages: (await import(`../../messages/${activeLocale}.json`)).default
  }
})
