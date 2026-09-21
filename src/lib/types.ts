/* Modelo de conteúdo do site FACEU.
   Todo conteúdo vive em src/content/*.ts e segue estes tipos: novas ferramentas,
   manuais, pessoas, publicações e notícias entram como dados, sem tocar nos componentes. */

export type IconName =
  | "map"
  | "droplets"
  | "waves"
  | "flask-conical"
  | "activity"
  | "compass"
  | "book-open"
  | "graduation-cap"
  | "wrench"
  | "smartphone"
  | "box";

export type ToolStatus = "stable" | "beta" | "development" | "archived";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ExternalLink {
  label: string;
  href: string;
  /** "tool" = abre a própria ferramenta; "repository" = código-fonte; "other" = demais links */
  kind: "tool" | "repository" | "other";
}

export type MobilePlatform = "android" | "ios";

/** Uma versão instalável de um aplicativo móvel. Sem `file` nem `storeUrl`, aparece como "em breve". */
export interface MobileBuild {
  platform: MobilePlatform;
  /** Formato do pacote quando distribuído direto pelo site. */
  format?: "APK" | "AAB" | "IPA";
  version?: string;
  /** Caminho público do arquivo, ex.: "/apps/autodepura-1.0.apk" (coloque o arquivo em public/apps/). */
  file?: string;
  /** Link de loja (Google Play / App Store), alternativa ou complemento ao arquivo. */
  storeUrl?: string;
  /** Texto pronto para exibição, ex.: "18 MB". */
  fileSize?: string;
  /** Requisito mínimo, ex.: "Android 8.0 ou superior". */
  minOs?: string;
  /** ISO yyyy-mm-dd */
  updatedAt?: string;
  /** Impressão digital do arquivo, para quem quiser conferir a integridade. */
  sha256?: string;
}

export interface MobileApp {
  id: string;
  name: string;
  description: string;
  builds: MobileBuild[];
}

export interface Tool {
  name: string;
  slug: string;
  shortDescription: string;
  /** Parágrafos da descrição completa (Visão geral). */
  fullDescription: string[];
  category: string;
  status: ToolStatus;
  /** Só preencher quando a versão for conhecida. */
  version?: string;
  icon: IconName;
  /** Imagem usada no cabeçalho e em cards. */
  thumbnail?: ImageAsset;
  purpose: string;
  targetAudience: string;
  features: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  useCases: string[];
  platform: string;
  technologies?: string[];
  requirements: string[];
  supportedFormats?: string[];
  screenshots: ImageAsset[];
  /** Aplicativos móveis baixáveis desta ferramenta (opcional). */
  mobileApps?: MobileApp[];
  /** Tabelas técnicas (ex.: faixas de operação); rolam horizontalmente dentro do próprio bloco em telas estreitas. */
  tables?: { caption: string; columns: string[]; rows: string[][] }[];
  /** ids de Publication */
  relatedPublications: string[];
  /** slugs de Member */
  relatedMembers: string[];
  /** slugs de FocusArea */
  focusAreas: string[];
  externalLinks: ExternalLink[];
}

export type DocumentType =
  | "user-manual"
  | "technical-manual"
  | "quick-start"
  | "documentation"
  | "release-notes";

export type Language = "pt-BR" | "en";

export interface Manual {
  id: string;
  title: string;
  /** slug da ferramenta */
  tool: string;
  type: DocumentType;
  version: string;
  language: Language;
  /** Caminho público, ex.: "/documents/topoufersa-manual-1.0-pt.pdf". */
  file: string;
  format: "PDF" | "DOCX" | "HTML";
  /** Texto pronto para exibição, ex.: "4,2 MB". */
  fileSize: string;
  /** ISO yyyy-mm-dd */
  publishedAt: string;
  updatedAt: string;
  /** Versão vigente do documento; versões anteriores ficam no histórico. */
  current: boolean;
}

export interface Member {
  name: string;
  slug: string;
  /** Um dos grupos declarados em TEAM_GROUPS. */
  group: string;
  role: string;
  title?: string;
  institution: string;
  expertise?: string;
  bio?: string;
  photo?: ImageAsset;
  links: { label: string; href: string; kind: "lattes" | "orcid" | "linkedin" | "researchgate" | "github" | "site" }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: "Artigo em periódico" | "Artigo em congresso" | "Relatório técnico" | "Trabalho de conclusão" | "Dissertação" | "Tese" | "Apresentação";
  doi?: string;
  href?: string;
  pdf?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO yyyy-mm-dd */
  date: string;
  tag: "Lançamento" | "Documentação" | "Evento" | "Publicação" | "Oficina" | "Marco";
  body?: string[];
}

export interface FocusArea {
  slug: string;
  title: string;
  icon: IconName;
  description: string;
  challenge: string;
  objectives: string[];
}

export interface Partner {
  name: string;
  role: string;
  href?: string;
}
