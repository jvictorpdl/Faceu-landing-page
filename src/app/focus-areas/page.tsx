import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Button, Card, PageHero, Section, StatusBadge, Tag } from "@/components/ui";
import { focusAreas, toolsForFocusArea } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Áreas de atuação",
  description: "As frentes de trabalho do FACEU, os desafios que cada uma enfrenta, seus objetivos e as ferramentas associadas.",
  path: "/focus-areas",
});

export default function FocusAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de atuação"
        title="Onde o FACEU concentra o trabalho"
        description="Cada área parte de um desafio de cálculo da engenharia e chega a uma ou mais ferramentas publicadas."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Áreas de atuação" }]}
      />
      <Section>
        <ul className="stack stack-8" style={{ listStyle: "none" }}>
          {focusAreas.map((a) => {
            const related = toolsForFocusArea(a.slug);
            return (
              <li key={a.slug} id={a.slug}>
                <Card>
                  <div className="focus-area">
                    <div className="stack stack-4">
                      <span className="icon-plate"><Icon name={a.icon} size={22} strokeWidth={1.6} /></span>
                      <h2 style={{ fontSize: "var(--size-h2)" }}>{a.title}</h2>
                      <p className="lead">{a.description}</p>
                    </div>
                    <div className="stack stack-6">
                      <div>
                        <span className="mono-label">Desafio</span>
                        <p style={{ marginTop: "var(--space-2)" }}>{a.challenge}</p>
                      </div>
                      <div>
                        <span className="mono-label">Objetivos</span>
                        <ul className="use-cases" style={{ marginTop: "var(--space-2)" }}>
                          {a.objectives.map((o) => (
                            <li key={o}><Icon name="corner-down-right" size={16} /><span>{o}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="mono-label">Ferramentas associadas</span>
                        <ul className="stack stack-2" style={{ listStyle: "none", marginTop: "var(--space-3)" }}>
                          {related.map((t) => (
                            <li key={t.slug} className="row" style={{ justifyContent: "space-between" }}>
                              <Link href={`/tools/${t.slug}`} style={{ fontWeight: 500 }}>{t.name}</Link>
                              <span className="row"><Tag size="sm">{t.category}</Tag><StatusBadge status={t.status} /></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
        <div style={{ marginTop: "var(--space-10)" }}><Button variant="outline" href="/tools" iconAfter="arrow-right">Ver todas as ferramentas</Button></div>
      </Section>
    </>
  );
}
