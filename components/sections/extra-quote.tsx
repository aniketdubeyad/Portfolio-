"use client";

import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { Sparkles } from "lucide-react";

export function ExtraQuote() {
  return (
    <section id="extra-quote" className="section-shell">
      <SectionHeading
        kicker="Core Philosophy"
        title="From Raw Data to Real Decisions."
        copy="Every project begins with a question, every dataset tells a story, and every model is an opportunity to create value through intelligence."
      />
      <GlassCard className="p-6 md:p-10 text-center bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 border-white/10 hover:border-cyan-200/20 transition-all duration-300">
        <div className="flex justify-center mb-4 text-cyan-200">
          <Sparkles size={32} className="animate-pulse" />
        </div>
        <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-3xl mx-auto leading-relaxed">
          &ldquo;The goal is to turn data into information, and information into insight.&rdquo;
        </p>
        <p className="text-xs text-white/40 mt-3 uppercase tracking-wider font-semibold">
          — Carly Fiorina
        </p>
      </GlassCard>
    </section>
  );
}
