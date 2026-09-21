import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Breadcrumb({ items = [], tone = "light", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb" style={style} {...rest}>
      <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
        {items.map((it, i) => {
          const label = typeof it === "string" ? it : it.label;
          const href = typeof it === "object" ? it.href : undefined;
          const last = i === items.length - 1;
          return (
            <li key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {href && !last ? (
                <a href={href} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", textDecoration: "none", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{label}</a>
              ) : (
                <span aria-current={last ? "page" : undefined} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: last ? (onDark ? "var(--gold-400)" : "var(--ink-900)") : (onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)") }}>{label}</span>
              )}
              {!last ? <Icon name="chevron-right" size={12} style={{ color: onDark ? "rgba(255,255,255,.35)" : "var(--text-faint)" }} /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
