"use client";

import { useTheme } from "next-themes";
import { Icon } from "./icons";

/**
 * Both icons are always rendered and CSS picks one off the `dark` class
 * next-themes puts on <html>, so the server markup matches the client and
 * there's no mounted-state flicker.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Switch between light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="btn w-[34px] px-0"
    >
      <Icon name="moon" className="h-4 w-4 dark:hidden" />
      <Icon name="sun" className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
