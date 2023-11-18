import { ButtonHTMLAttributes } from "react";

export enum CheckboxBtnSize {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface CheckboxBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive: boolean;
  size: CheckboxBtnSize;
}
