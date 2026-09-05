"use client";

import * as React from "react";

export function CursorTracker() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const ringRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) return;

    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let currentW = 34;
    let currentH = 34;
    let currentRadius = 17;

    let destX = -100;
    let destY = -100;
    let destW = 34;
    let destH = 34;
    let destRadius = 17;

    let isHovering = false;
    let isClicking = false;
    let isText = false;
    let isVisible = false;
    let rafId: number;

    const dot = dotRef.current;
    const ring = ringRef.current;

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!isVisible) {
        isVisible = true;
        currentX = mouseX;
        currentY = mouseY;
        destX = mouseX;
        destY = mouseY;
        if (ring) ring.style.opacity = "1";
      }

      const target = event.target as HTMLElement | null;
      let interactive: HTMLElement | null = null;
      let textElement: HTMLElement | null = null;

      if (target) {
        interactive = target.closest(
          'a, button, [role="button"], select, summary, [data-hover="true"]'
        );
        textElement = target.closest(
          'input, textarea, [contenteditable="true"]'
        );
      }

      isText = Boolean(textElement);
      isHovering = Boolean(interactive);

      if (isHovering && interactive) {
        const rect = interactive.getBoundingClientRect();
        const isCompact = rect.width <= 360 && rect.height <= 100;

        if (isCompact) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          destX = centerX + (mouseX - centerX) * 0.16;
          destY = centerY + (mouseY - centerY) * 0.16;
          destW = rect.width + 10;
          destH = rect.height + 8;
          const style = window.getComputedStyle(interactive);
          const r = parseFloat(style.borderRadius) || 8;
          destRadius = Math.max(r + 4, 8);
        } else {
          destX = mouseX;
          destY = mouseY;
          destW = 60;
          destH = 60;
          destRadius = 30;
        }
      } else {
        destX = mouseX;
        destY = mouseY;
        destW = 34;
        destH = 34;
        destRadius = 17;
      }

      if (dot) {
        dot.style.opacity = isText || isHovering ? "0" : isVisible ? "1" : "0";
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    }

    function onMouseDown() {
      isClicking = true;
    }

    function onMouseUp() {
      isClicking = false;
    }

    function onMouseLeave() {
      isVisible = false;
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    }

    function onMouseEnter() {
      isVisible = true;
      if (ring) ring.style.opacity = "1";
      if (dot) dot.style.opacity = isText || isHovering ? "0" : "1";
    }

    function loop() {
      const lerpFactor = 0.22;
      currentX += (destX - currentX) * lerpFactor;
      currentY += (destY - currentY) * lerpFactor;
      currentW += (destW - currentW) * lerpFactor;
      currentH += (destH - currentH) * lerpFactor;
      currentRadius += (destRadius - currentRadius) * lerpFactor;

      if (ring) {
        if (isText) {
          ring.style.opacity = "0";
        } else {
          ring.style.opacity = isVisible ? "1" : "0";
        }

        let scale = 1;
        if (isClicking) {
          scale = isHovering ? 0.96 : 0.75;
        }

        const left = currentX - currentW / 2;
        const top = currentY - currentH / 2;

        ring.style.width = `${currentW}px`;
        ring.style.height = `${currentH}px`;
        ring.style.borderRadius = `${currentRadius}px`;
        ring.style.transform = `translate3d(${left}px, ${top}px, 0) scale(${scale})`;

        if (isHovering) {
          ring.style.borderColor = "var(--brand)";
          ring.style.backgroundColor =
            "color-mix(in oklch, var(--brand) 14%, transparent)";
        } else {
          ring.style.borderColor =
            "color-mix(in oklch, var(--brand) 42%, transparent)";
          ring.style.backgroundColor = "transparent";
        }
      }

      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] border border-brand/40 opacity-0 transition-[border-color,background-color] duration-150 ease-out will-change-transform"
      />

      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-1.5 rounded-full bg-brand opacity-0 shadow-[0_0_8px_var(--brand)] will-change-transform"
      />
    </>
  );
}
