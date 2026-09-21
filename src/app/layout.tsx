import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader, type NavItem } from "@/components/SiteHeader";
import { site } from "@/content/site";
import { hasNews, hasPublications } from "@/lib/content";
import { buildSearchIndex } from "@/lib/search-index";
import { jsonLd } from "@/lib/seo";
import "@/styles/globals.css";

const display = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--nf-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--nf-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--nf-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} — ${site.tagline}`, description: site.description, siteName: site.name, locale: "pt_BR", type: "website", url: "/" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0a1b3d", width: "device-width", initialScale: 1 };

/* Itens opcionais (Pesquisa, Novidades) só entram quando há conteúdo real. */
const nav: NavItem[] = [
  { label: "Sobre", href: "/about" },
  { label: "Áreas de atuação", href: "/focus-areas" },
  { label: "Ferramentas", href: "/tools" },
  { label: "Equipe", href: "/team" },
  { label: "Recursos", href: "/resources" },
  ...(hasPublications ? [{ label: "Pesquisa", href: "/research" }] : []),
  ...(hasNews ? [{ label: "Novidades", href: "/news" }] : []),
  { label: "Contato", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.fullName,
    url: site.url,
    email: site.email,
    description: site.description,
  };
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
        <SiteHeader items={nav} searchEntries={buildSearchIndex()} />
        <main id="conteudo" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(org) }} />
      </body>
    </html>
  );
}
