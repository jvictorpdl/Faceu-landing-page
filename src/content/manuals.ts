import type { Manual } from "@/lib/types";

/* Biblioteca de documentação.
   Para publicar um manual: 1) coloque o PDF em public/documents/ e 2) acrescente um objeto abaixo.
   Ao lançar uma nova versão, ACRESCENTE um novo item com `current: true` e mude o anterior para
   `current: false` — as versões antigas continuam no histórico da ferramenta e na biblioteca.

   Ainda não há manuais publicados: as páginas mostram o estado "ainda não publicado" e um
   link para solicitar o documento por e-mail. Exemplo de item:

   {
     id: "topoufersa-manual-1-0-pt",
     title: "Manual do usuário",
     tool: "topoufersa",
     type: "user-manual",
     version: "1.0",
     language: "pt-BR",
     file: "/documents/topoufersa-manual-1.0-pt.pdf",
     format: "PDF",
     fileSize: "1,2 MB",
     publishedAt: "2026-01-15",
     updatedAt: "2026-01-15",
     current: true,
   }
*/
export const manuals: Manual[] = [];
