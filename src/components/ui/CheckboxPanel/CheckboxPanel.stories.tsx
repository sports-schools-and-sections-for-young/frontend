import type { Meta, StoryObj } from "@storybook/react";
import CheckboxPanel from "./CheckboxPanel";
import { CheckboxBtnSize } from "../CheckboxBtn/types";

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

export const CheckboxButtonPanelPrimary: Story = {
  args: {
    className: "custom-class",
    btns: [
      { id: 1, title: "не важно", size: CheckboxBtnSize.PRIMARY },
      { id: 2, title: "1 км от дома", size: CheckboxBtnSize.PRIMARY },
      { id: 3, title: "3 км от дома", size: CheckboxBtnSize.PRIMARY },
    ],
  },
};

export const CheckboxButtonPanelSecondary: Story = {
  args: {
    className: "custom-class",
    btns: [
      { id: 1, title: "не важно", size: CheckboxBtnSize.SECONDARY },
      { id: 2, title: "1 км от дома", size: CheckboxBtnSize.SECONDARY },
      { id: 3, title: "3 км от дома", size: CheckboxBtnSize.SECONDARY },
    ],
  },
};
