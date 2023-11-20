import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
