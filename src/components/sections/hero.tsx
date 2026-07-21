"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROFILE } from "@/lib/site";
import { Portrait } from "../portrait";
import { useDeck } from "../deck";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero modelled closely on reference #1: flat, quiet, editorial.
 * Left = "Hello / I am [name] / role / line / View My Work" with a hand-drawn
 * underline. Right = full-bleed portrait fading into the canvas. No particles,
 * no glow.
 */
export function Hero() {
  const { goTo } = useDeck();

  return (
    <div data-section="home" className="relative min-h-full w-full">
      {/* themed backlight glow behind the portrait — lifts the subject off the
          dark canvas and ties the photo into the accent theme */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute right-[4%] top-1/2 hidden h-[72%] w-[46%] -translate-y-1/2 md:block"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 28%, transparent) 0%, transparent 72%)",
          filter: "blur(66px)",
        }}
      />

      {/* right full-bleed portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute inset-y-0 right-0 hidden w-[46%] md:block lg:w-[42%]"
      >
        {/* Fade the photo's own left + bottom edges to transparent with a
            mask, so the SAME canvas shows through — no overlaid dark band, no
            visible seam between the copy area and the portrait. */}
        <div
          className="h-full w-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, #000 38%), linear-gradient(to top, transparent 0%, #000 14%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(90deg, transparent 0%, #000 38%), linear-gradient(to top, transparent 0%, #000 14%)",
            maskComposite: "intersect",
          }}
        >
          <Portrait src={PROFILE.portrait} />
        </div>
      </motion.div>

      {/* copy — with an app-style portrait on top for mobile */}
      <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-16 md:flex md:min-h-full md:items-center md:px-6 md:pb-0 md:pt-0 md:pl-28 lg:pl-32">
        {/* mobile portrait */}
        <div className="relative mx-auto mb-7 w-full max-w-[240px] md:hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-125"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 70%)",
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

        <div className="max-w-xl md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-base text-muted sm:text-lg"
          >
            Hello
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            I am {PROFILE.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-3 font-display text-xl font-medium text-muted sm:text-2xl"
          >
            {PROFILE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-muted"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.42 }}
            className="mt-10"
          >
            <button
              type="button"
              onClick={() => goTo("projects")}
              className="group inline-flex items-center gap-2 font-display text-lg font-semibold text-ink"
            >
              View My Work
              <ArrowRight
                className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </button>
            {/* hand-drawn underline, like the reference */}
            <svg
              className="mt-1 h-3 w-52 text-accent"
              viewBox="0 0 220 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C 40 2, 80 2, 120 6 S 200 10, 218 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
