"use client";

import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/portfolio";
import { SkillDiagnostics } from "./skill-diagnostics";

export function SkillNetwork() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading 
        kicker="Interactive Skill Network" 
        title="Skills Connected by Outcomes, Not Categories." 
        copy="Explore how analytics, machine learning, automation, and AI intersect to create real-world solutions across data products and intelligent systems." 
      />
      <GlassCard className="p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
            <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(circle at 50% 50%, rgba(98,230,255,.18), transparent 42%)" }} />
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.name} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[.045] p-6 h-full transition-all duration-300 hover:border-cyan-200/20 hover:bg-white/[.06] hover:shadow-[0_0_20px_rgba(98,230,255,0.03)]">
                    <div>
                      <div className="mb-5 flex items-center gap-2.5 text-sm font-semibold text-white">
                        <Icon size={18} className="text-cyan-200" />
                        {category.name}
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill) => (
                          <button
                            key={skill}
                            className="h-8 flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-3.5 text-xs text-white/70 transition hover:border-cyan-200/50 hover:bg-cyan-200/5 hover:text-white cursor-pointer"
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative h-full min-h-[460px] lg:min-h-0">
            <SkillDiagnostics />
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
