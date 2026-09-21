import * as React from "react";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lifecycle state of a tool or document version. */
  status?: "stable" | "beta" | "development" | "archived" | "current";
  /** Overrides the default label text. */
  label?: string;
  dot?: boolean;
}
export declare function StatusBadge(props: StatusBadgeProps): JSX.Element;
