"use client";

import { motion } from "framer-motion";
import { EASE_CINE } from "@/lib/motion";

interface HudCardProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Semi-transparent HUD panel with a glowing pill label and corner brackets. */
export function HudCard({ label, children, className = "", delay = 0 }: HudCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: EASE_CINE, delay }}
      className={`hud hud-corners gpu rounded-md p-5 md:p-6 ${className}`}
    >
      <div className="hud-pill mb-5 inline-flex rounded-full px-4 py-1 font-mono text-[11px] tracking-[0.25em] text-hud uppercase">
        {label}
      </div>
      {children}
    </motion.section>
  );
}

/** Small glowing tag for skills / tools. */
export function HudTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-hud/25 bg-hud/[0.06] px-3 py-1.5 font-mono text-xs text-[#d6eef1]">
      <span className="h-1 w-1 rounded-full bg-hud shadow-[0_0_8px_#7fdbe6]" />
      {children}
    </span>
  );
}
