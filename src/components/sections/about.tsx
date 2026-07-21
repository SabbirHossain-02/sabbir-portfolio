"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ABOUT, PROFILE } from "@/lib/site";
import { Section, SectionInner, SectionHead, Reveal } from "../section";
import { Portrait } from "../portrait";

// Every stat here is verifiable — nothing a client could catch as inflated.
const STATS: {
  value: string;
  suffix?: string;
  label: string;
  href?: string;
}[] = [
  { value: "3", suffix: "+", label: "Years experience" },
  {
    value: "50",
    suffix: "+",
    label: "Projects on GitHub",
    href: PROFILE.socials.github,
  },
  { value: "7", label: "Live client sites" },
  { value: "12", suffix: "+", label: "Technologies" },
];

export function About() {
  return (
    <Section id="about">
      <SectionInner>
        <SectionHead title="How I work." />

        <Reveal className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {/* Intro — the anchor cell */}
          <div className="relative col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur md:row-span-2">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[9rem] leading-none text-line-strong opacity-40"
            >
              &ldquo;
            </span>
            <div className="relative">
              <span className="label">Bio</span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
                I build systems that hold up{" "}
                <span className="text-accent">after launch.</span>
              </h3>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
                Full-stack developer at PKG IT since 2022. I build complete web
                apps — Node.js, Next.js and Python on the backend, PostgreSQL for
                data, React on the front — and deploy them on self-managed VPS
                servers.
              </p>
            </div>

            <div className="relative mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-line-strong">
                <Portrait src={PROFILE.portrait} />
              </span>
              <div>
                <div className="text-sm font-semibold text-ink">Sabbir Hosen</div>
                <div className="label">Full-Stack Engineer</div>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available
              </span>
            </div>
          </div>

          {/* Stat cells — GitHub one links out so it's checkable */}
          {STATS.map((s) => {
            const body = (
              <>
                <div className="flex items-baseline font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {s.value}
                  {s.suffix && (
                    <span className="ml-0.5 text-xl text-accent sm:text-2xl">
                      {s.suffix}
                    </span>
                  )}
                </div>
                <div className="label mt-1.5 flex items-center gap-1.5">
                  {s.label}
                  {s.href && (
                    <ArrowUpRight
                      className="h-3 w-3 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={2.4}
                    />
                  )}
                </div>
              </>
            );
            const cls =
              "group flex flex-col justify-center rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition hover:border-line-strong";
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

          {/* Values */}
          <div className="col-span-2 rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur">
            <span className="label">What clients get</span>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {ABOUT.highlights.map((h) => (
                <div key={h.title}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-accent"
                      strokeWidth={1.8}
                    />
                    <span className="text-[13px] font-semibold text-ink">
                      {h.title}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-dim">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-2 rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur">
            <span className="label">Experience</span>
            <ol className="mt-4 space-y-4">
              {ABOUT.timeline.map((t, i) => (
                <li key={t.title} className="relative pl-5">
                  <span
                    className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${
                      i === 0
                        ? "bg-accent shadow-[0_0_0_3px_var(--surface)]"
                        : "bg-line-strong"
                    }`}
                  />
                  {i < ABOUT.timeline.length - 1 && (
                    <span className="absolute left-[4.5px] top-5 h-[calc(100%+0.5rem)] w-px bg-line" />
                  )}
                  <div className="flex items-center gap-2">
                    <span className="label">{t.when}</span>
                  </div>
                  <h4 className="mt-0.5 text-sm font-semibold text-ink">
                    {t.title}
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">
                    {t.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </SectionInner>
    </Section>
  );
}
