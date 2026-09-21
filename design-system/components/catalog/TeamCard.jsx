import React from "react";
import { Card } from "../core/Card.jsx";
import { IconButton } from "../core/IconButton.jsx";

export function TeamCard({ name, role, title, institution, expertise, bio, photo, links = [], style, ...rest }) {
  return (
    <Card tone="light" padding="0" interactive style={{ overflow: "hidden", display: "flex", flexDirection: "column", ...style }} {...rest}>
      <div style={{ aspectRatio: "4 / 3", background: "var(--surface-inset)", position: "relative" }}>
        {photo ? (
          <img src={photo} alt={"Portrait of " + name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-faint)" }}>Portrait pending</span>
        )}
      </div>
      <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-2)", flex: 1 }}>
        {role ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>{role}</span> : null}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", margin: 0, color: "var(--text-strong)" }}>{name}</h3>
        {title ? <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-body)" }}>{title}</p> : null}
        {institution ? <p style={{ fontSize: "var(--size-body-xs)", color: "var(--text-muted)" }}>{institution}</p> : null}
        {expertise ? <p style={{ fontSize: "var(--size-body-xs)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>{expertise}</p> : null}
        {bio ? <p style={{ fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>{bio}</p> : null}
        {links.length ? (
          <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "auto", paddingTop: "var(--space-4)" }}>
            {links.map((l) => <IconButton key={l.label} icon={l.icon || "external-link"} label={l.label + " — " + name} href={l.href} variant="ghost" size="sm" />)}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
