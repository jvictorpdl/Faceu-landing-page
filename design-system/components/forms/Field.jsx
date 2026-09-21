import React from "react";

export function Field({ label, htmlFor, hint, error, required = false, children, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{ fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)", color: "var(--text-strong)" }}>
          {label}
          {required ? <span aria-hidden="true" style={{ color: "var(--gold-600)", marginLeft: 4 }}>*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <p role="alert" style={{ fontSize: "var(--size-body-xs)", color: "var(--status-danger)" }}>{error}</p>
      ) : hint ? (
        <p style={{ fontSize: "var(--size-body-xs)", color: "var(--text-muted)" }}>{hint}</p>
      ) : null}
    </div>
  );
}
