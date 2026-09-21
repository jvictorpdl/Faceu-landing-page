import * as React from "react";

export interface ProcessStep { title: string; description?: string }

/**
 * Numbered "How it works" grid — ordered list, mono 01…05 counters.
 * @startingPoint section="Catalog" subtitle="Numbered how-it-works grid" viewport="700x300"
 */
export interface ProcessStepsProps extends React.HTMLAttributes<HTMLOListElement> {
  steps?: ProcessStep[];
  /** Grid columns. 2 on tool pages, 4 in the wide how-it-works band. */
  columns?: 1 | 2 | 3 | 4;
  tone?: "light" | "dark";
}
export declare function ProcessSteps(props: ProcessStepsProps): JSX.Element;
