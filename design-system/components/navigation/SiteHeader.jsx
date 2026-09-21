import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";
import { Button } from "../core/Button.jsx";
import { IconButton } from "../core/IconButton.jsx";

export function SiteHeader({ items = [], active, onNavigate, tone = "light", cta, onSearch, sticky = true, style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <header
      style={{
        position: sticky ? "sticky" : "static", top: 0, zIndex: 40,
        background: onDark ? "rgba(5,15,38,.82)" : "rgba(255,255,255,.88)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
        ...style
      }}
      {...rest}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", height: "var(--header-h)", display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
        <Wordmark tone={onDark ? "light" : "dark"} size={19} showDescriptor={false} href="#home" />
        <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", marginLeft: "auto" }}>
          {items.map((it) => {
            const label = typeof it === "string" ? it : it.label;
            const isActive = active === label;
            return (
              <a
                key={label} href={(typeof it === "object" && it.href) || "#"}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(label); } }}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)",
                  textDecoration: "none", padding: "9px 13px", borderRadius: "var(--radius-pill)",
                  color: isActive ? (onDark ? "var(--gold-400)" : "var(--ink-900)") : (onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"),
                  background: isActive ? (onDark ? "rgba(255,255,255,.07)" : "var(--surface-inset)") : "transparent",
                  transition: "color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)"
                }}
              >{label}</a>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          {onSearch ? <IconButton icon="search" label="Search FACEU" variant={onDark ? "onDark" : "ghost"} size="sm" onClick={onSearch} /> : null}
          {cta || <Button size="sm" variant={onDark ? "primary" : "secondary"}>Resources</Button>}
        </div>
      </div>
    </header>
  );
}
