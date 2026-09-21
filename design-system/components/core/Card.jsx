import React from "react";

export function Card({ children, tone = "light", padding = "var(--space-6)", interactive = false, as = "div", href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    subtle: { background: "var(--surface-card-alt)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    gold: { background: "var(--surface-gold-soft)", border: "1px solid var(--gold-300)", color: "var(--gold-700)" },
    dark: { background: "var(--surface-dark-card)", border: "1px solid var(--border-dark)", color: "var(--text-on-dark-muted)" },
    hero: { background: "var(--grad-hero)", border: "1px solid var(--border-dark)", color: "var(--text-on-dark-muted)" }
  };
  const Tag = href ? "a" : as;
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "block", borderRadius: "var(--radius-lg)", padding, textDecoration: "none",
        transition: "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
        ...tones[tone] || tones.light,
        ...((interactive || href) && hover
          ? tone === "dark" || tone === "hero"
            ? { transform: "translateY(var(--lift-hover))", borderColor: "rgba(255,255,255,.28)", boxShadow: "var(--shadow-dark)" }
            : { transform: "translateY(var(--lift-hover))", borderColor: "var(--border-strong)", boxShadow: "var(--shadow-md)" }
          : null),
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
