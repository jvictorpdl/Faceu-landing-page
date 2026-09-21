import * as React from "react";

/**
 * FACEU's action primitive: pill-shaped, gold gradient for the single primary action per view.
 * @startingPoint section="Core" subtitle="Pill buttons, gold gradient primary" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** primary = gold gradient (one per view) · secondary = navy solid · outline = bordered on light · ghost = bare · onDark = translucent on navy. */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "onDark";
  size?: "sm" | "md" | "lg";
  /** Renders as an <a> when set. */
  href?: string;
  /** Lucide name, leading. */
  icon?: string;
  /** Lucide name, trailing. */
  iconAfter?: string;
  /** Wraps the trailing icon in the FACEU circular chip (hero/CTA buttons). */
  chip?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
