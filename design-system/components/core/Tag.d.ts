import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Optional leading Lucide glyph. */
  icon?: string;
  tone?: "neutral" | "gold" | "signal" | "onDark";
  size?: "sm" | "md";
  /** Renders a <button> — use for filter chips. */
  interactive?: boolean;
  selected?: boolean;
}
export declare function Tag(props: TagProps): JSX.Element;
