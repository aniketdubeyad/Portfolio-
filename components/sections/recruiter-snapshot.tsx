"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Briefcase, Download, ExternalLink, FolderGit, Github, Linkedin, MapPin, MessageSquare, Terminal, User } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function RecruiterSnapshot() {
  const coreStrengths = [
    "Data Analytics",
    "Machine Learning",
    "AI Engineering",
    "Dashboard Development",
    "Data Visualization",
    "API Integration",
    "Automation Systems",
    "Business Intelligence"
  ];
  const recentProjects = [
    { name: "AI Resume Optimizer", href: "projects" },
    { name: "BeatMetrics", href: "projects" },
    { name: "Portfolio OS", href: "projects" }
  ];

  return (
    <section id="snapshot" className="section-shell">
      <SectionHeading
        kicker="TL;DR Profile"
        title="Why Recruiters Stop Scrolling"
        copy="A rapid overview of my skills, projects, impact, and technical strengths—designed to deliver the signal before the interview."
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Candidate Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-200 mb-4">
                <User size={18} />
                <span className="text-xs uppercase tracking-wider font-semibold">Candidate</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Aniket Dubey</h3>
              <p className="text-sm text-white/80 flex items-center gap-2 mt-3 font-semibold">
                <Briefcase size={16} className="text-white/40" />
                Data Scientist | AI & Analytics Engineer
              </p>
              <p className="text-sm text-white/80 flex items-center gap-2 mt-2">
                <MapPin size={16} className="text-white/40" />
                India
              </p>
              <p className="text-xs text-white/60 mt-3 leading-relaxed border-t border-white/5 pt-3">
                Data Scientist and AI Engineer focused on analytics, machine learning, automation, and intelligent systems.
              </p>
            </div>
            <div className="mt-6 text-xs text-white/50 border-t border-white/5 pt-3">
              Open to remote & relocation
            </div>
          </GlassCard>
        </motion.div>

        {/* Card 2: Core Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-2 text-lime-200 mb-4">
                <Terminal size={18} />
                <span className="text-xs uppercase tracking-wider font-semibold">Core Strengths</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreStrengths.map((tech) => (
                  <span 
                     key={tech} 
                     className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-xs text-white/80 font-medium hover:border-lime-200/40 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 text-xs text-white/50 border-t border-white/5 pt-3">
              Data science, ML, & analytics
            </div>
          </GlassCard>
        </motion.div>

        {/* Card 3: Recent Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-2 text-rose-300 mb-4">
                <FolderGit size={18} />
                <span className="text-xs uppercase tracking-wider font-semibold">Recent Work</span>
              </div>
              <ul className="space-y-2.5">
                {recentProjects.map((project) => (
                  <li key={project.name} className="group flex items-center justify-between">
                    <button 
                      onClick={() => scrollToSection(project.href)}
                      className="text-sm text-white/80 hover:text-rose-300 transition text-left flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-300/60 group-hover:bg-rose-300 transition" />
                      {project.name}
                    </button>
                    <ExternalLink size={12} className="text-white/30 group-hover:text-rose-300 transition" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-xs text-white/50 border-t border-white/5 pt-3">
              Recruiter-optimized case studies
            </div>
          </GlassCard>
        </motion.div>

        {/* Card 4: Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlassCard className="flex h-full flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-2 text-amber-200 mb-4">
                <MessageSquare size={18} />
                <span className="text-xs uppercase tracking-wider font-semibold">Quick Actions</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="glass" 
                  size="sm" 
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="w-full text-xs font-semibold px-2 py-2 flex items-center justify-center gap-1"
                >
                  <Download size={13} /> Resume
                </Button>
                <Button 
                  variant="glass" 
                  size="sm" 
                  onClick={() => window.open("https://github.com/aniketdubeyad", "_blank")}
                  className="w-full text-xs font-semibold px-2 py-2 flex items-center justify-center gap-1"
                >
                  <Github size={13} /> GitHub
                </Button>
                <Button 
                  variant="glass" 
                  size="sm" 
                  onClick={() => window.open("https://www.linkedin.com/in/aniiket310dubey", "_blank")}
                  className="w-full text-xs font-semibold px-2 py-2 flex items-center justify-center gap-1"
                >
                  <Linkedin size={13} /> LinkedIn
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-xs font-semibold px-2 py-2 flex items-center justify-center gap-1"
                >
                  <MessageSquare size={13} /> Contact
                </Button>
              </div>
            </div>
            <div className="mt-6 text-xs text-white/50 border-t border-white/5 pt-3 text-center">
              Let&apos;s build together!
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
