"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser, so the scene is skipped during the static export.
// Kept in its own chunk so three.js doesn't weigh down the first paint.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

/** Dithered 3D blob; fills its (positioned) parent. */
export function Scene3D() {
  return <Scene />;
}

/** Ask the blob to swell and morph for a moment (the sparkle button). */
export function pulseBlob() {
  window.dispatchEvent(new Event("blob:pulse"));
}
