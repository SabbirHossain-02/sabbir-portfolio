"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * On phones the sidebar stacks above the page, so its longer sections would
 * push Projects/Services/Contact far down. They show on every page on desktop
 * but only on the Overview page on mobile.
 */
export function HomeOnlyOnMobile({ children, className = "" }: { children: ReactNode; className?: string }) {
  const home = usePathname() === "/";
  return <div className={`${className} ${home ? "" : "max-md:hidden"}`}>{children}</div>;
}
