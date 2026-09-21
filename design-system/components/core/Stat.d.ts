import * as React from "react";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure itself — only use numbers the project can evidence. */
  value: React.ReactNode;
  label: React.ReactNode;
  /** Mono footnote, e.g. "since 2024". */
  note?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}
export declare function Stat(props: StatProps): JSX.Element;
