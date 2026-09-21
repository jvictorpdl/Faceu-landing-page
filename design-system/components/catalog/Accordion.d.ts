import * as React from "react";

export interface AccordionItem { title: string; content: React.ReactNode }

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
