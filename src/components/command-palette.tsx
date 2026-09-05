"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { siteConfig } from "@/lib/site";
import { toggleTheme } from "@/lib/theme";

type Command = {
  label: string;
  hint: string;
  target?: string;
  href?: string;
  run?: () => void;
};

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 70,
    behavior: "smooth",
  });
}

const commands: (Command & { key: string })[] = [
  { label: "Go to projects", hint: "section", target: "projects" },
  { label: "Experience & education", hint: "section", target: "work" },
  { label: "Stack", hint: "section", target: "skills" },
  { label: "Shell — run commands", hint: "section", target: "console" },
  { label: "About me", hint: "section", target: "about" },
  { label: "Contact me", hint: "section", target: "contact" },
  { label: "View Resume (PDF)", hint: "document", href: siteConfig.resume },
  { label: "Send Email (aryansri235@gmail.com)", hint: "email", href: `mailto:${siteConfig.email}` },
  { label: "Open GitHub", hint: "external", href: siteConfig.github },
  { label: "Open LinkedIn", hint: "external", href: siteConfig.linkedin },
  { label: "Open X (Twitter)", hint: "external", href: siteConfig.x },
  { label: "Toggle theme", hint: "theme", run: toggleTheme },
].map((command, index) => ({
  ...command,
  key: String(index + 1).padStart(2, "0"),
}));

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  function select(command: Command) {
    onOpenChange(false);
    if (command.href) {
      window.open(command.href, "_blank", "noopener,noreferrer");
    } else if (command.target) {
      scrollToSection(command.target);
    } else {
      command.run?.();
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="z-[80] bg-black/60 supports-backdrop-filter:backdrop-blur-[4px]"
        className="bg-card top-[14vh] left-1/2 z-[80] block w-[min(560px,92vw)] max-w-none translate-x-[-50%] translate-y-0 gap-0 overflow-hidden rounded-[14px]! border p-0 shadow-palette ring-0"
      >
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <DialogDescription className="sr-only">
          Jump to a section, switch theme, or open an external profile.
        </DialogDescription>

        <CommandPrimitive
          loop
          shouldFilter
          filter={(value, search) => {
            const q = search.trim().toLowerCase();
            return !q || value.toLowerCase().includes(q) ? 1 : 0;
          }}
          className="bg-card text-foreground flex size-full flex-col overflow-hidden rounded-none p-0"
        >
          <div className="border-border flex items-center gap-2.5 border-b px-4 py-3.5">
            <span className="text-brand font-mono text-sm">&gt;</span>
            <CommandPrimitive.Input
              autoFocus
              placeholder="Search for a command to run..."
              className="text-foreground placeholder:text-muted-foreground flex-1 border-0 bg-transparent font-mono text-sm outline-none"
            />
            <kbd className="border-border text-muted-foreground rounded-md border px-1.5 py-0.5 font-mono text-[10px]">
              ESC
            </kbd>
          </div>

          <CommandList className="max-h-[320px] p-2 [&_[cmdk-list-sizer]]:flex [&_[cmdk-list-sizer]]:flex-col [&_[cmdk-list-sizer]]:gap-0.5">
            <CommandPrimitive.Empty className="text-muted-foreground px-3 py-6 text-center font-mono text-xs">
              No matching command.
            </CommandPrimitive.Empty>

            {commands.map((command) => (
              <CommandItem
                key={command.key}
                value={command.label}
                onSelect={() => select(command)}
                className="data-selected:bg-surface-2 data-selected:text-foreground rounded-lg! px-3 py-2.5 text-sm cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-brand font-mono text-[11px]">
                    {command.key}
                  </span>
                  {command.href ? (
                    <a
                      href={command.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.stopPropagation();
                        onOpenChange(false);
                      }}
                    >
                      {command.label}
                    </a>
                  ) : (
                    <span>{command.label}</span>
                  )}
                </span>
                <CommandShortcut className="text-muted-foreground group-data-selected/command-item:text-muted-foreground font-mono text-[11px] tracking-normal">
                  {command.hint}
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandList>
        </CommandPrimitive>
      </DialogContent>
    </Dialog>
  );
}
