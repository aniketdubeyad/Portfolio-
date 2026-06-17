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
        kicker="Analytics Dashboard"
        title="Building Intelligence from Data, Not Assumptions."
        copy="Aniket OS is more than a portfolio—it's a living analytics ecosystem that connects projects, insights, AI systems, and technical growth into a single data-driven narrative."
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_.86fr]">
        <GlassCard className="p-6 md:p-8">
          <p className="text-lg leading-8 text-white/74">
            I approach data science and AI engineering as a continuous feedback loop: analyze the data, extract insights, develop predictive models, automate workflows, and deploy intelligent applications that drive business value. My work combines machine learning, business intelligence, dashboard visualization, and agentic workflows to solve real-world problems.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {["Data Before Assumptions", "Insights Create Impact", "Learning Through Experimentation"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm text-white/72">{item}</div>
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
