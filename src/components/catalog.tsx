import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { Button, Card, IconButton, StatusBadge, Tag } from "./ui";
import { DOCUMENT_TYPE_LABEL, LANGUAGE_LABEL, PLATFORM_LABEL, formatMonthYear, isBuildAvailable, toolHasAvailableMobile, toolHasMobile } from "@/lib/labels";
import { currentManualsForTool } from "@/lib/content";
import { site } from "@/content/site";
import type { Manual, Member, MobileApp, MobileBuild, Publication, Tool } from "@/lib/types";

/* ---------------------------------------------------------------- Documentos */

/** Rótulo acessível completo: nunca apenas "Baixar". */
export function manualLabel(m: Manual, toolName: string): string {
  return `Baixar ${DOCUMENT_TYPE_LABEL[m.type]} — ${toolName}, versão ${m.version} (${m.format}, ${m.fileSize})`;
}

export function DocumentCard({ manual, toolName, showTool = true }: { manual: Manual; toolName: string; showTool?: boolean }) {
  const meta = [
    `Versão ${manual.version}`,
    LANGUAGE_LABEL[manual.language],
    `${manual.format} · ${manual.fileSize}`,
    `Atualizado em ${formatMonthYear(manual.updatedAt)}`,
  ];
  return (
    <Card as="li" className="doc-card">
      <span className="doc-card__icon"><Icon name="file-text" size={20} strokeWidth={1.6} /></span>
      <div className="doc-card__body">
        <div className="doc-card__head">
          <span className="mono-label">{DOCUMENT_TYPE_LABEL[manual.type]}</span>
          {manual.current ? <StatusBadge status="current" /> : null}
        </div>
        <h3 className="doc-card__title">{manual.title}</h3>
        {showTool ? <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{toolName}</p> : null}
        <ul className="doc-card__meta" style={{ listStyle: "none" }}>
          {meta.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </div>
      <Button size="sm" variant={manual.current ? "primary" : "outline"} icon="download" href={manual.file} download aria-label={manualLabel(manual, toolName)}>
        Baixar {DOCUMENT_TYPE_LABEL[manual.type].toLowerCase()}
      </Button>
    </Card>
  );
}

/** Estado exibido quando uma ferramenta ainda não tem documento publicado. */
export function NoManual({ tool }: { tool: Tool }) {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent(`Manual do ${tool.name}`)}`;
  return (
    <div className="callout callout--info" role="note">
      <span className="callout__icon"><Icon name="info" size={19} /></span>
      <div>
        <strong className="callout__title">Manual ainda não publicado</strong>
        <div className="callout__body">
          O manual do {tool.name} ainda não está disponível para download. Quando for publicado, aparece aqui com versão, idioma, formato e tamanho.
        </div>
        <div className="callout__actions">
          <Button size="sm" variant="outline" icon="mail" href={mail} aria-label={`Solicitar o manual do ${tool.name} por e-mail`}>Solicitar por e-mail</Button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Aplicativos móveis */
function buildLabel(app: MobileApp, b: MobileBuild): string {
  const p = PLATFORM_LABEL[b.platform];
  if (b.file) return `Baixar ${app.name} para ${p}${b.version ? `, versão ${b.version}` : ""} (${[b.format, b.fileSize].filter(Boolean).join(", ")})`;
  if (b.storeUrl) return `Abrir ${app.name} na loja de aplicativos do ${p} (abre em nova aba)`;
  return `${app.name} para ${p}: download ainda não disponível`;
}

/** Aplicativo móvel de uma ferramenta, com uma linha por plataforma. Sem arquivo nem loja, mostra "Em breve". */
export function MobileAppCard({ app }: { app: MobileApp }) {
  return (
    <Card as="li" className="app-card">
      <div className="app-card__head">
        <span className="icon-plate"><Icon name="smartphone" size={22} strokeWidth={1.6} /></span>
        <div>
          <h3 className="app-card__title">{app.name}</h3>
          <p className="app-card__desc">{app.description}</p>
        </div>
      </div>
      <ul className="app-card__builds">
        {app.builds.map((b) => {
          const meta = [b.version ? `Versão ${b.version}` : null, b.format, b.fileSize, b.minOs, b.updatedAt ? `Atualizado em ${formatMonthYear(b.updatedAt)}` : null].filter(Boolean);
          const ok = isBuildAvailable(b);
          return (
            <li key={b.platform} className="app-build">
              <div className="app-build__info">
                <span className="mono-label">{PLATFORM_LABEL[b.platform]}</span>
                {ok ? (
                  meta.length ? <span className="mono-meta">{meta.join(" · ")}</span> : null
                ) : (
                  <span className="mono-meta">Em breve</span>
                )}
              </div>
              {ok ? (
                b.file ? (
                  <Button size="sm" variant="primary" icon="download" href={b.file} download aria-label={buildLabel(app, b)}>Baixar para {PLATFORM_LABEL[b.platform]}</Button>
                ) : (
                  <Button size="sm" variant="primary" iconAfter="external-link" href={b.storeUrl} aria-label={buildLabel(app, b)}>Abrir na loja</Button>
                )
              ) : (
                <Button size="sm" variant="outline" icon="download" disabled aria-label={buildLabel(app, b)}>Em breve</Button>
              )}
              {b.file && b.format === "APK" ? (
                <p className="app-build__note">Arquivo APK: para instalar, o Android pode pedir permissão para instalar apps de fora da loja.</p>
              ) : null}
              {b.file && b.sha256 ? <p className="app-build__note mono-meta">SHA-256: <code>{b.sha256}</code></p> : null}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

/* ---------------------------------------------------------------- Ferramentas */
export function ToolCard({ tool }: { tool: Tool }) {
  const manual = currentManualsForTool(tool.slug)[0];
  return (
    <Card hover className="tool-card" as="article">
      {tool.thumbnail ? (
        <div className="tool-card__thumb">
          <Image src={tool.thumbnail.src} alt="" width={tool.thumbnail.width} height={tool.thumbnail.height} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px" />
        </div>
      ) : null}
      <div className="tool-card__top">
        <span className="icon-plate"><Icon name={tool.icon} size={22} strokeWidth={1.6} /></span>
        <StatusBadge status={tool.status} />
      </div>
      <div>
        <h3 className="tool-card__title"><Link href={`/tools/${tool.slug}`}>{tool.name}</Link></h3>
        <p className="tool-card__desc">{tool.shortDescription}</p>
      </div>
      <div className="tool-card__meta">
        <Tag size="sm">{tool.category}</Tag>
        {toolHasMobile(tool) ? <Tag size="sm" tone="signal">{toolHasAvailableMobile(tool) ? "Versão para celular" : "Celular em breve"}</Tag> : null}
        {tool.version ? <span className="mono-meta">v{tool.version}</span> : null}
      </div>
      <div className="tool-card__actions">
        <Button size="sm" variant="outline" href={`/tools/${tool.slug}`} iconAfter="arrow-right" aria-label={`Saiba mais sobre ${tool.name}`}>Saiba mais</Button>
        {manual ? (
          <Button size="sm" variant="ghost" icon="download" href={manual.file} download aria-label={manualLabel(manual, tool.name)}>Manual</Button>
        ) : (
          <Button size="sm" variant="ghost" icon="file-text" href={`/tools/${tool.slug}/manual`} aria-label={`Ver a documentação do ${tool.name}`}>Documentação</Button>
        )}
      </div>
    </Card>
  );
}

export function ProcessSteps({ steps }: { steps: { title: string; description?: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="steps__num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.title}</h3>
          {s.description ? <p>{s.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}

export function FeatureList({ items }: { items: { title: string; description?: string }[] }) {
  return (
    <ul className="features">
      {items.map((it) => (
        <li key={it.title}>
          <span className="features__mark"><Icon name="check" size={14} strokeWidth={2} /></span>
          <span>
            <span className="features__title">{it.title}</span>
            {it.description ? <span className="features__desc">{it.description}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SpecTable({ rows, caption }: { rows: { label: string; value: string }[]; caption?: string }) {
  return (
    <table className="spec-table">
      {caption ? <caption>{caption}</caption> : null}
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <th scope="row">{r.label}</th>
            <td>{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Tabela de dados; em telas estreitas cada linha vira um bloco rotulado, sem rolagem horizontal. */
export function DataTable({ caption, columns, rows }: { caption: string; columns: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <caption style={{ padding: "16px 16px 12px" }}>{caption}</caption>
        <thead>
          <tr>{columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.join("|")}>
              {r.map((cell, i) => <td key={i} data-label={columns[i]}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Acordeão nativo (<details>): teclado e leitores de tela sem JavaScript. */
export function Accordion({ items, defaultOpen = 0 }: { items: { title: string; content: ReactNode }[]; defaultOpen?: number }) {
  return (
    <div className="accordion">
      {items.map((it, i) => (
        <details key={it.title} open={i === defaultOpen || undefined} name="faceu-accordion">
          <summary>
            {it.title}
            <Icon name="plus" size={18} className="icon-plus" />
            <Icon name="minus" size={18} className="icon-minus" />
          </summary>
          <div className="accordion__panel">{it.content}</div>
        </details>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- Pessoas */
const PROFILE_ICON = { lattes: "graduation-cap", orcid: "circle-user", linkedin: "circle-user", researchgate: "graduation-cap", github: "globe", site: "globe" } as const;

function initials(name: string) {
  const parts = name.split(" ").filter((p) => p.length > 2 && p[0] === p[0].toUpperCase());
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export function MemberCard({ member }: { member: Member }) {
  const hasProfile = Boolean(member.bio);
  const full = Boolean(member.photo || member.bio);
  if (!full) {
    return (
      <Card as="li" className="member-chip">
        <span className="member-chip__avatar" aria-hidden="true">{initials(member.name)}</span>
        <div>
          <div className="member-chip__name">{member.name}</div>
          <div className="member-chip__meta">{member.role} · {member.institution}</div>
        </div>
      </Card>
    );
  }
  return (
    <Card as="li" hover flush className="team-card">
      <div className="team-card__photo">
        {member.photo ? <Image src={member.photo.src} alt={member.photo.alt} width={member.photo.width} height={member.photo.height} /> : <span className="team-card__initials" aria-hidden="true">{initials(member.name)}</span>}
      </div>
      <div className="team-card__body">
        <span className="mono-label">{member.role}</span>
        <h3 className="team-card__name">{hasProfile ? <Link href={`/team/${member.slug}`}>{member.name}</Link> : member.name}</h3>
        {member.title ? <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-body)" }}>{member.title}</p> : null}
        <p>{member.institution}</p>
        {member.expertise ? <p>{member.expertise}</p> : null}
        {member.links.length ? (
          <div className="team-card__links">
            {member.links.map((l) => <IconButton key={l.href} icon={PROFILE_ICON[l.kind]} label={`${l.label} — ${member.name}`} href={l.href} size="sm" />)}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

/* ---------------------------------------------------------------- Pesquisa */
export function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <li className="pub-item">
      <span className="pub-item__year">{pub.year}</span>
      <div className="stack stack-2">
        <h3 className="pub-item__title">{pub.href ? <a href={pub.href} style={{ color: "inherit", textDecoration: "none" }}>{pub.title}</a> : pub.title}</h3>
        <p style={{ fontSize: "var(--size-body-s)" }}>{pub.authors.join("; ")}</p>
        <div className="row" style={{ marginTop: 4 }}>
          <Tag size="sm">{pub.type}</Tag>
          <span style={{ fontSize: "var(--size-body-xs)", color: "var(--text-muted)" }}>{pub.venue}</span>
          {pub.doi ? <span className="mono-meta">DOI {pub.doi}</span> : null}
        </div>
      </div>
      <div className="pub-item__links">
        {pub.pdf ? <a href={pub.pdf} download aria-label={`Baixar PDF: ${pub.title}`}><Icon name="file-down" size={16} />PDF</a> : null}
        {pub.href ? <a href={pub.href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir na página do editor: ${pub.title}`}><Icon name="external-link" size={16} />Editor</a> : null}
      </div>
    </li>
  );
}
