/* ==========================================================================
   SITE CONTENT — single source of truth for every section.
   Icons are referenced by string id and mapped to lucide components in the
   client nav, so this stays a plain data module.
   ========================================================================== */

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "services"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string; // lucide icon name, resolved in components/side-nav
}

export const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "layers" },
  { id: "projects", label: "Projects", icon: "boxes" },
  { id: "services", label: "Services", icon: "wrench" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export const PROFILE = {
  name: "Sabbir Hosen",
  role: "Full-Stack Software Engineer",
  availabilityBadge: "AVAILABLE FOR PROJECTS & REMOTE ROLES",
  location: "Dhaka, Bangladesh",
  email: "sabbircreators@gmail.com",
  phone: "+880 1959 250 836",
  available: true,
  intro:
    "Building scalable, production-ready web applications with Next.js, Node.js, Python and PostgreSQL — from idea to deployment.",
  socials: {
    github: "https://github.com/SabbirHossain-02",
    linkedin: "https://linkedin.com/in/sabbirhosen",
    fiverr: "https://fiverr.com/sabbirhosen",
  },
  cv: "/Sabbir_Hosen_CV.pdf",
  portrait: "/portrait.png",
  credibilityStats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "Full-Stack", label: "Development" },
  ],
};

export const ABOUT = {
  heading: "Engineering judgement, not just delivery.",
  intro:
    "I’m a Full-Stack Software Engineer focused on building reliable, scalable and user-friendly digital products.",
  philosophy: [
    {
      number: "01",
      title: "Build with purpose",
      text: "Every feature, architecture choice, and line of code is aligned with core user needs and tangible business value.",
    },
    {
      number: "02",
      title: "Write maintainable code",
      text: "Clean structure, typed contracts, and documented decisions so the codebase remains readable and easy to extend.",
    },
    {
      number: "03",
      title: "Ship production-ready products",
      text: "Thoroughly tested, secure, optimized for speed, and deployed smoothly with zero-downtime infrastructure.",
    },
  ],
  focusedOn: [
    "Full-Stack Web Applications",
    "Backend Architecture",
    "API Development",
    "Deployment & VPS",
    "Performance Optimization",
  ],
};

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full-Stack Software Engineer",
    company: "PKG IT",
    period: "2022 — Present",
    type: "Full-Time",
    responsibilities: [
      "Building production-ready web applications",
      "Developing REST APIs and backend systems",
      "Working with Next.js, React and Node.js",
      "PostgreSQL database design and query optimization",
      "VPS deployment and server management",
      "Performance and security optimization",
    ],
  },
  {
    role: "Software Engineering Scholar",
    company: "Daffodil International University",
    period: "2017 — 2021",
    type: "Education",
    responsibilities: [
      "B.Sc. in Computer Science & Engineering",
      "Focused on Algorithms, Software Architecture, and Database Systems",
      "Built multi-tier web projects and capstone backend services",
    ],
  },
];

