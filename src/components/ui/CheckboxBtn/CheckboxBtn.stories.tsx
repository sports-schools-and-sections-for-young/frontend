import type { Meta, StoryObj } from "@storybook/react";
import CheckboxBtn from "./CheckboxBtn";
import { CheckboxBtnSize } from "./types";

const meta = {
  title: "ui/CheckboxBtn",
  component: CheckboxBtn,
  parameters: {
    docs: {
      description: {
        component: "кнопка составного чекбокса",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxPrimaryButton: Story = {
  args: {
    type: "button",
    isActive: false,
    size: CheckboxBtnSize.PRIMARY,
    children: <> не важно</>,
  },
};

export const CheckboxSecondaryButton: Story = {
  args: {
    type: "button",
    isActive: false,
    size: CheckboxBtnSize.SECONDARY,
    children: <> 1 км от дома</>,
  },
};
