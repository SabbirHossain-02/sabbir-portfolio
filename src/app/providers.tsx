"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * next-themes drives the light/dark toggle by writing class="dark" on <html>.
 * defaultTheme is light; the toggle lets visitors flip to dark and their
 * choice is remembered. disableTransitionOnChange avoids a color flash.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
