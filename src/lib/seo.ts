import type { Metadata } from "next";
import { site } from "@/content/site";

/** Metadados por página: título, descrição, canonical e Open Graph. */
export function pageMetadata({ title, description, path, noindex }: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} — ${site.name}`, description, url: path, siteName: site.name, locale: "pt_BR", type: "website" },
    twitter: { card: "summary_large_image", title: `${title} — ${site.name}`, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const absoluteUrl = (path: string) => `${site.url}${path}`;

/** Serializa JSON-LD com segurança para <script>. */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
