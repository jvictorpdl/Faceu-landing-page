import type { Tool } from "@/lib/types";

/* Catálogo de ferramentas. Para publicar uma nova ferramenta, acrescente um objeto aqui:
   a listagem, a página /tools/<slug>, a busca e o sitemap passam a incluí-la automaticamente.

   Fonte dos textos: as próprias ferramentas publicadas (painéis de entrada, orientações e rodapés).
   Campos sem fonte (versão, publicações relacionadas) foram deixados de fora em vez de estimados. */

const SHOT = { width: 1280, height: 800 } as const;

export const tools: Tool[] = [
  {
    name: "TOPOUFERSA",
    slug: "topoufersa",
    category: "Topografia",
    status: "stable",
    icon: "compass",
    shortDescription:
      "Processa um levantamento topográfico a partir do primeiro azimute magnético, da primeira cota e da altura do instrumento.",
    fullDescription: [
      "O TOPOUFERSA recebe os dados de partida de um levantamento — o primeiro azimute magnético em graus, minutos e segundos, a primeira cota e a altura do instrumento — e um arquivo de leituras no formato modelo disponibilizado pela própria ferramenta.",
      "Com esses dados, a ferramenta calcula o levantamento sem que as contas precisem ser refeitas manualmente a cada ponto.",
    ],
    thumbnail: { src: "/images/tools/topoufersa.png", alt: "Painel de entrada de dados do TOPOUFERSA, com campos de azimute, cota e altura do instrumento.", ...SHOT },
    purpose:
      "Reduzir o trabalho repetitivo de cálculo em topografia e servir de apoio didático a quem aprende a processar levantamentos.",
    targetAudience:
      "Estudantes de engenharia e de topografia e profissionais que processam dados de levantamentos de campo.",
    features: [
      { title: "Azimute em graus, minutos e segundos", description: "O primeiro azimute magnético é informado no formato sexagesimal usado em campo." },
      { title: "Cota inicial e altura do instrumento", description: "Os valores de partida do levantamento são informados no painel de entrada." },
      { title: "Arquivo de leituras em formato modelo", description: "As leituras são carregadas de um arquivo no formato modelo, disponível na própria ferramenta." },
      { title: "Orientações ao lado do formulário", description: "O painel traz as instruções de preenchimento na mesma tela do formulário." },
    ],
    steps: [
      { title: "Prepare as informações", description: "Reúna o primeiro azimute magnético, a primeira cota, a altura do instrumento e as leituras de campo." },
      { title: "Preencha o painel de entrada", description: "Informe graus, minutos e segundos do azimute, a primeira cota e a altura do instrumento." },
      { title: "Carregue o arquivo de leituras", description: "Baixe o modelo de arquivo, preencha com as leituras e selecione o arquivo na ferramenta." },
      { title: "Execute o cálculo", description: "Clique no botão calcular para processar o levantamento." },
      { title: "Revise os resultados", description: "Confira os valores obtidos antes de usá-los em desenhos, planilhas ou relatórios." },
    ],
    useCases: [
      "Processar dados de um levantamento de campo em aulas práticas de topografia",
      "Conferir cálculos feitos manualmente",
      "Padronizar o processamento das leituras de uma equipe",
    ],
    platform: "Web (navegador)",
    technologies: ["Aplicação web em React"],
    requirements: ["Navegador atualizado", "Conexão com a internet"],
    supportedFormats: ["Arquivo de leituras no formato modelo fornecido pela ferramenta"],
    screenshots: [
      { src: "/images/tools/topoufersa.png", alt: "Tela inicial do TOPOUFERSA: painel de entrada de dados e orientações de uso.", ...SHOT },
    ],
    relatedPublications: [],
    relatedMembers: [
      "alisson-gadelha-de-medeiros",
      "reudismam-rolim-de-sousa",
      "wesley-de-oliveira-santos",
      "nildo-da-silva-dias",
      "fernando-dutra-ribeiro",
      "jose-belarmino-dos-santos-neto",
      "rafael-luan-do-nascimento",
      "jarbas-nunes-vidal-filho",
      "jose-daniel-jales-silva",
      "miguel-ferreira-neto",
    ],
    focusAreas: ["topografia"],
    externalLinks: [{ label: "Abrir o TOPOUFERSA", href: "https://topoufersa.netlify.app", kind: "tool" }],
  },
  {
    name: "ETA UFERSA",
    slug: "eta-ufersa",
    category: "Tratamento de água",
    status: "beta",
    icon: "droplets",
    shortDescription:
      "Apoia o dimensionamento das etapas de uma estação de tratamento de água, a começar pelo medidor Parshall da coagulação.",
    fullDescription: [
      "O ETA UFERSA organiza o dimensionamento de uma estação de tratamento de água pelas etapas do processo: coagulação, floculação, decantação e filtração.",
      "A etapa de coagulação permite escolher o medidor Parshall pela largura da garganta (W), que define a faixa de vazão atendida, e dimensioná-lo a partir da vazão de projeto (Q, em m³/s). A ferramenta apresenta os coeficientes e as dimensões do medidor escolhido.",
    ],
    thumbnail: { src: "/images/tools/etaufersa.png", alt: "Etapa de coagulação do ETA UFERSA, com seleção do medidor Parshall e tabela de dimensões.", ...SHOT },
    purpose:
      "Simplificar o dimensionamento das unidades de uma estação de tratamento de água e servir de apoio a disciplinas de saneamento.",
    targetAudience:
      "Estudantes de engenharia civil, ambiental e sanitária e profissionais que projetam sistemas de tratamento de água.",
    features: [
      { title: "Organização por etapa do tratamento", description: "Coagulação, floculação, decantação e filtração têm cada uma a sua seção na ferramenta." },
      { title: "Seleção do medidor Parshall", description: "A largura da garganta (W) é escolhida numa lista que mostra a faixa de vazão de cada calha." },
      { title: "Dimensões e coeficientes na tela", description: "A tabela mostra W, k, n, N, D, K, G′ e C do medidor selecionado." },
      { title: "Modelo de dados de exemplo", description: "A opção “Mostrar modelo” exibe um exemplo de preenchimento." },
    ],
    steps: [
      { title: "Prepare as informações", description: "Defina a vazão de projeto (Q) em m³/s." },
      { title: "Escolha a etapa e o medidor", description: "Na etapa de coagulação, selecione o medidor Parshall adequado à faixa de vazão." },
      { title: "Informe a vazão", description: "Digite Q no campo indicado; use “Mostrar modelo” se quiser ver um exemplo." },
      { title: "Dimensione", description: "Clique em “Dimensionar” para calcular." },
      { title: "Revise os resultados", description: "Confira as dimensões e os coeficientes antes de levá-los ao projeto." },
    ],
    useCases: [
      "Dimensionar o medidor Parshall da unidade de mistura rápida",
      "Verificar cálculos de projeto em disciplinas de tratamento de água",
      "Comparar calhas de larguras diferentes para uma mesma vazão",
    ],
    platform: "Web (navegador)",
    technologies: ["Aplicação web em React"],
    requirements: ["Navegador atualizado", "Conexão com a internet"],
    screenshots: [
      { src: "/images/tools/etaufersa.png", alt: "Etapa de coagulação: seleção do medidor Parshall, campo de vazão e tabela de coeficientes.", ...SHOT },
    ],
    tables: [
      {
        caption: "Medidores Parshall disponíveis na ferramenta",
        columns: ["Largura da garganta W (cm)", "Faixa de vazão Q (L/s)"],
        rows: [
          ["7,6", "0,8 – 53,8"],
          ["15,2", "1,4 – 110,4"],
          ["22,9", "2,5 – 252,0"],
          ["30,5", "3,1 – 455,9"],
          ["45,7", "4,2 – 696,6"],
          ["61,0", "11,9 – 937,0"],
          ["91,5", "17,3 – 1.427,2"],
          ["122,0", "36,8 – 1.922,7"],
          ["152,5", "45,3 – 2.423,9"],
          ["183,0", "73,6 – 2.930,8"],
          ["213,5", "85,0 – 3.437,7"],
          ["244,0", "99,1 – 3.950,2"],
        ],
      },
    ],
    relatedPublications: [],
    relatedMembers: [],
    focusAreas: ["tratamento-de-agua"],
    externalLinks: [{ label: "Abrir o ETA UFERSA", href: "https://etaufersa.netlify.app", kind: "tool" }],
  },
  {
    name: "ETE UFERSA",
    slug: "ete-ufersa",
    category: "Tratamento de esgoto",
    status: "stable",
    icon: "waves",
    shortDescription:
      "Faz o pré-dimensionamento das lagoas de estabilização de uma estação de tratamento de esgoto pelo sistema australiano.",
    fullDescription: [
      "O ETE UFERSA faz o pré-dimensionamento de uma estação de tratamento de esgoto específica para o sistema australiano, formado por lagoas anaeróbia, facultativa e, opcionalmente, de maturação.",
      "A partir dos dados da população atendida, da vazão e da carga orgânica afluentes, da temperatura e de parâmetros de projeto, a ferramenta calcula as dimensões das lagoas. Os valores iniciais do painel já vêm preenchidos com um exemplo.",
    ],
    thumbnail: { src: "/images/tools/eteufersa.png", alt: "Painel de entrada de dados do ETE UFERSA, com população, vazão, DBO, temperatura e parâmetros das lagoas.", ...SHOT },
    purpose:
      "Tornar rápido o pré-dimensionamento de lagoas de estabilização e permitir comparar cenários de projeto.",
    targetAudience:
      "Estudantes de engenharia civil, ambiental e sanitária e profissionais que estudam alternativas de tratamento de esgoto.",
    features: [
      { title: "Painel único de entrada", description: "População, vazão afluente, DBO, DQO, temperatura e taxas de projeto são informadas na mesma tela." },
      { title: "Lagoas anaeróbia e facultativa", description: "Profundidades e proporções de cada lagoa são adotadas pelo usuário." },
      { title: "Opção só facultativa", description: "É possível considerar apenas a lagoa facultativa no dimensionamento." },
      { title: "Lagoa de maturação opcional", description: "A ferramenta pergunta se a lagoa de maturação deve ser calculada." },
    ],
    steps: [
      { title: "Prepare as informações", description: "Reúna população, vazão afluente, DBO, DQO, temperatura e os parâmetros de projeto." },
      { title: "Preencha o painel de entrada", description: "Ajuste os valores de exemplo aos dados do seu projeto." },
      { title: "Adote as profundidades", description: "Informe as profundidades das lagoas anaeróbia e facultativa, em metros." },
      { title: "Escolha as opções de cálculo", description: "Indique se considera somente a facultativa e se calcula a lagoa de maturação." },
      { title: "Dimensione e revise", description: "Clique em “Dimensionar” e confira o resultado antes de usá-lo em estudo ou projeto." },
    ],
    useCases: [
      "Pré-dimensionar lagoas de estabilização para uma comunidade",
      "Comparar cenários variando população, vazão ou temperatura",
      "Resolver exercícios de tratamento de esgoto em disciplinas de saneamento",
    ],
    platform: "Web (navegador)",
    technologies: ["Aplicação web"],
    requirements: ["Navegador atualizado", "Conexão com a internet"],
    screenshots: [
      { src: "/images/tools/eteufersa.png", alt: "Tela inicial do ETE UFERSA com o painel de entrada de dados preenchido com valores de exemplo.", ...SHOT },
    ],
    relatedPublications: [],
    relatedMembers: [
      "bruno-wellington-da-silva-lima",
      "fernando-dutra-ribeiro",
      "alisson-gadelha-de-medeiros",
      "maria-josicleide-felipe-guedes",
    ],
    focusAreas: ["tratamento-de-esgoto"],
    externalLinks: [{ label: "Abrir o ETE UFERSA", href: "https://eteufersa.vercel.app", kind: "tool" }],
  },
  {
    name: "Calimpe-H2O",
    slug: "calimpe-h2o",
    category: "Qualidade da água",
    status: "stable",
    icon: "activity",
    shortDescription:
      "Reúne o AutoDepura, para o estudo da autodepuração de um rio que recebe esgoto, e o módulo ColiCalc.",
    fullDescription: [
      "O Calimpe-H2O reúne dois módulos. O AutoDepura trata da autodepuração de um rio que recebe lançamento de esgoto: o usuário informa os dados do esgoto, dados adicionais e os dados do rio e finaliza o cálculo. O segundo módulo é o ColiCalc.",
      "A versão anterior do AutoDepura, publicada de forma independente, continua acessível pelo link listado na página.",
    ],
    thumbnail: { src: "/images/tools/calimpe-h2o.png", alt: "Tela do AutoDepura no Calimpe-H2O, com os blocos Dados do esgoto, Dados adicionais e Dados do rio.", ...SHOT },
    purpose:
      "Permitir estudar como um curso d’água se recupera após receber esgoto, a partir de dados do lançamento e do rio.",
    targetAudience:
      "Estudantes de engenharia ambiental, civil e sanitária e profissionais que avaliam lançamentos em corpos d’água.",
    features: [
      { title: "Entrada em três blocos", description: "Dados do esgoto, dados adicionais e dados do rio são preenchidos em blocos separados sobre um esquema do trecho." },
      { title: "Cálculo final em um passo", description: "Depois de preencher os blocos, o botão “Finalizar” executa o cálculo." },
      { title: "Módulo ColiCalc", description: "Um segundo módulo, acessível pela navegação superior da ferramenta." },
    ],
    steps: [
      { title: "Prepare as informações", description: "Reúna os dados do esgoto lançado, os dados adicionais e as características do rio." },
      { title: "Informe os dados do esgoto", description: "Abra o bloco “Dados do esgoto” e preencha os campos." },
      { title: "Complete com dados adicionais e do rio", description: "Preencha os blocos “Dados adicionais” e “Dados do rio”." },
      { title: "Finalize o cálculo", description: "Clique em “Finalizar” para processar os dados informados." },
      { title: "Revise os resultados", description: "Confira os valores obtidos antes de usá-los em relatórios ou estudos." },
    ],
    useCases: [
      "Estudar o efeito de um lançamento de esgoto sobre um rio",
      "Comparar cenários de vazão e carga lançada em aulas de qualidade da água",
      "Apoiar estudos preliminares de enquadramento de corpos d’água",
    ],
    platform: "Web (navegador)",
    technologies: ["Aplicação web"],
    requirements: ["Navegador atualizado", "Conexão com a internet"],
    screenshots: [
      { src: "/images/tools/calimpe-h2o.png", alt: "AutoDepura: três blocos de entrada de dados sobre o esquema de um esgoto que deságua em um rio.", ...SHOT },
    ],
    /* Versões para celular. Exemplo preparado, SEM arquivos anexados: enquanto `file` e `storeUrl`
       estiverem ausentes, o site mostra "Em breve" e o botão fica desativado.
       Para publicar: 1) coloque o arquivo em public/apps/ e 2) preencha `file` (ou `storeUrl`),
       `version`, `fileSize` e `updatedAt`. Para oferecer iOS, acrescente { platform: "ios", ... } em `builds`. */
    mobileApps: [
      {
        id: "autodepura",
        name: "AutoDepura",
        description: "Estudo da autodepuração de um rio que recebe esgoto, no celular.",
        builds: [
          {
            platform: "android",
            format: "APK",
            // minOs: "Android 8.0 ou superior",
            // file: "/apps/autodepura-1.0.apk",
            // version: "1.0", fileSize: "18 MB", updatedAt: "2026-01-15",
            // sha256: "…", // opcional
          },
        ],
      },
      {
        id: "colicalc",
        name: "ColiCalc",
        description: "Módulo ColiCalc do Calimpe-H2O, no celular.",
        builds: [{ platform: "android", format: "APK" }],
      },
    ],
    relatedPublications: [],
    relatedMembers: [],
    focusAreas: ["tratamento-de-esgoto"],
    externalLinks: [
      { label: "Abrir o Calimpe-H2O", href: "https://calimpe-h20.netlify.app/", kind: "tool" },
      { label: "AutoDepura (versão anterior, independente)", href: "https://autodepura.netlify.app", kind: "other" },
    ],
  },
];
