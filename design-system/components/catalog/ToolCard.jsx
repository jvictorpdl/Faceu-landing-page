import React from "react";
import { Card } from "../core/Card.jsx";
import { Tag } from "../core/Tag.jsx";
import { StatusBadge } from "../core/StatusBadge.jsx";
import { Button } from "../core/Button.jsx";
import { Icon } from "../core/Icon.jsx";

export function ToolCard({
  name, shortDescription, category, status = "stable", version, icon = "box",
  tone = "light", href, onLearnMore, onDownload, manualLabel, style, ...rest
}) {
  const onDark = tone === "dark";
  return (
    <Card tone={tone} interactive padding="var(--space-6)" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: "var(--radius-md)", background: onDark ? "rgba(255,255,255,.07)" : "var(--surface-gold-soft)", color: onDark ? "var(--gold-400)" : "var(--gold-600)", border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--gold-300)") }}>
          <Icon name={icon} size={22} strokeWidth={1.6} />
        </span>
        <StatusBadge status={status} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h3)", letterSpacing: "var(--track-heading)", color: onDark ? "var(--text-on-dark)" : "var(--text-strong)", margin: 0 }}>{name}</h3>
        <p style={{ fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{shortDescription}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "auto" }}>
        {category ? <Tag tone={onDark ? "onDark" : "neutral"} size="sm">{category}</Tag> : null}
        {version ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "var(--track-meta)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)" }}>{version}</span> : null}
      </div>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", paddingTop: "var(--space-4)", borderTop: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)") }}>
        <Button size="sm" variant={onDark ? "onDark" : "outline"} href={href} onClick={onLearnMore} iconAfter="arrow-right">Learn more</Button>
        {onDownload || manualLabel ? (
          <Button size="sm" variant="ghost" icon="download" onClick={onDownload} style={onDark ? { color: "var(--gold-400)" } : null}>{manualLabel || "Manual"}</Button>
        ) : null}
      </div>
    </Card>
  );
}
