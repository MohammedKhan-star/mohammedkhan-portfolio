import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mohammedkhan.dev",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://mohammedkhan.dev/projects",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://mohammedkhan.dev/skills",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://mohammedkhan.dev/contact",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
