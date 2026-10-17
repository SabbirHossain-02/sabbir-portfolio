import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/site";
import { CHAPTERS, MOMENTS, PHOTOS, STORY, type Photo } from "@/lib/story";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "My story",
  description:
    "How Sabbir Hossain went from making clothes by day and coding by night to building systems for national brands at PKG IT.",
};

export default function StoryPage() {
  return (
    <div className="flex flex-col gap-7">
      <article className="panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
          <Icon name="story" />
          <span className="font-medium text-ink">sabbir-hossain</span> / STORY.md
        </div>

        {/* Opening */}
        <header className="grid items-center gap-7 border-b border-line px-[18px] py-8 md:grid-cols-[minmax(0,1fr)_240px] md:px-[34px] md:py-10">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-accent">My story</p>
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight md:text-[36px]">{STORY.quote}</h1>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted">{STORY.intro}</p>
          </div>
          <Figure photo={PHOTOS.dhanmondi} sizes="240px" className="mx-auto w-full max-w-[240px]" priority />
        </header>

        {/* Chapters */}
        <ol>
          {CHAPTERS.map((c, i) => (
            <li
              key={c.title}
              className="grid gap-x-8 gap-y-3 border-b border-line-soft px-[18px] py-8 last:border-b-0 md:grid-cols-[130px_minmax(0,1fr)] md:px-[34px]"
            >
              <div className="font-mono text-xs text-muted md:pt-1.5">
                <span className={i === CHAPTERS.length - 1 ? "text-accent" : "text-ink"}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5">·</span>
                {c.when}
              </div>
              <div className="min-w-0">
                <h2 className="text-[21px] font-semibold tracking-tight">{c.title}</h2>
                <div className="mt-3 grid max-w-[62ch] gap-3.5 text-[16px] leading-[1.7]">
                  {c.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                {c.photo && (
                  <Figure photo={c.photo} sizes="(min-width: 768px) 300px, 100vw" className="mt-6 w-full max-w-[300px]" />
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Closing */}
        <footer className="flex flex-wrap items-center gap-3 border-t border-line bg-surface-2/40 px-[18px] py-6 md:px-[34px]">
          <p className="mr-auto text-[15px] font-medium">If you&apos;ve read this far, let&apos;s build something together.</p>
          <Link href="/projects" className="btn">
            See my work
          </Link>
          <a href={PROFILE.cv} download className="btn">
            <Icon name="download" />
            CV
          </a>
          <Link href="/contact" className="btn btn-primary">
            Hire me
          </Link>
        </footer>
      </article>

      <section>
        <h2 className="mb-3 text-base font-semibold">Moments along the way</h2>
        <div className="columns-2 gap-4 lg:columns-3">
          {MOMENTS.map((m) => (
            <Figure
              key={m.src}
              photo={m}
              sizes="(min-width: 1024px) 280px, 50vw"
              className="mb-4 break-inside-avoid"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Figure({
  photo,
  sizes,
  className = "",
  priority = false,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full rounded-xl border border-line bg-surface-2"
      />
      <figcaption className="mt-2 font-mono text-[11.5px] text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
