"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { openResume } from "@/lib/resume";
import { scrollToHash, setScrollLocked } from "@/components/SmoothScroll";

const LINKS = [
  { id: "about", label: strings.navAbout },
  { id: "experience", label: strings.navExperience },
  { id: "work", label: strings.navWork },
  { id: "certificates", label: strings.navCerts },
  { id: "contact", label: strings.navContact },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const { t, locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /** Close the menu first so scrolling is unlocked, then travel to the section. */
  function go(e: React.MouseEvent, hash: string) {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => scrollToHash(hash));
  }

  function showResume() {
    setOpen(false);
    openResume();
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#top" onClick={(e) => go(e, "#top")} className="font-mono text-xs font-medium tracking-wider uppercase hover:opacity-75">
            Kamol<span className="text-muted">.</span>Supsaengin
          </a>
          <button
            onClick={() => document.body.classList.toggle("negative-mode")}
            title={t(strings.negative)}
            aria-label={t(strings.negative)}
            className="hidden border border-line px-2 py-1 font-mono text-[11px] font-bold tracking-tighter transition-colors hover:bg-fg hover:text-bg sm:block"
          >
            KS
          </button>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label={t(strings.switchLanguage)} className="flex border border-line font-mono text-[11px]">
              {(["th", "en"] as const).map((l) => (
                <span
                  key={l}
                  className={`px-2.5 py-1 uppercase transition-colors ${locale === l ? "bg-fg font-semibold text-bg" : "text-muted"}`}
                >
                  {l}
                </span>
              ))}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? t(strings.closeMenu) : t(strings.menu)}
              className={`min-w-16 border px-3 py-1 font-mono text-[11px] uppercase transition-colors ${open ? "border-fg bg-fg text-bg" : "border-line hover:bg-fg hover:text-bg"}`}
            >
              {open ? "✕" : t(strings.menu)}
            </button>
          </div>
        </div>
      </header>
      {/* outside the header: its backdrop-filter would make it the containing block for this fixed overlay */}
      <AnimatePresence>{open && <MenuOverlay onGo={go} onResume={showResume} />}</AnimatePresence>
    </>
  );
}

function MenuOverlay({ onGo, onResume }: { onGo: (e: React.MouseEvent, hash: string) => void; onResume: () => void }) {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");
  const socials = profile.contacts.filter((c) => c.kind === "github" || c.kind === "linkedin");

  return (
    <motion.div
      data-lenis-prevent
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-bg px-4 pb-8 sm:px-8"
    >
      <motion.nav
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
        className="mx-auto mt-4 w-full max-w-6xl border-t border-line"
      >
        {LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => onGo(e, `#${l.id}`)}
            className="group flex items-baseline justify-between border-b border-line py-5 transition-all hover:pl-3"
          >
            <span className="block overflow-hidden">
              <motion.span
                variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.8, ease: EASE } } }}
                className="display block text-5xl tracking-tight sm:text-7xl"
              >
                {t(l.label)}
              </motion.span>
            </span>
            <span className="font-mono text-xs text-muted group-hover:text-fg">{String(i + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
        className="mx-auto w-full max-w-6xl space-y-6 pt-12 pb-14 sm:pb-0"
      >
        <div className="flex flex-wrap gap-3">
          <a href="#work" onClick={(e) => onGo(e, "#work")} className="btn">
            {t(strings.navWork)}
          </a>
          <button onClick={onResume} className="btn">
            {t(strings.viewResume)}
          </button>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-line pt-4 sm:flex-row sm:items-center">
          {email && (
            <a href={email.href} className="display text-2xl normal-case underline underline-offset-4 sm:text-3xl">
              {email.label}
            </a>
          )}
          <div className="flex items-center justify-between gap-6 font-mono text-[11px] text-muted uppercase sm:justify-end">
            <span>{t(strings.country)}</span>
            {socials.map((s) => (
              <a key={s.kind} href={s.href} target="_blank" rel="noopener" className="hover:text-fg">
                {s.kind} ↗
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
