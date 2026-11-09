import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { BACKEND_WORK, PROJECTS } from "@/lib/site";
import { Icon } from "@/components/icons";
import { StackDots } from "@/components/project-card";

export const metadata: Metadata = pageMetadata({
  title: "Backend projects",
  description:
    "Admin panels, CMS, CRM and analytics systems Sabbir Hossain built behind live client websites: orders, leads, catalogues and real-time dashboards.",
  path: "/backend",
});

/**
 * Admin panels behind client sites. Screenshots aren't linked because the real
 * panels sit behind a login; the public site each one powers is.
 */
export default function BackendPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="panel px-[18px] py-6 md:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">Backend projects</p>
        <h1 className="mt-1.5 text-[24px] font-bold leading-tight tracking-tight md:text-[28px]">
          The systems behind the websites
        </h1>
        <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted">
          Admin panels, CMS, CRM and analytics that client teams use every day to run their catalogue, orders, leads
          and content without a developer.
        </p>
      </header>

      {BACKEND_WORK.map((b) => {
        const site = PROJECTS.find((p) => p.id === b.projectId);
        return (
          <article key={b.title} id={b.projectId} className="panel scroll-mt-28 overflow-hidden">
            <div className="flex min-w-0 items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
              <Icon name="server" />
              <span className="truncate">
                <span className="font-medium text-ink">{b.projectId}</span> / admin
              </span>
              <span className="badge ml-auto font-sans">
                <Icon name="lock" className="h-3 w-3" />
                Behind login
              </span>
            </div>
            <Image
              src={b.image.src}
              alt={`${b.title} dashboard`}
              width={b.image.width}
              height={b.image.height}
              sizes="(min-width: 1024px) 900px, 100vw"
              className="block h-auto w-full border-b border-line"
            />
            <div className="grid gap-4 p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
              <div className="min-w-0">
                <h2 className="text-[17px] font-semibold">{b.title}</h2>
                <p className="mt-1.5 max-w-[60ch] text-muted">{b.summary}</p>
                {b.blurred && <p className="mt-1.5 text-xs text-muted">Client figures blurred for privacy.</p>}
                <div className="mt-3 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[12.5px] text-muted">
                  <StackDots stack={b.stack} />
                  {site && (
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      Public site <Icon name="external" className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
              <ul className="grid content-start gap-x-4 gap-y-2 text-[13.5px] sm:grid-cols-2">
                {b.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Icon name="check" className="h-3.5 w-3.5 text-ok" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
