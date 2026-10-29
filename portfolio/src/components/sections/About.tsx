"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, Reveal, stagger } from "@/components/ui/Reveal";
import { openResume } from "@/lib/resume";

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
    <Section id="about" index={1} title={t(strings.aboutTitle)}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <Reveal>
          <p className="text-xl leading-relaxed lg:text-2xl">{t(profile.bio)}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="crosshair border border-line bg-panel p-5 md:p-6">
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
              <button onClick={openResume} className="btn btn-solid justify-between">
                {t(strings.viewResume)} <span>→</span>
              </button>
              <a href={profile.resume.href} download={profile.resume.downloadName} className="btn justify-between">
                {t(strings.downloadResume)} <span className="text-muted">PDF ↓</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* skills */}
      <h3 className="display mt-16 text-5xl md:mt-20 md:text-6xl">{t(strings.skills)}</h3>
      <motion.div {...onView} variants={stagger} className="mt-6 grid gap-4 md:grid-cols-2">
        {skills.map((group, gi) => (
          <motion.div key={group.id} variants={fadeUp} className="crosshair border border-line bg-panel p-5">
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
      <h3 className="display mt-16 text-5xl md:mt-20 md:text-6xl">{t(strings.numbers)}</h3>
      <motion.div {...onView} variants={stagger} className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
        {stats.map(([n, label], i) => (
          <motion.div key={i} variants={fadeUp} className="crosshair border border-line bg-panel p-3 sm:p-5">
            <p className="display outline-text text-5xl font-light sm:text-7xl">{String(n).padStart(2, "0")}</p>
            <p className="mt-3 text-xs leading-snug text-muted sm:mt-6 sm:text-base">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
