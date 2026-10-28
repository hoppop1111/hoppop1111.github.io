"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Download, ExternalLink, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_OUT } from "@/lib/motion";
import type { CaseStudy, ExternalLink as LinkData, Media } from "@/types/portfolio";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { lockScroll } from "@/components/SmoothScroll";

const LINK_ICONS: Record<LinkData["kind"], React.ReactNode> = {
  file: <Download className="h-4 w-4" />,
  notebook: <BookOpen className="h-4 w-4" />,
  live: <ExternalLink className="h-4 w-4" />,
  repo: <GithubIcon className="h-4 w-4" />,
};

/** Slide-in panel with the full case study. Closes on Esc, overlay click or the X. */
export function ProjectDrawer({ study, onClose }: { study: CaseStudy | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!study) return;
    lockScroll(true);
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [study, onClose]);

  return (
    <AnimatePresence>
      {study && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            data-lenis-prevent
            initial={{ x: "105%" }}
            animate={{ x: 0 }}
            exit={{ x: "105%" }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="fixed inset-y-0 right-0 z-[61] w-full max-w-2xl overflow-y-auto overscroll-contain bg-bg md:inset-y-3 md:right-3 md:rounded-[1.75rem] md:border md:border-line"
          >
            <DrawerBody study={study} closeRef={closeRef} onClose={onClose} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function DrawerBody({
  study,
  closeRef,
  onClose,
}: {
  study: CaseStudy;
  closeRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const category = portfolioData.categories.find((c) => c.id === study.category);
  const index = portfolioData.caseStudies.indexOf(study);
  // only real images are shown here; entries without a `src` are drafts
  const gallery: Media[] = [...study.moodboard, ...study.mockups].filter((m) => m.src);
  const story = [
    { label: strings.challenge, body: study.challenge },
    { label: strings.approach, body: study.approach },
    { label: strings.outcome, body: study.outcome },
  ];

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between bg-bg/85 px-5 py-4 backdrop-blur-md md:px-8">
        <span className="flex items-center gap-2 text-sm text-muted">
          {category && <span className="h-2 w-2 rounded-full" style={{ background: category.accent }} />}
          {category && t(category.label)}
          {study.year && <span className="font-mono">· {study.year}</span>}
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label={t(strings.close)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-fg hover:bg-fg hover:text-bg"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="px-5 pb-12 md:px-8">
        <ProjectCover study={study} category={category} index={index} alt={t(study.cover.alt)} className="aspect-[16/9]" />

        <h2 id="project-title" className="display-tight mt-8 font-display text-[clamp(2.2rem,6vw,3.5rem)] font-semibold">
          {t(study.title)}
        </h2>
        <p className="mt-3 font-mono text-sm text-muted">
          {t(strings.role)} — {t(study.role)}
        </p>
        <p className="mt-5 text-lg leading-relaxed">{t(study.summary)}</p>

        {study.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.kind === "file" ? undefined : "_blank"}
                rel="noopener"
                download={l.kind === "file" ? "" : undefined}
                className="btn btn-primary"
              >
                {LINK_ICONS[l.kind]} {t(l.label)}
              </a>
            ))}
          </div>
        )}

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {story.map((s, i) => (
            <div key={s.label.en} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="flex gap-3 font-mono text-sm text-muted">
                <span>0{i + 1}</span>
                {t(s.label)}
              </dt>
              <dd className="leading-relaxed">{t(s.body)}</dd>
            </div>
          ))}
        </dl>

        {study.process.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-5 font-display text-2xl font-semibold">{t(strings.process)}</h3>
            <ol className="grid gap-3 sm:grid-cols-3">
              {study.process.map((p, i) => (
                <li key={p.id} className="card p-4">
                  {p.src && (
                    // eslint-disable-next-line @next/next/no-img-element -- static export
                    <img src={p.src} alt={t(p.alt)} className="mb-3 aspect-[4/3] w-full rounded-xl object-cover" />
                  )}
                  <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-duck font-mono text-xs text-duck-ink">
                    {i + 1}
                  </span>
                  <p className="font-medium">{t(p.label)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t(p.note)}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {gallery.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-5 font-display text-2xl font-semibold">{t(strings.gallery)}</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {gallery.map((m) => (
                // eslint-disable-next-line @next/next/no-img-element -- static export
                <img key={m.src} src={m.src} alt={t(m.alt)} className="w-full rounded-2xl border border-line object-cover" />
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-fg/[0.06] px-3 py-1.5 font-mono text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
