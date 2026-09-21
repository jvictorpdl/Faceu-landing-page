import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";

export function SearchField({ placeholder = "Search tools, manuals and publications", value, onChange, onSubmit, scopes = [], scope, onScopeChange, tone = "light", buttonLabel = "Search", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <form
      role="search"
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(value); }}
      style={{
        display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "8px 8px 8px 16px",
        background: onDark ? "rgba(255,255,255,.06)" : "var(--neutral-0)",
        border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-pill)", ...style
      }}
      {...rest}
    >
      <Icon name="search" size={18} style={{ color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)" }} />
      <input
        type="search" value={value} onChange={onChange} placeholder={placeholder} aria-label={placeholder}
        style={{
          flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
          fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)",
          color: onDark ? "var(--text-on-dark)" : "var(--text-strong)"
        }}
      />
      {scopes.length ? (
        <select
          value={scope} onChange={(e) => onScopeChange && onScopeChange(e.target.value)} aria-label="Limit search to"
          style={{
            appearance: "none", border: "none", background: "transparent", cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)",
            color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)", paddingRight: "var(--space-2)"
          }}
        >
          {scopes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      ) : null}
      <Button type="submit" size="sm" variant={onDark ? "primary" : "secondary"} chip iconAfter="arrow-right">{buttonLabel}</Button>
    </form>
  );
}
