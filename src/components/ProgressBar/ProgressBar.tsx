import React, { useCallback } from "react";
import { IconSize, IconColor } from "../ui/Icon/types";
import Icon from "../ui/Icon/Icon";
import { stepsData } from "../../utils/constants/stepsData";
import styles from "./ProgressBar.module.scss";
import { ProgressBarProps } from "./types";
import { useResize } from "../../hooks/useResize.tsx";

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, setStep }) => {
  const handleStepClick = useCallback(
    (stepId: number) => {
      setStep(stepId);
    },
    [setStep],
  );

  const { isMobileScreen } = useResize();

  const getButtonClass = (stepId: number) => {
    if (stepId === currentStep) {
      return `${styles.icon} ${styles.active}`;
    }
    if (stepId < currentStep) {
      return `${styles.icon} ${styles.complete}`;
    }
    return `${styles.icon} ${styles.incomplete}`;
  };

  const getIconColor = (stepId: number) => {
    if (stepId === currentStep) {
      return IconColor.PRIMARY;
    }
    if (stepId < currentStep) {
      return IconColor.SECONDARY;
    }
    return IconColor.PALE;
  };

  const renderLine = (stepId: number) => {
    const lineClass =
      stepId <= currentStep
        ? `${styles.line} ${styles["line-complete"]}`
        : styles.line;
    return <div key={`line-${stepId}`} className={lineClass} />;
  };

  return (
    <div className={styles.progressBar}>
      {stepsData.flatMap((stepData, index) => [
        index > 0 ? renderLine(stepData.id) : null,
        <button
          key={stepData.id}
          className={getButtonClass(stepData.id)}
          onClick={() => handleStepClick(stepData.id)}
          type="button"
        >
          <Icon
            type={stepData.iconType}
            size={!isMobileScreen ? IconSize.NORMAL : IconSize.EXTRA_SMALL}
            color={getIconColor(stepData.id)}
          />
        </button>,
      ])}
    </div>
  );
};

export default ProgressBar;
