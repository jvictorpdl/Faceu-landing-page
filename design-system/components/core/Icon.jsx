import React from "react";

/* Lucide wrapper. Host page must load Lucide:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>  */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = "currentColor", style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lib = typeof window !== "undefined" ? window.lucide : null;
    if (!lib || !name) return;
    const key = String(name).split(/[-_ ]+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    const node = (lib.icons && (lib.icons[key] || lib.icons[name])) || lib[key] || null;
    el.innerHTML = "";
    if (!node || !lib.createElement) return;
    const svg = lib.createElement(node);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke-width", strokeWidth);
    el.appendChild(svg);
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flex: "0 0 auto", color, ...style }}
      {...rest}
    />
  );
}
