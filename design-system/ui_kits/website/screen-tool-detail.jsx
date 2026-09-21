function ToolDetailScreen({ slug, go }) {
  const { Button, Card, Tag, StatusBadge, NavTabs, FeatureList, ProcessSteps, SpecTable, DocumentCard, Callout, PublicationItem, Icon, SectionHeading } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const tool = D.tools.find((t) => t.slug === slug) || D.tools[0];
  const [tab, setTab] = React.useState("Overview");
  const current = tool.manuals.filter((m) => m.current);
  const older = tool.manuals.filter((m) => !m.current);
  return (
    <div>
      {/* Tool header */}
      <PageHeader
        breadcrumb={[{ label: "Home", href: "#" }, { label: "Tools", href: "#tools" }, { label: tool.name }]}
        eyebrow={tool.category}
        title={tool.name}
        description={tool.shortDescription}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Button size="lg" variant="primary" chip iconAfter="arrow-down" onClick={() => setTab("Documentation")}>
            {current.length ? "Download " + tool.name.toLowerCase() + " manual" : "Documentation in preparation"}
          </Button>
          <StatusBadge status={tool.status} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-body-s)", letterSpacing: "var(--track-meta)", color: "var(--text-on-dark-muted)" }}>{tool.version}</span>
        </div>
      </PageHeader>

      <div style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-subtle)", position: "sticky", top: "var(--header-h)", zIndex: 20 }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-5) var(--gutter) 0" }}>
          <NavTabs items={[{ label: "Overview" }, { label: "How it works" }, { label: "Technical" }, { label: "Documentation", count: tool.manuals.length }]} active={tab} onChange={setTab} />
        </div>
      </div>

      <Section compact>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "var(--space-16)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
            {(tab === "Overview") && (
              <>
                <div>
                  <h2 style={{ fontSize: "var(--size-h2)" }}>Overview</h2>
                  <p style={{ marginTop: "var(--space-4)", maxWidth: "var(--measure-prose)", fontSize: "var(--size-body-l)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>{tool.purpose || tool.shortDescription}</p>
                </div>
                {tool.audience ? (
                  <div>
                    <h3 style={{ fontSize: "var(--size-h3)" }}>Who it is for</h3>
                    <p style={{ marginTop: "var(--space-3)", maxWidth: "var(--measure-prose)", fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: "var(--text-muted)" }}>{tool.audience}</p>
                  </div>
                ) : null}
                {tool.features ? (
                  <div>
                    <h3 style={{ fontSize: "var(--size-h3)", marginBottom: "var(--space-6)" }}>Key features</h3>
                    <FeatureList columns={2} items={tool.features} />
                  </div>
                ) : null}
                {tool.useCases ? (
                  <div>
                    <h3 style={{ fontSize: "var(--size-h3)", marginBottom: "var(--space-5)" }}>Applications</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                      {tool.useCases.map((u) => (
                        <div key={u} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", paddingBottom: "var(--space-3)", borderBottom: "1px solid var(--border-subtle)" }}>
                          <Icon name="corner-down-right" size={16} style={{ color: "var(--gold-600)", marginTop: 3 }} />
                          <span style={{ fontSize: "var(--size-body-m)", color: "var(--text-body)" }}>{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            )}

            {(tab === "How it works") && (
              <div>
                <h2 style={{ fontSize: "var(--size-h2)", marginBottom: "var(--space-4)" }}>How it works</h2>
                <p style={{ maxWidth: "var(--measure-prose)", fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: "var(--text-muted)", marginBottom: "var(--space-8)" }}>Five steps, in the order the manual describes them. Interface previews are added here once screenshots are available.</p>
                <ProcessSteps columns={2} steps={tool.steps || []} />
                <Card tone="subtle" padding="var(--space-6)" style={{ marginTop: "var(--space-8)", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-faint)" }}>
                  Interface screenshot pending
                </Card>
              </div>
            )}

            {(tab === "Technical") && (
              <div>
                <h2 style={{ fontSize: "var(--size-h2)", marginBottom: "var(--space-6)" }}>Technical information</h2>
                <SpecTable rows={tool.spec || [{ label: "Version", value: tool.version }, { label: "Status", value: tool.status }]} />
                <Callout tone="warning" title="Beta tool" style={{ marginTop: "var(--space-8)", display: tool.status === "beta" ? "flex" : "none" }}>
                  Results should be reviewed before being used in published work.
                </Callout>
              </div>
            )}

            {(tab === "Documentation") && (
              <div>
                <h2 style={{ fontSize: "var(--size-h2)", marginBottom: "var(--space-6)" }}>Documentation</h2>
                {current.length ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                    {current.map((m, i) => <DocumentCard key={i} {...m} tool={tool.name} onDownload={() => {}} />)}
                  </div>
                ) : (
                  <Callout tone="info" title="Documentation in preparation">The manual for this tool has not been published yet. Contact the project for the current draft.</Callout>
                )}
                {older.length ? (
                  <>
                    <h3 style={{ fontSize: "var(--size-h4)", margin: "var(--space-10) 0 var(--space-5)" }}>Version history</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                      {older.map((m, i) => <DocumentCard key={i} {...m} tool={tool.name} onDownload={() => {}} />)}
                    </div>
                  </>
                ) : null}
                <Callout tone="note" title="Version note" style={{ marginTop: "var(--space-8)" }}>Superseded versions stay online — published studies keep referring to them.</Callout>
              </div>
            )}

            <div>
              <SectionHeading level={3} align="left" eyebrow="Related research" title="Where this tool comes from" style={{ marginBottom: "var(--space-4)" }} />
              {D.publications.slice(0, 2).map((p, i) => <PublicationItem key={i} {...p} />)}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", position: "sticky", top: "calc(var(--header-h) + 80px)" }}>
            <Card tone="light" padding="var(--space-6)">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Documentation</span>
              <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {tool.manuals.length ? tool.manuals.filter((m) => m.current).map((m, i) => (
                  <Button key={i} variant={i ? "outline" : "primary"} size="sm" icon="download" fullWidth onClick={() => setTab("Documentation")}>{m.type}</Button>
                )) : <span style={{ fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>Not yet published.</span>}
              </div>
              <p style={{ marginTop: "var(--space-4)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-meta)", color: "var(--text-faint)" }}>
                {tool.manuals.length ? tool.manuals[0].format + " · " + tool.manuals[0].fileSize + " · updated " + tool.manuals[0].updatedAt : "—"}
              </p>
            </Card>
            <Card tone="subtle" padding="var(--space-6)">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>At a glance</span>
              <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)", fontSize: "var(--size-body-s)" }}>
                {[["Category", tool.category], ["Status", tool.status], ["Version", tool.version], ["Documents", String(tool.manuals.length)]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", paddingBottom: "var(--space-3)", borderBottom: "1px solid var(--border-subtle)" }}>
                    <span style={{ color: "var(--text-muted)" }}>{k}</span>
                    <span style={{ color: "var(--text-strong)", fontWeight: "var(--weight-medium)", textTransform: k === "Status" ? "capitalize" : "none" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
                <Tag size="sm">{tool.category}</Tag><Tag size="sm" tone="signal">Project resource</Tag>
              </div>
            </Card>
            <Button variant="ghost" icon="arrow-left" onClick={() => go("Tools")}>All tools</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { ToolDetailScreen });
