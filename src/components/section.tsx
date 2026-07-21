"use client";

import type { CSSProperties, ReactNode } from "react";
import type { SectionId } from "@/lib/site";

/**
 * A slide's content root. The Deck owns full-height + scrolling; this is just a
 * tagged wrapper. Entrance animations fire on mount, because each slide mounts
 * fresh when it becomes active.
 */
export function Section({
  id,
  children,
  className = "",
}: {
  id: SectionId;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-section={id} className={`relative w-full ${className}`}>
      {children}
    </div>
  );
}

/** Content column with side-rail clearance. */
export function SectionInner({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 pb-28 pt-16 md:px-6 md:pb-24 md:pt-24 md:pl-28 lg:pl-32 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Section heading. A soft-glowing accent bar sits to the left and the trailing
 * full stop is lit in the accent colour — a calm, consistent flourish shared by
 * every section, so all the page titles read as one designed system.
 */
export function SectionHead({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  const hasDot = title.endsWith(".");
  const main = hasDot ? title.slice(0, -1) : title;

  return (
    <header
      className="rise mb-9 max-w-2xl"
      style={{ animationDelay: "0.06s" } as CSSProperties}
    >
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="h-9 w-[3px] shrink-0 rounded-full sm:h-11"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 8%, transparent))",
            boxShadow:
              "0 0 14px color-mix(in srgb, var(--accent) 45%, transparent)",
          }}
        />
        <h2 className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[2.6rem]">
          {main}
          {hasDot && (
            <span
              className="text-accent"
              style={{
                textShadow:
                  "0 0 22px color-mix(in srgb, var(--accent) 55%, transparent)",
              }}
            >
              .
            </span>
          )}
        </h2>
      </div>
      {lead && (
        <p className="mt-4 pl-7 text-base leading-relaxed text-muted">{lead}</p>
      )}
    </header>
  );
}

/** Fade-rise reveal (CSS keyframe — reliable, reduced-motion safe). */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`rise ${className}`}
      style={{ animationDelay: `${0.12 + delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
