import React from "react";
import { Icon } from "./Icon.jsx";

export function Tag({ children, icon, tone = "neutral", size = "md", interactive = false, selected = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    neutral: { background: "var(--surface-inset)", color: "var(--neutral-600)", border: "1px solid transparent" },
    gold: { background: "var(--gold-50)", color: "var(--gold-700)", border: "1px solid var(--gold-300)" },
    signal: { background: "var(--signal-50)", color: "var(--signal-700)", border: "1px solid var(--signal-200)" },
    onDark: { background: "rgba(255,255,255,.08)", color: "var(--text-on-dark-muted)", border: "1px solid var(--border-dark)" }
  };
  const sel = { background: "var(--ink-900)", color: "var(--text-on-dark)", border: "1px solid var(--ink-900)" };
  const Tag_ = interactive ? "button" : "span";
  return (
    <Tag_
      onClick={onClick}
      aria-pressed={interactive ? selected : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        fontFamily: "var(--font-mono)", fontSize: size === "sm" ? "11px" : "var(--size-meta)",
        letterSpacing: "var(--track-meta)", fontWeight: "var(--weight-medium)", lineHeight: 1,
        padding: size === "sm" ? "5px 9px" : "7px 12px", borderRadius: "var(--radius-pill)",
        cursor: interactive ? "pointer" : "default", whiteSpace: "nowrap",
        transition: "all var(--dur-base) var(--ease-standard)",
        ...(selected ? sel : tones[tone] || tones.neutral),
        ...(interactive && hover && !selected ? { borderColor: "var(--border-strong)", color: "var(--ink-800)" } : null),
        ...style
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </Tag_>
  );
}
