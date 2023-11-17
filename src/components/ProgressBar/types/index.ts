import { IconTypes } from "../../ui/Icon/types";

export interface StepData {
  id: number;
  iconType: IconTypes;
}

export interface ProgressBarProps {
  currentStep: number;
  setStep: (stepId: number) => void;
}
