"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";

const responses: Record<string, string> = {
  help: "Commands: help, whoami, skills, projects, roadmap, resume, contact, automation",
  whoami: "Aniket Dubey - Software Engineer focused on modern web, AI applications, automation systems, and continuous learning.",
  skills: "Next.js, React, TypeScript, Tailwind, APIs, databases, AI workflows, n8n, cloud fundamentals.",
  projects: "Lead Intelligence Engine, AI SaaS Command Center, Modern Portfolio OS, Learning Roadmap Tracker.",
  roadmap: "System design, AI agents, advanced Next.js, automation engineering, and cloud technologies.",
  resume: "Opening resume route: /resume.pdf",
  contact: "Email: aniket310dubey@gmail.com | GitHub: https://github.com/aniketdubeyad | LinkedIn: https://www.linkedin.com/in/aniiket310dubey",
  automation: "Instagram Lead Finder -> Data Processing -> AI Analysis -> Excel Export -> Email Delivery"
};

export function TerminalSection() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState(["aniket_os:~$ help", responses.help]);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    if (command === "resume") window.open("/resume.pdf", "_blank");
    setLines((items) => [...items, `aniket_os:~$ ${command}`, responses[command] ?? "Command not found. Type help."]);
    setInput("");
  };
  return (
    <section id="terminal" className="section-shell deep-section">
      <SectionHeading kicker="Terminal" title="An authentic command surface for quick discovery." copy="Keyboard-first visitors can inspect the same portfolio data from a small developer terminal." />
      <GlassCard className="overflow-hidden">
        <div className="flex gap-2 border-b border-white/10 px-5 py-4"><span className="h-3 w-3 rounded-full bg-rose-300" /><span className="h-3 w-3 rounded-full bg-amber-200" /><span className="h-3 w-3 rounded-full bg-lime-300" /></div>
        <div className="min-h-80 p-5 font-mono text-sm text-white/72">
          {lines.slice(-10).map((line, index) => <p key={`${line}-${index}`} className={line.startsWith("aniket") ? "text-cyan-100" : "mb-3 text-white/58"}>{line}</p>)}
          <form onSubmit={submit} className="mt-4 flex gap-2">
            <span className="text-cyan-100">aniket_os:~$</span>
            <input value={input} onChange={(event) => setInput(event.target.value)} className="flex-1 bg-transparent outline-none" aria-label="Terminal command" />
          </form>
        </div>
      </GlassCard>
    </section>
  );
}
