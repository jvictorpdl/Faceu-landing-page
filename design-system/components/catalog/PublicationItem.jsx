import React from "react";
import { Tag } from "../core/Tag.jsx";
import { Icon } from "../core/Icon.jsx";

export function PublicationItem({ title, authors, year, venue, type, doi, href, pdfHref, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "grid", gridTemplateColumns: "72px minmax(0,1fr) auto", gap: "var(--space-5)", alignItems: "start",
        padding: "var(--space-6) var(--space-4)", borderBottom: "1px solid var(--border-subtle)",
        background: hover ? "var(--surface-subtle)" : "transparent", transition: "background var(--dur-base) var(--ease-standard)",
        ...style
      }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-body-s)", color: "var(--text-accent)", letterSpacing: "var(--track-meta)", paddingTop: 2 }}>{year}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", lineHeight: "var(--lh-snug)", margin: 0, color: "var(--text-strong)" }}>
          {href ? <a href={href} style={{ color: "inherit", textDecoration: "none" }}>{title}</a> : title}
        </h3>
        {authors ? <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-body)" }}>{authors}</p> : null}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-1)" }}>
          {type ? <Tag size="sm">{type}</Tag> : null}
          {venue ? <span style={{ fontSize: "var(--size-body-xs)", color: "var(--text-muted)" }}>{venue}</span> : null}
          {doi ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-faint)" }}>DOI {doi}</span> : null}
        </div>
      </div>
      <div style={{ display: "flex", gap: "var(--space-4)", paddingTop: 4 }}>
        {pdfHref ? (
          <a href={pdfHref} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)", textDecoration: "none" }}>
            <Icon name="file-down" size={16} />PDF
          </a>
        ) : null}
        {href ? (
          <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)", textDecoration: "none" }}>
            <Icon name="external-link" size={16} />Publisher
          </a>
        ) : null}
      </div>
    </article>
  );
}
