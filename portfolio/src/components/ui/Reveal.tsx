"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/** Fades its children up the first time they scroll into view. */
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Numbered section heading with an optional lead paragraph on the right. */
export function SectionHeader({ index, title, lead }: { index: string; title: string; lead?: string }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-5 border-t border-line pt-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="flex items-start gap-4">
        <span className="mt-2 font-mono text-xs text-muted">{index}</span>
        <h2 className="display-tight font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold">{title}</h2>
      </div>
      {lead && <p className="max-w-sm text-[15px] leading-relaxed text-muted md:text-right">{lead}</p>}
    </Reveal>
  );
}
