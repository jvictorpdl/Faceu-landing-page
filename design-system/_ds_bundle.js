/* @ds-bundle: {"format":4,"namespace":"FACEUDesignSystem_27f931","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Accordion","sourcePath":"components/catalog/Accordion.jsx"},{"name":"DocumentCard","sourcePath":"components/catalog/DocumentCard.jsx"},{"name":"FeatureList","sourcePath":"components/catalog/FeatureList.jsx"},{"name":"ProcessSteps","sourcePath":"components/catalog/ProcessSteps.jsx"},{"name":"PublicationItem","sourcePath":"components/catalog/PublicationItem.jsx"},{"name":"SpecTable","sourcePath":"components/catalog/SpecTable.jsx"},{"name":"TeamCard","sourcePath":"components/catalog/TeamCard.jsx"},{"name":"ToolCard","sourcePath":"components/catalog/ToolCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavTabs","sourcePath":"components/navigation/NavTabs.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"7e88976fbbc1","components/catalog/Accordion.jsx":"87c25e25461a","components/catalog/DocumentCard.jsx":"87b95720658f","components/catalog/FeatureList.jsx":"de5c252afec1","components/catalog/ProcessSteps.jsx":"b9c5c6881498","components/catalog/PublicationItem.jsx":"63f6eb9f0a07","components/catalog/SpecTable.jsx":"9ce8f2aa7620","components/catalog/TeamCard.jsx":"55f723cd23f0","components/catalog/ToolCard.jsx":"2ee2d16bce6f","components/core/Button.jsx":"10258e3413ff","components/core/Card.jsx":"d7ee9b6e4a5d","components/core/Icon.jsx":"e53c7e5a58f8","components/core/IconButton.jsx":"1283d83a9ad7","components/core/SectionHeading.jsx":"d95d67141736","components/core/Stat.jsx":"59c3089301a2","components/core/StatusBadge.jsx":"1e42f096116b","components/core/Tag.jsx":"02d03c71df11","components/feedback/Callout.jsx":"499032b5774a","components/feedback/Modal.jsx":"da826b686534","components/forms/Checkbox.jsx":"5865079388bd","components/forms/Field.jsx":"1c55c599910e","components/forms/Input.jsx":"044ef619941a","components/forms/SearchField.jsx":"759fcfe75e26","components/forms/Select.jsx":"d6107b0013d2","components/forms/Textarea.jsx":"b8108d7f8454","components/navigation/Breadcrumb.jsx":"7ae0722f3fee","components/navigation/NavTabs.jsx":"fa3c9debd9d6","components/navigation/SiteFooter.jsx":"0f0b2c26adf1","components/navigation/SiteHeader.jsx":"029527007a5b","ui_kits/website/app.jsx":"db0d629a14e3","ui_kits/website/data.js":"198f791ad260","ui_kits/website/parts.jsx":"81c6f2ab8660","ui_kits/website/screen-home.jsx":"c39206aea344","ui_kits/website/screen-resources.jsx":"d99d16621235","ui_kits/website/screen-team.jsx":"1639f710bd8f","ui_kits/website/screen-tool-detail.jsx":"55258789aa09","ui_kits/website/screen-tools.jsx":"6cea5b2d6fc6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FACEUDesignSystem_27f931 = window.FACEUDesignSystem_27f931 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No FACEU logo file was supplied with the brief — the wordmark is set in type.
   Swap the inner markup for an <img src="assets/logo.svg"> once a real mark exists. */
