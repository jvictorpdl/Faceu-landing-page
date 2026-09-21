import { ToolCard } from "@/components/catalog";
import { ToolsExplorer } from "@/components/ToolsExplorer";
import { PageHero, Section } from "@/components/ui";
import { tools } from "@/lib/content";
import { STATUS_LABEL } from "@/lib/labels";
import { pageMetadata } from "@/lib/seo";
import { toolGridClass } from "@/lib/layout";

export const metadata = pageMetadata({
  title: "Ferramentas e soluções",
  description: "Catálogo das ferramentas de cálculo do FACEU: finalidade, situação, versão e acesso à documentação de cada uma.",
  path: "/tools",
});

export default function ToolsPage() {
  const statuses = Array.from(new Set(tools.map((t) => t.status))).map((s) => ({ value: s, label: STATUS_LABEL[s] }));
  return (
    <>
      <PageHero
        eyebrow="Ferramentas e soluções"
        title={`${tools.length} ferramentas, cada uma com sua página`}
        description="Ferramentas desenvolvidas dentro do FACEU e abertas ao uso de estudantes, docentes e profissionais. Nenhuma delas é um produto comercial."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Ferramentas" }]}
      />
      <Section compact>
        <ToolsExplorer
          statuses={statuses}
          gridClass={toolGridClass(tools.length)}
          items={tools.map((t) => ({
            slug: t.slug,
            category: t.category,
            status: t.status,
            text: [t.name, t.category, t.shortDescription, t.purpose].join(" "),
            node: <ToolCard tool={t} />,
          }))}
        />
      </Section>
    </>
  );
}
