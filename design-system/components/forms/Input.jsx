import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Input({ icon, invalid = false, size = "md", tone = "light", style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const onDark = tone === "dark";
  const pad = size === "sm" ? "9px 12px" : "12px 14px";
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      {icon ? (
        <span style={{ position: "absolute", left: 13, display: "flex", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)", pointerEvents: "none" }}>
          <Icon name={icon} size={17} />
        </span>
      ) : null}
      <input
        aria-invalid={invalid || undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: "100%", fontFamily: "var(--font-body)", fontSize: size === "sm" ? "var(--size-body-s)" : "var(--size-body-m)",
          color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
          background: onDark ? "rgba(255,255,255,.06)" : "var(--neutral-0)",
          padding: icon ? (size === "sm" ? "9px 12px 9px 38px" : "12px 14px 12px 40px") : pad,
          border: "1px solid " + (invalid ? "var(--status-danger)" : focus ? "var(--signal-500)" : onDark ? "var(--border-dark)" : "var(--border-subtle)"),
          borderRadius: "var(--radius-sm)", outline: "none",
          boxShadow: focus ? "0 0 0 3px color-mix(in oklch, var(--signal-500) 22%, transparent)" : "none",
          transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
          ...style
        }}
        {...rest}
      />
    </div>
  );
}
