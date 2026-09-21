import * as React from "react";

/**
 * A downloadable document with all the metadata a reader needs before clicking.
 * @startingPoint section="Catalog" subtitle="Manual row with version, format and size" viewport="700x150"
 */
export interface DocumentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  /** Owning tool name — also folded into the descriptive download label. */
  tool?: string;
  type?: "User manual" | "Technical manual" | "Quick start guide" | "Report" | string;
  /** e.g. "Version 2.1". */
  version?: string;
  language?: string;
  format?: string;
  /** e.g. "4.2 MB". */
  fileSize?: string;
  /** e.g. "March 2026". */
  updatedAt?: string;
  /** Marks this as the current version in a version history. */
  current?: boolean;
  layout?: "row" | "stack";
  onDownload?: React.MouseEventHandler;
  href?: string;
}
export declare function DocumentCard(props: DocumentCardProps): JSX.Element;
