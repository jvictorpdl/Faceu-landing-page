import * as React from "react";

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "info" | "note" | "success" | "warning" | "danger";
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Overrides the tone's default Lucide glyph. */
  icon?: string;
  /** Optional Button/link under the text. */
  action?: React.ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;
