import * as React from "react";

/**
 * The FACEU container: 14px radius, 1px hairline, no shadow at rest.
 * @startingPoint section="Core" subtitle="Hairline cards, light / subtle / gold / navy" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  tone?: "light" | "subtle" | "gold" | "dark" | "hero";
  /** CSS padding value. Default var(--space-6). */
  padding?: string;
  /** Adds the hover lift without making it a link. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
}
export declare function Card(props: CardProps): JSX.Element;
