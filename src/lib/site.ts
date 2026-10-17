/* ==========================================================================
   SITE CONTENT — single source of truth for every page.
   Icons are referenced by string id and mapped to lucide components in the
   UI, so this stays a plain data module.
   ========================================================================== */

export interface Tab {
  href: string;
  label: string;
  icon: string; // lucide icon id, resolved in components/site/icons
}

export const TABS: Tab[] = [
  { href: "/", label: "Overview", icon: "book" },
  { href: "/projects", label: "Projects", icon: "repo" },
  { href: "/services", label: "Services", icon: "layers" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export const PROFILE = {
  name: "Sabbir Hossain",
  handle: "SabbirHossain-02",
  pronouns: "he/him",
  role: "Full-Stack Software Engineer",
  company: "PKG IT",
  since: 2025,
  codingSince: 2021,
  location: "Dhaka, Bangladesh",
  utcOffset: 6,
  email: "sabbircreators@gmail.com",
  phone: "+880 1959 250 836",
  available: true,
  bio: "Full-stack engineer. I build backend services, APIs and app-like interfaces that stay fast while they grow.",
  socials: {
    github: "https://github.com/SabbirHossain-02",
    linkedin: "https://www.linkedin.com/in/sabbir-hossain-67076a434/",
    facebook: "https://www.facebook.com/nobita.chowdhury.597795",
    whatsapp: "https://wa.me/8801959250836",
    fiverr: "https://fiverr.com/sabbirhosen",
  },
  cv: "/Sabbir_Hossain_CV.pdf",
  portrait: "/profile.webp",
};

export const ABOUT = {
  greeting: "Hi, I'm Sabbir.",
  lead: "Self-taught full-stack developer at PKG IT, building complete web apps with Next.js, Node.js, PostgreSQL and Python, and deploying them on Vercel and self-managed VPS servers.",
  body: "I focus on systems that hold up after launch: indexed databases, secured endpoints, and mobile treated as a first-class target. I use AI tools to move faster, and I make sure I understand every line I ship.",
  highlights: [
    {
      title: "Handover-ready code.",
      text: "Standard structure, typed contracts and documented decisions.",
    },
    {
      title: "App-like on every screen.",
      text: "Responsive layouts with real attention to touch and motion.",
    },
    {
      title: "Measured performance.",
      text: "Caching, query tuning and profiling you can see in the numbers.",
    },
  ],
};

export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST / GraphQL", "JWT / OAuth", "WebSockets"],
  },
  {
    title: "Data & DevOps",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Nginx", "CI/CD"],
  },
];

export interface Service {
  title: string;
  icon: string;
  blurb: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Full-stack application development",
    icon: "code",
    blurb:
      "End-to-end web apps tailored to your business rules: fast React and Next.js frontends wired to Node.js services and a solid data layer.",
    points: ["Clean architecture", "Responsive and app-like", "SEO and performance"],
  },
  {
    title: "API development & integration",
    icon: "plug",
    blurb:
      "Scalable, secure, documented REST or GraphQL APIs. Payment gateways, auth and third-party services, integrated and tested.",
    points: ["JWT / OAuth security", "Swagger / Postman docs", "Optimised queries"],
  },
  {
    title: "Migration & optimisation",
    icon: "gauge",
    blurb:
      "Turn slow, ageing sites into modern, high-speed applications, with zero-downtime migrations and measurable gains.",
    points: ["Speed optimisation", "Zero-downtime moves", "Mobile refinement"],
  },
];

export interface Project {
  id: string;
  title: string;
  type: string; // category tag
  purpose: string; // কিসের জন্য বানানো
  own?: boolean; // নিজের প্রোডাক্ট (PKG IT-র ক্লায়েন্ট কাজ না)
  pinned?: boolean; // Overview-তে দেখাবে
  stack: string[];
  liveUrl: string;
  image: string; // live-preview screenshot (16:10)
}

