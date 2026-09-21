import React from "react";

export function SectionHeading({ eyebrow, title, description, align = "split", tone = "light", level = 2, action, style, ...rest }) {
  const H = "h" + level;
  const onDark = tone === "dark";
  const head = (
    <div>
      {eyebrow ? (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: onDark ? "var(--gold-400)" : "var(--text-accent)", fontWeight: "var(--weight-medium)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-4)" }}>
          <span style={{ width: 5, height: 5, background: "currentColor", transform: "rotate(45deg)", display: "inline-block" }} />
          {eyebrow}
        </div>
      ) : null}
      {React.createElement(H, { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-display-m)", lineHeight: "var(--lh-display)", letterSpacing: "var(--track-display)", fontWeight: "var(--weight-semibold)", color: onDark ? "var(--text-on-dark)" : "var(--text-strong)", margin: 0, maxWidth: "20ch" } }, title)}
    </div>
  );
  const side = description || action ? (
    <div style={{ maxWidth: "var(--measure-narrow)", display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "flex-start", paddingTop: eyebrow ? "38px" : 0 }}>
      {description ? <p style={{ fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{description}</p> : null}
      {action}
    </div>
  ) : null;
  return (
    <div
      style={{
        display: align === "split" ? "grid" : "flex", flexDirection: "column",
        gridTemplateColumns: align === "split" ? "minmax(0,1fr) minmax(0,.85fr)" : undefined,
        gap: "var(--space-8)", alignItems: align === "split" ? "start" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
        marginBottom: "var(--space-10)", ...style
      }}
      {...rest}
    >
      {head}
      {side}
    </div>
  );
}
