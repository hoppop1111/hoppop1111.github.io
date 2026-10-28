"use client";

import { Cpu, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";

const GROUP_ICONS: Record<string, typeof Cpu> = { technical: Cpu, tools: Wrench };

export function About() {
  const { t } = useLocale();
  const { skills } = portfolioData;

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <SectionHeader index="01" title={t(strings.aboutTitle)} lead={t(strings.aboutLead)} />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, gi) => {
          const Icon = GROUP_ICONS[group.id] ?? Cpu;
          return (
            <Reveal key={group.id} delay={gi * 0.1} className="card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-duck text-duck-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold">{t(group.title)}</h3>
                <span className="ml-auto font-mono text-xs text-muted">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="divide-y divide-line">
                {group.items.map((item, i) => (
                  <li key={item.en} className="group flex items-center gap-4 py-3.5">
                    <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
