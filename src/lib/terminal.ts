import { projects, shortHash, stack, timeline } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { getTheme, toggleTheme } from "@/lib/theme";

export type Tone = "default" | "muted" | "brand" | "warn";

export type Line = {
  text: string;
  tone?: Tone;
  href?: string;
};

export type CommandResult = {
  lines?: Line[];
  clear?: boolean;
};

type Command = {
  hint: string;
  exec: () => CommandResult;
};

const slug = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

const col = (value: string, width: number) => value.padEnd(width, " ");

export const COMMANDS: Record<string, Command> = {
  help: {
    hint: "list the available commands",
    exec: () => ({
      lines: [
        { text: "available commands", tone: "muted" },
        ...Object.entries(COMMANDS).map(([name, command]) => ({
          text: `  ${col(name, 13)}${command.hint}`,
        })),
      ],
    }),
  },

  whoami: {
    hint: "who i am & credentials",
    exec: () => ({
      lines: [
        { text: slug(siteConfig.name), tone: "brand" },
        {
          text: `${siteConfig.role.toLowerCase()} · ${siteConfig.school.toLowerCase()}`,
          tone: "muted",
        },
        {
          text: "live production scale: 68,000+ users across 23 states",
          tone: "brand",
        },
        {
          text: "status: available for new challenges · 2026",
          tone: "default",
        },
      ],
    }),
  },

  resume: {
    hint: "view & download resume (pdf)",
    exec: () => {
      if (typeof window !== "undefined") {
        window.open(siteConfig.resume, "_blank", "noopener,noreferrer");
      }
      return {
        lines: [
          { text: "opening resume...", tone: "brand" },
          { text: `  ${siteConfig.resume} ↗`, href: siteConfig.resume },
        ],
      };
    },
  },

  email: {
    hint: "get direct email address",
    exec: () => ({
      lines: [
        {
          text: `  email: ${siteConfig.email}`,
          href: `mailto:${siteConfig.email}`,
          tone: "brand",
        },
      ],
    }),
  },

  projects: {
    hint: "featured work & github repos",
    exec: () => ({
      lines: projects.map((project) => ({
        text: `  ${col(slug(project.title), 18)}${col(
          project.tech.slice(0, 3).join(" · ").toLowerCase(),
          28
        )}${project.status ?? "case study"}`,
      })),
    }),
  },

  stack: {
    hint: "languages, frameworks, tools",
    exec: () => ({
      lines: stack.map((group) => ({
        text: `  ${col(slug(group.label), 22)}${group.items
          .join(", ")
          .toLowerCase()}`,
      })),
    }),
  },

  experience: {
    hint: "production roles & education",
    exec: () => ({
      lines: timeline.map((entry) => ({
        text: `  ${shortHash(entry.title)}  ${col(
          `(${entry.ref})`,
          18
        )}${entry.title.toLowerCase()}`,
      })),
    }),
  },

  contact: {
    hint: "how to reach me",
    exec: () => ({
      lines: [
        {
          text: `  ${col("email", 12)}${siteConfig.email}`,
          href: `mailto:${siteConfig.email}`,
          tone: "brand",
        },
        {
          text: `  ${col("github", 12)}${siteConfig.github}`,
          href: siteConfig.github,
        },
        {
          text: `  ${col("linkedin", 12)}${siteConfig.linkedin}`,
          href: siteConfig.linkedin,
        },
        {
          text: `  ${col("x/twitter", 12)}${siteConfig.x}`,
          href: siteConfig.x,
        },
      ],
    }),
  },

  x: {
    hint: "open x (twitter) profile",
    exec: () => {
      if (typeof window !== "undefined") {
        window.open(siteConfig.x, "_blank", "noopener,noreferrer");
      }
      return {
        lines: [{ text: `  ${siteConfig.x} ↗`, href: siteConfig.x }],
      };
    },
  },

  theme: {
    hint: "toggle dark / light",
    exec: () => {
      toggleTheme();
      return { lines: [{ text: `theme → ${getTheme()}`, tone: "brand" }] };
    },
  },

  clear: {
    hint: "clear the screen",
    exec: () => ({ clear: true }),
  },
};

export const ALIASES: Record<string, string> = {
  skills: "stack",
  about: "whoami",
  ls: "projects",
  cv: "resume",
  mail: "email",
  twitter: "x",
  "?": "help",
};

export const INTRO: Line[] = [
  { text: "aryan.dev shell — type 'help' to get started", tone: "muted" },
];

export function run(input: string): CommandResult {
  const name = input.trim().toLowerCase().split(/\s+/)[0];
  if (!name) return { lines: [] };

  const command = COMMANDS[ALIASES[name] ?? name];
  if (!command) {
    return {
      lines: [
        { text: `command not found: ${name}`, tone: "warn" },
        { text: "type 'help' for a list", tone: "muted" },
      ],
    };
  }

  return command.exec();
}
