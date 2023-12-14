import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface ITitleWithMobileNavigateProp
  extends HTMLAttributes<HTMLDivElement> {
  isFilter?: boolean;
  toggleFilterPanel?: Dispatch<SetStateAction<boolean>>;
  clearFilters?: () => void;
}
