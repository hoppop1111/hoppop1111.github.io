"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, MaskLines, onView, stagger } from "@/components/ui/Reveal";
import type { TimelineEntry } from "@/types/portfolio";

export function Experience() {
  const { t } = useLocale();
  const { experience, education } = portfolioData;

  return (
    <Section id="experience" index={2} title={t(strings.experience)}>
      <Entries entries={experience} />
      <h3 key={t(strings.education)} className="display mt-24 mb-8 text-5xl md:text-6xl">
        <MaskLines lines={[t(strings.education)]} />
      </h3>
      <Entries entries={education} />
    </Section>
  );
}

function Entries({ entries }: { entries: TimelineEntry[] }) {
  const { t } = useLocale();

  return (
    <motion.ol {...onView} variants={stagger} className="grid gap-4">
      {entries.map((e, i) => (
        <motion.li key={e.id} variants={fadeUp} className="grid border border-line bg-panel/80 md:grid-cols-[14rem_1fr]">
          <div className="label border-b border-line p-5 md:border-r md:border-b-0">
            #{i + 1} · {t(e.period)}
          </div>
          <div className="p-5 md:p-6">
            <h4 className="display text-3xl md:text-4xl">{t(e.title)}</h4>
            <p className="label mt-2">{t(e.org)}</p>
            <ul className="mt-5 space-y-2 leading-relaxed text-fg/85">
              {e.points.map((p, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-muted">•</span>
                  {t(p)}
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
