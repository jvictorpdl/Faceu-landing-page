import * as React from "react";

export interface SiteFooterColumn { title: string; links: Array<string | { label: string; href?: string }> }
export interface SiteFooterSocial { icon: string; label: string; href?: string }

/**
 * Deepest-navy closing band with wordmark, link columns and a mono legal rule.
 * @startingPoint section="Navigation" subtitle="Navy footer with link columns" viewport="1240x420"
 */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  blurb?: React.ReactNode;
  columns?: SiteFooterColumn[];
  social?: SiteFooterSocial[];
  legal?: React.ReactNode;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
