import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { TopBar } from "@/components/top-bar";
import { Sidebar } from "@/components/sidebar";
import { SiteFooter } from "@/components/site-footer";

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
  // Icons come from the file conventions: app/favicon.ico, app/icon.svg,
  // app/apple-icon.png.
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
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
