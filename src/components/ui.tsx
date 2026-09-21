import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconKey } from "./Icon";
import { STATUS_LABEL } from "@/lib/labels";
import type { ToolStatus } from "@/lib/types";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/* ---------------------------------------------------------------- Button */
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "on-dark" | "ghost-dark";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: IconKey;
  iconAfter?: IconKey;
  /** Círculo com seta à direita (ação principal). */
  chip?: boolean;
  block?: boolean;
  wrap?: boolean;
  disabled?: boolean;
  download?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);
const ICON_SIZE = { sm: 15, md: 17, lg: 19 } as const;

export function Button({
  children, variant = "primary", size = "md", href, icon, iconAfter, chip, block, wrap, disabled, download, type = "button", onClick, className, ...rest
}: ButtonProps) {
  const cls = cx("btn", `btn--${variant}`, size !== "md" && `btn--${size}`, block && "btn--block", wrap && "btn--wrap", className);
  const s = ICON_SIZE[size];
  const inner = (
    <>
      {icon ? <Icon name={icon} size={s} /> : null}
      <span>{children}</span>
      {iconAfter && !chip ? <Icon name={iconAfter} size={s} /> : null}
      {chip ? <span className="btn__chip"><Icon name={iconAfter ?? "arrow-right"} size={s - 3} /></span> : null}
    </>
  );
  if (href && !disabled) {
    if (isExternal(href) || download) {
      const ext = href.startsWith("http");
      return (
        <a className={cls} href={href} download={download || undefined} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
          {inner}
        </a>
      );
    }
    return <Link className={cls} href={href} {...rest}>{inner}</Link>;
  }
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled || undefined} {...rest}>
      {inner}
    </button>
  );
}

export function IconButton({ icon, label, href, onClick, variant = "ghost", size = "md", className }: { icon: IconKey; label: string; href?: string; onClick?: () => void; variant?: "ghost" | "outline" | "on-dark"; size?: "sm" | "md"; className?: string }) {
  const cls = cx("icon-btn", size === "sm" && "icon-btn--sm", variant !== "ghost" && `icon-btn--${variant}`, className);
  if (href) {
    return (
      <a className={cls} href={href} aria-label={label} title={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <Icon name={icon} size={17} />
      </a>
    );
  }
  return (
    <button type="button" className={cls} aria-label={label} title={label} onClick={onClick}>
      <Icon name={icon} size={17} />
    </button>
  );
}

/* ---------------------------------------------------------------- Small pieces */
export function Tag({ children, tone = "neutral", size = "md" }: { children: ReactNode; tone?: "neutral" | "gold" | "signal" | "dark"; size?: "sm" | "md" }) {
  return <span className={cx("tag", tone !== "neutral" && `tag--${tone}`, size === "sm" && "tag--sm")}>{children}</span>;
}

export function StatusBadge({ status, label }: { status: ToolStatus | "current"; label?: string }) {
  const text = label ?? (status === "current" ? "Atual" : STATUS_LABEL[status]);
  return <span className={`badge badge--${status}`}>{text}</span>;
}

export function Callout({ tone = "note", title, children, actions }: { tone?: "note" | "info" | "warning" | "success"; title?: string; children: ReactNode; actions?: ReactNode }) {
  const icon: IconKey = tone === "warning" ? "alert-triangle" : tone === "success" ? "check-circle" : tone === "info" ? "info" : "bookmark";
  return (
    <aside className={cx("callout", tone !== "note" && `callout--${tone}`)}>
      <span className="callout__icon"><Icon name={icon} size={19} /></span>
      <div>
        {title ? <strong className="callout__title">{title}</strong> : null}
        <div className="callout__body">{children}</div>
        {actions ? <div className="callout__actions">{actions}</div> : null}
      </div>
    </aside>
  );
}

/* ---------------------------------------------------------------- Layout */
export function Section({ children, tone = "light", compact, id, labelledBy }: { children: ReactNode; tone?: "light" | "subtle" | "dark" | "deep"; compact?: boolean; id?: string; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx("section", tone !== "light" && `section--${tone}`, compact && "section--compact", (tone === "dark" || tone === "deep") && "on-dark")}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, description, action, id, level = 2, align = "split", tone = "light",
}: { eyebrow?: string; title: string; description?: string; action?: ReactNode; id?: string; level?: 2 | 3; align?: "split" | "left"; tone?: "light" | "dark" }) {
  const H = `h${level}` as "h2" | "h3";
  return (
    <div className={cx("section-heading", align === "left" && "section-heading--left", tone === "dark" && "on-dark")}>
      <div>
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <H id={id} className="section-heading__title">{title}</H>
      </div>
      {description || action ? (
        <div className="section-heading__side">
          {description ? <p>{description}</p> : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}

export interface Crumb { label: string; href?: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Trilha de navegação">
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.label}>
              {it.href && !last ? <Link href={it.href}>{it.label}</Link> : <span aria-current={last ? "page" : undefined}>{it.label}</span>}
              {!last ? <Icon name="chevron-right" size={12} /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, description, breadcrumb, children }: { eyebrow?: string; title: string; description?: string; breadcrumb?: Crumb[]; children?: ReactNode }) {
  return (
    <div className="page-hero grid-bg">
      <div className="container">
        {breadcrumb ? <Breadcrumb items={breadcrumb} /> : null}
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1>{title}</h1>
        {description ? <p className="page-hero__desc">{description}</p> : null}
        {children ? <div className="page-hero__extra">{children}</div> : null}
      </div>
    </div>
  );
}

export function Stat({ value, label, note }: { value: string | number; label: string; note?: string }) {
  return (
    <div>
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
      {note ? <div className="stat__note">{note}</div> : null}
    </div>
  );
}

export function Card({ children, tone = "light", hover, flush, className, as: As = "div" }: { children: ReactNode; tone?: "light" | "subtle" | "gold" | "dark" | "hero"; hover?: boolean; flush?: boolean; className?: string; as?: "div" | "article" | "li" }) {
  return <As className={cx("card", tone !== "light" && `card--${tone}`, hover && "card--hover", flush && "card--flush", className)}>{children}</As>;
}
