import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Accordion({ items = [], defaultOpen = 0, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: "1px solid var(--border-subtle)", ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)",
                background: "none", border: "none", cursor: "pointer", padding: "var(--space-5) 0", textAlign: "left",
                fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", fontWeight: "var(--weight-semibold)",
                color: isOpen ? "var(--ink-900)" : "var(--text-body)", transition: "color var(--dur-base) var(--ease-standard)"
              }}
            >
              {it.title}
              <Icon name={isOpen ? "minus" : "plus"} size={18} style={{ color: "var(--gold-600)" }} />
            </button>
            {isOpen ? (
              <div style={{ paddingBottom: "var(--space-6)", maxWidth: "var(--measure-prose)", fontSize: "var(--size-body-m)", lineHeight: "var(--lh-body)", color: "var(--text-muted)" }}>
                {it.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
