import React from "react";

const MAP = {
  stable: { label: "Stable", fg: "var(--status-stable)", bg: "var(--status-stable-bg)" },
  beta: { label: "Beta", fg: "var(--status-beta)", bg: "var(--status-beta-bg)" },
  development: { label: "In development", fg: "var(--status-dev)", bg: "var(--status-dev-bg)" },
  archived: { label: "Archived", fg: "var(--status-archived)", bg: "var(--status-archived-bg)" },
  current: { label: "Current", fg: "var(--status-stable)", bg: "var(--status-stable-bg)" }
};

export function StatusBadge({ status = "stable", label, dot = true, style, ...rest }) {
  const m = MAP[status] || MAP.stable;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--track-meta)", textTransform: "uppercase", lineHeight: 1,
        padding: "6px 10px", borderRadius: "var(--radius-xs)", color: m.fg, background: m.bg, ...style
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} /> : null}
      {label || m.label}
    </span>
  );
}
