"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { fadeUp, MaskLines, stagger } from "@/components/ui/Reveal";

export function Hero() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const lines = strings.heroLines.map(t);

  // the copy lifts away as you scroll, the wordmark stretches wider
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section ref={ref} id="top" className="relative z-10 flex min-h-svh flex-col px-5 pt-24 pb-6 md:px-10">
      {/* dot grid fades out toward the bottom of the hero */}
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_45%,transparent_85%)]" />

      <motion.div style={{ y, opacity }} className="mx-auto mt-auto w-full max-w-6xl">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-2xl">
          <motion.p variants={fadeUp} className="label flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fg" />
            </span>
            [ 00 ] · {t(profile.status)}
          </motion.p>

          <h1 key={lines.join()} className="display mt-5 text-[clamp(3.2rem,12vw,7rem)]">
            <MaskLines lines={lines} animateNow delay={0.2} lineClassName={(i) => (i === 1 ? "outline-text" : "")} />
          </h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-md leading-relaxed text-fg/85">
            {t(profile.bio)}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn">
              {t(strings.seeProjects)}
            </a>
            <a href="#contact" className="btn btn-solid">
              {t(strings.getInTouch)} →
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* giant wordmark stretched to the full width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-12 w-full max-w-6xl"
      >
        <motion.svg style={{ scaleY: markScale }} viewBox="0 0 1000 180" className="w-full origin-bottom" aria-label={profile.name.en}>
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
        <div className="label mt-3 flex justify-between gap-4 border-t border-line pt-3">
          <span>
            {t(profile.role)} — {new Date().getFullYear()}
          </span>
          <span className="hidden sm:inline">{t(strings.scroll)} ↓</span>
        </div>
      </motion.div>
    </section>
  );
}
