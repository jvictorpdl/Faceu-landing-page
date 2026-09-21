import React from "react";
import { IconButton } from "../core/IconButton.jsx";

export function Modal({ open = false, title, description, children, footer, onClose, width = 560, style, ...rest }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      role="dialog" aria-modal="true" aria-label={typeof title === "string" ? title : undefined}
      style={{ position: "fixed", inset: 0, zIndex: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-6)", background: "rgba(5,15,38,.62)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
    >
      <div
        style={{
          width: "100%", maxWidth: width, background: "var(--surface-card)", borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)", padding: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-5)", ...style
        }}
        {...rest}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-5)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {title ? <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h3)", margin: 0, color: "var(--text-strong)" }}>{title}</h2> : null}
            {description ? <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{description}</p> : null}
          </div>
          {onClose ? <IconButton icon="x" label="Close dialog" variant="ghost" size="sm" onClick={onClose} /> : null}
        </div>
        {children}
        {footer ? <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-3)", paddingTop: "var(--space-2)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
