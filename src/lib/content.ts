import { tools } from "@/content/tools";
import { manuals } from "@/content/manuals";
import { team, TEAM_GROUPS } from "@/content/team";
import { focusAreas, news, partners, publications } from "@/content/research";
import type { Manual, Member, Tool } from "./types";

/* Camada de consulta sobre src/content. As páginas só falam com este módulo. */

export { tools, manuals, team, focusAreas, news, partners, publications, TEAM_GROUPS };

export const getTool = (slug: string): Tool | undefined => tools.find((t) => t.slug === slug);
export const getMember = (slug: string): Member | undefined => team.find((m) => m.slug === slug);
export const getFocusArea = (slug: string) => focusAreas.find((a) => a.slug === slug);

/** Data mais recente primeiro; versão vigente antes das antigas. */
const byRecency = (a: Manual, b: Manual) =>
  Number(b.current) - Number(a.current) || b.updatedAt.localeCompare(a.updatedAt);

export const manualsForTool = (slug: string): Manual[] =>
  manuals.filter((m) => m.tool === slug).sort(byRecency);

export const currentManualsForTool = (slug: string): Manual[] =>
  manualsForTool(slug).filter((m) => m.current);

export const allManuals = (): Manual[] => [...manuals].sort(byRecency);

export const membersForTool = (tool: Tool): Member[] =>
  tool.relatedMembers.map((s) => getMember(s)).filter((m): m is Member => Boolean(m));

export const toolsForFocusArea = (slug: string): Tool[] => tools.filter((t) => t.focusAreas.includes(slug));

/** Membros só ganham página própria quando há biografia para exibir. */
export const membersWithProfile = (): Member[] => team.filter((m) => Boolean(m.bio));

/** Seções opcionais só aparecem na navegação quando têm conteúdo real. */
export const hasPublications = publications.length > 0;
export const hasNews = news.length > 0;

/* Validação em tempo de build: referências quebradas em src/content derrubam o build. */
(function validate() {
  const errors: string[] = [];
  const toolSlugs = new Set(tools.map((t) => t.slug));
  const memberSlugs = new Set(team.map((m) => m.slug));
  const areaSlugs = new Set(focusAreas.map((a) => a.slug));
  const pubIds = new Set(publications.map((p) => p.id));
  const dup = (label: string, values: string[]) => {
    const seen = new Set<string>();
    for (const v of values) {
      if (seen.has(v)) errors.push(`${label} duplicado: ${v}`);
      seen.add(v);
    }
  };
  dup("slug de ferramenta", tools.map((t) => t.slug));
  dup("slug de membro", team.map((m) => m.slug));
  dup("id de manual", manuals.map((m) => m.id));
  for (const t of tools) {
    t.relatedMembers.forEach((s) => memberSlugs.has(s) || errors.push(`${t.slug}: membro inexistente "${s}"`));
    t.focusAreas.forEach((s) => areaSlugs.has(s) || errors.push(`${t.slug}: área inexistente "${s}"`));
    t.relatedPublications.forEach((s) => pubIds.has(s) || errors.push(`${t.slug}: publicação inexistente "${s}"`));
  }
  for (const m of manuals) toolSlugs.has(m.tool) || errors.push(`manual ${m.id}: ferramenta inexistente "${m.tool}"`);
  for (const m of team) (TEAM_GROUPS as readonly string[]).includes(m.group) || errors.push(`${m.slug}: grupo "${m.group}" não declarado em TEAM_GROUPS`);
  for (const t of tools) {
    const cur = manuals.filter((m) => m.tool === t.slug && m.current);
    const keys = cur.map((m) => `${m.type}:${m.language}`);
    if (new Set(keys).size !== keys.length) errors.push(`${t.slug}: mais de uma versão "current" para o mesmo tipo e idioma`);
  }
  if (errors.length) throw new Error("Conteúdo inválido:\n - " + errors.join("\n - "));
})();
