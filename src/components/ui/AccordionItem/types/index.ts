import { LiHTMLAttributes } from "react";

export interface AccordionItemProps extends LiHTMLAttributes<HTMLLIElement> {
  title: string;
  description: string;
  oneChecked: string | null;
}
