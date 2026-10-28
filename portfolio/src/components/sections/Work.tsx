"use client";

import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import type { Localized, Media } from "@/types/portfolio";

/** Project index: each title opens in place to show the full write-up. */
export function Work() {
  const { t } = useLocale();
  const { categories, caseStudies } = portfolioData;
  const studies = [...caseStudies].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

  return (
    <Section id="work" title={t(strings.workTitle)}>
      <p className="mb-8 max-w-xl text-faded">{t(strings.workLead)}</p>

      <ul className="border-t border-rule">
        {studies.map((s, i) => {
          const category = categories.find((c) => c.id === s.category);
          // only real images are shown; entries without a `src` are drafts
          const images: Media[] = [...s.process, ...s.moodboard, ...s.mockups].filter((m) => m.src);
          const story: [Localized, Localized][] = [
            [strings.challenge, s.challenge],
            [strings.approach, s.approach],
            [strings.outcome, s.outcome],
          ];
          return (
            <li key={s.slug} className="border-b border-rule">
              <details className="group">
                <summary className="flex cursor-pointer items-baseline gap-4 py-5 md:gap-6">
                  <span className="w-6 shrink-0 font-mono text-sm text-faded">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1">
                    <span className="font-serif text-2xl decoration-pen decoration-2 group-hover:underline md:text-3xl">
                      {t(s.title)}
                    </span>
                    {s.featured && <span className="hand ml-3 inline-block -rotate-3 text-pen">{t(strings.favourite)}</span>}
                    <p className="mt-1 text-faded">{t(s.summary)}</p>
                  </div>
                  {category && <span className="hidden shrink-0 text-sm text-faded sm:block">{t(category.label)}</span>}
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl leading-none font-light transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="space-y-4 pr-2 pb-8 pl-10 leading-relaxed md:max-w-2xl md:pl-12">
                  <p className="font-mono text-sm text-faded">{t(s.role)}</p>
                  {story.map(([label, body]) => (
                    <p key={label.en}>
                      <span className="font-serif text-lg italic">{t(label)}.</span> {t(body)}
                    </p>
                  ))}
                  {s.process.length > 0 && (
                    <p>
                      <span className="font-serif text-lg italic">{t(strings.steps)}.</span>{" "}
                      {s.process.map((p) => t(p.label)).join(" → ")}
                    </p>
                  )}
                  {images.length > 0 && (
                    <div className="grid gap-3 pt-2 sm:grid-cols-2">
                      {images.map((m) => (
                        // eslint-disable-next-line @next/next/no-img-element -- static export
                        <img key={m.src} src={m.src} alt={t(m.alt)} className="w-full border border-rule" />
                      ))}
                    </div>
                  )}
                  <p className="font-mono text-xs text-faded">{s.tags.map((tag) => `#${tag.replace(/\s+/g, "")}`).join("  ")}</p>
                  <p className="flex flex-wrap gap-x-6 gap-y-2">
                    {s.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target={l.kind === "file" ? undefined : "_blank"}
                        rel="noopener"
                        download={l.kind === "file" ? "" : undefined}
                        className="underline decoration-pen decoration-2 hover:text-pen"
                      >
                        {t(l.label)} {l.kind === "file" ? "↓" : "↗"}
                      </a>
                    ))}
                  </p>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
