import Link from "next/link";
import { DocumentCard } from "@/components/catalog";
import { ResourceLibrary, type LibraryItem } from "@/components/ResourceLibrary";
import { Button, Callout, Card, PageHero, Section, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";
import { allManuals, tools } from "@/lib/content";
import { DOCUMENT_TYPE_LABEL, LANGUAGE_LABEL } from "@/lib/labels";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Manuais e documentação",
  description: "Biblioteca de documentos do FACEU: manuais do usuário, manuais técnicos e guias, com versão, idioma, formato e tamanho.",
  path: "/resources",
});

export default function ResourcesPage() {
  const toolName = (slug: string) => tools.find((t) => t.slug === slug)?.name ?? slug;
  const items: LibraryItem[] = allManuals().map((m) => ({
    id: m.id,
    tool: m.tool,
    toolName: toolName(m.tool),
    type: m.type,
    typeLabel: DOCUMENT_TYPE_LABEL[m.type],
    language: m.language,
    languageLabel: LANGUAGE_LABEL[m.language],
    year: m.updatedAt.slice(0, 4),
    text: `${m.title} ${toolName(m.tool)} ${DOCUMENT_TYPE_LABEL[m.type]} ${m.version}`,
    node: <DocumentCard manual={m} toolName={toolName(m.tool)} />,
  }));

  const empty = (
    <div className="stack stack-8">
      <Callout tone="info" title="Nenhum documento publicado ainda">
        Os manuais das ferramentas ainda não foram publicados. Quando forem, esta biblioteca passa a listá-los com versão, idioma, formato, tamanho e data, com filtros por ferramenta, tipo, ano e idioma.
      </Callout>
      <div>
        <SectionHeading level={2} align="left" title="Peça o manual de uma ferramenta" />
        <ul className="grid grid--2" style={{ listStyle: "none" }}>
          {tools.map((t) => (
            <Card as="li" key={t.slug}>
              <div className="row" style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
                <div>
                  <h3 style={{ fontSize: "var(--size-h4)" }}><Link href={`/tools/${t.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{t.name}</Link></h3>
                  <p className="mono-meta" style={{ marginTop: 4 }}>{t.category}</p>
                </div>
                <Button size="sm" variant="outline" icon="mail" wrap href={`mailto:${site.email}?subject=${encodeURIComponent(`Manual do ${t.name}`)}`} aria-label={`Solicitar o manual do ${t.name} por e-mail`}>Solicitar</Button>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Manuais e biblioteca de documentação"
        description="Todos os documentos publicados pelo projeto, com versão, idioma, formato e tamanho. Versões antigas permanecem disponíveis."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Recursos" }]}
      />
      <Section compact>
        <ResourceLibrary items={items} empty={empty} />
      </Section>
    </>
  );
}
