"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { PROFILE } from "@/lib/site";
import { Portrait } from "../portrait";
import { useDeck } from "../deck";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { goTo } = useDeck();

  return (
    <div data-section="home" className="relative min-h-full w-full">
      {/* Dynamic ambient backlight glow behind portrait */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute right-[2%] top-1/2 hidden h-[75%] w-[48%] -translate-y-1/2 md:block"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 32%, transparent) 0%, color-mix(in srgb, var(--accent-2) 15%, transparent) 45%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* Right full-bleed portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease }}
        className="absolute inset-y-0 right-0 hidden w-[46%] md:block lg:w-[44%]"
      >
        <div
          className="h-full w-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, #000 35%), linear-gradient(to top, transparent 0%, #000 12%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(90deg, transparent 0%, #000 35%), linear-gradient(to top, transparent 0%, #000 12%)",
            maskComposite: "intersect",
          }}
        >
          <Portrait src={PROFILE.portrait} />
        </div>
      </motion.div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:flex md:min-h-full md:items-center md:px-6 md:pb-0 md:pt-0 md:pl-28 lg:pl-32">
        {/* Mobile portrait */}
        <div className="relative mx-auto mb-6 w-full max-w-[220px] md:hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-125"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line-strong bg-surface-2"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, #000 22%)",
              maskImage: "linear-gradient(to top, transparent 0%, #000 22%)",
            }}
          >
            <Portrait src={PROFILE.portrait} />
          </div>
        </div>

        <div className="max-w-xl md:py-16">
          {/* Live Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider">
              Available for projects &amp; roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            I am <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-3 font-display text-xl font-bold tracking-tight text-accent sm:text-2xl"
          >
            {PROFILE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-4 max-w-lg text-[14px] leading-relaxed text-muted sm:text-[15px]"
          >
            {PROFILE.intro}
          </motion.p>

          {/* Core tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.38 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {["Next.js", "React", "Node.js", "PostgreSQL", "VPS"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line bg-surface-2/70 px-2.5 py-1 font-mono text-[11px] font-semibold text-dim shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => goTo("projects")}
              className="group relative inline-flex items-center gap-2.5 rounded-xl border border-accent/40 bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-display text-sm font-bold text-accent-ink shadow-[0_0_25px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_color-mix(in_srgb,var(--accent)_55%,transparent)]"
            >
              <span>View My Work</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </button>

            <button
              type="button"
              onClick={() => goTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2/80 px-5 py-3 font-display text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-surface"
            >
              <Mail className="h-4 w-4 text-accent" />
              <span>Get In Touch</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
