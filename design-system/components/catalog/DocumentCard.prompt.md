The download unit. Every document shows type, title, tool, version, language, format, size and update date **before** the click.

```jsx
<DocumentCard title="FACEU Mapper — User Manual" tool="FACEU Mapper" type="User manual" version="Version 2.1" language="Portuguese" format="PDF" fileSize="4.2 MB" updatedAt="March 2026" current />
```

The button label is generated descriptively ("Download FACEU Mapper user manual") — never a bare "Download". Superseded versions stay listed without `current`; they are never silently replaced.