export const PROJECTS: Project[] = [
  {
    id: "anwar-ispat",
    title: "Anwar Ispat",
    type: "Corporate · E-commerce",
    purpose:
      "Corporate brand site for one of Bangladesh's largest steel manufacturers: product catalogue, quote requests and a cinematic brand presence built to carry national traffic.",
    pinned: true,
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://www.anwarispat.com/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784677995/anwar-ispat_sxjfgl.png",
  },
  {
    id: "rainbow-paints",
    title: "Rainbow Paints",
    type: "Brand · E-commerce",
    purpose:
      "Brand site and online store for Rainbow Paints, an RFL Group company: products by category, 260 shades, a colour visualizer, a showroom finder and online ordering.",
    pinned: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Python", "Socket.IO", "Webhooks", "VPS"],
    liveUrl: "https://rainbowpaintsbd.com/",
    image: "/projects/rainbow-paints.jpg",
  },
  {
    id: "compressly",
    title: "Compressly",
    type: "Tools · Web App",
    purpose:
      "Free image compressor, resizer, AI background remover and PDF tools that run entirely in the browser. Files never leave the device.",
    own: true,
    pinned: true,
    stack: ["JavaScript", "Canvas API", "ONNX", "PDF.js"],
    liveUrl: "https://compresslyonline.blogspot.com/",
    image: "/projects/compressly.jpg",
  },
  {
    id: "joyblast",
    title: "JoyBlast Games",
    type: "Games",
    purpose:
      "Nine free casual browser games, from Traffic Rush to Planet Merge, that play instantly on phone, tablet and PC with no download.",
    own: true,
    pinned: true,
    stack: ["JavaScript", "HTML5 Canvas", "Vercel"],
    liveUrl: "https://joyblast-games.vercel.app/",
    image: "/projects/joyblast.jpg",
  },
  {
    id: "a1polymer",
    title: "A1 Polymer",
    type: "Corporate · E-commerce",
    purpose:
      "Corporate storefront for a polymer and plastics manufacturer: product catalogue, enquiries and online ordering in one place.",
    pinned: true,
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://a1polymer.com/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678050/a1polymer_dsjjtq.png",
  },
  {
    id: "hotel-glory",
    title: "Hotel The Glory",
    type: "Hospitality · Management",
    purpose:
      "Luxury hotel website for a Sylhet property, with a room showcase and an enquiry and booking flow that reads as premium hospitality.",
    stack: ["Next.js", "Node.js", "Tailwind CSS", "Booking flow"],
    liveUrl: "https://hotel-the-glory-web.vercel.app/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678219/hotel-glory_k1bngk.png",
  },
  {
    id: "property-lifts",
    title: "Property Lifts",
    type: "Portfolio · 3D",
    purpose:
      "Elevator-industry portfolio with an interactive 3D lift simulator and a polished product showcase.",
    pinned: true,
    stack: ["Next.js", "three.js", "Tailwind CSS"],
    liveUrl: "https://property-lifts-portfolio.vercel.app/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678248/property-lifts_jwxt2u.png",
  },
  {
    id: "velora",
    title: "Velora",
    type: "Fashion · E-commerce",
    purpose:
      "Premium fashion storefront with curated collections, dynamic filtering, interactive product showcases and a seamless cart.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://velora-ecommerce-hazel.vercel.app/",
    image: "/velora-preview.jpg",
  },
  {
    id: "saasdash",
    title: "SaaSdash",
    type: "SaaS · Admin Dashboard",
    purpose:
      "SaaS admin dashboard with authentication, real-time analytics widgets, responsive data tables and a clear UI architecture.",
    stack: ["React", "Next.js", "Tailwind CSS", "Dashboard"],
    liveUrl: "https://saasdash-react-template.vercel.app/",
    image: "/saasdash-preview.jpg",
  },
  {
    id: "caltex",
    title: "Caltex",
    type: "Brand · E-commerce",
    purpose:
      "Conversion-focused storefront for an automotive lubricant brand: fast catalogue, clean product pages and cart.",
    stack: ["Next.js", "React", "Tailwind CSS", "Commerce"],
    liveUrl: "https://caltex-demo.vercel.app/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678110/caltex_byaqgm.png",
  },
  {
    id: "ids-group",
    title: "IDS Group",
    type: "Corporate Portfolio",
    purpose:
      "Group-of-companies corporate site presenting divisions, services and contact under one unified brand identity.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ids-group-demo-web.vercel.app/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678156/ids-group_a3sg1c.png",
  },
  {
    id: "tel",
    title: "TEL",
    type: "Corporate Portfolio",
    purpose:
      "Clean, content-driven corporate presence for a technology enterprise, responsive and fast on every screen.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://tel-website-demo-pkgit.vercel.app/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678188/tel_wfux6y.png",
  },
  {
    id: "proton-mobile",
    title: "Proton Mobile",
    type: "E-commerce",
    purpose:
      "Online store for a mobile-phone retailer: product listings, cart and checkout, served from a self-managed server.",
    stack: ["React", "Node.js", "MySQL"],
    liveUrl: "http://163.227.239.38/",
    image:
      "https://res.cloudinary.com/dlddbdmqy/image/upload/v1784678274/proton-mobile_tjhjln.jpg",
  },
];

