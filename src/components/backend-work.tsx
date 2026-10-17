import Image from "next/image";
import { BACKEND_WORK, PROJECTS, type BackendWork as Work } from "@/lib/site";
import { Icon } from "./icons";
import { StackDots } from "./project-card";

/**
 * Collapsible admin-panel preview shown inside a project's row on the
 * Projects page. Closed by default so the list stays scannable; the summary
 * line says what's inside.
 */
export function AdminPreview({ projectId }: { projectId: string }) {
  const work: Work | undefined = BACKEND_WORK.find((b) => b.projectId === projectId);
  if (!work) return null;

  return (
    <details className="group rounded-xl border border-line bg-surface md:col-span-2">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-2.5 font-mono text-[13px] text-muted [&::-webkit-details-marker]:hidden">
        <Icon name="server" />
        <span className="font-medium text-ink">{work.projectId}</span> / admin
        <span className="badge ml-2 font-sans">
          <Icon name="lock" className="h-3 w-3" />
          Behind login
        </span>
        <span className="ml-auto font-sans text-[12.5px] text-accent max-sm:hidden">
          <span className="group-open:hidden">Show admin panel</span>
          <span className="hidden group-open:inline">Hide</span>
        </span>
        <Icon name="chevron" className="h-4 w-4 transition-transform group-open:rotate-90 max-sm:ml-auto" />
      </summary>
      <div className="grid gap-4 border-t border-line p-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Image
          src={work.image.src}
          alt={`${work.title} dashboard`}
          width={work.image.width}
          height={work.image.height}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="block h-auto w-full rounded-lg border border-line"
        />
        <div className="min-w-0">
          <h3 className="font-semibold">{work.title}</h3>
          {work.blurred && <p className="mt-0.5 text-xs text-muted">Client figures blurred for privacy.</p>}
          <ul className="mt-2 grid gap-1.5 text-[13px]">
            {work.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Icon name="check" className="h-3.5 w-3.5 text-ok" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

/**
 * Admin panels behind client sites. The screenshot isn't linked because the
 * real panel sits behind a login; the public site it powers is.
 */
export function BackendWork() {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold">Backend work</h2>
      <div className="grid gap-4">
        {BACKEND_WORK.map((b) => {
          const site = PROJECTS.find((p) => p.id === b.projectId);
          return (
            <article key={b.title} className="panel overflow-hidden">
              <div className="flex items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
                <Icon name="server" />
                <span className="font-medium text-ink">{b.projectId}</span> / admin
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
                  <h3 className="text-[17px] font-semibold">{b.title}</h3>
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
    </section>
  );
}
