import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects, type Project } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";

const cardClass =
  "border-border bg-card shadow-card flex flex-col gap-3.5 rounded-[14px] border p-6 ring-0 transition-[border-color,background-color] duration-150 ease-out hover:border-brand/70 hover:bg-surface-2/40";

function ProjectBody({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground font-mono text-[11px]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase">
          {project.status === "live" && (
            <span className="bg-status-green size-1.5 rounded-full" />
          )}
          {project.status === "production" && (
            <span className="bg-brand size-1.5 rounded-full" />
          )}
          {project.status === "freelance" && (
            <span className="bg-brand size-1.5 rounded-full" />
          )}
          {project.status === "internship" && (
            <span className="bg-status-amber size-1.5 rounded-full" />
          )}
          {project.status ?? "case study"}
        </span>
      </div>

      <h3 className="text-[21px] leading-[normal] font-semibold tracking-[-0.02em]">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-[14px] leading-[1.6] text-pretty">
        {project.description}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <ul className="space-y-1.5 py-1">
          {project.metrics.map((metric) => (
            <li
              key={metric}
              className="text-muted-foreground flex items-start gap-2 font-mono text-xs leading-relaxed"
            >
              <span className="text-brand shrink-0">▸</span>
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tech.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="border-border text-muted-foreground h-auto rounded-full px-2 py-[3px] font-mono text-[11px] font-normal"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="border-border/60 mt-2 flex flex-wrap items-center justify-between gap-3 border-t pt-3 font-mono text-xs">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-brand hover:text-foreground inline-flex items-center gap-1 font-medium transition-colors",
              focusRing
            )}
          >
            Live Site ↗
          </a>
        )}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors",
              focusRing
            )}
          >
            GitHub Repo ↗
          </a>
        ) : (
          <span className="text-muted-foreground/60 text-[11px]">
            {project.repoLabel ?? "Private / Client Repo"}
          </span>
        )}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="pt-24" data-reveal="">
      <SectionHeading
        eyebrow="Featured"
        title="Projects"
        aside={
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-brand rounded-sm font-mono text-xs transition-colors duration-150 ease-out",
              focusRing
            )}
          >
            all repos ({siteConfig.githubUser}) ↗
          </a>
        }
      />

      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
        {projects.map((project, index) => (
          <Card key={project.title} className={cardClass}>
            <ProjectBody project={project} index={index} />
          </Card>
        ))}
      </div>
    </section>
  );
}

