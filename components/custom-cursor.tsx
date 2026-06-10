"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [large, setLarge] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 34 });
  const sy = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!coarse);
    if (coarse) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
    };
    const over = (event: MouseEvent) => setLarge(Boolean((event.target as HTMLElement).closest("button,a,[data-cursor='expand']")));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] h-8 w-8 rounded-full border border-cyan-200/70 mix-blend-screen"
      style={{ x: sx, y: sy }}
      animate={{ scale: large ? 1.85 : 1, backgroundColor: large ? "rgba(98,230,255,.12)" : "rgba(98,230,255,.02)" }}
    />
  );
}
