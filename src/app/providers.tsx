"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * next-themes drives the light/dark toggle by writing class="dark" on <html>.
 * defaultTheme is dark because the design is built navy-first; the toggle
 * lets visitors flip to light. disableTransitionOnChange avoids a color flash.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
