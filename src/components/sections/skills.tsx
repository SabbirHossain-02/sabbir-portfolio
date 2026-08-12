"use client";

import { useState } from "react";
import { Sparkles, Monitor, Server, Database, Boxes } from "lucide-react";
import { SKILLS, type SkillCategory } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { BRANDS, isNeutral } from "../brands";
import { TechMarquee } from "../marquee";

const CATEGORY_COLORS: Record<string, { color: string; border: string; bg: string }> = {
  Frontend: { color: "#3b82f6", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  Backend: { color: "#a855f7", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  Database: { color: "#10b981", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  DevOps: { color: "#f59e0b", border: "border-amber-500/30", bg: "bg-amber-500/10" },
};

const CATEGORY_ICONS: Record<string, typeof Monitor> = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  DevOps: Boxes,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Section id="skills">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header */}
        <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
          <SectionHead title="Skills & Tech." className="!mb-0" />

          <div className="hidden items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1 backdrop-blur sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-xs font-medium text-muted">
              Technical Stack &amp; Tools
            </span>
          </div>
        </div>

        {/* 4 Categorized Skill Grid */}
        <div className="stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((catGroup) => {
            const catMeta = CATEGORY_COLORS[catGroup.category] || CATEGORY_COLORS.Frontend;
            const CatIcon = CATEGORY_ICONS[catGroup.category] || Monitor;

            return (
              <div
                key={catGroup.category}
                onMouseEnter={() => setActiveCategory(catGroup.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(91,140,255,0.12)]"
              >
                {/* Top accent border line */}
                <span
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${catMeta.color}, transparent)`,
                  }}
                />

                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="grid h-8.5 w-8.5 place-items-center rounded-xl border shadow-inner transition-transform duration-300 group-hover:scale-110"
                        style={{
                          color: catMeta.color,
                          borderColor: `${catMeta.color}3d`,
                          backgroundColor: `${catMeta.color}15`,
                        }}
                      >
                        <CatIcon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-base font-bold text-ink">
                        {catGroup.category}
                      </h3>
                    </div>

                    <span
                      className="rounded-full border px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider"
                      style={{
                        color: catMeta.color,
                        borderColor: `${catMeta.color}40`,
                        backgroundColor: `${catMeta.color}12`,
                      }}
                    >
                      {catGroup.items.length} Skills
                    </span>
                  </div>

                  {/* Skill Items List with Level Badges */}
                  <div className="mt-3 space-y-1.5">
                    {catGroup.items.map((item) => {
                      const brand = BRANDS[item.name];
                      const BrandIcon = brand?.Icon;
                      return (
                        <div
                          key={item.name}
                          className="flex items-center justify-between rounded-xl border border-line/60 bg-surface-2/50 px-2 py-1 backdrop-blur transition-colors hover:border-accent/30 hover:bg-surface-2"
                        >
                          <div className="flex items-center gap-2">
                            {BrandIcon && (
                              <BrandIcon
                                size={13}
                                color={brand ? (isNeutral(brand.color) ? "#99a3b7" : brand.color) : "#99a3b7"}
                              />
                            )}
                            <span className="text-[11.5px] font-semibold text-ink">
                              {item.name}
                            </span>
                          </div>

                          <span className="rounded bg-line/60 px-1.5 py-0.2 font-mono text-[8px] font-medium text-dim">
                            {item.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle hover background glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${catMeta.color}15, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Technologies I Work With — Infinite Slow Marquee */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="label font-mono text-[10px] font-bold uppercase tracking-widest text-muted">
              Technologies I Work With
            </span>
          </div>
          <TechMarquee />
        </div>
      </SectionInner>
    </Section>
  );
}
