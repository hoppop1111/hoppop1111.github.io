"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData, caseStudiesByCategory } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_OUT } from "@/lib/motion";
import type { CaseStudy } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/Reveal";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { ProjectDrawer } from "@/components/sections/ProjectDrawer";

const ALL = "all";

/** Filterable project grid; a card opens the full case study in a drawer. */
export function Work() {
  const { t } = useLocale();
  const { categories, caseStudies } = portfolioData;
  const [filter, setFilter] = useState(ALL);
  const [open, setOpen] = useState<CaseStudy | null>(null);
  const close = useCallback(() => setOpen(null), []);

  const studies =
    filter === ALL
      ? [...caseStudies].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false))
      : caseStudiesByCategory(filter);

  const tabs = [
    { id: ALL, label: t(strings.all), count: caseStudies.length, accent: undefined },
    ...categories.map((c) => ({
      id: c.id,
      label: t(c.label),
      count: caseStudiesByCategory(c.id).length,
      accent: c.accent,
    })),
  ];

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <SectionHeader index="03" title={t(strings.workTitle)} lead={t(strings.workLead)} />

      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {tabs.map((tab) => {
          const on = tab.id === filter;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(tab.id)}
              className={`relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                on ? "border-fg text-bg" : "border-line text-muted hover:border-fg/40 hover:text-fg"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-fg"
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                />
              )}
              {tab.accent && <span className="relative h-2 w-2 rounded-full" style={{ background: tab.accent }} />}
              <span className="relative">{tab.label}</span>
              <span className="relative font-mono text-xs opacity-60">{tab.count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {studies.map((s) => {
            const category = categories.find((c) => c.id === s.category);
            return (
              <motion.li
                key={s.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE_OUT }}
              >
                <button
                  onClick={() => setOpen(s)}
                  className="card group flex h-full w-full flex-col p-2.5 text-left transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]"
                >
                  <ProjectCover
                    study={s}
                    category={category}
                    index={caseStudies.indexOf(s)}
                    alt={t(s.cover.alt)}
                    className="aspect-[16/10]"
                  />
                  <div className="flex flex-1 flex-col p-3.5 pt-5">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted">
                      {category && <span>{t(category.label)}</span>}
                      {s.featured && (
                        <span className="rounded-full bg-duck px-2 py-0.5 font-medium text-duck-ink">{t(strings.featured)}</span>
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl leading-snug font-semibold">{t(s.title)}</h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-2 mb-5 text-sm leading-relaxed text-muted">{t(s.summary)}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-fg/[0.06] px-2.5 py-1 font-mono text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <ProjectDrawer study={open} onClose={close} />
    </section>
  );
}
