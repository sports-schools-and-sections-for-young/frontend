import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./types";

export default {
  title: "widgets/ProgressBar",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <ProgressBar {...args} currentStep={currentStep} setStep={setCurrentStep} />
  );
};

export const Default = Template.bind({});
Default.args = {};
