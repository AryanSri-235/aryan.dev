import { SectionHeading } from "@/components/section-heading";
import { shortHash, timeline, type TimelineEntry } from "@/lib/content";

const REF_TONE: Record<TimelineEntry["refKind"], string> = {
  head: "text-brand",
  tag: "text-status-amber",
  remote: "text-status-red",
};

export function Timeline() {
  return (
    <section id="work" className="pt-24" data-reveal="">
      <SectionHeading eyebrow="Timeline" title="Experience & education" />

      <div className="border-border bg-card shadow-card mt-7 overflow-auto rounded-[14px] border p-6 font-mono text-[13px] leading-[1.85]">
        <div className="text-muted-foreground mb-4">
          <span className="text-brand">➜</span> git log --graph --oneline
          --decorate
        </div>

        <ol>
          {timeline.map((entry, index) => {
            const last = index === timeline.length - 1;

            return (
              <li
                key={entry.title}
                className="grid grid-cols-[14px_1fr] gap-x-4"
              >
                <div className="relative flex justify-center">
                  <span className="text-brand">*</span>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="bg-border absolute top-6 bottom-0 w-px"
                    />
                  )}
                </div>

                <div className={last ? "" : "pb-7"}>
                  <p>
                    <span className="text-muted-foreground">
                      {shortHash(entry.title)}
                    </span>{" "}
                    <span className={REF_TONE[entry.refKind]}>
                      ({entry.ref})
                    </span>{" "}
                    <span className="font-medium">{entry.title}</span>
                  </p>
                  <p className="text-muted-foreground mt-1 max-w-[74ch]">
                    {entry.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
