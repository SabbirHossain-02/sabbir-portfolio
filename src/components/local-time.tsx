"use client";

import { useSyncExternalStore } from "react";
import { PROFILE } from "@/lib/site";

// Re-render twice a minute; the snapshot is a string, so React only commits
// when the displayed minute actually changes.
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

function snapshot() {
  const d = new Date(Date.now() + PROFILE.utcOffset * 3_600_000);
  const h = d.getUTCHours();
  const m = String(d.getUTCMinutes()).padStart(2, "0");
  return `${((h + 11) % 12) + 1}:${m} ${h < 12 ? "AM" : "PM"}`;
}

const TZ = `UTC+${PROFILE.utcOffset}`;

/** Sabbir's current local time — server render shows just the offset. */
export function LocalTime() {
  const time = useSyncExternalStore(subscribe, snapshot, () => "");
  return <span>{time ? `${time} local time (${TZ})` : TZ}</span>;
}
