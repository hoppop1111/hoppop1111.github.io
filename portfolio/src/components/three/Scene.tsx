"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating geometry behind the whole page: a wireframe icosahedron "core",
// a torus knot orbiting it and a field of linked points (the network). Every
// frame reads how far down the page the visitor is, and the scene turns,
// drifts from side to side, swells and shifts colour from indigo to cyan.

const PALETTE = {
  dark: { a: new THREE.Color("#8b7cff"), b: new THREE.Color("#22d3ee") },
  light: { a: new THREE.Color("#5b4bff"), b: new THREE.Color("#0891b2") },
};

const POINTS = 420;
const LINK_DISTANCE = 2.3;

/** Small seeded PRNG so the point field is the same on every visit (and render-pure). */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildNetwork() {
  const rand = mulberry32(7);
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < POINTS; i++) {
    // spherical shell, flattened a little so it spreads wider than tall
    const r = 4.5 + rand() * 7;
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);
    pts.push(new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi) * 0.7, r * Math.sin(phi) * Math.sin(theta)));
  }
  const links: number[] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      if (pts[i].distanceTo(pts[j]) < LINK_DISTANCE) links.push(...pts[i].toArray(), ...pts[j].toArray());
    }
  }
  return {
    points: new THREE.BufferGeometry().setFromPoints(pts),
    links: new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(links, 3)),
  };
}

/** Page scroll as 0..1, eased so the scene glides rather than jumps. */
function usePageProgress() {
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  useEffect(() => {
    const read = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = max > 0 ? window.scrollY / max : 0;
    };
    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);
  return { progressRef, targetRef };
}

function usePointer() {
  const pointerRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return pointerRef;
}

function Shapes({ still }: { still: boolean }) {
  const { progressRef, targetRef } = usePageProgress();
  const pointerRef = usePointer();

  const core = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const knot = useRef<THREE.Mesh>(null);
  const field = useRef<THREE.Group>(null);
  const wireMat = useRef<THREE.MeshBasicMaterial>(null);
  const innerMat = useRef<THREE.MeshStandardMaterial>(null);
  const knotMat = useRef<THREE.MeshBasicMaterial>(null);
  const pointMat = useRef<THREE.PointsMaterial>(null);
  const linkMat = useRef<THREE.LineBasicMaterial>(null);

  const network = useMemo(() => buildNetwork(), []);
  const tint = useMemo(() => new THREE.Color(), []);
  const tint2 = useMemo(() => new THREE.Color(), []);
  const clockRef = useRef(0);

  useFrame(({ camera, size }, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!still) clockRef.current += dt;
    const t = clockRef.current;
    progressRef.current = THREE.MathUtils.damp(progressRef.current, targetRef.current, 3.5, dt);
    const p = progressRef.current;
    const wide = size.width >= 768;

    // core drifts left/right between sections on wide screens, stays centred above the text on phones
    if (core.current) {
      // right in the hero, left mid-page, back to the right by the contact section
      const x = wide ? 2.4 * Math.cos(p * Math.PI * 2) : 0;
      const y = wide ? Math.sin(p * Math.PI * 2) * 0.6 : 2.3 - p * 1.2;
      // sinks further back while the visitor is reading the middle sections
      core.current.position.z = THREE.MathUtils.damp(core.current.position.z, -2.5 * Math.sin(p * Math.PI), 4, dt);
      core.current.position.x = THREE.MathUtils.damp(core.current.position.x, x, 4, dt);
      core.current.position.y = THREE.MathUtils.damp(core.current.position.y, y + Math.sin(t * 0.8) * 0.15, 4, dt);
      core.current.rotation.x = t * 0.12 + p * Math.PI * 2;
      core.current.rotation.y = t * 0.18 + p * Math.PI * 3;
      const swell = (wide ? 1 : 0.7) * (1 + 0.35 * Math.sin(p * Math.PI * 2));
      core.current.scale.setScalar(swell);
    }
    if (shell.current) shell.current.rotation.z = -t * 0.25 - p * Math.PI * 2;

    // the knot orbits the core
    if (knot.current && core.current) {
      const a = t * 0.35 + p * Math.PI * 4;
      knot.current.position.set(
        core.current.position.x + Math.cos(a) * 3,
        core.current.position.y + Math.sin(a * 1.3) * 1.1,
        Math.sin(a) * 2.2 - 1,
      );
      knot.current.rotation.set(t * 0.5 + p * 6, t * 0.4, 0);
      knot.current.scale.setScalar(wide ? 0.42 : 0.3);
    }

    if (field.current) {
      field.current.rotation.y = t * 0.03 + p * Math.PI * 0.8;
      field.current.rotation.x = p * 0.6;
    }

    // colour sweeps indigo -> cyan -> indigo over the page
    const dark = document.documentElement.classList.contains("dark");
    const pal = dark ? PALETTE.dark : PALETTE.light;
    const mix = 0.5 - 0.5 * Math.cos(p * Math.PI * 2);
    tint.lerpColors(pal.a, pal.b, mix);
    tint2.lerpColors(pal.b, pal.a, mix);
    wireMat.current?.color.copy(tint);
    innerMat.current?.color.copy(tint2);
    innerMat.current?.emissive.copy(tint).multiplyScalar(dark ? 0.35 : 0.6);
    if (innerMat.current) innerMat.current.opacity = dark ? 0.95 : 0.55;
    knotMat.current?.color.copy(tint2);
    pointMat.current?.color.copy(tint);
    linkMat.current?.color.copy(tint2);
    if (linkMat.current) linkMat.current.opacity = dark ? 0.16 : 0.22;

    // camera eases back as you scroll and follows the pointer a little
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointerRef.current.x * 0.6, 2, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, -pointerRef.current.y * 0.4, 2, dt);
    camera.position.z = 9 + Math.sin(p * Math.PI) * 1.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={60} />
      <pointLight position={[-6, -4, 4]} intensity={30} color="#22d3ee" />

      <group ref={core}>
        <mesh ref={shell}>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshBasicMaterial ref={wireMat} wireframe transparent opacity={0.85} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.05, 0]} />
          <meshStandardMaterial ref={innerMat} transparent flatShading metalness={0.4} roughness={0.25} />
        </mesh>
      </group>

      <mesh ref={knot}>
        <torusKnotGeometry args={[1, 0.3, 120, 12]} />
        <meshBasicMaterial ref={knotMat} wireframe transparent opacity={0.55} />
      </mesh>

      <group ref={field}>
        <points geometry={network.points}>
          <pointsMaterial ref={pointMat} size={0.05} sizeAttenuation transparent opacity={0.9} />
        </points>
        <lineSegments geometry={network.links}>
          <lineBasicMaterial ref={linkMat} transparent depthWrite={false} />
        </lineSegments>
      </group>
    </>
  );
}

export default function Scene() {
  const still = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Shapes still={still} />
    </Canvas>
  );
}
