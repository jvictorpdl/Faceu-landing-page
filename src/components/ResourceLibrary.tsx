"use client";

import { Fragment, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import { Callout } from "./ui";
import { normalize } from "@/lib/labels";

export interface LibraryItem {
  id: string;
  tool: string;
  toolName: string;
  type: string;
  typeLabel: string;
  language: string;
  languageLabel: string;
  year: string;
  text: string;
  node: ReactNode;
}

/** Biblioteca de documentos com filtros por ferramenta, tipo, ano e idioma. Os cartões vêm do servidor. */
export function ResourceLibrary({ items, empty }: { items: LibraryItem[]; empty: ReactNode }) {
  const [q, setQ] = useState("");
  const [tool, setTool] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [lang, setLang] = useState("");

  if (!items.length) return <>{empty}</>;

  const uniq = <T extends { value: string; label: string }>(xs: T[]) => Array.from(new Map(xs.map((x) => [x.value, x])).values());
  const tools = uniq(items.map((i) => ({ value: i.tool, label: i.toolName })));
  const types = uniq(items.map((i) => ({ value: i.type, label: i.typeLabel })));
  const years = uniq(items.map((i) => ({ value: i.year, label: i.year }))).sort((a, b) => b.value.localeCompare(a.value));
  const langs = uniq(items.map((i) => ({ value: i.language, label: i.languageLabel })));

  const list = items.filter(
    (i) => (!tool || i.tool === tool) && (!type || i.type === type) && (!year || i.year === year) && (!lang || i.language === lang) && (!q || normalize(i.text).includes(normalize(q))),
  );

  const select = (label: string, value: string, set: (v: string) => void, opts: { value: string; label: string }[], all: string) => (
    <div className="field">
      <label htmlFor={`f-${label}`} className="sr-only">{label}</label>
      <select id={`f-${label}`} className="control control--sm" value={value} onChange={(e) => set(e.target.value)}>
        <option value="">{all}</option>
        {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );

  return (
    <div>
      <form role="search" aria-label="Filtrar documentos" className="filters" style={{ gridTemplateColumns: "1.4fr repeat(4, minmax(0, 1fr))" }} onSubmit={(e) => e.preventDefault()}>
        <div className="control-icon">
          <Icon name="search" size={17} />
          <input type="search" className="control control--sm" placeholder="Buscar documentos" aria-label="Buscar documentos" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {select("Ferramenta", tool, setTool, tools, "Todas as ferramentas")}
        {select("Tipo de documento", type, setType, types, "Todos os tipos")}
        {select("Ano", year, setYear, years, "Todos os anos")}
        {select("Idioma", lang, setLang, langs, "Todos os idiomas")}
      </form>
      <p className="count-line" role="status" aria-live="polite">{list.length} {list.length === 1 ? "documento" : "documentos"}</p>
      {list.length ? (
        <ul className="doc-list">{list.map((i) => <Fragment key={i.id}>{i.node}</Fragment>)}</ul>
      ) : (
        <Callout tone="info" title="Nenhum documento corresponde a esses filtros">Redefina os filtros para ver a biblioteca completa.</Callout>
      )}
    </div>
  );
}
