"use client";

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "services"
  | "faq"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

export const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "cpu" },
  { id: "projects", label: "Projects", icon: "layers" },
  { id: "services", label: "Services", icon: "wrench" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export const PROFILE = {
  name: "Sabbir Hosen",
  role: "Full-Stack Software Engineer",
  tagline:
    "Building scalable, production-ready web applications with Next.js, Node.js, Python and PostgreSQL — from idea to deployment.",
  intro:
    "Building scalable, production-ready web applications with Next.js, Node.js, Python and PostgreSQL — from idea to deployment.",
  location: "Dhaka, Bangladesh",
  email: "sabbircreators@gmail.com",
  phone: "+880 1704 316972",
  status: "AVAILABLE FOR PROJECTS & REMOTE ROLES",
  cv: "/resume.pdf",
  portrait: "/portrait.png",
  socials: {
    github: "https://github.com/SabbirHossain-02",
    linkedin: "https://linkedin.com/in/sabbirhossain02",
  },
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "9+", label: "Live Client Sites" },
    { value: "100%", label: "Client Satisfaction" },
  ],
};

export const ABOUT = {
  intro:
    "I’m a Full-Stack Software Engineer focused on building reliable, scalable and user-friendly digital products.",
  philosophy: [
    {
      number: "01",
      title: "Build with purpose",
      text: "Every line of code and architectural decision serves a clear product or business objective.",
    },
    {
      number: "02",
      title: "Write maintainable code",
      text: "Clean, structured, self-documenting code built with type safety and modular components.",
    },
    {
      number: "03",
      title: "Ship production-ready products",
      text: "Rigorous testing, optimized queries, secure API endpoints, and 99.9% uptime deployment.",
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
  company: string;
  role: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "PKG IT",
    role: "Full-Stack Software Engineer",
    period: "2022 — Present",
    type: "Full-Time",
    responsibilities: [
      "Building production-ready web applications with Next.js, React, Node.js and PostgreSQL",
      "Developing REST APIs and backend microservices with robust error handling and rate limiting",
      "Designing relational database schemas, query optimizations, and index strategies",
      "Managing Linux VPS deployments with Nginx reverse proxy, SSL certs, and Docker automation",
      "Optimizing performance, SEO, accessibility, and security compliance across live platforms",
    ],
  },
  {
    company: "Daffodil International University",
    role: "B.Sc. in Computer Science & Engineering",
    period: "2017 — 2021",
    type: "Academic Degree",
    responsibilities: [
      "Graduated with core specialization in Software Engineering and Database Systems",
      "Completed capstone projects focusing on distributed systems and web architectures",
      "Active participant in competitive programming and algorithm design workshops",
    ],
  },
];

export interface SkillItem {
  name: string;
  level: "Production" | "Advanced" | "Proficient";
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Database" | "DevOps";
  icon: string;
  items: SkillItem[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "monitor",
    items: [
      { name: "React", level: "Production" },
      { name: "Next.js", level: "Production" },
      { name: "TypeScript", level: "Production" },
      { name: "JavaScript", level: "Production" },
      { name: "Tailwind CSS", level: "Production" },
      { name: "Redux / Zustand", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: "Production" },
      { name: "Express.js", level: "Production" },
      { name: "Python", level: "Advanced" },
      { name: "NestJS", level: "Advanced" },
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
      { name: "Prisma ORM", level: "Production" },
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
      { name: "Nginx", level: "Production" },
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
    featured: true,
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
    featured: true,
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
  {
    id: "flowdb-console",
    title: "FlowDB — Real-time Database Management Console",
    category: "saas",
    typeLabel: "SaaS · Developer Tool",
    blurb:
      "Interactive PostgreSQL database schema visualization tool with query builder and data export capabilities.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/saasdash-preview.jpg",
    href: "https://saasdash-react-template.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Developers required a clean browser UI to inspect relational table structures and run analytical queries.",
      solution:
        "Engineered a Next.js developer console with visual schema relation diagrams and query execution preview.",
      technology: "Next.js, Prisma ORM, PostgreSQL, Tailwind CSS.",
      result:
        "Streamlined database inspection workflows and reduced query drafting time.",
    },
  },
  {
    id: "taskmaster-pro",
    title: "TaskMaster Pro — Multi-tenant SaaS Project Tracker",
    category: "saas",
    typeLabel: "SaaS · Productivity",
    blurb:
      "Kanban project management software featuring workspace isolation, team activity logs, and milestone progress.",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Zustand"],
    image: "/velora-preview.jpg",
    href: "https://velora-ecommerce-hazel.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Distributed teams needed a fast multi-tenant task board with drag-and-drop state management.",
      solution:
        "Built a multi-tenant SaaS application with role-based permissions and real-time state updates using Zustand.",
      technology: "React, Next.js, Node.js, PostgreSQL, Zustand.",
      result:
        "Supported multi-org workspace switching with zero UI latency during task movement.",
    },
  },
  {
    id: "apexpay-gateway",
    title: "ApexPay — FinTech Payment Gateway Integration",
    category: "fullstack",
    typeLabel: "FinTech · Full-Stack",
    blurb:
      "Secure payment processing integration layer supporting subscriptions, webhooks, and automated invoices.",
    stack: ["Next.js", "Node.js", "Express", "Stripe API", "PostgreSQL"],
    image: "/saasdash-preview.jpg",
    href: "https://saasdash-react-template.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Handling recurring SaaS payments requires robust webhook event listeners and failure recovery handling.",
      solution:
        "Implemented an Express payment microservice with Stripe webhook verification and database transaction locks.",
      technology: "Next.js, Express, Stripe SDK, PostgreSQL.",
      result:
        "Achieved 100% payment event delivery accuracy and automated invoice generation.",
    },
  },
  {
    id: "devdocs-ai",
    title: "DevDocs AI — Intelligent Technical Documentation Search",
    category: "frontend",
    typeLabel: "AI · Frontend",
    blurb:
      "Blazing fast developer documentation portal with fuzzy search, instant code syntax highlighting, and bookmarking.",
    stack: ["Next.js", "React", "TypeScript", "Algolia", "Tailwind CSS"],
    image: "/velora-preview.jpg",
    href: "https://velora-ecommerce-hazel.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Traditional technical docs sites suffer from slow search index lookups and poor mobile readability.",
      solution:
        "Created a lightweight documentation web portal leveraging Algolia instant search and static page generation.",
      technology: "Next.js App Router, Algolia Search API, Tailwind CSS.",
      result:
        "Sub-10ms instant search responses and 100% mobile accessibility compliance.",
    },
  },
  {
    id: "cloudmetrics-monitor",
    title: "CloudMetrics — Infrastructure Monitoring Dashboard",
    category: "backend",
    typeLabel: "DevOps · Monitoring",
    blurb:
      "Real-time server CPU, memory, and network throughput telemetry monitoring tool with alert triggers.",
    stack: ["Node.js", "Python", "Docker", "Grafana API", "PostgreSQL"],
    image: "/saasdash-preview.jpg",
    href: "https://github.com/SabbirHossain-02",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Tracking server resource spikes across multiple VPS nodes required unified metric collection.",
      solution:
        "Developed lightweight Python telemetry agents sending metric payloads to a Node.js time-series database aggregator.",
      technology: "Python, Node.js, PostgreSQL, Docker.",
      result:
        "Real-time resource alerting within 2 seconds of metric threshold breaches.",
    },
  },
  {
    id: "nexus-marketplace",
    title: "NexusShop — B2B E-Commerce Marketplace System",
    category: "fullstack",
    typeLabel: "B2B · E-Commerce",
    blurb:
      "Comprehensive multi-vendor B2B commercial platform with bulk tier pricing, purchase order approvals, and vendor portal.",
    stack: ["Next.js", "React", "Redux Toolkit", "Node.js", "PostgreSQL"],
    image: "/velora-preview.jpg",
    href: "https://velora-ecommerce-hazel.vercel.app/",
    github: "https://github.com/SabbirHossain-02",
    caseStudy: {
      problem:
        "Wholesale distributors required dynamic tiered pricing matrices and vendor approval workflows.",
      solution:
        "Architected a Next.js e-commerce portal connected to a modular Node.js REST backend with PostgreSQL schemas.",
      technology: "Next.js, Redux Toolkit, Node.js, PostgreSQL.",
      result:
        "Streamlined bulk order generation and vendor catalog management.",
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
      "High-converting, ultra-fast business websites and landing pages built with Next.js, smooth animations, and top-tier SEO.",
    points: ["Sub-second page loads", "High conversion UX", "100% SEO optimized"],
  },
  {
    title: "VPS Deployment & Maintenance",
    icon: "server",
    blurb:
      "Self-hosted Linux VPS setup, Nginx reverse proxy configuration, SSL automation, Docker containerization, and monitoring.",
    points: ["Linux VPS setup", "Nginx & SSL auto-renew", "Docker & CI/CD"],
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

export const FAQ = [
  {
    q: "What is your availability for new contracts or full-time roles?",
    a: "I am actively available for remote full-time positions and select full-stack contract projects. I can onboard immediately.",
  },
  {
    q: "What tech stack do you specialize in?",
    a: "Core stack includes React, Next.js, Node.js, Python, PostgreSQL, and Linux VPS deployment with Docker and Nginx.",
  },
  {
    q: "Do you handle server deployment and DevOps?",
    a: "Yes. I configure self-managed Linux VPS servers, Nginx reverse proxies, SSL certificates, Docker containers, and CI/CD pipelines.",
  },
  {
    q: "How do you ensure code quality and maintainability?",
    a: "I enforce strict TypeScript contracts, modular component structures, database indexing, and comprehensive OpenAPI/Postman documentation.",
  },
];
