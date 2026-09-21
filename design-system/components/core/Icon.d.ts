import * as React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, kebab ("arrow-right") or Pascal ("ArrowRight"). */
  name: string;
  /** Square px size. Default 20. */
  size?: number;
  /** Lucide stroke width. FACEU uses 1.75 at body scale, 1.5 at 32px+. */
  strokeWidth?: number;
  /** Defaults to currentColor. */
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
