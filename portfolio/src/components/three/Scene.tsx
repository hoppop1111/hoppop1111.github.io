"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// A noise-warped sphere rendered into a tiny off-screen image, then redrawn
// full size as a grid of white squares with a 4x4 Bayer ordered dither: the
// "pixel blob" look. It lives in a frame at the top of the hero: the pointer
// tilts it, dragging spins it, scrolling turns it, and `pulseBlob()` (Scene3D.tsx) makes it
// swell and morph for a moment.

const CELL = 7; // CSS px per dither cell

const blobVertex = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying vec3 vPos;

  // 3D simplex noise (Ashima Arts / Stefan Gustavson, MIT)
  vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    float n = snoise(position * 1.4 + vec3(uTime * 0.25));
    vec3 displaced = position + normal * n * uAmp;
    vec4 view = modelViewMatrix * vec4(displaced, 1.0);
    vPos = view.xyz;
    gl_Position = projectionMatrix * view;
  }
`;

const blobFragment = /* glsl */ `
  varying vec3 vPos;
  void main() {
    // flat facet normal from screen-space derivatives of the displaced surface
    vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
    vec3 light = normalize(vec3(0.6, 0.8, 0.7));
    float diffuse = max(dot(n, light), 0.0);
    float rim = pow(1.0 - abs(dot(n, normalize(-vPos))), 2.0);
    float l = 0.06 + diffuse * 0.85 + rim * 0.35;
    gl_FragColor = vec4(vec3(l), 1.0);
  }
`;

const ditherVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const ditherFragment = /* glsl */ `
  uniform sampler2D uScene;
  uniform vec2 uCells;
  uniform float uCell;
  uniform float uOpacity;
  uniform vec3 uInk;

  float bayer4(vec2 p) {
    int x = int(mod(p.x, 4.0));
    int y = int(mod(p.y, 4.0));
    int i = x + y * 4;
    float m[16];
    m[0] = 0.0;  m[1] = 8.0;  m[2] = 2.0;  m[3] = 10.0;
    m[4] = 12.0; m[5] = 4.0;  m[6] = 14.0; m[7] = 6.0;
    m[8] = 3.0;  m[9] = 11.0; m[10] = 1.0; m[11] = 9.0;
    m[12] = 15.0; m[13] = 7.0; m[14] = 13.0; m[15] = 5.0;
    for (int k = 0; k < 16; k++) if (k == i) return (m[k] + 0.5) / 16.0;
    return 0.5;
  }

  void main() {
    vec2 px = gl_FragCoord.xy / uCell;
    vec2 cell = floor(px);
    vec4 s = texture2D(uScene, (cell + 0.5) / uCells);
    float l = s.r * s.a;
    if (l < 0.02 || l < bayer4(cell)) discard;
    // brighter cells draw bigger squares, with a hairline gap between them
    vec2 local = abs(fract(px) - 0.5);
    float half_ = mix(0.28, 0.42, l);
    if (max(local.x, local.y) > half_) discard;
    gl_FragColor = vec4(uInk, uOpacity);
  }
