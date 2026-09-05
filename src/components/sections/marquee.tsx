import * as React from "react";

import { marqueeItems } from "@/lib/content";

function MarqueeRow() {
  return (
    <span className="flex gap-10">
      {marqueeItems.map((item) => (
        <React.Fragment key={item}>
          <span>{item}</span>
          <span className="text-brand">/</span>
        </React.Fragment>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="border-border overflow-hidden border-y py-3.5">
      <div className="text-muted-foreground animate-marquee flex w-max gap-10 font-mono text-xs tracking-[0.16em] uppercase">
        <MarqueeRow />
        <span aria-hidden="true" className="flex">
          <MarqueeRow />
        </span>
      </div>
    </div>
  );
}
