# FACEU website — UI kit

Clickable recreation of the FACEU digital hub, composed entirely from this design system's components.

## Screens
| File | Screen | Covers |
| --- | --- | --- |
| `screen-home.jsx` | Home | Navy hero + quick-link rail, About editorial, Focus areas (accordion), featured tools, figures band, documentation teaser, updates, contact band |
| `screen-tools.jsx` | Tools catalog | Category chips, text search, status filter, `ToolCard` grid, empty state |
| `screen-tool-detail.jsx` | `/tools/<slug>` | Tool header with status + version, sticky tabs (Overview · How it works · Technical · Documentation), features, steps, spec table, manual downloads with version history, related research, sticky documentation sidebar |
| `screen-resources.jsx` | `/resources` | Documentation library with tool / type / language filters, `DocumentCard` rows, publications list |
| `screen-team.jsx` | Team + Contact | Grouped `TeamCard`s, partner list in type, contact form with subject routing |
| `app.jsx` | Shell | Header/nav routing, global search dialog with typed results |
| `parts.jsx` | Layout | `Section`, `PageHeader`, `Footer`, sample-content notice |
| `data.js` | Content | The tool / manual / team / publication data model from the brief |

## How to run
Open `index.html`. It loads `styles.css`, the compiled `_ds_bundle.js`, Lucide (CDN) and the screens as Babel scripts.

## Content status
All tool names, versions, dates, file sizes and figures are **placeholders** shaped like the real data model — the brief supplied no tool inventory, team roster or metrics. Replace `data.js` before publishing. Portraits, screenshots and partner logos are deliberately left as labelled placeholders rather than invented.
