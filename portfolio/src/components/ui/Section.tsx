"use client";

import { Reveal, SplitWords } from "@/components/ui/Reveal";

/** Page section: numbered eyebrow, a word-by-word title and an optional lead line. */
export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-28">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-muted uppercase">
          <span className="text-gradient font-semibold">{index}</span>
          <span className="h-px w-10 bg-line" />
          {id}
        </p>
      </Reveal>
      {/* key re-plays the reveal when the language changes */}
      <h2 key={title} className="text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] font-semibold tracking-tight">
        <SplitWords text={title} />
      </h2>
      {lead && (
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-lg text-muted">{lead}</p>
        </Reveal>
      )}
      <div className="mt-12">{children}</div>
    </section>
  );
}
