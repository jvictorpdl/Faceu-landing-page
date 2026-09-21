"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Icon } from "./Icon";
import { IconButton, Tag } from "./ui";
import { normalize } from "@/lib/labels";
import type { SearchEntry, SearchType } from "@/lib/search-index";

const SCOPES: { label: string; type: SearchType | null }[] = [
  { label: "Tudo", type: null },
  { label: "Ferramentas", type: "Ferramenta" },
  { label: "Aplicativos", type: "Aplicativo" },
  { label: "Manuais", type: "Manual" },
  { label: "Publicações", type: "Publicação" },
  { label: "Pessoas", type: "Pessoa" },
];

const TONE: Record<SearchType, "gold" | "signal" | "neutral"> = { Ferramenta: "gold", Aplicativo: "gold", Manual: "signal", Publicação: "neutral", Pessoa: "neutral", Página: "neutral" };

function score(entry: SearchEntry, terms: string[]): number {
  const title = normalize(entry.title);
  const rest = normalize(`${entry.note} ${entry.text}`);
  let s = 0;
  for (const t of terms) {
    if (title.includes(t)) s += title.startsWith(t) ? 4 : 3;
    else if (rest.includes(t)) s += 1;
    else return 0;
  }
  return s;
}

export function SearchDialog({ entries, open, onClose }: { entries: SearchEntry[]; open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState("");
  const [scope, setScope] = useState(0);
  const titleId = useId();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      inputRef.current?.focus();
    }
    if (!open && d.open) d.close();
  }, [open]);

  const results = useMemo(() => {
    const type = SCOPES[scope].type;
    const pool = type ? entries.filter((e) => e.type === type) : entries;
    const terms = normalize(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return pool.filter((e) => e.type === "Ferramenta" || (type && e.type === type)).slice(0, 8);
    return pool
      .map((e) => ({ e, s: score(e, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.e);
  }, [entries, q, scope]);

  const close = () => {
    setQ("");
    onClose();
  };

  return (
    <dialog
      ref={ref}
      className="search"
      aria-labelledby={titleId}
      onClose={close}
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
    >
      <div className="search__head">
        <div className="search__title-row">
          <div>
            <h2 id={titleId} style={{ fontSize: "var(--size-h3)" }}>Buscar no FACEU</h2>
            <p style={{ fontSize: "var(--size-body-s)", color: "var(--text-muted)", marginTop: 4 }}>
              Ferramentas, manuais, publicações e pessoas. Cada resultado indica o tipo de conteúdo.
            </p>
          </div>
          <IconButton icon="x" label="Fechar busca" size="sm" onClick={close} />
        </div>
        <div className="row" style={{ flexWrap: "nowrap", alignItems: "stretch" }}>
          <div className="control-icon" style={{ flex: 1 }}>
            <Icon name="search" size={17} />
            <input
              ref={inputRef}
              type="search"
              className="control"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar ferramentas, manuais e pessoas"
              aria-label="Termo de busca"
              autoComplete="off"
            />
          </div>
          <select className="control" style={{ width: "auto" }} value={scope} onChange={(e) => setScope(Number(e.target.value))} aria-label="Limitar a busca a">
            {SCOPES.map((s, i) => <option key={s.label} value={i}>{s.label}</option>)}
          </select>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {q ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"}` : ""}
      </p>
      {results.length ? (
        <ul className="search__results">
          {results.map((r) => (
            <li key={r.type + r.href + r.title}>
              <Link href={r.href} className="search__result" onClick={close}>
                <span className="search__type"><Tag size="sm" tone={TONE[r.type]}>{r.type}</Tag></span>
                <span>
                  <span className="t">{r.title}</span>
                  <span className="n">{r.note}</span>
                </span>
                <Icon name="arrow-right" size={16} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ padding: "0 var(--space-6) var(--space-6)", fontSize: "var(--size-body-s)", color: "var(--text-muted)" }}>Nada encontrado para “{q}”.</p>
      )}
    </dialog>
  );
}
