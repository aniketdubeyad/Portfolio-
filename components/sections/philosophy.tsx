"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { philosophies } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface PhilosophyProps {
  isOpenToWork?: boolean;
  isRecruiterContext?: boolean;
}

export function Philosophy({ isOpenToWork = true }: PhilosophyProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const accentText = isOpenToWork ? "text-green-300" : "text-cyan-200";
  const accentBorderHover = isOpenToWork ? "hover:border-green-400/30" : "hover:border-cyan-200/30";
  const accentGlow = isOpenToWork 
    ? "hover:shadow-[0_0_30px_rgba(34,197,94,0.06)] bg-white/[0.01]" 
    : "hover:shadow-[0_0_30px_rgba(98,230,255,0.06)] bg-white/[0.01]";

  return (
    <section id="building" className="section-shell">
      <SectionHeading 
        kicker="Analytics Philosophy" 
        title="The Manual" 
        copy="The principles that guide how I analyze data, construct models, and extract business intelligence." 
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {philosophies.map((item, index) => {
          const isHovered = hoveredIdx === index;
          
          return (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative h-full"
            >
              <GlassCard 
                className={cn(
                  "p-6 flex flex-col justify-between h-full transition-all duration-300 border-white/5",
                  accentBorderHover,
                  accentGlow
                )}
                interactive={false} // Handle translation and hover via motion.div wrappers
              >
                <motion.div
                  animate={isHovered ? { y: -4 } : { y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Header: Numbering & Title */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-white/30 tracking-widest font-bold">
                        NODE // 0{index + 1}
                      </span>
                      <span className={cn("h-1.5 w-1.5 rounded-full", isHovered ? "bg-white animate-pulse" : "bg-white/20")} />
                    </div>

                    <h3 className="font-bold text-lg text-white mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs leading-6 text-white/60 font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Expandable Example Panel */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isHovered ? "auto" : 0, 
                      opacity: isHovered ? 1 : 0 
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-white/50 leading-relaxed font-mono">
                      <span className={cn("font-bold block mb-1.5 uppercase tracking-widest text-[9px]", accentText)}>
                        {"// Real-World Execution"}
                      </span>
                      {item.example}
                    </div>
                  </motion.div>
                </motion.div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
