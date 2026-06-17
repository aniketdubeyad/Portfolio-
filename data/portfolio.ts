import { BarChart3, Braces, BrainCircuit, Cloud, Database, GitBranch, LineChart, Cpu } from "lucide-react";

export const navItems = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" }
];

export const stats = [
  { label: "Analytics Projects Built", value: 5, suffix: "" },
  { label: "Datasets Analyzed", value: 10000, suffix: "+" },
  { label: "Machine Learning Models", value: 50, suffix: "+" },
  { label: "Automation Workflows", value: 20, suffix: "+" }
];

export const skillCategories = [
  {
    name: "Analytics",
    icon: BarChart3,
    skills: ["Excel", "SQL", "Power BI", "Tableau", "KPI Reporting"],
    description: "Transform raw data into actionable business insights using spreadsheets, databases, and business intelligence dashboards."
  },
  {
    name: "Programming",
    icon: Braces,
    skills: ["Python", "Pandas", "NumPy", "Data Processing", "Automation"],
    description: "Write clean, optimized Python scripts for data wrangling, scientific computing, and automation workflows."
  },
  {
    name: "Machine Learning",
    icon: Cpu,
    skills: ["Scikit-Learn", "Regression", "Classification", "Clustering"],
    description: "Develop, evaluate, and deploy predictive models using statistical and machine learning algorithms."
  },
  {
    name: "AI",
    icon: BrainCircuit,
    skills: ["LLM Applications", "Prompt Engineering", "RAG Basics", "AI Workflows", "Agentic Systems"],
    description: "Design intelligent workflows and interfaces powered by large language models and retrieval systems."
  },
  {
    name: "Data Science",
    icon: LineChart,
    skills: ["EDA", "Statistics", "Data Cleaning", "Visualization", "Model Evaluation"],
    description: "Perform exploratory data analysis, clean complex datasets, and apply statistical models to extract business value."
  },
  {
    name: "Cloud & Tools",
    icon: Cloud,
    skills: ["Git", "GitHub", "Jupyter", "Streamlit", "AWS Basics"],
    description: "Utilize developer tools and cloud basics to manage experiments and deploy data applications."
  }
];

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
  features?: { title: string; description: string; supportingText?: string }[];
}

