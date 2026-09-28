"use client";

import * as React from "react";
import Image from "next/image";

import { Moon, Sun } from "lucide-react";

import { CommandPalette } from "@/components/command-palette";
import { navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { toggleTheme } from "@/lib/theme";
import { cn, focusRing } from "@/lib/utils";

export function SiteHeader() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="border-border sticky top-0 z-40 border-b bg-[color-mix(in_oklch,var(--background)_82%,transparent)] backdrop-blur-[12px]">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-6">
          <a
            href="#top"
            className={cn(
              "flex items-center gap-2.5 rounded-md font-mono text-[13px] font-medium tracking-[-0.01em]",
              focusRing
            )}
          >
            <Image
              src="/icons/icon-192.png"
              alt="aryan.dev logo"
              width={22}
              height={22}
              className="size-[22px] rounded-[5px] object-contain border border-border/60"
            />
            aryan<span className="text-muted-foreground">.dev</span>
          </a>

          <nav className="hidden sm:flex items-center gap-1">
            {navLinks
              .filter((link) => !link.hidden)
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-muted-foreground hover:text-foreground hover:bg-card rounded-lg px-2.5 py-1.5 text-[13px] transition-colors duration-150 ease-out",
                    link.external && "text-brand font-medium",
                    focusRing
                  )}
                >
                  {link.label} {link.external ? "↗" : ""}
                </a>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "border-border text-brand hover:border-brand sm:hidden flex h-8 items-center rounded-lg border px-2 font-mono text-xs transition-colors duration-150 ease-out",
                focusRing
              )}
            >
              CV ↗
            </a>
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className={cn(
                "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground flex h-8 items-center gap-2.5 rounded-lg border px-2.5 font-mono text-xs transition-colors duration-150 ease-out",
                focusRing
              )}
            >
              Search
              <kbd className="border-border rounded-[5px] border px-[5px] py-px text-[10px]">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={cn(
                "border-border text-foreground hover:bg-card grid size-8 place-items-center rounded-lg border transition-colors duration-150 ease-out",
                focusRing
              )}
            >
              <Moon className="hidden dark:block size-3.5" />
              <Sun className="dark:hidden block size-3.5" />
            </button>
          </div>
        </div>
      </header>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
