/**
 * The {S} mark. Same drawing as app/icon.svg (favicon), but the tile takes
 * the theme accent so it sits right in both light and dark.
 */
export function Logo({ className = "h-[34px] w-[34px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="15" fill="var(--accent)" />
      <g fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15.5c-3.6 0-5.5 1.9-5.5 5.2v5.6c0 3.2-1.6 5.2-4.7 5.7 3.1.5 4.7 2.5 4.7 5.7v5.6c0 3.3 1.9 5.2 5.5 5.2" />
        <path d="M43 15.5c3.6 0 5.5 1.9 5.5 5.2v5.6c0 3.2 1.6 5.2 4.7 5.7-3.1.5-4.7 2.5-4.7 5.7v5.6c0 3.3-1.9 5.2-5.5 5.2" />
        <path d="M38.6 23c-1.3-2.4-3.7-3.6-6.6-3.6-3.7 0-6.4 2-6.4 5.1 0 3.2 2.6 4.4 6.4 5.3 4 .9 6.9 2.4 6.9 5.9 0 3.4-2.9 5.6-6.9 5.6-3.2 0-5.7-1.3-7.1-3.8" />
      </g>
    </svg>
  );
}
