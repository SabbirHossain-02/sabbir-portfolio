"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionInner>
        <SectionHead title="FAQ." />

        <div className="stagger grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-line bg-surface/60 backdrop-blur transition hover:border-line-strong"
              >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-ink">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-accent text-accent-ink" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>
            );
          })}
        </div>
      </SectionInner>
    </Section>
  );
}
