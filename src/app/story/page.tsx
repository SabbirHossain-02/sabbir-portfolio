import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROFILE, STATS } from "@/lib/site";
import { MILESTONES, MOMENTS, PHOTOS, STORY, SUMMARY, TRAITS } from "@/lib/story";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "My story",
  description:
    "Self-taught full-stack developer Sabbir Hossain: from making clothes by day and coding by night to building systems for national brands at PKG IT.",
};

export default function StoryPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Introduction */}
      <section className="panel overflow-hidden">
        <div
          className="grid items-center gap-6 px-[18px] py-7 sm:grid-cols-[150px_minmax(0,1fr)] md:px-8 md:py-8"
          style={{
            background:
              "radial-gradient(110% 100% at 100% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 60%)",
          }}
        >
          <Image
            src={PHOTOS.dhanmondi.src}
            alt={PHOTOS.dhanmondi.alt}
            width={PHOTOS.dhanmondi.width}
            height={PHOTOS.dhanmondi.height}
            sizes="150px"
            priority
            className="aspect-[4/5] w-[150px] rounded-xl border border-line object-cover shadow-card"
          />
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">About me</p>
            <h1 className="mt-1.5 text-[26px] font-bold leading-tight tracking-tight md:text-[30px]">{STORY.quote}</h1>
            <p className="mt-3 max-w-[56ch] text-[15.5px] leading-relaxed text-muted">{STORY.intro}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/contact" className="btn btn-primary">
                Hire me
              </Link>
              <a href={PROFILE.cv} download className="btn">
                <Icon name="download" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-[18px] py-4 md:px-8 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "max-md:border-t" : ""} ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="text-xs text-muted">{s.label}</dt>
              <dd className="mt-0.5 text-[22px] font-semibold tabular-nums tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The short version */}
      <section>
        <h2 className="mb-3 text-base font-semibold">The short version</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {SUMMARY.map((s) => (
            <article key={s.label} className="reveal panel flex flex-col gap-3 p-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={s.icon} />
                </span>
                <h3 className="font-semibold">{s.label}</h3>
              </div>
              <p className="text-[14.5px] leading-relaxed text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What it means for a client */}
      <section className="reveal panel p-5 md:p-7">
        <h2 className="text-[19px] font-semibold tracking-tight">What this means if you hire me</h2>
        <p className="mt-1 text-muted">The way I got here is the way I work.</p>
        <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {TRAITS.map((t) => (
            <div key={t.title} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface-2 text-accent">
                <Icon name={t.icon} />
              </span>
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="reveal panel p-5 md:p-7">
        <h2 className="mb-5 text-base font-semibold">Journey</h2>
        <ol className="grid gap-5 md:grid-cols-4 md:gap-4">
          {MILESTONES.map((m, i) => {
            const next = m.when === "Next";
            return (
              <li key={m.when} className="relative grid grid-cols-[14px_minmax(0,1fr)] content-start gap-3 md:grid-cols-1 md:gap-2">
                {/* connector: vertical on mobile, horizontal on desktop */}
                {i < MILESTONES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-4 left-[6px] h-[calc(100%+4px)] w-0.5 bg-line md:top-[6px] md:left-4 md:h-0.5 md:w-full"
                  />
                )}
                <span
                  className={`relative mt-1 h-3.5 w-3.5 rounded-full border-2 md:mt-0 ${
                    next ? "border-accent bg-surface" : "border-accent bg-accent"
                  }`}
                />
                <div>
                  <p className={`font-mono text-xs ${next ? "text-accent" : "text-muted"}`}>{m.when}</p>
                  <p className="mt-0.5 text-[14.5px] font-medium">{m.what}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Photos */}
      <section className="reveal">
        <h2 className="mb-3 text-base font-semibold">Along the way</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {MOMENTS.map((m) => (
            <figure key={m.src} className="group">
              <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  sizes="(min-width: 768px) 210px, 50vw"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-1.5 font-mono text-[11.5px] text-muted">{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="panel flex flex-wrap items-center gap-3 px-5 py-5 md:px-7">
        <div className="mr-auto">
          <p className="font-semibold">Have a project in mind?</p>
          <p className="text-[14px] text-muted">I usually reply within two hours on working days.</p>
        </div>
        <Link href="/projects" className="btn">
          See my work
        </Link>
        <Link href="/contact" className="btn btn-primary">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
