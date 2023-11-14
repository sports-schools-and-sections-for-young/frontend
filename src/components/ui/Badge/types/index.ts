import { ButtonHTMLAttributes } from "react";

export enum BadgeColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive: boolean;
  color: BadgeColor;
}
