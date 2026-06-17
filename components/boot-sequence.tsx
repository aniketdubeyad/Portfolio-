"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = ["BOOTING ANIKET_OS...", "Loading projects...", "Loading skills...", "System ready."];

export function BootSequence() {
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("aniket-os-booted");
    if (seen) {
      setDone(true);
      return;
    }
    const lineTimer = window.setInterval(() => setIndex((value) => Math.min(value + 1, lines.length - 1)), 360);
    const doneTimer = window.setTimeout(() => {
      sessionStorage.setItem("aniket-os-booted", "true");
      setDone(true);
    }, 2200);
    return () => {
      clearInterval(lineTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-[#07080d]" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-min min-w-[300px]">
            <div className="mb-6 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full bg-cyan-200" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.05, ease: "easeInOut" }} />
            </div>
            <div className="space-y-2 font-mono text-sm text-white/70">
              {lines.slice(0, index + 1).map((line) => (
                <motion.p key={line} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
