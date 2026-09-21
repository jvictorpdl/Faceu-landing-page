"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import { Callout } from "./ui";
import { normalize } from "@/lib/labels";

export interface ToolListItem {
  slug: string;
  category: string;
  status: string;
  text: string;
  node: ReactNode;
}

const ALL = "Todas";

/** Filtros da página Ferramentas. Os cartões chegam já renderizados pelo servidor. */
export function ToolsExplorer({ items, statuses, gridClass }: { items: ToolListItem[]; statuses: { value: string; label: string }[]; gridClass: string }) {
  const [cat, setCat] = useState(ALL);
  const [status, setStatus] = useState("");
  const [q, setQ] = useState("");
  const categories = useMemo(() => [ALL, ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const list = items.filter(
    (i) => (cat === ALL || i.category === cat) && (!status || i.status === status) && (!q || normalize(i.text).includes(normalize(q))),
  );
  return (
    <div>
      <div className="filters filters--tools">
        <div className="chips" role="group" aria-label="Filtrar por categoria">
          {categories.map((c) => (
            <button key={c} type="button" className="tag" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <div className="control-icon">
            <Icon name="search" size={17} />
            <input type="search" className="control control--sm" placeholder="Buscar ferramentas" aria-label="Buscar ferramentas" value={q} onChange={(e) => setQ(e.target.value)} style={{ minWidth: 200 }} />
          </div>
          <select className="control control--sm" aria-label="Filtrar por situação" value={status} onChange={(e) => setStatus(e.target.value)} style={{ width: "auto" }}>
            <option value="">Todas as situações</option>
            {statuses.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      </div>
      <p className="count-line" role="status" aria-live="polite">
        {list.length} {list.length === 1 ? "ferramenta" : "ferramentas"}{cat === ALL ? "" : ` em ${cat}`}
      </p>
      {list.length ? (
        <ul className={`grid ${gridClass}`} style={{ listStyle: "none" }}>
          {list.map((i) => <li key={i.slug}>{i.node}</li>)}
        </ul>
      ) : (
        <Callout tone="info" title="Nenhuma ferramenta corresponde a esses filtros">Limpe a busca ou escolha outra categoria.</Callout>
      )}
    </div>
  );
}
