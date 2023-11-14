import { CheckboxBtnSize } from "../../CheckboxBtn/types";

export interface Btn {
  id: number;
  title: string;
  size: CheckboxBtnSize;
}

export interface CheckboxPanelProps {
  className?: string;
  setOption: (btnId: number) => void;
  btns: Btn[];
}
