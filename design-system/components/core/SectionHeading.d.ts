import * as React from "react";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono uppercase kicker with the diamond marker, e.g. "TOOLS". */
  eyebrow?: string;
  title: React.ReactNode;
  /** Sits in the right-hand column in "split" alignment. */
  description?: React.ReactNode;
  align?: "split" | "left" | "center";
  tone?: "light" | "dark";
  /** Heading level to render — keep the document hierarchy correct. */
  level?: 2 | 3;
  /** Optional Button/link node under the description. */
  action?: React.ReactNode;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
