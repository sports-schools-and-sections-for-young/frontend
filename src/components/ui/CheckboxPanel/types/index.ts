import { HTMLAttributes } from "react";
import { CheckboxBtnSize } from "../../CheckboxBtn/types";

export interface Btn {
  id: number;
  title: string;
  size: CheckboxBtnSize;
}

export interface CheckboxPanelProps extends HTMLAttributes<HTMLDivElement> {
  activeOption: number;
  setOption: (option: number) => void;
  btns: Btn[];
}
