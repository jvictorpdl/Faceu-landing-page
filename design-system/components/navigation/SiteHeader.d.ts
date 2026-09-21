import * as React from "react";

/**
 * The site's primary navigation bar — translucent, blurred, hairline underline.
 * @startingPoint section="Navigation" subtitle="Sticky site header, light and navy" viewport="1240x160"
 */
export interface SiteHeaderNavItem { label: string; href?: string }

export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Primary nav entries — FACEU ships Home · About · Focus Areas · Tools · Team · Resources · Research · Contact. */
  items?: Array<string | SiteHeaderNavItem>;
  /** Label of the current page. */
  active?: string;
  onNavigate?: (label: string) => void;
  tone?: "light" | "dark";
  /** Overrides the default right-hand Button. */
  cta?: React.ReactNode;
  /** Renders the search IconButton when provided. */
  onSearch?: () => void;
  sticky?: boolean;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
