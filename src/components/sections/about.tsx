"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Clock,
  Globe,
  Cpu,
  Code2,
  Smartphone,
  Zap,
  Sparkles,
  Layers,
  Server,
  ShieldCheck,
} from "lucide-react";
import { ABOUT, PROFILE } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { Portrait } from "../portrait";
import { Icon } from "../icons";

const STATS: {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  badge: string;
  href?: string;
  iconName?: string;
  icon?: typeof Clock;
  color: string;
  glowClass: string;
  borderHover: string;
  progress: string;
}[] = [
  {
    value: "3",
    suffix: "+",
    label: "Years Experience",
    sublabel: "In production",
    badge: "Verified",
    icon: Clock,
    color: "#3b82f6",
    glowClass: "from-blue-500/20 via-blue-500/5 to-transparent",
    borderHover: "hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]",
    progress: "85%",
  },
  {
    value: "20",
    suffix: "+",
    label: "Projects Shipped",
    sublabel: "Open Source & Apps",
    badge: "GitHub",
    href: PROFILE.socials.github,
    iconName: "github",
    color: "#a855f7",
    glowClass: "from-purple-500/20 via-purple-500/5 to-transparent",
    borderHover: "hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.18)]",
    progress: "92%",
  },
  {
    value: "9",
    suffix: "+",
    label: "Live Client Sites",
    sublabel: "Deployed Production",
    badge: "Live",
    icon: Globe,
    color: "#10b981",
    glowClass: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    borderHover: "hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.18)]",
    progress: "100%",
  },
  {
    value: "12",
    suffix: "+",
    label: "Technologies",
    sublabel: "Core Stack",
    badge: "Stack",
    icon: Cpu,
    color: "#f59e0b",
    glowClass: "from-amber-500/20 via-amber-500/5 to-transparent",
    borderHover: "hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.18)]",
    progress: "95%",
  },
];

/** Dynamic count-up timer component */
function AnimatedNumber({ value }: { value: string }) {
  const target = parseInt(value, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(target)) return;
    let startTimestamp: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  return <>{isNaN(target) ? value : count}</>;
}

/** Dynamic animated progress line component */
function AnimatedProgressBar({
  progress,
  color,
}: {
  progress: string;
  color: string;
}) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(progress);
    }, 250);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-line/60">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:!w-full"
        style={{ width, backgroundColor: color }}
      />
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header */}
        <div className="mb-3.5 flex items-center justify-between gap-3 sm:mb-4">
          <SectionHead title="About Me." className="!mb-0" />

          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-xs font-medium text-muted">
              Engineering Judgment &amp; Philosophy
            </span>
          </div>
        </div>

        {/* 3-Column Bento Layout */}
        <div className="stagger grid grid-cols-1 gap-3.5 md:grid-cols-12">
          {/* Column 1: Bio & Profile Anchor (5 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-5 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(91,140,255,0.12)] md:col-span-5">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="label font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  Full-Stack Software Engineer
                </span>
                <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-accent">
                  PKG IT
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-ink sm:text-[1.3rem]">
                {ABOUT.intro}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[13px]">
                Experienced in architecture, backend microservices, Next.js App Router, PostgreSQL schemas, and deploying automated VPS infrastructure with 99.9% uptime.
              </p>
            </div>

            <div className="relative z-10 mt-5 flex items-center gap-3 border-t border-line/80 pt-4">
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-line-strong shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Portrait src={PROFILE.portrait} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-bold text-ink">
                  {PROFILE.name}
                </div>
                <div className="label text-[9px] text-muted">
                  Software Engineer
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[9px] font-semibold uppercase text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available
              </span>
            </div>
          </div>

          {/* Column 2: Philosophy & Focus (4 cols) */}
          <div className="flex flex-col gap-3.5 md:col-span-4">
            {/* Development Philosophy */}
            <div className="group rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/40">
              <span className="label mb-2.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Development Philosophy
              </span>
              <div className="space-y-2">
                {ABOUT.philosophy.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-2.5 rounded-xl border border-line/60 bg-surface-2/60 p-2.5 backdrop-blur transition-all duration-200 hover:border-accent/30 hover:bg-surface-2"
                  >
                    <span className="font-mono text-xs font-extrabold text-accent">
                      {item.number}
                    </span>
                    <div>
                      <div className="text-[12px] font-bold leading-none text-ink">
                        {item.title}
                      </div>
                      <div className="mt-1 text-[11px] leading-tight text-dim">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Focused On */}
            <div className="group rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/40">
              <span className="label mb-2.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Currently Focused On
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ABOUT.focusedOn.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-accent"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: 4 Stat Cards in 2x2 Grid (3 cols) */}
          <div className="grid grid-cols-2 gap-3 md:col-span-3">
            {STATS.map((s) => {
              const IconComp = s.icon;
              const cardContent = (
                <div className="relative z-10 flex h-full flex-col justify-between p-3.5">
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-8 w-8 place-items-center rounded-xl border shadow-inner transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: s.color,
                        borderColor: `${s.color}3d`,
                        backgroundColor: `${s.color}15`,
                      }}
                    >
                      {s.iconName ? (
                        <Icon
                          name={s.iconName}
                          className="h-4 w-4"
                          strokeWidth={2}
                        />
                      ) : IconComp ? (
                        <IconComp className="h-4 w-4" strokeWidth={2} />
                      ) : null}
                    </span>

                    <span
                      className="inline-flex items-center gap-0.5 rounded-full border px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider"
                      style={{
                        color: s.color,
                        borderColor: `${s.color}40`,
                        backgroundColor: `${s.color}12`,
                      }}
                    >
                      {s.badge}
                      {s.href && <ArrowUpRight className="h-2.5 w-2.5" />}
                    </span>
                  </div>

                  <div className="my-2.5">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.85rem]">
                      <span
                        style={{
                          background: `linear-gradient(135deg, var(--ink) 20%, ${s.color} 100%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        <AnimatedNumber value={s.value} />
                      </span>
                      {s.suffix && (
                        <span className="ml-0.5 font-bold text-lg" style={{ color: s.color }}>
                          {s.suffix}
                        </span>
                      )}
                    </div>
                    <div className="font-display text-[12px] font-bold leading-snug text-ink mt-0.5">
                      {s.label}
                    </div>
                    <div className="font-mono text-[9.5px] text-dim">
                      {s.sublabel}
                    </div>
                  </div>

                  <AnimatedProgressBar progress={s.progress} color={s.color} />

                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.glowClass} opacity-30 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                </div>
              );

              const cls = `group relative overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 ${s.borderHover}`;

              return s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={s.label} className={cls}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </SectionInner>
    </Section>
  );
}
