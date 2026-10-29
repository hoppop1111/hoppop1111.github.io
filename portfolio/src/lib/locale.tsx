"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import type { Locale, Localized } from "@/types/portfolio";

interface LocaleContextValue {
  locale: Locale;
  toggle: () => void;
  t: (value: Localized) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

// English first; a visitor's TH/EN choice is remembered in localStorage.
const DEFAULT: Locale = "en";
const KEY = "locale";
const listeners = new Set<() => void>();
let memory: Locale | null = null; // fallback when storage is blocked

function read(): Locale {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "th" || saved === "en") return saved;
  } catch {
    // storage blocked (private mode)
  }
  return memory ?? DEFAULT;
}

function write(next: Locale) {
  memory = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {
    // storage blocked: the choice still holds for this visit
  }
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // the static HTML is rendered in the default language; a saved choice swaps in after hydration
  const locale = useSyncExternalStore(subscribe, read, () => DEFAULT);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggle = useCallback(() => write(read() === "th" ? "en" : "th"), []);
  const t = useCallback((value: Localized) => value[locale], [locale]);

  return <LocaleContext.Provider value={{ locale, toggle, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
