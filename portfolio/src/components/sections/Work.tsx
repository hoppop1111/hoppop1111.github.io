"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, PixelImage } from "@/components/ui/Reveal";
import type { CaseStudy, ExternalLink, Localized, Media, ProjectCategory } from "@/types/portfolio";

/** Project cards: pixel thumbnail, title, summary; "view details" opens the full write-up in place. */
export function Work() {
  const { t } = useLocale();
  const { categories, caseStudies } = portfolioData;
  const studies = [...caseStudies].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

  return (
    <Section id="work" index={3} title={t(strings.workTitle)} lead={t(strings.workLead)}>
      <ul className="grid gap-4 md:grid-cols-2">
        {studies.map((s, i) => (
          <ProjectCard key={s.slug} study={s} index={i} total={studies.length} category={categories.find((c) => c.id === s.category)} />
        ))}
      </ul>
    </Section>
  );
}

function LinkButton({ link, solid = false }: { link: ExternalLink; solid?: boolean }) {
  const { t } = useLocale();
  const file = link.kind === "file";
  return (
    <a
      href={link.href}
      target={file ? undefined : "_blank"}
      rel="noopener"
      download={file ? "" : undefined}
      className={`btn ${solid ? "btn-solid" : ""}`}
    >
      {t(link.label)} {file ? "↓" : "↗"}
    </a>
  );
}

function ProjectCard({ study: s, index, total, category }: { study: CaseStudy; index: number; total: number; category?: ProjectCategory }) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const pad = (n: number) => String(n).padStart(2, "0");

  // only real images are shown; entries without a `src` are drafts
  const images: Media[] = [...s.process, ...s.moodboard, ...s.mockups].filter((m) => m.src);
  const story: [Localized, Localized][] = [
    [strings.challenge, s.challenge],
    [strings.approach, s.approach],
    [strings.outcome, s.outcome],
  ];
  const primary = s.links[0];

  return (
    <motion.li {...onView} variants={fadeUp} className="flex flex-col crosshair border border-line bg-panel p-4 md:p-5">
      <p className="label flex justify-between gap-4">
        <span>
          {pad(index + 1)} / {pad(total)}
        </span>
        <span className="truncate">
          {category ? t(category.label) : ""}
          {s.year ? ` · ${s.year}` : ""}
          {s.featured ? " · ★" : ""}
        </span>
      </p>

      <div className="mt-4 border border-line bg-bg">
        <PixelImage seed={s.slug} />
      </div>

      <h3 className="display mt-6 text-3xl md:text-4xl">{t(s.title)}</h3>
      <p className="mt-3 leading-relaxed text-muted">{t(s.summary)}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="btn btn-solid">
          {open ? t(strings.hideDetails) : t(strings.viewDetails)}
        </button>
        {primary && <LinkButton link={primary} />}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-line pt-6 leading-relaxed">
              <p className="label">{t(s.role)}</p>
              {story.map(([label, body]) => (
                <div key={label.en}>
                  <p className="label text-fg">{t(label)}</p>
                  <p className="mt-1 text-fg/85">{t(body)}</p>
                </div>
              ))}
              {s.process.length > 0 && (
                <div>
                  <p className="label text-fg">{t(strings.steps)}</p>
                  <p className="mt-1 text-fg/85">{s.process.map((p) => t(p.label)).join(" → ")}</p>
                </div>
              )}
              {images.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {images.map((m) => (
                    // eslint-disable-next-line @next/next/no-img-element -- static export
                    <img key={m.src} src={m.src} alt={t(m.alt)} className="w-full border border-line" />
                  ))}
                </div>
              )}
              <ul className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <li key={tag} className="border border-line px-2 py-1 font-mono text-[10px] tracking-wider text-muted uppercase">
                    {tag}
                  </li>
                ))}
              </ul>
              {s.links.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {s.links.slice(1).map((l) => (
                    <LinkButton key={l.href} link={l} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
