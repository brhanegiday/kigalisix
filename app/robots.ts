import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // TODO: update domain once deployed on Vercel
    sitemap: "https://kigalisix.co/sitemap.xml",
  };
}
