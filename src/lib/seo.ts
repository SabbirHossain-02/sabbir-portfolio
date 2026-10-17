import type { Metadata } from "next";
import { PROFILE, SKILLS } from "./site";

const PRIMARY_URL = "https://sabbirhossain-dev.vercel.app";

/**
 * Canonical site URL. Vercel's production domain wins once it's a real custom
 * domain (e.g. a bought .com); while the project only has *.vercel.app
 * aliases, PRIMARY_URL picks the one we chose. NEXT_PUBLIC_SITE_URL overrides
 * both. Server-only.
 */
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProd && !vercelProd.endsWith(".vercel.app") ? `https://${vercelProd}` : PRIMARY_URL)
).replace(/\/$/, "");

export const SITE_TITLE = `${PROFILE.name} — Full-Stack Developer`;

export const SITE_DESCRIPTION =
  "Sabbir Hossain is a self-taught full-stack developer in Dhaka, Bangladesh, building websites, admin panels, CRMs and real-time dashboards with Next.js, Node.js and PostgreSQL.";

/**
 * The share card (app/opengraph-image.jpg). The root layout picks it up by
 * file convention, but a page that sets its own openGraph replaces the
 * inherited image, so subpages list it explicitly.
 */
const SHARE_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Sabbir Hossain — Self-taught Full-Stack Developer",
};

/** Per-page metadata with a canonical URL and matching Open Graph / X tags. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const full = `${title} · ${PROFILE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, images: [SHARE_IMAGE] },
    twitter: { card: "summary_large_image", title: full, description, images: [SHARE_IMAGE] },
  };
}

/** schema.org Person + WebSite, rendered as JSON-LD on the home page. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PROFILE.name,
        jobTitle: "Full-Stack Developer",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}${PROFILE.portrait}`,
        email: `mailto:${PROFILE.email}`,
        worksFor: { "@type": "Organization", name: PROFILE.company },
        address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
        knowsAbout: SKILLS.flatMap((g) => g.items),
        sameAs: [PROFILE.socials.github, PROFILE.socials.linkedin, PROFILE.socials.facebook],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: PROFILE.name,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
    ],
  };
}

/** Serialises JSON-LD for a <script> tag, escaping "<" as the Next.js JSON-LD guide recommends. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
