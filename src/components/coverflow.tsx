"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site";
import { useDeck } from "./deck";

/**
 * Coverflow — a CSS-3D carousel of live project previews. CSS 3D (not three.js)
 * is deliberate: each card hosts real DOM — a screenshot, text and a working
 * link — which a WebGL scene can't cleanly own.
 *
 * Scroll-lock: while the Projects section is active, wheel/swipe steps through
 * the cards. Only at the last card (going down) or first card (going up) does
 * the gesture fall through to the deck, moving to the next/previous section.
 */
export function Coverflow() {
  const { registerInterceptor, active, dir } = useDeck();
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const n = PROJECTS.length;

  const go = useCallback(
    (i: number) => {
      const v = Math.max(0, Math.min(n - 1, i));
      curRef.current = v;
      setCur(v);
    },
    [n]
  );

  // Register the scroll interceptor for the Projects section.
  useEffect(() => {
    const fn = (d: 1 | -1) => {
      const c = curRef.current;
      if (d > 0) {
        if (c < n - 1) {
          go(c + 1);
          return true; // consumed — stay in section
        }
        return false; // last card → let the deck advance
      } else {
        if (c > 0) {
          go(c - 1);
          return true;
        }
        return false; // first card → let the deck go back
      }
    };
    registerInterceptor("projects", fn);
    return () => registerInterceptor("projects", null);
  }, [registerInterceptor, go, n]);

  // On entering the section, start at the first card when arriving from above,
  // or the last card when arriving from below — so you scroll through them all.
  useEffect(() => {
    if (active === "projects") {
      const target = dir > 0 ? 0 : n - 1;
      curRef.current = target;
      setCur(target);
    }
  }, [active, dir, n]);

  const activeProject = PROJECTS[cur];

  // Horizontal swipe on touch — swipe left → next card, right → previous.
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    touch.current = null;
    // only act on a mostly-horizontal swipe, so vertical scrolling still works
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      go(curRef.current + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <div className="w-full">
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative mx-auto h-[430px] w-full touch-pan-y select-none sm:h-[430px]"
        style={{ perspective: "1600px" }}
      >
        {PROJECTS.map((p, i) => {
          const off = i - cur;
          const abs = Math.abs(off);
          const visible = abs <= 2;
          const clamped = Math.max(-2, Math.min(2, off));
          return (
            <div
              key={p.id}
              onClick={() => off !== 0 && go(i)}
              className="absolute left-1/2 top-1/2 h-[416px] w-[min(84vw,360px)]"
              style={{
                transform: `translate(-50%, -50%) translateX(${off * 44}%) rotateY(${clamped * -38}deg) translateZ(${-abs * 150}px) scale(${off === 0 ? 1 : 0.84})`,
                transformStyle: "preserve-3d",
                transition:
                  "transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                opacity: visible ? 1 : 0,
                zIndex: 50 - abs,
                pointerEvents: visible ? "auto" : "none",
                cursor: off === 0 ? "default" : "pointer",
              }}
            >
              <Card p={p} active={off === 0} />
            </div>
          );
        })}
      </div>

      {/* controls */}
      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(cur - 1)}
          disabled={cur === 0}
          aria-label="Previous project"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={`Go to ${p.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === cur ? "w-6 bg-accent" : "w-1.5 bg-line-strong hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(cur + 1)}
          disabled={cur === n - 1}
          aria-label="Next project"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <p className="mt-3 text-center font-mono text-xs text-dim">
        <span className="text-ink">{String(cur + 1).padStart(2, "0")}</span> /{" "}
        {String(n).padStart(2, "0")} — {activeProject.title}
      </p>
    </div>
  );
}

function Card({ p, active }: { p: Project; active: boolean }) {
  const [failed, setFailed] = useState(false);
  const showImg = p.image && !failed;

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-surface shadow-[var(--shadow-lg)]"
      style={{
        borderColor: active ? "var(--line-strong)" : "var(--line)",
        filter: active ? "none" : "brightness(0.6)",
        transition: "filter 0.5s ease, border-color 0.5s ease",
      }}
    >
      <div className="relative h-[176px] shrink-0 overflow-hidden border-b border-line bg-surface-2">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate font-mono text-[10px] text-dim">
            {p.liveUrl.replace(/^https?:\/\//, "")}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
          </span>
        </div>
        <div className="relative h-[136px] w-full overflow-hidden">
          {showImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.image as string}
              alt={`${p.title} live preview`}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top"
              draggable={false}
            />
          ) : (
            <div
              className="grid h-full w-full place-items-center"
              style={{
                background: `linear-gradient(135deg, ${p.accent}22, transparent 70%), var(--surface-2)`,
              }}
            >
              <span
                className="font-display text-3xl font-bold"
                style={{ color: p.accent }}
              >
                {p.title}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="label" style={{ color: p.accent }}>
          {p.type}
        </span>
        <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-ink">
          {p.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted">
          {p.purpose}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[10px] text-dim"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="min-w-0 flex-1 truncate font-mono text-[10px] text-dim">
            {p.builtBy}
          </span>
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            tabIndex={active ? 0 : -1}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-ink transition hover:brightness-110"
          >
            Visit live
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </div>
  );
}
