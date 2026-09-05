import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { stack } from "@/lib/content";

export function Stack() {
  return (
    <section id="skills" className="pt-24" data-reveal="">
      <SectionHeading eyebrow="Skills" title="Stack" />

      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {stack.map((group) => (
          <Card
            key={group.label}
            className="border-border bg-card gap-0 rounded-[14px] border p-[22px] ring-0"
          >
            <div className="text-brand font-mono text-[11px] tracking-[0.16em] uppercase">
              {group.label}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-border text-foreground h-auto rounded-[8px] px-[11px] py-[5px] text-sm font-normal"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
