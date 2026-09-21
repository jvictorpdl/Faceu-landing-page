import React from "react";

export function SpecTable({ rows = [], caption, style, ...rest }) {
  return (
    <div style={{ overflowX: "auto", ...style }} {...rest}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", minWidth: 320 }}>
        {caption ? <caption style={{ textAlign: "left", fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", paddingBottom: "var(--space-4)" }}>{caption}</caption> : null}
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              <th scope="row" style={{ textAlign: "left", verticalAlign: "top", padding: "14px var(--space-5) 14px 0", fontWeight: "var(--weight-medium)", color: "var(--text-muted)", width: "38%" }}>{r.label}</th>
              <td style={{ padding: "14px 0", color: "var(--text-strong)" }}>{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
