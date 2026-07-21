"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * A one-card-at-a-time horizontal carousel for mobile. Each child is a full-
 * width slide; native touch listeners claim horizontal swipes (preventDefault
 * on move) so vertical page scrolling still works. Wrap it in `md:hidden` and
 * pair with a desktop grid.
 */
export function MobileSwiper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const items = Children.toArray(children);
  const n = items.length;
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (i: number) => {
      const v = Math.max(0, Math.min(n - 1, i));
      curRef.current = v;
      setCur(v);
    },
    [n]
  );

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let sx = 0;
    let sy = 0;
    let active = false;
    let decided = false;
    let horizontal = false;

    const onStart = (e: TouchEvent) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
      active = true;
      decided = false;
      horizontal = false;
    };
    const onMove = (e: TouchEvent) => {
      if (!active) return;
      const dx = e.touches[0].clientX - sx;
      const dy = e.touches[0].clientY - sy;
      if (!decided && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        decided = true;
        horizontal = Math.abs(dx) > Math.abs(dy);
      }
      if (horizontal) e.preventDefault();
    };
    const onEnd = (e: TouchEvent) => {
      if (!active) return;
      active = false;
      const dx = e.changedTouches[0].clientX - sx;
      if (horizontal && Math.abs(dx) > 40) {
        go(curRef.current + (dx < 0 ? 1 : -1));
      }
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd, { passive: true });
    el.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
    };
  }, [go]);

  return (
    <div className={className}>
      <div ref={stageRef} className="touch-pan-y overflow-hidden">
        <div
          className="flex items-stretch"
          style={{
            transform: `translateX(-${cur * 100}%)`,
            transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {items.map((it, i) => (
            <div key={i} className="w-full shrink-0">
              {it}
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(cur - 1)}
          disabled={cur === 0}
          aria-label="Previous"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === cur ? "w-6 bg-accent" : "w-1.5 bg-line-strong"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(cur + 1)}
          disabled={cur === n - 1}
          aria-label="Next"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <p className="mt-3 text-center font-mono text-xs text-dim">
        <span className="text-ink">{String(cur + 1).padStart(2, "0")}</span> /{" "}
        {String(n).padStart(2, "0")}
      </p>
    </div>
  );
}
