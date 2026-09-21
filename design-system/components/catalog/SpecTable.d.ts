import * as React from "react";

export interface SpecRow { label: string; value: React.ReactNode }

export interface SpecTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Technical information rows: platform, technologies, requirements, formats, version. */
  rows?: SpecRow[];
  /** Mono uppercase caption above the table. */
  caption?: string;
}
export declare function SpecTable(props: SpecTableProps): JSX.Element;
