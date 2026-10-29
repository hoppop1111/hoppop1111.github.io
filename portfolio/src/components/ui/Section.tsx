"use client";

import { MaskLines, Reveal, Scramble } from "@/components/ui/Reveal";

export const SECTION_COUNT = 5;

/** Page section: `[ 0N / 05 ] · LABEL`, a huge condensed title and an optional lead line. */
export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: number;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <section id={id} className="relative scroll-mt-14 border-b border-line px-6 py-16 sm:px-10 md:py-20">
      <p className="label flex items-center gap-2">
        <span className="h-3 w-px bg-fg" />
        <Scramble text={`[ ${pad(index)} / ${pad(SECTION_COUNT)} ] · ${id}`} />
      </p>
      {/* key re-plays the reveal when the language changes */}
      <h2 key={title} className="display mt-5 text-[clamp(3rem,11vw,7.5rem)]">
        <MaskLines lines={[title]} />
      </h2>
      {lead && (
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}
