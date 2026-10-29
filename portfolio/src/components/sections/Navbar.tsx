"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { id: "about", label: strings.navAbout },
  { id: "experience", label: strings.navExperience },
  { id: "work", label: strings.navWork },
  { id: "certificates", label: strings.navCerts },
  { id: "contact", label: strings.navContact },
];

/** Highlights whichever section is crossing the middle of the screen. */
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Navbar() {
  const { t, locale, toggle } = useLocale();
  const active = useActiveSection();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3"
    >
      <div className="glass mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl px-4 py-2.5 text-sm">
        <a href="#top" className="font-semibold tracking-tight">
          Kamol<span className="text-gradient">.S</span>
        </a>
        <nav className="order-last -mx-1 flex w-full gap-1 overflow-x-auto md:order-none md:mx-auto md:w-auto">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative shrink-0 rounded-lg px-3 py-1.5 transition-colors ${active === l.id ? "text-fg" : "text-muted hover:text-fg"}`}
            >
              {active === l.id && (
                <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-lg bg-line" />
              )}
              {t(l.label)}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1 text-muted md:ml-0">
          <button
            onClick={toggle}
            className="rounded-lg px-2.5 py-1.5 font-mono text-xs hover:text-fg"
            aria-label={t(strings.switchLanguage)}
          >
            <span className={locale === "th" ? "text-fg" : ""}>TH</span> / <span className={locale === "en" ? "text-fg" : ""}>EN</span>
          </button>
          <ThemeToggle className="rounded-lg p-2 hover:text-fg" />
        </div>
      </div>
    </motion.header>
  );
}
