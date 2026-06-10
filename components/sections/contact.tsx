"use client";

import { useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");

    const subject = encodeURIComponent(`Contact from ${name} - Portfolio`);
    const body = encodeURIComponent(
      `Hi Aniket,\n\n${message}\n\n---\nName: ${name}\nEmail: ${email}`
    );
    const mailtoUrl = `mailto:aniket310dubey@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setStatus("success");

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("idle");
    }, 1500);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading kicker="Contact" title="Ready to connect, collaborate, or review the resume." copy="A focused contact panel for recruiters, collaborators, and teams looking for a curious engineer with strong product instincts." />
      <GlassCard className="grid gap-6 p-5 md:grid-cols-[1fr_.8fr] md:p-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
          <input
            aria-label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full text-white placeholder:text-white/40 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300/60 focus:bg-white/10 transition duration-200"
          />
          <input
            aria-label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-white placeholder:text-white/40 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300/60 focus:bg-white/10 transition duration-200"
          />
          <textarea
            aria-label="Message"
            placeholder="Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full text-white placeholder:text-white/40 resize-none rounded-2xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300/60 focus:bg-white/10 transition duration-200"
          />
          <Button type="submit" className="w-full flex items-center justify-center gap-1.5 cursor-pointer" disabled={status !== "idle"}>
            <Mail size={16} />
            {status === "idle" ? "Send Message" : status === "sending" ? "Preparing Email..." : "Opening Mail Client..."}
          </Button>
        </form>
        <div className="grid content-start gap-3">
          <a className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/72 hover:bg-white/10 transition duration-200" href="https://github.com/aniketdubeyad" target="_blank" rel="noopener noreferrer"><Github className="mb-3 text-cyan-200" />GitHub</a>
          <a className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/72 hover:bg-white/10 transition duration-200" href="https://www.linkedin.com/in/aniiket310dubey" target="_blank" rel="noopener noreferrer"><Linkedin className="mb-3 text-cyan-200" />LinkedIn</a>
          <a className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/72 hover:bg-white/10 transition duration-200" href="mailto:aniket310dubey@gmail.com"><Mail className="mb-3 text-cyan-200" />aniket310dubey@gmail.com</a>
          <Button variant="glass" className="cursor-pointer" onClick={() => window.open("/resume.pdf", "_blank")}><Download size={18} />Download Resume</Button>
        </div>
      </GlassCard>
    </section>
  );
}

