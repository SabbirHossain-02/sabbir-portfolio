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
}[] = [
  { value: "3", suffix: "+", label: "Years experience", icon: Clock },
  {
    value: "50",
    suffix: "+",
    label: "GitHub Repos",
    href: PROFILE.socials.github,
    iconName: "github",
  },
  { value: "9", suffix: "+", label: "Live client sites", icon: Globe },
  { value: "12", suffix: "+", label: "Technologies", icon: Cpu },
];

const HIGHLIGHT_ICONS = [Code2, Smartphone, Zap];

export function About() {
  return (
    <Section id="about">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header - Integrated & Compact */}
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <span
            aria-hidden
            className="h-6 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
          />
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            How I work<span className="text-accent">.</span>
          </h2>
          <span className="ml-auto hidden rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted sm:inline-block">
            Engineering &amp; Philosophy
          </span>
        </div>

        {/* 3-Column Ultra-Compact Bento Grid (Fits completely inside viewport) */}
        <div className="stagger grid grid-cols-1 gap-3 md:grid-cols-12">
          {/* Column 1: Bio & Profile Anchor (5 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-all duration-300 hover:border-line-strong md:col-span-5">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-xl transition-opacity duration-500 group-hover:bg-accent/20"
            />

            <div>
              <span className="label font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
                Bio &amp; Philosophy
              </span>
              <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
                I build systems that hold up{" "}
                <span className="text-gradient">after launch.</span>
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[13px]">
                Full-stack engineer at PKG IT since 2022. I craft complete web
                applications with Next.js, Node.js and PostgreSQL, and manage
                production VPS deployments.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-line-strong shadow-sm">
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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available
              </span>
            </div>
          </div>

          {/* Column 2: What Clients Get & Experience (4 cols) */}
          <div className="flex flex-col gap-3 md:col-span-4">
            {/* What Clients Get */}
            <div className="rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur">
              <span className="label mb-2 block font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
                What clients get
              </span>
              <div className="space-y-2">
                {ABOUT.highlights.map((h, i) => {
                  const HighlightIcon = HIGHLIGHT_ICONS[i] || CheckCircle2;
                  return (
                    <div
                      key={h.title}
                      className="flex items-start gap-2.5 rounded-lg border border-line/50 bg-surface-2/50 p-2 transition-colors hover:bg-surface-2"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-accent/10 text-accent">
                        <HighlightIcon className="h-3 w-3" strokeWidth={2} />
                      </span>
                      <div>
                        <div className="text-[12px] font-semibold leading-none text-ink">
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
            <div className="rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur">
              <div className="mb-2 flex items-center justify-between">
                <span className="label font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
                  Experience &amp; Education
                </span>
                <Briefcase className="h-3.5 w-3.5 text-dim" />
              </div>
              <div className="space-y-2.5">
                {ABOUT.timeline.map((t, i) => (
                  <div key={t.title} className="relative border-l border-line pl-3.5">
                    <span
                      className={`absolute -left-[4.5px] top-1 h-2 w-2 rounded-full ${
                        i === 0 ? "bg-accent" : "bg-line-strong"
                      }`}
                    />
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[9px] text-dim">{t.when}</span>
                      {i === 0 && (
                        <span className="rounded bg-accent/10 px-1.5 py-0.2 font-mono text-[8px] font-semibold text-accent">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="text-[12px] font-bold leading-snug text-ink">
                      {t.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: 4 Stat Cards in 2x2 Grid (3 cols) */}
          <div className="grid grid-cols-2 gap-2.5 md:col-span-3">
            {STATS.map((s) => {
              const IconComp = s.icon;
              const cardContent = (
                <>
                  <div className="flex items-center justify-between">
                    <span className="grid h-7 w-7 place-items-center rounded-lg border border-line bg-surface-2 text-accent">
                      {s.iconName ? (
                        <Icon name={s.iconName} className="h-3.5 w-3.5" strokeWidth={2} />
                      ) : IconComp ? (
                        <IconComp className="h-3.5 w-3.5" strokeWidth={2} />
                      ) : null}
                    </span>
                    {s.href && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-dim group-hover:text-accent" />
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="font-display text-2xl font-bold text-ink sm:text-3xl">
                      <span className="text-gradient">{s.value}</span>
                      {s.suffix && <span className="text-lg text-accent">{s.suffix}</span>}
                    </div>
                    <div className="label mt-1 text-[10px] leading-tight text-muted">
                      {s.label}
                    </div>
                  </div>
                </>
              );

              const cls =
                "group flex flex-col justify-between rounded-xl border border-line bg-surface/70 p-3.5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface";

              return s.href ? (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
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
