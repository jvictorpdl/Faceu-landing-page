import React from "react";
import { Icon } from "../core/Icon.jsx";

const TONES = {
  info: { bg: "var(--status-dev-bg)", fg: "var(--status-dev)", icon: "info" },
  note: { bg: "var(--surface-gold-soft)", fg: "var(--gold-700)", icon: "bookmark" },
  success: { bg: "var(--status-stable-bg)", fg: "var(--status-stable)", icon: "check-circle" },
  warning: { bg: "var(--status-beta-bg)", fg: "var(--status-beta)", icon: "alert-triangle" },
  danger: { bg: "var(--status-danger-bg)", fg: "var(--status-danger)", icon: "octagon-alert" }
};

export function Callout({ tone = "note", title, children, icon, action, style, ...rest }) {
  const t = TONES[tone] || TONES.note;
  return (
    <aside
      style={{
        display: "flex", gap: "var(--space-4)", padding: "var(--space-5)", background: t.bg,
        borderRadius: "var(--radius-md)", color: "var(--text-body)", ...style
      }}
      {...rest}
    >
      <span style={{ color: t.fg, flex: "0 0 auto", marginTop: 1 }}><Icon name={icon || t.icon} size={19} /></span>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", flex: 1, minWidth: 0 }}>
        {title ? <strong style={{ fontFamily: "var(--font-body)", fontSize: "var(--size-body-m)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>{title}</strong> : null}
        <div style={{ fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)" }}>{children}</div>
        {action}
      </div>
    </aside>
  );
}
