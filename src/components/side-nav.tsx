"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Download, Moon, Sun } from "lucide-react";
import { NAV, PROFILE } from "@/lib/site";
import { useDeck } from "./deck";
import { Icon } from "./icons";

/* ==========================================================================
   DESKTOP — left vertical icon rail (sections + CV + theme)
   ========================================================================== */
export function SideNav() {
  const { active, goTo } = useDeck();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme !== "light";

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col items-center gap-1 rounded-full border border-line bg-surface/70 p-2 shadow-[var(--shadow-md)] backdrop-blur-xl">
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="relative">
              <button
                type="button"
                onClick={() => goTo(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className="group relative grid h-11 w-11 place-items-center rounded-full"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-accent"
                  />
                )}
                <Icon
                  name={item.icon}
                  className={`relative z-10 h-[19px] w-[19px] transition-colors ${
                    isActive ? "text-accent-ink" : "text-muted group-hover:text-ink"
                  }`}
                />
                <Tooltip>{item.label}</Tooltip>
              </button>
            </li>
          );
        })}

        <li aria-hidden className="my-1 h-px w-6 bg-line" />

        <li className="relative">
          <a
            href={PROFILE.cv}
            download
            aria-label="Download CV"
            className="group relative grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:text-ink"
          >
            <Download className="h-[18px] w-[18px]" strokeWidth={1.9} />
            <Tooltip>Download CV</Tooltip>
          </a>
        </li>

        <li className="relative">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle color theme"
            className="group relative grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:text-ink"
          >
            {mounted ? (
              isDark ? (
                <Sun className="h-[18px] w-[18px]" strokeWidth={1.9} />
              ) : (
                <Moon className="h-[18px] w-[18px]" strokeWidth={1.9} />
              )
            ) : (
              <span className="h-[18px] w-[18px]" />
            )}
            <Tooltip>{isDark ? "Light mode" : "Dark mode"}</Tooltip>
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 hidden -translate-x-1 -translate-y-1/2 whitespace-nowrap rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-[var(--shadow-md)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block">
      {children}
    </span>
  );
}

/* ==========================================================================
   MOBILE — app-style bottom tab bar + top-right utilities
   ========================================================================== */
export function MobileBar() {
  const { active, goTo } = useDeck();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme !== "light";

  return (
    <>
      {/* top-right utilities */}
      <div className="fixed right-3 top-3 z-40 flex items-center gap-2 md:hidden">
        <a
          href={PROFILE.cv}
          download
          aria-label="Download CV"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur"
        >
          <Download className="h-[18px] w-[18px] text-accent" strokeWidth={2} />
        </a>
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle color theme"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur"
        >
          {mounted ? (
            isDark ? (
              <Sun className="h-[18px] w-[18px]" strokeWidth={1.9} />
            ) : (
              <Moon className="h-[18px] w-[18px]" strokeWidth={1.9} />
            )
          ) : (
            <span className="h-[18px] w-[18px]" />
          )}
        </button>
      </div>

      {/* bottom tab bar */}
      <nav
        aria-label="Section navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/85 backdrop-blur-xl md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-around">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="flex-1">
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? "true" : undefined}
                  className="relative flex w-full flex-col items-center gap-1 py-2.5"
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-tab"
                      transition={{ type: "spring", stiffness: 500, damping: 34 }}
                      className="absolute inset-x-2 top-0 h-0.5 rounded-full bg-accent"
                    />
                  )}
                  <Icon
                    name={item.icon}
                    className={`h-[18px] w-[18px] transition-colors ${
                      isActive ? "text-accent" : "text-dim"
                    }`}
                  />
                  <span
                    className={`text-[0.58rem] font-medium leading-none transition-colors ${
                      isActive ? "text-accent" : "text-dim"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
