"use client";

import * as React from "react";

const FIRST_NAME = "Aryan";
const LAST_NAME = "Srivastava";
const GLYPHS = "01X#_~<>/*{}[]&@$+=!";

export function HeroName({ stacked = false }: { stacked?: boolean }) {
  const [firstChars, setFirstChars] = React.useState(FIRST_NAME.split(""));
  const [lastChars, setLastChars] = React.useState(LAST_NAME.split(""));
  const [isBuffering, setIsBuffering] = React.useState(true);
  const animatingRef = React.useRef(false);

  const startBufferAnimation = React.useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setIsBuffering(true);

    const totalLen = FIRST_NAME.length + LAST_NAME.length;
    let iteration = 0;
    const maxIterations = totalLen * 3 + 6;

    const interval = setInterval(() => {
      iteration += 1;

      setFirstChars(
        FIRST_NAME.split("").map((letter, idx) => {
          if (idx < (iteration - 3) / 3) {
            return letter;
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
      );

      setLastChars(
        LAST_NAME.split("").map((letter, idx) => {
          const globalIdx = FIRST_NAME.length + idx;
          if (globalIdx < (iteration - 3) / 3) {
            return letter;
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setFirstChars(FIRST_NAME.split(""));
        setLastChars(LAST_NAME.split(""));
        animatingRef.current = false;
        setIsBuffering(false);
      }
    }, 32);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsBuffering(false);
      return;
    }

    const timer = setTimeout(() => {
      startBufferAnimation();
    }, 350);

    return () => clearTimeout(timer);
  }, [startBufferAnimation]);

  return (
    <span
      className="inline-block cursor-default select-none"
      onMouseEnter={() => {
        if (!animatingRef.current) {
          startBufferAnimation();
        }
      }}
      onClick={() => {
        if (!animatingRef.current) {
          startBufferAnimation();
        }
      }}
    >
      <span className="text-foreground">
        {firstChars.map((ch, i) => (
          <span
            key={`first-${i}`}
            className={
              ch !== FIRST_NAME[i]
                ? "text-brand inline-block font-mono"
                : undefined
            }
          >
            {ch}
          </span>
        ))}
      </span>
      {stacked ? <br /> : " "}
      <span className="text-brand">
        {lastChars.map((ch, i) => (
          <span
            key={`last-${i}`}
            className={
              ch !== LAST_NAME[i]
                ? "text-brand/80 inline-block font-mono"
                : undefined
            }
          >
            {ch}
          </span>
        ))}
      </span>
      <span
        aria-hidden="true"
        className={`ml-1 text-brand font-mono transition-opacity duration-300 ${
          isBuffering ? "opacity-100 animate-blink" : "opacity-0"
        }`}
      >
        _
      </span>
    </span>
  );
}
