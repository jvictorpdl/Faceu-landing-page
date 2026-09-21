import type { FocusArea, NewsItem, Partner, Publication } from "@/lib/types";

/* Áreas de atuação. Cada ferramenta aponta para elas por `focusAreas` (ver tools.ts). */
export const focusAreas: FocusArea[] = [
  {
    slug: "tratamento-de-agua",
    title: "Tratamento de água",
    icon: "droplets",
    description:
      "Ferramentas de dimensionamento das unidades de uma estação de tratamento de água, organizadas pelas etapas do processo.",
    challenge:
      "O dimensionamento de cada etapa depende de tabelas de coeficientes e de vários parâmetros de projeto, o que torna a conferência manual demorada.",
    objectives: [
      "Reunir o dimensionamento das etapas de coagulação, floculação, decantação e filtração",
      "Mostrar dimensões e coeficientes junto ao resultado",
    ],
  },
  {
    slug: "tratamento-de-esgoto",
    title: "Tratamento de esgoto e qualidade da água",
    icon: "waves",
    description:
      "Ferramentas para o pré-dimensionamento de lagoas de estabilização e para o estudo do efeito do lançamento de esgoto em rios.",
    challenge:
      "Comparar cenários de projeto exige repetir cálculos com muitos parâmetros interdependentes: população, vazão, carga orgânica, temperatura e taxas de projeto.",
    objectives: [
      "Permitir o pré-dimensionamento de lagoas anaeróbia, facultativa e de maturação",
      "Apoiar o estudo da autodepuração de corpos d’água",
    ],
  },
  {
    slug: "topografia",
    title: "Topografia",
    icon: "compass",
    description: "Ferramentas para processar os dados de levantamentos topográficos de campo.",
    challenge:
      "O processamento de leituras de campo é repetitivo e sujeito a erros de transcrição e de cálculo.",
    objectives: [
      "Processar leituras a partir de azimute, cota e altura do instrumento",
      "Padronizar o formato de entrada dos dados de campo",
    ],
  },
];

/* Instituições. Logotipos só entram quando fornecidos ou autorizados; até lá, nomes em texto. */
export const partners: Partner[] = [
  {
    name: "Universidade Federal Rural do Semi-Árido — Campus Mossoró",
    role: "Instituição de apoio",
    href: "https://ufersa.edu.br",
  },
  {
    name: "Universidade Federal Rural do Semi-Árido — Campus Pau dos Ferros",
    role: "Instituição de apoio",
    href: "https://ufersa.edu.br",
  },
  {
    name: "Pró-Reitoria de Pesquisa e Pós-Graduação (PROPPG) — UFERSA",
    role: "Instituição de apoio",
    href: "https://ufersa.edu.br",
  },
];

/* Publicações científicas, relatórios e trabalhos acadêmicos. Vazio até serem informados.
   Quando houver itens, a seção Pesquisa aparece na navegação e no mapa do site. */
export const publications: Publication[] = [];

/* Notícias e atualizações. Vazio até serem informadas.
   Quando houver itens, a seção Novidades aparece na navegação e no mapa do site. */
export const news: NewsItem[] = [];
