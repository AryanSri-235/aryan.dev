"use client";

import * as React from "react";

import { BOOT_STEP_MS, BOOT_TOTAL_MS, bootLines } from "@/lib/content";
import { BOOT_STORAGE_KEY } from "@/lib/theme";

export function BootLoader() {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const skip = React.useCallback(() => {
    try {
      sessionStorage.setItem(BOOT_STORAGE_KEY, "1");
    } catch {}
    setDone(true);
  }, []);

  React.useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(BOOT_STORAGE_KEY) === "1";
      sessionStorage.setItem(BOOT_STORAGE_KEY, "1");
    } catch {}

    if (seen) {
      setDone(true);
      return;
    }

    const tick = window.setInterval(
      () => setStep((s) => Math.min(s + 1, bootLines.length)),
      BOOT_STEP_MS
    );

    const finish = window.setTimeout(() => {
      window.clearInterval(tick);
      setDone(true);
    }, BOOT_TOTAL_MS);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Enter") {
        window.clearInterval(tick);
        window.clearTimeout(finish);
        skip();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(finish);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [skip]);

  if (done) return null;

  const pct = Math.min(
    100,
    Math.round(((step + 1) / bootLines.length) * 100)
  );

  return (
    <div
      data-boot-overlay=""
      className="bg-background fixed inset-0 z-[90] flex flex-col items-center justify-center gap-[18px]"
    >
      <div className="w-[min(480px,88vw)] font-mono text-[13px] leading-[2]">
        <div className="flex items-center justify-between text-muted-foreground">
          <div>
            <span className="text-brand">➜</span> npm run dev — portfolio@2026
          </div>
          <button
            type="button"
            onClick={skip}
            className="border-border text-muted-foreground hover:text-foreground hover:border-brand flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] transition-colors"
          >
            Skip <kbd className="border-border/60 rounded border px-1 py-px text-[9px]">ESC</kbd> <span>›</span>
          </button>
        </div>

        <div className="mt-2.5">
          {bootLines.slice(0, step + 1).map((line, i) => (
            <div key={line.text} className="flex items-baseline gap-2.5">
              <span className="text-brand">{i < step ? "✓" : "▸"}</span>
              <span>{line.text}</span>
              <span className="text-muted-foreground ml-auto text-[11px]">
                {line.ms}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-border mt-4 h-0.5 overflow-hidden">
          <div
            className="bg-brand h-full transition-[width] duration-[500ms] ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
