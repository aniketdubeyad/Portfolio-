import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aniket-os.local"),
  title: {
    default: "Aniket Dubey | Data Scientist | AI & Analytics Engineer",
    template: "%s | Aniket Dubey"
  },
  description: "Portfolio showcasing Data Science, Machine Learning, Analytics Engineering, AI Applications, Business Intelligence Dashboards, and Data-Driven Solutions.",
  keywords: ["Aniket Dubey", "Data Scientist", "AI Engineer", "Analytics Engineer", "Machine Learning", "BeatMetrics", "Spotify Analytics", "PostgreSQL", "Portfolio"],
  authors: [{ name: "Aniket Dubey" }],
  openGraph: {
    title: "Aniket Dubey | Data Scientist | AI & Analytics Engineer",
    description: "Portfolio showcasing Data Science, Machine Learning, Analytics Engineering, AI Applications, Business Intelligence Dashboards, and Data-Driven Solutions.",
    type: "website",
    url: "https://aniket-os.local",
    siteName: "Aniket Dubey"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Dubey | Data Scientist | AI & Analytics Engineer",
    description: "Portfolio showcasing Data Science, Machine Learning, Analytics Engineering, AI Applications, Business Intelligence Dashboards, and Data-Driven Solutions."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#07080d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aniket Dubey",
    jobTitle: "Data Scientist | AI & Analytics Engineer",
    url: "https://aniket-os.local",
    knowsAbout: ["Data Science", "Machine Learning", "AI Applications", "Business Intelligence", "PostgreSQL", "Python", "Data Visualization"]
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BeatMetrics",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Analyze artist growth, audience engagement, track performance, and listening trends through powerful Spotify-powered analytics dashboards.",
    url: "https://github.com/aniketdubeyad/BeatMetrics",
    creator: {
      "@type": "Person",
      name: "Aniket Dubey"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
        {children}
      </body>
    </html>
  );
}
