function ToolsScreen({ go }) {
  const { ToolCard, Tag, Input, Select, Callout } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [cat, setCat] = React.useState("All tools");
  const [status, setStatus] = React.useState("All statuses");
  const [q, setQ] = React.useState("");
  const cats = ["All tools", ...Array.from(new Set(D.tools.map((t) => t.category)))];
  const list = D.tools.filter((t) =>
    (cat === "All tools" || t.category === cat) &&
    (status === "All statuses" || t.status === status.toLowerCase()) &&
    (!q || (t.name + " " + t.shortDescription).toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div>
      <PageHeader eyebrow="Tools and solutions" title="Six instruments, each with its own manual" description="Tools developed inside FACEU and distributed for use by other research and institutional teams. Nothing here is a commercial product." breadcrumb={[{ label: "Home", href: "#" }, { label: "Tools" }]} />
      <Section compact>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", alignItems: "center", justifyContent: "space-between", paddingBottom: "var(--space-8)", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {cats.map((c) => <Tag key={c} interactive selected={cat === c} onClick={() => setCat(c)}>{c}</Tag>)}
          </div>
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <Input icon="search" size="sm" placeholder="Search tools" value={q} onChange={(e) => setQ(e.target.value)} style={{ minWidth: 220 }} />
            <Select size="sm" value={status} onChange={(e) => setStatus(e.target.value)} options={["All statuses", "Stable", "Beta", "Development", "Archived"]} />
          </div>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: "var(--text-faint)", margin: "var(--space-6) 0" }}>
          {list.length} {list.length === 1 ? "tool" : "tools"}{cat === "All tools" ? "" : " in " + cat}
        </p>
        {list.length ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-5)" }}>
            {list.map((t) => (
              <ToolCard key={t.slug} {...t} manualLabel={t.manuals.length ? "Manual" : null} onLearnMore={() => go("Tool", t.slug)} onDownload={t.manuals.length ? () => go("Tool", t.slug) : null} />
            ))}
          </div>
        ) : (
          <Callout tone="info" title="No tools match these filters">Clear the search field or choose another category.</Callout>
        )}
      </Section>
    </div>
  );
}
Object.assign(window, { ToolsScreen });
