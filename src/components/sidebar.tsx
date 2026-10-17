import Image from "next/image";
import Link from "next/link";
import { PROFILE, STATS, PROJECTS, STACK_COLORS } from "@/lib/site";
import { Icon } from "./icons";
import { LocalTime } from "./local-time";
import { HomeOnlyOnMobile } from "./home-only-on-mobile";

/** Top six languages/frameworks by how many shipped projects use them. */
function stackBreakdown() {
  const counts = new Map<string, number>();
  for (const p of PROJECTS) {
    for (const s of p.stack) {
      if (STACK_COLORS[s]) counts.set(s, (counts.get(s) ?? 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
}

/**
 * Profile column. On desktop it's a fixed-width column beside the page; on
 * mobile it collapses into a compact header (small avatar beside the name).
 */
export function Sidebar() {
  const stack = stackBreakdown();

  return (
    <aside className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-x-4 gap-y-3.5 md:flex md:flex-col md:items-stretch md:gap-[18px]">
      <div className="relative w-full max-w-[296px]">
        <Image
          src={PROFILE.portrait}
          alt={`Portrait of ${PROFILE.name}`}
          width={640}
          height={640}
          priority
          sizes="(min-width: 768px) 296px, 96px"
          className="aspect-square w-full rounded-full border border-line object-cover"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--accent) 22%, var(--surface-2)), var(--surface-2) 70%)",
          }}
        />
        {PROFILE.available && (
          <span className="absolute bottom-[8%] left-[70%] hidden items-center gap-[7px] whitespace-nowrap rounded-full border border-line bg-surface px-[11px] py-1.5 text-[12.5px] font-medium shadow-card md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-ok shadow-[0_0_0_3px_color-mix(in_srgb,var(--ok)_25%,transparent)]" />
            Open to work
          </span>
        )}
      </div>

      <div>
        <h1 className="text-[22px] font-bold leading-tight tracking-tight md:text-[26px]">
          {PROFILE.name}
        </h1>
        <div className="text-[15px] text-muted md:text-lg">
          {PROFILE.handle} · {PROFILE.pronouns}
        </div>
      </div>

      <p className="col-span-full text-[15px]">{PROFILE.bio}</p>

      <div className="col-span-full grid grid-cols-2 gap-2">
        <Link href="/contact" className="btn btn-primary">
          Hire me
        </Link>
        <a href={PROFILE.cv} download className="btn">
          <Icon name="download" />
          CV
        </a>
      </div>

      <HomeOnlyOnMobile className="col-span-full grid gap-[18px]">
        <ul className="grid gap-[9px]">
          <MetaRow icon="building">
            {PROFILE.company} · since {PROFILE.since}
          </MetaRow>
          <MetaRow icon="mapPin">{PROFILE.location}</MetaRow>
          <MetaRow icon="clock">
            <LocalTime />
          </MetaRow>
          <MetaRow icon="mail">{PROFILE.email}</MetaRow>
          <MetaRow icon="github">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/{PROFILE.handle}
            </a>
          </MetaRow>
        </ul>

        <section className="border-t border-line pt-[18px]">
          <h2 className="mb-2.5 text-sm font-semibold">Track record</h2>
          <div className="grid grid-cols-2 gap-2">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-[10px] border border-line bg-surface px-3 py-2.5">
                <b className="block text-lg font-semibold tabular-nums tracking-tight">{s.value}</b>
                <small className="text-xs text-muted">{s.label}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line pt-[18px]">
          <h2 className="mb-2.5 text-sm font-semibold">Stack across shipped projects</h2>
          <div className="mb-2.5 flex h-2 gap-0.5 overflow-hidden rounded-full">
            {stack.map(([name, n]) => (
              <span key={name} style={{ flex: n, background: STACK_COLORS[name]! }} />
            ))}
          </div>
          <ul className="flex flex-wrap gap-x-3.5 gap-y-1 text-[12.5px]">
            {stack.map(([name, n]) => (
              <li key={name} className="inline-flex items-center gap-1.5">
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: STACK_COLORS[name]! }} />
                {name}
                <span className="text-muted">
                  {n}/{PROJECTS.length}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </HomeOnlyOnMobile>
    </aside>
  );
}

function MetaRow({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <li className="flex min-w-0 items-center gap-[9px]">
      <Icon name={icon} className="h-4 w-4 text-muted" />
      <span className="[overflow-wrap:anywhere]">{children}</span>
    </li>
  );
}
