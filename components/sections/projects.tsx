"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";
import { ChevronDown, ChevronUp, ExternalLink, Github, Terminal, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  isOpenToWork?: boolean;
  onOpenKernelAction: (projectTitle: string, isRecruiter?: boolean) => void;
}

export function Projects({ isOpenToWork = true, onOpenKernelAction }: ProjectsProps) {
  const [activeTitle, setActiveTitle] = useState<string | null>("Lead Intelligence Engine");
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSupportsHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const handleMouseEnter = (title: string) => {
    if (supportsHover) {
      setActiveTitle(title);
    }
  };

  const handleMouseLeave = () => {
    if (supportsHover) {
      setActiveTitle(null);
    }
  };

  const handleClick = (title: string) => {
    if (!supportsHover) {
      setActiveTitle((prev) => (prev === title ? null : title));
    }
  };

  return (
    <section id="projects" className="section-shell">
      <SectionHeading 
        kicker="Case Studies" 
        title="Product-Minded Engineering Work" 
        copy="Detailed breakdowns of systems I have designed and deployed, highlighting challenges, architectural decisions, and measurable outcomes." 
      />
      
      <div className="relative border-l-2 border-white/10 pl-6 ml-4 md:pl-10 md:ml-8 space-y-12">
        {projects.map((project, index) => {
          const isExpanded = activeTitle === project.title;
          return (
            <div 
              key={project.title} 
              className="relative group"
              onMouseEnter={() => handleMouseEnter(project.title)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(project.title)}
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-black text-xs font-bold text-cyan-200 shadow-[0_0_20px_rgba(98,230,255,0.2)] group-hover:border-cyan-200/50 transition duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              
              <GlassCard 
                className={cn(
                  "p-6 md:p-8 transition-all duration-300", 
                  isExpanded ? "border-cyan-200/40 shadow-[0_0_40px_rgba(98,230,255,0.08)] bg-white/[0.08]" : "hover:border-cyan-200/20"
                )}
                interactive={!isExpanded} // Disable the GlassCard tilt rotation when expanded to prevent clipping issues
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-xs text-white/68">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Expand/Collapse chevron indicator (useful visually on both mobile & desktop) */}
                    <div className="rounded-full bg-white/10 p-2.5 text-white transition flex items-center justify-center">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] border-t border-white/10 pt-6">
                        {/* Case Study Details */}
                        <div className="space-y-4">
                          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.02] p-5 hover:bg-rose-400/[0.04] transition duration-300">
                            <h4 className="text-xs font-bold text-rose-300 flex items-center gap-2 mb-2 uppercase tracking-wider">
                              <AlertTriangle size={14} /> The Problem
                            </h4>
                            <p className="text-sm leading-6 text-white/80">{project.problem}</p>
                          </div>
                          
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.02] p-5 hover:bg-cyan-400/[0.04] transition duration-300">
                            <h4 className="text-xs font-bold text-cyan-300 flex items-center gap-2 mb-2 uppercase tracking-wider">
                              <Lightbulb size={14} /> The Solution
                            </h4>
                            <p className="text-sm leading-6 text-white/80">{project.solution}</p>
                          </div>

                          <div className="rounded-2xl border border-lime-400/20 bg-lime-400/[0.02] p-5 hover:bg-lime-400/[0.04] transition duration-300">
                            <h4 className="text-xs font-bold text-lime-300 flex items-center gap-2 mb-2 uppercase tracking-wider">
                              <TrendingUp size={14} /> The Outcome
                            </h4>
                            <p className="text-sm leading-6 text-white/80">{project.outcome}</p>
                          </div>
                        </div>

                        {/* Integrated Architecture Explorer */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between h-full">
                          <div>
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-200 mb-4 flex items-center gap-2">
                              <Terminal size={14} /> Architecture Explorer
                            </h4>
                            <div className="space-y-3">
                              {project.architecture.map((layer, idx) => (
                                <div key={layer} className="flex items-center gap-3">
                                  <div className="grid h-7 w-7 place-items-center rounded-full bg-cyan-200/10 text-xs font-semibold text-cyan-200">
                                    {idx + 1}
                                  </div>
                                  <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 text-xs font-medium text-white/80">
                                    {layer}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs font-semibold text-white/60 hover:text-white flex items-center gap-1.5 transition"
                            >
                              <Github size={14} /> GitHub Repo
                            </a>
                            {project.demo !== "#" && (
                              <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs font-semibold text-cyan-200 hover:text-cyan-100 flex items-center gap-1.5 transition"
                              >
                                <ExternalLink size={14} /> Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-white/5 pt-5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenKernelAction(project.title, false);
                          }}
                          className={cn(
                            "w-full text-xs font-bold py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition duration-300 cursor-pointer",
                            isOpenToWork 
                              ? "bg-green-500/10 border-green-500/30 text-green-300 hover:bg-green-500/20 hover:border-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]" 
                              : "bg-cyan-500/10 border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                          )}
                        >
                          <Terminal size={13} /> Access Development Records
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
