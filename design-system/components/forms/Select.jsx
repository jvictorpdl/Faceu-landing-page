import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Select({ options = [], size = "md", invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <select
        aria-invalid={invalid || undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          appearance: "none", width: "100%", fontFamily: "var(--font-body)",
          fontSize: size === "sm" ? "var(--size-body-s)" : "var(--size-body-m)", color: "var(--text-strong)",
          background: "var(--neutral-0)", padding: size === "sm" ? "9px 34px 9px 12px" : "12px 38px 12px 14px",
          border: "1px solid " + (invalid ? "var(--status-danger)" : focus ? "var(--signal-500)" : "var(--border-subtle)"),
          borderRadius: "var(--radius-sm)", outline: "none", cursor: "pointer",
          boxShadow: focus ? "0 0 0 3px color-mix(in oklch, var(--signal-500) 22%, transparent)" : "none",
          transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
          ...style
        }}
        {...rest}
      >
        {options.map((o) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <span style={{ position: "absolute", right: 12, display: "flex", color: "var(--text-faint)", pointerEvents: "none" }}>
        <Icon name="chevron-down" size={16} />
      </span>
    </div>
  );
}
