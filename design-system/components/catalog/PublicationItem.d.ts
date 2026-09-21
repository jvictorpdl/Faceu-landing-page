import * as React from "react";

export interface PublicationItemProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  /** Author string in the project's citation order. */
  authors?: string;
  year?: string | number;
  /** Journal, conference or report series. */
  venue?: string;
  /** e.g. "Conference paper", "Technical report", "Dissertation". */
  type?: string;
  doi?: string;
  /** Publisher / landing page. */
  href?: string;
  /** Direct PDF, only where redistribution is permitted. */
  pdfHref?: string;
}
export declare function PublicationItem(props: PublicationItemProps): JSX.Element;
