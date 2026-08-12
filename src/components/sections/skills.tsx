"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Sparkles, Cpu, Database, Monitor } from "lucide-react";
import { SKILLS } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { useDeck } from "../deck";
import { TechSphere, type SphereNode } from "../tech-sphere";
import { BRANDS, isNeutral } from "../brands";

const CATEGORY_THEMES = [
  {
    color: "#3b82f6",
    badge: "Frontend",
    icon: Monitor,
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHover:
      "hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]",
  },
  {
    color: "#a855f7",
    badge: "Backend",
    icon: Cpu,
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderHover:
      "hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.18)]",
  },
  {
    color: "#10b981",
    badge: "DevOps & Data",
    icon: Database,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderHover:
      "hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.18)]",
  },
];

export function Skills() {
  const { active } = useDeck();
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme !== "light";
  const [hi, setHi] = useState<number | null>(null);

  const ink = dark ? "#e9eefb" : "#0a1122";

  // Build a glass-badge node per tech, coloured by its real brand.
  const nodes: SphereNode[] = SKILLS.flatMap((group, ci) =>
    group.items.map((tech) => {
      const brand = BRANDS[tech];
      const color = brand ? (isNeutral(brand.color) ? ink : brand.color) : ink;
      const BrandIcon = brand?.Icon;
      return {
        key: tech,
        category: ci,
        content: (
          <div
            title={tech}
            className="grid h-12 w-12 cursor-default place-items-center rounded-2xl border border-line-strong/80 bg-surface/80 backdrop-blur-2xl transition-transform duration-300 hover:scale-110"
            style={{
              boxShadow: `0 0 20px ${color}35, inset 0 0 0 1px ${color}25`,
            }}
          >
            {BrandIcon ? (
              <BrandIcon size={24} color={color} />
            ) : (
              <span style={{ color }}>•</span>
            )}
          </div>
        ),
      };
    })
  );

  return (
    <Section id="skills">
      <SectionInner className="!py-2 md:!py-3">
        {/* Section Header */}
        <div className="mb-3.5 flex items-center justify-between gap-3 sm:mb-4">
          <SectionHead title="My stack." className="!mb-0" />

          <div className="hidden items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1 backdrop-blur sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-xs font-medium text-muted">
              Technologies &amp; Tooling
            </span>
          </div>
        </div>

        <div className="stagger grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* 3D Glass-Icon Interactive Sphere */}
          <div className="relative flex flex-col items-center justify-center rounded-2xl border border-line-strong/60 bg-surface/40 p-4 backdrop-blur-xl">
            {/* Ambient backlight glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/15 via-accent-2/10 to-transparent blur-2xl"
            />

            <div className="relative h-[270px] w-full sm:h-[330px]">
              <TechSphere
                nodes={nodes}
                radius={135}
                active={active === "skills"}
                highlight={hi}
                className="h-full w-full"
              />
            </div>

            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-line/60 bg-surface-2/60 px-3 py-1 font-mono text-[10px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Interactive 3D Sphere · Hover items to highlight</span>
            </div>
          </div>

          {/* Category Cards Grid */}
          <div className="stagger grid gap-3">
            {SKILLS.map((group, i) => {
              const theme = CATEGORY_THEMES[i] || CATEGORY_THEMES[0];
              const CategoryIcon = theme.icon;
              const on = hi === i;
              return (
                <div
                  key={group.title}
                  onMouseEnter={() => setHi(i)}
                  onMouseLeave={() => setHi(null)}
                  className={`group relative cursor-default overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 ${theme.borderHover}`}
                  style={{
                    borderColor: on ? `${theme.color}66` : undefined,
                    boxShadow: on
                      ? `inset 0 0 0 1px ${theme.color}33, 0 12px 35px ${theme.color}25`
                      : undefined,
                    transform: on ? "translateY(-2px)" : undefined,
                  }}
                >
                  {/* Ambient backlight glow */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-xl border shadow-inner transition-transform duration-300 group-hover:scale-110"
                        style={{
                          color: theme.color,
                          borderColor: `${theme.color}3d`,
                          backgroundColor: `${theme.color}15`,
                        }}
                      >
                        <CategoryIcon className="h-4.5 w-4.5" strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-ink">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="rounded-full border px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider"
                      style={{
                        color: theme.color,
                        borderColor: `${theme.color}40`,
                        backgroundColor: `${theme.color}12`,
                      }}
                    >
                      {theme.badge}
                    </span>
                  </div>

                  <div className="relative z-10 mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((tech) => {
                      const brand = BRANDS[tech];
                      const c = brand
                        ? isNeutral(brand.color)
                          ? ink
                          : brand.color
                        : ink;
                      const BrandIcon = brand?.Icon;
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line/70 bg-surface-2/70 px-2.5 py-1.5 font-mono text-[11px] font-medium text-muted transition-all duration-200 hover:scale-105 hover:border-line-strong hover:bg-surface-2 hover:text-ink"
                          style={{
                            borderColor: on ? `${c}40` : undefined,
                          }}
                        >
                          {BrandIcon && <BrandIcon size={13} color={c} />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionInner>
    </Section>
  );
}
