import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { aboutLinks, aboutParagraphs, focusAreas } from "@/lib/content";
import { cn, focusRing } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="pt-24" data-reveal="">
      <SectionHeading eyebrow="About" title="Who I Am & What I Do" />

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-12">
        <div className="space-y-4 font-normal text-[16px] leading-[1.75] text-muted-foreground">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {aboutLinks.map((link) => (
            <Card
              key={link.label}
              asChild
              className={cn(
                "border-border bg-card hover:border-brand flex-row items-center justify-between gap-4 rounded-xl border px-5 py-4 text-[15px] ring-0 transition-colors duration-150 ease-out",
                focusRing
              )}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="font-medium">{link.label}</span>
                <span className="text-muted-foreground font-mono text-xs">
                  {link.handle}
                </span>
              </a>
            </Card>
          ))}

          <div className="pt-3">
            <span className="text-foreground mb-3 block font-mono text-xs font-semibold tracking-wider uppercase">
              What excites me &amp; what I want to build:
            </span>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="border-border bg-card text-foreground rounded-lg border px-3 py-1.5 font-mono text-xs shadow-xs"
                >
                  <span className="text-brand mr-1.5">▸</span>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

