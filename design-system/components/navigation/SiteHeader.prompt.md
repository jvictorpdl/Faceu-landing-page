Primary navigation. 72px tall, translucent with a 14px blur, one hairline rule underneath.

```jsx
<SiteHeader tone="dark" items={["Home","About","Focus areas","Tools","Team","Resources","Research","Contact"]} active="Tools" onNavigate={go} onSearch={open} />
```

Use `tone="dark"` over a navy hero, `tone="light"` on interior pages. Active item gets a filled pill plus `aria-current="page"`. Keep Tools and Resources visible at every breakpoint.
