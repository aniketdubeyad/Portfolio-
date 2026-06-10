"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { blogArticles, BlogArticle } from "@/data/portfolio";
import { ArrowRight, BookOpen, Clock, X } from "lucide-react";

const categoryColors: Record<string, string> = {
  Automation: "text-cyan-300 border-cyan-300/20 bg-cyan-300/5",
  Engineering: "text-emerald-300 border-emerald-300/20 bg-emerald-300/5",
  AI: "text-rose-300 border-rose-300/20 bg-rose-300/5",
  Career: "text-amber-300 border-amber-300/20 bg-amber-300/5"
};

export function EngineeringNotes() {
  const [selected, setSelected] = useState<BlogArticle | null>(null);

  const renderArticleContent = (text: string) => {
    const lines = text.split("\n");
    let inCodeBlock = false;
    let codeLines: string[] = [];
    
    return lines.map((line, idx) => {
      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const codeText = codeLines.join("\n");
          codeLines = [];
          return (
            <pre key={idx} className="my-4 overflow-x-auto rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-cyan-200">
              <code>{codeText}</code>
            </pre>
          );
        } else {
          inCodeBlock = true;
          return null;
        }
      }
      
      if (inCodeBlock) {
        codeLines.push(line);
        return null;
      }
      
      // Subheaders
      if (line.startsWith("### ")) {
        return (
          <h4 key={idx} className="mt-6 mb-3 text-lg font-bold text-white flex items-center gap-2">
            {line.replace("### ", "")}
          </h4>
        );
      }

      // List items
      if (line.startsWith("* ") || line.startsWith("- ")) {
        return (
          <ul key={idx} className="list-disc pl-5 my-2 text-sm text-white/70">
            <li>{line.substring(2)}</li>
          </ul>
        );
      }
      
      // Numbered list items
      const numberedMatch = line.match(/^(\d+)\.\s(.*)/);
      if (numberedMatch) {
        return (
          <ol key={idx} className="list-decimal pl-5 my-2 text-sm text-white/70">
            <li>{numberedMatch[2]}</li>
          </ol>
        );
      }
      
      // Blank line
      if (line.trim() === "") {
        return <div key={idx} className="h-2" />;
      }
      
      // Paragraph
      return (
        <p key={idx} className="text-sm leading-7 text-white/70 mb-3">
          {line}
        </p>
      );
    }).filter((el) => el !== null);
  };

  return (
    <section id="notes" className="section-shell">
      <SectionHeading 
        kicker="Engineering Notes" 
        title="Lessons & Technical Deep Dives" 
        copy="Experiments, optimizations, and technical writeups from my journey building web products and automation pipelines." 
      />

      <div className="grid gap-4 md:grid-cols-2">
        {blogArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <GlassCard className="flex h-full flex-col justify-between p-6 md:p-8 hover:border-white/20 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[article.category] || "text-white/60 border-white/10"}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-white/40 flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition duration-300">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {article.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-white/40">{article.date}</span>
                <button 
                  onClick={() => setSelected(article)}
                  className="text-xs font-bold text-cyan-200 hover:text-cyan-100 flex items-center gap-1 transition cursor-pointer"
                >
                  Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition duration-300" />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto glass p-6 md:p-10 rounded-[2rem] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[selected.category] || "text-white/60 border-white/10"}`}>
                    {selected.category}
                  </span>
                  <span className="text-xs text-white/40 flex items-center gap-1">
                    <Clock size={12} /> {selected.readTime}
                  </span>
                </div>
                <button 
                  onClick={() => setSelected(null)}
                  className="rounded-full bg-white/10 hover:bg-white/15 p-2 text-white/80 hover:text-white transition cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Title & Metadata */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{selected.title}</h2>
              <p className="text-xs text-white/40 mb-6 flex items-center gap-1.5">
                <BookOpen size={13} /> Published on {selected.date} by Aniket Dubey
              </p>

              {/* Parsed content */}
              <div className="prose prose-invert max-w-none text-white/80">
                {renderArticleContent(selected.content)}
              </div>

              {/* Bottom close CTA */}
              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button 
                  onClick={() => setSelected(null)}
                  className="rounded-full bg-white text-black font-semibold px-5 py-2.5 text-xs hover:bg-cyan-100 transition cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
