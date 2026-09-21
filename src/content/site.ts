/* Informações institucionais do projeto. Fonte: textos publicados pelo próprio projeto
   (site anterior e rodapés das ferramentas). */
export const site = {
  name: "FACEU",
  fullName: "Ferramentas de Aplicações Computacionais de Engenharias / UFERSA",
  tagline: "Ferramentas de cálculo para a engenharia",
  description:
    "O FACEU reúne ferramentas computacionais de acesso livre e gratuito para estudantes e profissionais de engenharia, desenvolvidas na Universidade Federal Rural do Semi-Árido (UFERSA).",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: "faceu.ufersa@gmail.com",
  locations: ["Mossoró, RN", "Pau dos Ferros, RN"],
  locale: "pt-BR",
} as const;

export const about = {
  /** Texto de abertura da página Sobre. */
  background: [
    "O projeto FACEU nasce de uma necessidade da formação de engenheiros e do trabalho de quem atua na área: contar com ferramentas de cálculo didático-pedagógicas de acesso livre e gratuito.",
    "Os algoritmos e as ferramentas do projeto são desenvolvidos para ajudar na resolução de problemas complexos e no desenvolvimento de projetos de engenharia, simplificando rotinas de cálculo e aumentando a precisão e a eficiência.",
  ],
  objective:
    "Disponibilizar ferramentas de cálculo abertas, que possam ser usadas em sala de aula e no trabalho profissional sem custo e sem instalação.",
  problems: [
    "Resolver problemas complexos de engenharia exige rotinas de cálculo longas e sujeitas a erro.",
    "Estudantes e profissionais nem sempre têm acesso a ferramentas de cálculo gratuitas e voltadas ao ensino.",
  ],
  audience: [
    "Estudantes de engenharia",
    "Profissionais de engenharia e de áreas correlatas",
    "Docentes que usam as ferramentas em disciplinas",
  ],
};
