"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  function copyEmail() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  }

  return (
    <section id="contact" className="pt-28 pb-24" data-reveal="">
      <Card className="border-border bg-card gap-0 rounded-[18px] border px-6 py-16 text-center ring-0">
        <div className="eyebrow mx-auto mb-3 flex items-center justify-center gap-2">
          <span className="bg-brand size-1.5 rounded-full" />
          get in touch
        </div>
        <h2 className="text-[clamp(30px,4.4vw,46px)] leading-[normal] font-semibold tracking-[-0.035em] text-balance">
          Let&apos;s build together.
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-[460px] text-base leading-[1.6]">
          Open to full-stack engineering roles, high-impact projects, and technical discussions.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button
            type="button"
            variant="brand"
            size="cta"
            onClick={copyEmail}
          >
            {copied ? "✓ Copied to clipboard!" : `Copy Email (${siteConfig.email})`}
          </Button>

          <Button asChild variant="outline-soft" size="cta">
            <a href={`mailto:${siteConfig.email}`}>
              Direct Mail ↗
            </a>
          </Button>

          <Button asChild variant="outline-soft" size="cta">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </Button>

          <Button asChild variant="outline-soft" size="cta">
            <a
              href={siteConfig.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter) ↗
            </a>
          </Button>
        </div>

        <div className="text-muted-foreground mt-6 font-mono text-xs">
          Based in {siteConfig.location} · {siteConfig.phone}
        </div>
      </Card>
    </section>
  );
}

