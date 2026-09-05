import { siteConfig } from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-7 font-mono text-xs">
        <div>
          <span>Designed &amp; built by {siteConfig.name}</span>
          <span className="mx-2">·</span>
          <span>© {siteConfig.year}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hover:text-foreground text-brand transition-colors", focusRing)}
          >
            Resume (PDF) ↗
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hover:text-foreground transition-colors", focusRing)}
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hover:text-foreground transition-colors", focusRing)}
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.x}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hover:text-foreground transition-colors", focusRing)}
          >
            X
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={cn("hover:text-foreground transition-colors", focusRing)}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
