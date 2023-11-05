export enum headingLevel {
  H2 = "2",
  H3 = "3",
}

export enum view {
  WHITE = "white",
  BLUE = "blue",
}

export interface HeadingIconProps {
  headingLevel: headingLevel;
  title: string;
  view: view;
}
