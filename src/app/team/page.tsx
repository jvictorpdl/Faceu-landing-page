import { MemberCard } from "@/components/catalog";
import { Callout, Card, PageHero, Section, SectionHeading } from "@/components/ui";
import { TEAM_GROUPS, partners, team } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Equipe",
  description: "As pessoas que desenvolvem as ferramentas do FACEU e as instituições que apoiam o projeto.",
  path: "/team",
});

export default function TeamPage() {
  const groups = TEAM_GROUPS.map((g) => ({ name: g, members: team.filter((m) => m.group === g) })).filter((g) => g.members.length);
  return (
    <>
      <PageHero
        eyebrow="Equipe"
        title="Quem desenvolve o FACEU"
        description="Pessoas que desenvolvem as ferramentas do projeto, dentro da estrutura de pesquisa e desenvolvimento da UFERSA e de instituições parceiras."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Equipe" }]}
      />
      <Section compact>
        {groups.map((g) => (
          <div key={g.name} style={{ marginBottom: "var(--space-16)" }}>
            <SectionHeading level={2} align="left" eyebrow={`${g.members.length} ${g.members.length === 1 ? "pessoa" : "pessoas"}`} title={g.name} />
            <ul className="grid grid--3" style={{ listStyle: "none" }}>
              {g.members.map((m) => <MemberCard key={m.slug} member={m} />)}
            </ul>
          </div>
        ))}
        <Callout tone="note" title="Créditos em atualização">
          Os nomes vêm dos créditos publicados nas próprias ferramentas. Títulos, biografias, fotos e perfis acadêmicos (Lattes, ORCID) serão acrescentados pela equipe.
        </Callout>

        <div style={{ marginTop: "var(--space-16)" }}>
          <SectionHeading eyebrow="Instituições" title="Quem apoia o projeto" description="Logotipos só aparecem quando fornecidos ou autorizados pela instituição." />
          <ul className="grid grid--3" style={{ listStyle: "none" }}>
            {partners.map((p) => (
              <Card as="li" tone="subtle" key={p.name}>
                <span className="mono-label">{p.role}</span>
                <h3 style={{ marginTop: "var(--space-3)", fontSize: "var(--size-h4)" }}>{p.name}</h3>
              </Card>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
