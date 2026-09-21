import React from "react";
import { Card } from "../core/Card.jsx";
import { Button } from "../core/Button.jsx";
import { StatusBadge } from "../core/StatusBadge.jsx";
import { Icon } from "../core/Icon.jsx";

export function DocumentCard({
  title, tool, type = "User manual", version, language = "English", format = "PDF",
  fileSize, updatedAt, current = false, layout = "row", onDownload, href, style, ...rest
}) {
  const meta = [version, language, [format, fileSize].filter(Boolean).join(" · "), updatedAt ? "Updated " + updatedAt : null].filter(Boolean);
  const row = layout === "row";
  return (
    <Card
      tone="light" padding="var(--space-5)"
      style={{ display: "flex", flexDirection: row ? "row" : "column", alignItems: row ? "center" : "flex-start", gap: "var(--space-5)", ...style }}
      {...rest}
    >
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, flex: "0 0 auto", borderRadius: "var(--radius-sm)", background: "var(--surface-inset)", color: "var(--ink-700)" }}>
        <Icon name="file-text" size={20} strokeWidth={1.6} />
      </span>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>{type}</span>
          {current ? <StatusBadge status="current" /> : null}
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", margin: 0, color: "var(--text-strong)" }}>{title}</h3>
        {tool ? <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{tool}</p> : null}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: "var(--text-faint)" }}>{meta.join("  ·  ")}</p>
      </div>
      <Button size="sm" variant="outline" icon="download" onClick={onDownload} href={href} style={{ flex: "0 0 auto" }}>
        {"Download " + (tool ? tool + " " : "") + type.toLowerCase()}
      </Button>
    </Card>
  );
}
