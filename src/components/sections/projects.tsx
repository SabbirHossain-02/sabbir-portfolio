"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  X,
  FileText,
} from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site";
import { Section, SectionInner } from "../section";
import { Icon } from "../icons";

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

  // Filter projects by active tab
  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  return (
    <Section id="projects">
      <SectionInner className="!py-2 md:!py-3 flex flex-col justify-center min-h-0">
        {/* Section Header & Category Filter Bar */}
        <div className="mb-3 flex flex-col gap-2.5 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_16px_var(--accent)]"
              />
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Featured Work<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="pl-4.5 text-xs text-muted">
              Explore 10 production-ready applications, SaaS platforms &amp; backend systems.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 rounded-2xl border border-line-strong/80 bg-surface-2/80 p-1 backdrop-blur-xl">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              const count =
                cat.id === "all"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-accent-ink shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[9px] font-bold ${
                      isActive
                        ? "bg-black/20 text-accent-ink"
                        : "bg-line/60 text-dim"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Container for ALL 10 Projects */}
        <div className="max-h-[66vh] overflow-y-auto pr-1 sm:pr-2 [scrollbar-width:thin] [scrollbar-color:var(--line-strong)_transparent]">
          <div className="stagger grid gap-3.5 sm:grid-cols-2">
            {filteredProjects.map((p) => (
              <ProjectCard
                key={p.id}
                p={p}
                onOpenCaseStudy={() => setSelectedCaseStudy(p)}
              />
            ))}
          </div>
        </div>

        {/* Footer info bar */}
        <div className="mt-3 flex items-center justify-between border-t border-line/80 pt-2.5 text-xs text-muted">
          <div className="font-mono text-[11px]">
            Showing <span className="font-bold text-accent">{filteredProjects.length}</span> of{" "}
            <span className="font-bold text-ink">{PROJECTS.length}</span> Total Projects
          </div>
          <div className="hidden font-mono text-[10px] text-dim sm:block">
            Scroll inside to view all projects • Click Case Study for technical details
          </div>
        </div>

        {/* Interactive Case Study Modal */}
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
  onOpenCaseStudy,
}: {
  p: Project;
  onOpenCaseStudy: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const showImg = p.image && !failed;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(91,140,255,0.15)]">
      {/* Top glowing accent line */}
      <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      {/* Browser Bar Header */}
      <div className="flex items-center justify-between border-b border-line/80 bg-surface-2/70 px-3.5 py-1.5 backdrop-blur">
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

      {/* Project Image Preview */}
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-surface-2">
        {showImg ? (
          <img
            src={p.image}
            alt={p.title}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-surface-2">
            <span className="font-display text-lg font-bold text-accent">
              {p.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-accent">
            {p.typeLabel}
          </span>

          <h3 className="mt-1 font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-lg">
            {p.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
            {p.blurb}
          </p>
        </div>

        <div className="mt-3 border-t border-line/80 pt-2.5">
          {/* Tech Stack Pills */}
          <div className="mb-2.5 flex flex-wrap gap-1">
            {p.stack.slice(0, 4).map((st) => (
              <span
                key={st}
                className="rounded-md border border-line bg-surface-2/60 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-dim"
              >
                {st}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-xl border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-xs font-bold text-accent transition-all duration-200 hover:bg-accent hover:text-accent-ink"
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
                className="inline-flex items-center gap-1 rounded-xl border border-line bg-surface-2/80 px-2.5 py-1.5 font-mono text-xs font-semibold text-muted transition-all duration-200 hover:border-line-strong hover:text-ink"
              >
                <Icon name="github" className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            )}

            <button
              type="button"
              onClick={onOpenCaseStudy}
              className="ml-auto inline-flex items-center gap-1 font-mono text-xs font-semibold text-dim hover:text-accent transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Case Study</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
