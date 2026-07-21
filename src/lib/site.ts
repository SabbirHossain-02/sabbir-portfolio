/* ==========================================================================
   SITE CONTENT — single source of truth for every section.
   Icons are referenced by string id and mapped to lucide components in the
   client nav, so this stays a plain data module.
   ========================================================================== */

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "services"
  | "projects"
  | "faq"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string; // lucide icon name, resolved in components/nav
}

export const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "layers" },
  { id: "services", label: "Services", icon: "wrench" },
  { id: "projects", label: "Projects", icon: "boxes" },
  { id: "faq", label: "FAQ", icon: "help" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export const PROFILE = {
  name: "Sabbir Hosen",
  role: "Full-Stack Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "sabbircreators@gmail.com",
  phone: "+880 1959 250 836",
  available: true,
  tagline:
    "I build backend services, APIs and app-like interfaces that stay fast while they grow.",
  intro:
    "Full-stack developer at PKG IT since 2022 — building complete web apps with Node.js, Next.js and Python, and deploying them on self-managed VPS servers.",
  socials: {
    github: "https://github.com/SabbirHossain-02",
    linkedin: "https://linkedin.com/in/sabbirhosen",
    fiverr: "https://fiverr.com/sabbirhosen",
  },
  cv: "/Sabbir_Hosen_CV.pdf",
  portrait: "/portrait.png",
};

export const STATS = [
  { value: "50+", label: "Systems shipped" },
  { value: "3 yrs", label: "In production" },
  { value: "5.0", label: "Fiverr rating" },
  { value: "99.9%", label: "Uptime kept" },
];

export const ABOUT = {
  heading: "Engineering judgement, not just delivery.",
  body: [
    "I'm a full-stack developer focused on systems that hold up after launch. Three years in, across freelance contracts and product teams, I've learned that the hard part isn't shipping — it's shipping something the client can still maintain a year later.",
    "I write clean, modular code, index my databases, secure my endpoints, and treat mobile as a first-class target. The goal is always the same: an app that feels snappy, stays reliable under load, and reads clearly to the next engineer.",
  ],
  highlights: [
    {
      title: "Clean, handover-ready code",
      text: "Standard structure, typed contracts, documented decisions — no black boxes left behind.",
    },
    {
      title: "App-like on every screen",
      text: "Responsive layouts that behave like native apps, with real attention to touch and motion.",
    },
    {
      title: "Measured performance",
      text: "Caching, query tuning and profiling — improvements you can see in the numbers, not just claims.",
    },
  ],
  timeline: [
    {
      when: "2022 — Present",
      title: "Full Stack Developer · PKG IT",
      text: "Build & maintain full-stack web apps with Node.js, Next.js and PostgreSQL, and deploy production infra on VPS with Nginx & CI/CD.",
    },
    {
      when: "2017 — 2021",
      title: "B.Sc. in Computer Science & Engineering",
      text: "Daffodil International University, Dhaka.",
    },
  ],
};

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: "monitor",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & Systems",
    icon: "server",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST & GraphQL",
      "JWT / OAuth",
      "WebSockets",
    ],
  },
  {
    title: "Data & DevOps",
    icon: "database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Nginx",
      "CI/CD",
    ],
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
    title: "Full-Stack Application Development",
    icon: "code",
    blurb:
      "End-to-end web apps tailored to your business rules — fast React/Next.js frontends wired to Node.js services and a solid data layer.",
    points: ["Clean architecture", "Responsive & app-like", "SEO & performance"],
  },
  {
    title: "API Development & Integration",
    icon: "plug",
    blurb:
      "Scalable, secure, documented REST or GraphQL APIs. Payment gateways, auth, third-party services — integrated and tested.",
    points: ["JWT / OAuth security", "Swagger / Postman docs", "Optimised queries"],
  },
  {
    title: "Migration & Optimisation",
    icon: "gauge",
    blurb:
      "Turn slow, ageing sites into modern, high-speed applications — with zero-downtime migrations and measurable gains.",
    points: ["Speed optimisation", "Zero-downtime moves", "Mobile refinement"],
  },
];

export interface Project {
  id: string;
  title: string;
  type: string; // category tag
  purpose: string; // কিসের জন্য বানানো
  builtBy: string; // কারা বানাইলো
  stack: string[];
  liveUrl: string;
  image: string | null; // live-preview screenshot, null → branded placeholder
  accent: string; // hex tint for the placeholder / glow
}

const BUILT = "Sabbir Hosen · PKGIT";

