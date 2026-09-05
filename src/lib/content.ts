import { siteConfig } from "@/lib/site";

export type NavLink = {
  label: string;
  href: string;
  hidden?: boolean;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Resume", href: siteConfig.resume, external: true },
];

export type BootLine = {
  text: string;
  ms: string;
};

export const bootLines: BootLine[] = [
  { text: "resolving stack — next, typescript, postgres, node", ms: "128ms" },
  { text: "indexing production builds & 68k+ scale telemetry", ms: "244ms" },
  { text: `connecting github.com/${siteConfig.githubUser}`, ms: "88ms" },
  { text: "ready — aryan srivastava", ms: "0.4s" },
];

export const BOOT_STEP_MS = 650;
export const BOOT_TOTAL_MS = 3000;

export const marqueeItems = [
  "Next.js 14 + TypeScript",
  "68,000+ Users Handled",
  "Full Stack Engineering",
  "Prisma & PostgreSQL",
  "Razorpay & Webhook Automation",
  "NIT Jalandhar",
  "REST APIs & System Design",
  "Production-Tested Architecture",
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  metrics?: string[];
  href?: string;
  github?: string;
  status?: string;
  repoLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Splitease",
    description:
      "Group expense splitting web application featuring automated debt settlement algorithms, real-time balance calculations, and secure JWT authentication.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    metrics: [
      "Real-time expense settlement and graph simplification",
      "Sub-100ms database queries via indexed Prisma models",
      "Secure JWT auth with protected API routes",
    ],
    href: "https://gravity-eight-green.vercel.app/",
    github: "https://github.com/AryanSri-235/Splitease",
    status: "live",
  },
  {
    title: "NPS Insurance",
    description:
      "Enterprise multi-provider insurance aggregator built as a freelance project, spanning 13 product lines and 31 IRDAI-registered insurers with dynamic SEO and a 4-role admin dashboard.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "ISR"],
    metrics: [
      "13 product lines & 31 IRDAI-registered insurance providers",
      "App Router ISR caching for high-speed dynamic SEO pages",
      "4-role RBAC admin dashboard for policy and lead management",
    ],
    href: "https://npsinsurance.in/",
    status: "freelance",
    repoLabel: "Client / Commercial Repo",
  },
  {
    title: "Champions 11 (C11CL)",
    description:
      "Sports-tech trial platform for nationwide cricket selections with 68,000+ registrations. As a Web Developer Intern, contributed core modules including automated payment webhooks, role-based CRM workflows, and an anti-fraud auction system.",
    tech: ["Full Stack", "MySQL", "JavaScript", "Razorpay", "Cron", "REST APIs"],
    metrics: [
      "Engineered Razorpay webhook & cron reconciliation to auto-resolve dropped payments",
      "Built role-based CRM for single/bulk lead assignment and referral ownership",
      "Developed gated auction module with rate limiting, verification checks, and image compression",
    ],
    href: "https://c11cl.com/",
    status: "internship",
    repoLabel: "Company / Internship Repo",
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  current?: boolean;
  ref: string;
  refKind: "head" | "tag" | "remote";
};

export const timeline: TimelineEntry[] = [
  {
    period: "June 2026",
    title: "Web Developer Intern · Champions 11 (C11CL)",
    description:
      "Contributed to live platform handling 68,000+ trial registrations across 23 states. Integrated Razorpay webhooks & cron reconciliation to auto-resolve failed payments. Developed role-based CRM (single/bulk lead assignment, referral auto-ownership) and a gated auction module with rate limiting and image compression.",
    current: true,
    ref: "HEAD -> main",
    refKind: "head",
  },
  {
    period: "July 2026",
    title: "Freelance Web Developer · NPS Insurance",
    description:
      "Designed and delivered a multi-provider insurance aggregator covering 13 product lines and 31 IRDAI-registered insurers. Built dynamic Next.js App Router pages with ISR caching and SEO, backed by PostgreSQL and Prisma with a 4-role data-scoped admin panel.",
    ref: "origin/freelance",
    refKind: "remote",
  },
  {
    period: "2024 – 2028",
    title: "NIT Jalandhar · B.Tech in ICE",
    description:
      "Bachelor of Technology at National Institute of Technology, Jalandhar. Strong foundation in Data Structures & Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Design.",
    ref: "tag: b.tech",
    refKind: "tag",
  },
  {
    period: "Next",
    title: "Next Horizon · High-Impact Engineering Roles",
    description:
      "Seeking ambitious engineering teams building high-scale distributed platforms, resilient backend services, and modern web applications with applied AI.",
    ref: "origin/next",
    refKind: "remote",
  },
];

export function shortHash(input: string) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, "0").slice(0, 7);
}

export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "Python", "C++", "PHP"],
  },
  {
    label: "Frontend",
    items: ["Next.js (App Router)", "React.js", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST API Design", "JWT / Session Auth"],
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "Prisma ORM", "Drizzle ORM", "MongoDB", "MySQL"],
  },
  {
    label: "Cloud, Tools & Payments",
    items: ["Vercel", "Git & GitHub", "GitHub Actions CI/CD", "Razorpay", "Postman", "Firebase"],
  },
  {
    label: "Problem Solving & Core",
    items: ["Data Structures & Algorithms", "System & API Design", "OOP", "Database Design"],
  },
];

export const aboutParagraphs = [
  "Hey! I'm Aryan — a full-stack developer and undergraduate at NIT Jalandhar. My curiosity with computers started early: the idea that a couple of keystrokes and clear logic could be translated into software used by thousands of people still fascinates me every single day.",
  "As an engineer, I care deeply about the craft. I believe great software sits at the intersection of robust engineering and thoughtful user experience. I don't just like writing code to get things done — I genuinely enjoy understanding how systems work beneath the hood, whether that's tuning database queries, architecting resilient backend services, or refining the small details that make an interface feel responsive and natural.",
  "What I want to do: I'm looking to join ambitious, high-standards engineering teams building impactful products. I'm eager to solve tough challenges in distributed web systems, explore applied AI, and learn alongside seasoned mentors while building reliable tools that make people's lives easier.",
];

export const aboutBio = aboutParagraphs.join(" ");

export const focusAreas = [
  "Distributed Systems & Scalability",
  "Applied AI & Developer Tooling",
  "High-Throughput APIs",
  "Clean Architecture & UX",
];

export const aboutLinks = [
  {
    label: "GitHub",
    handle: `@${siteConfig.githubUser}`,
    href: siteConfig.github,
  },
  {
    label: "LinkedIn",
    handle: siteConfig.linkedinHandle,
    href: siteConfig.linkedin,
  },
  {
    label: "X (Twitter)",
    handle: siteConfig.xHandle,
    href: siteConfig.x,
  },
  {
    label: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Resume (PDF)",
    handle: "Download PDF ↗",
    href: siteConfig.resume,
  },
];
