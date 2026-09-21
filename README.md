# Site FACEU

Site institucional e portal de ferramentas do FACEU (Ferramentas de Aplicações Computacionais de Engenharias / UFERSA).
Next.js (App Router) + TypeScript, páginas estáticas, sem CMS. Design system em `Design-system/` (tokens copiados para `src/styles/tokens`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Defina `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) antes de publicar: é usada em canonical, sitemap e Open Graph.

## Como acrescentar conteúdo

Todo o conteúdo está em `src/content/`. As páginas, a busca e o sitemap são gerados a partir dele; referências quebradas derrubam o build.

| Quero… | Edite |
| --- | --- |
| Nova ferramenta (`/tools/<slug>` + `/tools/<slug>/manual`) | `tools.ts` |
| Publicar um manual | Coloque o PDF em `public/documents/` e acrescente um item em `manuals.ts` |
| Nova versão de um manual | Novo item com `current: true`; mude o anterior para `current: false` (vira histórico) |
| Versão para celular de uma ferramenta | `mobileApps` em `tools.ts`; coloque o APK em `public/apps/` e preencha `file` (ou `storeUrl` para Play Store/App Store), `version`, `fileSize`, `updatedAt`. Sem `file`/`storeUrl` aparece "Em breve". Exemplo preparado: AutoDepura e ColiCalc, em `calimpe-h2o` |
| Pessoa na equipe (título, foto, Lattes, bio) | `team.ts` — com `bio` a pessoa ganha `/team/<slug>` |
| Publicação / notícia | `research.ts` — Pesquisa e Novidades só aparecem na navegação quando há itens |
| Áreas de atuação e instituições | `research.ts` |
| Textos institucionais, e-mail de contato | `site.ts` |

Capturas de tela das ferramentas ficam em `public/images/tools/`.
