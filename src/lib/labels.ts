import type { DocumentType, Language, MobileBuild, Tool, ToolStatus } from "./types";

export const STATUS_LABEL: Record<ToolStatus, string> = {
  stable: "Estável",
  beta: "Beta",
  development: "Em desenvolvimento",
  archived: "Arquivada",
};

export const DOCUMENT_TYPE_LABEL: Record<DocumentType, string> = {
  "user-manual": "Manual do usuário",
  "technical-manual": "Manual técnico",
  "quick-start": "Guia de início rápido",
  documentation: "Documentação",
  "release-notes": "Notas da versão",
};

export const LANGUAGE_LABEL: Record<Language, string> = {
  "pt-BR": "Português",
  en: "Inglês",
};

const MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

/** "2026-03-12" -> "março de 2026" */
export function formatMonthYear(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} de ${y}`;
}

/** "2026-03-12" -> "12 de março de 2026" */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${MONTHS[m - 1]} de ${y}`;
}

export function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export const PLATFORM_LABEL = { android: "Android", ios: "iOS" } as const;


/** Uma versão móvel está disponível quando há arquivo ou link de loja. */
export const isBuildAvailable = (b: MobileBuild) => Boolean(b.file || b.storeUrl);

export const toolHasMobile = (t: Tool) => Boolean(t.mobileApps?.length);
export const toolHasAvailableMobile = (t: Tool) => Boolean(t.mobileApps?.some((a) => a.builds.some(isBuildAvailable)));
