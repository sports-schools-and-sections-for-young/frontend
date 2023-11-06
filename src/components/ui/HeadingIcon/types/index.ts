export enum headingLevel {
  H1 = "1",
  H2 = "2",
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
