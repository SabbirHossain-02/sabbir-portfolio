"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { SKILLS } from "@/lib/site";
import { Section, SectionInner, SectionHead, Reveal } from "../section";
import { Icon } from "../icons";
import { useDeck } from "../deck";
import { TechSphere, type SphereNode } from "../tech-sphere";
import { BRANDS, isNeutral } from "../brands";

export function Skills() {
  const { active } = useDeck();
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme !== "light";
  const [hi, setHi] = useState<number | null>(null);

  const ink = dark ? "#e9eefb" : "#0a1122";
  const tints = dark
    ? ["#7aa2ff", "#b79dff", "#5bd6a0"]
    : ["#2f5fd0", "#6d4fd0", "#159968"];

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
            className="grid h-12 w-12 cursor-default place-items-center rounded-2xl border border-line bg-surface/70 backdrop-blur"
            style={{ boxShadow: `0 0 18px ${color}2e, inset 0 0 0 1px ${color}1f` }}
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
      <SectionInner>
        <SectionHead title="My stack." />

        <Reveal className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* 3D glass-icon sphere */}
          <div className="relative h-[320px] sm:h-[380px]">
            <TechSphere
              nodes={nodes}
              radius={150}
              active={active === "skills"}
              highlight={hi}
              className="h-full w-full"
            />
          </div>

          {/* Category legend — glass cards with brand-icon chips that mirror
              the sphere; hover one to light up just that group. */}
          <div className="grid gap-3">
            {SKILLS.map((group, i) => {
              const tint = tints[i];
              const on = hi === i;
              return (
                <div
                  key={group.title}
                  onMouseEnter={() => setHi(i)}
                  onMouseLeave={() => setHi(null)}
                  className="group relative cursor-default overflow-hidden rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition-all duration-300"
                  style={{
                    borderColor: on ? `${tint}55` : undefined,
                    boxShadow: on
                      ? `inset 0 0 0 1px ${tint}33, 0 12px 34px ${tint}1f`
                      : undefined,
                    transform: on ? "translateY(-2px)" : undefined,
                  }}
                >
                  {/* corner tint glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${tint}33, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2"
                      style={{
                        color: tint,
                        boxShadow: on ? `0 0 16px ${tint}44` : "none",
                      }}
                    >
                      <Icon name={group.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {group.title}
                    </h3>
                    <span
                      className="ml-auto rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-dim"
                      style={on ? { color: tint, borderColor: `${tint}55` } : undefined}
                    >
                      {group.items.length} tools
                    </span>
                  </div>

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
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
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors group-hover:text-ink"
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
        </Reveal>
      </SectionInner>
    </Section>
  );
}
