"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Download, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/glass-card";
import { scrollToSection } from "@/lib/utils";

const AICore = dynamic(() => import("@/components/three/ai-core"), {
  ssr: false,
  loading: () => <div className="grid h-full place-items-center text-sm text-white/50">Initializing neural core...</div>
});

export function Hero() {
  return (
    <section id="hero" className="section-shell grid min-h-screen items-center gap-10 pt-28 lg:grid-cols-[1.02fr_.98fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="kicker mb-4">ANIKET DUBEY / PORTFOLIO OS</p>
        <h1 className="text-balance text-4xl font-semibold tracking-normal text-white md:text-5xl lg:text-6xl">
          Software Engineer Building AI-Powered Products & Automation Systems
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          I build web applications, automation workflows, and AI tools using Next.js, TypeScript, Node.js, and modern cloud technologies.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => scrollToSection("projects")}><Sparkles size={18} />View Projects</Button>
          <Button variant="glass" onClick={() => window.open("/resume.pdf", "_blank")}><Download size={18} />Download Resume</Button>
          <Button variant="ghost" onClick={() => window.open("https://github.com/aniketdubeyad", "_blank")}><Github size={18} />GitHub</Button>
        </div>
      </motion.div>
      <GlassCard className="decorative-system relative h-[420px] rounded-[2rem] p-3 md:h-[560px]">
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/62">AI CORE ONLINE</div>
        <AICore />
        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
          {["Latency 12ms", "Nodes 32", "Signal 98%"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-center text-xs text-white/62 backdrop-blur-xl">{item}</div>
          ))}
        </div>
      </GlassCard>
      <button aria-label="Scroll to about" onClick={() => scrollToSection("about")} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-white/60 md:block">
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
