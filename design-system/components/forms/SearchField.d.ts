import * as React from "react";

/**
 * Global search bar: pill container, optional content-type scope, submit button.
 * @startingPoint section="Forms" subtitle="Global search with content-type scope" viewport="700x140"
 */
export interface SearchFieldProps extends React.HTMLAttributes<HTMLFormElement> {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: (value?: string) => void;
  /** Content-type scopes, e.g. ["Everything","Tools","Manuals","Publications","People"]. */
  scopes?: string[];
  scope?: string;
  onScopeChange?: (value: string) => void;
  tone?: "light" | "dark";
  buttonLabel?: string;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
