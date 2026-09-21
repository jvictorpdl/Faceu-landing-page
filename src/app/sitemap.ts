import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { hasNews, hasPublications, manuals, membersWithProfile, tools } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => `${site.url}${p}`;
  const latest = (slug: string) => manuals.filter((m) => m.tool === slug).map((m) => m.updatedAt).sort().at(-1);
  return [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/focus-areas"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/tools"), changeFrequency: "monthly", priority: 0.9 },
    ...tools.flatMap((t) => [
      { url: url(`/tools/${t.slug}`), changeFrequency: "monthly" as const, priority: 0.9 },
      { url: url(`/tools/${t.slug}/manual`), lastModified: latest(t.slug), changeFrequency: "monthly" as const, priority: 0.8 },
    ]),
    { url: url("/resources"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/team"), changeFrequency: "yearly", priority: 0.6 },
    ...membersWithProfile().map((m) => ({ url: url(`/team/${m.slug}`), changeFrequency: "yearly" as const, priority: 0.4 })),
    ...(hasPublications ? [{ url: url("/research"), changeFrequency: "monthly" as const, priority: 0.7 }] : []),
    ...(hasNews ? [{ url: url("/news"), changeFrequency: "weekly" as const, priority: 0.6 }] : []),
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.5 },
  ];
}
