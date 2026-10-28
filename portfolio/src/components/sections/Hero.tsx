"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import { Spotlight } from "@/components/effects/Spotlight";
import { DustParticles } from "@/components/effects/DustParticles";
import { FilmGrain, Fog, Wall } from "@/components/effects/Atmosphere";
import { GlowButton } from "@/components/ui/GlowButton";

const TITLE = "PORTFOLIO";

/** Opening shot: fade up from black, slow push-in, spotlight from above. */
export function Hero() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const ref = useRef<HTMLElement>(null);

  // scroll-out: the scene pushes in and fades as the next chapter arrives
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-night">
      <motion.div className="gpu absolute inset-0" style={{ scale: sceneScale, opacity: sceneOpacity }}>
        {/* slow push-in on load */}
        <motion.div
          className="gpu absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: EASE_CINE }}
        >
          <Wall />
          <Floor />
          <Spotlight originX={50} intensity={1.05} />
          <Fog />
          <DustParticles beamX={50} />
          <FilmGrain />
        </motion.div>

        {/* titles */}
        <motion.div className="gpu relative z-10 flex h-full flex-col items-center justify-center px-5 text-center" style={{ y: titleY }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.4, ease: EASE_CINE, delay: 1.0 }}
            className="mb-4 font-mono text-[10px] tracking-[0.5em] text-hud uppercase md:text-xs"
          >
            {t(profile.tagline)}
          </motion.p>

          <h1 aria-label={TITLE} className="font-display text-glow text-[clamp(2.4rem,12.5vw,13rem)] leading-none font-semibold whitespace-nowrap text-[#f1f4f1]">
            {Array.from(TITLE).map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden
                className={`inline-block ${i === 0 ? "text-[1.18em]" : ""}`}
                initial={{ opacity: 0, scale: 1.6, y: "0.15em" }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 2.2, ease: EASE_CINE, delay: 0.55 + Math.abs(i - (TITLE.length - 1) / 2) * 0.12 }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: EASE_CINE, delay: 1.6 }}
            className="mt-5 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-lamp/60 md:w-16" />
            <span className="font-display text-sm tracking-[0.35em] text-lamp md:text-lg">{profile.name.en.toUpperCase()}</span>
            <span className="h-px w-10 bg-lamp/60 md:w-16" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.9 }}
            className="mt-3 font-serif text-xl text-[#c9d6d8] italic md:text-2xl"
          >
            {t(profile.name)} — {t(profile.role)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE_CINE, delay: 2.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <GlowButton href="#work">{t(strings.viewWork)}</GlowButton>
            <GlowButton variant="ghost" href={profile.resume.href} download={profile.resume.downloadName}>
              {t(strings.resume)}
            </GlowButton>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.2 }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-[#8fb8bf] uppercase"
        >
          {t(strings.scroll)}
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </motion.div>

      {/* fade up from black */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
    </section>
  );
}

/** Wet tiled floor in perspective, fading into darkness. */
function Floor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] [perspective:600px]">
      <div
        className="absolute inset-x-[-50%] bottom-0 h-[160%] origin-bottom"
        style={{
          transform: "rotateX(72deg)",
          backgroundImage:
            "linear-gradient(rgba(127,219,230,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(127,219,230,0.16) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(60% 70% at 50% 100%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(60% 70% at 50% 100%, #000 20%, transparent 75%)",
        }}
      />
    </div>
  );
}
