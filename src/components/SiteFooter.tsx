import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { hasNews, hasPublications, tools } from "@/lib/content";

export function SiteFooter() {
  const project = [
    { label: "Sobre o FACEU", href: "/about" },
    { label: "Áreas de atuação", href: "/focus-areas" },
    { label: "Equipe e instituições", href: "/team" },
    ...(hasPublications ? [{ label: "Pesquisa", href: "/research" }] : []),
    ...(hasNews ? [{ label: "Novidades", href: "/news" }] : []),
  ];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand stack stack-4" style={{ alignItems: "flex-start" }}>
            <Image src="/brand/faceu-logo-dark.svg" alt="FACEU" width={211} height={34} unoptimized style={{ height: 30, width: "auto" }} />
            <p style={{ maxWidth: "38ch" }}>{site.fullName}. Ferramentas de cálculo de acesso livre para o ensino e a prática da engenharia.</p>
          </div>
          <nav aria-label="Projeto">
            <h2>Projeto</h2>
            <ul>{project.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Ferramentas">
            <h2>Ferramentas</h2>
            <ul>
              {tools.map((t) => <li key={t.slug}><Link href={`/tools/${t.slug}`}>{t.name}</Link></li>)}
              <li><Link href="/tools">Todas as ferramentas</Link></li>
            </ul>
          </nav>
          <nav aria-label="Contato">
            <h2>Contato</h2>
            <ul>
              <li><Link href="/resources">Manuais e recursos</Link></li>
              <li><Link href="/contact">Fale com o projeto</Link></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span style={{ fontSize: "var(--size-body-s)" }}>{site.locations.join(" · ")}</span></li>
            </ul>
          </nav>
        </div>
        <div className="site-footer__legal">
          <span>FACEU — {site.fullName}</span>
          <span>© {new Date().getFullYear()} · Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
