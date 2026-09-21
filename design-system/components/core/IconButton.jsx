import React from "react";
import { Icon } from "./Icon.jsx";

const BOX = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, label, variant = "outline", size = "md", href, disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const Tag = href ? "a" : "button";
  const base = {
    outline: { background: "var(--neutral-0)", color: "var(--ink-800)", border: "1px solid var(--border-subtle)" },
    solid: { background: "var(--ink-900)", color: "var(--text-on-dark)", border: "1px solid var(--ink-900)" },
    gold: { background: "var(--grad-gold)", color: "var(--text-on-gold)", border: "1px solid transparent" },
    ghost: { background: "transparent", color: "var(--neutral-500)", border: "1px solid transparent" },
    onDark: { background: "rgba(255,255,255,.07)", color: "var(--text-on-dark)", border: "1px solid var(--border-dark)" }
  }[variant];
  const hoverStyle = {
    outline: { borderColor: "var(--gold-500)", color: "var(--gold-700)" },
    solid: { background: "var(--ink-700)" },
    gold: { boxShadow: "var(--shadow-gold)" },
    ghost: { background: "var(--surface-inset)", color: "var(--ink-800)" },
    onDark: { background: "rgba(255,255,255,.16)" }
  }[variant];
  return (
    <Tag
      href={href} aria-label={label} title={label} onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: box, height: box, borderRadius: "var(--radius-pill)", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1, textDecoration: "none",
        transition: "all var(--dur-base) var(--ease-standard)",
        ...base, ...(hover && !disabled ? hoverStyle : null), ...style
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(box * 0.45)} />
    </Tag>
  );
}
