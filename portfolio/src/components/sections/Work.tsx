"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, PixelImage } from "@/components/ui/Reveal";
import type { CaseStudy, ExternalLink, Localized, Media, ProjectCategory } from "@/types/portfolio";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Project cards in a sideways slider, so the section is one card tall instead of
 * a long stack: swipe on touch, drag or use the arrows with a mouse. Each card's
 * "view details" opens the full write-up in place.
 */
export function Work() {
  const { t } = useLocale();
  const { categories, caseStudies } = portfolioData;
  const studies = [...caseStudies].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });

  /** Distance from one card's start to the next (card width + gap). */
  function step() {
    const track = trackRef.current;
    const [a, b] = track ? Array.from(track.children) : [];
    return a && b ? (b as HTMLElement).offsetLeft - (a as HTMLElement).offsetLeft : 1;
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setActive(atEnd ? studies.length - 1 : Math.round(track.scrollLeft / step()));
  }

  function go(index: number) {
    const i = Math.max(0, Math.min(studies.length - 1, index));
    trackRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });
  }

  // mouse drag-to-scroll (touch and trackpads scroll natively); snapping is paused
  // while dragging, and a drag doesn't count as a click on whatever it started on
  function onPointerDown(e: React.PointerEvent) {
    const track = trackRef.current;
    if (!track || e.pointerType !== "mouse") return;
    drag.current = { down: true, moved: false, x: e.clientX, left: track.scrollLeft };
  }
  function onPointerMove(e: React.PointerEvent) {
    const track = trackRef.current;
    const d = drag.current;
    if (!track || !d.down) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      track.setPointerCapture(e.pointerId);
      track.style.scrollSnapType = "none";
    }
    if (d.moved) track.scrollLeft = d.left - dx;
  }
  function onPointerUp() {
    const track = trackRef.current;
    const d = drag.current;
    if (!track || !d.down) return;
    d.down = false;
    if (d.moved) {
      track.style.scrollSnapType = "";
      go(Math.round(track.scrollLeft / step()));
    }
  }
  function onClickCapture(e: React.MouseEvent) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

  const progress = (active + 1) / studies.length;

  return (
    <Section id="work" index={3} title={t(strings.workTitle)} lead={t(strings.workLead)}>
      {/* counter + arrows */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="label">
          <span className="text-fg">{pad(active + 1)}</span> / {pad(studies.length)} · {t(strings.swipeHint)}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label={t(strings.prev)}
            className="btn px-3 disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(active + 1)}
            disabled={active === studies.length - 1}
            aria-label={t(strings.next)}
            className="btn px-3 disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* the track bleeds to the column edges so the next card peeks in */}
      <ul
        ref={trackRef}
        data-lenis-prevent-wheel
        tabIndex={0}
        aria-label={t(strings.workTitle)}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 items-start gap-4 overflow-x-auto px-6 pt-2 pb-4 [scrollbar-width:none] select-none focus-visible:outline-1 focus-visible:outline-fg sm:-mx-10 sm:scroll-px-10 sm:px-10 md:cursor-grab md:active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {studies.map((s, i) => (
          <ProjectCard key={s.slug} study={s} index={i} total={studies.length} category={categories.find((c) => c.id === s.category)} />
        ))}
      </ul>

      {/* progress hairline */}
      <div className="mt-4 h-px w-full bg-line">
        <motion.div
          className="h-px origin-left bg-fg"
          animate={{ scaleX: progress }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
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

  // only real images are shown; entries without a `src` are drafts
  const images: Media[] = [...s.process, ...s.moodboard, ...s.mockups].filter((m) => m.src);
  const story: [Localized, Localized][] = [
    [strings.challenge, s.challenge],
    [strings.approach, s.approach],
    [strings.outcome, s.outcome],
  ];
  const primary = s.links[0];

  return (
    <motion.li
      {...onView}
      variants={fadeUp}
      className="crosshair flex w-[85%] shrink-0 snap-start flex-col border border-line bg-panel p-4 sm:w-[60%] md:p-5 lg:w-[calc((100%-2rem)/2.5)]"
    >
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
