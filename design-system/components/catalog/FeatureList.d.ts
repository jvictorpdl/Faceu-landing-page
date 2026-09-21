import * as React from "react";

export interface FeatureListItem { title: string; description?: string; icon?: string }

export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  items?: Array<string | FeatureListItem>;
  columns?: 1 | 2 | 3;
  tone?: "light" | "dark";
  /** Default Lucide marker when an item has no icon. */
  marker?: string;
}
export declare function FeatureList(props: FeatureListProps): JSX.Element;
