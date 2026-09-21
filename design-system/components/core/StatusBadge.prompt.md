Lifecycle state for a tool or a manual version — square-ish (4px) so it never reads as a button.

```jsx
<StatusBadge status="stable" />
<StatusBadge status="current" label="Current version" />
```

One badge per object. Pair with a mono version string (`v2.1`) rather than putting the version inside the badge.
