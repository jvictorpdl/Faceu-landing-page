function SearchDialog({ open, onClose, go }) {
  const { Modal, SearchField, Tag, Icon } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [q, setQ] = React.useState("mapper");
  const results = [];
  D.tools.forEach((t) => { if ((t.name + t.shortDescription).toLowerCase().includes(q.toLowerCase())) results.push({ type: "Tool", title: t.name, note: t.category + " · " + t.version, go: () => go("Tool", t.slug) }); });
  D.tools.forEach((t) => t.manuals.forEach((m) => { if ((m.title + m.type).toLowerCase().includes(q.toLowerCase())) results.push({ type: "Manual", title: m.title + " — " + m.version, note: m.format + " · " + m.fileSize, go: () => go("Resources") }); }));
  D.publications.forEach((p) => { if (p.title.toLowerCase().includes(q.toLowerCase())) results.push({ type: "Publication", title: p.title, note: p.venue + " · " + p.year, go: () => go("Resources") }); });
  return (
    <Modal open={open} onClose={onClose} width={720} title="Search FACEU" description="Tools, manuals, publications and people — results state their content type.">
      <SearchField value={q} onChange={(e) => setQ(e.target.value)} scopes={["Everything", "Tools", "Manuals", "Publications", "People"]} />
      <div style={{ display: "flex", flexDirection: "column", maxHeight: 320, overflowY: "auto" }}>
        {results.length ? results.slice(0, 8).map((r, i) => (
          <button key={i} onClick={() => { r.go(); onClose(); }} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", textAlign: "left", cursor: "pointer", background: "none", border: "none", borderBottom: "1px solid var(--border-subtle)", padding: "var(--space-4) 0" }}>
            <Tag size="sm" tone={r.type === "Tool" ? "gold" : r.type === "Manual" ? "signal" : "neutral"}>{r.type}</Tag>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)", color: "var(--text-strong)" }}>{r.title}</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-meta)", color: "var(--text-faint)" }}>{r.note}</span>
            </span>
            <Icon name="arrow-right" size={16} style={{ color: "var(--text-faint)" }} />
          </button>
        )) : <p style={{ padding: "var(--space-6) 0", fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>Nothing matches “{q}”.</p>}
      </div>
    </Modal>
  );
}

function App() {
  const { SiteHeader, Button } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [page, setPage] = React.useState("Home");
  const [slug, setSlug] = React.useState(D.tools[0].slug);
  const [search, setSearch] = React.useState(false);
  const go = (p, s) => { if (s) setSlug(s); setPage(p); window.scrollTo({ top: 0, behavior: "instant" }); };
  const headerActive = page === "Tool" ? "Tools" : page;
  const dark = page === "Home";
  return (
    <div>
      <SampleNotice />
      <SiteHeader
        tone={dark ? "dark" : "light"}
        items={D.nav}
        active={headerActive}
        onNavigate={(l) => go(l)}
        onSearch={() => setSearch(true)}
        cta={<Button size="sm" variant={dark ? "primary" : "secondary"} onClick={() => go("Resources")}>Resources</Button>}
        style={dark ? { background: "rgba(5,15,38,.72)" } : null}
      />
      <main>
        {page === "Home" && <HomeScreen go={go} onSearch={() => setSearch(true)} />}
        {page === "Tools" && <ToolsScreen go={go} />}
        {page === "Tool" && <ToolDetailScreen slug={slug} go={go} />}
        {page === "Resources" && <ResourcesScreen go={go} />}
        {(page === "Team" || page === "Contact") && <TeamScreen go={go} />}
        {["About", "Focus areas", "Research"].includes(page) && <HomeScreen go={go} onSearch={() => setSearch(true)} />}
      </main>
      <Footer />
      <SearchDialog open={search} onClose={() => setSearch(false)} go={go} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
