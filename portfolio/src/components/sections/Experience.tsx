"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_OUT } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/Reveal";
import type { Localized, TimelineEntry } from "@/types/portfolio";

export function Experience() {
  const { t } = useLocale();
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <SectionHeader index="02" title={t(strings.experience)} lead={t(strings.experienceLead)} />
      <Timeline title={strings.experience} icon={<Briefcase className="h-4 w-4" />} entries={experience} />
      <div className="h-12" />
      <Timeline title={strings.education} icon={<GraduationCap className="h-4 w-4" />} entries={education} />
    </section>
  );
}

function Timeline({ title, icon, entries }: { title: Localized; icon: React.ReactNode; entries: TimelineEntry[] }) {
  const { t } = useLocale();

  return (
    <div>
      <h3 className="mb-2 flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase">
        {icon} {t(title)}
      </h3>
      <ol>
        {entries.map((e, i) => (
          <motion.li
            key={e.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: i * 0.06 }}
            className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-6"
          >
            <span className="font-mono text-sm text-muted md:col-span-3">{t(e.period)}</span>
            <div className="md:col-span-4">
              <h4 className="font-display text-xl leading-snug font-semibold md:text-2xl">{t(e.title)}</h4>
              <p className="mt-1 text-sm text-muted">{t(e.org)}</p>
            </div>
            <ul className="space-y-2 text-[15px] leading-relaxed text-muted md:col-span-5">
              {e.points.map((p, pi) => (
                <li key={pi} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-fg/40" />
                  {t(p)}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
