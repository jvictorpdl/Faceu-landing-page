Generic surface. Hairline border, 14px radius, flat at rest; shadow only appears on hover.

```jsx
<Card tone="subtle" padding="var(--space-8)">…</Card>
<Card tone="dark" href="/tools/mapper">…</Card>
```

Never stack a shadow on a resting card and never use a coloured left border. For catalog entries prefer `ToolCard` / `DocumentCard`, which are built on this.
