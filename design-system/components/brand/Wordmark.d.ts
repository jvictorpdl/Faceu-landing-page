import * as React from "react";

/**
 * FACEU's type-set wordmark — placeholder for a real logo file, which the brief did not include.
 * @startingPoint section="Brand" subtitle="Type-set FACEU wordmark, light and dark" viewport="700x150"
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "dark" = navy type for light backgrounds · "light" = white type for navy backgrounds. */
  tone?: "dark" | "light";
  /** Cap height of the wordmark in px. Default 22. */
  size?: number;
  descriptor?: string;
  showDescriptor?: boolean;
  href?: string;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
