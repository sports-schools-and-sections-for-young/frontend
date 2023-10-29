import { ButtonHTMLAttributes } from "react";

export enum ButtonFeature {
  FORWARD = "forward",
  BACK = "back",
  SELECT = "select",
  CANCEL = "cancel",
  OTHER = "other",
}

export enum ButtonHeight {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  PALE = "pale",
}

export enum IconSide {
  LEFT = "leftIcon",
  RIGHT = "rightIcon",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  height: ButtonHeight;
  withMinWidth?: boolean;
  color: ButtonColor;
  icon?: string;
  iconAlt?: string;
  iconSide?: IconSide;
  rightPadding?: boolean;
  mainFont?: boolean;
  feature: ButtonFeature;
  title: string;
}
