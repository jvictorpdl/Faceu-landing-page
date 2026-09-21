import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading Lucide glyph inside the field. */
  icon?: string;
  invalid?: boolean;
  size?: "sm" | "md";
  /** "dark" for navy sections (newsletter band, dark hero). */
  tone?: "light" | "dark";
}
export declare function Input(props: InputProps): JSX.Element;
