"use client";

import * as React from "react";

import { SectionHeading } from "@/components/section-heading";
import { ALIASES, COMMANDS, INTRO, run, type Line } from "@/lib/terminal";
import { cn } from "@/lib/utils";

const PRINT_MS = 45;

type ConsoleRow = Line & { id: number };

const TONE: Record<NonNullable<Line["tone"]>, string> = {
  default: "",
  muted: "text-muted-foreground",
  brand: "text-brand",
  warn: "text-status-amber",
};

function OutputRow({ row }: { row: ConsoleRow }) {
  const className = cn("whitespace-pre", TONE[row.tone ?? "default"]);

  if (row.href) {
    return (
      <div className={className}>
        <a
          href={row.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand underline-offset-4 hover:underline"
        >
          {row.text}
        </a>
      </div>
    );
  }

  return <div className={className}>{row.text}</div>;
}

export function TerminalConsole() {
  const [rows, setRows] = React.useState<ConsoleRow[]>(() =>
    INTRO.map((line, i) => ({ ...line, id: i }))
  );
  const [value, setValue] = React.useState("");
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);

  const bodyRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const queue = React.useRef<ConsoleRow[]>([]);
  const timer = React.useRef<number | null>(null);
  const nextId = React.useRef(INTRO.length);

  React.useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [rows]);

  React.useEffect(
    () => () => {
      if (timer.current !== null) window.clearInterval(timer.current);
    },
    []
  );

  const identify = React.useCallback(
    (lines: Line[]): ConsoleRow[] =>
      lines.map((line) => ({ ...line, id: nextId.current++ })),
    []
  );

  const drain = React.useCallback(() => {
    if (timer.current !== null) return;
    timer.current = window.setInterval(() => {
      const next = queue.current.shift();
      if (!next) {
        window.clearInterval(timer.current!);
        timer.current = null;
        return;
      }
      setRows((prev) => [...prev, next]);
    }, PRINT_MS);
  }, []);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const entered = value;
    setValue("");
    setHistoryIndex(-1);
    if (entered.trim()) setHistory((prev) => [entered.trim(), ...prev]);

    const result = run(entered);
    const echo: ConsoleRow[] = identify([{ text: `➜ ${entered}`, tone: "brand" }]);

    if (result.clear) {
      queue.current = [];
      setRows([]);
      return;
    }

    const output = identify(result.lines ?? []);
    const instant =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (instant) {
      setRows((prev) => [...prev, ...echo, ...output]);
      return;
    }

    setRows((prev) => [...prev, ...echo]);
    queue.current.push(...output);
    drain();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Tab") {
      event.preventDefault();
      const current = value.trim().toLowerCase();
      if (!current) return;
      const candidates = [
        ...Object.keys(COMMANDS),
        ...Object.keys(ALIASES),
      ].filter((cmd) => cmd.startsWith(current));
      if (candidates.length > 0) {
        setValue(candidates[0]);
      }
      return;
    }

    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    if (!history.length) return;
    event.preventDefault();

    const delta = event.key === "ArrowUp" ? 1 : -1;
    const index = Math.min(history.length - 1, Math.max(-1, historyIndex + delta));
    setHistoryIndex(index);
    setValue(index === -1 ? "" : history[index]);
  }

  return (
    <div
      className="border-border bg-card shadow-card mt-7 overflow-hidden rounded-[14px] border"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="border-border flex items-center gap-[7px] border-b px-3.5 py-3">
        <span className="bg-status-red size-2.5 rounded-full" />
        <span className="bg-status-amber size-2.5 rounded-full" />
        <span className="bg-status-green size-2.5 rounded-full" />
        <span className="text-muted-foreground ml-2 font-mono text-[11px]">
          ~/aryan — zsh
        </span>
      </div>

      <div
        ref={bodyRef}
        className="h-[320px] overflow-auto p-[18px] font-mono text-[13px] leading-[1.85]"
      >
        <div aria-live="polite" aria-atomic="false">
          {rows.map((row) => (
            <OutputRow key={row.id} row={row} />
          ))}
        </div>

        <form onSubmit={submit} className="flex items-center">
          <label htmlFor="console-input" className="text-brand shrink-0">
            ➜<span className="sr-only">run a command</span>
          </label>
          <input
            id="console-input"
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            style={{ width: `${Math.max(value.length, 1)}ch` }}
            className="text-foreground ml-2 border-0 bg-transparent p-0 font-mono text-[13px] caret-transparent outline-none"
          />
          <span
            aria-hidden="true"
            className="bg-brand animate-blink ml-px inline-block h-[15px] w-2 shrink-0 align-[-2px]"
          />
        </form>
      </div>
    </div>
  );
}

export function Console() {
  return (
    <section id="console" className="pt-24" data-reveal="">
      <SectionHeading
        eyebrow="Console"
        title="Shell"
        aside={
          <span className="text-muted-foreground font-mono text-xs">
            type &lsquo;help&rsquo;
          </span>
        }
      />
      <TerminalConsole />
    </section>
  );
}
