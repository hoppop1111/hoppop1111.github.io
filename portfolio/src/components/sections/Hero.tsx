"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { fadeUp } from "@/lib/motion";
import { ContactIcon, CONTACT_NAMES } from "@/components/ui/ContactIcon";

const SOCIAL_KINDS = ["github", "linkedin", "kaggle", "line"];

/** Bento-grid hero: intro, portrait, tagline, stats and social links. */
export function Hero() {
  const { t } = useLocale();
  const { profile, caseStudies, certificates, skills } = portfolioData;
  const socials = profile.contacts.filter((c) => SOCIAL_KINDS.includes(c.kind));
  const stats = [
    { value: caseStudies.length, label: strings.statProjects },
    { value: certificates.length, label: strings.statCerts },
    { value: skills.reduce((n, g) => n + g.items.length, 0), label: strings.statSkills },
  ];

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-24 pb-6 md:px-6 md:pt-28">
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        className="grid gap-3 md:grid-cols-4 md:gap-4"
      >
        {/* intro */}
        <motion.div
          variants={fadeUp}
          className="card flex flex-col justify-between gap-12 p-6 sm:p-8 md:col-span-3 md:row-span-2 md:p-10"
        >
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="ping-soft absolute inset-0 rounded-full bg-emerald-500" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t(profile.status)}
          </span>

          <div>
            <p className="mb-4 font-mono text-sm text-muted">{t(profile.role)}</p>
            <h1 className="display-tight font-display text-[clamp(3rem,9.5vw,7.25rem)] font-semibold">
              {/* keep first name and surname whole: Thai has no spaces, so the browser would split the surname */}
              {t(profile.name)
                .split(" ")
                .map((part) => (
                  <span key={part} className="inline-block whitespace-nowrap">
                    {part}&nbsp;
                  </span>
                ))}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{t(profile.bio)}</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a href="#work" className="btn btn-primary">
              {t(strings.viewWork)} <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href={profile.resume.href} download={profile.resume.downloadName} className="btn btn-ghost">
              <Download className="h-4 w-4" /> {t(strings.resume)}
            </a>
          </div>
        </motion.div>

        {/* portrait */}
        <motion.div
          variants={fadeUp}
          className="card relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] md:row-span-2 md:aspect-auto"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
          <img
            src={profile.avatar.src}
            alt={t(profile.avatar.alt)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {profile.name.en}
          </span>
        </motion.div>

        {/* tagline */}
        <motion.div variants={fadeUp} className="flex flex-col justify-between gap-6 rounded-[1.75rem] bg-duck p-6 text-duck-ink">
          <span className="text-3xl" aria-hidden>
            🦆
          </span>
          <p className="font-display text-xl leading-tight font-semibold">{t(profile.tagline)}</p>
        </motion.div>

        {/* stats */}
        <motion.div variants={fadeUp} className="card grid grid-cols-3 divide-x divide-line py-6 md:col-span-2">
          {stats.map((s) => (
            <div key={s.label.en} className="flex flex-col justify-between gap-3 px-4 sm:px-6">
              <span className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {s.value}
                <span className="text-muted">+</span>
              </span>
              <span className="text-xs text-muted sm:text-sm">{t(s.label)}</span>
            </div>
          ))}
        </motion.div>

        {/* socials */}
        <motion.div variants={fadeUp} className="card flex flex-col justify-between gap-4 p-5">
          <span className="text-sm text-muted">{t(strings.findMe)}</span>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-2">
            {socials.map((c) => (
              <a
                key={c.kind}
                href={c.href}
                target="_blank"
                rel="noopener"
                aria-label={CONTACT_NAMES[c.kind]}
                title={CONTACT_NAMES[c.kind]}
                className="flex aspect-square items-center justify-center rounded-2xl border border-line transition-all duration-300 hover:-translate-y-0.5 hover:border-duck hover:bg-duck hover:text-duck-ink md:aspect-auto md:h-12"
              >
                <ContactIcon kind={c.kind} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Endless ticker of every skill and tool. */
export function SkillTicker() {
  const { t } = useLocale();
  const words = portfolioData.skills.flatMap((g) => g.items).map(t);

  return (
    <div className="overflow-hidden py-8 md:py-12" aria-hidden>
      <div className="marquee flex w-max">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center font-display text-3xl font-medium whitespace-nowrap md:text-5xl">
            <span className={i % 2 ? "text-muted" : ""}>{w}</span>
            <span className="mx-6 text-duck md:mx-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
