import * as React from "react";

export interface SelectOption { value: string; label: string }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  size?: "sm" | "md";
  invalid?: boolean;
}
export declare function Select(props: SelectProps): JSX.Element;
