# FACEU Design System

FACEU is a research and innovation project. Its website is the project's official digital hub *and* a structured
resource centre: it explains what the project is, who is behind it, and — crucially — it publishes every tool the
team develops together with the manuals needed to use them.

This design system exists so that any page, deck or prototype made for FACEU reads as the same institution:
**academically credible, technically confident, organised, accessible**.

## What this system is built from

| Source | What it gave us |
| --- | --- |
| Written brief (project description, site structure, tool/manual data model, visual direction) | Information architecture, content model, tone, accessibility and SEO requirements |
| `uploads/behance_255049507_01.jpg` | Institutional/academic reference: navy hero, card-based news & events, editorial "who we are" split, statistics band, faculty grid |
| `uploads/behance_255756743_01.jpg`, `_02.jpg`, `_03.jpg` | Primary aesthetic reference (an IP-firm website redesign concept): deep navy + gold palette, heavy geometric display type, technological line graphics, pill buttons with a circular arrow chip, mono metadata chips, hairline cards, alternating navy / paper sections |

**No FACEU logo, font binaries, photography, screenshots or real project data were supplied.** Everything in this
system that would normally come from those assets is either (a) a labelled placeholder, or (b) a flagged substitution.
See *Gaps & substitutions* at the end.

---

## CONTENT FUNDAMENTALS

**Voice.** A research group explaining its own work to peers and to the public. Plain, specific, unhurried. It states
a problem, then what the project built about it. It never sells.

**Person.** The project is "FACEU" or "the project" in body copy; "we" only in direct address (contact, collaboration).
The reader is "you" in instructions ("Prepare the information the tool expects"), never in slogans.

**Casing.** Sentence case everywhere — headings, buttons, card titles, nav. UPPERCASE is reserved for mono metadata:
eyebrows (`TOOLS AND SOLUTIONS`), categories (`MAPPING`), statuses (`STABLE`), document types (`USER MANUAL`).
Never title case. Never all-caps sentences.

**Length.** Display headlines 3–6 words. Section descriptions one sentence, ≤ 25 words. Card copy one to two
sentences. Tool "purpose" one short paragraph.

**Numbers and claims.** Only evidenced figures appear. If the project cannot evidence a number, the figure — or the
whole band — is omitted rather than estimated. No "trusted by", no growth language, no awards that were not given.

**Labels do the work.** Actions name their object: *Download FACEU Mapper user manual*, *View all six tools*,
*Read about the project*. A bare "Download", "Click here" or "Learn more →" with no subject is a defect.

**Metadata is copy.** A document is never just a link: type · version · language · format · size · updated date, in
that order, in mono. Same for tools: category · status · version.

**Examples**

> ```
> Eyebrow      TOOLS AND SOLUTIONS
> Headline     Instruments built inside the project
> Description  Every tool has a detail page, a current version and a manual you can download without asking anyone.
> Card title   FACEU Mapper
> Card body    Builds a structured map of the barriers recorded during field surveys.
> Meta         MAPPING · v2.1 · STABLE
> Action       Download FACEU Mapper user manual
> ```

> Version note (Callout): "Version 2.1 changes the report export format; files produced by 1.x remain readable."

**Not FACEU:** "Supercharge your research 🚀", "The #1 accessibility platform", "Get started free",
"Empowering innovation since…", emoji of any kind, exclamation marks.

---

## VISUAL FOUNDATIONS

**Palette.** Two voices on a neutral page. `--ink-*` deep academic navy is the brand ground (hero, figures band,
footer); `--gold-*` is the single accent (primary buttons, eyebrows, active states, stat figures); `--signal-*`
(teal-cyan) is the *technology* accent used sparingly — focus rings, feature markers, diagram strokes, "manual"
chips. Neutrals carry everything else. Maximum two background colours per page: paper (`--surface-page`) and one
navy band, with `--surface-subtle` for alternating sections. Status colours are functional only, never decorative.

**Type.** Display = Poppins (geometric, 600 weight, `-0.025em`, 1.04 leading) for headlines and numbers.
Body = IBM Plex Sans, 16px default, 1.6 leading, ≤ 68ch measure. Meta = IBM Plex Mono, 12px, wide tracking,
uppercase — eyebrows, tags, versions, file metadata, breadcrumbs, table captions. Three roles, no exceptions:
if it is data, it is mono; if it is a sentence, it is Plex Sans; if it is a headline, it is Poppins.

