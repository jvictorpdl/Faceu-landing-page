import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { pad: "7px 14px", font: "13px", gap: "7px", icon: 15 },
  md: { pad: "11px 20px", font: "14px", gap: "9px", icon: 17 },
  lg: { pad: "14px 26px", font: "16px", gap: "10px", icon: 19 }
};

const VARIANTS = {
  primary: { background: "var(--grad-gold)", color: "var(--text-on-gold)", border: "1px solid transparent" },
  secondary: { background: "var(--ink-900)", color: "var(--text-on-dark)", border: "1px solid var(--ink-900)" },
  outline: { background: "var(--neutral-0)", color: "var(--ink-800)", border: "1px solid var(--border-strong)" },
  ghost: { background: "transparent", color: "var(--ink-700)", border: "1px solid transparent" },
  onDark: { background: "rgba(255,255,255,.07)", color: "var(--text-on-dark)", border: "1px solid var(--border-dark)" }
};

const HOVER = {
  primary: { boxShadow: "var(--shadow-gold)", filter: "brightness(1.04)" },
  secondary: { background: "var(--ink-700)", borderColor: "var(--ink-700)" },
  outline: { borderColor: "var(--gold-500)", color: "var(--gold-700)" },
  ghost: { background: "var(--surface-inset)" },
  onDark: { background: "rgba(255,255,255,.14)", borderColor: "rgba(255,255,255,.3)" }
};

export function Button({
  children, variant = "primary", size = "md", href, icon, iconAfter, chip = false,
  disabled = false, fullWidth = false, type = "button", onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? "a" : "button";
  const chipBg = variant === "primary" ? "rgba(10,27,61,.16)" : variant === "outline" || variant === "ghost" ? "var(--surface-inset)" : "rgba(255,255,255,.16)";

  return (
    <Tag
      href={disabled ? undefined : href}
      type={href ? undefined : type}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined,
        alignItems: "center", justifyContent: "center", gap: s.gap,
        fontFamily: "var(--font-body)", fontSize: s.font, fontWeight: "var(--weight-semibold)",
        letterSpacing: ".005em", lineHeight: 1.2, textDecoration: "none", cursor: disabled ? "not-allowed" : "pointer",
        padding: s.pad, borderRadius: "var(--radius-pill)", whiteSpace: "nowrap",
        transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
        opacity: disabled ? 0.45 : 1,
        transform: down && !disabled ? "scale(var(--press-scale))" : "none",
        ...v,
        ...(hover && !disabled ? HOVER[variant] : null),
        ...style
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      <span>{children}</span>
      {iconAfter && !chip ? <Icon name={iconAfter} size={s.icon} /> : null}
      {chip ? (
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: s.icon + 11, height: s.icon + 11, borderRadius: "var(--radius-pill)", background: chipBg, marginRight: "-6px", marginLeft: "1px" }}>
          <Icon name={iconAfter || "arrow-right"} size={s.icon - 3} />
        </span>
      ) : null}
    </Tag>
  );
}
