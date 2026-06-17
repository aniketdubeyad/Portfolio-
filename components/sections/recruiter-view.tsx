"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Briefcase, Download, FolderGit, Github, Linkedin, Mail, MapPin, Sparkles, Terminal, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface RecruiterViewProps {
  onExitAction: () => void;
  isOpenToWork: boolean;
  onToggleOpenToWorkAction: () => void;
}

export function RecruiterView({ onExitAction, isOpenToWork, onToggleOpenToWorkAction }: RecruiterViewProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");

    const subject = encodeURIComponent(`Contact from ${name} - Recruiter Portfolio`);
    const body = encodeURIComponent(
      `Hi Aniket,\n\n${message}\n\n---\nName: ${name}\nEmail: ${email}`
    );
    const mailtoUrl = `mailto:aniket310dubey@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setStatus("success");

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("idle");
    }, 1500);
  };

  const stats = [
    { label: "Data Products", value: "5+" },
    { label: "Datasets Analyzed", value: "10K+" },
    { label: "Specialist Area", value: "Python + SQL" },
    { label: "Core Focus", value: "Data & Analytics" }
  ];

  const technicalImpacts = [
    {
      title: "BeatMetrics",
      description: "Aggregates Spotify performance metrics and user listening cohorts for data analytics.",
      impact: "Provides artists with actionable music intelligence and demographic listener insights."
    },
    {
      title: "AI Resume Optimizer",
      description: "Built an AI-powered resume analysis platform parsing document layouts.",
      impact: "Provides instant ATS-focused keyword optimization recommendations."
    },
    {
      title: "Portfolio OS",
      description: "Developed an interactive analytics dashboard and portfolio operating system.",
      impact: "Communicates candidate data story, skill graph, and recruiter snapshot in real-time."
    }
  ];

  const featuredProject = {
    title: "BeatMetrics",
    problem: "Streaming platforms generate massive amounts of performance data, but artists and listeners often lack accessible tools to understand trends, audience behavior, and growth opportunities.",
    solution: "Built BeatMetrics, a data-driven analytics platform that aggregates Spotify insights and transforms raw metrics into meaningful visualizations and actionable intelligence.",
    technologies: ["React", "TypeScript", "Vite", "Recharts", "PostgreSQL", "Python", "SQLite"],
    outcome: "Created a music analytics engine that processes 10K+ streaming events, delivering interactive dashboards with real-time insight generation.",
    github: "https://github.com/aniketdubeyad/BeatMetrics",
    demo: "#"
  };

  // Dynamic color accent styles based on isOpenToWork
  const accentText = isOpenToWork ? "text-green-300" : "text-cyan-200";
  const accentDot = isOpenToWork ? "bg-green-400" : "bg-cyan-200";
  const accentBorder = isOpenToWork ? "border-green-400/20" : "border-cyan-200/20";

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
      
      {/* 1. Recruiter Mode Active Badge Banner */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] sm:w-auto">
        <motion.div 
          animate={{ borderColor: isOpenToWork ? "rgba(34,197,94,0.4)" : "rgba(98,230,255,0.3)" }}
          className={cn(
            "glass rounded-full px-4 py-2 flex items-center justify-between sm:justify-start gap-3 bg-black/80 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-xs font-semibold transition-all duration-300",
            isOpenToWork ? "text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.15)]" : "text-cyan-200 shadow-[0_0_20px_rgba(98,230,255,0.15)]"
          )}
        >
          <div className="flex items-center gap-2">
            <span className={cn("h-2 w-2 rounded-full animate-pulse", accentDot)} />
            <span>Recruiter Mode Active</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleOpenToWorkAction}
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-bold border transition duration-300 cursor-pointer",
                isOpenToWork ? "border-green-400/30 bg-green-400/10 text-green-300 hover:bg-green-400/20" : "border-white/10 bg-white/5 text-white hover:bg-white/10"
              )}
            >
              {isOpenToWork ? "🟢 Open to Work" : "⚫ Not Looking"}
            </button>
            <button 
              onClick={onExitAction}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1 text-[10px] transition cursor-pointer"
            >
              Exit
            </button>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start mt-8">
        
        {/* LEFT COLUMN: Main Resume Info */}
        <div className="space-y-12">
          
          {/* Recruiter Status Banner (Slide-in / Toggle Animation) */}
          <AnimatePresence>
            {isOpenToWork && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -15 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <GlassCard className="p-5 md:p-6 border-green-500/30 bg-green-500/[0.01] shadow-[0_0_35px_rgba(34,197,94,0.08)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-sm font-extrabold text-green-300 flex items-center gap-2 tracking-wider">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-ping" />
                        🟢 OPEN TO DATA SCIENCE & AI OPPORTUNITIES
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4 mt-4 text-xs">
                        <div>
                          <p className="font-bold text-white/50 mb-1.5 uppercase tracking-wider">Currently Seeking:</p>
                          <ul className="space-y-1 text-white/80 font-medium">
                            <li>&bull; Data Scientist</li>
                            <li>&bull; AI & Analytics Engineer</li>
                            <li>&bull; Machine Learning Engineer</li>
                            <li>&bull; Data Analyst / BI Specialist</li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-bold text-white/50 mb-1.5 uppercase tracking-wider">Available For:</p>
                          <ul className="space-y-1 text-white/80 font-medium">
                            <li>&bull; Full-time Roles</li>
                            <li>&bull; Internships</li>
                            <li>&bull; Freelance Projects</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start justify-center text-xs text-green-300/80 border-t md:border-t-0 md:border-l border-green-400/20 pt-4 md:pt-0 md:pl-6 h-full">
                      <span className="font-bold">Preferred Location:</span>
                      <span className="text-white mt-0.5">India (Remote/Hybrid)</span>
                      <span className="font-bold mt-2">Availability:</span>
                      <span className="text-white mt-0.5">Immediate</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* 2. Recruiter Summary Hero Section */}
          <section id="summary" className="scroll-mt-28">
            <motion.div
              layout
              transition={{ duration: 0.4 }}
            >
              <GlassCard className={cn("p-6 md:p-8 transition-colors duration-300", isOpenToWork ? "border-green-400/25" : "border-cyan-200/20")}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <h1 className="text-4xl font-extrabold text-white">Aniket Dubey</h1>
                    <p className={cn("text-lg font-semibold mt-1 transition-colors duration-300", accentText)}>Data Scientist | AI & Analytics Engineer</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/50">
                      <span className="flex items-center gap-1"><MapPin size={14} /> India</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> Open to remote & relocation</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant="primary" 
                        onClick={() => window.open("/resume.pdf", "_blank")}
                        className={cn(
                          "text-xs font-bold px-4 py-2 flex items-center gap-1.5 transition-all duration-300",
                          isOpenToWork ? "bg-green-500 hover:bg-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.2)]" : "bg-white text-black"
                        )}
                      >
                        <Download size={14} /> Download Resume
                      </Button>
                      <Button 
                        variant="glass" 
                        onClick={() => scrollToSection("contact-recruiter")}
                        className={cn("text-xs font-bold px-4 py-2", isOpenToWork && "border-green-400/20 hover:border-green-400/40 text-green-300")}
                      >
                        Contact Me
                      </Button>
                    </div>
                    {isOpenToWork && (
                      <span className="text-[10px] font-semibold text-green-300 flex items-center gap-1 mt-1 self-start md:self-auto">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Available for Opportunities
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1fr] gap-4">
                  {/* Left Sub-panel: Summary text */}
                  <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-2">Professional Summary</h3>
                    <p className="text-sm leading-7 text-white/80">
                      Data Scientist and AI Engineer focused on analytics, machine learning, automation, and intelligent systems. I turn raw data into actionable business insights and predictive models.
                    </p>
                    <p className="text-sm leading-7 text-white/80 mt-2">
                      I enjoy solving real-world problems through data analysis, workflow automation, and dashboard visualization.
                    </p>
                  </div>
                  
                  {/* Right Sub-panel: Recruiter Mode Quick Summary Status Card */}
                  <div className={cn(
                    "rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300",
                    isOpenToWork ? "border-green-400/20 bg-green-400/[0.01]" : "border-white/5 bg-white/[0.01]"
                  )}>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-3">Hiring Status</h4>
                      <div className="space-y-2.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 font-medium">Current Status:</span>
                          <span className="font-bold flex items-center gap-1.5 text-white">
                            {isOpenToWork ? "🟢 Actively Looking" : "⚫ Not Looking"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 font-medium">Location:</span>
                          <span className="font-bold text-white">India</span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-white/60 font-medium whitespace-nowrap">Preferred Roles:</span>
                          <span className="font-bold text-white text-right">
                            Data Science, AI & Analytics
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 font-medium">Availability:</span>
                          <span className="font-bold text-white">
                            {isOpenToWork ? "Immediate" : "Not Available"}
                          </span>
                        </div>
                      </div>
                    </div>
                    {isOpenToWork && (
                      <div className="mt-4 text-[10px] text-green-300 font-semibold bg-green-400/5 rounded-lg px-2.5 py-1 border border-green-400/10 text-center">
                        🟢 Open to interviews
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Stats Bento */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
                      <p className={cn("text-2xl font-bold transition-colors duration-300", accentText)}>{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </section>

          {/* 3. Technical Impact Section */}
          <section id="impact" className="scroll-mt-28">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles size={18} className={accentText} /> Technical Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {technicalImpacts.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <GlassCard className={cn("p-5 flex flex-col justify-between h-full hover:border-white/20 transition-all duration-300", isExpanded(item.title) ? accentBorder : "")}>
                    <div>
                      <h3 className="font-bold text-base text-white">{item.title}</h3>
                      <p className="text-xs leading-5 text-white/60 mt-2">{item.description}</p>
                    </div>
                    <div className={cn("mt-4 rounded-xl border p-3 transition-colors duration-300", isOpenToWork ? "border-green-400/10 bg-green-400/[0.01]" : "border-cyan-200/10 bg-cyan-200/[0.01]")}>
                      <p className={cn("text-[10px] font-bold uppercase tracking-wider mb-1 transition-colors duration-300", accentText)}>Impact</p>
                      <p className="text-xs leading-5 text-white/80">{item.impact}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. Featured Project Section */}
          <section id="featured" className="scroll-mt-28">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FolderGit size={18} className={isOpenToWork ? "text-green-300" : "text-rose-300"} /> Featured Project
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className={cn(
                "p-6 md:p-8 border bg-white/[0.04] transition-all duration-300",
                isOpenToWork 
                  ? "border-green-300/35 shadow-[0_0_50px_rgba(34,197,94,0.06)]" 
                  : "border-rose-300/20 shadow-[0_0_50px_rgba(255,122,182,0.06)]"
              )}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className={cn(
                      "rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-300",
                      isOpenToWork 
                        ? "bg-green-400/10 border-green-400/20 text-green-300" 
                        : "bg-rose-400/10 border-rose-400/20 text-rose-300"
                    )}>
                      Flagship System
                    </span>
                    <h3 className="text-3xl font-extrabold text-white mt-2">{featuredProject.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button 
                      variant="glass" 
                      size="sm" 
                      onClick={() => window.open(featuredProject.github, "_blank")}
                      className={cn(
                        "text-xs font-semibold flex items-center gap-1.5 transition-all duration-300",
                        isOpenToWork && "border-green-400/20 hover:border-green-400/40 text-green-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                      )}
                    >
                      <Github size={14} /> GitHub Repository
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className={cn(
                      "rounded-2xl border p-4 transition-colors duration-300",
                      isOpenToWork ? "border-green-400/10 bg-green-400/[0.01]" : "border-rose-400/20 bg-rose-400/[0.01]"
                    )}>
                      <h4 className={cn(
                        "text-xs font-bold flex items-center gap-1.5 mb-1 uppercase tracking-wider transition-colors duration-300",
                        isOpenToWork ? "text-green-300" : "text-rose-300"
                      )}>
                        <AlertTriangle size={13} /> The Problem
                      </h4>
                      <p className="text-xs leading-5 text-white/80">{featuredProject.problem}</p>
                    </div>

                    <div className={cn(
                      "rounded-2xl border p-4 transition-colors duration-300",
                      isOpenToWork ? "border-green-400/10 bg-green-400/[0.01]" : "border-cyan-400/20 bg-cyan-400/[0.01]"
                    )}>
                      <h4 className={cn(
                        "text-xs font-bold flex items-center gap-1.5 mb-1 uppercase tracking-wider transition-colors duration-300",
                        isOpenToWork ? "text-green-300" : "text-cyan-300"
                      )}>
                        <Lightbulb size={13} /> The Solution
                      </h4>
                      <p className="text-xs leading-5 text-white/80">{featuredProject.solution}</p>
                    </div>

                    <div className={cn(
                      "rounded-2xl border p-4 transition-colors duration-300",
                      isOpenToWork ? "border-green-400/10 bg-green-400/[0.01]" : "border-lime-400/20 bg-lime-400/[0.01]"
                    )}>
                      <h4 className={cn(
                        "text-xs font-bold flex items-center gap-1.5 mb-1 uppercase tracking-wider transition-colors duration-300",
                        isOpenToWork ? "text-green-300" : "text-lime-300"
                      )}>
                        <TrendingUp size={13} /> The Outcome
                      </h4>
                      <p className="text-xs leading-5 text-white/80">{featuredProject.outcome}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-4 flex items-center gap-2">
                        <Terminal size={14} /> Technologies Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-1.5 text-xs text-white/80 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 text-xs text-white/40 bg-black/20 rounded-xl p-3 border border-white/5">
                      This lead engine integrates automated web API queries, asynchronous parsing layers, OpenAI bio parsing, and auto-export endpoints.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </section>

          {/* 5. Contact Section */}
          <section id="contact-recruiter" className="scroll-mt-28 border-t border-white/10 pt-12">
            <h2 className="text-xl font-bold text-white mb-6">Interested in working together?</h2>
            <GlassCard className={cn("p-6 md:p-8 transition-colors duration-300", isOpenToWork ? "border-green-400/20 shadow-[0_0_40px_rgba(34,197,94,0.06)]" : "")}>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Left Side: Contact Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <h3 className="text-lg font-semibold text-white">Send a Direct Message</h3>
                  <input
                    aria-label="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={cn(
                      "w-full text-white placeholder:text-white/40 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 outline-none transition duration-300",
                      isOpenToWork ? "focus:border-green-400/60 focus:bg-white/10" : "focus:border-cyan-300/60 focus:bg-white/10"
                    )}
                  />
                  <input
                    aria-label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={cn(
                      "w-full text-white placeholder:text-white/40 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 outline-none transition duration-300",
                      isOpenToWork ? "focus:border-green-400/60 focus:bg-white/10" : "focus:border-cyan-300/60 focus:bg-white/10"
                    )}
                  />
                  <textarea
                    aria-label="Message"
                    placeholder="Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={cn(
                      "w-full text-white placeholder:text-white/40 resize-none rounded-2xl border border-white/20 bg-white/5 px-4 py-3 outline-none transition duration-300",
                      isOpenToWork ? "focus:border-green-400/60 focus:bg-white/10" : "focus:border-cyan-300/60 focus:bg-white/10"
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={status !== "idle"}
                    className={cn(
                      "w-full text-xs font-bold py-3 flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer",
                      isOpenToWork ? "bg-green-500 hover:bg-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]" : ""
                    )}
                  >
                    <Mail size={16} />
                    {status === "idle" ? "Send Message" : status === "sending" ? "Preparing Email..." : "Opening Mail Client..."}
                  </Button>
                </form>

                {/* Right Side: Quick Links */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Direct Connections</h3>
                    <p className="text-sm text-white/60 mt-2 leading-6">
                      I am actively seeking data science and AI/analytics engineer opportunities. Reach out if you need an engineer comfortable building dashboards, training models, and scripting automated data workflows.
                    </p>
                  </div>
                  <div className="space-y-4 mt-6">
                    <a 
                      href="mailto:aniket310dubey@gmail.com" 
                      className={cn(
                        "flex items-center gap-3 rounded-2xl border bg-white/[0.02] p-4 text-sm text-white/80 hover:bg-white/[0.05] transition duration-300",
                        isOpenToWork ? "border-green-400/20 hover:text-green-300" : "border-white/10 hover:text-cyan-200"
                      )}
                    >
                      <Mail size={18} className={isOpenToWork ? "text-green-300" : "text-cyan-200"} />
                      <span className="font-semibold">aniket310dubey@gmail.com</span>
                    </a>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href="https://www.linkedin.com/in/aniiket310dubey" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={cn(
                          "flex items-center justify-center gap-2 rounded-2xl border bg-white/[0.02] py-3 text-xs text-white/80 hover:bg-white/[0.05] transition duration-300",
                          isOpenToWork ? "border-green-400/20 hover:text-green-300" : "border-white/10 hover:text-cyan-200"
                        )}
                      >
                        <Linkedin size={16} /> LinkedIn
                      </a>
                      <a 
                        href="https://github.com/aniketdubeyad" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={cn(
                          "flex items-center justify-center gap-2 rounded-2xl border bg-white/[0.02] py-3 text-xs text-white/80 hover:bg-white/[0.05] transition duration-300",
                          isOpenToWork ? "border-green-400/20 hover:text-green-300" : "border-white/10 hover:text-cyan-200"
                        )}
                      >
                        <Github size={16} /> GitHub
                      </a>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 w-full">
                      <Button 
                        variant="glass" 
                        onClick={() => window.open("/resume.pdf", "_blank")}
                        className={cn(
                          "w-full text-xs font-bold py-3 flex items-center justify-center gap-1.5 transition-all duration-300",
                          isOpenToWork ? "border-green-400/25 text-green-300 hover:border-green-400/45 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]" : "border-white/10"
                        )}
                      >
                        <Download size={14} /> Download My Resume (PDF)
                      </Button>
                      {isOpenToWork && (
                        <span className="text-[10px] font-semibold text-green-300 flex items-center gap-1 mt-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Available for Opportunities
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>

        {/* RIGHT COLUMN: 6. Quick Resume Sticky Panel (Desktop) */}
        <aside className="hidden lg:block sticky top-28 space-y-4">
          <GlassCard className={cn("p-5 transition-colors duration-300", isOpenToWork ? "border-green-400/20" : "border-cyan-200/10")}>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-4 flex items-center gap-1">
              <Briefcase size={12} /> Contact Sheet
            </h4>
            <div className="space-y-2.5">
              <div className="flex flex-col items-center gap-1">
                <Button 
                  variant="primary" 
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className={cn(
                    "w-full text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-all duration-300",
                    isOpenToWork ? "bg-green-500 hover:bg-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.25)]" : "bg-white text-black"
                  )}
                >
                  <Download size={14} /> Download Resume
                </Button>
                {isOpenToWork && (
                  <span className="text-[9px] font-semibold text-green-300 flex items-center gap-1 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Available for Opportunities
                  </span>
                )}
              </div>
              <a 
                href="mailto:aniket310dubey@gmail.com" 
                className={cn(
                  "flex items-center justify-center gap-2 w-full rounded-full border bg-white/[0.05] hover:bg-white/10 py-2.5 text-xs font-semibold text-white transition duration-300",
                  isOpenToWork ? "border-green-400/20 hover:text-green-300" : "border-white/10"
                )}
              >
                <Mail size={14} /> Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/aniiket310dubey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "flex items-center justify-center gap-2 w-full rounded-full border bg-white/[0.05] hover:bg-white/10 py-2.5 text-xs font-semibold text-white transition duration-300",
                  isOpenToWork ? "border-green-400/20 hover:text-green-300" : "border-white/10"
                )}
              >
                <Linkedin size={14} /> LinkedIn Profile
              </a>
              <a 
                href="https://github.com/aniketdubeyad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "flex items-center justify-center gap-2 w-full rounded-full border bg-white/[0.05] hover:bg-white/10 py-2.5 text-xs font-semibold text-white transition duration-300",
                  isOpenToWork ? "border-green-400/20 hover:text-green-300" : "border-white/10"
                )}
              >
                <Github size={14} /> GitHub Profile
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-center text-[10px] text-white/40">
              Aniket Dubey &bull; Data Scientist | AI & Analytics Engineer
            </div>
          </GlassCard>
        </aside>
      </div>

      {/* MOBILE FLOATING CONTACT PANEL (Fixed bottom screen, hidden on large desktop) */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <GlassCard className={cn(
          "p-3 bg-black/80 backdrop-blur-lg shadow-[0_-4px_30px_rgba(0,0,0,0.5)] transition-colors duration-300",
          isOpenToWork ? "border-green-400/30" : "border-cyan-200/20"
        )}>
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col items-center">
              <Button 
                variant="primary" 
                onClick={() => window.open("/resume.pdf", "_blank")}
                className={cn(
                  "w-full text-xs font-bold py-2 px-1 flex items-center justify-center gap-1 transition-all duration-300",
                  isOpenToWork ? "bg-green-500 hover:bg-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]" : "bg-white text-black"
                )}
              >
                <Download size={13} /> Resume
              </Button>
            </div>
            <a 
              href="mailto:aniket310dubey@gmail.com" 
              className={cn(
                "flex-1 flex items-center justify-center gap-1 rounded-full border bg-white/[0.05] py-2 text-xs font-semibold text-white text-center transition duration-300",
                isOpenToWork ? "border-green-400/20 text-green-300" : "border-white/10"
              )}
            >
              <Mail size={13} /> Email
            </a>
            <a 
              href="https://www.linkedin.com/in/aniiket310dubey" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "flex-1 flex items-center justify-center gap-1 rounded-full border bg-white/[0.05] py-2 text-xs font-semibold text-white text-center transition duration-300",
                isOpenToWork ? "border-green-400/20 text-green-300" : "border-white/10"
              )}
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a 
              href="https://github.com/aniketdubeyad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "flex-1 flex items-center justify-center gap-1 rounded-full border bg-white/[0.05] py-2 text-xs font-semibold text-white text-center transition duration-300",
                isOpenToWork ? "border-green-400/20 text-green-300" : "border-white/10"
              )}
            >
              <Github size={13} /> GitHub
            </a>
          </div>
          {isOpenToWork && (
            <div className="text-[8px] font-bold text-green-300 flex items-center justify-center gap-1 mt-1 text-center">
              🟢 Available for Opportunities
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );

  // Helper helper to check if card matches featured
  function isExpanded(title: string) {
    return title === "BeatMetrics";
  }
}
