"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, Cpu, Clock, BookOpen, ShieldCheck, AlertTriangle, Activity, Code, ListTodo, ChevronRight } from "lucide-react";
import { kernelProjectRecords } from "@/data/kernel-context";
import { cn } from "@/lib/utils";

interface KernelPanelProps {
  isOpen: boolean;
  onCloseAction: () => void;
  projectTitle: string;
  isRecruiterContext?: boolean;
  isOpenToWork?: boolean;
}

export function KernelPanel({
  isOpen,
  onCloseAction,
  projectTitle,
  isRecruiterContext = false,
  isOpenToWork = true
}: KernelPanelProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"origin" | "firstVersion" | "challenges" | "decisions" | "lessons" | "roadmap">("origin");
  const [isMobile, setIsMobile] = useState(false);

  const record = kernelProjectRecords[projectTitle] || null;

  // Track responsive screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Listen for Escape key to close the panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onCloseAction();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onCloseAction]);

  // Boot animation sequence when opened
  useEffect(() => {
    if (isOpen && projectTitle) {
      setIsLoading(true);
      setBootLines([]);
      setActiveTab("origin");

      const lines = [
        `KERNEL.SYS // INITIALIZING SECURE SHELL...`,
        `AUTHENTICATING OS CREDENTIALS... [OK]`,
        `SYNCING ACCESS NODE: "${projectTitle.toUpperCase()}"`,
        `DECRYPTING DATABASE RECORDS (ACC_LVL: ${isRecruiterContext ? "RECRUITER" : "PUBLIC"})...`,
        `CORE MEMORY LOADED. ACCESS GRANTED.`
      ];

      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < lines.length) {
          const lineText = lines[currentLine];
          if (lineText) {
            setBootLines((prev) => [...prev, lineText]);
          }
          currentLine++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 350);
        }
      }, 180);

      return () => clearInterval(interval);
    }
  }, [isOpen, projectTitle, isRecruiterContext]);

  // Visual Theme mapping based on isOpenToWork status
  const accentText = isOpenToWork ? "text-green-400" : "text-cyan-400";
  const accentBorder = isOpenToWork ? "border-green-500/30" : "border-cyan-500/30";
  const accentBg = isOpenToWork ? "bg-green-500/5" : "bg-cyan-500/5";
  const accentBadge = isOpenToWork ? "bg-green-500/10 text-green-300 border-green-500/20" : "bg-cyan-500/10 text-cyan-200 border-cyan-500/20";
  const accentGlow = isOpenToWork ? "shadow-[0_0_35px_rgba(34,197,94,0.1)]" : "shadow-[0_0_35px_rgba(6,182,212,0.1)]";
  const accentBullet = isOpenToWork ? "bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]" : "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]";
  const accentLine = isOpenToWork ? "bg-green-500/20" : "bg-cyan-500/20";
  const statusLed = isOpenToWork ? "bg-green-400" : "bg-cyan-400";

  const tabs = [
    { id: "origin" as const, label: "Origin" },
    { id: "firstVersion" as const, label: "First Version" },
    { id: "challenges" as const, label: "Challenges" },
    { id: "decisions" as const, label: "Decisions" },
    { id: "lessons" as const, label: "Lessons" },
    { id: "roadmap" as const, label: "Roadmap" }
  ];

  const panelVariants = {
    initial: isMobile ? { y: "100%" } : { x: "100%" },
    animate: isMobile ? { y: 0 } : { x: 0 },
    exit: isMobile ? { y: "100%" } : { x: "100%" }
  };

  const panelClasses = cn(
    "fixed bg-black/95 backdrop-blur-2xl border-cyan-500/20 z-50 flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300",
    accentBorder,
    isMobile 
      ? "bottom-0 left-0 right-0 w-full h-[85vh] rounded-t-[2rem] border-t" 
      : "top-0 right-0 bottom-0 w-full max-w-[650px] h-screen border-l"
  );

  return (
    <AnimatePresence>
      {isOpen && record && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onCloseAction}
            className="fixed inset-0 bg-black z-40 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={panelClasses}
          >
            {/* Scanlines layer */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.4))] bg-[length:100%_4px] opacity-10" />

            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-white/[0.01] flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2.5">
                <Cpu className={cn("h-5 w-5 animate-pulse", accentText)} />
                <div>
                  <h3 className="text-sm font-extrabold text-white tracking-wider uppercase font-mono flex items-center gap-1.5">
                    KERNEL // OS LOGS
                  </h3>
                  <p className="text-[9px] text-white/40 font-mono tracking-widest uppercase">
                    SECTOR // {record.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/5 px-2.5 py-1 text-[10px] text-white/50 font-mono">
                  <span className={cn("h-1.5 w-1.5 rounded-full animate-ping", statusLed)} />
                  <span>{isLoading ? "AUTHENTICATING" : "SECURED"}</span>
                </div>
                <button
                  onClick={onCloseAction}
                  className="rounded-full bg-white/5 hover:bg-white/10 p-2 text-white/60 hover:text-white border border-white/10 transition cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 md:p-6 overflow-y-auto relative z-10 scrollbar-thin">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  /* Boot Loading Screen */
                  <motion.div
                    key="boot-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col justify-between font-mono text-xs text-white/55 min-h-[300px]"
                  >
                    <div className="space-y-3 pt-4 pr-2">
                      {bootLines.map((line, idx) => {
                        const isCoreLine = line.includes("GRANTED") || line.includes("LOADED");
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.12 }}
                            className={cn("flex items-center gap-2", isCoreLine ? accentText : "")}
                          >
                            <Terminal size={12} className={isCoreLine ? accentText : "text-white/30"} />
                            <span>{line}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="space-y-2.5 border-t border-white/5 pt-6">
                      <div className="flex items-center justify-between text-[9px] text-white/40">
                        <span>DECRYPTING JOURNAL ARCHIVES...</span>
                        <span>{Math.min(bootLines.length * 20, 100)}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(bootLines.length * 20, 100)}%` }}
                          transition={{ duration: 0.2 }}
                          className={cn("h-full transition-all duration-300", isOpenToWork ? "bg-green-400" : "bg-cyan-400")}
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : isRecruiterContext ? (
                  /* Recruiter Prioritized Mode View */
                  <motion.div
                    key="recruiter-core"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Access Metadata Block */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/[0.01] border border-white/5 rounded-2xl p-4 font-mono text-[10px] text-white/50">
                      <div>
                        <p className="text-white/30 uppercase mb-0.5">Project Status</p>
                        <p className="text-white font-bold">{record.status}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase mb-0.5">Records</p>
                        <p className="text-white font-bold">{record.recordsFound} Node Logs</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase mb-0.5">Security Level</p>
                        <p className="text-white font-bold">{record.accessLevel}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase mb-0.5">Recruiter Core</p>
                        <p className={cn("font-bold uppercase", accentText)}>LOADED</p>
                      </div>
                    </div>

                    {/* Section: Project Impact */}
                    <div className={cn("rounded-2xl border p-5 bg-white/[0.01]", accentBorder, accentGlow)}>
                      <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-white flex items-center gap-2 mb-3">
                        <ShieldCheck size={14} className={accentText} /> Project Impact
                      </h4>
                      <p className="text-sm leading-6 text-white/90 font-medium">
                        {record.recruiterLogs.impact}
                      </p>
                    </div>

                    {/* Section: Key Achievements */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-white/60 flex items-center gap-2 mb-3">
                        <ListTodo size={14} className="text-cyan-200" /> Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {record.recruiterLogs.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80 leading-5">
                            <span className={cn("h-1.5 w-1.5 rounded-full mt-1.5 shrink-0", accentBullet)} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section: Technologies Applied */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-white/60 flex items-center gap-2 mb-3">
                        <Code size={14} className="text-rose-300" /> Tech Stack Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {record.recruiterLogs.techUsed.map((tech) => (
                          <span 
                            key={tech} 
                            className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1.5 text-xs text-white/80 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Section: Measurable Results */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 relative overflow-hidden">
                      <div className={cn("absolute top-0 right-0 w-24 h-24 blur-2xl opacity-10 rounded-full", accentBg)} />
                      <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-white/60 flex items-center gap-2 mb-2">
                        <Activity size={14} className="text-lime-300" /> Measurable Outcome
                      </h4>
                      <p className="text-sm leading-6 text-white/90 font-medium">
                        {record.recruiterLogs.results}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* Developer Detailed Mode View (Timeline + Tabs) */
                  <motion.div
                    key="developer-core"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6"
                  >
                    {/* Left Column: Chronological Timeline */}
                    <div className="space-y-4 pr-2 md:border-r md:border-white/5 md:pr-4">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-white/40 flex items-center gap-1.5 pb-2 border-b border-white/5">
                        <Clock size={12} /> Timeline Logs
                      </h4>
                      
                      <div className="relative pl-4 border-l border-white/10 space-y-5 py-2">
                        {record.timeline.map((item, idx) => (
                          <div key={idx} className="relative group">
                            {/* Bullet */}
                            <span className={cn("absolute -left-[20px] top-1 h-2.5 w-2.5 rounded-full border border-black transition-all", accentBullet)} />
                            
                            <p className="text-[9px] font-mono text-white/30 tracking-wider font-bold">
                              {item.date}
                            </p>
                            <p className="text-[10px] leading-4 text-white/70 font-semibold group-hover:text-white transition duration-200 mt-0.5">
                              {item.event}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Tabbed Journal Records */}
                    <div className="space-y-5 flex flex-col">
                      <div>
                        <h4 className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-white/40 flex items-center gap-1.5 pb-2 border-b border-white/5 mb-3">
                          <BookOpen size={12} /> Journal Log Explorer
                        </h4>
                        
                        {/* Flex Tab Navigation */}
                        <div className="flex flex-wrap gap-1 bg-white/[0.01] p-1 border border-white/5 rounded-xl">
                          {tabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={cn(
                                "text-[10px] font-mono px-2.5 py-1.5 rounded-lg border transition duration-300 cursor-pointer font-bold flex-1 text-center whitespace-nowrap",
                                activeTab === tab.id
                                  ? cn("bg-white/[0.08] text-white", accentBorder)
                                  : "bg-transparent border-transparent text-white/45 hover:text-white hover:bg-white/[0.02]"
                              )}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Display Window */}
                      <div className="bg-black/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden h-[280px] overflow-y-auto scrollbar-thin">
                        <span className="absolute top-2.5 right-3 text-[8px] font-mono text-white/15 tracking-widest">
                          RECORD_NODE // {activeTab.toUpperCase()}
                        </span>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                            className="text-xs leading-6 text-white/80 font-normal pr-2 pt-2"
                          >
                            {record.logs[activeTab]}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.01] flex items-center justify-between font-mono text-[9px] text-white/30 relative z-10 shrink-0">
              <span className="flex items-center gap-1"><Terminal size={10} /> ANIKET_OS // ROOT CORE</span>
              <span>SHA_256 // ENCRYPTED</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
