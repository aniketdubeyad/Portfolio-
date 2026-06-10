"use client";

import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn, scrollToSection } from "@/lib/utils";

const recruiterNavItems = [
  { label: "Summary", href: "summary" },
  { label: "Impact", href: "impact" },
  { label: "Featured", href: "featured" },
  { label: "Contact", href: "contact-recruiter" }
];

export function Nav({ 
  onCommandAction, 
  onRecruiterAction, 
  recruiterMode,
  isOpenToWork,
  onToggleOpenToWorkAction
}: { 
  onCommandAction: () => void; 
  onRecruiterAction: () => void; 
  recruiterMode: boolean;
  isOpenToWork: boolean;
  onToggleOpenToWorkAction: () => void;
}) {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  const currentItems = recruiterMode ? recruiterNavItems : navItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-42% 0px -54% 0px" }
    );
    currentItems.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [currentItems, recruiterMode]);

  const jump = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4">
        <button className="flex items-center gap-3" onClick={() => jump(recruiterMode ? "summary" : "hero")} aria-label="Go to hero">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-black text-black">A</span>
          <span className="hidden text-sm font-semibold sm:inline">Aniket OS</span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {currentItems.map((item) => (
            <button
              key={item.href}
              onClick={() => jump(item.href)}
              className={cn("rounded-full px-3 py-2 text-sm text-white/62 transition hover:text-white cursor-pointer", active === item.href && "bg-white/10 text-white")}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {!recruiterMode && (
            <Button variant="ghost" size="icon" onClick={onCommandAction} aria-label="Open command palette">
              <Search size={18} />
            </Button>
          )}
          {recruiterMode && (
            <Button 
              variant="glass" 
              size="sm" 
              onClick={onToggleOpenToWorkAction}
              className={cn(
                "text-xs font-semibold px-3 py-1 flex items-center gap-1.5 cursor-pointer border transition-all duration-300", 
                isOpenToWork ? "border-green-400/20 text-green-300 hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]" : "border-white/10 text-white/50"
              )}
            >
              {isOpenToWork ? "🟢 Open to Work" : "⚫ Not Looking"}
            </Button>
          )}
          <Button 
            className="hidden sm:inline-flex" 
            variant={recruiterMode ? "primary" : "glass"} 
            size="sm" 
            onClick={onRecruiterAction}
          >
            {recruiterMode ? "Developer OS" : "Recruiter Mode"}
          </Button>
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-3 grid max-w-sm gap-1 rounded-3xl p-3 md:hidden">
          {currentItems.map((item) => (
            <button key={item.href} onClick={() => jump(item.href)} className="rounded-2xl px-4 py-3 text-left text-sm text-white/78 hover:bg-white/10 cursor-pointer">
              {item.label}
            </button>
          ))}
          {recruiterMode && (
            <Button 
              variant="glass" 
              onClick={() => {
                onToggleOpenToWorkAction();
                setOpen(false);
              }}
              className={cn(
                "text-xs font-semibold px-3 py-2 flex items-center justify-center gap-1.5 cursor-pointer border transition-all duration-300", 
                isOpenToWork ? "border-green-400/20 text-green-300" : "border-white/10 text-white/50"
              )}
            >
              {isOpenToWork ? "🟢 Open to Work" : "⚫ Not Looking"}
            </Button>
          )}
          <Button 
            variant={recruiterMode ? "primary" : "glass"} 
            onClick={() => {
              onRecruiterAction();
              setOpen(false);
            }}
          >
            {recruiterMode ? "Developer OS" : "Recruiter Mode"}
          </Button>
        </div>
      )}
    </header>
  );
}
