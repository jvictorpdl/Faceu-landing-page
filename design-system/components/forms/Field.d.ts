import * as React from "react";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  /** Must match the control's id. */
  htmlFor?: string;
  hint?: React.ReactNode;
  /** Replaces the hint and is announced via role="alert". */
  error?: React.ReactNode;
  required?: boolean;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
