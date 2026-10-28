"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Locale, Localized } from "@/types/portfolio";

interface LocaleContextValue {
  locale: Locale;
  toggle: () => void;
  t: (value: Localized) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("th");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggle = useCallback(() => setLocale((l) => (l === "th" ? "en" : "th")), []);
  const t = useCallback((value: Localized) => value[locale], [locale]);

  return <LocaleContext.Provider value={{ locale, toggle, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
