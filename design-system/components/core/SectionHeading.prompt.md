Opens every section: diamond eyebrow, large display title left, supporting sentence right.

```jsx
<SectionHeading eyebrow="Tools" title="Instruments built inside the project" description="Each tool ships with a manual and a versioned changelog." action={<Button variant="outline">View all tools</Button>} />
```

Keep titles under ~6 words in 2–3 lines; `align="split"` is the house default, `align="left"` for narrow columns. Set `level={3}` for subsections so headings never skip a level.
