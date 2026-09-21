import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, PageHero, Section } from "@/components/ui";
import { getMember, membersWithProfile, tools } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

/* Só membros com biografia ganham página própria: evita páginas vazias indexáveis. */
export const dynamicParams = false;
export const generateStaticParams = () => {
  const list = membersWithProfile();
  // Com `dynamicParams = false` o Next exige ao menos um caminho; sem perfis, o slug abaixo cai em notFound().
  return list.length ? list.map((m) => ({ slug: m.slug })) : [{ slug: "_" }];
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const m = getMember((await params).slug);
  if (!m?.bio) return {};
  return pageMetadata({ title: m.name, description: `${m.role} no FACEU — ${m.institution}. ${m.bio}`.slice(0, 200), path: `/team/${m.slug}` });
}

export default async function MemberPage({ params }: { params: Promise<Params> }) {
  const m = getMember((await params).slug);
  if (!m?.bio) notFound();
  const worked = tools.filter((t) => t.relatedMembers.includes(m.slug));
  return (
    <>
      <PageHero eyebrow={m.role} title={m.name} description={[m.title, m.institution].filter(Boolean).join(" · ")} breadcrumb={[{ label: "Início", href: "/" }, { label: "Equipe", href: "/team" }, { label: m.name }]} />
      <Section compact>
        <div className="grid grid--2" style={{ gridTemplateColumns: "minmax(0, 320px) minmax(0, 1fr)", gap: "var(--space-12)" }}>
          {m.photo ? <Image src={m.photo.src} alt={m.photo.alt} width={m.photo.width} height={m.photo.height} style={{ borderRadius: "var(--radius-lg)" }} /> : <div className="placeholder-box">Retrato pendente</div>}
          <div className="stack stack-6">
            <p className="prose">{m.bio}</p>
            {m.expertise ? <p><span className="mono-label">Áreas de atuação</span><br />{m.expertise}</p> : null}
            {worked.length ? (
              <div>
                <span className="mono-label">Ferramentas</span>
                <ul className="chips" style={{ listStyle: "none", marginTop: "var(--space-3)" }}>
                  {worked.map((t) => <li key={t.slug}><Link href={`/tools/${t.slug}`}>{t.name}</Link></li>)}
                </ul>
              </div>
            ) : null}
            {m.links.length ? (
              <ul className="row" style={{ listStyle: "none" }}>
                {m.links.map((l) => <li key={l.href}><Button size="sm" variant="outline" icon="external-link" href={l.href}>{l.label}</Button></li>)}
              </ul>
            ) : null}
          </div>
        </div>
      </Section>
    </>
  );
}
