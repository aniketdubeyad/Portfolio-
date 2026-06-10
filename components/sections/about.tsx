"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/animated-number";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        kicker="Developer Dashboard"
        title="A learning-focused engineer building practical systems."
        copy="Aniket OS reframes the portfolio as an operating surface: the story, skill graph, automation lab, projects, and recruiter summary all run from the same product-minded system."
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_.86fr]">
        <GlassCard className="p-6 md:p-8">
          <p className="text-lg leading-8 text-white/74">
            I approach software engineering as a continuous feedback loop: understand the user, model the system, ship a small version, measure where it bends, then improve the architecture. My current focus is modern frontend engineering, AI-enabled workflows, automation systems, and the fundamentals that make products reliable.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {["Build useful things", "Automate repeat work", "Learn in public"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[.045] p-4 text-sm text-white/72">{item}</div>
            ))}
          </div>
        </GlassCard>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
              <GlassCard className="h-full p-5">
                <p className="text-3xl font-semibold text-white"><AnimatedNumber value={stat.value} suffix={stat.suffix} /></p>
                <p className="mt-2 text-sm text-white/58">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
