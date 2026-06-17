"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";

const responses: Record<string, string> = {
  help: "Commands: help, whoami, skills, projects, roadmap, resume, contact",
  whoami: "Aniket Dubey - Data Scientist | AI & Analytics Engineer focused on analytics, machine learning, automation, and intelligent systems.",
  skills: "Analytics: Excel, SQL, Power BI, Tableau, KPI Reporting | Programming: Python, Pandas, NumPy, Data Wrangling, Automation | Machine Learning: Scikit-Learn, Regression, Classification, Clustering | AI: LLM Applications, Prompt Engineering, RAG Basics, AI Workflows, Agentic Systems | Data Science: EDA, Statistics, Data Cleaning, Visualization, Model Evaluation | Cloud & Tools: Git, GitHub, Jupyter, Streamlit, AWS Basics",
  projects: "BeatMetrics (Spotify Analytics Dashboard), AI Resume Optimizer (ATS Analytics Engine), Portfolio OS (Aniket OS)",
  roadmap: "Python -> SQL -> Analytics -> Visualization -> Machine Learning -> AI Engineering -> Intelligent Systems",
  resume: "Opening resume route: /resume.pdf",
  contact: "Email: aniket310dubey@gmail.com | GitHub: https://github.com/aniketdubeyad | LinkedIn: https://www.linkedin.com/in/aniiket310dubey"
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
      <SectionHeading kicker="Terminal" title="Explore the Portfolio Like a Dataset." copy="A keyboard-first command interface that lets visitors navigate projects, insights, technologies, and analytics workflows with speed and precision." />
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
