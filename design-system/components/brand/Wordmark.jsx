import React from "react";

/* No FACEU logo file was supplied with the brief — the wordmark is set in type.
   Swap the inner markup for an <img src="assets/logo.svg"> once a real mark exists. */
export function Wordmark({ tone = "dark", size = 22, descriptor = "Research & Innovation", showDescriptor = true, href, style, ...rest }) {
  const onDark = tone === "light";
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", ...style }} {...rest}>
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size * 1.45, height: size * 1.45, borderRadius: "var(--radius-sm)", background: onDark ? "var(--grad-gold)" : "var(--ink-900)", color: onDark ? "var(--ink-900)" : "var(--gold-400)", fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: size * 0.78, letterSpacing: "-.04em" }}>F</span>
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: size, letterSpacing: ".01em", color: onDark ? "var(--text-on-dark)" : "var(--ink-900)" }}>FACEU</span>
        {showDescriptor ? (
          <span style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: Math.max(9, size * 0.42), letterSpacing: ".1em", textTransform: "uppercase", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{descriptor}</span>
        ) : null}
      </span>
    </Tag>
  );
}
