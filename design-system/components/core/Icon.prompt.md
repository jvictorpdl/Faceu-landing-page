Renders a Lucide glyph; FACEU's only icon primitive — never inline hand-drawn SVG.

```jsx
<Icon name="download" size={18} />
<Icon name="arrow-right" size={24} strokeWidth={1.5} color="var(--gold-500)" />
```

Requires Lucide UMD on the page: `<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>`.
Icons are decorative (`aria-hidden`) — always give the surrounding control a real text label.
