"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
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

  return (
    <header className="fixed inset-x-1.5 top-1.5 z-50 md:inset-x-2.5 md:top-2.5">
      <div className="relative z-10 flex h-14 items-center gap-3 border-b border-line bg-bg/85 px-4 backdrop-blur-sm md:px-6">
        <a href="#top" onClick={(e) => go(e, "#top")} className="font-mono text-xs tracking-[0.2em] uppercase">
          Kamol<span className="text-muted">.</span>Supsaengin
        </a>
        <span className="display mx-auto hidden h-8 w-8 items-center justify-center border border-fg text-base sm:flex">KS</span>
        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <button
            onClick={toggle}
            aria-label={t(strings.switchLanguage)}
            className="flex border border-line font-mono text-[11px] tracking-[0.15em]"
          >
            {(["th", "en"] as const).map((l) => (
              <span key={l} className={`px-2.5 py-1.5 uppercase ${locale === l ? "bg-fg text-bg" : "text-muted"}`}>
                {l}
              </span>
            ))}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? t(strings.closeMenu) : t(strings.menu)}
            className={`min-w-16 border px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${open ? "border-fg bg-fg text-bg" : "border-line hover:border-fg"}`}
          >
            {open ? "✕" : t(strings.menu)}
          </button>
        </div>
      </div>

      <AnimatePresence>{open && <MenuOverlay onGo={go} />}</AnimatePresence>
    </header>
  );
}

function MenuOverlay({ onGo }: { onGo: (e: React.MouseEvent, hash: string) => void }) {
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
      className="fixed inset-x-0 bottom-0 top-[calc(0.375rem+3.5rem)] flex flex-col overflow-y-auto bg-bg md:top-[calc(0.625rem+3.5rem)]"
    >
      <motion.nav
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
      >
        {LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => onGo(e, `#${l.id}`)}
            className="group flex items-end justify-between border-b border-line px-5 py-4 transition-colors hover:bg-fg hover:text-bg md:px-10"
          >
            <span className="block overflow-hidden">
              <motion.span
                variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.8, ease: EASE } } }}
                className="display block text-[clamp(3.5rem,14vw,8rem)]"
              >
                {t(l.label)}
              </motion.span>
            </span>
            <span className="label pb-3 group-hover:text-bg">{String(i + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
        className="mt-auto space-y-8 px-5 pt-16 pb-20 md:px-10 md:pb-10"
      >
        <div className="flex flex-wrap gap-3">
          <a href="#work" onClick={(e) => onGo(e, "#work")} className="btn">
            {t(strings.navWork)}
          </a>
          <a href={profile.resume.href} target="_blank" rel="noopener" className="btn">
            {t(strings.viewResume)}
          </a>
        </div>
        {email && (
          <a href={email.href} className="display block text-[clamp(1.75rem,7vw,3rem)] normal-case underline decoration-muted decoration-2 underline-offset-8 hover:decoration-fg">
            {email.label}
          </a>
        )}
        <div className="label flex flex-wrap justify-between gap-4">
          <span>{t(strings.country)}</span>
          <span className="flex gap-6">
            {socials.map((s) => (
              <a key={s.kind} href={s.href} target="_blank" rel="noopener" className="hover:text-fg">
                {s.kind} ↗
              </a>
            ))}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
