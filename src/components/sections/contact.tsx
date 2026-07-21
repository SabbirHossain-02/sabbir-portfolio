"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Download, Send } from "lucide-react";
import { PROFILE } from "@/lib/site";
import { Section, SectionInner, SectionHead, Reveal } from "../section";
import { Icon } from "../icons";

// Only real, verifiable channels — GitHub carries the proof of work.
const SOCIALS = [{ id: "github", label: "GitHub", href: PROFILE.socials.github }];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Frontend-only: compose a prefilled email in the visitor's mail client.
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact">
      <SectionInner>
        <SectionHead title="Let's talk." />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: direct channels */}
          <Reveal className="rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur">
            <div className="space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 transition hover:border-line-strong"
              >
                <Mail className="h-5 w-5 text-accent" strokeWidth={1.8} />
                <span>
                  <span className="label block">Email</span>
                  <span className="text-sm font-medium text-ink">
                    {PROFILE.email}
                  </span>
                </span>
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 transition hover:border-line-strong"
              >
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.8} />
                <span>
                  <span className="label block">Phone</span>
                  <span className="text-sm font-medium text-ink">
                    {PROFILE.phone}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.8} />
                <span>
                  <span className="label block">Location</span>
                  <span className="text-sm font-medium text-ink">
                    {PROFILE.location} · UTC+6
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <span className="label">Elsewhere</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3.5 py-2 text-sm font-medium text-muted transition hover:border-line-strong hover:text-ink"
                  >
                    <Icon name={s.id} className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
                <a
                  href={PROFILE.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
                >
                  <Download className="h-4 w-4" strokeWidth={2} />
                  Download CV
                </a>
              </div>
            </div>
          </Reveal>

          {/* right: mailto form */}
          <Reveal
            delay={0.1}
            className="rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur"
          >
            <form onSubmit={onSubmit} className="grid gap-4">
              <Field label="Your name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="input"
                />
              </Field>
              <Field label="Your email">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="input"
                />
              </Field>
              <Field label="Project description">
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you building, and what's the problem?"
                  className="input resize-none"
                />
              </Field>
              <button
                type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
              >
                Send message
                <Send
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </button>
            </form>
          </Reveal>
        </div>

        <p className="mt-8 text-center font-mono text-[11px] text-dim">
          © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js,
          Tailwind &amp; three.js
        </p>
      </SectionInner>
    </Section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
