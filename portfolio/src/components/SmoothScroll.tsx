"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** Jump (no animation) so an element sits at the top — used behind scene transitions. */
export function jumpTo(el: HTMLElement, offset = 0) {
  // measure against the real scroll position rather than letting Lenis resolve
  // the element (its animated value can lag the native one mid-scroll)
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  if (instance) instance.scrollTo(top, { immediate: true, force: true });
  else window.scrollTo({ top, behavior: "instant" });
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
      lerp: 0.085,
      wheelMultiplier: 0.9,
      anchors: true,
    });
    instance = lenis;
    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
