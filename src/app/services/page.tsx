import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { FAQ, SERVICES } from "@/lib/site";
import { Icon } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Full-stack application development, API development and integration, and migration and performance work.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-7">
      <div className="grid gap-4 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.title} className="panel flex flex-col gap-2.5 p-5">
            <span className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-accent-soft text-accent">
              <Icon name={s.icon} className="h-[19px] w-[19px]" />
            </span>
            <h2 className="text-base font-semibold">{s.title}</h2>
            <p className="text-muted">{s.blurb}</p>
            <ul className="mt-1 grid gap-1.5 border-t border-line-soft pt-3 text-[13.5px]">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <Icon name="check" className="h-3.5 w-3.5 text-ok" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section>
        <h2 className="mb-3 text-base font-semibold">Common questions</h2>
        <div className="panel">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-line last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
                <span className="rounded-[5px] bg-accent-soft px-1.5 py-1 font-mono text-[11px] leading-none font-medium text-accent">
                  Q
                </span>
                {f.q}
                <Icon name="chevron" className="ml-auto h-4 w-4 text-muted transition-transform group-open:rotate-90" />
              </summary>
              <p className="max-w-[76ch] px-5 pb-[18px] text-muted sm:pl-[58px]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
