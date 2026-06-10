"use client";

import { ArrowDown, Bot, Cable, FileSpreadsheet, Mail, ScanSearch } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { automationSteps } from "@/data/portfolio";

const icons = [ScanSearch, Cable, Bot, FileSpreadsheet, Mail];

export function AutomationLab() {
  return (
    <section id="automation" className="section-shell">
      <SectionHeading kicker="Automation Lab" title="Signature workflows that turn messy inputs into useful outputs." copy="A dedicated lab for n8n automations, AI analysis, API integrations, and productivity systems that save attention for higher-value decisions." />
      <GlassCard className="p-5 md:p-8">
        <div className="grid gap-4 md:grid-cols-5">
          {automationSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step} className="relative">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cyan-200/12 text-cyan-200"><Icon size={22} /></div>
                  <p className="mt-4 text-sm font-semibold">{step}</p>
                  <p className="mt-2 text-xs leading-5 text-white/48">validated, enriched, and passed forward</p>
                </div>
                {index < automationSteps.length - 1 && <ArrowDown className="mx-auto my-3 text-white/32 md:absolute md:-right-5 md:top-1/2 md:my-0 md:-translate-y-1/2 md:-rotate-90" size={20} />}
              </div>
            );
          })}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {["n8n automations", "AI workflows", "API integrations", "Productivity systems"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[.045] p-4 text-sm text-white/70">{item}</div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
