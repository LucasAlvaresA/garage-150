"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  translations,
  type Locale,
  type TranslationKey,
} from "@/i18n/translations";
import { formatPrice as formatPriceValue } from "@/lib/utils";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
  formatPrice: (price: number) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key],
    [locale],
  );

  const formatPrice = useCallback(
    (price: number) => formatPriceValue(price, locale),
    [locale],
  );

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === "pt-BR" ? "en" : "pt-BR"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t, formatPrice }),
    [locale, toggleLocale, t, formatPrice],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