export interface BackendWork {
  projectId: string; // the public site this admin powers
  title: string;
  summary: string;
  features: string[];
  stack: string[];
  image: { src: string; width: number; height: number }; // admin screenshot, not linked (it's behind a login)
  blurred?: boolean; // client business figures blurred in the screenshot
}

/** Admin panels and backends behind client sites — proof of the backend side. */
export const BACKEND_WORK: BackendWork[] = [
  {
    projectId: "rainbow-paints",
    title: "Rainbow Paints content & leads admin",
    summary:
      "One admin for the whole business: a CMS for products, categories, 260 shades, finishes, showrooms, FAQs and pages, and a CRM for orders, leads, job applications, companies and contacts. New orders and leads arrive in real time, and the dashboard flags any that wait too long.",
    features: [
      "Orders and leads with wait-time alerts",
      "Real-time updates over Socket.IO",
      "Products, categories and 260 shades",
      "Finishes, documents and media",
      "Showrooms, FAQs and pages",
      "Job applications and activity log",
      "Companies and contacts",
      "Search everything with Ctrl K",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"],
    image: { src: "/projects/rainbow-paints-admin.jpg", width: 1600, height: 733 },
    blurred: true,
  },
  {
    projectId: "proton-mobile",
    title: "ProtonBD admin, CRM & analytics",
    summary:
      "The back office behind Proton's online phone store: a CRM and a CMS in one, with sales and traffic analytics, a real-time visitor view, and modules for products, orders, payments, customers, campaigns, SEO, blog and showrooms.",
    features: [
      "CRM and CMS dashboards",
      "Sales and traffic analytics",
      "Real-time visitors by device",
      "Date-range comparison",
      "Products, orders and payments",
      "Customers and campaigns",
      "SEO, blog and media library",
      "Showrooms, reports and alerts",
    ],
    stack: ["React", "Node.js", "MySQL"],
    image: { src: "/projects/proton-admin.jpg", width: 1600, height: 760 },
    blurred: true,
  },
  {
    projectId: "a1polymer",
    title: "A1 Polymer admin panel",
    summary:
      "The admin panel behind a1polymer.com. The team runs a 145-product catalogue across 10 categories and keeps sliders, news, awards, partners and promo banners up to date, with quotations, messages and analytics in the same place.",
    features: [
      "145 products, 10 categories",
      "Search and category filters",
      "Add, edit and delete products",
      "Hero sliders and promo banners",
      "News, awards and partners",
      "Quotations and messages",
      "Analytics",
      "Light and dark mode",
    ],
    stack: ["Next.js", "Node.js", "Tailwind CSS"],
    image: { src: "/projects/a1polymer-admin.jpg", width: 1600, height: 593 },
  },
  {
    projectId: "property-lifts",
    title: "Property Lifts admin & analytics",
    summary:
      "The admin behind the Property Lifts site. The team tracks traffic and live visitors, answers enquiries and feedback, and manages the catalogue, spare parts, the 2D and 3D lift designers, and every page section without touching code.",
    features: [
      "Traffic from 7 days to 12 months",
      "Live visitors and monthly trends",
      "Enquiries and feedback inbox",
      "Products, categories and spare parts",
      "2D and 3D lift designer settings",
      "Projects, journal and FAQs",
      "Gallery, brochures and media",
      "Every page section editable",
    ],
    stack: ["Next.js", "three.js", "Tailwind CSS"],
    image: { src: "/projects/property-lifts-admin.jpg", width: 1600, height: 692 },
    blurred: true,
  },
  {
    projectId: "anwar-ispat",
    title: "Anwar Ispat admin CMS",
    summary:
      "The custom admin panel behind anwarispat.com. The client's team updates the catalogue and site content themselves and handles quotation requests and messages in one place, without needing a developer.",
    features: [
      "Secure admin login",
      "Product catalogue",
      "Media & events",
      "Hero banner",
      "Mega projects",
      "Editable page text",
      "Quotation requests",
      "Contact messages",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    image: { src: "/projects/anwar-ispat-admin.jpg", width: 1600, height: 746 },
  },
];

export const hasAdmin = (projectId: string) => BACKEND_WORK.some((b) => b.projectId === projectId);

/** Project-type filters on the Projects page; each matches a substring of `type`. */
export const PROJECT_TYPES = ["E-commerce", "Corporate", "Hospitality", "3D", "SaaS", "Tools", "Games"];

/**
 * Dot colour per stack tag. `null` marks a tag that isn't a language or
 * framework (a feature or host) — it still shows on cards but is left out of
 * the sidebar's stack bar.
 */
export const STACK_COLORS: Record<string, string | null> = {
  "Next.js": "var(--ink)",
  React: "#61dafb",
  "Tailwind CSS": "#38bdf8",
  "Node.js": "#5fa04e",
  PostgreSQL: "#4f7fd6",
  "Framer Motion": "#e8489a",
  "three.js": "#a78bfa",
  MySQL: "#f29111",
  JavaScript: "#e9d44c",
  Python: "#3572a5",
  Commerce: null,
  "Booking flow": null,
  Dashboard: null,
  "Canvas API": null,
  ONNX: null,
  "PDF.js": null,
  "HTML5 Canvas": null,
  "Socket.IO": null,
  Webhooks: null,
  VPS: null,
  Vercel: null,
};

export const stackColor = (tag: string) => STACK_COLORS[tag] ?? "var(--muted)";

/** The personal story on the Overview page. Kept to what's public-appropriate. */
export const STORY = {
  quote: "I never had a straight path, so I learned to build my own.",
  paragraphs: [
    "When I was in class seven, my family hit hard times and we moved to Narsingdi so everyone could work. From then on I worked during the day and studied at night, and went to school mainly to sit my exams.",
    "Near the end of class nine I started teaching myself to code. There was no course and no mentor, only documentation, small projects and late nights. Training at the gym gave me the habit that kept it going: show up every day, even when progress is slow.",
    "Today I'm a full-stack developer at PKG IT. I build the websites, admin panels, CRMs and real-time dashboards behind brands like Rainbow Paints, Anwar Ispat and A1 Polymer.",
    "Next, I'm learning web application security, and I'm going back to finish my HSC.",
  ],
};

export interface Faq {
  q: string;
  a: string;
}

export const FAQ: Faq[] = [
  {
    q: "What kind of projects do you take on?",
    a: "Full-stack web apps, backend APIs, and performance or migration work. If it needs a reliable server, a clean frontend, or both, it's in scope.",
  },
  {
    q: "How do you usually work with a new client?",
    a: "You send me the problem, not a rigid spec, and I come back with an approach, a timeline and a fixed price. Every engagement ships with docs and a handover walkthrough.",
  },
  {
    q: "What's your typical turnaround?",
    a: "Small APIs and fixes land in days; full applications take two to six weeks depending on scope. You see progress continuously.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes 14 days of post-launch support, and ongoing retainers are available.",
  },
  {
    q: "Which technologies do you specialise in?",
    a: "React and Next.js on the frontend, Node.js and NestJS on the backend, PostgreSQL, MongoDB and Redis for data. TypeScript end to end.",
  },
  {
    q: "How can I get started?",
    a: "Use the contact form or email me directly. I usually reply within two hours on working days.",
  },
];

/** Sidebar "Track record": only numbers a visitor can verify on the site. */
export const STATS = [
  { value: String(PROFILE.codingSince), label: "Writing code since" },
  { value: String(PROFILE.since), label: `At ${PROFILE.company} since` },
  { value: String(PROJECTS.length), label: "Live projects" },
  { value: String(BACKEND_WORK.length), label: "Admin systems built" },
];
