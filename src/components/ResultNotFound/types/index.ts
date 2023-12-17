import { Dispatch, SetStateAction } from "react";

export enum ActionType {
  ADD,
  FIND,
}

export interface ResultNotFoundProps {
  setStep?: Dispatch<SetStateAction<number>>;
  step?: number;
  title?: string;
  subtitle?: string;
  type?: ActionType;
}
