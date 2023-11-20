export enum headingLevel {
  H2 = "2",
  H4 = "4",
}

export enum view {
  WHITE = "white",
  BLUE = "blue",
}

export interface HeadingIconProps {
  className?: string;
  headingLevel: headingLevel;
  title: string;
  view: view;
}
