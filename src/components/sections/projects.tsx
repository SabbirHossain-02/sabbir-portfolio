"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Sparkles, ExternalLink, X, FileText, CheckCircle2 } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "saas", label: "SaaS" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
] as const;

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  return (
    <Section id="projects">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header & Category Filters */}
        <div className="mb-3.5 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionHead title="Featured Work." className="!mb-0" />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-line bg-surface-2/80 p-1.5 backdrop-blur">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`rounded-xl px-3 py-1 font-mono text-xs font-semibold transition-all duration-200 ${
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

        {/* Project Cards Grid */}
        <div className="stagger grid gap-4 sm:grid-cols-2">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(91,140,255,0.15)]"
            >
              {/* Preview Image with Hover Zoom & Gradient Mask */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

                {/* Badges Overlay */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-accent backdrop-blur">
                    {p.typeLabel}
                  </span>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur">
                      <Sparkles className="h-2.5 w-2.5" /> Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-accent transition-colors sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">
                    {p.blurb}
                  </p>
                </div>

                <div className="mt-4 border-t border-line/80 pt-3.5">
                  {/* Tech stack pills */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {p.stack.map((st) => (
                      <span
                        key={st}
                        className="rounded-md border border-line bg-surface-2/60 px-2 py-0.5 font-mono text-[9.5px] font-semibold text-dim"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-bold text-accent transition-all duration-200 hover:bg-accent hover:text-accent-ink"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface-2/80 px-3 py-1.5 font-mono text-xs font-semibold text-muted transition-all duration-200 hover:border-line-strong hover:text-ink"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(p)}
                      className="ml-auto inline-flex items-center gap-1 font-mono text-xs font-semibold text-dim hover:text-accent transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal / Drawer */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
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
