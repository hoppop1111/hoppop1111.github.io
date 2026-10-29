"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser, so the scene is skipped during the static export.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

/** Fixed full-screen dithered 3D backdrop. */
export function Scene3D() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <Scene />
    </div>
  );
}
