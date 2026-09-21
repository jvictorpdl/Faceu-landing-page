function HomeScreen({ go, onSearch }) {
  const { Button, Card, Tag, SectionHeading, Stat, ToolCard, DocumentCard, Icon, Accordion } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const featured = D.tools.slice(0, 3);
  return (
    <div>
      {/* ── Hero ── */}
      <div className="faceu-grid-bg" style={{ background: "var(--grad-hero)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "calc(var(--space-24)) var(--gutter) var(--space-20)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)", gap: "var(--space-16)", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-dark)", background: "rgba(255,255,255,.05)", fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)" }}>
              <span style={{ width: 5, height: 5, background: "currentColor", transform: "rotate(45deg)" }} />Research &amp; innovation project
            </div>
            <h1 style={{ marginTop: "var(--space-6)", fontFamily: "var(--font-display)", fontSize: "var(--size-display-xl)", lineHeight: "var(--lh-display)", letterSpacing: "var(--track-display)", fontWeight: "var(--weight-semibold)", color: "var(--text-on-dark)" }}>
              Research you can<br /><span style={{ color: "var(--gold-400)" }}>actually use</span>
            </h1>
            <p style={{ marginTop: "var(--space-6)", maxWidth: "52ch", fontSize: "var(--size-body-l)", lineHeight: "var(--lh-body)", color: "var(--text-on-dark-muted)" }}>
              FACEU develops methodologies and builds the tools that put them to work — each one documented, versioned and free to download for the teams that need them.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-8)" }}>
              <Button size="lg" variant="primary" chip iconAfter="arrow-right" onClick={() => go("Tools")}>View the tools</Button>
              <Button size="lg" variant="onDark" onClick={() => go("About")}>Explore the project</Button>
              <Button size="lg" variant="ghost" style={{ color: "var(--text-on-dark-muted)" }} onClick={() => go("Team")}>Meet the team</Button>
            </div>
          </div>
          <Card tone="hero" padding="var(--space-6)" style={{ boxShadow: "var(--shadow-dark)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-5)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-meta)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)" }}>Latest documentation</span>
              <Icon name="file-text" size={18} style={{ color: "var(--text-on-dark-muted)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {D.tools.slice(0, 3).map((t) => (
                <button key={t.slug} onClick={() => go("Tool", t.slug)} style={{ textAlign: "left", cursor: "pointer", background: "rgba(255,255,255,.04)", border: "1px solid var(--border-dark)", borderRadius: "var(--radius-sm)", padding: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                  <Icon name={t.icon} size={18} style={{ color: "var(--gold-400)" }} />
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-medium)", color: "var(--text-on-dark)" }}>{t.name}</span>
                    <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-meta)", color: "var(--text-on-dark-muted)" }}>
                      {t.manuals.length ? t.manuals[0].type + " · " + t.manuals[0].format + " · " + t.manuals[0].fileSize : "Documentation in preparation"}
                    </span>
                  </span>
                  <Icon name="arrow-right" size={16} style={{ color: "var(--text-on-dark-muted)" }} />
                </button>
              ))}
            </div>
            <Button size="sm" variant="onDark" fullWidth style={{ marginTop: "var(--space-5)" }} onClick={() => go("Resources")}>Open the documentation library</Button>
          </Card>
        </div>
        {/* quick links rail */}
        <div style={{ borderTop: "1px solid var(--border-dark)", background: "rgba(5,15,38,.5)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))" }}>
            {[["Tools", "wrench", "6 instruments, documented"], ["Resources", "folder-open", "Manuals and guides"], ["Research", "book-marked", "Papers and reports"], ["Contact", "mail", "Collaborate with us"]].map(([label, icon, note], i) => (
              <button key={label} onClick={() => go(label)} style={{ cursor: "pointer", background: "none", border: "none", borderLeft: i ? "1px solid var(--border-dark)" : "none", padding: "var(--space-6) var(--space-5)", display: "flex", gap: "var(--space-4)", alignItems: "center", textAlign: "left" }}>
                <Icon name={icon} size={20} style={{ color: "var(--gold-400)" }} />
                <span>
                  <span style={{ display: "block", fontSize: "var(--size-body-s)", fontWeight: "var(--weight-semibold)", color: "var(--text-on-dark)" }}>{label}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-meta)", color: "var(--text-on-dark-muted)" }}>{note}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <Section>
        <SectionHeading eyebrow="About FACEU" title="A project, not a product" description="FACEU exists because research outputs rarely survive the end of a study: the method is published, the instrument is not, and the next team starts over." action={<Button variant="outline" iconAfter="arrow-right" onClick={() => go("About")}>Read about the project</Button>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-5)" }}>
          {[["Objective", "Turn the project's methodology into instruments other teams can pick up and apply."], ["Research focus", "Comparable field data, shared assessment criteria, and documentation that keeps tools usable."], ["Who it serves", "Researchers, students, institutional teams and partner organisations."]].map(([t, d]) => (
            <Card key={t} tone="subtle" padding="var(--space-6)">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>{t}</span>
              <p style={{ marginTop: "var(--space-3)", fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Focus areas ── */}
      <Section tone="subtle">
        <SectionHeading eyebrow="Focus areas" title="Three lines of work" description="Each area states the problem it addresses and the instruments that came out of it." />
        <Accordion defaultOpen={0} items={D.focusAreas.map((a) => ({
          title: a.title,
          content: (
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: "var(--space-8)" }}>
              <div>
                <p style={{ fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>{a.description}</p>
                <p style={{ marginTop: "var(--space-4)", fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}><strong style={{ color: "var(--text-strong)" }}>Challenge — </strong>{a.challenge}</p>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Related tools</span>
                <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-3)" }}>
                  {a.tools.map((t) => <Tag key={t} tone="gold" size="sm">{t}</Tag>)}
                </div>
              </div>
            </div>
          )
        }))} />
      </Section>

      {/* ── Tools ── */}
      <Section>
        <SectionHeading eyebrow="Tools and solutions" title="Instruments built inside the project" description="Every tool has a detail page, a current version and a manual you can download without asking anyone." action={<Button variant="outline" iconAfter="arrow-right" onClick={() => go("Tools")}>All six tools</Button>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-5)" }}>
          {featured.map((t) => (
            <ToolCard key={t.slug} {...t} manualLabel={t.manuals.length ? "Manual" : null} onLearnMore={() => go("Tool", t.slug)} onDownload={t.manuals.length ? () => go("Resources") : null} />
          ))}
        </div>
      </Section>

      {/* ── Figures ── */}
      <Section tone="dark" compact>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-8)" }}>
          <Stat value="6" label="Tools published" note="4 stable · 1 beta · 1 archived" />
          <Stat value="9" label="Documents available" note="manuals and guides" />
          <Stat value="4" label="Publications" note="papers and reports" />
          <Stat value="7" label="Project members" note="across 3 categories" />
        </div>
      </Section>

      {/* ── Documentation teaser ── */}
      <Section tone="subtle">
        <SectionHeading eyebrow="Documentation" title="Manuals are never more than one click away" description="The library lists every document with its version, language, format and size, and keeps superseded versions available." action={<Button variant="outline" iconAfter="arrow-right" onClick={() => go("Resources")}>Open the library</Button>} />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {D.tools[0].manuals.slice(0, 2).map((m, i) => <DocumentCard key={i} {...m} tool={D.tools[0].name} onDownload={() => {}} />)}
        </div>
      </Section>

      {/* ── News ── */}
      <Section>
        <SectionHeading eyebrow="Updates" title="Latest from the project" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-5)" }}>
          {D.news.map((n) => (
            <Card key={n.title} tone="light" interactive padding="var(--space-6)">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <Tag size="sm" tone="signal">{n.tag}</Tag>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--track-meta)", color: "var(--text-faint)" }}>{n.date}</span>
              </div>
              <h3 style={{ marginTop: "var(--space-4)", fontSize: "var(--size-h4)" }}>{n.title}</h3>
              <p style={{ marginTop: "var(--space-2)", fontSize: "var(--size-body-s)", lineHeight: "var(--lh-body)", color: "var(--text-muted)" }}>{n.excerpt}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Contact band ── */}
      <Section tone="deep" compact>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "var(--space-10)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-display-m)", lineHeight: "var(--lh-display)", letterSpacing: "var(--track-display)", color: "var(--text-on-dark)" }}>Working on something related?</h2>
            <p style={{ marginTop: "var(--space-4)", maxWidth: "52ch", fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: "var(--text-on-dark-muted)" }}>Write to the project about research collaboration, institutional partnership, or support with any of the tools.</p>
          </div>
          <div style={{ display: "flex", gap: "var(--space-3)" }}>
            <Button size="lg" variant="primary" chip iconAfter="arrow-right" onClick={() => go("Contact")}>Contact the project</Button>
            <Button size="lg" variant="onDark" onClick={onSearch}>Search everything</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
