import { notFound } from "next/navigation";
import { Card, PageHero, Section, Tag } from "@/components/ui";
import { news } from "@/lib/content";
import { formatDate } from "@/lib/labels";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Novidades",
  description: "Lançamentos de ferramentas, manuais atualizados, eventos e marcos do projeto FACEU.",
  path: "/news",
});

export default function NewsPage() {
  if (!news.length) notFound(); // sem conteúdo real, a página não existe
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero eyebrow="Novidades" title="Últimas do projeto" breadcrumb={[{ label: "Início", href: "/" }, { label: "Novidades" }]} />
      <Section compact>
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {sorted.map((n) => (
            <li key={n.slug}>
              <Card as="article" hover>
                <div className="row"><Tag size="sm" tone="signal">{n.tag}</Tag><time className="mono-meta" dateTime={n.date}>{formatDate(n.date)}</time></div>
                <h2 style={{ marginTop: "var(--space-4)", fontSize: "var(--size-h4)" }}>{n.title}</h2>
                <p style={{ marginTop: "var(--space-2)", fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{n.excerpt}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
