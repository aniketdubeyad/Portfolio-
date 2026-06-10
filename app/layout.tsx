import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aniket-os.local"),
  title: {
    default: "Aniket Dubey | Software Engineer Portfolio",
    template: "%s | Aniket Dubey"
  },
  description: "A premium developer operating system portfolio for Aniket Dubey, focused on modern web development, AI applications, automation systems, and continuous learning.",
  keywords: ["Aniket Dubey", "Software Engineer", "Next.js", "AI Applications", "Automation", "Portfolio"],
  authors: [{ name: "Aniket Dubey" }],
  openGraph: {
    title: "Aniket Dubey",
    description: "A personal developer operating system for modern web, AI, and automation engineering.",
    type: "website",
    url: "https://aniket-os.local",
    siteName: "Aniket Dubey"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Dubey",
    description: "Software engineer portfolio built as a premium personal operating system."
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
    jobTitle: "Software Engineer",
    url: "https://aniket-os.local",
    knowsAbout: ["Modern Web Development", "AI Applications", "Automation Systems", "Next.js", "TypeScript"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
