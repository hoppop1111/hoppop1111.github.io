"use client";

import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "#about", label: strings.navAbout },
  { href: "#experience", label: strings.navExperience },
  { href: "#work", label: strings.navWork },
  { href: "#certificates", label: strings.navCerts },
  { href: "#contact", label: strings.navContact },
];

export function Navbar() {
  const { t, locale, toggle } = useLocale();

  return (
    <header className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 pt-8 text-[15px]">
      <a href="#top" className="font-serif text-xl italic">
        Kamol S.
      </a>
      <div className="flex items-center gap-4 text-faded sm:order-last">
        <button onClick={toggle} className="hover:text-ink" aria-label={t(strings.switchLanguage)}>
          <span className={locale === "th" ? "text-ink" : ""}>TH</span> /{" "}
          <span className={locale === "en" ? "text-ink" : ""}>EN</span>
        </button>
        <ThemeToggle className="hover:text-ink" />
      </div>
      <nav className="flex w-full flex-wrap gap-x-5 gap-y-1 text-faded sm:w-auto">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="decoration-pen hover:text-ink hover:underline">
            {t(l.label)}
          </a>
        ))}
      </nav>
    </header>
  );
}
