"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TABS, PROJECTS, SERVICES } from "@/lib/site";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const COUNTS: Record<string, number> = {
  "/projects": PROJECTS.length,
  "/services": SERVICES.length,
};

/** Sticky header: repo-style breadcrumb, theme toggle, and the page tabs. */
export function TopBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex items-center gap-3 pt-3.5 pb-1.5">
          <Link
            href="/"
            aria-label="Home"
            className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-accent font-mono text-[15px] font-semibold tracking-tighter text-accent-ink"
          >
            {"{S}"}
          </Link>
          <div className="min-w-0 truncate font-mono text-sm text-muted">
            <span className="font-medium text-ink">sabbir-hosen</span>
            <span className="max-sm:hidden"> / portfolio</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary max-md:hidden">
              Hire me
            </Link>
          </div>
        </div>

        <nav aria-label="Sections" className="no-scrollbar flex gap-1 overflow-x-auto">
          {TABS.map((t) => {
            const active = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
            const count = COUNTS[t.href];
            return (
              <Link
                key={t.href}
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex items-center gap-2 whitespace-nowrap rounded-md px-3 pt-2.5 pb-3 font-medium transition-colors hover:text-ink ${
                  active
                    ? "text-ink after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-accent"
                    : "text-muted"
                }`}
              >
                <Icon name={t.icon} />
                {t.label}
                {count !== undefined && (
                  <span className="rounded-full border border-line bg-surface-2 px-[7px] py-[3px] font-mono text-[11.5px] leading-none text-ink">
                    {count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
