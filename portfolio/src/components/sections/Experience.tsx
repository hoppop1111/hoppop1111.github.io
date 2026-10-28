"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { Ink, inkItem, inkList, onView } from "@/components/ui/Ink";
import type { TimelineEntry } from "@/types/portfolio";

export function Experience() {
  const { t } = useLocale();
  const { experience, education } = portfolioData;

  return (
    <Section id="experience" title={t(strings.experience)}>
      <Entries entries={experience} />
      <Ink>
        <h3 className="mt-16 mb-4 font-serif text-3xl italic">{t(strings.education)}</h3>
      </Ink>
      <Entries entries={education} />
    </Section>
  );
}

function Entries({ entries }: { entries: TimelineEntry[] }) {
  const { t } = useLocale();

  return (
    <motion.ol {...onView} variants={inkList}>
      {entries.map((e) => (
        <motion.li
          variants={inkItem}
          key={e.id}
          className="grid gap-x-10 gap-y-1 border-t border-rule py-6 md:grid-cols-[10rem_1fr]"
        >
          <span className="pt-1.5 font-mono text-sm text-faded">{t(e.period)}</span>
          <div>
            <h4 className="font-serif text-2xl">{t(e.title)}</h4>
            <p className="text-faded">{t(e.org)}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed marker:text-faded">
              {e.points.map((p, i) => (
                <li key={i}>{t(p)}</li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
