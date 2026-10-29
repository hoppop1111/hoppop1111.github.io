"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, Reveal, stagger, useParallax } from "@/components/ui/Reveal";

export function About() {
  const { t } = useLocale();
  const { profile, skills, caseStudies, certificates, experience } = portfolioData;

  const rows: [string, string][] = [
    [t(strings.basedIn), t(strings.country)],
    [t(strings.role), t(profile.role)],
    [t(strings.focus), t(profile.tagline)],
    [t(strings.status), t(profile.status)],
  ];
  const stats: [number, string][] = [
    [caseStudies.length, t(strings.statProjects)],
    [certificates.length, t(strings.statCerts)],
    [experience.length, t(strings.statJobs)],
  ];

  return (
    <>
      <SkillTicker />
      <Section id="about" index={1} title={t(strings.aboutTitle)}>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-xl leading-relaxed md:text-2xl">{t(profile.bio)}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-line bg-panel/80 p-5 md:p-6">
              <p className="label mb-4">{t(strings.profile)}</p>
              <dl>
                {rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-t border-line py-3">
                    <dt className="label">{k}</dt>
                    <dd className="text-right font-mono text-xs tracking-wider uppercase">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 grid gap-2">
                <a href={profile.resume.href} target="_blank" rel="noopener" className="btn btn-solid justify-between">
                  {t(strings.viewResume)} <span>→</span>
                </a>
                <a href={profile.resume.href} download={profile.resume.downloadName} className="btn justify-between">
                  {t(strings.downloadResume)} <span className="text-muted">PDF ↓</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* skills */}
        <h3 className="display mt-24 text-5xl md:text-6xl">{t(strings.skills)}</h3>
        <motion.div {...onView} variants={stagger} className="mt-8 grid gap-4 md:grid-cols-2">
          {skills.map((group, gi) => (
            <motion.div key={group.id} variants={fadeUp} className="border border-line bg-panel/80 p-5">
              <p className="label flex justify-between">
                <span>{t(group.title)}</span>
                <span>{String(gi + 1).padStart(2, "0")}</span>
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.en} className="border border-line px-2.5 py-1.5 font-mono text-[11px] tracking-wider uppercase">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* numbers */}
        <h3 className="display mt-24 text-5xl md:text-6xl">{t(strings.numbers)}</h3>
        <motion.div {...onView} variants={stagger} className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map(([n, label]) => (
            <motion.div key={label} variants={fadeUp} className="border border-line bg-panel/80 p-5">
              <p className="display outline-text text-7xl font-light">{String(n).padStart(2, "0")}</p>
              <p className="mt-6 text-muted">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

/** Two mono lines of skills sliding in opposite directions as the page scrolls. */
function SkillTicker() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const left = useParallax(ref, 0, -400);
  const right = useParallax(ref, -400, 0);
  const items = portfolioData.skills.flatMap((g) => g.items.map(t));
  const band = [...items, ...items, ...items];

  return (
    <div ref={ref} aria-hidden className="relative z-10 overflow-hidden border-y border-line bg-bg py-3">
      {[left, right].map((x, row) => (
        <motion.div key={row} style={{ x }} className="label flex gap-6 py-1 whitespace-nowrap">
          {band.map((s, i) => (
            <span key={i} className={row ? "" : "text-fg"}>
              {s} <span className="ml-6">/</span>
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
