import * as React from "react";

export interface TeamCardLink { icon?: string; label: string; href?: string }

/**
 * A project member presented as part of the research structure.
 * @startingPoint section="Catalog" subtitle="Team member card with role and profiles" viewport="700x420"
 */
export interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Role in the project, e.g. "Project coordination". */
  role?: string;
  /** Academic/professional title, e.g. "PhD, Computer Engineering". */
  title?: string;
  institution?: string;
  expertise?: string;
  bio?: string;
  /** Portrait URL; omitted renders a "Portrait pending" placeholder — never a drawn avatar. */
  photo?: string;
  /** Lattes, ORCID, LinkedIn, ResearchGate, institutional page. */
  links?: TeamCardLink[];
}
export declare function TeamCard(props: TeamCardProps): JSX.Element;
