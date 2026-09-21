import Link from "next/link";
import { Accordion, DocumentCard, NoManual, ToolCard } from "@/components/catalog";
import { Icon, type IconKey } from "@/components/Icon";
import { Button, Card, Section, SectionHeading, Stat, Tag } from "@/components/ui";
import { about, site } from "@/content/site";
import { allManuals, focusAreas, hasNews, manuals, news, partners, team, toolsForFocusArea, tools } from "@/lib/content";
import { STATUS_LABEL, formatDate } from "@/lib/labels";
import { toolGridClass } from "@/lib/layout";

const rail: { label: string; href: string; icon: IconKey; note: string }[] = [
  { label: "Ferramentas", href: "/tools", icon: "wrench", note: `${tools.length} instrumentos de cálculo` },
  { label: "Recursos", href: "/resources", icon: "folder-open", note: "Manuais e documentação" },
  { label: "Equipe", href: "/team", icon: "graduation-cap", note: "Quem desenvolve o projeto" },
  { label: "Contato", href: "/contact", icon: "mail", note: "Suporte e parcerias" },
];

export default function HomePage() {
  const stable = tools.filter((t) => t.status === "stable").length;
  const docs = allManuals().filter((m) => m.current).slice(0, 2);
  return (
    <>
      <div className="hero grid-bg">
        <div className="container hero__inner">
          <div>
            <div className="hero__pill">Projeto UFERSA · acesso livre e gratuito</div>
            <h1>
              Ferramentas de cálculo <span>para a engenharia</span>
            </h1>
            <p className="hero__lead">
              O FACEU reúne ferramentas computacionais para estudantes e profissionais de engenharia: dimensionamentos e cálculos que rodam no navegador, sem instalação e sem custo.
            </p>
            <div className="hero__actions">
              <Button size="lg" chip iconAfter="arrow-right" href="/tools">Ver ferramentas</Button>
              <Button size="lg" variant="on-dark" href="/about">Conhecer o projeto</Button>
              <Button size="lg" variant="ghost-dark" href="/team">Conhecer a equipe</Button>
            </div>
          </div>
          <div className="card card--hero">
            <div className="hero__panel-head">
              <h2 className="mono-label" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", fontWeight: 500, letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase" }}>Ferramentas do projeto</h2>
              <Icon name="wrench" size={18} />
            </div>
            <ul className="stack stack-3" style={{ listStyle: "none" }}>
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link className="hero__tool" href={`/tools/${t.slug}`} aria-label={`${t.name}: ${t.category}, ${STATUS_LABEL[t.status]}`}>
                    <Icon name={t.icon} size={18} />
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span className="hero__tool-name">{t.name}</span>
                      <span className="hero__tool-meta">{t.category} · {STATUS_LABEL[t.status]}</span>
                    </span>
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "var(--space-5)" }}>
              <Button size="sm" variant="on-dark" block href="/resources">Abrir a biblioteca de manuais</Button>
            </div>
          </div>
        </div>
        <nav className="hero__rail" aria-label="Acesso rápido">
          <div className="container">
            <ul>
              {rail.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>
                    <Icon name={r.icon} size={20} />
                    <span><strong>{r.label}</strong><span className="note">{r.note}</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <Section labelledBy="home-about">
        <SectionHeading
          id="home-about"
          eyebrow="Sobre o FACEU"
          title="Cálculo aberto a quem projeta"
          description={about.background[0]}
          action={<Button variant="outline" href="/about" iconAfter="arrow-right">Ler sobre o projeto</Button>}
        />
        <div className="grid grid--3">
          <Card tone="subtle">
            <span className="mono-label">Objetivo</span>
            <p style={{ marginTop: "var(--space-3)" }}>{about.objective}</p>
          </Card>
          <Card tone="subtle">
            <span className="mono-label">O que o projeto faz</span>
            <p style={{ marginTop: "var(--space-3)" }}>Desenvolve algoritmos e ferramentas que simplificam rotinas de cálculo e aumentam a precisão e a eficiência de projetos de engenharia.</p>
          </Card>
          <Card tone="subtle">
            <span className="mono-label">Para quem</span>
            <p style={{ marginTop: "var(--space-3)" }}>Estudantes de engenharia e profissionais de áreas correlatas.</p>
          </Card>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="home-focus">
        <SectionHeading
          id="home-focus"
          eyebrow="Áreas de atuação"
          title={`${focusAreas.length === 3 ? "Três" : focusAreas.length} frentes de trabalho`}
          description="Cada área diz qual problema enfrenta e quais ferramentas nasceram dela."
          action={<Button variant="outline" href="/focus-areas" iconAfter="arrow-right">Ver todas as áreas</Button>}
        />
        <Accordion
          items={focusAreas.map((a) => ({
            title: a.title,
            content: (
              <>
                <div>
                  <p style={{ color: "var(--text-body)" }}>{a.description}</p>
                  <p style={{ marginTop: "var(--space-4)", fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>
                    <strong style={{ color: "var(--text-strong)" }}>Desafio — </strong>{a.challenge}
                  </p>
                </div>
                <div>
                  <span className="mono-label">Ferramentas relacionadas</span>
                  <div className="chips" style={{ marginTop: "var(--space-3)" }}>
                    {toolsForFocusArea(a.slug).map((t) => (
                      <Link key={t.slug} href={`/tools/${t.slug}`} style={{ textDecoration: "none" }}><Tag tone="gold" size="sm">{t.name}</Tag></Link>
                    ))}
                  </div>
                </div>
              </>
            ),
          }))}
        />
      </Section>

      <Section labelledBy="home-tools">
        <SectionHeading
          id="home-tools"
          eyebrow="Ferramentas e soluções"
          title="Instrumentos feitos dentro do projeto"
          description="Cada ferramenta tem página própria, situação atual e caminho direto para a documentação."
          action={<Button variant="outline" href="/tools" iconAfter="arrow-right">Ver todas as {tools.length} ferramentas</Button>}
        />
        <ul className={`grid ${toolGridClass(tools.length)}`} style={{ listStyle: "none" }}>
          {tools.map((t) => <li key={t.slug}><ToolCard tool={t} /></li>)}
        </ul>
      </Section>

      <Section tone="dark" compact>
        <div className="stats">
          <Stat value={tools.length} label="Ferramentas publicadas" note={`${stable} estável${stable === 1 ? "" : "is"}${tools.length - stable ? ` · ${tools.length - stable} em evolução` : ""}`} />
          <Stat value={team.length} label="Pessoas na equipe de desenvolvimento" note="créditos das ferramentas" />
          <Stat value={partners.length} label="Instituições de apoio" note="UFERSA e sua pró-reitoria" />
          {manuals.length ? <Stat value={manuals.length} label="Documentos disponíveis" note="manuais e guias" /> : null}
        </div>
      </Section>

      <Section tone="subtle" labelledBy="home-docs">
        <SectionHeading
          id="home-docs"
          eyebrow="Documentação"
          title="Manuais a um clique de distância"
          description="A biblioteca lista cada documento com versão, idioma, formato e tamanho, e mantém as versões anteriores disponíveis."
          action={<Button variant="outline" href="/resources" iconAfter="arrow-right">Abrir a biblioteca</Button>}
        />
        {docs.length ? (
          <ul className="doc-list">
            {docs.map((m) => <DocumentCard key={m.id} manual={m} toolName={tools.find((t) => t.slug === m.tool)!.name} />)}
          </ul>
        ) : (
          <div className="stack stack-4">
            <p className="prose">Os manuais das ferramentas ainda não foram publicados. Cada página de ferramenta já tem o espaço reservado para eles, com histórico de versões.</p>
            <NoManual tool={tools[0]} />
          </div>
        )}
      </Section>

      {hasNews ? (
        <Section labelledBy="home-news">
          <SectionHeading id="home-news" eyebrow="Novidades" title="Últimas do projeto" action={<Button variant="outline" href="/news" iconAfter="arrow-right">Todas as novidades</Button>} />
          <ul className="grid grid--3" style={{ listStyle: "none" }}>
            {news.slice(0, 3).map((n) => (
              <li key={n.slug}>
                <Card hover as="article">
                  <div className="row"><Tag size="sm" tone="signal">{n.tag}</Tag><span className="mono-meta">{formatDate(n.date)}</span></div>
                  <h3 style={{ marginTop: "var(--space-4)", fontSize: "var(--size-h4)" }}>{n.title}</h3>
                  <p style={{ marginTop: "var(--space-2)", fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{n.excerpt}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section tone="deep" compact>
        <div className="cta-band">
          <div>
            <h2>Precisa de ajuda com uma ferramenta?</h2>
            <p>Escreva ao projeto para tirar dúvidas de uso, propor colaboração em pesquisa ou uma parceria institucional.</p>
          </div>
          <div className="cta-band__actions">
            <Button size="lg" chip iconAfter="arrow-right" href="/contact">Falar com o projeto</Button>
            <Button size="lg" variant="on-dark" href={`mailto:${site.email}`} icon="mail">Enviar e-mail</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