export interface SkillCategory {
  category: string;
  icon: string;
  items: { name: string; level: "Production" | "Advanced" | "Proficient" }[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "monitor",
    items: [
      { name: "React", level: "Production" },
      { name: "Next.js", level: "Production" },
      { name: "JavaScript", level: "Production" },
      { name: "TypeScript", level: "Production" },
      { name: "HTML", level: "Production" },
      { name: "CSS", level: "Production" },
      { name: "Tailwind CSS", level: "Production" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: "Production" },
      { name: "Express.js", level: "Production" },
      { name: "Python", level: "Advanced" },
      { name: "REST API", level: "Production" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    items: [
      { name: "PostgreSQL", level: "Production" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
    ],
  },
  {
    category: "DevOps",
    icon: "boxes",
    items: [
      { name: "Linux", level: "Production" },
      { name: "VPS", level: "Production" },
      { name: "Docker", level: "Advanced" },
      { name: "Git", level: "Production" },
      { name: "GitHub", level: "Production" },
      { name: "Deployment", level: "Production" },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: "all" | "fullstack" | "backend" | "frontend" | "saas";
  typeLabel: string;
  blurb: string;
  stack: string[];
  image: string;
  href: string;
  github?: string;
  featured?: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    technology: string;
    result: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "saasdash",
    title: "SaaSdash — Admin Dashboard Platform",
    category: "saas",
    typeLabel: "SaaS · Admin Dashboard",
    blurb:
      "Enterprise SaaS admin template with real-time telemetry analytics, dynamic charts, dark mode, and authentication flows.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    image: "/saasdash-preview.jpg",
    href: "https://saasdash-react-template.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    featured: true,
    caseStudy: {
      problem:
        "Modern SaaS teams require high-performance, responsive admin analytics portals without UI lag or heavy bundle sizes.",
      solution:
        "Engineered a modular Next.js dashboard using server-rendered routes, optimized chart rendering, and glassmorphic UI components.",
      technology: "Next.js App Router, TypeScript, Tailwind CSS, Recharts.",
      result:
        "Instant page loads, 99+ Lighthouse performance score, and responsive layout across mobile and desktop viewports.",
    },
  },
  {
    id: "velora",
    title: "Velora — E-Commerce Platform",
    category: "fullstack",
    typeLabel: "Fashion · E-commerce",
    blurb:
      "Modern e-commerce platform featuring product filtering, cart management, checkout UI, and responsive product catalog.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    image: "/velora-preview.jpg",
    href: "https://velora-ecommerce-hazel.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    featured: true,
    caseStudy: {
      problem:
        "Fashion brands need visually immersive online stores that handle high product catalog volume without dropping frame rates.",
      solution:
        "Built a streamlined web storefront with fast image optimization, client cart persistence, and seamless checkout flows.",
      technology: "Next.js, JavaScript, Tailwind CSS, Vercel Edge Infra.",
      result:
        "Sub-second load times, fluid mobile shopping UX, and scalable product grid rendering.",
    },
  },
  {
    id: "vps-pipeline",
    title: "Automated VPS Deployment Pipeline",
    category: "backend",
    typeLabel: "DevOps · Infra",
    blurb:
      "Self-hosted automated deployment engine for Node.js & Python backend services on Linux VPS with Nginx & SSL.",
    stack: ["Linux", "VPS", "Docker", "Nginx", "Git", "Bash"],
    image: "/saasdash-preview.jpg",
    href: "https://github.com/SabbirHossain-02",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Manual server configuration led to deployment delays and environment drift between staging and production VPS.",
      solution:
        "Automated continuous integration shell scripts and Dockerized containers configured behind Nginx reverse proxy with SSL certbot auto-renew.",
      technology: "Linux Ubuntu, Nginx, Docker, Git Hooks, Let's Encrypt.",
      result:
        "Zero-downtime service upgrades, 99.9% server uptime, and automated rollbacks.",
    },
  },
  {
    id: "rest-api-gateway",
    title: "High-Throughput REST API Gateway",
    category: "backend",
    typeLabel: "Backend · API",
    blurb:
      "Secure REST API engine built with Node.js & PostgreSQL, featuring JWT authentication, rate limiting, and Postman docs.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger"],
    image: "/velora-preview.jpg",
    href: "https://github.com/SabbirHossain-02",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Third-party integrations required strict rate limiting, verified JWT tokens, and structured JSON contracts.",
      solution:
        "Designed an Express.js API gateway with middleware validation, indexed PostgreSQL queries, and OpenAPI documentation.",
      technology: "Node.js, PostgreSQL, Express, Redis caching.",
      result:
        "Handled 5,000+ API requests per minute with sub-50ms query response times.",
    },
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
    title: "Full-Stack Web Development",
    icon: "code",
    blurb:
      "End-to-end web applications built to your exact business rules — fast React/Next.js frontends wired to robust backend services.",
    points: ["Clean architecture", "Responsive & app-like", "SEO & performance"],
  },
  {
    title: "Custom SaaS Development",
    icon: "boxes",
    blurb:
      "Multi-tenant SaaS platforms, admin telemetry dashboards, subscription billing, and scalable database schemas.",
    points: ["Multi-tenant architecture", "Role-based auth", "Real-time charts"],
  },
  {
    title: "Backend & API Development",
    icon: "plug",
    blurb:
      "Scalable, secure, documented REST or GraphQL APIs. Auth, payment gateways, and third-party integrations tested under load.",
    points: ["JWT / OAuth security", "Swagger / Postman docs", "Optimised queries"],
  },
  {
    title: "Database Architecture",
    icon: "database",
    blurb:
      "Efficient PostgreSQL/MongoDB schema design, data indexing, migration scripts, and query performance tuning.",
    points: ["Relational & NoSQL", "Query indexing", "Data migration"],
  },
  {
    title: "Business Website Development",
    icon: "monitor",
    blurb:
      "Modern, high-conversion business websites tailored to elevate brand credibility across mobile and desktop screens.",
    points: ["High-conversion UX", "Speed optimization", "Mobile refinement"],
  },
  {
    title: "VPS Deployment & Maintenance",
    icon: "server",
    blurb:
      "Production server setups with Linux, Nginx, Docker, SSL security, CI/CD automation, and 99.9% uptime monitoring.",
    points: ["Linux VPS management", "Nginx & SSL", "CI/CD & back-ups"],
  },
];

export const MARQUEE_TECH = [
  { name: "Next.js", icon: "code" },
  { name: "React", icon: "monitor" },
  { name: "Node.js", icon: "server" },
  { name: "Python", icon: "wrench" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Docker", icon: "boxes" },
  { name: "Git", icon: "plug" },
  { name: "Linux", icon: "server" },
];
