import { ABOUT, PROFILE, PROJECTS, SKILLS } from "@/lib/site";
import { STORY } from "@/lib/story";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Contributions } from "@/components/contributions";
import { BackendWork } from "@/components/backend-work";
import Link from "next/link";

const pinned = PROJECTS.filter((p) => p.pinned);
const client = PROJECTS.filter((p) => !p.own);
const own = PROJECTS.filter((p) => p.own);

export default function Overview() {
  return (
    <div className="flex flex-col gap-7">
      <article className="panel">
        <div className="flex items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
          <Icon name="book" />
          <span className="font-medium text-ink">sabbir-hossain</span> / README.md
        </div>
        <div className="px-[18px] pt-5 pb-6 md:px-[30px] md:pt-[26px] md:pb-[30px]">
          <h2 className="mb-3.5 border-b border-line pb-2.5 text-[26px] font-bold tracking-tight">
            {ABOUT.greeting}
          </h2>
          <p className="mb-3 max-w-[70ch] text-[17px]">{ABOUT.lead}</p>
          <p className="mb-3 max-w-[70ch] text-[15px]">{ABOUT.body}</p>

          <ReadmeHeading>What you get</ReadmeHeading>
          <ul className="grid gap-2.5">
            {ABOUT.highlights.map((h) => (
              <li key={h.title} className="grid max-w-[70ch] grid-cols-[20px_1fr] gap-2">
                <Icon name="check" className="mt-[3px] h-4 w-4 text-ok" />
                <span>
                  <b className="font-semibold">{h.title}</b> {h.text}
                </span>
              </li>
            ))}
          </ul>

          <ReadmeHeading>Tech I use daily</ReadmeHeading>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g) => (
              <div key={g.title}>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  {g.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-surface-2 px-2 py-1.5 font-mono text-[12.5px] leading-none"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section>
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 className="text-base font-semibold">Pinned projects</h2>
          <Link href="/projects" className="text-[13px] text-accent hover:underline">
            View all ({PROJECTS.length})
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pinned.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <article className="panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
          <Icon name="book" />
          <span className="font-medium text-ink">sabbir-hossain</span> / STORY.md
        </div>
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="px-[18px] pt-6 pb-7 md:px-[30px] md:pt-8 lg:border-r lg:border-line">
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted">My story</h2>
            <blockquote className="max-w-[24ch] text-[23px] font-semibold leading-snug tracking-tight md:text-[27px]">
              <span className="text-accent">“</span>
              {STORY.quote}
              <span className="text-accent">”</span>
            </blockquote>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted">{STORY.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/story" className="btn btn-primary">
                Read my full story
                <Icon name="arrowRight" />
              </Link>
              <a href={PROFILE.cv} download className="btn">
                <Icon name="download" />
                CV
              </a>
            </div>
          </div>

          <div className="border-t border-line bg-surface-2/40 px-[18px] pt-6 pb-7 md:px-[30px] lg:border-t-0 lg:pt-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Journey</h3>
            <ol className="relative pl-1 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-0.5 before:bg-line">
              <Activity icon="mapPin" when="Class 7" title="Moved to Narsingdi with my family">
                Worked by day, studied by night.
              </Activity>
              <Activity icon="code" when={String(PROFILE.codingSince)} title="Wrote my first code">
                Self-taught from the end of class nine.
              </Activity>
              <Activity icon="building" when={String(PROFILE.since)} title={`Joined ${PROFILE.company} as a Full-Stack Developer`}>
                Building production systems for national brands.
              </Activity>
              <Activity icon="repo" when={`${PROFILE.since} — Present`} title={`Shipped ${client.length} client projects`}>
                <ProjectPills projects={client} />
              </Activity>
              <Activity icon="layers" when="Own products" title="Launched two products of my own">
                <ProjectPills projects={own} />
              </Activity>
              <Activity icon="lock" when="Next" title="Web security and finishing my HSC" highlight>
                Learning web application security, and going back to finish my HSC.
              </Activity>
            </ol>
          </div>
        </div>
      </article>

      <BackendWork />

      <Contributions />
    </div>
  );
}

function ReadmeHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 mb-2.5 border-b border-line-soft pb-1.5 text-[17px] font-semibold">{children}</h3>
  );
}

function Activity({
  icon,
  when,
  title,
  highlight = false,
  children,
}: {
  icon: string;
  when: string;
  title: string;
  highlight?: boolean; // marks the "what's next" step
  children: React.ReactNode;
}) {
  return (
    <li className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-3.5 pb-[22px] last:pb-0">
      <span
        className={`relative grid h-8 w-8 place-items-center rounded-full border ${
          highlight ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface-2 text-muted"
        }`}
      >
        <Icon name={icon} />
      </span>
      <div>
        <div className="font-mono text-xs text-muted">{when}</div>
        <h3 className="mt-0.5 mb-1 text-[15px] font-semibold">{title}</h3>
        <div className="max-w-[68ch] text-[13.5px] text-muted">{children}</div>
      </div>
    </li>
  );
}

function ProjectPills({ projects }: { projects: typeof PROJECTS }) {
  return (
    <div className="mt-1.5 flex flex-wrap gap-1.5">
      {projects.map((p) => (
        <a
          key={p.id}
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line bg-surface px-[9px] py-[3px] text-[13px] text-ink transition hover:border-accent"
        >
          {p.title}
        </a>
      ))}
    </div>
  );
}
