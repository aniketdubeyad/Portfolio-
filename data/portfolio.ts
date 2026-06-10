import { Braces, BrainCircuit, Cloud, Database, GitBranch, Layers3, Workflow } from "lucide-react";

export const navItems = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Automation", href: "automation" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" }
];

export const stats = [
  { label: "Production Apps Built", value: 3, suffix: "" },
  { label: "Automated Workflows", value: 12, suffix: "+" },
  { label: "Connected APIs", value: 25, suffix: "+" },
  { label: "Manual Hours Saved", value: 400, suffix: "h+" }
];

export const skillCategories = [
  { name: "Frontend", icon: Layers3, skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"] },
  { name: "Backend", icon: Braces, skills: ["Node.js", "REST APIs", "Auth", "Server Actions"] },
  { name: "Databases", icon: Database, skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"] },
  { name: "Cloud", icon: Cloud, skills: ["Vercel", "AWS basics", "Edge runtime", "Deployments"] },
  { name: "DevOps", icon: GitBranch, skills: ["GitHub", "CI/CD", "Testing", "Observability"] },
  { name: "AI", icon: BrainCircuit, skills: ["LLM Apps", "RAG basics", "Prompt systems", "Agents"] },
  { name: "Automation", icon: Workflow, skills: ["n8n", "Webhooks", "API chaining", "Excel exports"] }
];

export const automationSteps = ["Instagram Lead Finder", "Data Processing", "AI Analysis", "Excel Export", "Email Delivery"];

export interface CaseStudy {
  title: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  outcome: string;
  architecture: string[];
  github: string;
  demo: string;
}

export const projects: CaseStudy[] = [
  {
    title: "Lead Intelligence Engine",
    description: "Enterprise-grade automation pipeline that discovers prospects, enriches profiles, scores leads with AI, and exports clean outreach spreadsheets.",
    problem: "Manual lead collection and prospect research consumed significant hours daily, leading to slow outreach cycles and inconsistent lead qualification.",
    solution: "Built a fully automated multi-step lead generation workflow using n8n, scraping APIs, OpenAI analysis, and Google Sheets integration.",
    stack: ["Next.js", "n8n", "OpenAI API", "Google Sheets API", "Node.js"],
    outcome: "Reduced manual prospect research time by 90% and created a repeatable, high-efficiency lead qualification engine.",
    architecture: ["Trigger/Webhook", "Data Scraping", "AI Profile Analysis", "Lead Scoring", "Excel/Sheets Export"],
    github: "https://github.com/aniketdubeyad",
    demo: "#"
  },
  {
    title: "AI Resume Optimizer",
    description: "An intelligent platform that analyzes resumes against target job descriptions, delivering precise optimization recommendations to pass ATS filters.",
    problem: "Job seekers spend hours manually tailoring resumes for ATS systems without knowing if their adjustments are effective or match target keywords.",
    solution: "Designed a secure parser that extracts text, evaluates content using OpenAI's structured outputs, and generates actionable, section-by-section scoring recommendations.",
    stack: ["Next.js", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    outcome: "Enabled instant ATS readiness audits, reducing manual tailoring time from hours to under 30 seconds with quantifiable match score improvements.",
    architecture: ["PDF/Docx Parsing", "ATS Scoring Engine", "AI Recommendation Generator", "Interactive Editor", "Export System"],
    github: "https://github.com/aniketdubeyad",
    demo: "#"
  },
  {
    title: "Portfolio OS (Aniket OS)",
    description: "A premium, interactive developer portfolio designed as an operating system surface to communicate engineering maturity and product thinking.",
    problem: "Traditional developer portfolios are static templates that fail to engage recruiters or demonstrate real-world full-stack and automation capabilities.",
    solution: "Created an immersive workspace experience featuring a developer terminal, automated command palette, 10-second recruiter snapshot, and a live n8n pipeline visualization.",
    stack: ["Next.js", "React", "Framer Motion", "Three.js", "Tailwind CSS"],
    outcome: "Transformed static credentials into a functional showcase of frontend engineering and UX polish, increasing average recruiter visit duration.",
    architecture: ["App Router Structure", "Framer Motion Physics", "Glassmorphism UI Engine", "Terminal Parser", "Recruiter Snapshot Interface"],
    github: "https://github.com/aniketdubeyad",
    demo: "#"
  }
];


export interface PhilosophyItem {
  title: string;
  description: string;
  example: string;
}

export const philosophies: PhilosophyItem[] = [
  {
    title: "Architecture as Empathy",
    description: "I write software with future developers in mind—including my future self. Clean structure, clear naming, and maintainable systems are features, not afterthoughts.",
    example: "When building automation workflows, I prioritize clear naming conventions and modular design so future updates don't require rebuilding entire systems."
  },
  {
    title: "Shipping as Learning",
    description: "I believe real understanding comes from building and deploying. I'd rather launch a useful version today, gather feedback, and improve than endlessly polish in isolation.",
    example: "I built the first version of the resume optimizer in 3 days to test the parsing logic with real PDFs, rather than spending weeks on the design."
  },
  {
    title: "System-First Thinking",
    description: "Every feature exists within a larger ecosystem. I focus on understanding how components interact, scale, fail, and evolve over time.",
    example: "I design API integrations with retry logic and error queues because I expect third-party networks to fail."
  },
  {
    title: "Automation Over Repetition",
    description: "If a task is performed repeatedly, it deserves investigation. I enjoy building workflows and systems that reduce manual effort and create leverage.",
    example: "Wrote scraping cron pipelines that automated outbound leads vetting, turning 4 hours of manual research into a 10-second review loop."
  },
  {
    title: "Curiosity Drives Growth",
    description: "Technology changes constantly. My advantage isn't knowing everything—it's being able to learn, adapt, and solve unfamiliar problems quickly.",
    example: "Taught myself n8n workflow chaining in a weekend to automate a manual spreadsheet logging project."
  }
];

export interface BlogArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  description: string;
  date: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "instagram-lead-finder",
    title: "How I Built an Instagram Lead Finder with n8n",
    readTime: "5 min read",
    category: "Automation",
    description: "A technical breakdown of using n8n webhooks, custom scrapers, and OpenAI filtering to automate Instagram lead discovery and scoring.",
    date: "May 24, 2026",
    content: `### The Challenge
Manual Instagram scraping, lead vetting, and sheets logging take hours of daily repetitive work. I wanted a workflow that could discover potential leads, check their bios for business indicators, score their relevance with AI, and deliver an enriched outreach list automatically.

### The Solution
I built a multi-stage event-driven pipeline orchestrating n8n, a scraping API, and OpenAI's chat completions:

1. **Trigger**: A cron node triggers the workflow every morning or on-demand.
2. **Data Extraction**: Custom HTTP requests query a target Instagram scraping node to search bios matching specific niche keywords.
3. **AI Qualification**: For each candidate profile, the raw JSON payload is sent to an OpenAI model. I designed a structured system prompt that parses the bio, follower count, and external link to classify the lead's business intent (e.g., Agency, E-commerce, Creator) and output a relevance score (1-10).
4. **Export & Alert**: If the score is >= 7, n8n appends the profile (handle, bio, email, score, intent) to a Google Sheet and sends a Slack/Email alert with the lead's details.

### System Architecture
\`\`\`
[Cron Trigger]
      │
      ▼
[Scraper API Query] ──► [Filter Active Bios]
                             │
                             ▼
                    [OpenAI Classification]
                             │
                             ▼
                    [Filter Score >= 7] ──► [Sheets Export] ──► [Email Alert]
\`\`\`

### Key Code Snippet (n8n JS Node)
\`\`\`javascript
// Parsing the bio for quick early validation before AI classification
const bio = items[0].json.biography || "";
const hasEmail = /\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b/.test(bio);
const keywords = ["agency", "founder", "ceo", "co-founder", "ecom", "brand"];
const hasKeyword = keywords.some(word => bio.toLowerCase().includes(word));

return [{
  json: {
    ...items[0].json,
    preQualified: hasEmail || hasKeyword
  }
}];
\`\`\`

### The Outcome
This pipeline eliminated manual profile inspections. Now, I receive a daily email list of highly qualified business leads with a pre-drafted personalized outreach script generated based on their bio details, reducing outreach prep time from 4 minutes per prospect to under 10 seconds.`
  },
  {
    id: "building-aniket-os",
    title: "What I Learned Building Aniket OS",
    readTime: "8 min read",
    category: "Engineering",
    description: "An architectural deep dive into Next.js App Router performance, canvas optimization with Three.js fallbacks, and custom keyboard state systems.",
    date: "June 02, 2026",
    content: `### The Concept
For my portfolio, I wanted a developer operating system theme (Aniket OS) rather than a flat, text-based landing page. The design principles were: developer tools transparency (terminal, command palette), highly interactive glassmorphic UI panels, and 3D visual hubs representing the core of the operating system.

### Key Architectural Decisions
1. **Interactive State Management**: Storing OS parameters, terminal lines, command palette toggles, and recruiter settings in a modular state engine.
2. **Next.js App Router & Code Splitting**: Loading high-fidelity modules like Three.js canvases dynamically using Next.js \`next/dynamic\` to prevent blocking the initial page load.
3. **Responsive Glassmorphism**: Overlapping glass panes require careful CSS compositor management. Using \`backdrop-filter: blur(24px)\` and Tailwind overlays, I optimized paint schedules to avoid layout thrashing on mobile.

### dynamic import example
\`\`\`typescript
const AICore = dynamic(() => import("@/components/three/ai-core"), {
  ssr: false,
  loading: () => <div className="grid h-full place-items-center text-sm text-white/50">Initializing neural core...</div>
});
\`\`\`

### The UI Optimization
To keep rendering fast on mobile viewports, the 3D particle core disables itself when the device frame rate drops below 30FPS. The interface falls back smoothly to a CSS gradient grid which keeps the futuristic branding without lag.

### The Lesson
Interactive portfolios are codebases, not documents. By treating this site as a product (focusing on bundle sizes, accessibility, and CPU cycles), I built something that proves I can build consumer-grade interfaces under strict system constraints.`
  },
  {
    id: "understanding-rag-basics",
    title: "Understanding RAG Basics for AI Applications",
    readTime: "6 min read",
    category: "AI",
    description: "Demystifying Retrieval-Augmented Generation, vector embeddings, chunking strategies, and semantic searches for production apps.",
    date: "April 18, 2026",
    content: `### Why RAG?
Large Language Models have static training data. When building real-world AI applications (like custom customer support bots or context-aware helpers), we need to supply them with dynamic, proprietary information. Retrieval-Augmented Generation (RAG) solves this by fetching relevant document chunks from a database and inserting them into the prompt.

### The 3 Steps of RAG
1. **Ingestion & Chunking**: Splitting a large PDF or database table into small, digestible paragraphs (e.g. 500 characters with 50-character overlap).
2. **Embedding & Vector Storage**: Running chunks through an embedding model (like OpenAI's \`text-embedding-3-small\`) and saving them in a vector database (e.g., Supabase pgvector or Pinecone).
3. **Retrieval & Generation**: cosine similarity search to fetch the top 3 closest chunks, paste them into the LLM prompt as "Context:", and generate the response.

### Vector Search Code Example
\`\`\`sql
-- Simple similarity search using Supabase pgvector extension
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by documents.embedding <=> query_embedding
  limit match_count;
$$;
\`\`\`

### RAG Optimization
In production, simple retrieval often falls short. I optimized my workflows by implementing:
* **Hybrid Search**: Combining keyword search (BM25) with vector search to capture both exact matches and semantic queries.
* **Re-ranking**: Using a smaller, fast cross-encoder to re-order the retrieved chunks before presenting them to the generator model, ensuring the most relevant text is always placed at the very top.`
  },
  {
    id: "journey-to-automation",
    title: "My Journey from Web Dev to Automation Systems",
    readTime: "4 min read",
    category: "Career",
    description: "The transition from simple frontend layouts to complex event-driven backend pipelines, cron schedules, and agentic AI tools.",
    date: "March 10, 2026",
    content: `### The Shift
When I started web development, I was obsessed with rendering pixels correctly and matching Figma designs. However, I realized that interfaces are only the entryway. The real value for businesses and power users lies in the workflows behind the interface: the data integrations, cron schedules, notifications, and event pipelines.

### Expanding My Skillset
To move beyond standard UI work, I focused on:
1. **API Chaining**: Authenticating and fetching from complex GraphQL and REST API endpoints (OAuth2, API keys, webhooks).
2. **Workflow Orchestration**: Adopting n8n for visually mapping workflows while writing custom JS blocks inside execution cells to handle custom payload parsing.
3. **Asynchronous Task Queuing**: Setting up webhook receivers, managing retries, and handling rate limits when interacting with external APIs.

### A Practical Example
For one workflow, instead of checking a data source manually and updating a sheet, I wired a Webhook node in n8n to listen for updates, validate them with Node.js, run an AI analysis, and write it to database. The frontend dashboard then queries this database.

### The Lesson
Modern software engineering is about connecting systems. By understanding both frontend polish (React, Next.js) and backend pipelines (n8n, API integrations, queues), I can build complete, self-healing software products that solve real productivity problems.`
  }
];
