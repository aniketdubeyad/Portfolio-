"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/portfolio";

export function SkillNetwork() {
  const [hovered, setHovered] = useState("Next.js");
  return (
    <section id="skills" className="section-shell">
      <SectionHeading kicker="Interactive Skill Network" title="Skills as connected capabilities, not isolated bars." copy="Hover a node to see how technologies combine across projects, automation, AI workflows, and production interfaces." />
      <GlassCard className="p-4 md:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
            <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(circle at 50% 50%, rgba(98,230,255,.18), transparent 42%)" }} />
            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3">
              {skillCategories.map((category, cIndex) => {
                const Icon = category.icon;
                return (
                  <div key={category.name} className="rounded-3xl border border-white/10 bg-white/[.045] p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white"><Icon size={18} className="text-cyan-200" />{category.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIndex) => (
                        <button
                          key={skill}
                          onMouseEnter={() => setHovered(skill)}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/68 transition hover:border-cyan-200/50 hover:text-white"
                          style={{ transform: `translateY(${((cIndex + sIndex) % 3) * 4}px)` }}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[.045] p-5">
            <p className="kicker">Selected Node</p>
            <h3 className="mt-3 text-3xl font-semibold">{hovered}</h3>
            <p className="mt-4 text-sm leading-6 text-white/62">Related projects: Modern Portfolio OS, AI SaaS Command Center, Lead Intelligence Engine.</p>
            <p className="mt-4 text-sm leading-6 text-white/62">Experience level: actively building and connecting with complementary technologies across web, API, data, and automation layers.</p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
