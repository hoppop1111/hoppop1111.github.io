"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download, Plus } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import type { CaseStudy, Localized, Media, ProjectCategory } from "@/types/portfolio";

/** Project cards: each one opens in place to show the full write-up. */
export function Work() {
  const { t } = useLocale();
  const { categories, caseStudies } = portfolioData;
  const studies = [...caseStudies].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

  return (
    <Section id="work" index="03" title={t(strings.workTitle)} lead={t(strings.workLead)}>
      <ul className="space-y-6">
        {studies.map((s, i) => (
          <ProjectCard key={s.slug} study={s} index={i} category={categories.find((c) => c.id === s.category)} />
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ study: s, index, category }: { study: CaseStudy; index: number; category?: ProjectCategory }) {
  const { t } = useLocale();

  // the card tips up from a 3D tilt and scales in as it enters the viewport
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 55%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  // only real images are shown; entries without a `src` are drafts
  const images: Media[] = [...s.process, ...s.moodboard, ...s.mockups].filter((m) => m.src);
  const story: [Localized, Localized][] = [
    [strings.challenge, s.challenge],
    [strings.approach, s.approach],
    [strings.outcome, s.outcome],
  ];
  const accent = category?.accent ?? "var(--accent)";

  return (
    <li ref={ref} style={{ perspective: 1200 }}>
      <motion.details
        style={{ rotateX, scale, opacity, transformOrigin: "50% 100%" }}
        className="group glass relative overflow-hidden rounded-3xl"
      >
        <span aria-hidden className="absolute inset-y-0 left-0 w-1" style={{ background: accent }} />
        <summary className="flex cursor-pointer items-start gap-4 p-6 md:gap-8 md:p-8">
          <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              {category && (
                <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ color: accent, background: `color-mix(in srgb, ${accent} 14%, transparent)` }}>
                  {t(category.label)}
                </span>
              )}
              {s.featured && (
                <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-0.5 text-xs font-medium text-white">
                  ★ {t(strings.featured)}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-2xl font-semibold transition-colors group-hover:text-accent md:text-3xl">{t(s.title)}</h3>
            <p className="mt-2 text-muted">{t(s.summary)}</p>
          </div>
          <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-45">
            <Plus className="h-4 w-4" />
          </span>
        </summary>

        <div className="space-y-4 px-6 pb-8 leading-relaxed md:pr-24 md:pl-20">
          <p className="font-mono text-sm text-muted">{t(s.role)}</p>
          {story.map(([label, body]) => (
            <p key={label.en}>
              <span className="font-semibold text-accent-2">{t(label)} —</span> {t(body)}
            </p>
          ))}
          {s.process.length > 0 && (
            <p>
              <span className="font-semibold text-accent-2">{t(strings.steps)} —</span>{" "}
              {s.process.map((p) => t(p.label)).join(" → ")}
            </p>
          )}
          {images.length > 0 && (
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {images.map((m) => (
                // eslint-disable-next-line @next/next/no-img-element -- static export
                <img key={m.src} src={m.src} alt={t(m.alt)} className="w-full rounded-xl border border-line" />
              ))}
            </div>
          )}
          <p className="flex flex-wrap gap-2">
            {s.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
                {tag}
              </span>
            ))}
          </p>
          <p className="flex flex-wrap gap-3 pt-2">
            {s.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.kind === "file" ? undefined : "_blank"}
                rel="noopener"
                download={l.kind === "file" ? "" : undefined}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                {t(l.label)}
                {l.kind === "file" ? <Download className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
              </a>
            ))}
          </p>
        </div>
      </motion.details>
    </li>
  );
}
