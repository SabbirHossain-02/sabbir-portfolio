"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Globe,
  Cpu,
  Code2,
  Smartphone,
  Zap,
  Briefcase,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { ABOUT, PROFILE } from "@/lib/site";
import { Section, SectionInner } from "../section";
import { Portrait } from "../portrait";
import { Icon } from "../icons";

const STATS: {
  value: string;
  suffix?: string;
  label: string;
  href?: string;
  iconName?: string;
  icon?: typeof Clock;
  glowColor: string;
}[] = [
  {
    value: "3",
    suffix: "+",
    label: "Years experience",
    icon: Clock,
    glowColor: "from-blue-500/20 to-cyan-500/5",
  },
  {
    value: "50",
    suffix: "+",
    label: "GitHub Repos",
    href: PROFILE.socials.github,
    iconName: "github",
    glowColor: "from-purple-500/20 to-indigo-500/5",
  },
  {
    value: "9",
    suffix: "+",
    label: "Live client sites",
    icon: Globe,
    glowColor: "from-emerald-500/20 to-teal-500/5",
  },
  {
    value: "12",
    suffix: "+",
    label: "Technologies",
    icon: Cpu,
    glowColor: "from-amber-500/20 to-orange-500/5",
  },
];

const HIGHLIGHT_ICONS = [Code2, Smartphone, Zap];

export function About() {
  return (
    <Section id="about">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header - Premium Bar */}
        <div className="mb-3.5 flex items-center justify-between gap-3 sm:mb-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_16px_var(--accent)]"
            />
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              How I work<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-xs font-medium text-muted">
              Engineering &amp; Philosophy
            </span>
          </div>
        </div>

        {/* 3-Column Ultra-Compact Bento Grid */}
        <div className="stagger grid grid-cols-1 gap-3.5 md:grid-cols-12">
          {/* Column 1: Bio & Profile Anchor (5 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-5 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(91,140,255,0.12)] md:col-span-5">
            {/* Ambient backlight glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="label font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  Bio &amp; Philosophy
                </span>
                <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-accent">
                  PKG IT
                </span>
              </div>

              <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-[1.4rem]">
                I build systems that hold up{" "}
                <span className="text-gradient">after launch.</span>
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[13px]">
                Full-stack engineer at PKG IT since 2022. I craft complete web
                applications with Next.js, Node.js and PostgreSQL, and manage
                production VPS deployments.
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
                  Full-Stack Engineer
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

          {/* Column 2: What Clients Get & Experience (4 cols) */}
          <div className="flex flex-col gap-3.5 md:col-span-4">
            {/* What Clients Get */}
            <div className="group rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/40">
              <span className="label mb-2.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                What clients get
              </span>
              <div className="space-y-2">
                {ABOUT.highlights.map((h, i) => {
                  const HighlightIcon = HIGHLIGHT_ICONS[i] || CheckCircle2;
                  return (
                    <div
                      key={h.title}
                      className="flex items-start gap-2.5 rounded-xl border border-line/60 bg-surface-2/60 p-2.5 backdrop-blur transition-all duration-200 hover:border-accent/30 hover:bg-surface-2"
                    >
                      <span className="mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                        <HighlightIcon className="h-3 w-3" strokeWidth={2} />
                      </span>
                      <div>
                        <div className="text-[12px] font-bold leading-none text-ink">
                          {h.title}
                        </div>
                        <div className="mt-1 text-[11px] leading-tight text-dim">
                          {h.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="group rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/40">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="label font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  Experience &amp; Education
                </span>
                <Briefcase className="h-3.5 w-3.5 text-dim transition-colors group-hover:text-accent" />
              </div>
              <div className="space-y-3">
                {ABOUT.timeline.map((t, i) => (
                  <div
                    key={t.title}
                    className="relative border-l-2 border-line/80 pl-3.5"
                  >
                    <span
                      className={`absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-surface ${
                        i === 0
                          ? "bg-accent shadow-[0_0_8px_var(--accent)]"
                          : "bg-dim"
                      }`}
                    />
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[9px] font-medium text-dim">
                        {t.when}
                      </span>
                      {i === 0 && (
                        <span className="rounded border border-accent/20 bg-accent/10 px-1.5 py-0.2 font-mono text-[8px] font-bold text-accent">
                          PRESENT
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1 text-[12px] font-bold leading-snug text-ink">
                      {i === 1 ? (
                        <GraduationCap className="h-3 w-3 shrink-0 text-accent" />
                      ) : (
                        <Briefcase className="h-3 w-3 shrink-0 text-accent" />
                      )}
                      {t.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: 4 Stat Cards in 2x2 Grid (3 cols) */}
          <div className="grid grid-cols-2 gap-3 md:col-span-3">
            {STATS.map((s) => {
              const IconComp = s.icon;
              const cardContent = (
                <>
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-xl border border-line bg-surface-2 text-accent shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/30 group-hover:bg-accent/10">
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
                    {s.href && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    )}
                  </div>
                  <div className="relative z-10 mt-3.5">
                    <div className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      <span className="text-gradient">{s.value}</span>
                      {s.suffix && (
                        <span className="ml-0.5 font-bold text-accent text-lg">
                          {s.suffix}
                        </span>
                      )}
                    </div>
                    <div className="label mt-1 text-[10px] font-medium leading-tight text-muted">
                      {s.label}
                    </div>
                  </div>

                  {/* Soft subtle glow on hover */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.glowColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                </>
              );

              const cls =
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-3.5 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_25px_rgba(91,140,255,0.12)]";

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
