"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser, so the scene is skipped during the static export.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

/** Fixed full-screen 3D backdrop with a soft glow behind it. */
export function Scene3D() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_30%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_70%),radial-gradient(50%_40%_at_20%_80%,color-mix(in_srgb,var(--accent-2)_12%,transparent),transparent_70%)]" />
      <Scene />
    </div>
  );
}
