import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable, DocumentCard, FeatureList, MobileAppCard, NoManual, ProcessSteps, SpecTable } from "@/components/catalog";
import { Icon } from "@/components/Icon";
import { Breadcrumb, Button, Callout, Card, Section, StatusBadge, Tag } from "@/components/ui";
import { getFocusArea, getTool, manualsForTool, membersForTool, publications, tools } from "@/lib/content";
import { PLATFORM_LABEL, STATUS_LABEL, isBuildAvailable, toolHasAvailableMobile } from "@/lib/labels";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => tools.map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const tool = getTool((await params).slug);
  if (!tool) return {};
  const meta = pageMetadata({ title: `${tool.name} — ${tool.category}`, description: tool.shortDescription, path: `/tools/${tool.slug}` });
  if (tool.thumbnail) {
    const img = { url: tool.thumbnail.src, width: tool.thumbnail.width, height: tool.thumbnail.height, alt: tool.thumbnail.alt };
    meta.openGraph = { ...meta.openGraph, images: [img] };
    meta.twitter = { ...meta.twitter, images: [img.url] };
  }
  return meta;
}

export default async function ToolPage({ params }: { params: Promise<Params> }) {
  const tool = getTool((await params).slug);
  if (!tool) notFound();

  const docs = manualsForTool(tool.slug);
  const current = docs.filter((d) => d.current);
  const history = docs.filter((d) => !d.current);
  const members = membersForTool(tool);
  const pubs = publications.filter((p) => tool.relatedPublications.includes(p.id));
  const areas = tool.focusAreas.map(getFocusArea).filter((a) => a !== undefined);
  const openLink = tool.externalLinks.find((l) => l.kind === "tool");
  const otherLinks = tool.externalLinks.filter((l) => l !== openLink);

  const apps = tool.mobileApps ?? [];
  const mobileReady = toolHasAvailableMobile(tool);
  const platforms = Array.from(new Set(apps.flatMap((a) => a.builds.map((b) => PLATFORM_LABEL[b.platform]))));

  const spec = [
    { label: "Plataforma", value: tool.platform },
    ...(apps.length ? [{ label: "Versão para celular", value: `${platforms.join(", ")}${mobileReady ? "" : " (em breve)"}` }] : []),
    ...(tool.technologies?.length ? [{ label: "Tecnologias", value: tool.technologies.join(", ") }] : []),
    { label: "Requisitos", value: tool.requirements.join(" · ") },
    ...(tool.supportedFormats?.length ? [{ label: "Formatos aceitos", value: tool.supportedFormats.join(", ") }] : []),
    { label: "Versão", value: tool.version ? `v${tool.version}` : "Não informada" },
    { label: "Situação", value: STATUS_LABEL[tool.status] },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.shortDescription,
        applicationCategory: "EducationalApplication",
        operatingSystem: mobileReady ? ["Web", ...platforms].join(", ") : "Web",
        inLanguage: "pt-BR",
        url: absoluteUrl(`/tools/${tool.slug}`),
        ...(tool.version ? { softwareVersion: tool.version } : {}),
        ...(tool.thumbnail ? { image: absoluteUrl(tool.thumbnail.src) } : {}),
        offers: { "@type": "Offer", price: 0, priceCurrency: "BRL" },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: site.url },
          { "@type": "ListItem", position: 2, name: "Ferramentas", item: absoluteUrl("/tools") },
          { "@type": "ListItem", position: 3, name: tool.name, item: absoluteUrl(`/tools/${tool.slug}`) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ld) }} />

      {/* Cabeçalho da ferramenta */}
      <div className="page-hero grid-bg">
        <div className="container">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Ferramentas", href: "/tools" }, { label: tool.name }]} />
          <div className="tool-hero">
            <div>
              <div className="eyebrow">{tool.category}</div>
              <h1 style={{ marginTop: "var(--space-4)" }}>{tool.name}</h1>
              <p className="page-hero__desc">{tool.shortDescription}</p>
              <div className="page-hero__extra">
                <div className="tool-hero__actions">
                  {openLink ? <Button size="lg" chip iconAfter="arrow-right" href={openLink.href} aria-label={`${openLink.label} (abre em nova aba)`}>{openLink.label}</Button> : null}
                  <Button size="lg" variant="on-dark" icon="file-text" href="#documentacao">Ver documentação</Button>
                </div>
                <div className="row" style={{ marginTop: "var(--space-5)" }}>
                  <StatusBadge status={tool.status} />
                  {tool.version ? <span className="mono-meta" style={{ color: "var(--text-on-dark-muted)" }}>v{tool.version}</span> : null}
                </div>
              </div>
            </div>
            {tool.thumbnail ? (
              <div className="tool-hero__shot">
                <Image src={tool.thumbnail.src} alt={tool.thumbnail.alt} width={tool.thumbnail.width} height={tool.thumbnail.height} priority sizes="(max-width: 1000px) 520px, 420px" />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <nav className="subnav" aria-label="Nesta página">
        <div className="container">
          <ul>
            <li><a href="#visao-geral">Visão geral</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            {apps.length ? <li><a href="#aplicativo">Aplicativo para celular</a></li> : null}
            <li><a href="#tecnico">Informações técnicas</a></li>
            <li><a href="#documentacao">Documentação <span className="count">{current.length || "—"}</span></a></li>
          </ul>
        </div>
      </nav>

      <Section compact>
        <div className="tool-layout">
          <div className="tool-layout__main">
            {tool.status === "beta" ? (
              <Callout tone="warning" title="Ferramenta em versão beta">Revise os resultados antes de usá-los em trabalhos publicados ou em projetos.</Callout>
            ) : null}

            <section id="visao-geral" className="tool-block" aria-labelledby="h-visao">
              <h2 id="h-visao">Visão geral</h2>
              <div className="prose">{tool.fullDescription.map((p) => <p key={p}>{p}</p>)}</div>

              <h3 style={{ marginTop: "var(--space-10)", marginBottom: "var(--space-3)" }}>Finalidade</h3>
              <p className="prose">{tool.purpose}</p>

              <h3 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-3)" }}>Para quem é</h3>
              <p className="prose">{tool.targetAudience}</p>

              <h3 style={{ marginTop: "var(--space-10)", marginBottom: "var(--space-6)" }}>Principais recursos</h3>
              <FeatureList items={tool.features} />

              <h3 style={{ marginTop: "var(--space-10)", marginBottom: "var(--space-4)" }}>Aplicações</h3>
              <ul className="use-cases">
                {tool.useCases.map((u) => <li key={u}><Icon name="corner-down-right" size={16} /><span>{u}</span></li>)}
              </ul>
            </section>

            <section id="como-funciona" className="tool-block" aria-labelledby="h-como">
              <h2 id="h-como">Como funciona</h2>
              <p className="prose" style={{ marginBottom: "var(--space-8)" }}>Cinco passos, do preparo dos dados à leitura do resultado.</p>
              <ProcessSteps steps={tool.steps} />
              {tool.screenshots.length ? (
                <div className="stack stack-6" style={{ marginTop: "var(--space-8)" }}>
                  {tool.screenshots.map((s) => (
                    <figure key={s.src} className="shot" style={{ margin: 0 }}>
                      <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(max-width: 1000px) 100vw, 760px" />
                      <figcaption>Interface da ferramenta</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="placeholder-box" style={{ marginTop: "var(--space-8)" }}>Captura de tela pendente</div>
              )}
            </section>

            {apps.length ? (
              <section id="aplicativo" className="tool-block" aria-labelledby="h-app">
                <h2 id="h-app">Aplicativo para celular</h2>
                <p className="prose" style={{ marginBottom: "var(--space-6)" }}>
                  {mobileReady ? "Além da versão web, esta ferramenta tem aplicativo para celular." : "Esta ferramenta terá aplicativo para celular. Os downloads aparecem aqui assim que forem publicados."}
                </p>
                <ul className="stack stack-4" style={{ listStyle: "none" }}>
                  {apps.map((a) => <MobileAppCard key={a.id} app={a} />)}
                </ul>
              </section>
            ) : null}

            <section id="tecnico" className="tool-block" aria-labelledby="h-tec">
              <h2 id="h-tec">Informações técnicas</h2>
              <SpecTable rows={spec} />
              {tool.tables?.map((t) => (
                <div key={t.caption} style={{ marginTop: "var(--space-8)" }}>
                  <DataTable caption={t.caption} columns={t.columns} rows={t.rows} />
                </div>
              ))}
              {otherLinks.length ? (
                <div style={{ marginTop: "var(--space-8)" }}>
                  <span className="mono-label">Outros links</span>
                  <ul className="ext-list" style={{ marginTop: "var(--space-3)" }}>
                    {otherLinks.map((l) => <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}<Icon name="external-link" size={14} /></a></li>)}
                  </ul>
                </div>
              ) : null}
            </section>

            <section id="documentacao" className="tool-block" aria-labelledby="h-doc">
              <h2 id="h-doc">Documentação</h2>
              {current.length ? (
                <ul className="doc-list">{current.map((m) => <DocumentCard key={m.id} manual={m} toolName={tool.name} showTool={false} />)}</ul>
              ) : (
                <NoManual tool={tool} />
              )}
              {history.length ? (
                <>
                  <h3 style={{ marginTop: "var(--space-10)", marginBottom: "var(--space-4)" }}>Histórico de versões</h3>
                  <ul className="doc-list">{history.map((m) => <DocumentCard key={m.id} manual={m} toolName={tool.name} showTool={false} />)}</ul>
                  <div style={{ marginTop: "var(--space-6)" }}>
                    <Callout tone="note" title="Sobre as versões">Versões anteriores permanecem disponíveis: estudos já publicados continuam a citá-las.</Callout>
                  </div>
                </>
              ) : null}
              <div style={{ marginTop: "var(--space-6)" }}>
                <Link className="link-arrow" href={`/tools/${tool.slug}/manual`}>Página de documentação do {tool.name}<Icon name="arrow-right" size={15} /></Link>
              </div>
            </section>

            {pubs.length ? (
              <section className="tool-block" aria-labelledby="h-pub">
                <h2 id="h-pub">Pesquisa relacionada</h2>
                <ul className="stack stack-3" style={{ listStyle: "none" }}>
                  {pubs.map((p) => <li key={p.id}><strong>{p.title}</strong> — {p.authors.join("; ")} ({p.year}), {p.venue}</li>)}
                </ul>
              </section>
            ) : null}

            {members.length ? (
              <section className="tool-block" aria-labelledby="h-eq">
                <h2 id="h-eq">Quem desenvolveu</h2>
                <ul className="chips" style={{ listStyle: "none" }}>
                  {members.map((m) => <li key={m.slug} className="tag">{m.name} · {m.institution}</li>)}
                </ul>
                <div style={{ marginTop: "var(--space-5)" }}>
                  <Link className="link-arrow" href="/team">Ver a equipe do projeto<Icon name="arrow-right" size={15} /></Link>
                </div>
              </section>
            ) : null}
          </div>

          <aside className="tool-layout__aside" aria-label="Documentação e resumo">
            <Card className="aside-docs">
              <span className="mono-label">Documentação</span>
              <div style={{ marginTop: "var(--space-4)" }}>
                {current.length ? (
                  <>
                    {current.map((m, i) => (
                      <Button key={m.id} variant={i ? "outline" : "primary"} size="sm" icon="download" block wrap href={m.file} download aria-label={`Baixar ${m.title}, versão ${m.version} (${m.format}, ${m.fileSize})`}>
                        {m.title}
                      </Button>
                    ))}
                    <p className="mono-meta" style={{ marginTop: "var(--space-4)" }}>{current[0].format} · {current[0].fileSize} · versão {current[0].version}</p>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>Manual ainda não publicado.</p>
                    <div style={{ marginTop: "var(--space-3)" }}>
                      <Button size="sm" variant="outline" block icon="mail" href={`mailto:${site.email}?subject=${encodeURIComponent(`Manual do ${tool.name}`)}`} aria-label={`Solicitar o manual do ${tool.name} por e-mail`}>Solicitar por e-mail</Button>
                    </div>
                  </>
                )}
              </div>
            </Card>
            {apps.length ? (
              <Card>
                <span className="mono-label">Aplicativo para celular</span>
                <div className="stack stack-2" style={{ marginTop: "var(--space-4)" }}>
                  {apps.map((a) => (
                    <Button key={a.id} size="sm" variant={a.builds.some(isBuildAvailable) ? "primary" : "outline"} icon="smartphone" block wrap href="#aplicativo" aria-label={`${a.name}: ver opções de download para celular`}>
                      {a.name}{a.builds.some(isBuildAvailable) ? "" : " — em breve"}
                    </Button>
                  ))}
                </div>
              </Card>
            ) : null}
            <Card tone="subtle" className="aside-glance">
              <span className="mono-label">Em resumo</span>
              <dl className="glance" style={{ marginTop: "var(--space-4)", marginBottom: 0 }}>
                <div><dt>Categoria</dt><dd>{tool.category}</dd></div>
                <div><dt>Situação</dt><dd>{STATUS_LABEL[tool.status]}</dd></div>
                <div><dt>Versão</dt><dd>{tool.version ? `v${tool.version}` : "—"}</dd></div>
                <div><dt>Plataforma</dt><dd>{tool.platform}</dd></div>
                <div><dt>Documentos</dt><dd>{docs.length}</dd></div>
              </dl>
              {areas.length ? (
                <div className="chips" style={{ marginTop: "var(--space-4)" }}>
                  {areas.map((a) => <Link key={a.slug} href={`/focus-areas#${a.slug}`} style={{ textDecoration: "none" }}><Tag size="sm" tone="signal">{a.title}</Tag></Link>)}
                </div>
              ) : null}
            </Card>
            <Button variant="ghost" icon="arrow-left" href="/tools">Todas as ferramentas</Button>
          </aside>
        </div>
      </Section>
    </>
  );
}
