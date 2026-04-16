import { useCallback, useEffect, useMemo, useState } from 'react';
import es from '../i18n/es.json';
import en from '../i18n/en.json';
import { LanguageContext } from './languageContext.js';

// We keep i18n intentionally “library-free”: two JSON files + a tiny dot-path resolver.
// Tradeoff: no ICU plurals—good enough for a portfolio and very easy to maintain.
const STORAGE_KEY = 'portfolio-lang';
const CATALOGS = { es, en };

function getByPath(object, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) return acc[key];
    return undefined;
  }, object);
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
    return 'es';
  });

  useEffect(() => {
    // Keeps `<html lang>` aligned with the active dictionary (a11y + SEO).
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (next === 'en' || next === 'es') setLocaleState(next);
  }, []);

  const t = useCallback(
    (key) => {
      const value = getByPath(CATALOGS[locale], key);
      return value === undefined ? key : value;
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
