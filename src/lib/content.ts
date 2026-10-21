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
      "Group expense splitting app with debt settlement and JWT auth.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    metrics: [
      "Sub-100ms queries via indexed Prisma",
      "Graph debt settlement algorithm",
    ],
    github: "https://github.com/AryanSri-235/Splitease",
    status: "open-source",
  },
  {
    title: "PulseStream",
    description:
      "Real-time event telemetry handling 500 to 10k+ events/sec.",
    tech: ["Next.js 16", "TypeScript", "Kafka", "Redis", "Tailwind CSS"],
    metrics: [
      "O(1) memory ring buffer at 60 FPS",
      "Kafka lag & p95 latency monitoring",
    ],
    github: "https://github.com/AryanSri-235",
    status: "open-source",
  },
  {
    title: "NPS Insurance",
    description:
      "Aggregator for 13 product lines & 31 IRDAI insurers.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "ISR"],
    metrics: [
      "Next.js ISR caching for fast SEO",
      "4-role RBAC policy dashboard",
    ],
    href: "https://npsinsurance.in/",
    status: "freelance",
    repoLabel: "Client / Commercial Repo",
  },
  {
    title: "Champions 11 (C11CL)",
    description:
      "Sports-tech platform serving 68k+ users across 23 states.",
    tech: ["Full Stack", "MySQL", "JavaScript", "Razorpay", "Cron", "REST APIs"],
    metrics: [
      "Automated Razorpay webhook & cron reconciliation",
      "Role-based CRM & anti-fraud auction",
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
    period: "June 2026 – Sept 2026",
    title: "Web Developer Intern · Champions 11",
    description:
      "Maintained platform for 68k+ users. Built payment reconciliation, CRM, and gated auctions.",
    current: true,
    ref: "HEAD -> main",
    refKind: "head",
  },
  {
    period: "July 2026",
    title: "Freelance Developer · NPS Insurance",
    description:
      "Shipped aggregator for 13 product lines & 31 insurers with ISR and 4-role RBAC.",
    ref: "origin/freelance",
    refKind: "remote",
  },
  {
    period: "2024 – 2028",
    title: "NIT Jalandhar · B.Tech ICE",
    description:
      "Undergraduate coursework in DSA, OS, DBMS, and System Design.",
    ref: "tag: b.tech",
    refKind: "tag",
  },
  {
    period: "Next",
    title: "Next Horizon · Engineering Roles",
    description:
      "Seeking full-stack and backend roles building scalable systems.",
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
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "Backend & Systems",
    items: ["Node.js", "Express.js", "REST APIs", "Kafka", "Redis"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "Prisma", "Drizzle", "MongoDB", "Vercel", "Git"],
  },
  {
    label: "Core",
    items: ["DSA", "System Design", "OOP", "DBMS"],
  },
];

export const aboutParagraphs = [
  "Full-stack engineer at NIT Jalandhar building resilient backend systems, high-throughput APIs, and clean web apps.",
  "Experienced in production platforms serving 68k+ users. Seeking ambitious engineering teams.",
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
