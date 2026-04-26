import type { MetadataRoute } from "next";
import { members } from "@/lib/data/members";

// TODO: update domain once deployed on Vercel
const base = "https://kigalisix.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...members.map((m) => ({
      url: `${base}/six/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
