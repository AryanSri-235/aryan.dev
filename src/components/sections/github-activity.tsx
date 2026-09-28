import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { getContributions, type ContributionCalendar } from "@/lib/github";
import { siteConfig } from "@/lib/site";

const CELL = 11;
const GAP = 3;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function cellFill(level: number) {
  if (level === 0) return "var(--surface-2)";
  return `color-mix(in oklch, var(--brand) ${level * 25}%, var(--surface-2))`;
}

function Heatmap({ calendar }: { calendar: ContributionCalendar }) {
  const width = calendar.weeks.length * (CELL + GAP) - GAP;
  const height = 7 * (CELL + GAP) - GAP;

  return (
    <svg
      viewBox={`0 0 ${width + 30} ${height}`}
      width="100%"
      className="block min-w-[640px]"
      role="img"
      aria-label={`${calendar.total} contributions by ${siteConfig.githubUser} over the past year`}
    >
      {DAY_LABELS.map((label, row) =>
        label ? (
          <text
            key={label}
            x={0}
            y={row * (CELL + GAP) + CELL - 1}
            className="fill-muted-foreground font-mono text-[9px]"
          >
            {label}
          </text>
        ) : null
      )}
      {calendar.weeks.map((week, weekIndex) =>
        week.map((day) => {
          const row = new Date(day.date).getUTCDay();
          return (
            <rect
              key={day.date}
              x={30 + weekIndex * (CELL + GAP)}
              y={row * (CELL + GAP)}
              width={CELL}
              height={CELL}
              rx={2}
              fill={cellFill(day.level)}
            >
              <title>{`${day.count} contributions on ${day.date}`}</title>
            </rect>
          );
        })
      )}
    </svg>
  );
}

export async function GithubActivity() {
  const calendar = await getContributions(siteConfig.githubUser);

  return (
    <section id="github" className="pt-24" data-reveal="">
      <SectionHeading eyebrow="Activity" title="GitHub" />

      <Card className="border-border bg-card mt-7 gap-0 overflow-auto rounded-[14px] border p-6 ring-0">
        <div className="text-muted-foreground mb-[18px] font-mono text-xs">
          <span className="text-foreground">{siteConfig.githubUser}</span> —{" "}
          {calendar
            ? `${calendar.total.toLocaleString("en-US")} contributions over the past year`
            : "contributions over the past year"}
        </div>

        {calendar ? (
          <Heatmap calendar={calendar} />
        ) : (
          <img
            src={`https://ghchart.rshah.org/4d9a4d/${siteConfig.githubUser}`}
            alt={`${siteConfig.githubUser} GitHub contribution chart`}
            referrerPolicy="no-referrer"
            className="block w-full min-w-[640px]"
          />
        )}
      </Card>
    </section>
  );
}
