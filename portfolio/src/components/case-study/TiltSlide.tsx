"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * A bright "slide" that swings in like a screen seen at an angle (as in the
 * reference video) and settles flat as it reaches the centre of the viewport.
 * Scroll-linked transforms only — no React state per frame.
 */
export function TiltSlide({
  children,
  className = "",
  from = "right",
}: {
  children: React.ReactNode;
  className?: string;
  from?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

  const dir = from === "right" ? 1 : -1;
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-14 * dir, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [3 * dir, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <div ref={ref} className={`[perspective:1400px] ${className}`}>
      <motion.div
        className="gpu relative"
        style={reduce ? undefined : { rotateX, rotateY, rotateZ, scale, opacity, transformOrigin: "50% 100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Light "paper" slide surface with the reference's bold header band. */
export function PaperSlide({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-paper text-ink shadow-[0_50px_100px_-30px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.08)]">
      <div className="flex items-end justify-between gap-4 px-5 pt-5 pb-3 md:px-8 md:pt-7">
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-ink/50 uppercase">{eyebrow}</p>
          <h4 className="font-display text-xl font-semibold tracking-wide md:text-3xl">{title}</h4>
        </div>
        <span className="mb-1 h-2 w-24 rounded-full md:w-40" style={{ background: accent }} />
      </div>
      <div className="px-5 pb-6 md:px-8 md:pb-8">{children}</div>
    </div>
  );
}
