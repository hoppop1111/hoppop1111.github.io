"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, NotebookPen } from "lucide-react";
import type { CaseStudy as CaseStudyData, ExternalLink, ProjectCategory } from "@/types/portfolio";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import { HudTag } from "@/components/ui/Hud";
import { Burst } from "@/components/ui/Decor";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PaperSlide, TiltSlide } from "./TiltSlide";
import { MoodboardGrid } from "./MoodboardGrid";
import { ProcessSlider } from "./ProcessSlider";
import { MockupViewer } from "./MockupViewer";

function LinkIcon({ kind }: { kind: ExternalLink["kind"] }) {
  if (kind === "file") return <Download className="h-4 w-4" />;
  if (kind === "notebook") return <NotebookPen className="h-4 w-4" />;
  return <ArrowUpRight className="h-4 w-4" />;
}

/** Full case study: dossier header, then moodboard / process / mockup slides. */
export function CaseStudy({ study, category, index }: { study: CaseStudyData; category: ProjectCategory; index: number }) {
  const { t } = useLocale();
  const { accent } = category;
  const title = t(study.title);

  return (
    <article className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      {/* dossier header */}
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
        className="mb-16 grid gap-10 md:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <motion.p
            variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
            transition={{ duration: 1, ease: EASE_CINE }}
            className="mb-3 font-mono text-[11px] tracking-[0.35em] uppercase"
            style={{ color: accent }}
          >
            Case {String(index + 1).padStart(2, "0")} · {t(category.label)}
          </motion.p>
          <motion.h3
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.3, ease: EASE_CINE }}
            className="font-serif text-5xl leading-[0.95] font-medium text-[#f2f5f4] md:text-7xl"
          >
            {title}
          </motion.h3>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.2, ease: EASE_CINE }}
            className="mt-5 max-w-lg text-[#a9bcbf]"
          >
            {t(study.summary)}
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 1.2 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {study.tags.map((tag) => (
              <HudTag key={tag}>{tag}</HudTag>
            ))}
          </motion.div>
        </div>

        <motion.dl
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.2, ease: EASE_CINE }}
          className="hud hud-corners self-end rounded-md p-6 text-sm"
        >
          {[
            [strings.role, study.role],
            [strings.challenge, study.challenge],
            [strings.approach, study.approach],
            [strings.outcome, study.outcome],
          ].map(([label, value]) => (
            <div key={label.en} className="border-b border-hud/10 py-3 first:pt-0 last:border-0 last:pb-0">
              <dt className="mb-1 font-mono text-[10px] tracking-[0.3em] text-hud uppercase">{t(label)}</dt>
              <dd className="leading-relaxed text-[#d4e1e3]">{t(value)}</dd>
            </div>
          ))}
          <div className="mt-5 flex flex-wrap gap-2">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.kind === "file" ? undefined : "_blank"}
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-lamp/40 px-4 py-2 font-mono text-[11px] tracking-wider text-lamp uppercase transition-colors hover:bg-lamp hover:text-night"
              >
                <LinkIcon kind={l.kind} /> {t(l.label)}
              </a>
            ))}
          </div>
        </motion.dl>
      </motion.header>

      <div className="space-y-24 md:space-y-36">
        {study.moodboard.length > 0 && (
          <TiltSlide from="right">
            <PaperSlide eyebrow={t(strings.moodboard)} title={title} accent={accent}>
              <MoodboardGrid items={study.moodboard} accent={accent} />
            </PaperSlide>
            <Burst color={accent} className="-top-8 -right-5 md:-right-8" size={86} delay={0.3} />
          </TiltSlide>
        )}

        {study.process.length > 0 && (
          <TiltSlide from="left">
            <PaperSlide eyebrow={t(strings.process)} title={title} accent={accent}>
              <ProcessSlider stages={study.process} accent={accent} />
            </PaperSlide>
            <Burst color={accent} className="-bottom-6 -left-5 md:-left-8" size={64} delay={0.4} />
          </TiltSlide>
        )}

        {study.mockups.length > 0 && (
          <TiltSlide from="right">
            <PaperSlide eyebrow={t(strings.mockups)} title={title} accent={accent}>
              <MockupViewer mockups={study.mockups} accent={accent} slug={study.slug} />
            </PaperSlide>
            <Burst color={accent} className="-top-6 left-[12%]" size={58} delay={0.5} />
          </TiltSlide>
        )}
      </div>
    </article>
  );
}

/** Compact card for case studies that are text + links only. */
export function CaseCard({ study, accent, index }: { study: CaseStudyData; accent: string; index: number }) {
  const { t } = useLocale();
  const link = study.links[0];
  return (
    <motion.a
      href={link?.href}
      target={link?.kind === "file" ? undefined : "_blank"}
      rel="noopener"
      initial={{ opacity: 0, y: 50, rotateX: 18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: EASE_CINE, delay: (index % 3) * 0.12 }}
      className="gpu group hud relative flex flex-col overflow-hidden rounded-md"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105">
          <MediaFrame media={study.cover} accent={accent} tone="dark" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h4 className="font-serif text-2xl leading-tight text-[#f2f5f4]">{t(study.title)}</h4>
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-hud/30 text-hud transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:text-night">
            <span className="absolute h-9 w-9 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" style={{ background: accent }} />
            <ArrowUpRight className="relative h-4 w-4" />
          </span>
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#a9bcbf]">{t(study.summary)}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] tracking-wider text-hud/70 uppercase">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
