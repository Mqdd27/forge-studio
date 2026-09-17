"use client";

import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Desktop-only custom cursor follower (Stitch v2 micro-interaction).
 * - Only activates on fine pointers at lg widths and when the user has no
 *   reduced-motion preference; otherwise it stays hidden and the native
 *   cursor is untouched (progressive enhancement).
 * - Reads the label from the nearest ancestor with `data-cursor`.
 * - Position is written directly to the DOM (no React re-renders per frame).
 */
export function CustomCursor() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = document.getElementById("custom-cursor");
    const label = document.getElementById("custom-cursor-label");
    if (!node || !label) return;
    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches || !window.matchMedia("(min-width: 1024px)").matches) {
      node.style.display = "none";
      return;
    }
    node.style.display = "";
    let raf = 0;
    let x = -100;
    let y = -100;
    let tx = -100;
    let ty = -100;
    let current = "";
    const onMove = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };
    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.("[data-cursor]");
      const next = target?.getAttribute("data-cursor") ?? "";
      if (next !== current) {
        current = next;
        label.textContent = next;
        node.dataset.active = next ? "true" : "false";
      }
    };
    const loop = () => {
      x += (tx - x) * 0.25;
      y += (ty - y) * 0.25;
      node.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reducedMotion]);

  return (
    <div id="custom-cursor" aria-hidden="true" className="custom-cursor" data-active="false" style={{ translate: "-100px -100px" }}>
      <span id="custom-cursor-label" className="custom-cursor-label" />
    </div>
  );
}
