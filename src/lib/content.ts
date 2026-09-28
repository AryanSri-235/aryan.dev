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
      "Group expense splitting app with debt simplification algorithms and secure JWT auth.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    metrics: [
      "Sub-100ms queries via indexed Prisma models",
      "Automated debt simplification algorithm",
    ],
    github: "https://github.com/AryanSri-235/Splitease",
    status: "open-source",
  },
  {
    title: "NPS Insurance",
    description:
      "Multi-provider insurance aggregator spanning 13 product lines and 31 IRDAI insurers.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "ISR"],
    metrics: [
      "App Router ISR caching for fast dynamic SEO pages",
      "4-role RBAC dashboard for policies and leads",
    ],
    href: "https://npsinsurance.in/",
    status: "freelance",
    repoLabel: "Client / Commercial Repo",
  },
  {
    title: "Champions 11 (C11CL)",
    description:
      "Sports-tech trial platform serving 68,000+ registrations across 23 states.",
    tech: ["Full Stack", "MySQL", "JavaScript", "Razorpay", "Cron", "REST APIs"],
    metrics: [
      "Razorpay webhook & cron pipeline auto-resolving dropped payments",
      "Role-based CRM with bulk lead routing & anti-fraud auction",
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
    title: "Web Developer Intern · Champions 11 (C11CL)",
    description:
      "Maintained production platform for 68k+ users. Built automated Razorpay reconciliation, role-based CRM, and gated auction engine.",
    current: true,
    ref: "HEAD -> main",
    refKind: "head",
  },
  {
    period: "July 2026",
    title: "Freelance Web Developer · NPS Insurance",
    description:
      "Shipped aggregator for 13 product lines & 31 IRDAI insurers. Built ISR-cached Next.js pages and 4-role RBAC admin panel.",
    ref: "origin/freelance",
    refKind: "remote",
  },
  {
    period: "2024 – 2028",
    title: "NIT Jalandhar · B.Tech in ICE",
    description:
      "B.Tech undergraduate. Focus on Data Structures & Algorithms, OS, DBMS, and System Design.",
    ref: "tag: b.tech",
    refKind: "tag",
  },
  {
    period: "Next",
    title: "Next Horizon · High-Impact Engineering Roles",
    description:
      "Seeking full-stack and backend engineering roles building scalable distributed systems.",
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
    items: ["Node.js", "Express.js", "REST API Design", "Webhooks & Cron Jobs", "JWT / Session Auth"],
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "Prisma ORM", "Drizzle ORM", "MongoDB", "Mongoose", "MySQL"],
  },
  {
    label: "Cloud, Tools & Payments",
    items: ["Vercel", "Cloudflare (CDN / DNS)", "Git & GitHub", "GitHub Actions CI/CD", "Razorpay", "Postman", "Firebase"],
  },
  {
    label: "Problem Solving & Core",
    items: ["Data Structures & Algorithms", "System & API Design", "OOP", "Database Design"],
  },
];

export const aboutParagraphs = [
  "Full-stack developer and undergraduate at NIT Jalandhar. Focused on building reliable backend architectures, performant APIs, and clean web interfaces.",
  "Experienced in shipping production systems at scale — from managing platforms with 68k+ users to architecting database schemas. Seeking ambitious engineering teams.",
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
