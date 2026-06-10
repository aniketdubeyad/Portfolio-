"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, projects, skillCategories } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";

export function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const commands = useMemo(
    () => [
      ...navItems.map((item) => ({ label: `Go to ${item.label}`, action: () => scrollToSection(item.href) })),
      ...projects.map((project) => ({ label: `Project: ${project.title}`, action: () => scrollToSection("projects") })),
      ...skillCategories.flatMap((category) => category.skills.map((skill) => ({ label: `Skill: ${skill}`, action: () => scrollToSection("skills") }))),
      { label: "Download Resume", action: () => window.open("/resume.pdf", "_blank") },
      { label: "Contact Aniket", action: () => scrollToSection("contact") }
    ],
    []
  );
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase())).slice(0, 8);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[90] bg-black/50 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div
            className="glass mx-auto mt-24 max-w-xl overflow-hidden rounded-3xl"
            initial={{ y: 16, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 16, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search size={18} className="text-cyan-200" />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Aniket OS..." className="w-full bg-transparent text-sm outline-none placeholder:text-white/36" />
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((command) => (
                <button
                  key={command.label}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-white/78 hover:bg-white/10"
                  onClick={() => {
                    command.action();
                    setOpen(false);
                  }}
                >
                  {command.label}
                  {command.label.includes("Resume") ? <Download size={16} /> : command.label.includes("Contact") ? <Mail size={16} /> : null}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
