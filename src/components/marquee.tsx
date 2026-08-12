"use client";

import { MARQUEE_TECH } from "@/lib/site";
import { Icon } from "./icons";
import { BRANDS, isNeutral } from "./brands";

export function TechMarquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="group relative w-full overflow-hidden border-y border-line bg-surface/50 py-3.5 backdrop-blur">
      {/* Side gradient masks for smooth fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent" />

      <div className="flex w-max animate-[marquee_35s_linear_infinite] items-center gap-6 group-hover:[animation-play-state:paused]">
        {items.map((tech, i) => {
          const brand = BRANDS[tech.name];
          const BrandIcon = brand?.Icon;
          const color = brand ? (isNeutral(brand.color) ? "var(--ink)" : brand.color) : "var(--accent)";

          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 rounded-xl border border-line/60 bg-surface-2/60 px-4 py-2 backdrop-blur transition-all duration-200 hover:border-accent/40 hover:bg-surface-2"
            >
              {BrandIcon ? (
                <BrandIcon size={18} color={color} />
              ) : (
                <Icon name={tech.icon} className="h-4.5 w-4.5 text-accent" />
              )}
              <span className="font-mono text-xs font-bold text-ink">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
