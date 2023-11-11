import type { Meta, StoryObj } from "@storybook/react";
import CheckboxPanel from "./CheckboxPanel";

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

export const CheckboxButtonPanel: Story = {
  args: {
    className: "custom-class",
    btns: [
      { id: 1, title: "не важно" },
      { id: 2, title: "1 км от дома" },
      { id: 3, title: "3 км от дома" },
    ],
  },
};
