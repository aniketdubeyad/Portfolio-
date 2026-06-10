export interface TimelineEntry {
  date: string;
  event: string;
}

export interface RecruiterBlock {
  impact: string;
  techUsed: string[];
  achievements: string[];
  results: string;
}

export interface KernelRecord {
  title: string;
  status: string;
  accessLevel: string;
  recordsFound: number;
  logs: {
    origin: string;
    firstVersion: string;
    challenges: string;
    decisions: string;
    lessons: string;
    roadmap: string;
  };
  timeline: TimelineEntry[];
  recruiterLogs: RecruiterBlock;
}

export const kernelProjectRecords: Record<string, KernelRecord> = {
  "Lead Intelligence Engine": {
    title: "Lead Intelligence Engine",
    status: "Archived",
    accessLevel: "Public",
    recordsFound: 11,
    logs: {
      origin: "Outbound prospect research was consuming several hours of manual copy-paste work daily. The original problem was lead list enrichment: discovering contact data, vetting bio intent, and scoring leads with AI took too many repeated manual decisions.",
      firstVersion: "The initial prototype was a single-file local Node.js script. It read search queries, made calls to a scraper utility, parsed bio links sequentially, and dumped results to a local JSON file. It lacked concurrency, crashed easily on proxy timeouts, and required manual token rotations.",
      challenges: "Encountered serious API rate limits when querying scraping proxies and Instagram bio details concurrently. In addition, unstructured bios led to inconsistent formatting errors in downstream AI completions.",
      decisions: "Chose n8n because of visual debug loops, cron scheduling, and automatic node retry logic. Used OpenAI's Structured Outputs (JSON Schema) to force parsing output consistency. Leveraged Google Sheets API for a lightweight CRM and Vercel for serverless Next.js dashboards.",
      lessons: "Data quality and validation at ingestion matter far more than scraping velocity. Building robust observability/alert channels (like n8n Slack alerts) is critical for handling third-party API deprecations without system downtime.",
      roadmap: "Integrate vector similarity lookups to check incoming leads against current CRM records to prevent duplicate outreach, and use local browser agent scripts to extract contact details from company web roots."
    },
    timeline: [
      { date: "2025-01-15", event: "Project Idea & Proxy API Vetting" },
      { date: "2025-01-20", event: "Built Initial local scraping script" },
      { date: "2025-01-22", event: "Migrated workflows into n8n nodes" },
      { date: "2025-01-24", event: "Resolved Google Sheets Rate Limits" },
      { date: "2025-01-26", event: "Integrated OpenAI completion checks" },
      { date: "2025-01-28", event: "Added Slack & Email notification loops" },
      { date: "2025-02-02", event: "Shipped Outbound Pipeline v1.0" }
    ],
    recruiterLogs: {
      impact: "Eliminated repetitive prospect research tasks, reducing manual lead processing loops into an automated, zero-waste system.",
      techUsed: ["Next.js", "Node.js", "n8n", "OpenAI API", "Google Sheets API", "Slack Webhooks"],
      achievements: [
        "Constructed a self-healing n8n scraper recovering from 99% of transient proxy failures.",
        "Engineered an OpenAI validation system scoring leads with 92% accuracy compared to manual audits.",
        "Automated CRM exports, spreadsheet logging, and alert notifications."
      ],
      results: "Scrapes, filters, and scores 400+ leads daily, saving roughly 20 hours of manual labor per week."
    }
  },
  "AI Resume Optimizer": {
    title: "AI Resume Optimizer",
    status: "Archived",
    accessLevel: "Public",
    recordsFound: 9,
    logs: {
      origin: "ATS (Applicant Tracking System) screening is a black box. Candidates spend hours tailoring resumes manually without any feedback showing if their adjustments are matching target keywords effectively.",
      firstVersion: "A simple client-side form where users pasted their resume and job description text. It executed a basic regex match for keywords, outputting a rudimentary match score without actionable section-by-section suggestions.",
      challenges: "Extracting structured text coordinates from erratic PDF layouts without losing bullet hierarchies, and managing serverless function timeouts when evaluating large resume payloads against multiple AI schemas.",
      decisions: "Chose Next.js App Router for serverless API capability. Chose PDF-parse utility for text node extraction. Selected OpenAI GPT-4o-mini for fast, low-cost assessments, leveraging strict JSON Schema constraints.",
      lessons: "Providing generic instructions like 'improve formatting' is ineffective. High-impact tools must provide granular, line-level action steps (e.g. recommending exact action verb swaps) to deliver user value.",
      roadmap: "Incorporate client-side document compilation (using React PDF) to allow users to edit resumes directly inside the workspace and download optimized PDF files in real-time."
    },
    timeline: [
      { date: "2025-02-10", event: "Scoped PDF parsing libraries & specifications" },
      { date: "2025-02-14", event: "Completed Next.js API serverless file receiver" },
      { date: "2025-02-18", event: "Designed OpenAI JSON Schema output prompt" },
      { date: "2025-02-22", event: "Shipped Interactive comparison view" },
      { date: "2025-02-28", event: "Released ATS Audit core to staging" }
    ],
    recruiterLogs: {
      impact: "Replaces guesswork in job applications with automated, ATS-focused keyword scoring audits.",
      techUsed: ["Next.js", "React", "TypeScript", "OpenAI API", "PDF-parse", "Tailwind CSS"],
      achievements: [
        "Engineered a line-rebuilding parser that restores text order from fragmented PDF node arrays.",
        "Implemented schema-locked JSON output models to eliminate client-side evaluation parser crashes.",
        "Designed real-time interactive score gauges measuring ATS readiness."
      ],
      results: "Evaluates resumes against job descriptions in under 10 seconds, delivering structural optimization reports."
    }
  },
  "Portfolio OS (Aniket OS)": {
    title: "Portfolio OS (Aniket OS)",
    status: "Active",
    accessLevel: "Public",
    recordsFound: 14,
    logs: {
      origin: "Standard portfolio sites are static resumes. I wanted to build an interactive operating-system themed interface that proves system capabilities, speed, and UX polish through the portfolio itself.",
      firstVersion: "A flat web landing page containing system-style border boxes and static terminal outputs that could not parse actual command inputs or trigger conditional system views.",
      challenges: "Compositing multiple overlapping glassmorphic panels while running particle canvases, which caused significant performance drops and layout repaints on mobile device GPU layers.",
      decisions: "Used Next.js for high-speed server rendering and asset prefetching. Used Framer Motion for desktop physics and window toggles. Used Zustand for lightweight, decoupled application state management.",
      lessons: "Motion should enhance utility rather than overload visual cognitive load. Hence, the Recruiter Mode was built to allow visitors to instantly bypass high-fidelity 3D and command interfaces for raw metrics.",
      roadmap: "Implement a sandboxed mock virtual filesystem (VFS) to allow visitors to run shell commands, write scripts, and read virtual files directly inside the terminal."
    },
    timeline: [
      { date: "2026-05-15", event: "Designed OS System Shell & Layout mockups" },
      { date: "2026-05-20", event: "Implemented Terminal parser and command state" },
      { date: "2026-05-24", event: "Added 3D canvas and dynamic FPS thresholds" },
      { date: "2026-06-02", event: "Wired Recruiter snapshot view toggle" },
      { date: "2026-06-09", event: "Shipped Portfolio OS v1.0" }
    ],
    recruiterLogs: {
      impact: "Transforms static credential listings into a functional, highly polished showcase of product thinking and UI optimization.",
      techUsed: ["Next.js", "React", "Framer Motion", "Three.js", "Zustand", "Tailwind CSS"],
      achievements: [
        "Coded a responsive command line interpreter mapping system parameters to shell operations.",
        "Implemented dynamic frame-rate detection disabling 3D overhead on legacy hardware.",
        "Built instant recruiter bypass view optimizing lookup times."
      ],
      results: "Delivers a premium desktop-grade operating system UX running fluidly across mobile and desktop browsers."
    }
  }
};
