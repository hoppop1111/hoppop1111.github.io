"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { animate, motion } from "framer-motion";
import { portfolioData, caseStudiesByCategory } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import type { ProjectCategory } from "@/types/portfolio";
import { Fog, Wall } from "@/components/effects/Atmosphere";
import { WallLamp } from "@/components/effects/WallLamp";
import { DustParticles } from "@/components/effects/DustParticles";
import { ChapterTitle } from "@/components/ui/ChapterTitle";
import { CaseCard, CaseStudy } from "@/components/case-study/CaseStudy";
import { jumpTo } from "@/components/SmoothScroll";

/**
 * Project chapters. Switching category plays a "scene change": letterbox bars
 * close to black, a title card shows the next chapter, the content swaps while
 * hidden, then the bars open again.
 */
export function Work() {
  const { t } = useLocale();
  const { categories } = portfolioData;
  const [activeId, setActiveId] = useState(categories[0].id);
  const [card, setCard] = useState<ProjectCategory | null>(null);
  const busy = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const topBar = useRef<HTMLDivElement>(null);
  const bottomBar = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const studies = caseStudiesByCategory(active.id);
  const featured = studies.filter((s) => s.featured);
  const rest = studies.filter((s) => !s.featured);

  async function switchTo(next: ProjectCategory) {
    if (busy.current || next.id === activeId) return;
    const top = topBar.current;
    const bottom = bottomBar.current;
    if (!top || !bottom) return;
    busy.current = true;
    setCard(next);

    const close = { duration: 0.65, ease: [0.76, 0, 0.24, 1] as const };
    await Promise.all([animate(top, { scaleY: 1 }, close), animate(bottom, { scaleY: 1 }, close)]);
    if (cardRef.current) await animate(cardRef.current, { opacity: 1, scale: 1 }, { duration: 0.6, ease: EASE_CINE });

    // swap content while the screen is black, wait for React to commit it, then jump
    flushSync(() => setActiveId(next.id));
    if (sectionRef.current) jumpTo(sectionRef.current);
    await new Promise((r) => setTimeout(r, 650));

    if (cardRef.current) await animate(cardRef.current, { opacity: 0, scale: 1.06 }, { duration: 0.45 });
    await Promise.all([animate(top, { scaleY: 0 }, close), animate(bottom, { scaleY: 0 }, close)]);
    if (cardRef.current) cardRef.current.style.transform = "scale(0.94)";
    setCard(null);
    busy.current = false;
  }

  return (
    <section ref={sectionRef} id="work" className="relative bg-night">
      {/* category switcher */}
      <div className="sticky top-[61px] z-40 border-y border-hud/10 bg-night/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-5 py-3 md:gap-2 md:px-8 [&::-webkit-scrollbar]:hidden">
          <span className="mr-3 hidden shrink-0 font-mono text-[10px] tracking-[0.35em] text-[#6f8f94] uppercase md:inline">
            {t(strings.navWork)}
          </span>
          {categories.map((c, i) => {
            const on = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => switchTo(c)}
                className={`relative shrink-0 rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  on ? "text-night" : "text-[#9fb6ba] hover:text-lamp"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: c.accent }}
                    transition={{ duration: 0.6, ease: EASE_CINE }}
                  />
                )}
                <span className="relative">
                  {String(i + 1).padStart(2, "0")} {t(c.label)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* chapter slide */}
      <div key={`chapter-${active.id}`} className="relative flex min-h-[85svh] items-center overflow-hidden">
        <Wall />
        <WallLamp side="right" />
        <Fog />
        <DustParticles beamX={78} density={0.6} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
          <ChapterTitle title={active.label.en.toUpperCase()} eyebrow={t(active.logline)} />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 1.2 }}
            className="mt-6 font-mono text-[11px] tracking-[0.3em] text-hud/80 uppercase"
          >
            {studies.length} {t(strings.navWork)}
          </motion.p>
        </div>
      </div>

      <div key={`studies-${active.id}`}>
        {featured.map((s, i) => (
          <CaseStudy key={s.slug} study={s} category={active} index={i} />
        ))}

        {rest.length > 0 && (
          <div className="mx-auto max-w-6xl px-5 pb-32 md:px-8">
            <h3 className="mb-8 flex items-center gap-4 font-display text-sm tracking-[0.35em] text-lamp uppercase">
              {featured.length > 0 ? t(strings.moreWork) : t(active.label)}
              <span className="h-px flex-1 bg-gradient-to-r from-lamp/40 to-transparent" />
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
              {rest.map((s, i) => (
                <CaseCard key={s.slug} study={s} accent={active.accent} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* scene transition overlay */}
      <div aria-hidden={!card} className={`fixed inset-0 z-[70] ${card ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div ref={topBar} className="gpu absolute inset-x-0 top-0 h-1/2 origin-top bg-black" style={{ transform: "scaleY(0)" }} />
        <div ref={bottomBar} className="gpu absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-black" style={{ transform: "scaleY(0)" }} />
        <div ref={cardRef} className="gpu absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ opacity: 0, transform: "scale(0.94)" }}>
          {card && (
            <>
              <span className="mb-4 h-px w-16" style={{ background: card.accent }} />
              <p className="font-display text-glow text-[clamp(2.2rem,7vw,5.5rem)] font-semibold text-[#eef2ef]">{card.label.en.toUpperCase()}</p>
              <p className="mt-3 font-serif text-xl text-[#b9c9cb] italic md:text-2xl">{t(card.logline)}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
