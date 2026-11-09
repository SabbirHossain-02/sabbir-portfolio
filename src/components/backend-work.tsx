import Link from "next/link";
import { BACKEND_WORK } from "@/lib/site";
import { Icon } from "./icons";

/**
 * One-line link from a project's row on the Projects page to its admin panel
 * on the Backend page, so the screenshots live in one place.
 */
export function AdminLink({ projectId }: { projectId: string }) {
  const work = BACKEND_WORK.find((b) => b.projectId === projectId);
  if (!work) return null;

  return (
    <Link
      href={`/backend#${projectId}`}
      className="flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 font-mono text-[13px] text-muted transition hover:border-accent md:col-span-2"
    >
      <Icon name="server" />
      <span className="truncate">
        <span className="font-medium text-ink">{projectId}</span> / admin
      </span>
      <span className="ml-auto inline-flex shrink-0 items-center gap-1 font-sans text-[12.5px] text-accent">
        View admin panel
        <Icon name="arrowRight" className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
