"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

interface SpotlightProps {
  /** Horizontal position of the light source along the top edge, in %. */
  originX?: number;
  /** How far (deg) the beam swings toward the cursor. */
  swing?: number;
  /** Beam intensity, 0-1. */
  intensity?: number;
  className?: string;
}

/**
 * Ceiling spotlight: a soft cone of light from the top edge plus a pool of
 * light on the "floor". Both lean toward the cursor through springs, so all
 * per-frame work is transform/opacity on composited layers (no React renders).
 */
export function Spotlight({ originX = 50, swing = 14, intensity = 1, className = "" }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // -0.5 .. 0.5 relative pointer position inside the section
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });

  const rotate = useTransform(sx, (v) => -v * swing);
  const poolX = useTransform(sx, (v) => `${v * 38}vw`);
  const poolY = useTransform(sy, (v) => `${v * 10}vh`);
  const poolTransform = useMotionTemplate`translate3d(${poolX}, ${poolY}, 0)`;

  useEffect(() => {
    if (reduce) return;
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px.set((e.clientX - r.left) / r.width - 0.5);
      py.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py, reduce]);

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* lamp head + beam flicker together (opacity animation lives on this wrapper
          so it doesn't override the intensity opacity of the children) */}
      <div className="flicker absolute inset-0">
      {/* the lamp head */}
      <div
        className="absolute top-[-60px] h-[120px] w-[260px] -translate-x-1/2 rounded-[50%]"
        style={{
          left: `${originX}%`,
          background: "radial-gradient(closest-side, rgba(255,250,235,0.95), rgba(246,231,193,0.35) 50%, transparent)",
          opacity: intensity,
        }}
      />
      {/* the beam: a soft-edged conic wedge pointing down, faded with distance by a
          mask (no CSS blur — blur on a moving layer is the expensive part) */}
      <motion.div
        className="gpu absolute top-0 h-[115%] w-[min(130vw,1600px)] -translate-x-1/2"
        style={{
          left: `${originX}%`,
          rotate,
          transformOrigin: "50% 0%",
          opacity: 0.6 * intensity,
          background:
            "conic-gradient(from 150deg at 50% 0%, transparent 0deg, rgba(220,236,230,0.3) 14deg, rgba(246,231,193,0.6) 30deg, rgba(220,236,230,0.3) 46deg, transparent 60deg)",
          maskImage: "linear-gradient(to bottom, #000, rgba(0,0,0,0.45) 55%, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000, rgba(0,0,0,0.45) 55%, transparent 92%)",
        }}
      />
      </div>
      {/* light pool where the beam lands */}
      <motion.div
        className="gpu absolute bottom-[-12%] left-1/2 h-[42%] w-[70%] -ml-[35%] rounded-[50%]"
        style={{
          transform: poolTransform,
          opacity: 0.5 * intensity,
          background: "radial-gradient(closest-side, rgba(200,236,240,0.32), rgba(127,219,230,0.08) 60%, transparent)",
        }}
      />
    </div>
  );
}
