"use client";

import { Briefcase, Calendar, CheckCircle2, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { EXPERIENCE } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6">
          <SectionHead title="Experience." className="!mb-0" />

          <div className="hidden items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1 backdrop-blur sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-xs font-medium text-muted">
              Career Timeline &amp; Education
            </span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="stagger space-y-4 md:space-y-5">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={exp.role + exp.company}
              className="group relative overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-5 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(91,140,255,0.12)] sm:p-6"
            >
              {/* Subtle top accent bar */}
              <span
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{
                  background:
                    idx === 0
                      ? "linear-gradient(90deg, transparent, var(--accent), transparent)"
                      : "linear-gradient(90deg, transparent, var(--dim), transparent)",
                }}
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      {idx === 0 ? (
                        <Briefcase className="h-4.5 w-4.5" strokeWidth={2} />
                      ) : (
                        <GraduationCap className="h-4.5 w-4.5" strokeWidth={2} />
                      )}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="text-dim">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3 py-1 text-xs font-mono text-muted">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  <span>{exp.period}</span>
                  {idx === 0 && (
                    <span className="ml-1.5 rounded bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase text-accent border border-accent/25">
                      ACTIVE
                    </span>
                  )}
                </div>
              </div>

              {/* Responsibilities checklist */}
              <div className="mt-4 border-t border-line/80 pt-4">
                <span className="label mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted">
                  Key Responsibilities &amp; Accomplishments
                </span>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {exp.responsibilities.map((resp) => (
                    <div
                      key={resp}
                      className="flex items-start gap-2.5 rounded-xl border border-line/50 bg-surface-2/40 p-2.5 transition-colors hover:bg-surface-2/80"
                    >
                      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                        <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-xs leading-relaxed text-muted font-medium">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionInner>
    </Section>
  );
}
