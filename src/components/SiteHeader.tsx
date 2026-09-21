"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconButton, Button } from "./ui";
import { SearchDialog } from "./SearchDialog";
import type { SearchEntry } from "@/lib/search-index";

export interface NavItem { label: string; href: string }

export function SiteHeader({ items, searchEntries }: { items: NavItem[]; searchEntries: SearchEntry[] }) {
  const pathname = usePathname();
  const dark = pathname === "/";
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => setMenu(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className={`site-header${dark ? " site-header--dark" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="logo" aria-label="FACEU — página inicial">
          <Image src={dark ? "/brand/faceu-logo-dark.svg" : "/brand/faceu-logo-light.svg"} alt="FACEU" width={211} height={34} priority unoptimized />
        </Link>
        <nav id="primary-nav" className="site-nav" aria-label="Principal" data-open={menu}>
          <ul>
            {items.map((it) => (
              <li key={it.href}>
                <Link href={it.href} aria-current={isActive(it.href) ? "page" : undefined}>{it.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <IconButton icon="search" label="Buscar no site (Ctrl+K)" onClick={() => setSearch(true)} size="sm" />
          <span className="site-header__cta">
            <Button size="sm" variant={dark ? "primary" : "secondary"} href="/resources">Manuais e recursos</Button>
          </span>
          <button
            type="button"
            className="icon-btn icon-btn--sm nav-toggle"
            aria-expanded={menu}
            aria-controls="primary-nav"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenu((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <SearchDialog entries={searchEntries} open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
