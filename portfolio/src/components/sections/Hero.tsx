"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { fadeUp, MaskLines, stagger } from "@/components/ui/Reveal";
import { pulseBlob, Scene3D } from "@/components/three/Scene3D";

export function Hero() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const lines = strings.heroLines.map(t);
  const words = strings.marquee.map(t);

  // the wordmark stretches taller as the hero scrolls away
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section ref={ref} id="top" className="relative border-b border-line">
      {/* framed, interactive dithered 3D */}
      <div className="dot-grid relative h-[360px] w-full cursor-crosshair overflow-hidden border-b border-line sm:h-[440px]">
        <Scene3D />
        <button
          onClick={pulseBlob}
          title={t(strings.morph)}
          aria-label={t(strings.morph)}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-line bg-bg/70 transition-colors hover:bg-fg hover:text-bg"
        >
          <Sparkles className="h-4 w-4" />
        </button>
        <p className="pointer-events-none absolute right-4 bottom-3 font-mono text-[10px] text-muted uppercase">{t(strings.canvasHint)}</p>
      </div>

      {/* headline + call to action */}
      <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6 p-6 sm:p-10">
        <motion.p variants={fadeUp} className="flex items-center gap-2.5 font-mono text-xs text-muted uppercase">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fg" />
          <span>[ 00 ]</span>
          <span>·</span>
          <span>{t(profile.status)}</span>
        </motion.p>

        <h1 key={lines.join()} className="display text-5xl leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
          <MaskLines lines={lines} animateNow delay={0.2} lineClassName={(i) => (i === 1 ? "text-muted" : "")} />
        </h1>

        <motion.p variants={fadeUp} className="max-w-xl text-sm leading-relaxed text-fg/80 sm:text-base">
          {t(profile.bio)}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
          <a href="#work" className="btn">
            {t(strings.seeProjects)}
          </a>
          <a href="#contact" className="btn btn-solid">
            {t(strings.getInTouch)} →
          </a>
        </motion.div>
      </motion.div>

      {/* oversized name banner */}
      <div className="border-t border-line px-4 pt-4 pb-4 sm:px-10">
        <div className="flex items-end gap-3 border-b border-line pb-3">
          <motion.svg
            style={{ scaleY: markScale }}
            viewBox="0 0 1000 180"
            className="min-w-0 flex-1 origin-bottom"
            aria-label={profile.name.en}
          >
            <text
              x="0"
              y="172"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              className="fill-fg"
              style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 200 }}
            >
              KAMOL
            </text>
          </motion.svg>
          <span className="border border-fg/30 px-1 py-1.5 font-mono text-[9px] tracking-widest uppercase [writing-mode:vertical-rl] sm:text-xs">
            Supsaengin
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 pt-3 font-mono text-[11px] text-muted uppercase">
          <span>
            {t(profile.role)} — {new Date().getFullYear()}
          </span>
          <a href="#about" className="flex shrink-0 items-center gap-1 hover:text-fg">
            {t(strings.scroll)} ↓
          </a>
        </div>
      </div>

      {/* endless word marquee */}
      <div className="overflow-hidden border-t border-line bg-panel py-6">
        <div aria-hidden className="marquee display items-center gap-8 text-5xl tracking-tight text-fg/80 sm:text-7xl">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className={i % 2 ? "text-muted" : ""}>{w}</span>
              <span className="text-2xl text-[#555]">•</span>
            </span>
          ))}
        </div>
        <p className="mt-3 px-4 text-center font-mono text-[11px] tracking-widest text-muted uppercase">{t(strings.marqueeTagline)}</p>
      </div>
    </section>
  );
}
