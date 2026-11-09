import { ABOUT, PROJECTS, SKILLS } from "@/lib/site";
import { jsonLd, personJsonLd } from "@/lib/seo";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Contributions } from "@/components/contributions";
import Link from "next/link";

const pinned = PROJECTS.filter((p) => p.pinned);

export default function Overview() {
  return (
    <div className="flex flex-col gap-7">
      {/* structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(personJsonLd()) }}
      />
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

      <Contributions />
    </div>
  );
}

function ReadmeHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 mb-2.5 border-b border-line-soft pb-1.5 text-[17px] font-semibold">{children}</h3>
  );
}
