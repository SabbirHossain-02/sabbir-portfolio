"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";

export type SphereNode = { key: string; category: number; content: ReactNode };

/**
 * A rotating 3D sphere in pure CSS 3D. Each node sits on a Fibonacci sphere;
 * every frame the points are rotated in JS and applied as translate3d, so the
 * badges always face the viewer (billboarded) and stay crisp. Depth drives
 * scale, opacity and blur. Auto-spins, follows the pointer while hovered, and
 * dims every node outside `highlight` (a category index) so hovering a legend
 * card lights up just that group. Runs only while `active`.
 */
export function TechSphere({
  nodes,
  radius = 150,
  active = true,
  highlight = null,
  className = "",
}: {
  nodes: SphereNode[];
  radius?: number;
  active?: boolean;
  highlight?: number | null;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const els = useRef<(HTMLDivElement | null)[]>([]);
  const hiRef = useRef<number | null>(highlight);
  hiRef.current = highlight;

  const base = useMemo(() => {
    const n = nodes.length;
    return nodes.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      };
    });
  }, [nodes, radius]);

  const cats = useMemo(() => nodes.map((n) => n.category), [nodes]);

  useEffect(() => {
    if (!active) return;
    const el = wrap.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let rx = -0.2;
    let ry = 0;
    let vx = 0.0015;
    let vy = 0.0035;
    const mouse = { x: 0, y: 0, on: false };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouse.x = (e.clientX - r.left - r.width / 2) / r.width;
      mouse.y = (e.clientY - r.top - r.height / 2) / r.height;
      mouse.on = true;
    };
    const onLeave = () => (mouse.on = false);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    const tick = () => {
      if (mouse.on && !reduce) {
        vy += (mouse.x * 0.028 - vy) * 0.1;
        vx += (-mouse.y * 0.028 - vx) * 0.1;
      } else {
        vy += (0.0035 - vy) * 0.04;
        vx += (0.0015 - vx) * 0.04;
      }
      ry += vy;
      rx += vx;

      const sinX = Math.sin(rx);
      const cosX = Math.cos(rx);
      const sinY = Math.sin(ry);
      const cosY = Math.cos(ry);
      const hi = hiRef.current;

      for (let i = 0; i < base.length; i++) {
        const p = base[i];
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        const depth = (z2 + radius) / (2 * radius); // 0 back → 1 front
        const node = els.current[i];
        if (!node) continue;

        const dim = hi !== null && cats[i] !== hi;
        const scale = (dim ? 0.5 : 0.62) + depth * 0.55;
        let opacity = 0.35 + depth * 0.65;
        if (dim) opacity *= 0.14;

        node.style.transform = `translate(-50%, -50%) translate3d(${x1.toFixed(1)}px, ${y2.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        node.style.opacity = opacity.toFixed(3);
        node.style.zIndex = String(Math.round(depth * 100));
        node.style.filter = depth < 0.45 ? `blur(${((0.45 - depth) * 3).toFixed(2)}px)` : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [base, cats, radius, active]);

  return (
    <div
      ref={wrap}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* glowing core */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 26%, transparent) 0%, transparent 68%)",
          filter: "blur(14px)",
        }}
      />

      <div
        className="absolute left-1/2 top-1/2"
        style={{ transformStyle: "preserve-3d" }}
      >
        {nodes.map((n, i) => (
          <div
            key={n.key}
            ref={(node) => {
              els.current[i] = node;
            }}
            className="absolute left-0 top-0 will-change-transform"
          >
            {n.content}
          </div>
        ))}
      </div>
    </div>
  );
}
