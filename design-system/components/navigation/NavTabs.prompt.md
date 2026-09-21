In-page section switcher — gold 2px underline on the active tab.

```jsx
<NavTabs items={[{label:"Overview"},{label:"Manuals",count:4},{label:"Technical"}]} active={tab} onChange={setTab} />
```

Use on tool detail pages and the resource library. For category filtering prefer `Tag interactive` chips.