`;

/** Small seeded PRNG so the floating specks are the same on every visit. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Scene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    host.appendChild(renderer.domElement);

    // off-screen pass: the blob plus a few specks orbiting it
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.z = 6;
    const blobMat = new THREE.ShaderMaterial({
      vertexShader: blobVertex,
      fragmentShader: blobFragment,
      uniforms: { uTime: { value: 0 }, uAmp: { value: 0.3 } },
    });
    const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 48), blobMat);
    scene.add(blob);

    const rand = mulberry32(11);
    const specks = new THREE.Group();
    const speckMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const speckGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(speckGeo, speckMat);
      const a = rand() * Math.PI * 2;
      const r = 1.6 + rand() * 0.9;
      m.position.set(Math.cos(a) * r, (rand() - 0.5) * 2.2, Math.sin(a) * r);
      specks.add(m);
    }
    scene.add(specks);

    const target = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });

    // on-screen pass: one full-screen triangle pair that dithers the tiny image
    const ditherMat = new THREE.ShaderMaterial({
      vertexShader: ditherVertex,
      fragmentShader: ditherFragment,
      transparent: true,
      depthTest: false,
      uniforms: {
        uScene: { value: target.texture },
        uCells: { value: new THREE.Vector2(1, 1) },
        uCell: { value: CELL * dpr },
        uOpacity: { value: 1 },
        uInk: { value: new THREE.Color("#ededE8") },
      },
    });
    const screen = new THREE.Scene();
    screen.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), ditherMat));
    const screenCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // the canvas fills its frame, not the window
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    let fit = 1;
    function resize() {
      const width = host!.clientWidth;
      const height = host!.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height);
      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      target.setSize(cols, rows);
      ditherMat.uniforms.uCells.value.set(cols, rows);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      // blob (radius ~1.3 with its bulge) fills ~70% of the frame's shorter side
      fit = (Math.min(halfH, halfH * camera.aspect) * 0.7) / 1.3;
    }
    resize();
    const resizer = new ResizeObserver(resize);
    resizer.observe(host);

    // only render while the frame is on screen
    let visible = true;
    const watcher = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    watcher.observe(host);

    // pointer: hovering tilts, dragging spins with momentum
    const pointer = { x: 0, y: 0 };
    const tilt = { x: 0, y: 0 };
    const spin = { x: 0, y: 0, vx: 0, vy: 0 };
    let dragging = false;
    let last = { x: 0, y: 0 };
    function onMove(e: PointerEvent) {
      const r = host!.getBoundingClientRect();
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (dragging) {
        spin.vy = (e.clientX - last.x) * 0.01;
        spin.vx = (e.clientY - last.y) * 0.01;
        spin.y += spin.vy;
        spin.x += spin.vx;
        last = { x: e.clientX, y: e.clientY };
      }
    }
    function onDown(e: PointerEvent) {
      dragging = true;
      last = { x: e.clientX, y: e.clientY };
      host!.setPointerCapture(e.pointerId);
    }
    function onUp() {
      dragging = false;
    }
    function onLeave() {
      pointer.x = 0;
      pointer.y = 0;
    }
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerdown", onDown);
    host.addEventListener("pointerup", onUp);
    host.addEventListener("pointercancel", onUp);
    host.addEventListener("pointerleave", onLeave);

    let pulse = 0;
    function onPulse() {
      pulse = 1;
    }
    window.addEventListener("blob:pulse", onPulse);

    const clock = new THREE.Clock();
    let time = 0;
    let frame = 0;

    function tick() {
      frame = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!visible || document.hidden) return;
      if (!still) time += dt;
      tilt.x = THREE.MathUtils.damp(tilt.x, pointer.y * 0.4, 3, dt);
      tilt.y = THREE.MathUtils.damp(tilt.y, pointer.x * 0.6, 3, dt);
      if (!dragging) {
        // let a flick coast to a stop
        spin.vx = THREE.MathUtils.damp(spin.vx, 0, 2, dt);
        spin.vy = THREE.MathUtils.damp(spin.vy, 0, 2, dt);
        spin.x += spin.vx;
        spin.y += spin.vy;
      }
      pulse = THREE.MathUtils.damp(pulse, 0, 1.6, dt);
      const scroll = window.scrollY / window.innerHeight;

      blob.rotation.x = time * 0.15 + scroll * 1.2 + tilt.x + spin.x;
      blob.rotation.y = time * 0.22 + scroll * 1.8 + tilt.y + spin.y;
      const scale = fit * (1 + pulse * 0.18);
      blob.scale.setScalar(scale);
      specks.scale.setScalar(scale * (1 + pulse * 0.5));
      specks.rotation.y = -time * 0.3 - scroll * 1.5 - pulse * 2;

      blobMat.uniforms.uTime.value = time + pulse * 3;
      blobMat.uniforms.uAmp.value = 0.26 + 0.08 * Math.sin(time * 0.6) + pulse * 0.45;

      renderer.setRenderTarget(target);
      renderer.clear();
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.clear();
      renderer.render(screen, screenCam);
    }
    tick();

    return () => {
      cancelAnimationFrame(frame);
      resizer.disconnect();
      watcher.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerdown", onDown);
      host.removeEventListener("pointerup", onUp);
      host.removeEventListener("pointercancel", onUp);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blob:pulse", onPulse);
      blob.geometry.dispose();
      blobMat.dispose();
      speckGeo.dispose();
      speckMat.dispose();
      ditherMat.dispose();
      target.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="absolute inset-0 touch-pan-y" />;
}
