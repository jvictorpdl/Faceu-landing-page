import * as React from "react";

export interface NavTabItem { label: string; count?: number }

export interface NavTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | NavTabItem>;
  active?: string;
  onChange?: (label: string) => void;
  tone?: "light" | "dark";
}
export declare function NavTabs(props: NavTabsProps): JSX.Element;
