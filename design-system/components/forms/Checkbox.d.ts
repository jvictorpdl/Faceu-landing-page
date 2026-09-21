import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  /** Secondary line under the label. */
  description?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
