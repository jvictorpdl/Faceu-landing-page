function TeamScreen({ go }) {
  const { TeamCard, SectionHeading, Card, Field, Input, Textarea, Select, Checkbox, Button, Callout } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <PageHeader eyebrow="Team" title="The people behind FACEU" description="Coordination, researchers, developers and students working inside the project's research and development structure." breadcrumb={[{ label: "Home", href: "#" }, { label: "Team" }]} />
      <Section compact>
        {D.team.map((g) => (
          <div key={g.group} style={{ marginBottom: "var(--space-16)" }}>
            <SectionHeading level={3} align="left" eyebrow={g.group} title={g.group} style={{ marginBottom: "var(--space-6)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-5)" }}>
              {g.members.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>
          </div>
        ))}
        <div>
          <SectionHeading level={3} eyebrow="Partners" title="Institutions involved" description="Logos are shown only once the institution has authorised their use — until then, partners are listed in type." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-4)" }}>
            {["Partner university", "Research laboratory", "Funding agency", "Institutional partner"].map((p) => (
              <Card key={p} tone="subtle" padding="var(--space-6)" style={{ textAlign: "center", fontFamily: "var(--font-display)", fontWeight: "var(--weight-medium)", color: "var(--text-muted)" }}>{p}</Card>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="subtle" compact id="contact">
        <SectionHeading eyebrow="Contact" title="Write to the project" description="Research collaboration, institutional partnership, or technical support with any of the tools." />
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: "var(--space-12)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {[["Tool support", "Questions about using a published tool or its manual."], ["Research collaboration", "Joint studies, field testing, co-authored publications."], ["Institutional partnership", "Universities, laboratories, agencies and public bodies."]].map(([t, d]) => (
              <Card key={t} tone="light" padding="var(--space-5)">
                <strong style={{ fontFamily: "var(--font-body)", fontSize: "var(--size-body-m)", color: "var(--text-strong)" }}>{t}</strong>
                <p style={{ marginTop: 6, fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{d}</p>
              </Card>
            ))}
          </div>
          <Card tone="light" padding="var(--space-8)">
            {sent ? (
              <Callout tone="success" title="Message sent">This is a UI kit — nothing was actually transmitted.</Callout>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                <Field label="Full name" htmlFor="c-name" required><Input id="c-name" placeholder="Name Surname" /></Field>
                <Field label="Institutional email" htmlFor="c-mail" required><Input id="c-mail" type="email" icon="mail" placeholder="name@institution.edu" /></Field>
                <Field label="Subject" htmlFor="c-sub" style={{ gridColumn: "span 2" }}>
                  <Select id="c-sub" options={["General enquiry", "Tool support", "Research collaboration", "Institutional partnership"]} />
                </Field>
                <Field label="Message" htmlFor="c-msg" style={{ gridColumn: "span 2" }}><Textarea id="c-msg" rows={5} placeholder="Tell us what you are working on" /></Field>
                <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                  <Checkbox id="c-ok" label="I agree to be contacted about this enquiry" description="We reply within five working days." checked onChange={() => {}} />
                  <Button type="submit" variant="primary" chip iconAfter="arrow-right">Send message</Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { TeamScreen });
