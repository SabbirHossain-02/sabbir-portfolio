"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { SectionId } from "@/lib/site";
import { SideNav, MobileBar } from "./side-nav";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { Services } from "./sections/services";
import { Projects } from "./sections/projects";
import { Faq } from "./sections/faq";
import { Contact } from "./sections/contact";

const SLIDES: { id: SectionId; Comp: () => ReactNode }[] = [
  { id: "home", Comp: Hero },
  { id: "about", Comp: About },
  { id: "skills", Comp: Skills },
  { id: "services", Comp: Services },
  { id: "projects", Comp: Projects },
  { id: "faq", Comp: Faq },
  { id: "contact", Comp: Contact },
];

/**
 * A section can register an interceptor. When the deck is about to advance from
 * that section, the interceptor runs first: return `true` to consume the
 * gesture (e.g. move the carousel one card) and keep the deck put; return
 * `false` at a boundary to let the deck move to the next/previous section.
 */
type Interceptor = (dir: 1 | -1) => boolean;

interface DeckCtx {
  active: SectionId;
  index: number;
  count: number;
  dir: number;
  goTo: (id: SectionId) => void;
  goIndex: (i: number) => void;
  registerInterceptor: (id: SectionId, fn: Interceptor | null) => void;
}

const Ctx = createContext<DeckCtx | null>(null);

export function useDeck(): DeckCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDeck must be used inside <Experience>");
  return ctx;
}

const COOLDOWN = 850;
const CAROUSEL_COOLDOWN = 480;

export function Experience() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  // Per-section "generation" — bumped each time a section is entered, used as a
  // React key so the slide's content re-mounts and replays its entrance stagger.
  const [gens, setGens] = useState<number[]>(() => SLIDES.map(() => 0));
  // Desktop = fullpage deck (wheel/keys/swipe swap sections, no inner scroll).
  // Mobile = app: sections switch via the bottom tab bar and each screen
  // scrolls internally, so gestures never fight native scrolling.
  const [isDesktop, setIsDesktop] = useState(true);
  const indexRef = useRef(0);
  const locked = useRef(false);
  const viewport = useRef<HTMLDivElement>(null);
  const interceptors = useRef<Map<SectionId, Interceptor>>(new Map());

  const count = SLIDES.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goIndex = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(count - 1, i));
      const prev = indexRef.current;
      if (next === prev) return;
      indexRef.current = next;
      setDir(next > prev ? 1 : -1);
      setIndex(next);
      setGens((g) => {
        const n = [...g];
        n[next] += 1;
        return n;
      });
      locked.current = true;
      window.setTimeout(() => (locked.current = false), COOLDOWN);
    },
    [count]
  );

  const goTo = useCallback(
    (id: SectionId) => {
      const i = SLIDES.findIndex((s) => s.id === id);
      if (i >= 0) goIndex(i);
    },
    [goIndex]
  );

  const registerInterceptor = useCallback(
    (id: SectionId, fn: Interceptor | null) => {
      if (fn) interceptors.current.set(id, fn);
      else interceptors.current.delete(id);
    },
    []
  );

  // Single entry point for every gesture. Tries the active section's
  // interceptor before moving the deck.
  const tryAdvance = useCallback(
    (d: 1 | -1) => {
      if (locked.current) return;
      const id = SLIDES[indexRef.current].id;
      const fn = interceptors.current.get(id);
      if (fn && fn(d)) {
        locked.current = true;
        window.setTimeout(() => (locked.current = false), CAROUSEL_COOLDOWN);
        return;
      }
      goIndex(indexRef.current + d);
    },
    [goIndex]
  );

  // Wheel — desktop only; the deck owns the vertical axis there.
  useEffect(() => {
    if (!isDesktop) return;
    const node = viewport.current;
    if (!node) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      tryAdvance(e.deltaY > 0 ? 1 : -1);
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [tryAdvance, isDesktop]);

  // Touch swipe — desktop only. On mobile, touch scrolls the screen instead.
  useEffect(() => {
    if (!isDesktop) return;
    const node = viewport.current;
    if (!node) return;
    let startY = 0;
    const onStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
    const onEnd = (e: TouchEvent) => {
      const dy = startY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 55) return;
      tryAdvance(dy > 0 ? 1 : -1);
    };
    node.addEventListener("touchstart", onStart, { passive: true });
    node.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      node.removeEventListener("touchstart", onStart);
      node.removeEventListener("touchend", onEnd);
    };
  }, [tryAdvance, isDesktop]);

  // Keyboard — desktop only.
  useEffect(() => {
    if (!isDesktop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") tryAdvance(1);
      if (e.key === "ArrowUp" || e.key === "PageUp") tryAdvance(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tryAdvance, isDesktop]);

  const active = SLIDES[index].id;

  return (
    <Ctx.Provider
      value={{ active, index, count, dir, goTo, goIndex, registerInterceptor }}
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 100% at 82% 20%, var(--grad-1) 0%, var(--grad-2) 62%)",
        }}
      />

      <SideNav />
      <MobileBar />

      {/* page indicator */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to ${s.id}`}
            onClick={() => goIndex(i)}
            className="grid place-items-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === index
                  ? "h-5 w-1.5 bg-accent"
                  : "h-1.5 w-1.5 bg-line-strong hover:bg-muted"
              }`}
            />
          </button>
        ))}
      </div>

      {/* All slides stay mounted; only the active one is visible. No section
          scrolls vertically — each fits the viewport and swaps in place. */}
      <div ref={viewport} className="fixed inset-0 overflow-hidden">
        {SLIDES.map((s, i) => {
          const Comp = s.Comp;
          const isActive = i === index;
          const offY = isActive ? 0 : i < index ? -40 : 40;
          return (
            <div
              key={s.id}
              data-slide={isActive ? "" : undefined}
              aria-hidden={!isActive}
              className="snap-scroller absolute inset-0 h-full w-full overflow-y-auto overflow-x-hidden overscroll-contain md:overflow-hidden"
              style={{
                opacity: isActive ? 1 : 0,
                transform: `translateY(${offY}px)`,
                transition:
                  "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                zIndex: isActive ? 10 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div
                key={gens[i]}
                className="relative flex min-h-full w-full flex-col justify-start md:h-full md:justify-center"
              >
                <Comp />
              </div>
            </div>
          );
        })}
      </div>
    </Ctx.Provider>
  );
}
