import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Checkbox({ label, checked = false, onChange, disabled = false, id, description, style, ...rest }) {
  return (
    <label htmlFor={id} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{ position: "relative", display: "inline-flex", flex: "0 0 auto", marginTop: 2 }}>
        <input
          id={id} type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
          style={{ position: "absolute", inset: 0, width: 18, height: 18, margin: 0, opacity: 0, cursor: "inherit" }}
          {...rest}
        />
        <span style={{
          width: 18, height: 18, borderRadius: "var(--radius-xs)", display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: checked ? "var(--ink-900)" : "var(--neutral-0)",
          border: "1px solid " + (checked ? "var(--ink-900)" : "var(--border-strong)"),
          color: "var(--text-on-dark)", transition: "all var(--dur-fast) var(--ease-standard)"
        }}>
          {checked ? <Icon name="check" size={13} strokeWidth={2.5} /> : null}
        </span>
      </span>
      <span>
        <span style={{ display: "block", fontSize: "var(--size-body-s)", color: "var(--text-strong)" }}>{label}</span>
        {description ? <span style={{ display: "block", fontSize: "var(--size-body-xs)", color: "var(--text-muted)", marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
