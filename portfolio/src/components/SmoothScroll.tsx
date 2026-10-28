"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** Freeze page scrolling while a modal (the project drawer) is open. */
export function lockScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (locked) instance?.stop();
  else instance?.start();
}

/**
 * Inertial scrolling driven by requestAnimationFrame, so it runs at the
 * display's refresh rate (120 Hz on ProMotion / high-refresh screens).
 * Native scroll position is still updated, so framer-motion's useScroll works.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -80 },
    });
    instance = lenis;
    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
