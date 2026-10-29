"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Wrench, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, stagger, TiltCard, useParallax } from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = { cpu: Cpu, wrench: Wrench };

export function About() {
  const { t } = useLocale();

  return (
    <>
      <SkillMarquee />
      <Section id="about" index="01" title={t(strings.aboutTitle)} lead={t(strings.aboutLead)}>
        <motion.div {...onView} variants={stagger} className="grid gap-6 md:grid-cols-2">
          {portfolioData.skills.map((group) => {
            const Icon = ICONS[group.icon] ?? Cpu;
            return (
              <motion.div key={group.id} variants={fadeUp}>
                <TiltCard className="glass h-full rounded-3xl p-7 md:p-8">
                  <div style={{ transform: "translateZ(40px)" }}>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold">{t(group.title)}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
                    {group.items.map((item) => (
                      <li key={item.en} className="rounded-full border border-line px-3.5 py-1.5 text-sm">
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}

/** Two bands of skills sliding in opposite directions as the page scrolls. */
function SkillMarquee() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const left = useParallax(ref, 0, -500);
  const right = useParallax(ref, -500, 0);
  const items = portfolioData.skills.flatMap((g) => g.items.map(t));
  const band = [...items, ...items, ...items];

  return (
    // the outer box clips the tilted band's corners so the page never scrolls sideways
    <div ref={ref} aria-hidden className="relative z-10 overflow-hidden py-10">
      <div className="-rotate-2">
        {[left, right].map((x, row) => (
          <motion.div key={row} style={{ x }} className="flex gap-8 py-2 whitespace-nowrap">
            {band.map((s, i) => (
              <span
                key={i}
                className={`text-4xl font-bold tracking-tight md:text-6xl ${(i + row) % 2 ? "text-gradient" : "text-transparent [-webkit-text-stroke:1px_var(--muted)]"}`}
              >
                {s} <span className="text-muted">✦</span>
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
