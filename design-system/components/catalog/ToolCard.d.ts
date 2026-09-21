import * as React from "react";

/**
 * Catalog entry for one FACEU tool — the anchor of the Tools section.
 * @startingPoint section="Catalog" subtitle="Tool catalog card with status and manual action" viewport="700x340"
 */
export interface ToolCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** One or two sentences — what it does, not how it is built. */
  shortDescription: React.ReactNode;
  /** Single category label, e.g. "Mapping", "Assessment". */
  category?: string;
  status?: "stable" | "beta" | "development" | "archived";
  /** Mono version string, e.g. "v2.1". */
  version?: string;
  /** Lucide glyph standing in for the tool's identity. */
  icon?: string;
  tone?: "light" | "dark";
  /** Detail-page URL — /tools/<slug>. */
  href?: string;
  onLearnMore?: React.MouseEventHandler;
  onDownload?: React.MouseEventHandler;
  /** Descriptive label for the manual action, e.g. "User manual (PDF)". */
  manualLabel?: string;
}
export declare function ToolCard(props: ToolCardProps): JSX.Element;
