import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentCard, NoManual } from "@/components/catalog";
import { Button, Callout, PageHero, Section, SectionHeading } from "@/components/ui";
import { getTool, manualsForTool, tools } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => tools.map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const tool = getTool((await params).slug);
  if (!tool) return {};
  return pageMetadata({
    title: `Documentação do ${tool.name}`,
    description: `Manuais, guias e histórico de versões do ${tool.name}: versão, idioma, formato e tamanho de cada documento.`,
    path: `/tools/${tool.slug}/manual`,
  });
}

export default async function ToolManualPage({ params }: { params: Promise<Params> }) {
  const tool = getTool((await params).slug);
  if (!tool) notFound();
  const docs = manualsForTool(tool.slug);
  const current = docs.filter((d) => d.current);
  const history = docs.filter((d) => !d.current);
  return (
    <>
      <PageHero
        eyebrow={`Documentação · ${tool.category}`}
        title={`Documentação do ${tool.name}`}
        description="Todos os documentos publicados para esta ferramenta, com a versão vigente em destaque e as anteriores preservadas."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Ferramentas", href: "/tools" }, { label: tool.name, href: `/tools/${tool.slug}` }, { label: "Documentação" }]}
      />
      <Section compact>
        <SectionHeading level={2} align="left" title="Versão atual" />
        {current.length ? <ul className="doc-list">{current.map((m) => <DocumentCard key={m.id} manual={m} toolName={tool.name} />)}</ul> : <NoManual tool={tool} />}
        {history.length ? (
          <div style={{ marginTop: "var(--space-12)" }}>
            <SectionHeading level={2} align="left" title="Histórico de versões" />
            <ul className="doc-list">{history.map((m) => <DocumentCard key={m.id} manual={m} toolName={tool.name} />)}</ul>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Callout tone="note" title="Sobre as versões">Versões anteriores permanecem disponíveis: estudos já publicados continuam a citá-las.</Callout>
            </div>
          </div>
        ) : null}
        <div className="row" style={{ marginTop: "var(--space-12)" }}>
          <Button variant="outline" icon="arrow-left" href={`/tools/${tool.slug}`}>Voltar ao {tool.name}</Button>
          <Button variant="ghost" href="/resources">Biblioteca completa de documentos</Button>
        </div>
      </Section>
    </>
  );
}
