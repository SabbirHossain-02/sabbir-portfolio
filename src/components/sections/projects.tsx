"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  X,
  FileText,
} from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { Icon } from "../icons";
import { useDeck } from "../deck";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "saas", label: "SaaS" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
] as const;

export function Projects() {
  const { registerInterceptor, active, dir } = useDeck();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Filter projects by selected category tab
  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  const n = filteredProjects.length;

  const go = useCallback(
    (i: number) => {
      if (n === 0) return;
      const v = Math.max(0, Math.min(n - 1, i));
      curRef.current = v;
      setCur(v);
    },
    [n]
  );

  // Reset current index when category tab changes
  useEffect(() => {
    curRef.current = 0;
    setCur(0);
  }, [activeTab]);

  // Scroll interceptor for deck section
  useEffect(() => {
    const fn = (d: 1 | -1) => {
      const c = curRef.current;
      if (d > 0) {
        if (c < n - 1) {
          go(c + 1);
          return true; // consumed — stay in projects slide
        }
        return false; // at last project -> advance slide
      } else {
        if (c > 0) {
          go(c - 1);
          return true;
        }
        return false; // at first project -> go back slide
      }
    };
    registerInterceptor("projects", fn);
    return () => registerInterceptor("projects", null);
  }, [registerInterceptor, go, n]);

  // Reset index when entering section
  useEffect(() => {
    if (active === "projects") {
      const target = dir > 0 ? 0 : Math.max(0, n - 1);
      curRef.current = target;
      setCur(target);
    }
  }, [active, dir, n]);

  const activeProject = filteredProjects[cur] || filteredProjects[0];

  // Touch swipe support
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let sx = 0;
    let sy = 0;
    let isTracking = false;
    let isDecided = false;
    let isHorizontal = false;

    const onStart = (e: TouchEvent) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
      isTracking = true;
      isDecided = false;
      isHorizontal = false;
    };
    const onMove = (e: TouchEvent) => {
      if (!isTracking) return;
      const dx = e.touches[0].clientX - sx;
      const dy = e.touches[0].clientY - sy;
      if (!isDecided && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        isDecided = true;
        isHorizontal = Math.abs(dx) > Math.abs(dy);
      }
      if (isHorizontal) e.preventDefault();
    };
    const onEnd = (e: TouchEvent) => {
      if (!isTracking) return;
      isTracking = false;
      const dx = e.changedTouches[0].clientX - sx;
      if (isHorizontal && Math.abs(dx) > 40) {
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
    <Section id="projects">
      <SectionInner className="!py-2 md:!py-3 flex h-[100dvh] flex-col justify-between md:h-auto">
        <div>
          {/* Header & Category Tabs */}
          <div className="mb-2 flex flex-col gap-2 sm:mb-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionHead title="Featured Work." className="!mb-0" />

            <div className="flex flex-wrap items-center gap-1 rounded-2xl border border-line bg-surface-2/80 p-1 backdrop-blur">
              {CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    className={`rounded-xl px-2.5 py-1 font-mono text-[11px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-ink shadow-[0_0_15px_color-mix(in_srgb,var(--accent)_40%,transparent)]"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3D Carousel Stage */}
          <div className="relative mt-2 w-full">
            <div
              ref={stageRef}
              className="relative mx-auto h-[360px] w-full touch-pan-y select-none sm:h-[390px]"
              style={{ perspective: "1600px" }}
            >
              {filteredProjects.map((p, i) => {
                const off = i - cur;
                const abs = Math.abs(off);
                const visible = abs <= 2;
                const clamped = Math.max(-2, Math.min(2, off));

                return (
                  <div
                    key={p.id}
                    onClick={() => off !== 0 && go(i)}
                    className="absolute left-1/2 top-1/2 h-[350px] w-[min(88vw,420px)] sm:h-[380px]"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${off * 52}%) rotateY(${clamped * -38}deg) translateZ(${-abs * 160}px) scale(${off === 0 ? 1 : 0.82})`,
                      transformStyle: "preserve-3d",
                      transition:
                        "transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                      opacity: visible ? (off === 0 ? 1 : 0.6) : 0,
                      zIndex: 50 - abs,
                      pointerEvents: visible ? "auto" : "none",
                      cursor: off === 0 ? "default" : "pointer",
                    }}
                  >
                    <ProjectCard
                      p={p}
                      active={off === 0}
                      onOpenCaseStudy={() => setSelectedCaseStudy(p)}
                    />
                  </div>
                );
              })}
            </div>

            {/* 3D Controls & Counter */}
            <div className="mt-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(cur - 1)}
                  disabled={cur === 0}
                  aria-label="Previous project"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line-strong/80 bg-surface/80 text-ink shadow-sm transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft className="h-4.5 w-4.5" strokeWidth={2.2} />
                </button>

                <button
                  type="button"
                  onClick={() => go(cur + 1)}
                  disabled={cur === n - 1}
                  aria-label="Next project"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line-strong/80 bg-surface/80 text-ink shadow-sm transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronRight className="h-4.5 w-4.5" strokeWidth={2.2} />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center gap-1.5">
                {filteredProjects.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to ${p.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === cur ? "w-6 bg-accent" : "w-1.5 bg-line-strong hover:bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Counter label */}
              {activeProject && (
                <div className="font-mono text-xs text-muted">
                  <span className="font-bold text-accent">
                    {String(cur + 1).padStart(2, "0")}
                  </span>
                  <span className="text-dim"> / {String(n).padStart(2, "0")}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Case Study Modal */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setSelectedCaseStudy(null)}
            />

            <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line-strong bg-surface p-6 shadow-2xl backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-line bg-surface-2 text-muted hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-bold text-accent">
                {selectedCaseStudy.typeLabel}
              </span>

              <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                {selectedCaseStudy.title}
              </h2>

              <p className="mt-2 text-sm text-muted">
                {selectedCaseStudy.blurb}
              </p>

              <div className="mt-6 space-y-4 border-t border-line pt-4">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                    01 — The Problem
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {selectedCaseStudy.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                    02 — Technical Solution
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                    03 — Stack &amp; Infrastructure
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {selectedCaseStudy.caseStudy.technology}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                    04 — Measurable Result
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-400 font-medium">
                    {selectedCaseStudy.caseStudy.result}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                <a
                  href={selectedCaseStudy.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-mono text-xs font-bold text-accent-ink transition-transform hover:scale-105"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </SectionInner>
    </Section>
  );
}

function ProjectCard({
  p,
  active,
  onOpenCaseStudy,
}: {
  p: Project;
  active: boolean;
  onOpenCaseStudy: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const showImg = p.image && !failed;

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-surface/90 shadow-[var(--shadow-lg)] backdrop-blur-xl transition-all duration-500"
      style={{
        borderColor: active ? "rgba(91, 140, 255, 0.5)" : "var(--line)",
        boxShadow: active
          ? "0 14px 40px rgba(91, 140, 255, 0.18), inset 0 0 0 1px rgba(91, 140, 255, 0.2)"
          : undefined,
        filter: active ? "none" : "brightness(0.65)",
      }}
    >
      {/* Browser Window Bar */}
      <div className="relative flex shrink-0 items-center justify-between border-b border-line/80 bg-surface-2/80 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate font-mono text-[10px] text-dim">
            {(p.href || "").replace(/^https?:\/\//, "")}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {p.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-amber-400">
              <Sparkles className="h-2.5 w-2.5" /> Featured
            </span>
          )}
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-emerald-400">
            Live
          </span>
        </div>
      </div>

      {/* Screenshot Preview */}
      <div className="relative h-[155px] w-full shrink-0 overflow-hidden bg-surface-2 sm:h-[165px]">
        {showImg ? (
          <img
            src={p.image as string}
            alt={`${p.title} live preview`}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
            draggable={false}
          />
        ) : (
          <div
            className="grid h-full w-full place-items-center"
            style={{
              background: `linear-gradient(135deg, var(--accent)22, transparent 70%), var(--surface-2)`,
            }}
          >
            <span className="font-display text-2xl font-bold text-accent">
              {p.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-accent">
              {p.typeLabel}
            </span>
          </div>

          <h3 className="mt-1 font-display text-base font-bold tracking-tight text-ink sm:text-lg">
            {p.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
            {p.blurb}
          </p>
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="my-2.5 flex flex-wrap gap-1">
            {p.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-md border border-line bg-surface-2/60 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-dim"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 border-t border-line/80 pt-2.5">
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                tabIndex={active ? 0 : -1}
                className="inline-flex items-center gap-1 rounded-xl border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] font-bold text-accent transition-all hover:bg-accent hover:text-accent-ink"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                tabIndex={active ? 0 : -1}
                className="inline-flex items-center gap-1 rounded-xl border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] font-semibold text-muted hover:text-ink"
              >
                <Icon name="github" className="h-3 w-3" />
                <span>GitHub</span>
              </a>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              tabIndex={active ? 0 : -1}
              className="ml-auto inline-flex items-center gap-1 font-mono text-[10.5px] font-semibold text-dim hover:text-accent transition-colors"
            >
              <FileText className="h-3 w-3" />
              <span>Case Study</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
