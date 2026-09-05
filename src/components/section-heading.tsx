import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  aside,
  className,
}: {
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-border flex items-baseline justify-between gap-5 border-b pb-[18px]",
        className
      )}
    >
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-2.5 text-[38px] leading-[normal] font-semibold tracking-[-0.03em]">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}
