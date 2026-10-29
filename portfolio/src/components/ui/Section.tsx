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
    <section id={id} className="relative z-10 mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:px-10 md:py-28">
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
      <div className="mt-14">{children}</div>
    </section>
  );
}
