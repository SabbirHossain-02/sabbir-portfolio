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
  GraduationCap,
} from "lucide-react";
import { ABOUT, PROFILE } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
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
    label: "Projects on GitHub",
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
      <SectionInner>
        <SectionHead title="How I work." />

        <div className="stagger grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {/* Bio — the main anchor cell */}
          <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:border-line-strong hover:shadow-[var(--shadow-md)] sm:col-span-2 md:row-span-2">
            {/* Ambient backlight glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/20"
            />

            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[6.5rem] leading-none text-line-strong opacity-25 transition-opacity duration-300 group-hover:opacity-40"
            >
              &ldquo;
            </span>

            <div className="relative z-10">
              <span className="label font-semibold tracking-widest text-accent">
                Bio &amp; Philosophy
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.75rem]">
                I build systems that hold up{" "}
                <span className="text-gradient">after launch.</span>
              </h3>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
                Full-stack developer at PKG IT since 2022. I build complete web
                apps — Node.js, Next.js and Python on the backend, PostgreSQL for
                data, React on the front — and deploy them on self-managed VPS
                servers.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-line pt-5">
              <span className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-line-strong shadow-sm">
                <Portrait src={PROFILE.portrait} />
              </span>
              <div>
                <div className="text-sm font-semibold text-ink">
                  Sabbir Hosen
                </div>
                <div className="label text-[10px]">Full-Stack Engineer</div>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available
              </span>
            </div>
          </div>

          {/* Stat cells — interactive glass cards with icons & gradient numbers */}
          {STATS.map((s) => {
            const IconComp = s.icon;
            const body = (
              <>
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface-2 text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                    {s.iconName ? (
                      <Icon name={s.iconName} className="h-4 w-4" strokeWidth={2} />
                    ) : IconComp ? (
                      <IconComp className="h-4 w-4" strokeWidth={2} />
                    ) : null}
                  </span>
                  {s.href && (
                    <ArrowUpRight
                      className="h-4 w-4 text-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={2.2}
                    />
                  )}
                </div>

                <div className="mt-4 flex items-baseline font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  <span className="text-gradient">{s.value}</span>
                  {s.suffix && (
                    <span className="ml-0.5 text-xl text-accent sm:text-2xl">
                      {s.suffix}
                    </span>
                  )}
                </div>
                <div className="label mt-1.5 text-[11px] text-muted">
                  {s.label}
                </div>
              </>
            );

            const cls =
              "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_25px_rgba(91,140,255,0.08)]";

            return s.href ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {body}
              </a>
            ) : (
              <div key={s.label} className={cls}>
                {body}
              </div>
            );
          })}

          {/* What clients get */}
          <div className="col-span-1 rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:border-line-strong sm:col-span-2">
            <span className="label font-semibold text-accent">
              What clients get
            </span>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {ABOUT.highlights.map((h, i) => {
                const HighlightIcon = HIGHLIGHT_ICONS[i] || CheckCircle2;
                return (
                  <div
                    key={h.title}
                    className="group rounded-xl border border-line/60 bg-surface-2/60 p-3.5 backdrop-blur transition-all duration-200 hover:border-accent/30 hover:bg-surface-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                        <HighlightIcon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span className="text-[13px] font-semibold leading-tight text-ink">
                        {h.title}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-dim">
                      {h.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-1 rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:border-line-strong sm:col-span-2">
            <div className="flex items-center justify-between">
              <span className="label font-semibold text-accent">
                Experience &amp; Education
              </span>
              <Briefcase className="h-4 w-4 text-dim" strokeWidth={1.8} />
            </div>

            <ol className="mt-4 space-y-4">
              {ABOUT.timeline.map((t, i) => (
                <li key={t.title} className="relative pl-5">
                  <span
                    className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${
                      i === 0
                        ? "bg-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_20%,transparent)]"
                        : "bg-line-strong"
                    }`}
                  />
                  {i < ABOUT.timeline.length - 1 && (
                    <span className="absolute left-[4.5px] top-5 h-[calc(100%+0.5rem)] w-px bg-line" />
                  )}
                  <div className="flex items-center gap-2">
                    <span className="label font-mono text-[10px] text-dim">
                      {t.when}
                    </span>
                    {i === 0 && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase text-accent">
                        Active
                      </span>
                    )}
                  </div>
                  <h4 className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {i === 1 ? (
                      <GraduationCap className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                    ) : (
                      <Briefcase className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                    )}
                    {t.title}
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">
                    {t.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionInner>
    </Section>
  );
}
