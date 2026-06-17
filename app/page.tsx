"use client";

import { useEffect, useState } from "react";
import { BootSequence } from "@/components/boot-sequence";
import { CommandPalette } from "@/components/command-palette";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { RecruiterSnapshot } from "@/components/sections/recruiter-snapshot";
import { EngineeringNotes } from "@/components/sections/engineering-notes";
import { RecruiterView } from "@/components/sections/recruiter-view";
import { SkillNetwork } from "@/components/sections/skill-network";
import { TerminalSection } from "@/components/sections/terminal";
import { ExtraQuote } from "@/components/sections/extra-quote";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [isOpenToWork, setIsOpenToWork] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("isOpenToWork");
      if (stored !== null) {
        setIsOpenToWork(stored === "true");
      }
    }
  }, []);

  const toggleOpenToWork = () => {
    setIsOpenToWork((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("isOpenToWork", String(next));
      }
      return next;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("recruiter-mode", recruiterMode);
    if (recruiterMode) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return () => document.body.classList.remove("recruiter-mode");
  }, [recruiterMode]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};

    async function setupScrollReveals() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const items = gsap.utils.toArray<HTMLElement>(".section-shell > *");
      const animations = items.map((item) =>
        gsap.fromTo(item, { opacity: 0, y: 28 }, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 86%" }
        })
      );

      cleanup = () => {
        animations.forEach((animation) => animation.kill());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    setupScrollReveals();
    return () => cleanup();
  }, []);

  return (
    <>
      <BootSequence />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Nav 
        onCommandAction={() => setPaletteOpen(true)} 
        onRecruiterAction={() => setRecruiterMode((value) => !value)} 
        recruiterMode={recruiterMode} 
        isOpenToWork={isOpenToWork}
        onToggleOpenToWorkAction={toggleOpenToWork}
      />
      <CommandPalette open={paletteOpen} setOpenAction={setPaletteOpen} />
      {recruiterMode ? (
        <RecruiterView 
          onExitAction={() => setRecruiterMode(false)} 
          isOpenToWork={isOpenToWork} 
          onToggleOpenToWorkAction={toggleOpenToWork} 
        />
      ) : (
        <main>
          <Hero />
          <RecruiterSnapshot />
          <About />
          <SkillNetwork />
          <Projects />
          <EngineeringNotes />
          <TerminalSection />
          <ExtraQuote />
          <Contact />
        </main>
      )}
    </>
  );
}
