"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_OUT } from "@/lib/motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "#about", label: strings.navAbout },
  { href: "#experience", label: strings.navExperience },
  { href: "#work", label: strings.navWork },
  { href: "#certificates", label: strings.navCerts },
  { href: "#contact", label: strings.navContact },
];

const iconBtn =
  "flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold transition-colors hover:bg-fg/[0.07]";

export function Navbar() {
  const { t, locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className="fixed inset-x-0 top-3 z-50 px-3 md:top-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border py-1.5 pr-1.5 pl-5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || open
            ? "border-line bg-surface/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          kamol<span className="text-duck">.</span>
        </a>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-muted transition-colors hover:text-fg">
              {t(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button onClick={toggle} className={iconBtn} aria-label={t(strings.switchLanguage)}>
            {locale === "th" ? "EN" : "TH"}
          </button>
          <ThemeToggle className={iconBtn} />
          <a
            href={portfolioData.profile.resume.href}
            download={portfolioData.profile.resume.downloadName}
            className="btn btn-primary ml-1 hidden !py-2.5 sm:inline-flex"
          >
            <Download className="h-4 w-4" /> {t(strings.resume)}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`${iconBtn} md:hidden`}
            aria-label={t(strings.menu)}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="card mx-auto mt-2 flex max-w-6xl flex-col p-2 shadow-xl md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-display text-lg transition-colors hover:bg-fg/[0.05]"
              >
                {t(l.label)}
              </a>
            ))}
            <a
              href={portfolioData.profile.resume.href}
              download={portfolioData.profile.resume.downloadName}
              className="btn btn-primary mt-1 justify-center sm:hidden"
            >
              <Download className="h-4 w-4" /> {t(strings.resume)}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