**Section rhythm.** Every section opens the same way: diamond ◆ + mono eyebrow, then a large display title on the
left, then one supporting sentence in a narrower right-hand column (`SectionHeading align="split"`). 96px vertical
section padding (64px compact), 1240px container, 24px gutter, 12-column grid.

**Backgrounds.** No photography is supplied, so structure carries the page: a radial navy wash (`--grad-hero`) for
hero and closing bands, and a 64px blueprint grid (`.faceu-grid-bg` / `.faceu-grid-bg-light`) at ~5% opacity as the
only decorative texture. Where imagery belongs, use a labelled placeholder ("Interface screenshot pending",
"Portrait pending") — never generated illustration, never stock-looking gradients. No repeating patterns, no noise,
no glassmorphism beyond the header blur.

**Gradients.** Exactly two: `--grad-gold` (103° gold, primary buttons only) and `--grad-hero` (radial navy).
`--grad-fade-dark` is a protection gradient for text over any future imagery. No purple, no rainbow, no mesh.

**Cards.** `--radius-lg` 14px, 1px `--border-subtle` hairline, white or `--surface-subtle` fill, **flat at rest**.
Shadow exists only as a hover response. Never a coloured left border. Navy cards use a 14%-white hairline instead.

**Radii.** 4px status badges & checkboxes · 6px inputs · 10px tiles/icon plates · 14px cards · 999px buttons, tags,
chips, avatars. Nothing else.

**Shadows.** `--shadow-xs/sm` for floating chrome, `--shadow-md` on card hover, `--shadow-lg` for dialogs,
`--shadow-dark` on navy, `--shadow-gold` as the primary button's hover glow. Inset hairlines (`--inset-hairline`)
rather than borders on swatches.

**Animation.** Restrained and short. 120ms for press and colour, 200ms for hover/tabs/fields, 320ms for panels.
Easing is `cubic-bezier(.2,.6,.25,1)` — a quick out, a soft settle. No bounce, no spring, no parallax, no autoplay
carousels. Entrances, if any, are a 520ms fade with an 8px rise, once. Everything collapses to 0ms under
`prefers-reduced-motion`.

**Hover states.** Cards: `translateY(-2px)` + `--shadow-md` + border darkens to `--border-strong`.
Primary button: brightness 1.04 + gold glow (never a colour change). Outline button: border and label go gold.
Ghost: fills with `--surface-inset`. Links: navy → gold, underline goes to full opacity. Nav items: filled pill.

**Press states.** `scale(.985)`, no colour shift. **Focus:** 2px `--signal-500` ring at 2px offset, always visible,
never removed. **Disabled:** 45% opacity, cursor `not-allowed`, no colour change.

**Borders & lines.** One hairline weight (1px `--border-subtle`) does almost all the work: card edges, table rows,
publication rows, tab rail, header underline. 2px is used only for the gold active-tab underline. Lists of
records (publications, documents) are separated by hairlines, not boxed in cards.

**Transparency & blur.** Only two places: the sticky header (82–88% ground + 14px blur) and the dialog scrim
(navy at 62% + 4px blur). Body text is never transparent — muted text uses a solid token so contrast is provable.

**Layout rules.** Sticky header (72px); tool-page tabs stick beneath it; the documentation sidebar sticks on tool
pages. Everything else scrolls. Content max-width 1240px; prose columns capped at 68ch.

**Imagery (when it arrives).** Cool-leaning, low-saturation, documentary — real field work, real screens, real
people. No warm filters, no grain overlays, no stock handshakes. Screenshots sit in a 14px-radius frame with a
hairline; photographs are full-bleed inside their container with no radius on section-width images.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) — 24px grid, outline, 1.75px stroke at body scale (1.5px at 32px+).
  Chosen as the closest match to the reference boards' thin, geometric line icons. **This is a substitution:**
  no icon assets were supplied. Flagged below.
