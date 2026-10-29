"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, Reveal } from "@/components/ui/Reveal";
import type { TimelineEntry } from "@/types/portfolio";

export function Experience() {
  const { t } = useLocale();
  const { experience, education } = portfolioData;

  return (
    <Section id="experience" index="02" title={t(strings.experience)}>
      <Timeline entries={experience} />
      <Reveal>
        <h3 className="mt-20 mb-10 text-3xl font-semibold md:text-4xl">{t(strings.education)}</h3>
      </Reveal>
      <Timeline entries={education} />
    </Section>
  );
}

/** Vertical timeline whose line draws itself as you scroll through it. */
function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const { t } = useLocale();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative space-y-8 pl-8 md:pl-12">
      <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[11px]" />
      <motion.span
        style={{ scaleY }}
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-accent to-accent-2 md:left-[11px]"
      />
      {entries.map((e, i) => (
        <motion.li
          key={e.id}
          {...onView}
          variants={{
            hidden: { ...fadeUp.hidden, x: i % 2 ? 40 : -40 },
            show: { ...fadeUp.show, x: 0 },
          }}
          className="relative"
        >
          <span className="absolute top-7 -left-8 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg md:-left-12 md:h-[23px] md:w-[23px] md:border-4" />
          <div className="glass rounded-3xl p-6 md:p-8">
            <p className="font-mono text-xs tracking-wider text-accent-2">{t(e.period)}</p>
            <h4 className="mt-2 text-xl font-semibold md:text-2xl">{t(e.title)}</h4>
            <p className="text-muted">{t(e.org)}</p>
            <ul className="mt-4 space-y-2 leading-relaxed">
              {e.points.map((p, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                  {t(p)}
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
