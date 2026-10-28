"use client";

import { ArrowUpRight, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";

export function Certificates() {
  const { t } = useLocale();

  return (
    <section id="certificates" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <SectionHeader index="04" title={t(strings.certsTitle)} lead={t(strings.certsLead)} />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certificates.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 0.06}>
            <a
              href={c.file}
              target="_blank"
              rel="noopener"
              className="card group flex h-full items-center gap-4 p-4 transition-colors duration-300 hover:border-fg/30"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fg/[0.06] transition-colors duration-300 group-hover:bg-duck group-hover:text-duck-ink">
                <Award className="h-5 w-5" />
              </span>
              <span className="flex-1 leading-snug font-medium">{c.name}</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-muted transition-colors group-hover:text-fg">
                PDF{" "}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
