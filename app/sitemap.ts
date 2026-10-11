import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || "https://tacstem.com";
  const now = new Date();

  // Primary routes with multilingual hreflang alternatives
  const routes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/studio", priority: 0.95, freq: "weekly" as const },
    { path: "/features", priority: 0.85, freq: "monthly" as const },
    { path: "/comparison", priority: 0.85, freq: "monthly" as const },
    { path: "/pricing", priority: 0.8, freq: "monthly" as const },
    { path: "/football-tactical-analysis", priority: 0.85, freq: "monthly" as const },
    { path: "/opposition-analysis", priority: 0.85, freq: "monthly" as const },
  ];

  return routes.map((route) => {
    const url = `${baseUrl}${route.path}`;
    return {
      url,
      lastModified: now,
      changeFrequency: route.freq,
      priority: route.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${route.path}`,
          es: `${baseUrl}${route.path}?lang=es`,
          de: `${baseUrl}${route.path}?lang=de`,
          fr: `${baseUrl}${route.path}?lang=fr`,
          it: `${baseUrl}${route.path}?lang=it`,
          pt: `${baseUrl}${route.path}?lang=pt`,
          "x-default": `${baseUrl}${route.path}`,
        },
      },
    };
  });
}


