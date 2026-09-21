import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";
import { IconButton } from "../core/IconButton.jsx";

export function SiteFooter({ blurb, columns = [], social = [], legal, style, ...rest }) {
  return (
    <footer style={{ background: "var(--ink-950)", color: "var(--text-on-dark-muted)", paddingTop: "var(--space-20)", ...style }} {...rest}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(240px,1.2fr) repeat(auto-fit,minmax(150px,1fr))", gap: "var(--space-12)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "flex-start" }}>
            <Wordmark tone="light" size={20} />
            {blurb ? <p style={{ fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)", maxWidth: "34ch" }}>{blurb}</p> : null}
            {social.length ? (
              <div style={{ display: "flex", gap: "var(--space-2)" }}>
                {social.map((s) => <IconButton key={s.label} icon={s.icon} label={s.label} href={s.href} variant="onDark" size="sm" />)}
              </div>
            ) : null}
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)", fontWeight: "var(--weight-medium)", marginBottom: "var(--space-5)" }}>{col.title}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {col.links.map((l) => {
                  const label = typeof l === "string" ? l : l.label;
                  const href = typeof l === "object" ? l.href : "#";
                  return <li key={label}><a href={href} style={{ fontSize: "var(--size-body-s)", color: "var(--text-on-dark-muted)", textDecoration: "none" }}>{label}</a></li>;
                })}
              </ul>
            </nav>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-16)", padding: "var(--space-6) 0", borderTop: "1px solid var(--border-dark)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)", fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: "rgba(255,255,255,.45)" }}>
          <span>{legal || "FACEU — research and innovation project"}</span>
          <span>Accessibility · Privacy · Contact</span>
        </div>
      </div>
    </footer>
  );
}
