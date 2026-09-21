import React from "react";

export function Stat({ value, label, note, tone = "dark", align = "left", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-display-m)", lineHeight: 1, letterSpacing: "var(--track-display)", fontWeight: "var(--weight-semibold)", color: onDark ? "var(--gold-400)" : "var(--ink-900)" }}>{value}</div>
      <div style={{ marginTop: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)", color: onDark ? "var(--text-on-dark)" : "var(--text-strong)" }}>{label}</div>
      {note ? <div style={{ marginTop: "var(--space-1)", fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{note}</div> : null}
    </div>
  );
}
