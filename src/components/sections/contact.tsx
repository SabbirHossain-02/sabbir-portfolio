"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Download, Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/site";
import { Section, SectionInner, SectionHead } from "../section";
import { Icon } from "../icons";

const SOCIALS = [
  { id: "github", label: "GitHub", href: PROFILE.socials.github },
  { id: "linkedin", label: "LinkedIn", href: PROFILE.socials.linkedin },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Full-Stack Web App");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const bot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)
      ?.value;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message, botcheck: bot }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <SectionInner className="!py-2 md:!py-3 flex h-full flex-col justify-between">
        <div>
          {/* Section Header */}
          <div className="mb-3.5 flex flex-col gap-2 sm:mb-4">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_16px_var(--accent)]"
              />
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Have a project in mind<span className="text-accent">?</span>
              </h2>
            </div>
            <p className="pl-4.5 text-xs text-muted sm:text-sm">
              Let’s build something reliable, scalable and impactful together.
            </p>
          </div>

          <div className="stagger grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Column: Direct channels & Quick Action CTAs */}
            <div className="flex flex-col justify-between rounded-2xl border border-line-strong/80 bg-surface/80 p-5.5 shadow-[var(--shadow-md)] backdrop-blur-2xl">
              <div>
                <span className="label font-mono text-[10px] font-bold uppercase tracking-widest text-accent block mb-3">
                  Direct Channels
                </span>

                <div className="space-y-2.5">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="group flex items-center gap-3 rounded-xl border border-line/70 bg-surface-2/60 px-4 py-3 backdrop-blur transition-all duration-200 hover:border-accent/40 hover:bg-surface-2"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                      <Mail className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <div>
                      <span className="label text-[9px] block text-dim">Email</span>
                      <span className="text-xs font-bold text-ink group-hover:text-accent transition-colors">
                        {PROFILE.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 rounded-xl border border-line/70 bg-surface-2/60 px-4 py-3 backdrop-blur transition-all duration-200 hover:border-accent/40 hover:bg-surface-2"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                      <Phone className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <div>
                      <span className="label text-[9px] block text-dim">Phone</span>
                      <span className="text-xs font-bold text-ink group-hover:text-accent transition-colors">
                        {PROFILE.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-line/70 bg-surface-2/60 px-4 py-3 backdrop-blur">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                      <MapPin className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <div>
                      <span className="label text-[9px] block text-dim">Location</span>
                      <span className="text-xs font-bold text-ink">
                        {PROFILE.location} · UTC+6
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-line/80 pt-4">
                  <span className="label font-mono text-[10px] font-bold uppercase tracking-widest text-muted block mb-2.5">
                    Connect &amp; Verification
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-line/70 bg-surface-2/60 px-3 py-1.5 text-xs font-semibold text-muted transition-all duration-200 hover:border-accent/40 hover:text-ink"
                      >
                        <Icon name={s.id} className="h-3.5 w-3.5 text-accent" />
                        {s.label}
                      </a>
                    ))}

                    <a
                      href={PROFILE.cv}
                      download
                      className="inline-flex items-center gap-1.5 rounded-xl border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent transition-colors hover:bg-accent/20"
                    >
                      <Download className="h-3.5 w-3.5" strokeWidth={2} />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="rounded-2xl border border-line-strong/80 bg-surface/80 p-5.5 shadow-[var(--shadow-md)] backdrop-blur-2xl">
              {status === "sent" ? (
                <div className="flex h-full min-h-[260px] flex-col items-center justify-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h4 className="mt-3 font-display text-lg font-bold text-ink">
                    Message sent successfully!
                  </h4>
                  <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-muted">
                    Thank you for reaching out. I will respond to your email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 text-xs font-bold text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-3">
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Your Name">
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="input !py-2 text-xs"
                      />
                    </Field>
                    <Field label="Your Email">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="input !py-2 text-xs"
                      />
                    </Field>
                  </div>

                  <Field label="Project Type">
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="input !py-2 text-xs font-semibold text-ink"
                    >
                      <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                      <option value="Custom SaaS Platform">Custom SaaS Platform</option>
                      <option value="Backend & API Integration">Backend &amp; API Integration</option>
                      <option value="Database Architecture">Database Architecture</option>
                      <option value="VPS Deployment & DevOps">VPS Deployment &amp; DevOps</option>
                    </select>
                  </Field>

                  <Field label="Message">
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your goals, requirements, or timeline..."
                      className="input !py-2 text-xs resize-none"
                    />
                  </Field>

                  {status === "error" && (
                    <p className="text-xs text-rose-400">
                      Something went wrong. Please email directly at{" "}
                      <a href={`mailto:${PROFILE.email}`} className="underline font-bold">
                        {PROFILE.email}
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 font-display text-xs font-bold text-accent-ink shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending Message..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-5 border-t border-line/80 pt-3 text-center">
          <div className="flex flex-col items-center justify-between gap-1 sm:flex-row">
            <div className="text-left">
              <span className="font-display text-xs font-bold text-ink">{PROFILE.name}</span>
              <span className="mx-2 text-dim">•</span>
              <span className="font-mono text-[10px] text-muted">{PROFILE.role}</span>
            </div>
            <div className="font-mono text-[10px] text-dim">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </div>
          </div>
        </footer>
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
      <span className="label mb-1 block text-[9.5px]">{label}</span>
      {children}
    </label>
  );
}
