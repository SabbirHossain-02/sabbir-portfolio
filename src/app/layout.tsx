import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { PROFILE } from "@/lib/site";
import { TopBar } from "@/components/top-bar";
import { Sidebar } from "@/components/sidebar";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Full-stack engineer building backend services, APIs and app-like interfaces that stay fast in production. Next.js, Node.js, NestJS, PostgreSQL.";

export const metadata: Metadata = {
  title: {
    default: "Sabbir Hossain — Full-Stack Software Engineer",
    template: "%s · Sabbir Hossain",
  },
  description,
  openGraph: {
    title: "Sabbir Hossain — Full-Stack Software Engineer",
    description,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Sabbir Hossain — Full-Stack Software Engineer",
    description,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>
        <Providers>
          <TopBar />
          <div className="mx-auto grid max-w-[1240px] gap-7 px-4 pt-5 pb-10 sm:px-6 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 md:pt-8 md:pb-14 lg:grid-cols-[296px_minmax(0,1fr)] lg:gap-10">
            <Sidebar />
            <main className="rise min-w-0">{children}</main>
          </div>
          <footer className="border-t border-line py-[22px] text-[12.5px] text-muted">
            <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-2 px-4 sm:px-6">
              <span>
                © {new Date().getFullYear()} {PROFILE.name}
              </span>
              <span className="font-mono">Built with Next.js &amp; Tailwind</span>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
