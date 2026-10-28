"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Cpu, GraduationCap, Briefcase, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import { Fog, Wall } from "@/components/effects/Atmosphere";
import { WallLamp } from "@/components/effects/WallLamp";
import { DustParticles } from "@/components/effects/DustParticles";
import { ChapterTitle } from "@/components/ui/ChapterTitle";
import { HudCard, HudTag } from "@/components/ui/Hud";
import type { TimelineEntry } from "@/types/portfolio";

export function About() {
  const { t } = useLocale();
  const { profile, skills, experience, education, certificates } = portfolioData;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["18%", "0%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const [technical, tools] = skills;

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-night">
      {/* ---------- chapter slide ---------- */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <Wall />
        <WallLamp />
        <Fog />
        <DustParticles beamX={22} density={0.6} />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 py-28 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          {/* lit portrait */}
          <motion.div className="gpu relative mx-auto w-[min(78vw,420px)]" style={{ y: photoY, scale: photoScale }}>
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                maskImage: "radial-gradient(52% 55% at 50% 42%, #000 48%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(52% 55% at 50% 42%, #000 48%, transparent 100%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                src={profile.avatar.src}
                alt={t(profile.avatar.alt)}
                className="h-full w-full object-cover [filter:saturate(0.7)_contrast(1.08)_brightness(0.92)]"
              />
              {/* teal grade + top light falloff */}
              <div className="absolute inset-0 mix-blend-color" style={{ background: "#16343a", opacity: 0.35 }} />
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(80% 60% at 30% 0%, rgba(246,231,193,0.28), transparent 60%), linear-gradient(to top, rgba(7,9,14,0.85), transparent 45%)" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_CINE, delay: 0.6 }}
              className="hud-pill absolute bottom-[12%] -left-2 rounded-sm px-4 py-1.5 font-display text-xs tracking-[0.3em] text-[#e8fbfd] md:-left-8"
            >
              {profile.name.en.toUpperCase()}
            </motion.div>
          </motion.div>

          <div>
            <ChapterTitle title="ABOUT ME" eyebrow={t(profile.status)} size="lg" />
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.9 }}
              className="mt-8 max-w-xl space-y-5"
            >
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 1.2, ease: EASE_CINE }}
                className="font-serif text-2xl leading-snug text-[#e9efef] italic md:text-3xl"
              >
                {t(profile.role)}
              </motion.p>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 1.2, ease: EASE_CINE }}
                className="text-[15px] leading-relaxed text-[#a9bcbf] md:text-base"
              >
                {t(profile.bio)}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- HUD dossier ---------- */}
      <div className="relative mx-auto max-w-7xl px-5 pb-32 md:px-8">
        <div className="grid gap-5 md:grid-cols-6">
          <HudCard label={t(strings.skills)} className="md:col-span-3">
            <Heading icon={<Cpu className="h-4 w-4" />} text={t(technical.title)} />
            <div className="flex flex-wrap gap-2">
              {technical.items.map((s) => (
                <HudTag key={s.en}>{t(s)}</HudTag>
              ))}
            </div>
          </HudCard>
          <HudCard label={t(strings.tools)} className="md:col-span-3" delay={0.1}>
            <Heading icon={<Wrench className="h-4 w-4" />} text={t(tools.title)} />
            <div className="flex flex-wrap gap-2">
              {tools.items.map((s) => (
                <HudTag key={s.en}>{t(s)}</HudTag>
              ))}
            </div>
          </HudCard>
          <HudCard label={t(strings.experience)} className="md:col-span-4">
            <Timeline entries={experience} icon={<Briefcase className="h-4 w-4" />} />
          </HudCard>
          <HudCard label={t(strings.education)} className="md:col-span-2" delay={0.1}>
            <Timeline entries={education} icon={<GraduationCap className="h-4 w-4" />} />
          </HudCard>
          <HudCard label={t(strings.certificates)} className="md:col-span-6">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c) => (
                <a
                  key={c.id}
                  href={c.file}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-3 rounded-sm border border-transparent px-3 py-2.5 text-sm text-[#cfe0e2] transition-colors hover:border-hud/30 hover:bg-hud/[0.05]"
                >
                  <Award className="h-4 w-4 shrink-0 text-lamp/80" />
                  <span className="transition-transform duration-500 group-hover:translate-x-1">{c.name}</span>
                </a>
              ))}
            </div>
          </HudCard>
        </div>
      </div>
    </section>
  );
}

function Heading({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <h3 className="mb-4 flex items-center gap-2 font-display text-sm tracking-[0.2em] text-lamp uppercase">
      {icon} {text}
    </h3>
  );
}

function Timeline({ entries, icon }: { entries: TimelineEntry[]; icon: React.ReactNode }) {
  const { t } = useLocale();
  return (
    <ol className="space-y-6 border-l border-hud/20 pl-5">
      {entries.map((e) => (
        <li key={e.id} className="relative">
          <span className="absolute top-1.5 -left-[25px] h-2 w-2 rounded-full bg-hud shadow-[0_0_10px_#7fdbe6]" />
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="flex items-center gap-2 font-medium text-[#eef5f5]">
              <span className="text-lamp/80">{icon}</span>
              {t(e.title)}
            </h4>
            <span className="font-mono text-[11px] text-hud/80">{t(e.period)}</span>
          </div>
          <p className="mb-2 text-sm text-[#8fb8bf]">{t(e.org)}</p>
          <ul className="space-y-1 text-sm leading-relaxed text-[#a9bcbf]">
            {e.points.map((p, i) => (
              <li key={i}>— {t(p)}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
