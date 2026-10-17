import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PROFILE } from "@/lib/site";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Hire Sabbir Hossain for your next web app, API or migration. Usually replies within two hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div className="panel">
        <div className="flex items-center gap-2 border-b border-line px-[18px] py-3 font-mono text-[13px] text-muted">
          <Icon name="mail" />
          <span className="font-medium text-ink">New message</span>
        </div>
        <ContactForm />
      </div>

      <div className="panel py-1.5">
        <DirectRow icon="mail" label="Email" value={PROFILE.email} copy={PROFILE.email} />
        <DirectRow
          icon="phone"
          label="Phone / WhatsApp"
          value={PROFILE.phone}
          copy={PROFILE.phone.replace(/\s/g, "")}
        />
        <DirectRow icon="mapPin" label="Location" value={`${PROFILE.location} · UTC+${PROFILE.utcOffset}`} />
        <DirectRow icon="github" label="GitHub" value={PROFILE.handle} href={PROFILE.socials.github} />
        <div className="px-[18px] pt-3 pb-2">
          <a href={PROFILE.cv} download className="btn w-full">
            <Icon name="download" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

function DirectRow({
  icon,
  label,
  value,
  copy,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  copy?: string;
  href?: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 border-b border-line-soft px-[18px] py-3">
      <Icon name={icon} className="h-4 w-4 text-accent" />
      <div className="min-w-0 flex-1">
        <small className="block text-xs text-muted">{label}</small>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
            {value}
          </a>
        ) : (
          <span className="font-medium [overflow-wrap:anywhere]">{value}</span>
        )}
      </div>
      {copy && <CopyButton value={copy} label={`Copy ${label.toLowerCase()}`} />}
    </div>
  );
}
