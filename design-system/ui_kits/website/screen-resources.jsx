function ResourcesScreen({ go }) {
  const { DocumentCard, Select, Input, Tag, SectionHeading, Callout } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const all = D.tools.flatMap((t) => t.manuals.map((m) => ({ ...m, tool: t.name, slug: t.slug })));
  const [tool, setTool] = React.useState("All tools");
  const [type, setType] = React.useState("All document types");
  const [lang, setLang] = React.useState("All languages");
  const [q, setQ] = React.useState("");
  const list = all.filter((m) =>
    (tool === "All tools" || m.tool === tool) &&
    (type === "All document types" || m.type === type) &&
    (lang === "All languages" || m.language === lang) &&
    (!q || (m.title + " " + m.tool).toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div>
      <PageHeader eyebrow="Resources" title="Manuals and documentation library" description="Every document published by the project, with its version, language, format and size. Superseded versions stay available." breadcrumb={[{ label: "Home", href: "#" }, { label: "Resources" }]} />
      <Section compact>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-3)", paddingBottom: "var(--space-8)", borderBottom: "1px solid var(--border-subtle)" }}>
          <Input icon="search" size="sm" placeholder="Search documents" value={q} onChange={(e) => setQ(e.target.value)} />
          <Select size="sm" value={tool} onChange={(e) => setTool(e.target.value)} options={["All tools", ...D.tools.map((t) => t.name)]} />
          <Select size="sm" value={type} onChange={(e) => setType(e.target.value)} options={["All document types", "User manual", "Technical manual", "Quick start guide"]} />
          <Select size="sm" value={lang} onChange={(e) => setLang(e.target.value)} options={["All languages", "Portuguese", "English"]} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "var(--space-6) 0" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-meta)", color: "var(--text-faint)" }}>{list.length} documents</p>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <Tag size="sm" tone="gold">PDF only</Tag><Tag size="sm">Current versions first</Tag>
          </div>
        </div>
        {list.length ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {list.sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0)).map((m, i) => (
              <DocumentCard key={i} {...m} onDownload={() => {}} />
            ))}
          </div>
        ) : <Callout tone="info" title="No documents match these filters">Reset the filters to see the full library.</Callout>}
        <div style={{ marginTop: "var(--space-16)" }}>
          <SectionHeading level={3} eyebrow="Research" title="Publications and reports" description="Papers, technical reports and student research produced within the project." align="split" />
          {D.publications.map((p, i) => <PublicationItemRow key={i} p={p} />)}
        </div>
      </Section>
    </div>
  );
}
function PublicationItemRow({ p }) {
  const { PublicationItem } = window.FACEUDesignSystem_27f931;
  return <PublicationItem {...p} />;
}
Object.assign(window, { ResourcesScreen, PublicationItemRow });
