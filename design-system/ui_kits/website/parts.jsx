/* Shared layout pieces for the FACEU website kit. Loaded as a plain Babel script. */
const NS = () => window.FACEUDesignSystem_27f931;

function Section({ children, tone = "light", compact = false, id, style }) {
  const bg = { light: "var(--surface-page)", subtle: "var(--surface-subtle)", dark: "var(--ink-900)", deep: "var(--ink-950)" }[tone];
  return (
    <section id={id} style={{ background: bg, paddingBlock: compact ? "var(--section-y-compact)" : "var(--section-y)", ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>{children}</div>
    </section>
  );
}

function PageHeader({ eyebrow, title, description, breadcrumb, children }) {
  const { Breadcrumb } = NS();
  return (
    <div className="faceu-grid-bg" style={{ background: "var(--grad-hero)", paddingTop: "var(--space-12)", paddingBottom: "var(--space-16)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        {breadcrumb ? <Breadcrumb tone="dark" items={breadcrumb} style={{ marginBottom: "var(--space-8)" }} /> : null}
        {eyebrow ? (
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)", display: "flex", alignItems: "center", gap: 8, marginBottom: "var(--space-4)" }}>
            <span style={{ width: 5, height: 5, background: "currentColor", transform: "rotate(45deg)" }} />{eyebrow}
          </div>
        ) : null}
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-display-l)", lineHeight: "var(--lh-display)", letterSpacing: "var(--track-display)", color: "var(--text-on-dark)", margin: 0, maxWidth: "22ch" }}>{title}</h1>
        {description ? <p style={{ marginTop: "var(--space-5)", maxWidth: "58ch", fontSize: "var(--size-body-l)", lineHeight: "var(--lh-body)", color: "var(--text-on-dark-muted)" }}>{description}</p> : null}
        {children ? <div style={{ marginTop: "var(--space-8)" }}>{children}</div> : null}
      </div>
    </div>
  );
}

function SampleNotice() {
  return (
    <div style={{ background: "var(--gold-50)", borderBottom: "1px solid var(--gold-300)", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "var(--track-meta)", textTransform: "uppercase", color: "var(--gold-700)", textAlign: "center", padding: "7px 16px" }}>
      UI kit · tool names, versions and figures are placeholder content
    </div>
  );
}

function Footer() {
  const { SiteFooter } = NS();
  return (
    <SiteFooter
      blurb="FACEU is a research and innovation project developing and sharing practical tools, methodologies and resources."
      columns={[
        { title: "Project", links: ["About FACEU", "Focus areas", "Team", "Partners"] },
        { title: "Resources", links: ["Tools", "Manuals", "Publications", "News"] },
        { title: "Contact", links: ["General enquiries", "Research collaboration", "Technical support"] }
      ]}
      social={[{ icon: "linkedin", label: "LinkedIn" }, { icon: "github", label: "Code repository" }, { icon: "mail", label: "Email the project" }]}
      legal="FACEU — research and innovation project · sample site"
    />
  );
}

Object.assign(window, { Section, PageHeader, SampleNotice, Footer, FACEU_NS: NS });