export const projects: CaseStudy[] = [
  {
    title: "AI Resume Optimizer",
    description: "An AI-powered analytics solution that evaluates resumes against job descriptions, providing precise semantic matching and keyword optimization insights.",
    problem: "Job seekers lack data-driven feedback on how well their resumes align with target roles, resulting in poor ATS screening outcomes.",
    solution: "Built an intelligent parsing pipeline that extracts text, analyzes context using OpenAI's structured outputs, and runs vector-based similarity scoring against job profiles.",
    stack: ["Next.js", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    outcome: "Automated resume evaluation, generating ATS readiness scores and keyword insights in under 30 seconds to boost application conversion.",
    architecture: ["Resume Ingestion & Parsing", "Semantic Keyword Analyzer", "LLM Scoring Engine", "Analytics Dashboard", "Optimization Recommendation Pipeline"],
    github: "https://github.com/aniketdubeyad",
    demo: "#"
  },
  {
    title: "BeatMetrics",
    description: "A data product and analytics platform that integrates Spotify streaming history to deliver listener cohorts, artist growth metrics, and recurring stream visualizations.",
    problem: "Streaming services provide raw play counts but do not expose deeper demographic cohorts, play-time trends, or artist performance growth trajectories.",
    solution: "Designed a relational database schema in PostgreSQL and SQLite, loaded with 60K+ synthetic stream logs, and built an interactive Recharts dashboard.",
    stack: ["React", "TypeScript", "Vite", "Recharts", "Lucide React", "PostgreSQL", "Python", "SQLite"],
    outcome: "Enabled labels to segment listeners into power/moderate cohorts, lowering latency of cohort aggregation queries by 12.5x.",
    architecture: [
      "Spotify API Ingestion Pipeline",
      "Data Cleaning & Schema Mapping",
      "PostgreSQL Relational Storage",
      "Cohort Segmentation Engine",
      "Recharts Visualization Layer",
      "Interactive SQL Console"
    ],
    github: "https://github.com/aniketdubeyad/BeatMetrics",
    demo: "#",
    features: [
      { title: "Spotify Analytics", description: "Seamless connection to ingest user profiles, artist profiles, track details, and playlists.", supportingText: "API Integrations" },
      { title: "Artist Performance Tracking", description: "Aggregates stream counts, monthly signups, and rankings across artist catalogs.", supportingText: "PostgreSQL Analytics" },
      { title: "Track-Level Insights", description: "Exposes listener counts, streams, and genre metadata for every song in the database.", supportingText: "Relational Queries" },
      { title: "Audience Intelligence", description: "Segments listeners into cohorts (Power, Moderate, Casual) based on daily play history.", supportingText: "Demographics Analysis" },
      { title: "Growth Trend Monitoring", description: "Tracks net stream growth and genre trends over time using Month-over-Month SQL windows.", supportingText: "LAG Window Functions" },
      { title: "Performance Benchmarking", description: "Ranks top tracks and trending genres dynamically using ranking window algorithms.", supportingText: "DENSE_RANK Partitioning" },
      { title: "Interactive Dashboards", description: "Interactive analytics console containing code libraries and execution benchmarks.", supportingText: "Vite + React Dashboard" },
      { title: "Real-Time Metrics", description: "Real-time updates of play counts, DAU/MAU ratios, and Monthly Recurring Revenue.", supportingText: "Live Widgets" },
      { title: "Data Visualization", description: "Area, pie, and bar charts illustrating plan profitability, cohort revenue, and country shares.", supportingText: "Recharts Visualization" },
      { title: "Historical Analytics", description: "Calculates user retention cohorts across multi-month signup timelines.", supportingText: "Cohort SQL Analysis" }
    ]
  },
  {
    title: "Portfolio OS (Aniket OS)",
    description: "An interactive analytics dashboard and portfolio operating system that showcases candidate stats, skill networks, and recruiter data in real-time.",
    problem: "Traditional resumes are static text files that fail to convey dynamic capabilities, analytical thinking, or coding proficiency.",
    solution: "Developed a personal dashboard featuring command-line utilities, interactive connection graphs of data skills, and custom recruiter tracking toggles.",
    stack: ["Next.js", "React", "Framer Motion", "Three.js", "Tailwind CSS"],
    outcome: "Unified data story, skill graph, and recruiter snapshot into an engaging experience that increases session duration and highlights data focus.",
    architecture: ["Responsive Glassmorphic Layout", "Interactive Skill-Network Graph", "Terminal Command Parser", "Recruiter Snapshot Interface", "SEO & Metadata Engine"],
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
    title: "Data Before Assumptions",
    description: "Every decision should be informed by evidence, measurable outcomes, and meaningful insights.",
    example: "When analyzing user cohorts for BeatMetrics, I relied on PostgreSQL window functions to verify user drop-off trends rather than assuming churn reasons."
  },
  {
    title: "Insights Create Impact",
    description: "The value of data lies in transforming information into actionable business intelligence.",
    example: "Transformed raw Spotify logs into an interactive Recharts dashboard that highlights Monthly Recurring Revenue trends for immediate label decisions."
  },
  {
    title: "Learning Through Experimentation",
    description: "Continuous experimentation drives innovation in analytics, machine learning, and AI.",
    example: "Trained and evaluated multiple Scikit-Learn regression models to optimize ATS keyword score predictions in the Resume Optimizer."
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
    id: "beatmetrics-sql-analytics",
    title: "How I Built BeatMetrics: A SQL Analytics Platform",
    readTime: "5 min read",
    category: "Databases",
    description: "A technical deep dive into schema design, synthetic data generation, and query performance optimizations using PostgreSQL and SQLite indexes.",
    date: "May 24, 2026",
    content: `### The Challenge
Music streaming platforms generate massive streams of play history data. Analyzing user behavior, geographic trends, artist popularity, and platform revenue metrics requires structured databases and optimized queries. Sequential scans on large tables (like a play history table with 60,000+ rows) degrade platform performance.

### The Solution
I built BeatMetrics—a music streaming analytics engine with a PostgreSQL schema designed to answer critical business metrics:

1. **Schema Design**: Created 6 relational tables (Users, Artists, Albums, Songs, Subscriptions, Play History) enforcing optimal foreign keys and cascades.
2. **Synthetic Data Pipeline**: Wrote a Python script utilizing random seed distributions to generate 60,000+ streaming events across 1,200 users and 120 artists.
3. **Optimized Query Indexing**: Added indexes on foreign keys and timestamps to drop search latencies.
4. **Interactive Dashboard**: Designed a React-based frontend dashboard using Recharts to visualize monthly cohort retention and plan profitability.

### Database Index Optimization
Without indexes, queries run table sequential scans. I added indexes on play history tables:
\`\`\`sql
CREATE INDEX idx_play_history_user_id ON play_history(user_id);
CREATE INDEX idx_play_history_song_id ON play_history(song_id);
CREATE INDEX idx_play_history_played_at ON play_history(played_at);
\`\`\`

Using \`EXPLAIN ANALYZE\` on date-filtered queries showed that execution time dropped from **~15ms (sequential table scan)** to **~1.2ms (bitmap index scan)**, yielding a **12.5x query performance boost**.

### Cohort Retention Query
To calculate Month-over-Month cohort retention dynamically in PostgreSQL:
\`\`\`sql
WITH UserCohorts AS (
    SELECT user_id, TO_CHAR(signup_date, 'YYYY-MM') AS cohort_month FROM users
),
UserActivity AS (
    SELECT DISTINCT user_id, TO_CHAR(played_at, 'YYYY-MM') AS activity_month FROM play_history
)
SELECT c.cohort_month,
       COUNT(DISTINCT c.user_id) AS active_users,
       ROUND((COUNT(DISTINCT c.user_id) * 100.0 / s.cohort_size), 2) AS retention_pct
FROM UserCohorts c
JOIN UserActivity a ON c.user_id = a.user_id
GROUP BY c.cohort_month;
\`\`\`

### The Outcome
This SQL analytics platform proved that proper index optimization and visual query exploration turn raw platform events into clear business dashboards, allowing music labels and artists to track demographics, streams, and revenue changes in real time.`
  },
  {
    id: "building-aniket-os",
    title: "What I Learned Building Aniket OS",
    readTime: "8 min read",
    category: "Engineering",
    description: "An architectural deep dive into Next.js App Router performance, canvas optimization with Three.js fallbacks, and rendering real-time skill network data.",
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
    id: "journey-to-data-science",
    title: "My Journey from Web Dev to Data Science & Automation",
    readTime: "4 min read",
    category: "Data Science",
    description: "The transition from frontend user interfaces to complex data pipelines, statistical analysis, model training, and agentic AI systems.",
    date: "March 10, 2026",
    content: `### The Shift
When I started web development, I was obsessed with rendering pixels correctly and matching Figma designs. However, I realized that interfaces are only the entryway. The real value for businesses and decision makers lies in the data behind the interface: analytics pipelines, databases, automation systems, and statistical models.

### Expanding My Skillset
To move beyond standard UI work, I focused on:
1. **API Ingestion & ETL**: Authenticating and fetching from complex API endpoints to load, clean, and store structured data (PostgreSQL/SQLite).
2. **Statistical Analysis & EDA**: Exploring datasets with Python (Pandas/NumPy) to reveal correlation, user behavior, and anomalies.
3. **Machine Learning & AI workflows**: Training classifiers/regressors, tuning prompt patterns, and engineering agentic workflows (like ATS resume parsers).

### A Practical Example
For one workflow, instead of checking a data source manually and updating a sheet, I wired a Webhook node in n8n to listen for updates, validate them with Node.js, run an AI analysis, and write it to database. The frontend dashboard then queries this database.

### The Lesson
Modern AI and analytics engineering is about connecting systems and workflows. By understanding both interactive visualization (React, Streamlit, Recharts) and robust data pipelines (Python, SQL, API integrations), I can build complete, self-healing data products that drive real business intelligence.`
  }
];
