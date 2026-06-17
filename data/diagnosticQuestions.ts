export interface DiagnosticQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  insight: string;
}

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 1,
    question: "Which project analyzes Spotify metrics and artist performance?",
    options: ["AI Resume Analyzer", "BeatMetrics", "Portfolio OS", "Sales Dashboard"],
    correctAnswer: "BeatMetrics",
    insight: "BeatMetrics transforms Spotify data into actionable analytics and performance insights."
  },
  {
    id: 2,
    question: "Which Python library is most commonly used for data manipulation?",
    options: ["React", "Pandas", "Tailwind", "Docker"],
    correctAnswer: "Pandas",
    insight: "Pandas is the backbone of most analytics and data science workflows."
  },
  {
    id: 3,
    question: "What is usually the first step before training a machine learning model?",
    options: ["Deployment", "Data Cleaning", "Visualization", "Monitoring"],
    correctAnswer: "Data Cleaning",
    insight: "Clean data often matters more than complex algorithms."
  },
  {
    id: 4,
    question: "Which tool is best suited for creating interactive business dashboards?",
    options: ["Power BI", "NumPy", "Git", "Node.js"],
    correctAnswer: "Power BI",
    insight: "Effective dashboards help transform raw data into decisions."
  },
  {
    id: 5,
    question: "Which area best describes my current career focus?",
    options: ["Game Development", "Cybersecurity", "Data Science & AI", "Blockchain"],
    correctAnswer: "Data Science & AI",
    insight: "My focus is building intelligent systems powered by data and AI."
  },
  {
    id: 6,
    question: "What is the primary goal of BeatMetrics?",
    options: ["Social Networking", "Music Analytics", "Cryptocurrency Trading", "Video Editing"],
    correctAnswer: "Music Analytics",
    insight: "BeatMetrics helps transform streaming data into performance intelligence."
  },
  {
    id: 7,
    question: "Which library is commonly used for machine learning in Python?",
    options: ["Tailwind CSS", "Framer Motion", "Scikit-Learn", "Next.js"],
    correctAnswer: "Scikit-Learn",
    insight: "Scikit-Learn provides simple and powerful machine learning tools."
  },
  {
    id: 8,
    question: "What is the purpose of Exploratory Data Analysis (EDA)?",
    options: ["Deploy models", "Understand and investigate data", "Design UI components", "Host applications"],
    correctAnswer: "Understand and investigate data",
    insight: "EDA helps uncover patterns, anomalies, and opportunities before modeling."
  },
  {
    id: 9,
    question: "What am I currently working toward?",
    options: ["Becoming a Data Scientist & AI Engineer", "Becoming a Graphic Designer", "Becoming a Video Editor", "Becoming a Game Artist"],
    correctAnswer: "Becoming a Data Scientist & AI Engineer",
    insight: "My roadmap focuses on analytics, machine learning, and intelligent systems."
  },
  {
    id: 10,
    question: "What transforms data into actionable business insights?",
    options: ["Analytics", "Color Theory", "Animation", "Typography"],
    correctAnswer: "Analytics",
    insight: "Analytics exists to improve decision-making, not just collect data."
  }
];

export const systemLogMessages: string[] = [
  "Scanning Skill Graph...",
  "Loading Analytics Engine...",
  "Evaluating Machine Learning Models...",
  "Querying Knowledge Base...",
  "Processing Data Pipeline...",
  "Generating Insights...",
  "Synchronizing Project Database...",
  "Inspecting BeatMetrics Architecture...",
  "Running Recruiter Diagnostics...",
  "Intelligence Scan Complete."
];
