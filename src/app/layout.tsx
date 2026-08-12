import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sabbir Hosen — Full-Stack Software Engineer",
  description:
    "Portfolio of Sabbir Hosen, a Full-Stack Software Engineer building scalable web applications with Next.js, Node.js, Python and PostgreSQL.",
  keywords: [
    "Sabbir Hosen",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "Node.js Engineer",
    "PostgreSQL",
    "Python",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Sabbir Hosen", url: "https://github.com/SabbirHossain-02" }],
  openGraph: {
    title: "Sabbir Hosen — Full-Stack Software Engineer",
    description:
      "Portfolio of Sabbir Hosen, a Full-Stack Software Engineer building scalable web applications with Next.js, Node.js, Python and PostgreSQL.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/portrait.png", width: 1200, height: 630, alt: "Sabbir Hosen Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Hosen — Full-Stack Software Engineer",
    description:
      "Portfolio of Sabbir Hosen, a Full-Stack Software Engineer building scalable web applications with Next.js, Node.js, Python and PostgreSQL.",
    images: ["/portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
