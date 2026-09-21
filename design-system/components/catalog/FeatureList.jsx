import React from "react";
import { Icon } from "../core/Icon.jsx";

export function FeatureList({ items = [], columns = 2, tone = "light", marker = "check", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))", gap: "var(--space-5) var(--space-8)", ...style }} {...rest}>
      {items.map((it) => {
        const item = typeof it === "string" ? { title: it } : it;
        return (
          <li key={item.title} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, flex: "0 0 auto", borderRadius: "var(--radius-sm)", background: onDark ? "rgba(255,255,255,.07)" : "var(--surface-signal-soft)", color: onDark ? "var(--signal-400)" : "var(--signal-700)" }}>
              <Icon name={item.icon || marker} size={14} strokeWidth={2} />
            </span>
            <span>
              <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "var(--size-body-m)", fontWeight: "var(--weight-medium)", color: onDark ? "var(--text-on-dark)" : "var(--text-strong)" }}>{item.title}</span>
              {item.description ? <span style={{ display: "block", marginTop: 4, fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{item.description}</span> : null}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
