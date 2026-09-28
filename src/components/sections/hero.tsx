import { Button } from "@/components/ui/button";
import { HeroName } from "@/components/hero-name";
import { HERO_LAYOUT, siteConfig } from "@/lib/site";

function Eyebrow() {
  return (
    <div className="eyebrow flex items-center gap-2.5">
      <span className="relative flex size-2">
        <span className="bg-brand absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
        <span className="bg-brand relative inline-flex size-2 rounded-full" />
      </span>
      building &amp; shipping in production
    </div>
  );
}

function CenteredHero() {
  return (
    <div className="flex flex-col items-center pt-[26px] text-center">
      <Eyebrow />
      <h1 className="mt-[22px] text-[clamp(48px,9vw,104px)] leading-[0.94] font-semibold tracking-[-0.045em] text-balance">
        <HeroName stacked />
      </h1>
      <p className="text-muted-foreground mt-[22px] font-mono text-sm">
        Full Stack Developer 
      </p>
      <p className="text-muted-foreground mt-[18px] max-w-[540px] text-[17px] leading-[1.6] text-pretty">
        Full Stack Developer building high-scale web platforms with Next.js, Node.js, and PostgreSQL. Handled 68k+ users.
      </p>
      <div className="mt-[30px] flex flex-wrap justify-center gap-2.5">
        <Button asChild variant="brand" size="hero">
          <a href="#projects">View projects</a>
        </Button>
        <Button asChild variant="outline-soft" size="hero">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            Resume ↗
          </a>
        </Button>
        <Button asChild variant="outline-soft" size="hero">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline-soft" size="hero">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  );
}

function TerminalPrompt({ command }: { command: string }) {
  return (
    <div>
      <span className="text-brand">➜</span>{" "}
      <span className="text-muted-foreground">{command}</span>
    </div>
  );
}

function SplitHero() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12 pt-[34px]">
      <div>
        <Eyebrow />
        <h1 className="mt-5 text-[clamp(44px,6vw,76px)] leading-[0.96] font-semibold tracking-[-0.04em]">
          <HeroName />
        </h1>
        <p className="text-muted-foreground mt-[18px] max-w-[48ch] text-base leading-[1.6] text-pretty">
          Full Stack Developer building high-scale web platforms with Next.js, Node.js, and PostgreSQL. Handled 68k+ users.
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          <Button asChild variant="brand" size="hero">
            <a href="#projects">View projects</a>
          </Button>
          <Button asChild variant="outline-soft" size="hero">
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              Resume ↗
            </a>
          </Button>
          <Button asChild variant="outline-soft" size="hero">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline-soft" size="hero">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <div className="border-border bg-card shadow-card overflow-hidden rounded-[14px] border">
        <div className="border-border flex items-center gap-[7px] border-b px-3.5 py-3">
          <span className="bg-status-red size-2.5 rounded-full" />
          <span className="bg-status-amber size-2.5 rounded-full" />
          <span className="bg-status-green size-2.5 rounded-full" />
          <span className="text-muted-foreground ml-2 font-mono text-[11px]">
            ~/aryan — zsh
          </span>
        </div>
        <div className="p-[18px] font-mono text-[13px] leading-[1.85]">
          <TerminalPrompt command="whoami" />
          <div>aryan-srivastava · nit jalandhar</div>

          <div className="mt-2.5">
            <TerminalPrompt command="cat scale.log" />
          </div>
          <div className="text-brand">
            68,000+ users served across 23 states
          </div>
          <div className="text-muted-foreground">
            automated razorpay webhooks &amp; cron reconciliation
          </div>

          <div className="mt-2.5">
            <TerminalPrompt command="cat stack.json" />
          </div>
          <div className="text-muted-foreground font-mono leading-[1.6]">
            {`{`}
            <br />
            &nbsp;&nbsp;{`"frontend": `}
            <span className="text-foreground">&quot;next.js 14, react, tailwind&quot;</span>,
            <br />
            &nbsp;&nbsp;{`"backend":  `}
            <span className="text-foreground">&quot;node, express, typescript&quot;</span>,
            <br />
            &nbsp;&nbsp;{`"database": `}
            <span className="text-foreground">&quot;postgresql, prisma, drizzle, mongodb&quot;</span>
            <br />
            {`}`}
          </div>

          <div className="mt-2.5">
            <TerminalPrompt command="status" />
          </div>
          <div>
            active · building scalable web apps{" "}
            <span className="bg-brand animate-blink inline-block h-[15px] w-2 align-[-2px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="pt-[88px] pb-14">
      {HERO_LAYOUT === "centered" ? <CenteredHero /> : <SplitHero />}
    </section>
  );
}

export function ScrollCue() {
  return (
    <div className="flex justify-center pb-11">
      <div className="text-muted-foreground animate-bob flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
        scroll
        <span className="from-muted-foreground h-[34px] w-px bg-linear-to-b to-transparent" />
      </div>
    </div>
  );
}
