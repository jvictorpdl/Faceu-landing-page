import { Button, Card, PageHero, Section, SectionHeading } from "@/components/ui";
import { about, site } from "@/content/site";
import { partners, tools } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sobre o FACEU",
  description: "O que é o FACEU, por que o projeto existe, a quem atende e quais instituições o apoiam.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre o FACEU"
        title="Um projeto de ferramentas abertas para a engenharia"
        description={site.fullName}
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
      />

      <Section labelledBy="about-context">
        <SectionHeading id="about-context" eyebrow="Contexto" title="Por que o projeto existe" />
        <div className="grid grid--2" style={{ gap: "var(--space-12)" }}>
          <div className="prose">
            {about.background.map((p) => <p key={p}>{p}</p>)}
          </div>
          <Card tone="subtle">
            <span className="mono-label">Objetivo</span>
            <p style={{ marginTop: "var(--space-3)", fontSize: "var(--size-body-l)", color: "var(--text-strong)" }}>{about.objective}</p>
          </Card>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="about-problems">
        <SectionHeading id="about-problems" eyebrow="Problemas abordados" title="O que as ferramentas resolvem" description="O FACEU concentra esforço em cálculos que se repetem e em quem precisa fazê-los sem custo." />
        <ul className="grid grid--2" style={{ listStyle: "none" }}>
          {about.problems.map((p, i) => (
            <Card as="li" key={p}>
              <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
              <p style={{ marginTop: "var(--space-3)", color: "var(--text-strong)" }}>{p}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section labelledBy="about-audience">
        <SectionHeading id="about-audience" eyebrow="Público" title="Quem usa o FACEU" />
        <ul className="chips" style={{ listStyle: "none" }}>
          {about.audience.map((a) => <li key={a} className="tag tag--gold" style={{ fontSize: "var(--size-body-s)", padding: "10px 16px" }}>{a}</li>)}
        </ul>
        <p className="prose" style={{ marginTop: "var(--space-8)" }}>
          As {tools.length} ferramentas publicadas cobrem {Array.from(new Set(tools.map((t) => t.category.toLowerCase()))).join(", ")}.
        </p>
        <div style={{ marginTop: "var(--space-6)" }}><Button href="/tools" chip iconAfter="arrow-right">Ver as ferramentas</Button></div>
      </Section>

      <Section tone="subtle" labelledBy="about-partners">
        <SectionHeading id="about-partners" eyebrow="Instituições" title="Quem apoia o projeto" description="Logotipos são exibidos apenas quando fornecidos ou autorizados; até lá, as instituições aparecem por nome." />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {partners.map((p) => (
            <Card as="li" key={p.name}>
              <span className="mono-label">{p.role}</span>
              <h3 style={{ marginTop: "var(--space-3)", fontSize: "var(--size-h4)" }}>
                {p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{p.name}</a> : p.name}
              </h3>
            </Card>
          ))}
        </ul>
      </Section>
    </>
  );
}
