import React from "react";

export function NavTabs({ items = [], active, onChange, tone = "light", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <div
      role="tablist"
      style={{ display: "flex", gap: "var(--space-6)", borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"), overflowX: "auto", ...style }}
      {...rest}
    >
      {items.map((it) => {
        const label = typeof it === "string" ? it : it.label;
        const count = typeof it === "object" ? it.count : undefined;
        const isActive = active === label;
        return (
          <button
            key={label} role="tab" aria-selected={isActive} onClick={() => onChange && onChange(label)}
            style={{
              appearance: "none", background: "none", cursor: "pointer", whiteSpace: "nowrap",
              padding: "0 0 14px", border: "none", borderBottom: "2px solid " + (isActive ? "var(--gold-500)" : "transparent"),
              marginBottom: "-1px", display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)",
              color: isActive ? (onDark ? "var(--text-on-dark)" : "var(--text-strong)") : (onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"),
              transition: "color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
            }}
          >
            {label}
            {count != null ? (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)" }}>{count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