- **Delivery:** CDN UMD, `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`. Every card and UI-kit page
  loads it; the `Icon` component reads `window.lucide`. No icon font, no sprite sheet, no PNG icons.
- **Usage:** icons are always decorative (`aria-hidden`) beside a real label. One glyph per control. Icon plates
  (46px, 10px radius, gold-soft fill + gold-300 hairline on light; 7%-white fill + white hairline on navy) stand in
  for per-tool identity until real tool marks exist.
- **Typical glyphs:** `map`, `clipboard-check`, `clipboard-list`, `library`, `cpu`, `bar-chart-3` (tools);
  `download`, `file-text`, `file-down` (documents); `arrow-right`, `chevron-right`, `chevron-down`, `search`,
  `external-link`, `plus`/`minus` (navigation); `graduation-cap`, `circle-user`, `linkedin`, `github` (profiles).
- **No emoji. No unicode pictographs.** The only non-letterform glyph drawn by the system is the 5px rotated
  square used as the eyebrow marker (◆), and it is a CSS box, not a character.
- **Do not hand-draw SVG** illustrations, diagrams or a logo. Diagrams are built from real layout primitives
  (boxes, hairlines, mono labels) or left as a labelled placeholder.

---

## Components

All components are exported on the compiled namespace (`window.<Namespace>`, see `check_design_system`). Each
directory carries a `@dsCard` specimen; each component has a `.d.ts` contract and a `.prompt.md` usage note.

**Brand** — `Wordmark`
**Core** (`components/core/`) — `Icon`, `Button`, `IconButton`, `Tag`, `StatusBadge`, `Card`, `SectionHeading`, `Stat`
**Forms** (`components/forms/`) — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `SearchField`
**Navigation** (`components/navigation/`) — `SiteHeader`, `NavTabs`, `Breadcrumb`, `SiteFooter`
**Catalog** (`components/catalog/`) — `ToolCard`, `DocumentCard`, `TeamCard`, `PublicationItem`, `ProcessSteps`, `FeatureList`, `SpecTable`, `Accordion`
**Feedback** (`components/feedback/`) — `Callout`, `Modal`

### Intentional additions
The brief defined no component library, so the inventory was derived from the required page structure. Two items
go slightly beyond a generic set and are deliberate: `Icon` (a wrapper so the icon set stays swappable) and
`Wordmark` (a typographic stand-in for the missing logo).

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single stylesheet consumers link — `@import` list only |
| `tokens/fonts.css` | Webfont loading (Google Fonts substitution — see below) |
| `tokens/colors.css` | Ink, gold, signal, neutral, status ramps + semantic aliases + gradients |
| `tokens/typography.css` | Font stacks, size/leading/tracking scales, measures |
| `tokens/spacing.css` | 4px spacing scale + layout constants |
| `tokens/radius.css`, `tokens/elevation.css`, `tokens/motion.css` | Radii, shadows, durations/easing |
| `tokens/base.css` | Element defaults, link colours, focus ring, `.faceu-*` helpers |
| `guidelines/*.html` | 20 foundation specimen cards (Colors · Type · Spacing · Brand) |
| `components/<group>/` | Components + `.d.ts` + `.prompt.md` + one `@dsCard` specimen per group |
| `ui_kits/website/` | Clickable 5-screen recreation of the FACEU website — see its `README.md` |
| `templates/tool-page/` | Design Component template for a single tool detail page |
| `SKILL.md` | Agent-skill entry point |

---

## Gaps & substitutions — please review

1. **Fonts are substitutions.** Poppins + IBM Plex Sans + IBM Plex Mono (Google Fonts, loaded by URL) were chosen
   to match the reference boards. No FACEU font files were supplied. Send licensed binaries and `tokens/fonts.css`
   becomes local `@font-face` rules.
2. **No logo.** `Wordmark` sets FACEU in type beside a gold "F" tile. Nothing was drawn or reconstructed.
3. **Icons are Lucide from CDN**, not a supplied set.
4. **All project data is placeholder** — tool names, versions, file sizes, dates, team names, publications and the
   figures band. Shapes match the brief's data model; values must be replaced.
5. **No imagery.** Portraits, tool screenshots and partner logos are labelled placeholders by design.
