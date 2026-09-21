import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: string;
  /** Required accessible label — becomes aria-label + title. */
  label: string;
  variant?: "outline" | "solid" | "gold" | "ghost" | "onDark";
  size?: "sm" | "md" | "lg";
  href?: string;
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
