"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { fadeUp, SplitWords, stagger } from "@/components/ui/Reveal";

export function Hero() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");

  // the hero copy lifts away and fades as you scroll past it
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section ref={ref} id="top" className="relative z-10 flex min-h-svh items-center px-5 pt-36 pb-20 md:pt-24">
      <motion.div style={{ y, opacity, scale }} className="mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t(profile.status)}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-8 font-mono text-sm tracking-widest text-muted uppercase">
            {t(strings.hello)}
          </motion.p>
          <h1 key={t(profile.name)} className="mt-3 text-[clamp(2.8rem,9vw,6.5rem)] leading-[1.02] font-bold tracking-tight">
            <SplitWords text={t(profile.name)} animateNow delay={0.25} className="text-gradient" />
          </h1>

          <motion.p variants={fadeUp} className="mt-6 text-xl font-medium md:text-2xl">
            {t(profile.role)} <span className="text-muted">· {t(profile.tagline)}</span>
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {t(profile.bio)}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.resume.href}
              download={profile.resume.downloadName}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 font-medium text-white shadow-[0_10px_30px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> {t(strings.resume)}
            </a>
            {email && (
              <a
                href={email.href}
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> {t(strings.emailMe)}
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase"
      >
        {t(strings.scroll)}
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
