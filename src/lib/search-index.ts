import { manuals, publications, team, tools } from "./content";
import { DOCUMENT_TYPE_LABEL } from "./labels";
import type { Tool } from "./types";

export type SearchType = "Ferramenta" | "Aplicativo" | "Manual" | "Publicação" | "Pessoa" | "Página";

export interface SearchEntry {
  type: SearchType;
  title: string;
  note: string;
  href: string;
  /** Texto adicional pesquisável. */
  text: string;
}

const toolName = (slug: string) => tools.find((t: Tool) => t.slug === slug)?.name ?? slug;

/** Índice de busca global, gerado no servidor a partir de src/content e enviado ao cliente. */
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const t of tools) {
    entries.push({
      type: "Ferramenta",
      title: t.name,
      note: [t.category, t.version ? `v${t.version}` : null].filter(Boolean).join(" · "),
      href: `/tools/${t.slug}`,
      text: [t.shortDescription, t.purpose, ...t.features.map((f) => f.title)].join(" "),
    });
  }
  for (const t of tools) {
    for (const a of t.mobileApps ?? []) {
      entries.push({
        type: "Aplicativo",
        title: `${a.name} (celular)`,
        note: `${t.name} · ${a.builds.map((b) => (b.platform === "ios" ? "iOS" : "Android")).join(", ")}${a.builds.some((b) => b.file || b.storeUrl) ? "" : " · em breve"}`,
        href: `/tools/${t.slug}#aplicativo`,
        text: `${a.description} aplicativo celular mobile download apk`,
      });
    }
  }
  for (const m of manuals) {
    entries.push({
      type: "Manual",
      title: `${toolName(m.tool)} — ${m.title} v${m.version}`,
      note: `${DOCUMENT_TYPE_LABEL[m.type]} · ${m.format} · ${m.fileSize}`,
      href: `/tools/${m.tool}/manual`,
      text: DOCUMENT_TYPE_LABEL[m.type],
    });
  }
  for (const p of publications) {
    entries.push({ type: "Publicação", title: p.title, note: `${p.venue} · ${p.year}`, href: "/research", text: p.authors.join(" ") });
  }
  for (const m of team) {
    entries.push({ type: "Pessoa", title: m.name, note: `${m.role} · ${m.institution}`, href: m.bio ? `/team/${m.slug}` : "/team", text: m.expertise ?? "" });
  }
  entries.push(
    { type: "Página", title: "Sobre o FACEU", note: "O projeto, objetivo e público", href: "/about", text: "projeto objetivo ufersa" },
    { type: "Página", title: "Áreas de atuação", note: "Frentes de trabalho do projeto", href: "/focus-areas", text: "tratamento água esgoto topografia" },
    { type: "Página", title: "Manuais e recursos", note: "Biblioteca de documentação", href: "/resources", text: "manuais documentação download" },
    { type: "Página", title: "Contato", note: "Fale com o projeto", href: "/contact", text: "suporte parceria colaboração e-mail" },
  );
  return entries;
}
