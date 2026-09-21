import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Card, PageHero, Section } from "@/components/ui";
import { site } from "@/content/site";
import { tools } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contato",
  description: "Fale com o FACEU: informações sobre o projeto, suporte técnico de uma ferramenta, colaboração em pesquisa ou parceria institucional.",
  path: "/contact",
});

const reasons = [
  ["Suporte técnico", "Dúvidas de uso de uma ferramenta publicada ou de seu manual."],
  ["Colaboração em pesquisa", "Estudos conjuntos, testes de campo e trabalhos em coautoria."],
  ["Parceria institucional", "Universidades, laboratórios, órgãos públicos e empresas."],
  ["Informações sobre o FACEU", "Perguntas gerais sobre o projeto e sua equipe."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Escreva ao projeto"
        description="Informações, suporte técnico, colaboração em pesquisa ou parceria institucional."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />
      <Section compact>
        <div className="contact-layout">
          <div className="stack stack-4">
            <ul className="stack stack-4" style={{ listStyle: "none" }}>
              {reasons.map(([t, d]) => (
                <Card as="li" key={t}>
                  <strong style={{ color: "var(--text-strong)" }}>{t}</strong>
                  <p style={{ marginTop: 6, fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>{d}</p>
                </Card>
              ))}
            </ul>
            <Card tone="subtle">
              <span className="mono-label">Endereços</span>
              <ul className="ext-list" style={{ marginTop: "var(--space-3)" }}>
                <li><a href={`mailto:${site.email}`}><Icon name="mail" size={16} />{site.email}</a></li>
                <li><span className="row" style={{ gap: 8, fontSize: "var(--size-body-s)" }}><Icon name="map-pin" size={16} />{site.locations.join(" · ")}</span></li>
              </ul>
            </Card>
          </div>
          <Card>
            <ContactForm email={site.email} tools={tools.map((t) => t.name)} />
          </Card>
        </div>
      </Section>
    </>
  );
}
