import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aniket-os.local",
      lastModified: new Date("2026-06-09"),
      priority: 1
    }
  ];
}
