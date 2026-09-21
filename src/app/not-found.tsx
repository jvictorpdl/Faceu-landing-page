import { Button, PageHero, Section } from "@/components/ui";

export const metadata = { title: "Página não encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Erro 404" title="Página não encontrada" description="O endereço não existe ou o conteúdo foi movido. Volte ao início ou procure a ferramenta ou o manual que você precisa." />
      <Section compact>
        <div className="row">
          <Button chip iconAfter="arrow-right" href="/tools">Ver ferramentas</Button>
          <Button variant="outline" href="/resources">Manuais e recursos</Button>
          <Button variant="ghost" href="/">Página inicial</Button>
        </div>
      </Section>
    </>
  );
}
