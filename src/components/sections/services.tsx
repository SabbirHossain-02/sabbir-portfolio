"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { Icon } from "../icons";
import { useDeck } from "../deck";
import { MobileSwiper } from "../mobile-swiper";

export function Services() {
  const { goTo } = useDeck();

  const cards = SERVICES.map((s, i) => (
    <ServiceCard key={s.title} s={s} i={i} onOpen={() => goTo("contact")} />
  ));

  return (
    <Section id="services">
      <SectionInner>
        <SectionHead title="What I do." />

        {/* desktop: 3-column grid */}
        <div className="stagger hidden gap-5 md:grid md:grid-cols-3">{cards}</div>

        {/* mobile: swipeable carousel */}
        <MobileSwiper className="md:hidden">{cards}</MobileSwiper>
      </SectionInner>
    </Section>
  );
}

function ServiceCard({
  s,
  i,
  onOpen,
}: {
  s: Service;
  i: number;
  onOpen: () => void;
}) {
  return (
    <article
      onClick={onOpen}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong"
    >
      {/* accent line grows across the top on hover */}
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      {/* corner glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
        }}
      />

      {/* editorial ghost number */}
      <span className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-bold leading-none text-ink opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09]">
        0{i + 1}
      </span>

      {/* icon */}
      <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_22px_rgba(91,140,255,0.22)]">
        <Icon name={s.icon} className="h-[22px] w-[22px]" />
      </span>

      <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
        {s.title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
        {s.blurb}
      </p>

      <ul className="relative mt-5 space-y-2.5 border-t border-line pt-5">
        {s.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-sm text-muted">
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {p}
          </li>
        ))}
      </ul>

      {/* subtle CTA */}
      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        <span className="opacity-70 transition-opacity group-hover:opacity-100">
          Discuss a project
        </span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.2}
        />
      </span>
    </article>
  );
}
