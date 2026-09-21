/* Sample content for the FACEU website UI kit.
   Tool names, versions, dates and figures are PLACEHOLDERS shaped like the real
   data model in the brief — replace with project data before publishing. */
window.FACEU_DATA = {
  nav: ["Home", "About", "Focus areas", "Tools", "Team", "Resources", "Research", "Contact"],
  focusAreas: [
    { title: "Field methodology", icon: "compass", description: "Protocols for collecting comparable data across sites and teams.", challenge: "Surveys are recorded differently by every group, so results cannot be compared.", tools: ["FACEU Mapper", "FACEU Survey Kit"] },
    { title: "Assessment & criteria", icon: "clipboard-check", description: "Shared criteria that turn observations into a defensible score.", challenge: "Evaluations depend on the individual reviewer's judgement.", tools: ["FACEU Assess"] },
    { title: "Open documentation", icon: "book-open", description: "Every instrument ships with a manual, a version history and a contact.", challenge: "Research tools are published without instructions and stop being used.", tools: ["FACEU Atlas"] }
  ],
  tools: [
    { name: "FACEU Mapper", slug: "faceu-mapper", category: "Mapping", status: "stable", version: "v2.1", icon: "map",
      shortDescription: "Builds a structured map of the barriers recorded during field surveys.",
      purpose: "Give teams one consistent way to turn raw field observations into a comparable map, so results from different sites can be read side by side.",
      audience: "Researchers, graduate students and institutional teams applying the project's field protocol.",
      features: [
        { title: "Structured survey import", description: "Reads the CSV and spreadsheet exports produced by the field protocol." },
        { title: "Criteria-based classification", description: "Applies the project's category set to every recorded observation." },
        { title: "Versioned outputs", description: "Each export stores the parameters it was generated with." },
        { title: "Shareable report", description: "Produces a PDF summary intended for institutional readers." }
      ],
      steps: [
        { title: "Prepare the required information", description: "Collect the field survey in the format described in the manual." },
        { title: "Access or configure the tool", description: "Open the tool and select the criteria set for your study." },
        { title: "Execute the process", description: "The tool classifies each record and builds the map." },
        { title: "Review the generated results", description: "Check flagged records before publishing anything." },
        { title: "Export or interpret the information", description: "Export the report, or continue the analysis from the result table." }
      ],
      useCases: ["Comparing two survey campaigns on the same site", "Preparing an institutional accessibility report", "Teaching the field protocol in a graduate course"],
      spec: [
        { label: "Platform", value: "Web (browser)" },
        { label: "Technologies", value: "JavaScript, client-side processing" },
        { label: "Requirements", value: "Modern browser · no installation" },
        { label: "Supported formats", value: "CSV, XLSX in · PDF, CSV out" },
        { label: "Version", value: "2.1 (March 2026)" },
        { label: "Language", value: "Portuguese, English" }
      ],
      manuals: [
        { title: "FACEU Mapper — User Manual", type: "User manual", version: "Version 2.1", language: "Portuguese", format: "PDF", fileSize: "4.2 MB", updatedAt: "March 2026", current: true },
        { title: "FACEU Mapper — Technical Manual", type: "Technical manual", version: "Version 2.1", language: "English", format: "PDF", fileSize: "2.6 MB", updatedAt: "March 2026", current: true },
        { title: "FACEU Mapper — Quick Start Guide", type: "Quick start guide", version: "Version 2.0", language: "Portuguese", format: "PDF", fileSize: "0.9 MB", updatedAt: "November 2025" },
        { title: "FACEU Mapper — User Manual", type: "User manual", version: "Version 1.4", language: "Portuguese", format: "PDF", fileSize: "3.8 MB", updatedAt: "August 2025" }
      ]
    },
    { name: "FACEU Assess", slug: "faceu-assess", category: "Assessment", status: "beta", version: "v0.9", icon: "clipboard-check",
      shortDescription: "Scores an environment against the project's shared evaluation criteria.",
      manuals: [{ title: "FACEU Assess — Quick Start Guide", type: "Quick start guide", version: "Version 0.9", language: "Portuguese", format: "PDF", fileSize: "1.1 MB", updatedAt: "February 2026", current: true }] },
    { name: "FACEU Survey Kit", slug: "faceu-survey-kit", category: "Field work", status: "stable", version: "v1.3", icon: "clipboard-list",
      shortDescription: "Printable and digital forms for recording observations in the field.",
      manuals: [{ title: "FACEU Survey Kit — User Manual", type: "User manual", version: "Version 1.3", language: "Portuguese", format: "PDF", fileSize: "5.4 MB", updatedAt: "January 2026", current: true }] },
    { name: "FACEU Atlas", slug: "faceu-atlas", category: "Documentation", status: "stable", version: "v1.0", icon: "library",
      shortDescription: "Reference library of the project's criteria, definitions and sources.",
      manuals: [{ title: "FACEU Atlas — User Manual", type: "User manual", version: "Version 1.0", language: "English", format: "PDF", fileSize: "2.2 MB", updatedAt: "December 2025", current: true }] },
    { name: "FACEU Simulator", slug: "faceu-simulator", category: "Simulation", status: "development", version: "v0.4", icon: "cpu",
      shortDescription: "Models how a proposed intervention changes the recorded barriers.",
      manuals: [] },
    { name: "FACEU Index", slug: "faceu-index", category: "Analysis", status: "archived", version: "v1.1", icon: "bar-chart-3",
      shortDescription: "Earlier aggregate indicator, kept available for previously published studies.",
      manuals: [{ title: "FACEU Index — User Manual", type: "User manual", version: "Version 1.1", language: "Portuguese", format: "PDF", fileSize: "1.7 MB", updatedAt: "May 2025" }] }
  ],
  team: [
    { group: "Project coordination", members: [
      { name: "Coordinator name", role: "Project coordination", title: "PhD, Computer Engineering", institution: "Partner university", expertise: "Accessibility · human–computer interaction", links: [{ icon: "graduation-cap", label: "Lattes" }, { icon: "circle-user", label: "ORCID" }] },
      { name: "Co-coordinator name", role: "Scientific coordination", title: "PhD, Architecture & Urbanism", institution: "Partner university", expertise: "Built environment · universal design", links: [{ icon: "graduation-cap", label: "Lattes" }] }
    ]},
    { group: "Researchers", members: [
      { name: "Researcher name", role: "Researcher", title: "MSc, Design", institution: "Research laboratory", expertise: "Field methodology", links: [{ icon: "circle-user", label: "ORCID" }] },
      { name: "Researcher name", role: "Researcher", title: "PhD candidate", institution: "Research laboratory", expertise: "Data analysis", links: [{ icon: "graduation-cap", label: "Lattes" }] },
      { name: "Researcher name", role: "Researcher", title: "MSc candidate", institution: "Research laboratory", expertise: "Assessment criteria", links: [] }
    ]},
    { group: "Developers & students", members: [
      { name: "Developer name", role: "Developer", title: "BSc, Information Systems", institution: "Partner university", expertise: "Front-end · data pipelines", links: [{ icon: "github", label: "Repository profile" }] },
      { name: "Student name", role: "Undergraduate research", title: "Undergraduate, Design", institution: "Partner university", expertise: "Documentation", links: [] }
    ]}
  ],
  publications: [
    { year: "2026", title: "Comparable field data in accessibility studies: a protocol and its tooling", authors: "Surname, N.; Surname, A.; Surname, R.", venue: "Conference name", type: "Conference paper", doi: "10.0000/faceu.2026.001", pdfHref: "#" },
    { year: "2025", title: "Technical report on the FACEU assessment criteria", authors: "Surname, A.; Surname, N.", venue: "FACEU technical series", type: "Technical report", pdfHref: "#" },
    { year: "2025", title: "Documenting research software so it stays usable", authors: "Surname, R.", venue: "Journal name", type: "Journal article", doi: "10.0000/faceu.2025.004", href: "#" },
    { year: "2024", title: "Undergraduate research: field testing the survey kit", authors: "Surname, S.", venue: "Institutional research programme", type: "Undergraduate research", pdfHref: "#" }
  ],
  news: [
    { date: "12 March 2026", tag: "Release", title: "FACEU Mapper 2.1 released", excerpt: "The report export format changed; version 1.x files remain readable." },
    { date: "24 February 2026", tag: "Documentation", title: "Quick start guide for FACEU Assess", excerpt: "A four-page guide for teams running their first assessment." },
    { date: "9 January 2026", tag: "Workshop", title: "Field protocol workshop with partner institutions", excerpt: "Two sessions covering the survey kit and the mapping workflow." }
  ]
};
