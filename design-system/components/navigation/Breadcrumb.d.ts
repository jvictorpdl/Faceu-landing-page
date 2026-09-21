import * as React from "react";

export interface BreadcrumbItem { label: string; href?: string }

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Ordered trail; the last item renders as the current page. */
  items?: Array<string | BreadcrumbItem>;
  tone?: "light" | "dark";
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
