import Image from "next/image";
import { stackColor, type Project } from "@/lib/site";
import { Icon } from "./icons";

/** Coloured dot + name per stack tag, like a repo's language line. */
export function StackDots({ stack }: { stack: string[] }) {
  return (
    <>
      {stack.map((s) => (
        <span key={s} className="inline-flex items-center gap-1.5">
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: stackColor(s) }} />
          {s}
        </span>
      ))}
    </>
  );
}

/** 16:10 live-site screenshot. */
export function Shot({ project, sizes, className = "" }: { project: Project; sizes: string; className?: string }) {
  return (
    <div className={`relative aspect-[16/10] max-w-full overflow-hidden bg-surface-2 ${className}`}>
      <Image
        src={project.image}
        alt={`${project.title} homepage`}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}

/** Pinned-repo style card used on the Overview page. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--line))]">
      <Shot
        project={project}
        sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
        className="border-b border-line"
      />
      <div className="flex flex-1 flex-col gap-2 px-4 pt-3.5 pb-4">
        <div className="flex min-w-0 items-center gap-2">
          <Icon name="repo" className="h-4 w-4 text-muted" />
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate text-[15px] font-semibold text-accent hover:underline"
          >
            {project.title}
          </a>
          <span className="badge badge-live">Live</span>
          {project.own && <span className="badge">Own product</span>}
        </div>
        <p className="line-clamp-2 text-[13.5px] text-muted">{project.purpose}</p>
        <div className="mt-auto flex flex-wrap gap-x-3.5 gap-y-1 pt-1 text-[12.5px] text-muted">
          <StackDots stack={project.stack.slice(0, 3)} />
        </div>
      </div>
    </article>
  );
}
