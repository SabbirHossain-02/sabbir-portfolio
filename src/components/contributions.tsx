import { PROFILE } from "@/lib/site";

type Day = { date: string; level: number; count: number };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Reads the public contribution calendar GitHub serves for a profile and
 * re-fetches it once a day. Returns null if GitHub is unreachable or the
 * markup changes, so the section just doesn't render instead of breaking.
 */
async function getContributions(): Promise<{ total: number; days: Day[] } | null> {
  try {
    const res = await fetch(`https://github.com/users/${PROFILE.handle}/contributions`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const counts = new Map<string, number>();
    for (const m of html.matchAll(/for="(contribution-day-component-[\d-]+)"[^>]*>(\d+) contribution/g)) {
      counts.set(m[1], Number(m[2]));
    }
    const days: Day[] = [];
    for (const m of html.matchAll(/data-date="([\d-]+)" id="(contribution-day-component-[\d-]+)" data-level="(\d)"/g)) {
      days.push({ date: m[1], level: Number(m[3]), count: counts.get(m[2]) ?? 0 });
    }
    if (days.length < 300) return null;
    days.sort((a, b) => a.date.localeCompare(b.date));

    const total = Number(html.match(/([\d,]+)\s+contributions?\s+in the last year/)?.[1].replace(/,/g, ""));
    return { total: Number.isFinite(total) ? total : days.reduce((n, d) => n + d.count, 0), days };
  } catch {
    return null;
  }
}

const CELL = 11;
const PITCH = 14;
const LEFT = 30;
const TOP = 18;

export async function Contributions() {
  const data = await getContributions();
  if (!data) return null;

  const { days, total } = data;
  const cols = Math.ceil(days.length / 7);
  const w = LEFT + cols * PITCH;
  const h = TOP + 7 * PITCH;

  // Month label above the first column whose Sunday falls in a new month.
  const months: { x: number; label: string }[] = [];
  let last = -1;
  days.forEach((d, i) => {
    const col = Math.floor(i / 7);
    const month = Number(d.date.slice(5, 7)) - 1;
    if (i % 7 === 0 && month !== last && col < cols - 1) {
      last = month;
      months.push({ x: LEFT + col * PITCH, label: MONTHS[month] });
    }
  });

  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-base font-semibold">
          {total.toLocaleString("en-US")} contributions in the last year
        </h2>
        <a
          href={PROFILE.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-accent hover:underline"
        >
          On GitHub ↗
        </a>
      </div>
      <div className="panel px-[18px] pt-4 pb-3">
        {/* dir=rtl pins the scroll to the newest weeks on narrow screens */}
        <div className="overflow-x-auto pb-1" dir="rtl">
          <div dir="ltr" className="w-fit">
          <svg
            width={w}
            height={h}
            viewBox={`0 0 ${w} ${h}`}
            role="img"
            aria-label={`${total} contributions in the last year`}
            className="block fill-muted text-[10px]"
          >
            {months.map((m) => (
              <text key={m.x} x={m.x} y={10}>
                {m.label}
              </text>
            ))}
            {["Mon", "Wed", "Fri"].map((t, k) => (
              <text key={t} x={0} y={TOP + (k * 2 + 1) * PITCH + 9}>
                {t}
              </text>
            ))}
            {days.map((d, i) => (
              <rect
                key={d.date}
                className={`cal-${d.level}`}
                x={LEFT + Math.floor(i / 7) * PITCH}
                y={TOP + (i % 7) * PITCH}
                width={CELL}
                height={CELL}
                rx={2}
              >
                <title>
                  {`${d.count ? `${d.count} contribution${d.count > 1 ? "s" : ""}` : "No contributions"} on ${MONTHS[Number(d.date.slice(5, 7)) - 1]} ${Number(d.date.slice(8))}`}
                </title>
              </rect>
            ))}
          </svg>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <span>Live from github.com/{PROFILE.handle}</span>
          <span className="inline-flex items-center gap-1">
            Less
            {[0, 1, 2, 3, 4].map((l) => (
              <i key={l} className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: `var(--c${l})` }} />
            ))}
            More
          </span>
        </div>
      </div>
    </section>
  );
}
