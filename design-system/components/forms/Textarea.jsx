import React from "react";

export function Textarea({ invalid = false, rows = 5, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid || undefined}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        width: "100%", fontFamily: "var(--font-body)", fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)",
        color: "var(--text-strong)", background: "var(--neutral-0)", padding: "12px 14px", resize: "vertical",
        border: "1px solid " + (invalid ? "var(--status-danger)" : focus ? "var(--signal-500)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-sm)", outline: "none",
        boxShadow: focus ? "0 0 0 3px color-mix(in oklch, var(--signal-500) 22%, transparent)" : "none",
        transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
        ...style
      }}
      {...rest}
    />
  );
}
