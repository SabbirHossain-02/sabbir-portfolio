import { PROFILE } from "@/lib/site";
import { Icon } from "./icons";

const SOCIALS = [
  { id: "github", label: "GitHub", href: PROFILE.socials.github },
  { id: "linkedin", label: "LinkedIn", href: PROFILE.socials.linkedin },
  { id: "facebook", label: "Facebook", href: PROFILE.socials.facebook },
  { id: "whatsapp", label: "WhatsApp", href: PROFILE.socials.whatsapp },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-[22px] text-[12.5px] text-muted">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <span className="font-mono max-sm:hidden">Built with Next.js &amp; Tailwind</span>
        </div>
        <nav aria-label="Social links" className="flex flex-wrap gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              <Icon name={s.id} className="h-4 w-4" />
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