export const PROJECTS: Project[] = [
  {
    id: "anwar-ispat",
    title: "Anwar Ispat",
    type: "Corporate · E-commerce",
    purpose:
      "The corporate brand site for Anwar Ispat — one of Bangladesh's largest steel manufacturers. Product catalogue, quote requests and a cinematic, high-end brand presence built to carry a national brand's traffic.",
    builtBy: BUILT,
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://www.anwarispat.com/",
    image: "/projects/anwar-ispat.png",
    accent: "#e11d48",
  },
  {
    id: "a1polymer",
    title: "A1 Polymer",
    type: "Corporate · E-commerce",
    purpose:
      "Corporate storefront for a polymer & plastics manufacturer — product catalogue, enquiries and online ordering in one place.",
    builtBy: BUILT,
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://a1polymer.com/",
    image: "/projects/a1polymer.png",
    accent: "#4d8bff",
  },
  {
    id: "caltex",
    title: "Caltex",
    type: "Brand · E-commerce",
    purpose:
      "A conversion-focused product storefront for an automotive/lubricant brand — fast catalogue, clean product pages and cart.",
    builtBy: BUILT,
    stack: ["Next.js", "React", "Tailwind CSS", "Commerce"],
    liveUrl: "https://caltex-demo.vercel.app/",
    image: "/projects/caltex.png",
    accent: "#38bdf8",
  },
  {
    id: "ids-group",
    title: "IDS Group",
    type: "Corporate Portfolio",
    purpose:
      "A group-of-companies corporate site presenting divisions, services and contact under one unified brand identity.",
    builtBy: BUILT,
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ids-group-demo-web.vercel.app/",
    image: "/projects/ids-group.png",
    accent: "#7c8cff",
  },
  {
    id: "tel",
    title: "TEL",
    type: "Corporate Portfolio",
    purpose:
      "A clean, content-driven corporate web presence for a technology enterprise — responsive and fast on every screen.",
    builtBy: BUILT,
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://tel-website-demo-pkgit.vercel.app/",
    image: "/projects/tel.png",
    accent: "#5b8cff",
  },
  {
    id: "hotel-glory",
    title: "Hotel The Glory",
    type: "Hospitality · Management",
    purpose:
      "A luxury hotel website for a Sylhet property with room showcase and an enquiry/booking flow that reads as premium hospitality.",
    builtBy: BUILT,
    stack: ["Next.js", "Node.js", "Tailwind CSS", "Booking flow"],
    liveUrl: "https://hotel-the-glory-web.vercel.app/",
    image: "/projects/hotel-glory.png",
    accent: "#22c55e",
  },
  {
    id: "property-lifts",
    title: "Property Lifts",
    type: "Portfolio · 3D",
    purpose:
      "An elevator-industry portfolio featuring an interactive 3D lift simulator and a polished product showcase.",
    builtBy: BUILT,
    stack: ["Next.js", "three.js", "Tailwind CSS"],
    liveUrl: "https://property-lifts-portfolio.vercel.app/",
    image: "/projects/property-lifts.png",
    accent: "#f59e0b",
  },
  {
    id: "proton-mobile",
    title: "Proton Mobile",
    type: "E-commerce",
    purpose:
      "An online store for a mobile-phone retailer — product listings, cart and checkout, served from a self-managed server.",
    builtBy: BUILT,
    stack: ["React", "Node.js", "MySQL"],
    liveUrl: "http://163.227.239.38/",
    image: "/projects/proton-mobile.png",
    accent: "#22c55e",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQ: Faq[] = [
  {
    q: "What kind of projects do you take on?",
    a: "Full-stack web apps, backend APIs, and performance/migration work. If it needs a reliable server, a clean frontend, or both, it's in scope.",
  },
  {
    q: "How do you usually work with a new client?",
    a: "You send me the problem — not a rigid spec — and I come back with an approach, a timeline and a fixed number. Every engagement ships with docs and a handover walkthrough.",
  },
  {
    q: "What's your typical turnaround?",
    a: "Small APIs and fixes land in days; full applications run two to six weeks depending on scope. I share progress continuously, never a silent black box.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes — every project includes 14 days of post-launch support, and I'm available for ongoing retainers if you want a long-term engineering partner.",
  },
  {
    q: "Which technologies do you specialise in?",
    a: "React and Next.js on the frontend; Node.js and NestJS on the backend; PostgreSQL, MongoDB and Redis for data. TypeScript end to end.",
  },
  {
    q: "How can I get started?",
    a: "Use the contact form or email me directly. I usually reply within two hours during working days.",
  },
];
