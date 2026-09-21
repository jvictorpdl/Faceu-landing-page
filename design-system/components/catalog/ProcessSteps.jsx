import React from "react";

export function ProcessSteps({ steps = [], columns = 2, tone = "light", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <ol
      style={{
        listStyle: "none", margin: 0, padding: 0, display: "grid",
        gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))", gap: "var(--space-4)", ...style
      }}
      {...rest}
    >
      {steps.map((s, i) => (
        <li key={s.title} style={{
          background: onDark ? "rgba(255,255,255,.04)" : "var(--surface-card)",
          border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
          borderRadius: "var(--radius-md)", padding: "var(--space-5)",
          display: "flex", flexDirection: "column", gap: "var(--space-3)"
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: onDark ? "var(--gold-400)" : "var(--text-accent)" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", margin: 0, color: onDark ? "var(--text-on-dark)" : "var(--text-strong)" }}>{s.title}</h4>
          {s.description ? <p style={{ fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{s.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}
