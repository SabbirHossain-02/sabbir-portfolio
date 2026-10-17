"use client";

import { useState, type FormEvent } from "react";
import { PROFILE } from "@/lib/site";
import { Icon } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

/** Posts to /api/contact, which emails the message via Resend. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const bot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)?.value;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, botcheck: bot }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error ?? "");
        setStatus("error");
      }
    } catch {
      setError("");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="grid justify-items-center gap-2.5 px-6 py-10 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[color-mix(in_srgb,var(--ok)_15%,transparent)] text-ok">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="text-base font-semibold">Message sent</h2>
        <p className="max-w-[40ch] text-muted">
          Thanks for reaching out. I&apos;ll reply within a couple of hours on working days.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn mt-2">
          Write another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-5">
      {/* honeypot (hidden) */}
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-1.5">
        <label htmlFor="contact-name" className="text-[13.5px] font-semibold">
          Your name
        </label>
        <input
          id="contact-name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="input"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="contact-email" className="text-[13.5px] font-semibold">
          Your email
        </label>
        <input
          id="contact-email"
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@company.com"
          className="input"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="contact-message" className="text-[13.5px] font-semibold">
          What are you building?
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="The problem, rough scope and timeline."
          className="input resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-danger">
          {error || "The message couldn't be sent."} You can also email me directly at{" "}
          <a href={`mailto:${PROFILE.email}`} className="underline underline-offset-2">
            {PROFILE.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-muted">
        <span>Usually replies within two hours on working days.</span>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary">
          <Icon name="send" />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
