import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { TopBar } from "@/components/top-bar";
import { Sidebar } from "@/components/sidebar";
import { SiteFooter } from "@/components/site-footer";
import { PROFILE } from "@/lib/site";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/seo";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${PROFILE.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  keywords: [
    "Sabbir Hossain",
    "full-stack developer",
    "Next.js developer",
    "Node.js developer",
    "PostgreSQL",
    "admin panel",
    "CRM development",
    "web developer Bangladesh",
    "Dhaka",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: PROFILE.name,
    locale: "en_US",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    firstName: "Sabbir",
    lastName: "Hossain",
    username: PROFILE.handle,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  // Icons come from the file conventions (favicon.ico, icon.svg,
  // apple-icon.png) and the share image from opengraph-image.jpg (a JPEG
  // under 300 KB so WhatsApp shows the preview).
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