function Wordmark({
  tone = "dark",
  size = 22,
  descriptor = "Research & Innovation",
  showDescriptor = true,
  href,
  style,
  ...rest
}) {
  const onDark = tone === "light";
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size * 1.45,
      height: size * 1.45,
      borderRadius: "var(--radius-sm)",
      background: onDark ? "var(--grad-gold)" : "var(--ink-900)",
      color: onDark ? "var(--ink-900)" : "var(--gold-400)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: size * 0.78,
      letterSpacing: "-.04em"
    }
  }, "F"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: size,
      letterSpacing: ".01em",
      color: onDark ? "var(--text-on-dark)" : "var(--ink-900)"
    }
  }, "FACEU"), showDescriptor ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: Math.max(9, size * 0.42),
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, descriptor) : null));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ProcessSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessSteps({
  steps = [],
  columns = 2,
  tone = "light",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.title,
    style: {
      background: onDark ? "rgba(255,255,255,.04)" : "var(--surface-card)",
      border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-md)",
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: onDark ? "var(--gold-400)" : "var(--text-accent)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h4)",
      margin: 0,
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }, s.title), s.description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      lineHeight: "var(--lh-body)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, s.description) : null)));
}
Object.assign(__ds_scope, { ProcessSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// components/catalog/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecTable({
  rows = [],
  caption,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflowX: "auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      minWidth: 320
    }
  }, caption ? /*#__PURE__*/React.createElement("caption", {
    style: {
      textAlign: "left",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      paddingBottom: "var(--space-4)"
    }
  }, caption) : null, /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.label,
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    style: {
      textAlign: "left",
      verticalAlign: "top",
      padding: "14px var(--space-5) 14px 0",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)",
      width: "38%"
    }
  }, r.label), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 0",
      color: "var(--text-strong)"
    }
  }, r.value))))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = "light",
  padding = "var(--space-6)",
  interactive = false,
  as = "div",
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)"
    },
    subtle: {
      background: "var(--surface-card-alt)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)"
    },
    gold: {
      background: "var(--surface-gold-soft)",
      border: "1px solid var(--gold-300)",
      color: "var(--gold-700)"
    },
    dark: {
      background: "var(--surface-dark-card)",
      border: "1px solid var(--border-dark)",
      color: "var(--text-on-dark-muted)"
    },
    hero: {
      background: "var(--grad-hero)",
      border: "1px solid var(--border-dark)",
      color: "var(--text-on-dark-muted)"
    }
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      borderRadius: "var(--radius-lg)",
      padding,
      textDecoration: "none",
      transition: "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      ...(tones[tone] || tones.light),
      ...((interactive || href) && hover ? tone === "dark" || tone === "hero" ? {
        transform: "translateY(var(--lift-hover))",
        borderColor: "rgba(255,255,255,.28)",
        boxShadow: "var(--shadow-dark)"
      } : {
        transform: "translateY(var(--lift-hover))",
        borderColor: "var(--border-strong)",
        boxShadow: "var(--shadow-md)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide wrapper. Host page must load Lucide:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>  */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lib = typeof window !== "undefined" ? window.lucide : null;
    if (!lib || !name) return;
    const key = String(name).split(/[-_ ]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    const node = lib.icons && (lib.icons[key] || lib.icons[name]) || lib[key] || null;
    el.innerHTML = "";
    if (!node || !lib.createElement) return;
    const svg = lib.createElement(node);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke-width", strokeWidth);
    el.appendChild(svg);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/catalog/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.title,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "var(--space-5) 0",
        textAlign: "left",
        fontFamily: "var(--font-display)",
        fontSize: "var(--size-h4)",
        fontWeight: "var(--weight-semibold)",
        color: isOpen ? "var(--ink-900)" : "var(--text-body)",
        transition: "color var(--dur-base) var(--ease-standard)"
      }
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? "minus" : "plus",
      size: 18,
      style: {
        color: "var(--gold-600)"
      }
    })), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: "var(--space-6)",
        maxWidth: "var(--measure-prose)",
        fontSize: "var(--size-body-m)",
        lineHeight: "var(--lh-body)",
        color: "var(--text-muted)"
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/catalog/FeatureList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureList({
  items = [],
  columns = 2,
  tone = "light",
  marker = "check",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))",
      gap: "var(--space-5) var(--space-8)",
      ...style
    }
  }, rest), items.map(it => {
    const item = typeof it === "string" ? {
      title: it
    } : it;
    return /*#__PURE__*/React.createElement("li", {
      key: item.title,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 26,
        flex: "0 0 auto",
        borderRadius: "var(--radius-sm)",
        background: onDark ? "rgba(255,255,255,.07)" : "var(--surface-signal-soft)",
        color: onDark ? "var(--signal-400)" : "var(--signal-700)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon || marker,
      size: 14,
      strokeWidth: 2
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body-m)",
        fontWeight: "var(--weight-medium)",
        color: onDark ? "var(--text-on-dark)" : "var(--text-strong)"
      }
    }, item.title), item.description ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: 4,
        fontSize: "var(--size-body-s)",
        lineHeight: "var(--lh-body)",
        color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
      }
    }, item.description) : null));
  }));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    pad: "7px 14px",
    font: "13px",
    gap: "7px",
    icon: 15
  },
  md: {
    pad: "11px 20px",
    font: "14px",
    gap: "9px",
    icon: 17
  },
  lg: {
    pad: "14px 26px",
    font: "16px",
    gap: "10px",
    icon: 19
  }
};
const VARIANTS = {
  primary: {
    background: "var(--grad-gold)",
    color: "var(--text-on-gold)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "var(--ink-900)",
    color: "var(--text-on-dark)",
    border: "1px solid var(--ink-900)"
  },
  outline: {
    background: "var(--neutral-0)",
    color: "var(--ink-800)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-700)",
    border: "1px solid transparent"
  },
  onDark: {
    background: "rgba(255,255,255,.07)",
    color: "var(--text-on-dark)",
    border: "1px solid var(--border-dark)"
  }
};
const HOVER = {
  primary: {
    boxShadow: "var(--shadow-gold)",
    filter: "brightness(1.04)"
  },
  secondary: {
    background: "var(--ink-700)",
    borderColor: "var(--ink-700)"
  },
  outline: {
    borderColor: "var(--gold-500)",
    color: "var(--gold-700)"
  },
  ghost: {
    background: "var(--surface-inset)"
  },
  onDark: {
    background: "rgba(255,255,255,.14)",
    borderColor: "rgba(255,255,255,.3)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconAfter,
  chip = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? "a" : "button";
  const chipBg = variant === "primary" ? "rgba(10,27,61,.16)" : variant === "outline" || variant === "ghost" ? "var(--surface-inset)" : "rgba(255,255,255,.16)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: disabled ? undefined : href,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-body)",
      fontSize: s.font,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: ".005em",
      lineHeight: 1.2,
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      padding: s.pad,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      opacity: disabled ? 0.45 : 1,
      transform: down && !disabled ? "scale(var(--press-scale))" : "none",
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconAfter && !chip ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }) : null, chip ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.icon + 11,
      height: s.icon + 11,
      borderRadius: "var(--radius-pill)",
      background: chipBg,
      marginRight: "-6px",
      marginLeft: "1px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter || "arrow-right",
    size: s.icon - 3
  })) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = "outline",
  size = "md",
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const Tag = href ? "a" : "button";
  const base = {
    outline: {
      background: "var(--neutral-0)",
      color: "var(--ink-800)",
      border: "1px solid var(--border-subtle)"
    },
    solid: {
      background: "var(--ink-900)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--ink-900)"
    },
    gold: {
      background: "var(--grad-gold)",
      color: "var(--text-on-gold)",
      border: "1px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--neutral-500)",
      border: "1px solid transparent"
    },
    onDark: {
      background: "rgba(255,255,255,.07)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-dark)"
    }
  }[variant];
  const hoverStyle = {
    outline: {
      borderColor: "var(--gold-500)",
      color: "var(--gold-700)"
    },
    solid: {
      background: "var(--ink-700)"
    },
    gold: {
      boxShadow: "var(--shadow-gold)"
    },
    ghost: {
      background: "var(--surface-inset)",
      color: "var(--ink-800)"
    },
    onDark: {
      background: "rgba(255,255,255,.16)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    title: label,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      textDecoration: "none",
      transition: "all var(--dur-base) var(--ease-standard)",
      ...base,
      ...(hover && !disabled ? hoverStyle : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(box * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/catalog/TeamCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TeamCard({
  name,
  role,
  title,
  institution,
  expertise,
  bio,
  photo,
  links = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: "light",
    padding: "0",
    interactive: true,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: "var(--surface-inset)",
      position: "relative"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "Portrait of " + name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Portrait pending")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      flex: 1
    }
  }, role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, role) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h4)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, name), title ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      color: "var(--text-body)"
    }
  }, title) : null, institution ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-xs)",
      color: "var(--text-muted)"
    }
  }, institution) : null, expertise ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-xs)",
      color: "var(--text-muted)",
      marginTop: "var(--space-1)"
    }
  }, expertise) : null, bio ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, bio) : null, links.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: l.label,
    icon: l.icon || "external-link",
    label: l.label + " — " + name,
    href: l.href,
    variant: "ghost",
    size: "sm"
  }))) : null));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "split",
  tone = "light",
  level = 2,
  action,
  style,
  ...rest
}) {
  const H = "h" + level;
  const onDark = tone === "dark";
  const head = /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-eyebrow)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--gold-400)" : "var(--text-accent)",
      fontWeight: "var(--weight-medium)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: "currentColor",
      transform: "rotate(45deg)",
      display: "inline-block"
    }
  }), eyebrow) : null, React.createElement(H, {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-m)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--track-display)",
      fontWeight: "var(--weight-semibold)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
      margin: 0,
      maxWidth: "20ch"
    }
  }, title));
  const side = description || action ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure-narrow)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start",
      paddingTop: eyebrow ? "38px" : 0
    }
  }, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-m)",
      lineHeight: "var(--lh-body)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, description) : null, action) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: align === "split" ? "grid" : "flex",
      flexDirection: "column",
      gridTemplateColumns: align === "split" ? "minmax(0,1fr) minmax(0,.85fr)" : undefined,
      gap: "var(--space-8)",
      alignItems: align === "split" ? "start" : "flex-start",
      textAlign: align === "center" ? "center" : "left",
      marginBottom: "var(--space-10)",
      ...style
    }
  }, rest), head, side);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  note,
  tone = "dark",
  align = "left",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-m)",
      lineHeight: 1,
      letterSpacing: "var(--track-display)",
      fontWeight: "var(--weight-semibold)",
      color: onDark ? "var(--gold-400)" : "var(--ink-900)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-medium)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }, label), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-1)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  stable: {
    label: "Stable",
    fg: "var(--status-stable)",
    bg: "var(--status-stable-bg)"
  },
  beta: {
    label: "Beta",
    fg: "var(--status-beta)",
    bg: "var(--status-beta-bg)"
  },
  development: {
    label: "In development",
    fg: "var(--status-dev)",
    bg: "var(--status-dev-bg)"
  },
  archived: {
    label: "Archived",
    fg: "var(--status-archived)",
    bg: "var(--status-archived-bg)"
  },
  current: {
    label: "Current",
    fg: "var(--status-stable)",
    bg: "var(--status-stable-bg)"
  }
};
function StatusBadge({
  status = "stable",
  label,
  dot = true,
  style,
  ...rest
}) {
  const m = MAP[status] || MAP.stable;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--track-meta)",
      textTransform: "uppercase",
      lineHeight: 1,
      padding: "6px 10px",
      borderRadius: "var(--radius-xs)",
      color: m.fg,
      background: m.bg,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }) : null, label || m.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/catalog/DocumentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DocumentCard({
  title,
  tool,
  type = "User manual",
  version,
  language = "English",
  format = "PDF",
  fileSize,
  updatedAt,
  current = false,
  layout = "row",
  onDownload,
  href,
  style,
  ...rest
}) {
  const meta = [version, language, [format, fileSize].filter(Boolean).join(" · "), updatedAt ? "Updated " + updatedAt : null].filter(Boolean);
  const row = layout === "row";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: "light",
    padding: "var(--space-5)",
    style: {
      display: "flex",
      flexDirection: row ? "row" : "column",
      alignItems: row ? "center" : "flex-start",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 42,
      flex: "0 0 auto",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-inset)",
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-text",
    size: 20,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, type), current ? /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: "current"
  }) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h4)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, title), tool ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      color: "var(--text-muted)"
    }
  }, tool) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: "var(--text-faint)"
    }
  }, meta.join("  ·  "))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    icon: "download",
    onClick: onDownload,
    href: href,
    style: {
      flex: "0 0 auto"
    }
  }, "Download " + (tool ? tool + " " : "") + type.toLowerCase()));
}
Object.assign(__ds_scope, { DocumentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/DocumentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  icon,
  tone = "neutral",
  size = "md",
  interactive = false,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    neutral: {
      background: "var(--surface-inset)",
      color: "var(--neutral-600)",
      border: "1px solid transparent"
    },
    gold: {
      background: "var(--gold-50)",
      color: "var(--gold-700)",
      border: "1px solid var(--gold-300)"
    },
    signal: {
      background: "var(--signal-50)",
      color: "var(--signal-700)",
      border: "1px solid var(--signal-200)"
    },
    onDark: {
      background: "rgba(255,255,255,.08)",
      color: "var(--text-on-dark-muted)",
      border: "1px solid var(--border-dark)"
    }
  };
  const sel = {
    background: "var(--ink-900)",
    color: "var(--text-on-dark)",
    border: "1px solid var(--ink-900)"
  };
  const Tag_ = interactive ? "button" : "span";
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    onClick: onClick,
    "aria-pressed": interactive ? selected : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: size === "sm" ? "11px" : "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      padding: size === "sm" ? "5px 9px" : "7px 12px",
      borderRadius: "var(--radius-pill)",
      cursor: interactive ? "pointer" : "default",
      whiteSpace: "nowrap",
      transition: "all var(--dur-base) var(--ease-standard)",
      ...(selected ? sel : tones[tone] || tones.neutral),
      ...(interactive && hover && !selected ? {
        borderColor: "var(--border-strong)",
        color: "var(--ink-800)"
      } : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PublicationItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PublicationItem({
  title,
  authors,
  year,
  venue,
  type,
  doi,
  href,
  pdfHref,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "72px minmax(0,1fr) auto",
      gap: "var(--space-5)",
      alignItems: "start",
      padding: "var(--space-6) var(--space-4)",
      borderBottom: "1px solid var(--border-subtle)",
      background: hover ? "var(--surface-subtle)" : "transparent",
      transition: "background var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-body-s)",
      color: "var(--text-accent)",
      letterSpacing: "var(--track-meta)",
      paddingTop: 2
    }
  }, year), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h4)",
      lineHeight: "var(--lh-snug)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, title) : title), authors ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      color: "var(--text-body)"
    }
  }, authors) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-1)"
    }
  }, type ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    size: "sm"
  }, type) : null, venue ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-xs)",
      color: "var(--text-muted)"
    }
  }, venue) : null, doi ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--text-faint)"
    }
  }, "DOI ", doi) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      paddingTop: 4
    }
  }, pdfHref ? /*#__PURE__*/React.createElement("a", {
    href: pdfHref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-medium)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-down",
    size: 16
  }), "PDF") : null, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-medium)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 16
  }), "Publisher") : null));
}
Object.assign(__ds_scope, { PublicationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PublicationItem.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ToolCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ToolCard({
  name,
  shortDescription,
  category,
  status = "stable",
  version,
  icon = "box",
  tone = "light",
  href,
  onLearnMore,
  onDownload,
  manualLabel,
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    interactive: true,
    padding: "var(--space-6)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 46,
      height: 46,
      borderRadius: "var(--radius-md)",
      background: onDark ? "rgba(255,255,255,.07)" : "var(--surface-gold-soft)",
      color: onDark ? "var(--gold-400)" : "var(--gold-600)",
      border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--gold-300)")
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h3)",
      letterSpacing: "var(--track-heading)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      lineHeight: "var(--lh-body)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, shortDescription)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "auto"
    }
  }, category ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: onDark ? "onDark" : "neutral",
    size: "sm"
  }, category) : null, version ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--track-meta)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)"
    }
  }, version) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)")
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: onDark ? "onDark" : "outline",
    href: href,
    onClick: onLearnMore,
    iconAfter: "arrow-right"
  }, "Learn more"), onDownload || manualLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    icon: "download",
    onClick: onDownload,
    style: onDark ? {
      color: "var(--gold-400)"
    } : null
  }, manualLabel || "Manual") : null));
}
Object.assign(__ds_scope, { ToolCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ToolCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: "var(--status-dev-bg)",
    fg: "var(--status-dev)",
    icon: "info"
  },
  note: {
    bg: "var(--surface-gold-soft)",
    fg: "var(--gold-700)",
    icon: "bookmark"
  },
  success: {
    bg: "var(--status-stable-bg)",
    fg: "var(--status-stable)",
    icon: "check-circle"
  },
  warning: {
    bg: "var(--status-beta-bg)",
    fg: "var(--status-beta)",
    icon: "alert-triangle"
  },
  danger: {
    bg: "var(--status-danger-bg)",
    fg: "var(--status-danger)",
    icon: "octagon-alert"
  }
};
function Callout({
  tone = "note",
  title,
  children,
  icon,
  action,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.note;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      display: "flex",
      gap: "var(--space-4)",
      padding: "var(--space-5)",
      background: t.bg,
      borderRadius: "var(--radius-md)",
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      flex: "0 0 auto",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-m)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body-s)",
      lineHeight: "var(--lh-body)"
    }
  }, children), action));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Modal({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 560,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "rgba(5,15,38,.62)",
      backdropFilter: "blur(4px)"
    },
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h3)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close dialog",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      paddingTop: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  description,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      inset: 0,
      width: 18,
      height: 18,
      margin: 0,
      opacity: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--ink-900)" : "var(--neutral-0)",
      border: "1px solid " + (checked ? "var(--ink-900)" : "var(--border-strong)"),
      color: "var(--text-on-dark)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 2.5
  }) : null)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-body-s)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-body-xs)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--gold-600)",
      marginLeft: 4
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("p", {
    role: "alert",
    style: {
      fontSize: "var(--size-body-xs)",
      color: "var(--status-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  invalid = false,
  size = "md",
  tone = "light",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onDark = tone === "dark";
  const pad = size === "sm" ? "9px 12px" : "12px 14px";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      display: "flex",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: size === "sm" ? "var(--size-body-s)" : "var(--size-body-m)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
      background: onDark ? "rgba(255,255,255,.06)" : "var(--neutral-0)",
      padding: icon ? size === "sm" ? "9px 12px 9px 38px" : "12px 14px 12px 40px" : pad,
      border: "1px solid " + (invalid ? "var(--status-danger)" : focus ? "var(--signal-500)" : onDark ? "var(--border-dark)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px color-mix(in oklch, var(--signal-500) 22%, transparent)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  placeholder = "Search tools, manuals and publications",
  value,
  onChange,
  onSubmit,
  scopes = [],
  scope,
  onScopeChange,
  tone = "light",
  buttonLabel = "Search",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("form", _extends({
    role: "search",
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "8px 8px 8px 16px",
      background: onDark ? "rgba(255,255,255,.06)" : "var(--neutral-0)",
      border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    style: {
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    "aria-label": placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }), scopes.length ? /*#__PURE__*/React.createElement("select", {
    value: scope,
    onChange: e => onScopeChange && onScopeChange(e.target.value),
    "aria-label": "Limit search to",
    style: {
      appearance: "none",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      paddingRight: "var(--space-2)"
    }
  }, scopes.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s))) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "sm",
    variant: onDark ? "primary" : "secondary",
    chip: true,
    iconAfter: "arrow-right"
  }, buttonLabel));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = "md",
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: size === "sm" ? "var(--size-body-s)" : "var(--size-body-m)",
      color: "var(--text-strong)",
      background: "var(--neutral-0)",
      padding: size === "sm" ? "9px 34px 9px 12px" : "12px 38px 12px 14px",
      border: "1px solid " + (invalid ? "var(--status-danger)" : focus ? "var(--signal-500)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      cursor: "pointer",
      boxShadow: focus ? "0 0 0 3px color-mix(in oklch, var(--signal-500) 22%, transparent)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      display: "flex",
      color: "var(--text-faint)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-m)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-strong)",
      background: "var(--neutral-0)",
      padding: "12px 14px",
      resize: "vertical",
      border: "1px solid " + (invalid ? "var(--status-danger)" : focus ? "var(--signal-500)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px color-mix(in oklch, var(--signal-500) 22%, transparent)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  tone = "light",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: style
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      flexWrap: "wrap"
    }
  }, items.map((it, i) => {
    const label = typeof it === "string" ? it : it.label;
    const href = typeof it === "object" ? it.href : undefined;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, href && !last ? /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--size-meta)",
        letterSpacing: "var(--track-meta)",
        textDecoration: "none",
        color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
      }
    }, label) : /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--size-meta)",
        letterSpacing: "var(--track-meta)",
        color: last ? onDark ? "var(--gold-400)" : "var(--ink-900)" : onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
      }
    }, label), !last ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 12,
      style: {
        color: onDark ? "rgba(255,255,255,.35)" : "var(--text-faint)"
      }
    }) : null);
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavTabs({
  items = [],
  active,
  onChange,
  tone = "light",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
      overflowX: "auto",
      ...style
    }
  }, rest), items.map(it => {
    const label = typeof it === "string" ? it : it.label;
    const count = typeof it === "object" ? it.count : undefined;
    const isActive = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(label),
      style: {
        appearance: "none",
        background: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        padding: "0 0 14px",
        border: "none",
        borderBottom: "2px solid " + (isActive ? "var(--gold-500)" : "transparent"),
        marginBottom: "-1px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body-s)",
        fontWeight: "var(--weight-medium)",
        color: isActive ? onDark ? "var(--text-on-dark)" : "var(--text-strong)" : onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
        transition: "color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
      }
    }, label, count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: onDark ? "var(--text-on-dark-muted)" : "var(--text-faint)"
      }
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { NavTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  blurb,
  columns = [],
  social = [],
  legal,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--ink-950)",
      color: "var(--text-on-dark-muted)",
      paddingTop: "var(--space-20)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(240px,1.2fr) repeat(auto-fit,minmax(150px,1fr))",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "light",
    size: 20
  }), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-s)",
      lineHeight: "var(--lh-body)",
      maxWidth: "34ch"
    }
  }, blurb) : null, social.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, social.map(s => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: s.label,
    icon: s.icon,
    label: s.label,
    href: s.href,
    variant: "onDark",
    size: "sm"
  }))) : null), columns.map(col => /*#__PURE__*/React.createElement("nav", {
    key: col.title,
    "aria-label": col.title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      fontWeight: "var(--weight-medium)",
      marginBottom: "var(--space-5)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, col.links.map(l => {
    const label = typeof l === "string" ? l : l.label;
    const href = typeof l === "object" ? l.href : "#";
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        fontSize: "var(--size-body-s)",
        color: "var(--text-on-dark-muted)",
        textDecoration: "none"
      }
    }, label));
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      padding: "var(--space-6) 0",
      borderTop: "1px solid var(--border-dark)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: "rgba(255,255,255,.45)"
    }
  }, /*#__PURE__*/React.createElement("span", null, legal || "FACEU — research and innovation project"), /*#__PURE__*/React.createElement("span", null, "Accessibility \xB7 Privacy \xB7 Contact"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  onNavigate,
  tone = "light",
  cta,
  onSearch,
  sticky = true,
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? "sticky" : "static",
      top: 0,
      zIndex: 40,
      background: onDark ? "rgba(5,15,38,.82)" : "rgba(255,255,255,.88)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-subtle)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      height: "var(--header-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: onDark ? "light" : "dark",
    size: 19,
    showDescriptor: false,
    href: "#home"
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      marginLeft: "auto"
    }
  }, items.map(it => {
    const label = typeof it === "string" ? it : it.label;
    const isActive = active === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof it === "object" && it.href || "#",
      "aria-current": isActive ? "page" : undefined,
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body-s)",
        fontWeight: "var(--weight-medium)",
        textDecoration: "none",
        padding: "9px 13px",
        borderRadius: "var(--radius-pill)",
        color: isActive ? onDark ? "var(--gold-400)" : "var(--ink-900)" : onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
        background: isActive ? onDark ? "rgba(255,255,255,.07)" : "var(--surface-inset)" : "transparent",
        transition: "color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)"
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, onSearch ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search FACEU",
    variant: onDark ? "onDark" : "ghost",
    size: "sm",
    onClick: onSearch
  }) : null, cta || /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: onDark ? "primary" : "secondary"
  }, "Resources"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function SearchDialog({
  open,
  onClose,
  go
}) {
  const {
    Modal,
    SearchField,
    Tag,
    Icon
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [q, setQ] = React.useState("mapper");
  const results = [];
  D.tools.forEach(t => {
    if ((t.name + t.shortDescription).toLowerCase().includes(q.toLowerCase())) results.push({
      type: "Tool",
      title: t.name,
      note: t.category + " · " + t.version,
      go: () => go("Tool", t.slug)
    });
  });
  D.tools.forEach(t => t.manuals.forEach(m => {
    if ((m.title + m.type).toLowerCase().includes(q.toLowerCase())) results.push({
      type: "Manual",
      title: m.title + " — " + m.version,
      note: m.format + " · " + m.fileSize,
      go: () => go("Resources")
    });
  }));
  D.publications.forEach(p => {
    if (p.title.toLowerCase().includes(q.toLowerCase())) results.push({
      type: "Publication",
      title: p.title,
      note: p.venue + " · " + p.year,
      go: () => go("Resources")
    });
  });
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    width: 720,
    title: "Search FACEU",
    description: "Tools, manuals, publications and people \u2014 results state their content type."
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    scopes: ["Everything", "Tools", "Manuals", "Publications", "People"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: 320,
      overflowY: "auto"
    }
  }, results.length ? results.slice(0, 8).map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => {
      r.go();
      onClose();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      textAlign: "left",
      cursor: "pointer",
      background: "none",
      border: "none",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    tone: r.type === "Tool" ? "gold" : r.type === "Manual" ? "signal" : "neutral"
  }, r.type), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-strong)"
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-meta)",
      color: "var(--text-faint)"
    }
  }, r.note)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      color: "var(--text-faint)"
    }
  }))) : /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "var(--space-6) 0",
      fontSize: "var(--size-body-s)",
      color: "var(--text-muted)"
    }
  }, "Nothing matches \u201C", q, "\u201D.")));
}
function App() {
  const {
    SiteHeader,
    Button
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [page, setPage] = React.useState("Home");
  const [slug, setSlug] = React.useState(D.tools[0].slug);
  const [search, setSearch] = React.useState(false);
  const go = (p, s) => {
    if (s) setSlug(s);
    setPage(p);
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  const headerActive = page === "Tool" ? "Tools" : page;
  const dark = page === "Home";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SampleNotice, null), /*#__PURE__*/React.createElement(SiteHeader, {
    tone: dark ? "dark" : "light",
    items: D.nav,
    active: headerActive,
    onNavigate: l => go(l),
    onSearch: () => setSearch(true),
    cta: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: dark ? "primary" : "secondary",
      onClick: () => go("Resources")
    }, "Resources"),
    style: dark ? {
      background: "rgba(5,15,38,.72)"
    } : null
  }), /*#__PURE__*/React.createElement("main", null, page === "Home" && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    onSearch: () => setSearch(true)
  }), page === "Tools" && /*#__PURE__*/React.createElement(ToolsScreen, {
    go: go
  }), page === "Tool" && /*#__PURE__*/React.createElement(ToolDetailScreen, {
    slug: slug,
    go: go
  }), page === "Resources" && /*#__PURE__*/React.createElement(ResourcesScreen, {
    go: go
  }), (page === "Team" || page === "Contact") && /*#__PURE__*/React.createElement(TeamScreen, {
    go: go
  }), ["About", "Focus areas", "Research"].includes(page) && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    onSearch: () => setSearch(true)
  })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(SearchDialog, {
    open: search,
    onClose: () => setSearch(false),
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Sample content for the FACEU website UI kit.
   Tool names, versions, dates and figures are PLACEHOLDERS shaped like the real
   data model in the brief — replace with project data before publishing. */
window.FACEU_DATA = {
  nav: ["Home", "About", "Focus areas", "Tools", "Team", "Resources", "Research", "Contact"],
  focusAreas: [{
    title: "Field methodology",
    icon: "compass",
    description: "Protocols for collecting comparable data across sites and teams.",
    challenge: "Surveys are recorded differently by every group, so results cannot be compared.",
    tools: ["FACEU Mapper", "FACEU Survey Kit"]
  }, {
    title: "Assessment & criteria",
    icon: "clipboard-check",
    description: "Shared criteria that turn observations into a defensible score.",
    challenge: "Evaluations depend on the individual reviewer's judgement.",
    tools: ["FACEU Assess"]
  }, {
    title: "Open documentation",
    icon: "book-open",
    description: "Every instrument ships with a manual, a version history and a contact.",
    challenge: "Research tools are published without instructions and stop being used.",
    tools: ["FACEU Atlas"]
  }],
  tools: [{
    name: "FACEU Mapper",
    slug: "faceu-mapper",
    category: "Mapping",
    status: "stable",
    version: "v2.1",
    icon: "map",
    shortDescription: "Builds a structured map of the barriers recorded during field surveys.",
    purpose: "Give teams one consistent way to turn raw field observations into a comparable map, so results from different sites can be read side by side.",
    audience: "Researchers, graduate students and institutional teams applying the project's field protocol.",
    features: [{
      title: "Structured survey import",
      description: "Reads the CSV and spreadsheet exports produced by the field protocol."
    }, {
      title: "Criteria-based classification",
      description: "Applies the project's category set to every recorded observation."
    }, {
      title: "Versioned outputs",
      description: "Each export stores the parameters it was generated with."
    }, {
      title: "Shareable report",
      description: "Produces a PDF summary intended for institutional readers."
    }],
    steps: [{
      title: "Prepare the required information",
      description: "Collect the field survey in the format described in the manual."
    }, {
      title: "Access or configure the tool",
      description: "Open the tool and select the criteria set for your study."
    }, {
      title: "Execute the process",
      description: "The tool classifies each record and builds the map."
    }, {
      title: "Review the generated results",
      description: "Check flagged records before publishing anything."
    }, {
      title: "Export or interpret the information",
      description: "Export the report, or continue the analysis from the result table."
    }],
    useCases: ["Comparing two survey campaigns on the same site", "Preparing an institutional accessibility report", "Teaching the field protocol in a graduate course"],
    spec: [{
      label: "Platform",
      value: "Web (browser)"
    }, {
      label: "Technologies",
      value: "JavaScript, client-side processing"
    }, {
      label: "Requirements",
      value: "Modern browser · no installation"
    }, {
      label: "Supported formats",
      value: "CSV, XLSX in · PDF, CSV out"
    }, {
      label: "Version",
      value: "2.1 (March 2026)"
    }, {
      label: "Language",
      value: "Portuguese, English"
    }],
    manuals: [{
      title: "FACEU Mapper — User Manual",
      type: "User manual",
      version: "Version 2.1",
      language: "Portuguese",
      format: "PDF",
      fileSize: "4.2 MB",
      updatedAt: "March 2026",
      current: true
    }, {
      title: "FACEU Mapper — Technical Manual",
      type: "Technical manual",
      version: "Version 2.1",
      language: "English",
      format: "PDF",
      fileSize: "2.6 MB",
      updatedAt: "March 2026",
      current: true
    }, {
      title: "FACEU Mapper — Quick Start Guide",
      type: "Quick start guide",
      version: "Version 2.0",
      language: "Portuguese",
      format: "PDF",
      fileSize: "0.9 MB",
      updatedAt: "November 2025"
    }, {
      title: "FACEU Mapper — User Manual",
      type: "User manual",
      version: "Version 1.4",
      language: "Portuguese",
      format: "PDF",
      fileSize: "3.8 MB",
      updatedAt: "August 2025"
    }]
  }, {
    name: "FACEU Assess",
    slug: "faceu-assess",
    category: "Assessment",
    status: "beta",
    version: "v0.9",
    icon: "clipboard-check",
    shortDescription: "Scores an environment against the project's shared evaluation criteria.",
    manuals: [{
      title: "FACEU Assess — Quick Start Guide",
      type: "Quick start guide",
      version: "Version 0.9",
      language: "Portuguese",
      format: "PDF",
      fileSize: "1.1 MB",
      updatedAt: "February 2026",
      current: true
    }]
  }, {
    name: "FACEU Survey Kit",
    slug: "faceu-survey-kit",
    category: "Field work",
    status: "stable",
    version: "v1.3",
    icon: "clipboard-list",
    shortDescription: "Printable and digital forms for recording observations in the field.",
    manuals: [{
      title: "FACEU Survey Kit — User Manual",
      type: "User manual",
      version: "Version 1.3",
      language: "Portuguese",
      format: "PDF",
      fileSize: "5.4 MB",
      updatedAt: "January 2026",
      current: true
    }]
  }, {
    name: "FACEU Atlas",
    slug: "faceu-atlas",
    category: "Documentation",
    status: "stable",
    version: "v1.0",
    icon: "library",
    shortDescription: "Reference library of the project's criteria, definitions and sources.",
    manuals: [{
      title: "FACEU Atlas — User Manual",
      type: "User manual",
      version: "Version 1.0",
      language: "English",
      format: "PDF",
      fileSize: "2.2 MB",
      updatedAt: "December 2025",
      current: true
    }]
  }, {
    name: "FACEU Simulator",
    slug: "faceu-simulator",
    category: "Simulation",
    status: "development",
    version: "v0.4",
    icon: "cpu",
    shortDescription: "Models how a proposed intervention changes the recorded barriers.",
    manuals: []
  }, {
    name: "FACEU Index",
    slug: "faceu-index",
    category: "Analysis",
    status: "archived",
    version: "v1.1",
    icon: "bar-chart-3",
    shortDescription: "Earlier aggregate indicator, kept available for previously published studies.",
    manuals: [{
      title: "FACEU Index — User Manual",
      type: "User manual",
      version: "Version 1.1",
      language: "Portuguese",
      format: "PDF",
      fileSize: "1.7 MB",
      updatedAt: "May 2025"
    }]
  }],
  team: [{
    group: "Project coordination",
    members: [{
      name: "Coordinator name",
      role: "Project coordination",
      title: "PhD, Computer Engineering",
      institution: "Partner university",
      expertise: "Accessibility · human–computer interaction",
      links: [{
        icon: "graduation-cap",
        label: "Lattes"
      }, {
        icon: "circle-user",
        label: "ORCID"
      }]
    }, {
      name: "Co-coordinator name",
      role: "Scientific coordination",
      title: "PhD, Architecture & Urbanism",
      institution: "Partner university",
      expertise: "Built environment · universal design",
      links: [{
        icon: "graduation-cap",
        label: "Lattes"
      }]
    }]
  }, {
    group: "Researchers",
    members: [{
      name: "Researcher name",
      role: "Researcher",
      title: "MSc, Design",
      institution: "Research laboratory",
      expertise: "Field methodology",
      links: [{
        icon: "circle-user",
        label: "ORCID"
      }]
    }, {
      name: "Researcher name",
      role: "Researcher",
      title: "PhD candidate",
      institution: "Research laboratory",
      expertise: "Data analysis",
      links: [{
        icon: "graduation-cap",
        label: "Lattes"
      }]
    }, {
      name: "Researcher name",
      role: "Researcher",
      title: "MSc candidate",
      institution: "Research laboratory",
      expertise: "Assessment criteria",
      links: []
    }]
  }, {
    group: "Developers & students",
    members: [{
      name: "Developer name",
      role: "Developer",
      title: "BSc, Information Systems",
      institution: "Partner university",
      expertise: "Front-end · data pipelines",
      links: [{
        icon: "github",
        label: "Repository profile"
      }]
    }, {
      name: "Student name",
      role: "Undergraduate research",
      title: "Undergraduate, Design",
      institution: "Partner university",
      expertise: "Documentation",
      links: []
    }]
  }],
  publications: [{
    year: "2026",
    title: "Comparable field data in accessibility studies: a protocol and its tooling",
    authors: "Surname, N.; Surname, A.; Surname, R.",
    venue: "Conference name",
    type: "Conference paper",
    doi: "10.0000/faceu.2026.001",
    pdfHref: "#"
  }, {
    year: "2025",
    title: "Technical report on the FACEU assessment criteria",
    authors: "Surname, A.; Surname, N.",
    venue: "FACEU technical series",
    type: "Technical report",
    pdfHref: "#"
  }, {
    year: "2025",
    title: "Documenting research software so it stays usable",
    authors: "Surname, R.",
    venue: "Journal name",
    type: "Journal article",
    doi: "10.0000/faceu.2025.004",
    href: "#"
  }, {
    year: "2024",
    title: "Undergraduate research: field testing the survey kit",
    authors: "Surname, S.",
    venue: "Institutional research programme",
    type: "Undergraduate research",
    pdfHref: "#"
  }],
  news: [{
    date: "12 March 2026",
    tag: "Release",
    title: "FACEU Mapper 2.1 released",
    excerpt: "The report export format changed; version 1.x files remain readable."
  }, {
    date: "24 February 2026",
    tag: "Documentation",
    title: "Quick start guide for FACEU Assess",
    excerpt: "A four-page guide for teams running their first assessment."
  }, {
    date: "9 January 2026",
    tag: "Workshop",
    title: "Field protocol workshop with partner institutions",
    excerpt: "Two sessions covering the survey kit and the mapping workflow."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* Shared layout pieces for the FACEU website kit. Loaded as a plain Babel script. */
const NS = () => window.FACEUDesignSystem_27f931;
function Section({
  children,
  tone = "light",
  compact = false,
  id,
  style
}) {
  const bg = {
    light: "var(--surface-page)",
    subtle: "var(--surface-subtle)",
    dark: "var(--ink-900)",
    deep: "var(--ink-950)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingBlock: compact ? "var(--section-y-compact)" : "var(--section-y)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, children));
}
function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  children
}) {
  const {
    Breadcrumb
  } = NS();
  return /*#__PURE__*/React.createElement("div", {
    className: "faceu-grid-bg",
    style: {
      background: "var(--grad-hero)",
      paddingTop: "var(--space-12)",
      paddingBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, breadcrumb ? /*#__PURE__*/React.createElement(Breadcrumb, {
    tone: "dark",
    items: breadcrumb,
    style: {
      marginBottom: "var(--space-8)"
    }
  }) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-eyebrow)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: "currentColor",
      transform: "rotate(45deg)"
    }
  }), eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-l)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--track-display)",
      color: "var(--text-on-dark)",
      margin: 0,
      maxWidth: "22ch"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      maxWidth: "58ch",
      fontSize: "var(--size-body-l)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-on-dark-muted)"
    }
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, children) : null));
}
function SampleNotice() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gold-50)",
      borderBottom: "1px solid var(--gold-300)",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--track-meta)",
      textTransform: "uppercase",
      color: "var(--gold-700)",
      textAlign: "center",
      padding: "7px 16px"
    }
  }, "UI kit \xB7 tool names, versions and figures are placeholder content");
}
function Footer() {
  const {
    SiteFooter
  } = NS();
  return /*#__PURE__*/React.createElement(SiteFooter, {
    blurb: "FACEU is a research and innovation project developing and sharing practical tools, methodologies and resources.",
    columns: [{
      title: "Project",
      links: ["About FACEU", "Focus areas", "Team", "Partners"]
    }, {
      title: "Resources",
      links: ["Tools", "Manuals", "Publications", "News"]
    }, {
      title: "Contact",
      links: ["General enquiries", "Research collaboration", "Technical support"]
    }],
    social: [{
      icon: "linkedin",
      label: "LinkedIn"
    }, {
      icon: "github",
      label: "Code repository"
    }, {
      icon: "mail",
      label: "Email the project"
    }],
    legal: "FACEU \u2014 research and innovation project \xB7 sample site"
  });
}
Object.assign(window, {
  Section,
  PageHeader,
  SampleNotice,
  Footer,
  FACEU_NS: NS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HomeScreen({
  go,
  onSearch
}) {
  const {
    Button,
    Card,
    Tag,
    SectionHeading,
    Stat,
    ToolCard,
    DocumentCard,
    Icon,
    Accordion
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const featured = D.tools.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "faceu-grid-bg",
    style: {
      background: "var(--grad-hero)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "calc(var(--space-24)) var(--gutter) var(--space-20)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-dark)",
      background: "rgba(255,255,255,.05)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: "currentColor",
      transform: "rotate(45deg)"
    }
  }), "Research & innovation project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-6)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-xl)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--track-display)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-on-dark)"
    }
  }, "Research you can", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "actually use")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      maxWidth: "52ch",
      fontSize: "var(--size-body-l)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-on-dark-muted)"
    }
  }, "FACEU develops methodologies and builds the tools that put them to work \u2014 each one documented, versioned and free to download for the teams that need them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    chip: true,
    iconAfter: "arrow-right",
    onClick: () => go("Tools")
  }, "View the tools"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "onDark",
    onClick: () => go("About")
  }, "Explore the project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: "var(--text-on-dark-muted)"
    },
    onClick: () => go("Team")
  }, "Meet the team"))), /*#__PURE__*/React.createElement(Card, {
    tone: "hero",
    padding: "var(--space-6)",
    style: {
      boxShadow: "var(--shadow-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    }
  }, "Latest documentation"), /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18,
    style: {
      color: "var(--text-on-dark-muted)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, D.tools.slice(0, 3).map(t => /*#__PURE__*/React.createElement("button", {
    key: t.slug,
    onClick: () => go("Tool", t.slug),
    style: {
      textAlign: "left",
      cursor: "pointer",
      background: "rgba(255,255,255,.04)",
      border: "1px solid var(--border-dark)",
      borderRadius: "var(--radius-sm)",
      padding: "var(--space-4)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 18,
    style: {
      color: "var(--gold-400)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-on-dark)"
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-meta)",
      color: "var(--text-on-dark-muted)"
    }
  }, t.manuals.length ? t.manuals[0].type + " · " + t.manuals[0].format + " · " + t.manuals[0].fileSize : "Documentation in preparation")), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      color: "var(--text-on-dark-muted)"
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "onDark",
    fullWidth: true,
    style: {
      marginTop: "var(--space-5)"
    },
    onClick: () => go("Resources")
  }, "Open the documentation library"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-dark)",
      background: "rgba(5,15,38,.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))"
    }
  }, [["Tools", "wrench", "6 instruments, documented"], ["Resources", "folder-open", "Manuals and guides"], ["Research", "book-marked", "Papers and reports"], ["Contact", "mail", "Collaborate with us"]].map(([label, icon, note], i) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => go(label),
    style: {
      cursor: "pointer",
      background: "none",
      border: "none",
      borderLeft: i ? "1px solid var(--border-dark)" : "none",
      padding: "var(--space-6) var(--space-5)",
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    style: {
      color: "var(--gold-400)"
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-body-s)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-on-dark)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-meta)",
      color: "var(--text-on-dark-muted)"
    }
  }, note))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About FACEU",
    title: "A project, not a product",
    description: "FACEU exists because research outputs rarely survive the end of a study: the method is published, the instrument is not, and the next team starts over.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => go("About")
    }, "Read about the project")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, [["Objective", "Turn the project's methodology into instruments other teams can pick up and apply."], ["Research focus", "Comparable field data, shared assessment criteria, and documentation that keeps tools usable."], ["Who it serves", "Researchers, students, institutional teams and partner organisations."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "subtle",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "var(--size-body-m)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Focus areas",
    title: "Three lines of work",
    description: "Each area states the problem it addresses and the instruments that came out of it."
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: D.focusAreas.map(a => ({
      title: a.title,
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
          gap: "var(--space-8)"
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: "var(--size-body-m)",
          lineHeight: "var(--lh-body)",
          color: "var(--text-body)"
        }
      }, a.description), /*#__PURE__*/React.createElement("p", {
        style: {
          marginTop: "var(--space-4)",
          fontSize: "var(--size-body-s)",
          color: "var(--text-muted)"
        }
      }, /*#__PURE__*/React.createElement("strong", {
        style: {
          color: "var(--text-strong)"
        }
      }, "Challenge \u2014 "), a.challenge)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "var(--track-eyebrow)",
          textTransform: "uppercase",
          color: "var(--text-accent)"
        }
      }, "Related tools"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "var(--space-2)",
          flexWrap: "wrap",
          marginTop: "var(--space-3)"
        }
      }, a.tools.map(t => /*#__PURE__*/React.createElement(Tag, {
        key: t,
        tone: "gold",
        size: "sm"
      }, t)))))
    }))
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Tools and solutions",
    title: "Instruments built inside the project",
    description: "Every tool has a detail page, a current version and a manual you can download without asking anyone.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => go("Tools")
    }, "All six tools")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, featured.map(t => /*#__PURE__*/React.createElement(ToolCard, _extends({
    key: t.slug
  }, t, {
    manualLabel: t.manuals.length ? "Manual" : null,
    onLearnMore: () => go("Tool", t.slug),
    onDownload: t.manuals.length ? () => go("Resources") : null
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "Tools published",
    note: "4 stable \xB7 1 beta \xB7 1 archived"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9",
    label: "Documents available",
    note: "manuals and guides"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4",
    label: "Publications",
    note: "papers and reports"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "7",
    label: "Project members",
    note: "across 3 categories"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Documentation",
    title: "Manuals are never more than one click away",
    description: "The library lists every document with its version, language, format and size, and keeps superseded versions available.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => go("Resources")
    }, "Open the library")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, D.tools[0].manuals.slice(0, 2).map((m, i) => /*#__PURE__*/React.createElement(DocumentCard, _extends({
    key: i
  }, m, {
    tool: D.tools[0].name,
    onDownload: () => {}
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Updates",
    title: "Latest from the project"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, D.news.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    tone: "light",
    interactive: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    tone: "signal"
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-meta)",
      color: "var(--text-faint)"
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--size-h4)"
    }
  }, n.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--size-body-s)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, n.excerpt))))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-m)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--track-display)",
      color: "var(--text-on-dark)"
    }
  }, "Working on something related?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      maxWidth: "52ch",
      fontSize: "var(--size-body-m)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-on-dark-muted)"
    }
  }, "Write to the project about research collaboration, institutional partnership, or support with any of the tools.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    chip: true,
    iconAfter: "arrow-right",
    onClick: () => go("Contact")
  }, "Contact the project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "onDark",
    onClick: onSearch
  }, "Search everything")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-resources.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ResourcesScreen({
  go
}) {
  const {
    DocumentCard,
    Select,
    Input,
    Tag,
    SectionHeading,
    Callout
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const all = D.tools.flatMap(t => t.manuals.map(m => ({
    ...m,
    tool: t.name,
    slug: t.slug
  })));
  const [tool, setTool] = React.useState("All tools");
  const [type, setType] = React.useState("All document types");
  const [lang, setLang] = React.useState("All languages");
  const [q, setQ] = React.useState("");
  const list = all.filter(m => (tool === "All tools" || m.tool === tool) && (type === "All document types" || m.type === type) && (lang === "All languages" || m.language === lang) && (!q || (m.title + " " + m.tool).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Resources",
    title: "Manuals and documentation library",
    description: "Every document published by the project, with its version, language, format and size. Superseded versions stay available.",
    breadcrumb: [{
      label: "Home",
      href: "#"
    }, {
      label: "Resources"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-3)",
      paddingBottom: "var(--space-8)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    size: "sm",
    placeholder: "Search documents",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: tool,
    onChange: e => setTool(e.target.value),
    options: ["All tools", ...D.tools.map(t => t.name)]
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: type,
    onChange: e => setType(e.target.value),
    options: ["All document types", "User manual", "Technical manual", "Quick start guide"]
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: lang,
    onChange: e => setLang(e.target.value),
    options: ["All languages", "Portuguese", "English"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: "var(--text-faint)"
    }
  }, list.length, " documents"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    tone: "gold"
  }, "PDF only"), /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "Current versions first"))), list.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, list.sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0)).map((m, i) => /*#__PURE__*/React.createElement(DocumentCard, _extends({
    key: i
  }, m, {
    onDownload: () => {}
  })))) : /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "No documents match these filters"
  }, "Reset the filters to see the full library."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Research",
    title: "Publications and reports",
    description: "Papers, technical reports and student research produced within the project.",
    align: "split"
  }), D.publications.map((p, i) => /*#__PURE__*/React.createElement(PublicationItemRow, {
    key: i,
    p: p
  })))));
}
function PublicationItemRow({
  p
}) {
  const {
    PublicationItem
  } = window.FACEUDesignSystem_27f931;
  return /*#__PURE__*/React.createElement(PublicationItem, p);
}
Object.assign(window, {
  ResourcesScreen,
  PublicationItemRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-resources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-team.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TeamScreen({
  go
}) {
  const {
    TeamCard,
    SectionHeading,
    Card,
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    Callout
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Team",
    title: "The people behind FACEU",
    description: "Coordination, researchers, developers and students working inside the project's research and development structure.",
    breadcrumb: [{
      label: "Home",
      href: "#"
    }, {
      label: "Team"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, D.team.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      marginBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    align: "left",
    eyebrow: g.group,
    title: g.group,
    style: {
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, g.members.map((m, i) => /*#__PURE__*/React.createElement(TeamCard, _extends({
    key: i
  }, m)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Partners",
    title: "Institutions involved",
    description: "Logos are shown only once the institution has authorised their use \u2014 until then, partners are listed in type."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-4)"
    }
  }, ["Partner university", "Research laboratory", "Funding agency", "Institutional partner"].map(p => /*#__PURE__*/React.createElement(Card, {
    key: p,
    tone: "subtle",
    padding: "var(--space-6)",
    style: {
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)"
    }
  }, p))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    compact: true,
    id: "contact"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Write to the project",
    description: "Research collaboration, institutional partnership, or technical support with any of the tools."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [["Tool support", "Questions about using a published tool or its manual."], ["Research collaboration", "Joint studies, field testing, co-authored publications."], ["Institutional partnership", "Universities, laboratories, agencies and public bodies."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "light",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-m)",
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: "var(--size-body-s)",
      color: "var(--text-muted)"
    }
  }, d)))), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    padding: "var(--space-8)"
  }, sent ? /*#__PURE__*/React.createElement(Callout, {
    tone: "success",
    title: "Message sent"
  }, "This is a UI kit \u2014 nothing was actually transmitted.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    htmlFor: "c-name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "Name Surname"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Institutional email",
    htmlFor: "c-mail",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-mail",
    type: "email",
    icon: "mail",
    placeholder: "name@institution.edu"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Subject",
    htmlFor: "c-sub",
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    id: "c-sub",
    options: ["General enquiry", "Tool support", "Research collaboration", "Institutional partnership"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    htmlFor: "c-msg",
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-msg",
    rows: 5,
    placeholder: "Tell us what you are working on"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "c-ok",
    label: "I agree to be contacted about this enquiry",
    description: "We reply within five working days.",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    chip: true,
    iconAfter: "arrow-right"
  }, "Send message")))))));
}
Object.assign(window, {
  TeamScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-tool-detail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ToolDetailScreen({
  slug,
  go
}) {
  const {
    Button,
    Card,
    Tag,
    StatusBadge,
    NavTabs,
    FeatureList,
    ProcessSteps,
    SpecTable,
    DocumentCard,
    Callout,
    PublicationItem,
    Icon,
    SectionHeading
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const tool = D.tools.find(t => t.slug === slug) || D.tools[0];
  const [tab, setTab] = React.useState("Overview");
  const current = tool.manuals.filter(m => m.current);
  const older = tool.manuals.filter(m => !m.current);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumb: [{
      label: "Home",
      href: "#"
    }, {
      label: "Tools",
      href: "#tools"
    }, {
      label: tool.name
    }],
    eyebrow: tool.category,
    title: tool.name,
    description: tool.shortDescription
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    chip: true,
    iconAfter: "arrow-down",
    onClick: () => setTab("Documentation")
  }, current.length ? "Download " + tool.name.toLowerCase() + " manual" : "Documentation in preparation"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: tool.status
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-body-s)",
      letterSpacing: "var(--track-meta)",
      color: "var(--text-on-dark-muted)"
    }
  }, tool.version))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-subtle)",
      position: "sticky",
      top: "var(--header-h)",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-5) var(--gutter) 0"
    }
  }, /*#__PURE__*/React.createElement(NavTabs, {
    items: [{
      label: "Overview"
    }, {
      label: "How it works"
    }, {
      label: "Technical"
    }, {
      label: "Documentation",
      count: tool.manuals.length
    }],
    active: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, tab === "Overview" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h2)"
    }
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      maxWidth: "var(--measure-prose)",
      fontSize: "var(--size-body-l)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, tool.purpose || tool.shortDescription)), tool.audience ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)"
    }
  }, "Who it is for"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      maxWidth: "var(--measure-prose)",
      fontSize: "var(--size-body-m)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, tool.audience)) : null, tool.features ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      marginBottom: "var(--space-6)"
    }
  }, "Key features"), /*#__PURE__*/React.createElement(FeatureList, {
    columns: 2,
    items: tool.features
  })) : null, tool.useCases ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      marginBottom: "var(--space-5)"
    }
  }, "Applications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, tool.useCases.map(u => /*#__PURE__*/React.createElement("div", {
    key: u,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      paddingBottom: "var(--space-3)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "corner-down-right",
    size: 16,
    style: {
      color: "var(--gold-600)",
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-m)",
      color: "var(--text-body)"
    }
  }, u))))) : null), tab === "How it works" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h2)",
      marginBottom: "var(--space-4)"
    }
  }, "How it works"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure-prose)",
      fontSize: "var(--size-body-m)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-8)"
    }
  }, "Five steps, in the order the manual describes them. Interface previews are added here once screenshots are available."), /*#__PURE__*/React.createElement(ProcessSteps, {
    columns: 2,
    steps: tool.steps || []
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    padding: "var(--space-6)",
    style: {
      marginTop: "var(--space-8)",
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Interface screenshot pending")), tab === "Technical" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h2)",
      marginBottom: "var(--space-6)"
    }
  }, "Technical information"), /*#__PURE__*/React.createElement(SpecTable, {
    rows: tool.spec || [{
      label: "Version",
      value: tool.version
    }, {
      label: "Status",
      value: tool.status
    }]
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "warning",
    title: "Beta tool",
    style: {
      marginTop: "var(--space-8)",
      display: tool.status === "beta" ? "flex" : "none"
    }
  }, "Results should be reviewed before being used in published work.")), tab === "Documentation" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h2)",
      marginBottom: "var(--space-6)"
    }
  }, "Documentation"), current.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, current.map((m, i) => /*#__PURE__*/React.createElement(DocumentCard, _extends({
    key: i
  }, m, {
    tool: tool.name,
    onDownload: () => {}
  })))) : /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "Documentation in preparation"
  }, "The manual for this tool has not been published yet. Contact the project for the current draft."), older.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h4)",
      margin: "var(--space-10) 0 var(--space-5)"
    }
  }, "Version history"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, older.map((m, i) => /*#__PURE__*/React.createElement(DocumentCard, _extends({
    key: i
  }, m, {
    tool: tool.name,
    onDownload: () => {}
  }))))) : null, /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: "Version note",
    style: {
      marginTop: "var(--space-8)"
    }
  }, "Superseded versions stay online \u2014 published studies keep referring to them.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    align: "left",
    eyebrow: "Related research",
    title: "Where this tool comes from",
    style: {
      marginBottom: "var(--space-4)"
    }
  }), D.publications.slice(0, 2).map((p, i) => /*#__PURE__*/React.createElement(PublicationItem, _extends({
    key: i
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      position: "sticky",
      top: "calc(var(--header-h) + 80px)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "Documentation"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, tool.manuals.length ? tool.manuals.filter(m => m.current).map((m, i) => /*#__PURE__*/React.createElement(Button, {
    key: i,
    variant: i ? "outline" : "primary",
    size: "sm",
    icon: "download",
    fullWidth: true,
    onClick: () => setTab("Documentation")
  }, m.type)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-s)",
      color: "var(--text-muted)"
    }
  }, "Not yet published.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-meta)",
      color: "var(--text-faint)"
    }
  }, tool.manuals.length ? tool.manuals[0].format + " · " + tool.manuals[0].fileSize + " · updated " + tool.manuals[0].updatedAt : "—")), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "At a glance"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      fontSize: "var(--size-body-s)"
    }
  }, [["Category", tool.category], ["Status", tool.status], ["Version", tool.version], ["Documents", String(tool.manuals.length)]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      paddingBottom: "var(--space-3)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      fontWeight: "var(--weight-medium)",
      textTransform: k === "Status" ? "capitalize" : "none"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, tool.category), /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    tone: "signal"
  }, "Project resource"))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: () => go("Tools")
  }, "All tools")))));
}
Object.assign(window, {
  ToolDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-tool-detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-tools.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ToolsScreen({
  go
}) {
  const {
    ToolCard,
    Tag,
    Input,
    Select,
    Callout
  } = window.FACEUDesignSystem_27f931;
  const D = window.FACEU_DATA;
  const [cat, setCat] = React.useState("All tools");
  const [status, setStatus] = React.useState("All statuses");
  const [q, setQ] = React.useState("");
  const cats = ["All tools", ...Array.from(new Set(D.tools.map(t => t.category)))];
  const list = D.tools.filter(t => (cat === "All tools" || t.category === cat) && (status === "All statuses" || t.status === status.toLowerCase()) && (!q || (t.name + " " + t.shortDescription).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Tools and solutions",
    title: "Six instruments, each with its own manual",
    description: "Tools developed inside FACEU and distributed for use by other research and institutional teams. Nothing here is a commercial product.",
    breadcrumb: [{
      label: "Home",
      href: "#"
    }, {
      label: "Tools"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "var(--space-8)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    interactive: true,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    size: "sm",
    placeholder: "Search tools",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      minWidth: 220
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: status,
    onChange: e => setStatus(e.target.value),
    options: ["All statuses", "Stable", "Beta", "Development", "Archived"]
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-meta)",
      letterSpacing: "var(--track-meta)",
      color: "var(--text-faint)",
      margin: "var(--space-6) 0"
    }
  }, list.length, " ", list.length === 1 ? "tool" : "tools", cat === "All tools" ? "" : " in " + cat), list.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, list.map(t => /*#__PURE__*/React.createElement(ToolCard, _extends({
    key: t.slug
  }, t, {
    manualLabel: t.manuals.length ? "Manual" : null,
    onLearnMore: () => go("Tool", t.slug),
    onDownload: t.manuals.length ? () => go("Tool", t.slug) : null
  })))) : /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "No tools match these filters"
  }, "Clear the search field or choose another category.")));
}
Object.assign(window, {
  ToolsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-tools.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.DocumentCard = __ds_scope.DocumentCard;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.ProcessSteps = __ds_scope.ProcessSteps;

__ds_ns.PublicationItem = __ds_scope.PublicationItem;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.ToolCard = __ds_scope.ToolCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavTabs = __ds_scope.NavTabs;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
