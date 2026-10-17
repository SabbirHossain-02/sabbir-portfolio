import Image from "next/image";
import { BACKEND_WORK, PROJECTS } from "@/lib/site";
import { Icon } from "./icons";
import { StackDots } from "./project-card";

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
                src={b.image}
                alt={`${b.title} dashboard`}
                width={1600}
                height={746}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="block h-auto w-full border-b border-line"
              />
              <div className="grid gap-4 p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold">{b.title}</h3>
                  <p className="mt-1.5 max-w-[60ch] text-muted">{b.summary}</p>
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
