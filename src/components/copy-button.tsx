"use client";

import { useState } from "react";
import { Icon } from "./icons";

/** Copies `value` to the clipboard and shows a check for a moment. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked: the value is already visible and selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : label}
      className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-md border border-line text-muted transition hover:border-muted hover:text-ink"
    >
      <Icon name={copied ? "check" : "copy"} className={`h-4 w-4 ${copied ? "text-ok" : ""}`} />
    </button>
  );
}
