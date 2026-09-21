import type { Member } from "@/lib/types";

/* Equipe. Fonte: créditos de "Desenvolvedores" publicados nos rodapés do TOPOUFERSA e do ETE UFERSA.
   Títulos acadêmicos, biografias, fotos e perfis (Lattes, ORCID…) ainda não foram informados:
   ao preenchê-los, o cartão passa a exibi-los e a página /team/<slug> passa a existir (exige `bio`).

   Exemplo de membro completo:
   {
     name: "Nome Sobrenome", slug: "nome-sobrenome", group: "Coordenação", role: "Coordenação do projeto",
     title: "Doutor em Engenharia Civil", institution: "UFERSA", expertise: "Saneamento",
     bio: "Texto curto sobre a atuação no projeto.",
     photo: { src: "/images/team/nome-sobrenome.jpg", alt: "Retrato de Nome Sobrenome", width: 800, height: 600 },
     links: [{ label: "Currículo Lattes", href: "http://lattes.cnpq.br/…", kind: "lattes" }],
   } */

/** Grupos exibidos na página Equipe, na ordem. Declare aqui só os que existem de fato. */
export const TEAM_GROUPS = ["Desenvolvedores"] as const;

const dev = (name: string, slug: string, institution = "UFERSA"): Member => ({
  name,
  slug,
  group: "Desenvolvedores",
  role: "Desenvolvimento",
  institution,
  links: [],
});

export const team: Member[] = [
  dev("Alisson Gadelha de Medeiros", "alisson-gadelha-de-medeiros"),
  dev("Bruno Wellington da Silva Lima", "bruno-wellington-da-silva-lima"),
  dev("Fernando Dutra Ribeiro", "fernando-dutra-ribeiro"),
  dev("Jarbas Nunes Vidal Filho", "jarbas-nunes-vidal-filho", "IFCE"),
  dev("José Belarmino dos Santos Neto", "jose-belarmino-dos-santos-neto"),
  dev("José Daniel Jales Silva", "jose-daniel-jales-silva"),
  dev("Maria Josicleide Felipe Guedes", "maria-josicleide-felipe-guedes"),
  dev("Miguel Ferreira Neto", "miguel-ferreira-neto"),
  dev("Nildo da Silva Dias", "nildo-da-silva-dias"),
  dev("Rafael Luan do Nascimento", "rafael-luan-do-nascimento"),
  dev("Reudismam Rolim de Sousa", "reudismam-rolim-de-sousa"),
  dev("Wesley de Oliveira Santos", "wesley-de-oliveira-santos"),
];
