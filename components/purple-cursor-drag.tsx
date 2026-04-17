"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/** Lower = slower follow (more "drag"). */
const LERP = 0.045;

const getSnapshot = () =>
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerSnapshot = () => false;

const subscribe = (notify: () => void) => {
  const fine = window.matchMedia("(pointer: fine)");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", notify);
  motion.addEventListener("change", notify);
  return () => {
    fine.removeEventListener("change", notify);
    motion.removeEventListener("change", notify);
  };
};

export function PurpleCursorDrag() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const seeded = useRef(false);
  const raf = useRef(0);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      if (!seeded.current) {
        seeded.current = true;
        target.current = { x: e.clientX, y: e.clientY };
        current.current = { x: e.clientX, y: e.clientY };
      } else {
        target.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let live = true;
    const tick = () => {
      if (!live) return;
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      const el = glow.current;
      if (el) {
        el.style.left = `${current.current.x}px`;
        el.style.top = `${current.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      live = false;
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={glow}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-3xl will-change-[left,top]"
    />
  );
}
