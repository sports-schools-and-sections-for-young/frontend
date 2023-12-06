import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckboxPanel from "./CheckboxPanel";
import { CheckboxBtnSize } from "../CheckboxBtn/types";
import { distanceButtons } from "../../../utils/constants/distanceButtons.ts";

const meta = {
  title: "ui/CheckboxPanel",
  component: CheckboxPanel,
  parameters: {
    docs: {
      description: {
        component: "составной чекбокс",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

function Render() {
  const [distance, setDistance] = useState(0);

  return (
    <CheckboxPanel
      activeOption={distance}
      setOption={(option) => setDistance(option)}
      btns={distanceButtons}
    />
  );
}

export const CheckboxButtonPanelPrimary: Story = {
  args: {
    className: "custom-class",
    btns: [
      { id: 1, title: "не важно", size: CheckboxBtnSize.SECONDARY },
      { id: 2, title: "1 км от дома", size: CheckboxBtnSize.SECONDARY },
      { id: 3, title: "3 км от дома", size: CheckboxBtnSize.SECONDARY },
    ],
    activeOption: 0,
  },
  render: Render,
};
