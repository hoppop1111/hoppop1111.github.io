"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";

export function Navbar() {
  const { t, locale, toggle } = useLocale();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: EASE_CINE, delay: 2.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg tracking-[0.3em] text-lamp">
          K<span className="text-hud">·</span>S
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.3em] text-[#9fb6ba] uppercase md:flex">
          <a href="#about" className="transition-colors hover:text-lamp">{t(strings.navAbout)}</a>
          <a href="#work" className="transition-colors hover:text-lamp">{t(strings.navWork)}</a>
          <a href="#contact" className="transition-colors hover:text-lamp">{t(strings.navContact)}</a>
        </nav>
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em]">
          <button
            onClick={toggle}
            className="rounded-full border border-hud/30 px-3 py-1.5 text-hud transition-colors hover:border-hud"
            aria-label="Switch language"
          >
            {locale === "th" ? "EN" : "TH"}
          </button>
          <a
            href={portfolioData.profile.resume.href}
            download={portfolioData.profile.resume.downloadName}
            className="hidden items-center gap-2 rounded-full border border-lamp/40 px-3 py-1.5 text-lamp transition-colors hover:border-lamp sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> {t(strings.resume)}
          </a>
        </div>
      </div>
      <motion.div className="gpu h-px origin-left bg-gradient-to-r from-lamp via-hud to-transparent" style={{ scaleX: progress }} />
    </motion.header>
  );
}
