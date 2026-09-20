import type { MetadataRoute } from "next";

const BASE_URL = "https://vendingo.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/apply", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/location-partner", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/location-partner/apply", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
