"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";

// The `dark` class is set before paint by the inline script in layout.tsx;
// this just mirrors it so the icon stays in sync.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const isDark = () => document.documentElement.classList.contains("dark");

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { t } = useLocale();
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage blocked (private mode): the toggle still works for this visit
    }
  }

  return (
    <button onClick={toggle} aria-label={t(strings.switchTheme)} className={className}>
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
