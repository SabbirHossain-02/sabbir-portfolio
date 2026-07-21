import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PROFILE } from "@/lib/site";

/**
 * Custom contact endpoint. The form POSTs here; we send the message to the
 * profile inbox via Resend, with reply-to set to the visitor so a reply from
 * Gmail goes straight back to them. The API key lives only in the server env
 * (RESEND_API_KEY) — never in the client bundle or git.
 */
export async function POST(req: Request) {
  try {
    const { name, email, message, botcheck } = await req.json();

    // honeypot — bots fill hidden fields; quietly accept and drop
    if (botcheck) return NextResponse.json({ success: true });

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please fill in every field." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "That email doesn't look right." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [PROFILE.email],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">New portfolio enquiry</h2>
          <p style="margin:4px 0"><b>Name:</b> ${escapeHtml(name)}</p>
          <p style="margin:4px 0"><b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="margin:16px 0 4px"><b>Message:</b></p>
          <p style="white-space:pre-wrap;margin:0;padding:12px 14px;background:#f4f6fb;border-radius:8px">${escapeHtml(message)}</p>
        </div>`,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
