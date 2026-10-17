import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/site";
import { CHAPTERS, MILESTONES, MOMENTS, PHOTOS, STORY, type Photo } from "@/lib/story";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "My story",
  description:
    "How Sabbir Hossain went from making clothes by day and coding by night to building systems for national brands at PKG IT.",
};

export default function StoryPage() {
  return (
    <div className="flex flex-col gap-7">
      {/* thin reading-progress bar, driven by scroll in CSS (globals.css) */}
      <div aria-hidden className="read-progress" />

      <article className="panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
          <Icon name="story" />
          <span className="font-medium text-ink">sabbir-hossain</span> / STORY.md
        </div>

        {/* Opening */}
        <header
          className="grid items-center gap-8 border-b border-line px-[18px] py-9 md:grid-cols-[minmax(0,1fr)_270px] md:px-[38px] md:py-12"
          style={{
            background:
              "radial-gradient(120% 90% at 100% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 60%)",
          }}
        >
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-accent">My story</p>
            <h1 className="text-[30px] font-bold leading-[1.12] tracking-tight md:text-[40px]">{STORY.quote}</h1>
            <p className="mt-5 max-w-[50ch] text-[16.5px] leading-relaxed text-muted">{STORY.intro}</p>
            <ol className="mt-7 flex flex-wrap gap-2">
              {MILESTONES.map((m, i) => (
                <li key={m.when} className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12.5px] ${
                      m.when === "Next"
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-line bg-surface text-ink"
                    }`}
                  >
                    <span className="font-mono text-[11.5px] text-muted">{m.when}</span>
                    {m.what}
                  </span>
                  {i < MILESTONES.length - 1 && <Icon name="arrowRight" className="h-3.5 w-3.5 text-muted max-sm:hidden" />}
                </li>
              ))}
            </ol>
          </div>
          <Figure photo={PHOTOS.dhanmondi} sizes="270px" className="mx-auto w-full max-w-[270px]" priority />
        </header>

        {/* Chapters on a journey line */}
        <ol className="relative px-[18px] py-4 md:px-[38px]">
          <span aria-hidden className="absolute top-10 bottom-10 left-[35px] w-0.5 bg-line md:left-[55px]" />
          {CHAPTERS.map((c, i) => {
            const next = i === CHAPTERS.length - 1;
            return (
              <li key={c.title} className="reveal relative grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 py-7 md:gap-x-6">
                <span
                  className={`relative z-10 grid h-9 w-9 place-items-center rounded-full border-2 font-mono text-[12px] font-medium ${
                    next ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface text-ink"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={`grid gap-6 ${c.photo ? "lg:grid-cols-[minmax(0,1fr)_240px]" : ""}`}>
                  <div className="min-w-0">
                    <p className={`pt-1 font-mono text-xs ${next ? "text-accent" : "text-muted"}`}>{c.when}</p>
                    <h2 className="mt-1 text-[22px] font-semibold tracking-tight">{c.title}</h2>
                    <div className="mt-3 grid max-w-[62ch] gap-3.5 text-[16px] leading-[1.75]">
                      {c.paragraphs.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>
                    {c.pull && (
                      <blockquote className="mt-6 max-w-[34ch] border-l-2 border-accent pl-4 text-[20px] font-semibold leading-snug tracking-tight text-ink md:text-[22px]">
                        {c.pull}
                      </blockquote>
                    )}
                  </div>
                  {c.photo && (
                    <Figure photo={c.photo} sizes="(min-width: 1024px) 240px, 300px" className="w-full max-w-[300px] lg:max-w-none lg:pt-6" />
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {/* Closing */}
        <footer className="flex flex-wrap items-center gap-3 border-t border-line bg-surface-2/50 px-[18px] py-6 md:px-[38px]">
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
              className="reveal mb-4 break-inside-avoid"
              zoom
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
  zoom = false,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  priority?: boolean;
  zoom?: boolean; // gentle hover zoom for gallery tiles
}) {
  return (
    <figure className={`group ${className}`}>
      <div className="overflow-hidden rounded-xl border border-line bg-surface-2 shadow-card">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={priority}
          className={`block h-auto w-full ${zoom ? "transition-transform duration-500 group-hover:scale-[1.04]" : ""}`}
        />
      </div>
      <figcaption className="mt-2 font-mono text-[11.5px] text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
