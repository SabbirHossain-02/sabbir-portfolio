"use client";

import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES, type Service } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { Icon } from "../icons";
import { useDeck } from "../deck";
import { MobileSwiper } from "../mobile-swiper";

const SERVICE_THEMES = [
  {
    color: "#3b82f6",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHover:
      "hover:border-blue-500/50 hover:shadow-[0_12px_35px_rgba(59,130,246,0.18)]",
    badge: "Full Stack",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    color: "#a855f7",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderHover:
      "hover:border-purple-500/50 hover:shadow-[0_12px_35px_rgba(168,85,247,0.18)]",
    badge: "SaaS Platform",
    tags: ["Next.js", "Auth", "Analytics"],
  },
  {
    color: "#6366f1",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    borderHover:
      "hover:border-indigo-500/50 hover:shadow-[0_12px_35px_rgba(99,102,241,0.18)]",
    badge: "Backend & APIs",
    tags: ["REST", "GraphQL", "Swagger"],
  },
  {
    color: "#10b981",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderHover:
      "hover:border-emerald-500/50 hover:shadow-[0_12px_35px_rgba(16,185,129,0.18)]",
    badge: "Database",
    tags: ["PostgreSQL", "MongoDB", "Indexing"],
  },
  {
    color: "#06b6d4",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderHover:
      "hover:border-cyan-500/50 hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)]",
    badge: "Web Storefront",
    tags: ["Responsive", "SEO", "Speed"],
  },
  {
    color: "#f59e0b",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderHover:
      "hover:border-amber-500/50 hover:shadow-[0_12px_35px_rgba(245,158,11,0.18)]",
    badge: "DevOps & VPS",
    tags: ["Linux", "Nginx", "Docker"],
  },
];

export function Services() {
  const { goTo } = useDeck();

  const cards = SERVICES.map((s, i) => (
    <ServiceCard
      key={s.title}
      s={s}
      i={i}
      theme={SERVICE_THEMES[i] || SERVICE_THEMES[0]}
      onOpen={() => goTo("contact")}
    />
  ));

  return (
    <Section id="services">
      <SectionInner className="!py-2 md:!py-3 flex h-[100dvh] flex-col md:block md:h-auto">
        <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
          <SectionHead title="Services." className="!mb-0" />

          <div className="hidden items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1 backdrop-blur sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-xs font-medium text-muted">
              Solutions &amp; Engineering Capabilities
            </span>
          </div>
        </div>

        {/* desktop: 3-column grid (2 rows for 6 services) */}
        <div className="stagger hidden gap-3.5 md:grid md:grid-cols-3">{cards}</div>

        {/* mobile: swipeable carousel */}
        <MobileSwiper className="flex min-h-0 flex-1 flex-col md:hidden">
          {cards}
        </MobileSwiper>
      </SectionInner>
    </Section>
  );
}

function ServiceCard({
  s,
  i,
  theme,
  onOpen,
}: {
  s: Service;
  i: number;
  theme: (typeof SERVICE_THEMES)[0];
  onOpen: () => void;
}) {
  return (
    <article
      onClick={onOpen}
      className={`group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-line-strong/80 bg-surface/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-2xl transition-all duration-300 ${theme.borderHover}`}
    >
      {/* Top glowing accent line */}
      <span
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.color}, transparent)`,
        }}
      />

      {/* Background ambient radial glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Large watermark number */}
      <span className="pointer-events-none absolute right-3.5 top-2 select-none font-display text-5xl font-extrabold leading-none text-ink opacity-[0.04] transition-all duration-300 group-hover:scale-105 group-hover:opacity-[0.09]">
        0{i + 1}
      </span>

      <div className="relative z-10">
        {/* Header row: Icon & Tag badge */}
        <div className="flex items-center justify-between">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl border shadow-inner transition-transform duration-300 group-hover:scale-110"
            style={{
              color: theme.color,
              borderColor: `${theme.color}3d`,
              backgroundColor: `${theme.color}15`,
            }}
          >
            <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={2} />
          </span>

          <span
            className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider"
            style={{
              color: theme.color,
              borderColor: `${theme.color}40`,
              backgroundColor: `${theme.color}12`,
            }}
          >
            {theme.badge}
          </span>
        </div>

        {/* Title & Blurb */}
        <h3 className="mt-3 font-display text-base font-bold leading-snug tracking-tight text-ink sm:text-lg">
          {s.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">
          {s.blurb}
        </p>

        {/* Checklist */}
        <ul className="mt-3 space-y-1.5 border-t border-line/80 pt-3">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-[11.5px] text-muted">
              <span
                className="grid h-4 w-4 shrink-0 place-items-center rounded-full border text-accent"
                style={{
                  color: theme.color,
                  borderColor: `${theme.color}40`,
                  backgroundColor: `${theme.color}15`,
                }}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="font-medium text-ink/90">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Tags & CTA button */}
      <div className="relative z-10 mt-3.5 border-t border-line/80 pt-2.5">
        <div className="mb-2.5 flex flex-wrap gap-1">
          {theme.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line bg-surface-2/60 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-dim transition-colors group-hover:border-line-strong group-hover:text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="inline-flex w-full items-center justify-between rounded-xl border p-2 text-xs font-bold transition-all duration-300"
          style={{
            borderColor: `${theme.color}35`,
            backgroundColor: `${theme.color}10`,
            color: theme.color,
          }}
        >
          <span>Discuss a project</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.2}
          />
        </div>
      </div>
    </article>
  );
}
