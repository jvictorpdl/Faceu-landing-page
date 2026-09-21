import { notFound } from "next/navigation";
import { PublicationItem } from "@/components/catalog";
import { PageHero, Section } from "@/components/ui";
import { publications } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pesquisa e publicações",
  description: "Artigos, relatórios técnicos e trabalhos acadêmicos produzidos no âmbito do FACEU.",
  path: "/research",
});

export default function ResearchPage() {
  if (!publications.length) notFound(); // sem conteúdo real, a página não existe
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  return (
    <>
      <PageHero eyebrow="Pesquisa" title="Publicações e trabalhos" description="Artigos, relatórios e trabalhos acadêmicos produzidos no projeto." breadcrumb={[{ label: "Início", href: "/" }, { label: "Pesquisa" }]} />
      <Section compact>
        <ul className="pub-list">{sorted.map((p) => <PublicationItem key={p.id} pub={p} />)}</ul>
      </Section>
    </>
  );
}
